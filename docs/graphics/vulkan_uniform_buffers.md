## Descriptor layout and buffer

### Introduction

A `descriptor` is a way for shaders to freely access resources like buffers and images. We're going to set up a buffer that contains the transformation matrices and have the vertex shader access them through a descriptor. Usage of descriptors consists of three parts:

* Specify a descriptor layout during pipeline creation
* Allocate a descriptor set from a descriptor pool
* Bind the descriptor set during rendering

The descriptor layout specifies the types of resources that are going to be accessed by the pipeline

uniform buffer objects (UBO)

```c++
struct UniformBufferObject {
    glm::mat4 model;
    glm::mat4 view;
    glm::mat4 proj;
};
```

```c++
layout(binding = 0) uniform UniformBufferObject {
    mat4 model;
    mat4 view;
    mat4 proj;
} ubo;

void main() {
    gl_Position = ubo.proj * ubo.view * ubo.model * vec4(inPosition, 0.0, 1.0);
    fragColor = inColor;
}
```

### Vertex shader

```c++
#version 450
#extension GL_ARB_separate_shader_objects : enable

layout(binding = 0) uniform UniformBufferObject {
    mat4 model;
    mat4 view;
    mat4 proj;
} ubo;

layout(location = 0) in vec2 inPosition;
layout(location = 1) in vec3 inColor;

layout(location = 0) out vec3 fragColor;

void main() {
    gl_Position = ubo.proj * ubo.view * ubo.model * vec4(inPosition, 0.0, 1.0);
    fragColor = inColor;
}
```

Note that the order of the `uniform`, `in` and `out` declarations doesn't matter. The binding directive is similar to the location directive for attributes.

### Descriptor set layout
The next step is to define the `UBO` on the C++ side and to tell Vulkan about this descriptor in the vertex shader

```c++
struct UniformBufferObject {
    glm::mat4 model;
    glm::mat4 view;
    glm::mat4 proj;
};
```

`createDescriptorSetLayout` function

```c++
void initVulkan() {
    ...
    createDescriptorSetLayout();
    createGraphicsPipeline();
    ...
}

...

void createDescriptorSetLayout() {

}
```

```c++
void createDescriptorSetLayout() {
    VkDescriptorSetLayoutBinding uboLayoutBinding{};
    // first two fields specify the binding used in the shader and the type of descriptor
    uboLayoutBinding.binding = 0;
    uboLayoutBinding.descriptorType = VK_DESCRIPTOR_TYPE_UNIFORM_BUFFER;
    // specifies the number of values in the array.
    // -> This could be used to specify a transformation for each of the bones in a skeleton for skeletal animation
    uboLayoutBinding.descriptorCount = 1;
}
```

```c++
// which shader stages the descriptor is going to be referenced
uboLayoutBinding.stageFlags = VK_SHADER_STAGE_VERTEX_BIT;
```

```c++
// only relevant for image sampling related descriptors
uboLayoutBinding.pImmutableSamplers = nullptr; // Optional
```

Define a new class member

All of the descriptor bindings are combined into a single `VkDescriptorSetLayout` object.

```c++
VkDescriptorSetLayout descriptorSetLayout;
VkPipelineLayout pipelineLayout;
```

Create it

```c++
VkDescriptorSetLayoutCreateInfo layoutInfo{};
layoutInfo.sType = VK_STRUCTURE_TYPE_DESCRIPTOR_SET_LAYOUT_CREATE_INFO;
layoutInfo.bindingCount = 1;
layoutInfo.pBindings = &uboLayoutBinding;

if (vkCreateDescriptorSetLayout(device, &layoutInfo, nullptr, &descriptorSetLayout) != VK_SUCCESS) {
    throw std::runtime_error("failed to create descriptor set layout!");
}
```

We need to specify the descriptor set layout during pipeline creation to tell Vulkan which descriptors the shaders will be using. Descriptor set layouts are specified in the pipeline layout object.

```c++
VkPipelineLayoutCreateInfo pipelineLayoutInfo{};
pipelineLayoutInfo.sType = VK_STRUCTURE_TYPE_PIPELINE_LAYOUT_CREATE_INFO;
pipelineLayoutInfo.setLayoutCount = 1;
pipelineLayoutInfo.pSetLayouts = &descriptorSetLayout;
```

```c++
void cleanup() {
    cleanupSwapChain();

    vkDestroyDescriptorSetLayout(device, descriptorSetLayout, nullptr);

    ...
}
```

### Uniform buffer

We should have multiple buffers, because multiple frames may be in flight at the same time and we don't want to update the buffer in preparation of the next frame while a previous one is still reading from it! We could either have a uniform buffer per frame or per swap chain image. However, since we need to refer to the uniform buffer from the command buffer that we have per swap chain image, it makes the most sense to also have a uniform buffer per swap chain image.

