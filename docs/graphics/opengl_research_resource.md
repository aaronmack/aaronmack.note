## Problems
### How does a VBO get attached to a VAO


It is attached when glVertexAttribPointer is called.
- reference from: `https://stackoverflow.com/questions/59892088/how-does-a-vbo-get-attached-to-a-vao#:~:text=1%20Answer&text=It%20is%20attached%20when%20glVertexAttribPointer,a%20different%20Vertex%20Buffer%20Object.&text=glVertexAttribPointer%20retrieves%20VBO%20from%20the%20global%20state%20and%20assoicates%20it%20to%20VAO%20.`

### 
* Cannot instantiate a struct that contains an opaque data type (sampler, image, atomic counter). It is acceptable to have a struct with an opaque type as a uniform.

* Data Type (GLSL) - Opaque Types
    * Variables of opaque types can only be declared in one of two ways. They can be declared at global scope, as a uniform​ variables. Such variables can be arrays of the opaque type. They can be declared as members of a struct, but if so, then the struct can only be used to declare a uniform​ variable (or to declare a member of a struct/array that itself a uniform variable). They cannot be part of a buffer-backed interface block or an input/output variable, either directly or indirectly.

### OpenGL

http://john-chapman-graphics.blogspot.com/