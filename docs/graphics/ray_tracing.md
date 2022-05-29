
# Resources

## Ray Tracing in One Weekend - The Book Series
*https://raytracing.github.io/*

## SmallPT — 99 行代码光线追踪解析
*https://xieguanglei.github.io/blog/post/ray-tracing-99-lines-code.html*

## Learn Computer Graphics From Scratch!
*https://www.scratchapixel.com/index.php*

## NVIDIA Vulkan Ray Tracing Tutorial
*https://developer.nvidia.com/rtx/raytracing/vkray*

## smallpt: Global Illumination in 99 lines of C++
*https://www.kevinbeason.com/smallpt/*

g++ -O3 -fopenmp smallpt_win.cpp -o smallpt 
time ./smallpt 5000
display image.ppm

## Future of Gaming : Rasterization vs Ray Tracing vs Path Tracing
*https://medium.com/@junyingw/future-of-gaming-rasterization-vs-ray-tracing-vs-path-tracing-32b334510f1f*

1. **What is rasterization?**

Rasterization is a process of rasterizing 3D models onto a 2D plane for display on a computer screen. However, this process is often carried out by fixed function hardware within the graphics pipeline.

2. **What is ray tracing?**

Ray tracing is eye-oriented process that needs walking through each pixel looking for what object should be shown there, which is also can be described as a technique that follows a beam of light (in pixels) from a set point and simulates how it reacts when it encounters objects.

<div align=center>
<img src="../_images/graphics/ray_tracing.png" width="600">
</div>

Consider the picture: Ray traced graphics would start at your “eye”, actually it’s camera here. And then the shooting ray from each pixel of the image plane will follow your line of sight to the scene object, and then follow the path of light from the intersected object back to the light source.

3. **What is path tracing?**

Path tracing is a type of ray tracing. When using path tracing for rendering, the rays only produce a single ray per bounce. The rays do not follow a set line per bounce, but rather shoot off in a random direction. The path tracing algorithm then takes a random sampling of all of the rays to create the final image. This results in sampling a variety of different types of lighting.

For simple ray tracing, it shoots one ray from each pixel, but in path tracing , instead of sending out one ray it sends out tens, hundreds or even thousands of rays for each pixel to be rendered. When it hits a surface it doesn’t trace a path to every light source, instead it bounces the ray off the surface and keeps bouncing it until it hits a light source or exhausts some bounce limit. It then calculates the amount of light transferred all the way to the pixel, including any color information gathered from surfaces along the way. It then averages out the values calculated from all the paths that were traced into the scene to get the final pixel color value. It requires a ton of computing power and if you don’t send out enough rays per pixel or don’t trace the paths far enough into the scene then you end up with a very spotty image as many pixels fail to find any light sources from their rays. So when you increase the the samples per pixel, you can see the image quality becomes better and better. Besides, now most of softwares use path tracing as the prior rendering technique.

4. **What are the differences between ray tracing and path tracing?**

Actually, it is improper to compare ray tracing and path tracing, since there is no differences between them. Path tracing is type of ray tracing, it is pointless to compare these two terminologies, since they belong to different levels, like two different layers of a matryoshka doll.

The basic concept of racy tracing is that you shoot a ray that will calculate the primary lightning, however, the ray will bounce and generate more and more rays, which might contribute less of the final lighting. According to this issue, path tracing shows a reasonable rendering equation to solve the exponential ray-increasing problem. So path tracing is only a fast form of ray tracing.

## Understanding SmallPPT Dr. David Cline - *smallPT1.ppt*
* Global Illumination - Global Illumination = “virtual photography”
  * Given a scene description that specifies the location of surfaces in a scene, the location of lights, and the location of a camera, take a virtual “photograph” of that scene.

<div align=center>
<img src="../_images/graphics/ray_tracing_gi_image.png" width="800">
</div>

# Basic conception 

## The Rendering Equation

  <div align=center>
  <img src="../_images/graphics/ray_tracing_rendering_equation_image.png" width="600">
  </div>

* Rendering Equation
  $$
  \begin{aligned}
  L_o(o)=L_e(o)+\int_\Omega L_i(i)\cdot F(i, o)\cdot \cos\theta\cdot di
  \end{aligned}
  $$

