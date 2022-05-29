## Vertex input description

### Introduction
Creating a CPU visible buffer and using `memcpy` to copy the vertex data into it directly

### Vertex shader

```c++
#version 450
#extension GL_ARB_separate_shader_objects : enable

layout(location = 0) in vec2 inPosition;
layout(location = 1) in vec3 inColor;

layout(location = 0) out vec3 fragColor;

void main() {
    gl_Position = vec4(inPosition, 0.0, 1.0);
    fragColor = inColor;
}
```

The `inPosition` and `inColor` variables are vertex attributes, They're properties that are specified per-vertex in the vertex buffer, just like we manually specified a position and color per vertex using the two arrays

layout(location = x) annotations assign indices to the inputs that we can later use to reference them

like dvec3 64 bit vectors, use multiple slots. That means that the index after it must be at least 2 higher

```c++
layout(location = 0) in dvec3 inPosition;
layout(location = 2) in vec3 inColor;
```

### Vertex data

Using `glm` library

```c++
#include <glm/glm.hpp>

struct Vertex {
    glm::vec2 pos;
    glm::vec3 color;
};

const std::vector<Vertex> vertices = {
    {{0.0f, -0.5f}, {1.0f, 0.0f, 0.0f}},
    {{0.5f, 0.5f}, {0.0f, 1.0f, 0.0f}},
    {{-0.5f, 0.5f}, {0.0f, 0.0f, 1.0f}}
};
```

### Binding descriptions
tell Vulkan how to pass this data format to the vertex shader once it's been uploaded into GPU memory

A vertex binding describes at which rate to load data from memory throughout the vertices. It specifies the number of bytes between data entries and whether to move to the next data entry after each vertex or after each instance.

```c++
struct Vertex {
    ...

    static VkVertexInputBindingDescription getBindingDescription() {
        VkVertexInputBindingDescription bindingDescription{};
        // The binding parameter specifies the index of the binding in the array of bindings.
        bindingDescription.binding = 0;
        // The stride parameter specifies the number of bytes from one entry to the next
        bindingDescription.stride = sizeof(Vertex);
        bindingDescription.inputRate = VK_VERTEX_INPUT_RATE_VERTEX;

        return bindingDescription;
    }
    
    ...
}
```

### Attribute descriptions

`VkVertexInputAttributeDescription`. We're going to add another helper function to Vertex to fill in these structs.

```c++
struct Vertex {
    ...

    static std::array<VkVertexInputAttributeDescription, 2> getAttributeDescriptions() {
        std::array<VkVertexInputAttributeDescription, 2> attributeDescriptions{};

        // The binding parameter tells Vulkan from which binding the per-vertex data comes.
        attributeDescriptions[0].binding = 0;
        // The location parameter references the location directive of the input in the vertex shader
        attributeDescriptions[0].location = 0;
        // The input in the vertex shader with location 0 is the position, which has two 32-bit float components.
        // The format parameter implicitly defines the byte size of attribute data 
        attributeDescriptions[0].format = VK_FORMAT_R32G32_SFLOAT;
        // the offset parameter specifies the number of bytes since the start of the per-vertex data to read from.
        attributeDescriptions[0].offset = offsetof(Vertex, pos);

        attributeDescriptions[1].binding = 0;
        attributeDescriptions[1].location = 1;
        attributeDescriptions[1].format = VK_FORMAT_R32G32B32_SFLOAT;
        attributeDescriptions[1].offset = offsetof(Vertex, color);

        return attributeDescriptions;
    }
};
```

### Pipeline vertex input

set up the graphics pipeline to accept vertex data in this format by referencing the structures in `createGraphicsPipeline`

```c++
auto bindingDescription = Vertex::getBindingDescription();
auto attributeDescriptions = Vertex::getAttributeDescriptions();

vertexInputInfo.vertexBindingDescriptionCount = 1;
vertexInputInfo.vertexAttributeDescriptionCount = static_cast<uint32_t>(attributeDescriptions.size());
vertexInputInfo.pVertexBindingDescriptions = &bindingDescription;
vertexInputInfo.pVertexAttributeDescriptions = attributeDescriptions.data();
```

## Vertex buffer creation

### Introduction
Buffers in Vulkan are regions of memory used for storing arbitrary data that can be read by the graphics card. They can be used to store vertex data

### Buffer creation

`createVertexBuffer`

