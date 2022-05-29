## OpenGL Function

**glfwSwapBuffers**

will swap the color buffer (a large 2D buffer that contains color values for each pixel in GLFW's window) that is used to render to during this render iteration and show it as output to the screen.


**glBufferData**


copies the previously defined vertex data into the buffer's memory


**glBindBuffer**


OpenGL has many types of buffer objects and the buffer type of a vertex buffer object is GL_ARRAY_BUFFER. OpenGL allows us to bind to several buffers at once as long as they have a different buffer type


**glVertexAttribPointer**


define an array of generic vertex attribute data.


**glEnableVertexAttribArray**

We assigned the attribute index of the position attribute to 0 in the vertex shader, so the call to glEnableVertexAttribArray(0) enables the attribute index for the position attribute. ... If the attribute is not enabled, it will not be used during rendering