1. 此方程描述的问题是：从物体表面上的一点$P$处，射入到观察者眼中的某条光线的强度，是如何确定的。
2. $L_o(o)$为射入观察者眼中的光线的颜色，即需要求取的值；$o$ 为出射方向。
3. $L_e(o)$ 为物体表面在点$P$向观察者方向自发射的光线的颜色（灯）。
4. $L_i(i)$ 表示环境入射到点 $P$ 的光的颜色；$i$ 代表入射方向（为计算方便，取真实入射方向的反方向，不影响代表关系，后面也简称为入射方向）。
5. $F(i,o)$ 表示在给定 $i$ 和 $o$ 时，由 $i$ 方向的入射单位光强产生的$o$方向的出射光的强度，此函数与表面的性质有关，又称表面的 `BRDF` 函数。
6. $\theta$ 表示 $i$ 与表面法线的夹角。
7. $\int_\Omega L_i(i)\cdot F(i, o)\cdot \cos\theta\cdot di$ 整个积分项表示：对半球（不透明材质）或全球（透明介质）内的所有入射方向 $i$ 进行积分，得到的 $o$ 方向的出射光强度。

## GAMES101-现代计算机图形学入门-闫令琪
*https://www.bilibili.com/video/BV1X7411F744?p=1*

* SLIDE & VIDEO
  * http://games-cn.org/graphics-intro-ppt-video/
### Lecture - Ray Tracing
#### What is the ray tracing?
<div align=center>
<img src="../_images/graphics/games101-ray-tracing-01.jpg" width="600">
</div>

<div align=center>
<img src="../_images/graphics/games101-ray-tracing-02.jpg" width="600">
</div>

<div align=center>
<img src="../_images/graphics/games101-ray-tracing-03.jpg" width="600">
</div>

#### Whitted-Style ray tracing
<div align=center>
<img src="../_images/graphics/games101-ray-tracing-04.jpg" width="600">
</div>

<div align=center>
<img src="../_images/graphics/games101-ray-tracing-05.jpg" width="600">
</div>

#### Ray Surface Equation
* Ray Equation
<div align=center>
<img src="../_images/graphics/games101-ray-tracing-ray_equation_01.jpg" width="600">
</div>

* Ray Intersection with sphere
<div align=center>
<img src="../_images/graphics/games101-ray-tracing-ray_equation_02.jpg" width="600">
</div>

* Ray Intersection with sphere
<div align=center>
<img src="../_images/graphics/games101-ray-tracing-ray_equation_03.jpg" width="600">
</div>

* Ray Intersection with implicit surface
<div align=center>
<img src="../_images/graphics/games101-ray-tracing-ray_equation_04.jpg" width="600">
</div>

* Ray Intersection with triangle mesh
<div align=center>
<img src="../_images/graphics/games101-ray-tracing-ray_equation_05.jpg" width="600">
</div>

* Ray Intersection with triangle
<div align=center>
<img src="../_images/graphics/games101-ray-tracing-ray_equation_06.jpg" width="600">
</div>

* Plane Equation
<div align=center>
<img src="../_images/graphics/games101-ray-tracing-ray_equation_07.jpg" width="600">
</div>

* Ray Intersection with plane
<div align=center>
<img src="../_images/graphics/games101-ray-tracing-ray_equation_08.jpg" width="600">
</div>

* Moller Trumbore Algorithm
<div align=center>
<img src="../_images/graphics/games101-ray-tracing-ray_equation_09.jpg" width="600">
</div>