add new class members for `uniformBuffers`, and `uniformBuffersMemory`

```c++
VkBuffer indexBuffer;
VkDeviceMemory indexBufferMemory;

std::vector<VkBuffer> uniformBuffers;
std::vector<VkDeviceMemory> uniformBuffersMemory;
```

create a new function `createUniformBuffers` that is called after `createIndexBuffer` and allocates the buffers:

```c++
void initVulkan() {
    ...
    createVertexBuffer();
    createIndexBuffer();
    createUniformBuffers();
    ...
}

...

void createUniformBuffers() {
    VkDeviceSize bufferSize = sizeof(UniformBufferObject);

    uniformBuffers.resize(swapChainImages.size());
    uniformBuffersMemory.resize(swapChainImages.size());

    for (size_t i = 0; i < swapChainImages.size(); i++) {
        createBuffer(bufferSize, VK_BUFFER_USAGE_UNIFORM_BUFFER_BIT, VK_MEMORY_PROPERTY_HOST_VISIBLE_BIT | VK_MEMORY_PROPERTY_HOST_COHERENT_BIT, uniformBuffers[i], uniformBuffersMemory[i]);
    }
}
```

We're going to write a separate function that updates the uniform buffer with a new transformation every frame, so there will be no `vkMapMemory` here. The uniform data will be used for all draw calls, so the buffer containing it should only be destroyed when we stop rendering. Since it also depends on the number of swap chain images, which could change after a recreation,

```c++
void cleanupSwapChain() {
    ...

    for (size_t i = 0; i < swapChainImages.size(); i++) {
        vkDestroyBuffer(device, uniformBuffers[i], nullptr);
        vkFreeMemory(device, uniformBuffersMemory[i], nullptr);
    }
}
```

We also need to recreate it in `recreateSwapChain`:

```c++
void recreateSwapChain() {
    ...

    createFramebuffers();
    createUniformBuffers();
    createCommandBuffers();
}
```

### Updating uniform data

Create a new function `updateUniformBuffer` and add a call to it from the `drawFrame` function right after we know which swap chain image we're going to acquire:

```c++
void drawFrame() {
    ...

    uint32_t imageIndex;
    VkResult result = vkAcquireNextImageKHR(device, swapChain, UINT64_MAX, imageAvailableSemaphores[currentFrame], VK_NULL_HANDLE, &imageIndex);

    ...

    updateUniformBuffer(imageIndex);

    VkSubmitInfo submitInfo{};
    submitInfo.sType = VK_STRUCTURE_TYPE_SUBMIT_INFO;

    ...
}

...

void updateUniformBuffer(uint32_t currentImage) {

}
```

This function will generate a new transformation every frame to make the geometry spin around. We need to include two new headers to implement this functionality:

```c++
#define GLM_FORCE_RADIANS
#include <glm/glm.hpp>
#include <glm/gtc/matrix_transform.hpp>

// The chrono standard library header exposes functions to do precise timekeeping. We'll use this to make sure that the geometry rotates 90 degrees per second regardless of frame rate.
#include <chrono>
```

The `updateUniformBuffer` function will start out with some logic to calculate the time in seconds since rendering has started with floating point accuracy.

We will now define the `model`, `view` and `projection` transformations in the uniform buffer object. The model rotation will be a simple rotation around the Z-axis using the `time` variable:

```c++
void updateUniformBuffer(uint32_t currentImage) {
    static auto startTime = std::chrono::high_resolution_clock::now();

    auto currentTime = std::chrono::high_resolution_clock::now();
    float time = std::chrono::duration<float, std::chrono::seconds::period>(currentTime - startTime).count();

    UniformBufferObject ubo{};

    // The glm::rotate function takes an existing transformation, 
    // rotation angle and rotation axis as parameters. 
    // The glm::mat4(1.0f) constructor returns an identity matrix. 
    // Using a rotation angle of time * glm::radians(90.0f) accomplishes the purpose of rotation 90 degrees per second.
    ubo.model = glm::rotate(glm::mat4(1.0f), time * glm::radians(90.0f), glm::vec3(0.0f, 0.0f, 1.0f));

    // Look at the geometry from above at a 45 degree angle. 
    // The glm::lookAt function takes the eye position, 
    // center position and up axis as parameters.
    ubo.view = glm::lookAt(glm::vec3(2.0f, 2.0f, 2.0f), glm::vec3(0.0f, 0.0f, 0.0f), glm::vec3(0.0f, 0.0f, 1.0f));

    // Use a perspective projection with a 45 degree vertical field-of-view. 
    // The other parameters are the aspect ratio, near and far view planes. 
    // It is important to use the current swap chain extent to calculate -
    // the aspect ratio to take into account the new width and height of the window after a resize.
    ubo.proj = glm::perspective(glm::radians(45.0f), swapChainExtent.width / (float) swapChainExtent.height, 0.1f, 10.0f);

    // GLM was originally designed for OpenGL, 
    // where the Y coordinate of the clip coordinates is inverted. 
    // The easiest way to compensate for that is to flip the sign on the scaling factor of the Y axis in the projection matrix.
    ubo.proj[1][1] *= -1;

    //  so we can copy the data in the uniform buffer object to the current uniform buffer.
    void* data;
    vkMapMemory(device, uniformBuffersMemory[currentImage], 0, sizeof(ubo), 0, &data);
        memcpy(data, &ubo, sizeof(ubo));
    vkUnmapMemory(device, uniformBuffersMemory[currentImage]);
}
```