```c++
void initVulkan() {
    ...
    createCommandPool();
    createVertexBuffer();
    createCommandBuffers();
    ...
}

...

void createVertexBuffer() {

}
```

```c++
void createVertexBuffer() {
    VkBufferCreateInfo bufferInfo{};
    bufferInfo.sType = VK_STRUCTURE_TYPE_BUFFER_CREATE_INFO;
    // which specifies the size of the buffer in bytes. Calculating the byte size of the vertex data is straightforward with sizeof
    bufferInfo.size = sizeof(vertices[0]) * vertices.size();
    // which indicates for which purposes the data in the buffer is going to be used. It is possible to specify multiple purposes using a bitwise or. 
    bufferInfo.usage = VK_BUFFER_USAGE_VERTEX_BUFFER_BIT;
    // buffers can also be owned by a specific queue family or be shared between multiple at the same time. 
    // The buffer will only be used from the graphics queue, so we can stick to exclusive access.
    bufferInfo.sharingMode = VK_SHARING_MODE_EXCLUSIVE;

    if (vkCreateBuffer(device, &bufferInfo, nullptr, &vertexBuffer) != VK_SUCCESS) {
        throw std::runtime_error("failed to create vertex buffer!");
    }
    ...
}
```

The buffer should be available for use in rendering commands until the end of the program and it does not depend on the swap chain, so we'll clean it up in the original `cleanup` function:

```c++
void cleanup() {
    cleanupSwapChain();

    vkDestroyBuffer(device, vertexBuffer, nullptr);

    ...
}
```

### Memory requirements

The buffer has been created, but it doesn't actually have any memory assigned to it yet. The first step of allocating memory for the buffer is to query its memory requirements using the aptly named `vkGetBufferMemoryRequirements` function.

VkMemoryRequirements:

* `size`: The size of the required amount of memory in bytes, may differ from `bufferInfo.size`.
* `alignment`: The offset in bytes where the buffer begins in the allocated region of memory, depends on `bufferInfo.usage` and `bufferInfo.flags`.
* `memoryTypeBits`: Bit field of the memory types that are suitable for the buffer.

```c++
void createVertexBuffer() {
    ...
    VkMemoryRequirements memRequirements;
    vkGetBufferMemoryRequirements(device, vertexBuffer, &memRequirements);
    ...
}
```

findMemoryType:

Graphics cards can offer different types of memory to allocate from. Each type of memory varies in terms of allowed operations and performance characteristics. We need to combine the requirements of the buffer and our own application requirements to find the right type of memory to use

```c++
uint32_t findMemoryType(uint32_t typeFilter, VkMemoryPropertyFlags properties) {
    // The VkPhysicalDeviceMemoryProperties structure has two arrays memoryTypes and memoryHeaps. 
    // Memory heaps are distinct memory resources like dedicated VRAM and swap space in RAM for when VRAM runs out.
    VkPhysicalDeviceMemoryProperties memProperties;
    vkGetPhysicalDeviceMemoryProperties(physicalDevice, &memProperties);

    for (uint32_t i = 0; i < memProperties.memoryTypeCount; i++) {
        if ((typeFilter & (1 << i)) && (memProperties.memoryTypes[i].propertyFlags & properties) == properties) {
            return i;
        }
    }

    throw std::runtime_error("failed to find suitable memory type!");
}
```

### Memory allocation

We can allocate the memory by filling in the `VkMemoryAllocateInfo` structure

Create a class member to store the handle to the memory and allocate it with `vkAllocateMemory`.

```c++
VkBuffer vertexBuffer;
VkDeviceMemory vertexBufferMemory;
```

```c++
void createVertexBuffer() {
    ...
    VkMemoryAllocateInfo allocInfo{};
    allocInfo.sType = VK_STRUCTURE_TYPE_MEMORY_ALLOCATE_INFO;
    allocInfo.allocationSize = memRequirements.size;
    allocInfo.memoryTypeIndex = findMemoryType(memRequirements.memoryTypeBits, VK_MEMORY_PROPERTY_HOST_VISIBLE_BIT | VK_MEMORY_PROPERTY_HOST_COHERENT_BIT);

    if (vkAllocateMemory(device, &allocInfo, nullptr, &vertexBufferMemory) != VK_SUCCESS) {
        throw std::runtime_error("failed to allocate vertex buffer memory!");
    }

    // if memory allocation was successful, then we can now associate this memory with the buffer using
    // fourth parameter: offset within the region of memory. Since this memory is allocated specifically for this the vertex buffer, the offset is simply 0. If the offset is non-zero, then it is required to be divisible by memRequirements.alignment.
    vkBindBufferMemory(device, vertexBuffer, vertexBufferMemory, 0);
    ...
}
```

