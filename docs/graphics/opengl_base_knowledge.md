

## OpenGL ES

OpenGL® ES is a royalty-free, cross-platform API for rendering advanced 2D and 3D graphics on embedded and mobile systems - including consoles, phones, appliances and vehicles. It consists of a well-defined subset of desktop OpenGL suitable for low-power devices, and provides a flexible and powerful interface between software and graphics acceleration hardware.

## GLAD

OpenGL is only really a standard/specification it is up to the driver manufacturer to implement the specification to a driver that the specific graphics card supports. Since there are many different versions of OpenGL drivers, the location of most of its functions is not known at compile-time and needs to be queried at run-time. It is then the task of the developer to retrieve the location of the functions he/she needs and store them in function pointers for later use.


## GLEW
* [1] difference of freeglut vs glew? https://stackoverflow.com/questions/15613978/difference-of-freeglut-vs-glew

The OpenGL Extension Wrangler (GLEW) is used to access the modern OpenGL API functions(version 3.2 up to latest version)

OpenGL Advanced extension functions, All functions of gl,glu,glext,wgl,glx you can use.


## GLFW
* [1] difference of freeglut vs glew? https://stackoverflow.com/questions/15613978/difference-of-freeglut-vs-glew

`GLFW` or freeglut will allow us to create a window, and receive mouse and keyboard input in a cross-platform way. OpenGL does not handle window creation or input, so we have to use these library for handling window, keyboard, mouse, joysticks, input and other purpose.

## GLUT &amp; freeglut
The original implementation of GLUT was released under a license that prohibited modification. freeglut is a reimplementation of the GLUT API under a MIT license


## Line strip

In case you're wondering what a line strip is: a line strip binds together a set of points to form one continuous line between them with a minimum of 2 points. Each extra point results in a new line between the new point and the previous point as you can see in the following image with 5 point vertices:

<div align=center>
<img src="../_images/opengl/geometry_shader_line_strip.png" width="400">
</div>