Using a `UBO` this way is not the most efficient way to pass frequently changing values to the shader. A more efficient way to pass a small buffer of data to shaders are push constants.


## Descriptor pool and sets

### Descriptor pool

Descriptor sets can't be created directly, they must be allocated from a pool like command buffers

```c++
void initVulkan() {
    ...
    createUniformBuffers();
    createDescriptorPool();
    ...
}

...

void createDescriptorPool() {

}
```

We first need to describe which descriptor types our descriptor sets are going to contain and how many of them, using `VkDescriptorPoolSize` structures.

```c++
VkDescriptorPoolSize poolSize{};
poolSize.type = VK_DESCRIPTOR_TYPE_UNIFORM_BUFFER;
poolSize.descriptorCount = static_cast<uint32_t>(swapChainImages.size());
```

This pool size structure is referenced by the main VkDescriptorPoolCreateInfo

```c++
VkDescriptorPoolCreateInfo poolInfo{};
poolInfo.sType = VK_STRUCTURE_TYPE_DESCRIPTOR_POOL_CREATE_INFO;
poolInfo.poolSizeCount = 1;
poolInfo.pPoolSizes = &poolSize;

poolInfo.maxSets = static_cast<uint32_t>(swapChainImages.size());
```

```c++
// Add a new class member to store the handle of the descriptor pool
VkDescriptorPool descriptorPool;

...

// call vkCreateDescriptorPool to create it
if (vkCreateDescriptorPool(device, &poolInfo, nullptr, &descriptorPool) != VK_SUCCESS) {
    throw std::runtime_error("failed to create descriptor pool!");
}

// The descriptor pool should be destroyed when the swap chain is recreated because it depends on the number of images:

void cleanupSwapChain() {
    ...

    for (size_t i = 0; i < swapChainImages.size(); i++) {
        vkDestroyBuffer(device, uniformBuffers[i], nullptr);
        vkFreeMemory(device, uniformBuffersMemory[i], nullptr);
    }

    vkDestroyDescriptorPool(device, descriptorPool, nullptr);
}

// recreated in recreateSwapChain:

void recreateSwapChain() {
    ...

    createUniformBuffers();
    createDescriptorPool();
    createCommandBuffers();
}
```

### Descriptor set

```c++
void initVulkan() {
    ...
    createDescriptorPool();
    createDescriptorSets();
    ...
}

void recreateSwapChain() {
    ...
    createDescriptorPool();
    createDescriptorSets();
    ...
}

...

void createDescriptorSets() {

}
```

```c++
std::vector<VkDescriptorSetLayout> layouts(swapChainImages.size(), descriptorSetLayout);
VkDescriptorSetAllocateInfo allocInfo{};
allocInfo.sType = VK_STRUCTURE_TYPE_DESCRIPTOR_SET_ALLOCATE_INFO;
allocInfo.descriptorPool = descriptorPool;
allocInfo.descriptorSetCount = static_cast<uint32_t>(swapChainImages.size());
allocInfo.pSetLayouts = layouts.data();
```

Add a class member to hold the descriptor set handles and allocate them with `vkAllocateDescriptorSets`

```c++
VkDescriptorPool descriptorPool;
std::vector<VkDescriptorSet> descriptorSets;

...

descriptorSets.resize(swapChainImages.size());
if (vkAllocateDescriptorSets(device, &allocInfo, descriptorSets.data()) != VK_SUCCESS) {
    throw std::runtime_error("failed to allocate descriptor sets!");
}
```

We don't need to explicitly clean up descriptor sets, because they will be automatically freed when the descriptor pool is destroyed.

The descriptors within still need to be configured
configured with a `VkDescriptorBufferInfo` struct. This structure specifies the buffer and the region within it that contains the data for the descriptor.