```c++
void cleanup() {
    cleanupSwapChain();

    vkDestroyBuffer(device, vertexBuffer, nullptr);
    vkFreeMemory(device, vertexBufferMemory, nullptr);
    ...
```

### Filling the vertex buffer
Copy the vertex data to the buffer. This is done by mapping the buffer memory into CPU accessible memory with vkMapMemory.

```c++
void createVertexBuffer() {
    ...
    void* data;
    // This function allows us to access a region of the specified memory resource defined by an offset and size
    // The `offset` and `size` here are 0 and `bufferInfo.size`
    //      * It is also possible to specify the special value VK_WHOLE_SIZE to map all of the memory.
    // second to last parameter can be used to specify flags
    // The last parameter specifies the output for the pointer to the mapped memory.
    vkMapMemory(device, vertexBufferMemory, 0, bufferInfo.size, 0, &data);
        memcpy(data, vertices.data(), (size_t) bufferInfo.size);
    vkUnmapMemory(device, vertexBufferMemory);
}
```

You can now use `memcpy` the vertex data to the mapped memory and `unmap` it again using `vkUnmapMemory`. 

Note

* The driver may not immediately copy the data into the buffer memory, for example because of caching. It is also possible that writes to the buffer are not visible in the mapped memory yet. There are two ways to deal with that problem:

  * Use a `memory` heap that is host coherent, indicated with `VK_MEMORY_PROPERTY_HOST_COHERENT_BIT`
  * Call `vkFlushMappedMemoryRanges` after writing to the mapped memory, and call `vkInvalidateMappedMemoryRanges` before reading from the mapped memory

The first approach which ensures that the mapped memory always matches the contents of the allocated memory. Do keep in mind that this may lead to slightly worse performance than explicit flushing

Flushing memory ranges or using a coherent memory heap means that the driver will be aware of our writes to the buffer, but it doesn't mean that they are actually visible on the GPU yet. The transfer of data to the GPU is an operation that happens in the background and the specification simply tells us that it is guaranteed to be complete as of the next call to vkQueueSubmit.

### Binding the vertex buffer

binding the vertex buffer during rendering operations.

```c++
void createCommandBuffers() {
  ...

  for (size_t i = 0; i < commandBuffers.size(); i++) {

    ...

    vkCmdBeginRenderPass(commandBuffers[i], &renderPassInfo, VK_SUBPASS_CONTENTS_INLINE);

        vkCmdBindPipeline(commandBuffers[i], VK_PIPELINE_BIND_POINT_GRAPHICS, graphicsPipeline);

        VkBuffer vertexBuffers[] = {vertexBuffer};
        VkDeviceSize offsets[] = {0};
        vkCmdBindVertexBuffers(commandBuffers[i], 0, 1, vertexBuffers, offsets);

        vkCmdDraw(commandBuffers[i], static_cast<uint32_t>(vertices.size()), 1, 0, 0);

    vkCmdEndRenderPass(commandBuffers[i]);

    ...

  }

  ...

}
```

## Staging buffer

### Introduction

The memory type that allows us to access it from the CPU may not be the most optimal memory type for the graphics card itself to read from. The most optimal memory has the `VK_MEMORY_PROPERTY_DEVICE_LOCAL_BIT` flag and is usually not accessible by the CPU on dedicated graphics cards

### Transfer queue

The buffer copy command requires a queue family that supports transfer operations, which is indicated using `VK_QUEUE_TRANSFER_BIT`. The good news is that any queue family with `VK_QUEUE_GRAPHICS_BIT` or `VK_QUEUE_COMPUTE_BIT` capabilities already implicitly support `VK_QUEUE_TRANSFER_BIT` operations. The implementation is not required to explicitly list it in queueFlags in those cases.