#### Accelerating Ray-Surface Intersection
* Ray Tracing - Performance Challenges
<div align=center>
<img src="../_images/graphics/games101-ray-tracing-performance_challenges.jpg" width="600">
</div>

  * [San Miguel Scene](https://www.pbrt.org/scenes-v2.html)
  * Plant Ecosystem

* Bounding Volumes
<div align=center>
<img src="../_images/graphics/games101-ray-tracing-bounding_volumes.jpg" width="600">
</div>

* Ray Intersection With Box
<div align=center>
<img src="../_images/graphics/games101-ray-tracing-ray_intersection_01.jpg" width="600">
</div>

* Ray Intersection With Axis-Aligned Box (AABB)
<div align=center>
<img src="../_images/graphics/games101-ray-tracing-ray_intersection_02.jpg" width="600">
</div>

* Ray Intersection with Axis-Aligned Box
<div align=center>
<img src="../_images/graphics/games101-ray-tracing-ray_intersection_03.jpg" width="600">
</div>

* Ray Intersection with Axis-Aligned Box
<div align=center>
<img src="../_images/graphics/games101-ray-tracing-ray_intersection_04.jpg" width="600">
</div>

* Why Axis-Aligned
<div align=center>
<img src="../_images/graphics/games101-ray-tracing-ray_intersection_05.jpg" width="600">
</div>

#### Announcements
* GTC news: DLSS 2.0
  * https://zhuanlan.zhihu.com/p/116211994
* GTC news: RTXGI
  * https://developer.nvidia.com/rtxgi

#### Uniform Spatial Partitions (Grids)
* Uniform Grids - When They Fail
  * "Teapot in a stadium" problem
<div align=center>
<img src="../_images/graphics/games101-ray-tracing-ray_scene_intersection.jpg" width="600">
</div>

* Spatial Partitions Examples
<div align=center>
<img src="../_images/graphics/games101-ray-tracing-Spatial Partitions Examples.jpg" width="600">
</div>

* KD-Tree
  * KD-Tree Pre-Processing

<div align=center>
<img src="../_images/graphics/games101-ray-tracing-KD-Tree01.jpg" width="600">
</div>

  * Data Structure for KD-Trees

<div align=center>
<img src="../_images/graphics/games101-ray-tracing-KD-Tree02.jpg" width="600">
</div>

  * Traversing a KD-Tree

<div align=center>
<img src="../_images/graphics/games101-ray-tracing-KD-Tree03.jpg" width="600">
</div>

#### Object Partitions & Bounding Volume Hierarchy (BVH)
* BVH
<div align=center>
<img src="../_images/graphics/ames101-ray-tracing-BVH_01.jpg" width="600">
</div>

* Summary: Building BVHs
<div align=center>
<img src="../_images/graphics/games101-ray-tracing-BVH_02.jpg" width="600">
</div>

* Building BVHs
<div align=center>
<img src="../_images/graphics/games101-ray-tracing-Building BVHs.jpg" width="600">
</div>

* Data Structure for BVHs
<div align=center>
<img src="../_images/graphics/games101-ray-tracing-Data Structure for BVHs.jpg" width="600">
</div>

* BVH Traversal
<div align=center>
<img src="../_images/graphics/games101-ray-tracing-BVH Traversal.jpg" width="600">
</div>

* Spatial vs Object Partitions
<div align=center>
<img src="../_images/graphics/games101-ray-tracing-Spatial vs Object Partitions.jpg" width="600">
</div>

#### Basic radiometry (辐射度量学)
* Radiometry
<div align=center>
<img src="../_images/graphics/games101-ray-tracing-Radiometry.jpg" width="600">
</div>

* Radiant Energy and Flux (Power)
<div align=center>
<img src="../_images/graphics/games101-ray-tracing-Radiant Energy and Flux (Power).jpg" width="600">
</div>

* Flux
<div align=center>
<img src="../_images/graphics/games101-ray-tracing-Flux.jpg" width="600">
</div>

* Important Light Measurements of Interest
<div align=center>
<img src="../_images/graphics/games101-ray-tracing-Important Light Measurements of Interest.jpg" width="600">
</div>

* Radiant Intensity
<div align=center>
<img src="../_images/graphics/games101-ray-tracing-Radiant Intensity.jpg" width="600">
</div>

* Angles and Solid Angles
<div align=center>
<img src="../_images/graphics/games101-ray-tracing-Angles and Solid Angles.jpg" width="600">
</div>
  
* Differential Solid Angles
<div align=center>
<img src="../_images/graphics/games101-ray-tracing-Differential Solid Angles.jpg" width="600">
</div>

* Ω as a direction vector
<div align=center>
<img src="../_images/graphics/games101-ray-tracing-Ω as a direction vector.jpg" width="600">
</div>

* Isotropic Point Source
<div align=center>
<img src="../_images/graphics/games101-ray-tracing-Isotropic Point Source.jpg" width="600">
</div>

* Modern LED Light
<div align=center>
<img src="../_images/graphics/games101-ray-tracing-Modern LED Light.jpg" width="600">
</div>

#### Irradiance

* Reviewing Concepts
<div align=center>
<img src="../_images/graphics/games101-ray-tracing-Reviewing Concepts.jpg" width="600">
</div>

* Lambert's Cosine Law
<div align=center>
<img src="../_images/graphics/games101-ray-tracing-Lambert's Cosine Law.jpg" width="600">
</div>

* CorrectionL Irradiance Falloff
<div align=center>
<img src="../_images/graphics/games101-ray-tracing-CorrectionL Irradiance Falloff.jpg" width="600">
</div>

#### Radiance   
* Radiance
<div align=center>
<img src="../_images/graphics/games101-ray-tracing-Radiance.jpg" width="600">
</div>

* Radiance
<div align=center>
<img src="../_images/graphics/games101-ray-tracing-Radiance2.jpg" width="600">
</div>

* Radiance
<div align=center>
<img src="../_images/graphics/games101-ray-tracing-Radiance3.jpg" width="600">
</div>

* Incident Radiance
<div align=center>
<img src="../_images/graphics/games101-ray-tracing-Incident Radiance.jpg" width="600">
</div>

* Existing Radiance
<div align=center>
<img src="../_images/graphics/games101-ray-tracing-Existing Radiance.jpg" width="600">
</div>

* Irradiance vs. Radiance
<div align=center>
<img src="../_images/graphics/games101-ray-tracing-Irradiance vs. Radiance.jpg" width="600">
</div>


#### Bidirectional Reflectance Distribution Function  (BRDF)
* Reflection at a point
<div align=center>
<img src="../_images/graphics/games101-ray-tracing-Reflection at a point.jpg" width="600">
</div>

* BRDF
<div align=center>
<img src="../_images/graphics/games101-ray-tracing-BRDF.jpg" width="600">
</div>

* The Reflection Equation
<div align=center>
<img src="../_images/graphics/games101-ray-tracing-The Reflection Equation.jpg" width="600">
</div>

* Challenge: Recursive Equation
<div align=center>
<img src="../_images/graphics/games101-ray-tracing-Challenge Recursive Equation.jpg" width="600">
</div>

* The Rendering Equation
<div align=center>
<img src="../_images/graphics/games101-ray-tracing-The Rendering Equation.jpg" width="600">
</div>

* Reflection Equation
<div align=center>
<img src="../_images/graphics/games101-ray-tracing-Reflection Equation.jpg" width="600">
</div>

* Reflection Equation
<div align=center>
<img src="../_images/graphics/games101-ray-tracing-Reflection Equation1.jpg" width="600">
</div>

* Reflection Equation
<div align=center>
<img src="../_images/graphics/games101-ray-tracing-Reflection Equation2.jpg" width="600">
</div>

* Rendering Equation
<div align=center>
<img src="../_images/graphics/games101-ray-tracing-Rendering Equation.jpg" width="600">
</div>

* Rendering Equation as Integral Equation
<div align=center>
<img src="../_images/graphics/games101-ray-tracing-Rendering Equation as Integral Equation.jpg" width="600">
</div>

* Linear Operator Equation
<div align=center>
<img src="../_images/graphics/games101-ray-tracing-Linear Operator Equation.jpg" width="600">
</div>

* Ray Tracing and extensions
<div align=center>
<img src="../_images/graphics/games101-ray-tracing-Ray Tracing and extensions.jpg" width="600">
</div>

* Ray Tracing
<div align=center>
<img src="../_images/graphics/games101-ray-tracing-Ray Tracing.jpg" width="600">
</div>

* Ray Tracing
<div align=center>
<img src="../_images/graphics/games101-ray-tracing-Ray Tracing1.jpg" width="600">
</div>

* Global Illumination
<div align=center>
<img src="../_images/graphics/games101-ray-tracing-global_illumination1.jpg" width="600">
</div>

* Global Illumination
<div align=center>
<img src="../_images/graphics/games101-ray-tracing-global_illumination2.jpg" width="600">
</div>

* Global Illumination
<div align=center>
<img src="../_images/graphics/games101-ray-tracing-global_illumination3.jpg" width="600">
</div>

* Global Illumination
<div align=center>
<img src="../_images/graphics/games101-ray-tracing-global_illumination4.jpg" width="600">
</div>

* Global Illumination
<div align=center>
<img src="../_images/graphics/games101-ray-tracing-global_illumination5.jpg" width="600">
</div>

#### Probability
* Expected Value of a Random Variable
<div align=center>
<img src="../_images/graphics/games101-ray-tracing-Expected Value of a Random Variable.jpg" width="600">
</div>

* Continuous Case: Probability Distribution Function(PDF)
<div align=center>
<img src="../_images/graphics/games101-ray-tracing-Continuous Case Probability Distribution Function(PDF).jpg" width="600">
</div>

* Function of a Random Variable
<div align=center>
<img src="../_images/graphics/games101-ray-tracing-Function of a Random Variable.jpg" width="600">
</div>

#### Monte Carlo Path Tracing
* Whitted-Style Ray Tracing - Problem 1
<div align=center>
<img src="../_images/graphics/games101-ray-tracing-Whitted-Style Ray Tracing - Problem 1.jpg" width="600">
</div>

* Whitted-Style Ray Tracing - Problem 2
<div align=center>
<img src="../_images/graphics/games101-ray-tracing-Whitted-Style Ray Tracing - Problem 2.jpg" width="600">
</div>

* A Simple Monte Carlo Solution
<div align=center>
<img src="../_images/graphics/games101-ray-tracing-A Simple Monte Carlo Solution 1.jpg" width="600">
</div>

* A Simple Monte Carlo Solution
<div align=center>
<img src="../_images/graphics/games101-ray-tracing-A Simple Monte Carlo Solution 2.jpg" width="600">
</div>

* A Simple Monte Carlo Solution
<div align=center>
<img src="../_images/graphics/games101-ray-tracing-A Simple Monte Carlo Solution 3.jpg" width="600">
</div>

* Introducing Global Illumination
<div align=center>
<img src="../_images/graphics/games101-ray-tracing-Introducing Global Illumination.jpg" width="600">
</div>

* Path Tracing - Graphical
<div align=center>
<img src="../_images/graphics/games101-ray-tracing-Path Tracing - Graphical.jpg" width="600">
</div>

* Path Tracing - Pseudocode
<div align=center>
<img src="../_images/graphics/games101-ray-tracing-Path Tracing - Pseudocode.jpg" width="600">
</div>

* Ray Generation - Graphical
<div align=center>
<img src="../_images/graphics/games101-ray-tracing-Ray Generation - Graphical.jpg" width="600">
</div>

* Ray Generation - Pseudocode
<div align=center>
<img src="../_images/graphics/games101-ray-tracing-Ray Generation - Pseudocode.jpg" width="600">
</div>

* Path Tracing - Cutting energy
<div align=center>
<img src="../_images/graphics/games101-ray-tracing-Path Tracing - Cutting energy.jpg" width="600">
</div>

* Cutting energy Problem Solution - Russian Roulette (RR) - Simple
<div align=center>
<img src="../_images/graphics/games101-ray-tracing-Cutting energy Problem Solution - Russian Roulette (RR) - Simple.jpg" width="600">
</div>

* Cutting energy Problem Solution - Russian Roulette (RR) - Explain
<div align=center>
<img src="../_images/graphics/games101-ray-tracing-Cutting energy Problem Solution - Russian Roulette (RR) - Explain.jpg" width="600">
</div>

* Cutting energy Problem Solution - Russian Roulette (RR) - Pseudocode
<div align=center>
<img src="../_images/graphics/games101-ray-tracing-Cutting energy Problem Solution - Russian Roulette (RR) - Pseudocode.jpg" width="600">
</div>

* Sampling the Light
<div align=center>
<img src="../_images/graphics/games101-ray-tracing-Sampling the light.jpg" width="600">
</div>