```c++
for (size_t i = 0; i < swapChainImages.size(); i++) {
    VkDescriptorBufferInfo bufferInfo{};
    bufferInfo.buffer = uniformBuffers[i];
    bufferInfo.offset = 0;
    bufferInfo.range = sizeof(UniformBufferObject);
}
```

The configuration of descriptors is updated using the `vkUpdateDescriptorSets` function, which takes an array of `VkWriteDescriptorSet` structs as parameter

```c++
// The first two fields specify the descriptor set to update and the binding. 
// We gave our uniform buffer binding index 0. 
// Remember that descriptors can be arrays, 
// so we also need to specify the first index in the array that we want to update. 
// We're not using an array, so the index is simply 0.
VkWriteDescriptorSet descriptorWrite{};
descriptorWrite.sType = VK_STRUCTURE_TYPE_WRITE_DESCRIPTOR_SET;
descriptorWrite.dstSet = descriptorSets[i];
descriptorWrite.dstBinding = 0;
descriptorWrite.dstArrayElement = 0;

// It's possible to update multiple descriptors at once in an array
descriptorWrite.descriptorType = VK_DESCRIPTOR_TYPE_UNIFORM_BUFFER;
// specifies how many array elements you want to update.
descriptorWrite.descriptorCount = 1;

// The last field references an array with descriptorCount structs that actually configure the descriptors. 
// It depends on the type of descriptor which one of the three you actually need to use
descriptorWrite.pBufferInfo = &bufferInfo;
descriptorWrite.pImageInfo = nullptr; // Optional
descriptorWrite.pTexelBufferView = nullptr; // Optional

vkUpdateDescriptorSets(device, 1, &descriptorWrite, 0, nullptr);
```

### Using descriptor sets

We now need to update the `createCommandBuffers` function to actually bind the right descriptor set for each swap chain image to the descriptors in the shader with `vkCmdBindDescriptorSets`. This needs to be done before the `vkCmdDrawIndexed` call:

```c++
vkCmdBindDescriptorSets(commandBuffers[i], VK_PIPELINE_BIND_POINT_GRAPHICS, pipelineLayout, 0, 1, &descriptorSets[i], 0, nullptr);
vkCmdDrawIndexed(commandBuffers[i], static_cast<uint32_t>(indices.size()), 1, 0, 0, 0);
```

Modify the `frontFace` in `VkPipelineRasterizationStateCreateInfo` to correct this

```c++
rasterizer.cullMode = VK_CULL_MODE_BACK_BIT;
rasterizer.frontFace = VK_FRONT_FACE_COUNTER_CLOCKWISE;
```

### Alignment requirements

Vulkan expects the data in your structure to be aligned in memory in a specific way, for example:

* Scalars have to be aligned by N (= 4 bytes given 32 bit floats).
* A `vec2` must be aligned by 2N (= 8 bytes)
* A `vec3` or `vec4` must be aligned by 4N (= 16 bytes)
* A nested structure must be aligned by the base alignment of its members rounded up to a multiple of 16.
* A mat4 matrix must have the same alignment as a `vec4`.

Our original shader with just three mat4 fields already met the alignment requirements. As each mat4 is 4 x 4 x 4 = 64 bytes in size, model has an offset of 0, view has an offset of 64 and proj has an offset of 128. All of these are multiples of 16 and that's why it worked fine.

The new structure starts with a vec2 which is only 8 bytes in size and therefore throws off all of the offsets. Now model has an offset of `8`, view an offset of `72` and proj an offset of `136`, none of which are multiples of `16`. To fix this problem we can use the alignas specifier introduced in C++11:

```c++
struct UniformBufferObject {
    glm::vec2 foo;
    alignas(16) glm::mat4 model;
    glm::mat4 view;
    glm::mat4 proj;
};
```

Another way using GLM degine

This will force GLM to use a version of vec2 and mat4 that has the alignment requirements already specified for us.

```c++
#define GLM_FORCE_RADIANS
#define GLM_FORCE_DEFAULT_ALIGNED_GENTYPES
#include <glm/glm.hpp>
```

this method can break down if you start using nested structures. Consider the following definition in the C++ code:

```c++
struct Foo {
    glm::vec2 v;
};

struct UniformBufferObject {
    Foo f1;
    Foo f2;
};

// And the following shader definition:

struct Foo {
    vec2 v;
};

layout(binding = 0) uniform UniformBufferObject {
    Foo f1;
    Foo f2;
} 
```

```c++
struct UniformBufferObject {
    Foo f1;
    alignas(16) Foo f2;
};

struct UniformBufferObject {
    alignas(16) glm::mat4 model;
    alignas(16) glm::mat4 view;
    alignas(16) glm::mat4 proj;
};
```

### Multiple descriptor sets

```c++
layout(set = 0, binding = 0) uniform UniformBufferObject { ... }
```