* Modify `QueueFamilyIndices` and `findQueueFamilies` to explicitly look for a queue family with the `VK_QUEUE_TRANSFER_BIT` bit, but not the `VK_QUEUE_GRAPHICS_BIT`.
* Modify `createLogicalDevice` to request a handle to the transfer queue
* Create a second command pool for command buffers that are submitted on the transfer queue family
* Change the `sharingMode` of resources to be `VK_SHARING_MODE_CONCURRENT` and specify both the graphics and transfer queue families
* Submit any transfer commands like `vkCmdCopyBuffer` (which we'll be using in this chapter) to the transfer queue instead of the graphics queue

### Abstracting buffer creation

Create a new function `createBuffer` and move the code in `createVertexBuffer` (except mapping) to it

```c++
void createBuffer(VkDeviceSize size, VkBufferUsageFlags usage, VkMemoryPropertyFlags properties, VkBuffer& buffer, VkDeviceMemory& bufferMemory) {
    VkBufferCreateInfo bufferInfo{};
    bufferInfo.sType = VK_STRUCTURE_TYPE_BUFFER_CREATE_INFO;
    bufferInfo.size = size;
    bufferInfo.usage = usage;
    bufferInfo.sharingMode = VK_SHARING_MODE_EXCLUSIVE;

    if (vkCreateBuffer(device, &bufferInfo, nullptr, &buffer) != VK_SUCCESS) {
        throw std::runtime_error("failed to create buffer!");
    }

    VkMemoryRequirements memRequirements;
    vkGetBufferMemoryRequirements(device, buffer, &memRequirements);

    VkMemoryAllocateInfo allocInfo{};
    allocInfo.sType = VK_STRUCTURE_TYPE_MEMORY_ALLOCATE_INFO;
    allocInfo.allocationSize = memRequirements.size;
    allocInfo.memoryTypeIndex = findMemoryType(memRequirements.memoryTypeBits, properties);

    if (vkAllocateMemory(device, &allocInfo, nullptr, &bufferMemory) != VK_SUCCESS) {
        throw std::runtime_error("failed to allocate buffer memory!");
    }

    vkBindBufferMemory(device, buffer, bufferMemory, 0);
}
```

```c++
void createVertexBuffer() {
    VkDeviceSize bufferSize = sizeof(vertices[0]) * vertices.size();
    createBuffer(bufferSize, VK_BUFFER_USAGE_VERTEX_BUFFER_BIT, VK_MEMORY_PROPERTY_HOST_VISIBLE_BIT | VK_MEMORY_PROPERTY_HOST_COHERENT_BIT, vertexBuffer, vertexBufferMemory);

    void* data;
    vkMapMemory(device, vertexBufferMemory, 0, bufferSize, 0, &data);
        memcpy(data, vertices.data(), (size_t) bufferSize);
    vkUnmapMemory(device, vertexBufferMemory);
}
```

### Using a staging buffer

Create `stagingBuffer` (host visible buffer) and `vertexBuffer` (class propetry)

```c++
void createVertexBuffer() {
    VkDeviceSize bufferSize = sizeof(vertices[0]) * vertices.size();

    VkBuffer stagingBuffer;
    VkDeviceMemory stagingBufferMemory;
    createBuffer(bufferSize, VK_BUFFER_USAGE_TRANSFER_SRC_BIT, VK_MEMORY_PROPERTY_HOST_VISIBLE_BIT | VK_MEMORY_PROPERTY_HOST_COHERENT_BIT, stagingBuffer, stagingBufferMemory);

    void* data;
    vkMapMemory(device, stagingBufferMemory, 0, bufferSize, 0, &data);
        memcpy(data, vertices.data(), (size_t) bufferSize);
    vkUnmapMemory(device, stagingBufferMemory);

    createBuffer(bufferSize, VK_BUFFER_USAGE_TRANSFER_DST_BIT | VK_BUFFER_USAGE_VERTEX_BUFFER_BIT, VK_MEMORY_PROPERTY_DEVICE_LOCAL_BIT, vertexBuffer, vertexBufferMemory);
}
```

We're now using a new `stagingBuffer` with `stagingBufferMemory` for mapping and copying the vertex data:

* `VK_BUFFER_USAGE_TRANSFER_SRC_BIT`: Buffer can be used as source in a memory transfer operation.
* `VK_BUFFER_USAGE_TRANSFER_DST_BIT`: Buffer can be used as destination in a memory transfer operation.


The `vertexBuffer` is now allocated from a memory type that is device local, which generally means that we're not able to use `vkMapMemory`. However, we can copy data from the `stagingBuffer` to the `vertexBuffer`. We have to indicate that we intend to do that by specifying the transfer source flag for the `stagingBuffer` and the transfer destination flag for the `vertexBuffer`, along with the vertex buffer usage flag.

`copyBuffer`

first allocate a temporary command buffer. ( create a separate command pool ), use the `VK_COMMAND_POOL_CREATE_TRANSIENT_BIT` flag during command pool

```c++
void copyBuffer(VkBuffer srcBuffer, VkBuffer dstBuffer, VkDeviceSize size) {
    VkCommandBufferAllocateInfo allocInfo{};
    allocInfo.sType = VK_STRUCTURE_TYPE_COMMAND_BUFFER_ALLOCATE_INFO;
    allocInfo.level = VK_COMMAND_BUFFER_LEVEL_PRIMARY;
    allocInfo.commandPool = commandPool;
    allocInfo.commandBufferCount = 1;

    VkCommandBuffer commandBuffer;
    vkAllocateCommandBuffers(device, &allocInfo, &commandBuffer);

    // And immediately start recording the command buffer:
    VkCommandBufferBeginInfo beginInfo{};
    beginInfo.sType = VK_STRUCTURE_TYPE_COMMAND_BUFFER_BEGIN_INFO;
    // -> We're only going to use the command buffer once and wait with returning from the function until - 
    // the copy operation has finished executing, so use the flag
    beginInfo.flags = VK_COMMAND_BUFFER_USAGE_ONE_TIME_SUBMIT_BIT;

    vkBeginCommandBuffer(commandBuffer, &beginInfo);

        VkBufferCopy copyRegion{};
        copyRegion.size = size;
        copyRegion.srcOffset = 0; // Optional
        copyRegion.dstOffset = 0; // Optional
        // Contents of buffers are transferred using the vkCmdCopyBuffer command.
        //    It is not possible to specify `VK_WHOLE_SIZE` here, unlike the vkMapMemory command.
        vkCmdCopyBuffer(commandBuffer, srcBuffer, dstBuffer, 1, &copyRegion);

    // This command buffer only contains the copy command, so we can stop recording right after that.
    vkEndCommandBuffer(commandBuffer);

    VkSubmitInfo submitInfo{};
    submitInfo.sType = VK_STRUCTURE_TYPE_SUBMIT_INFO;
    submitInfo.commandBufferCount = 1;
    submitInfo.pCommandBuffers = &commandBuffer;

    // there are no events we need to wait on this time
    // to wait on this transfer to complete. 
    //    -> We could use a fence and wait with vkWaitForFences
    //    -> wait for the transfer queue to become idle with vkQueueWaitIdle.
    vkQueueSubmit(graphicsQueue, 1, &submitInfo, VK_NULL_HANDLE);
    vkQueueWaitIdle(graphicsQueue);

    // clean up the command buffer used for the transfer operation
    vkFreeCommandBuffers(device, commandPool, 1, &commandBuffer);
}
```

Move the vertex data to the device local buffer

```c++
void createVertexBuffer() {
    ...

    copyBuffer(stagingBuffer, vertexBuffer, bufferSize);

    vkDestroyBuffer(device, stagingBuffer, nullptr);
    vkFreeMemory(device, stagingBufferMemory, nullptr);
}
```

### Conclusion
It should be noted that in a real world application, you're not supposed to actually call `vkAllocateMemory` for every individual buffer. The maximum number of simultaneous memory allocations is limited by the `maxMemoryAllocationCount` physical device limit, which may be as low as `4096` even on high end hardware like an `NVIDIA GTX 1080`. The right way to allocate memory for a large number of objects at the same time is to create a custom allocator that splits up a single allocation among many different objects by using the offset parameters that we've seen in many functions.

You can either implement such an allocator yourself, or use the [VulkanMemoryAllocator](https://github.com/GPUOpen-LibrariesAndSDKs/VulkanMemoryAllocator) library provided by the GPUOpen initiative.


## Index buffer

### Introduction

The 3D meshes you'll be rendering in a real world application will often share vertices between multiple triangles.

<div align=center>
<img src="../_images/graphics/vertex_vs_index.svg" width="600">
</div>

It allows you to reorder the vertex data, and reuse existing data for multiple vertices. 

### Index buffer creation

Modify the vertex data

```c++
const std::vector<Vertex> vertices = {
    {{-0.5f, -0.5f}, {1.0f, 0.0f, 0.0f}},
    {{0.5f, -0.5f}, {0.0f, 1.0f, 0.0f}},
    {{0.5f, 0.5f}, {0.0f, 0.0f, 1.0f}},
    {{-0.5f, 0.5f}, {1.0f, 1.0f, 1.0f}}
};

// It is possible to use either `uint16_t` or `uint32_t` for your index buffer depending on the number of entries in vertices.
const std::vector<uint16_t> indices = {
    0, 1, 2, 2, 3, 0
};
```

Define two new class members to hold the resources for the index buffer:

```c++
VkBuffer vertexBuffer;
VkDeviceMemory vertexBufferMemory;
VkBuffer indexBuffer;
VkDeviceMemory indexBufferMemory;
```

`createIndexBuffer` function

```c++
void initVulkan() {
    ...
    createVertexBuffer();
    createIndexBuffer();
    ...
}

void createIndexBuffer() {
    VkDeviceSize bufferSize = sizeof(indices[0]) * indices.size();

    VkBuffer stagingBuffer;
    VkDeviceMemory stagingBufferMemory;
    createBuffer(bufferSize, VK_BUFFER_USAGE_TRANSFER_SRC_BIT, VK_MEMORY_PROPERTY_HOST_VISIBLE_BIT | VK_MEMORY_PROPERTY_HOST_COHERENT_BIT, stagingBuffer, stagingBufferMemory);

    void* data;
    vkMapMemory(device, stagingBufferMemory, 0, bufferSize, 0, &data);
    memcpy(data, indices.data(), (size_t) bufferSize);
    vkUnmapMemory(device, stagingBufferMemory);

    createBuffer(bufferSize, VK_BUFFER_USAGE_TRANSFER_DST_BIT | VK_BUFFER_USAGE_INDEX_BUFFER_BIT, VK_MEMORY_PROPERTY_DEVICE_LOCAL_BIT, indexBuffer, indexBufferMemory);

    copyBuffer(stagingBuffer, indexBuffer, bufferSize);

    vkDestroyBuffer(device, stagingBuffer, nullptr);
    vkFreeMemory(device, stagingBufferMemory, nullptr);
}
```

The `bufferSize` is now equal to the number of indices times the size of the index type, either uint16_t or uint32_t. The usage of the `indexBuffer` should be `VK_BUFFER_USAGE_INDEX_BUFFER_BIT` instead of `VK_BUFFER_USAGE_VERTEX_BUFFER_BIT`

The index buffer should be cleaned up at the end of the program, just like the vertex buffer:

```c++
void cleanup() {
    cleanupSwapChain();

    vkDestroyBuffer(device, indexBuffer, nullptr);
    vkFreeMemory(device, indexBufferMemory, nullptr);

    vkDestroyBuffer(device, vertexBuffer, nullptr);
    vkFreeMemory(device, vertexBufferMemory, nullptr);

    ...
}
```

### Using an index buffer

changes to `createCommandBuffers`

We first need to bind the index buffer

```c++
vkCmdBindVertexBuffers(commandBuffers[i], 0, 1, vertexBuffers, offsets);

vkCmdBindIndexBuffer(commandBuffers[i], indexBuffer, 0, VK_INDEX_TYPE_UINT16);
```

Tell Vulkan to use the index buffer. Remove the `vkCmdDraw` line and replace it with `vkCmdDrawIndexed`:


```c++
vkCmdDrawIndexed(commandBuffers[i], static_cast<uint32_t>(indices.size()), 1, 0, 0, 0);
```

The first two parameters specify the number of indices and the number of instances. We're not using instancing, so just specify `1` instance. The number of indices represents the number of vertices that will be passed to the vertex buffer. The next parameter specifies an offset into the index buffer, using a value of 1 would cause the graphics card to start reading at the second index. The second to last parameter specifies an offset to add to the indices in the index buffer. The final parameter specifies an offset for instancing, which we're not using.

[Driver developers recommend](https://developer.nvidia.com/vulkan-memory-management) that you also store multiple buffers, like the vertex and index buffer, into a single `VkBuffer` and use offsets in commands like `vkCmdBindVertexBuffers`. The advantage is that your data is more cache friendly in that case, because it's closer together. It is even possible to reuse the same chunk of memory for multiple resources if they are not used during the same render operations, provided that their data is refreshed, of course. This is known as aliasing and some Vulkan functions have explicit flags to specify that you want to do this.
