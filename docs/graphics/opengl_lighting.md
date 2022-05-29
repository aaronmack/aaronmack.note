
## Colors

* Colors
Colors are digitally represented using a `red`, `green` and `blue` component commonly abbreviated as `RGB`. Using different combinations of just those 3 values, within a range of `[0,1]`

The color of an object we see in real life is not the color it actually has, but is the color reflected from the object. The colors that aren’t absorbed (rejected) by the object is the color we perceive of it. As an example, the light of the sun is perceived as a white light that is the combined sum of many different colors (as you can see in the image). If we would shine this white light on a blue toy, it would absorb all the white color’s sub-colors except the blue color. Since the toy does not absorb the blue color part, it is reflected. This reflected light enters our eye, making it look like the toy has a blue color. The following image shows this for a coral colored toy where it reflects several colors with varying intensity:

![](https://learnopengl.com/img/lighting/light_reflection.png)
* Basic Lighting
These lighting models are based on the physics of light as we understand it. One of those models is called the Phong lighting model. The major building blocks of the Phong lighting model consist of 3 components: ambient, diffuse and specular lighting. Below you can see what these lighting components look like on their own and combined:

![](https://learnopengl.com/img/lighting/basic_lighting_phong.png)
* Ambient lighting: even when it is dark there is usually still some light somewhere in the world (the moon, a distant light) so objects are almost never completely dark. To simulate this we use an ambient lighting constant that always gives the object some color.

* Diffuse lighting: simulates the directional impact a light object has on an object. This is the most visually significant component of the lighting model. The more a part of an object faces the light source, the brighter it becomes.

* Specular lighting: simulates the bright spot of a light that appears on shiny objects. Specular highlights are more inclined to the color of the light than the color of the object.

* global illumination: Light usually does not come from a single light source, but from many light sources scattered all around us, even when they’re not immediately visible. One of the properties of light is that it can scatter and bounce in many directions, reaching spots that aren’t directly visible; light can thus reflect on other surfaces and have an indirect impact on the lighting of an object

### Ambient lighting

We take the light’s color, multiply it with a small constant ambient factor, multiply this with the object’s color, and use that as the fragment’s color in the cube object’s shader

```C
void main()
{
    float ambientStrength = 0.1;
    vec3 ambient = ambientStrength * lightColor;

    vec3 result = ambient * objectColor;
    FragColor = vec4(result, 1.0);
}  

```

### Diffuse lighting

Diffuse lighting gives the object more brightness the closer its fragments are aligned to the light rays from a light source

![](https://learnopengl.com/img/lighting/diffuse_light.png)
* the lower the angle between two unit vectors, the more the dot product is inclined towards a value of 1. When the angle between both vectors is 90 degrees, the dot product becomes 0. The same applies to θθ: the larger θθ becomes, the less of an impact the light should have on the fragment’s color.

### Specular Lighting

Similar to diffuse lighting, specular lighting is based on the light’s direction vector and the object’s normal vectors, but this time it is also based on the view direction e.g. from what direction the player is looking at the fragment. Specular lighting is based on the reflective properties of surfaces. If we think of the object’s surface as a mirror, the specular lighting is the strongest wherever we would see the light reflected on the surface.

### Calculate
We calculate a reflection vector by reflecting the light direction around the normal vector. Then we calculate the angular distance between this reflection vector and the view direction. The closer the angle between them, the greater the impact of the specular light. The resulting effect is that we see a bit of a highlight when we’re looking at the light’s direction reflected via the surface.

![](https://learnopengl.com/img/lighting/basic_lighting_specular_theory.png)
* #001 `https://www.sail.monster/workflow_collection/opengl-points/190/`


### Result

![](https://learnopengl.com/img/lighting/basic_lighting_specular_shininess.png)

## Materials
* In the real world, each object has a different reaction to light, Some objects reflect the light without much scattering resulting in small specular highlights and others scatter a lot giving the highlight a larger radius.
```C
	#version 330 core
	struct Material {
	    vec3 ambient;
	    vec3 diffuse;
	    vec3 specular;
	    float shininess;
	}; 
	  
	uniform Material material;
```

* The `ambient` material vector defines what color the surface reflects under ambient lighting; this is usually the same as the surface's color. The `diffuse` material vector defines the color of the surface under diffuse lighting. The diffuse color is (just like ambient lighting) set to the desired surface's color. The `specular` material vector sets the color of the specular highlight on the surface (or possibly even reflect a surface-specific color). Lastly, the `shininess` impacts the scattering/radius of the specular highlight.

### Setting materials
```C
void main()
{    
    // ambient
    vec3 ambient = lightColor * material.ambient;
  	
    // diffuse 
    vec3 norm = normalize(Normal);
    vec3 lightDir = normalize(lightPos - FragPos);
    float diff = max(dot(norm, lightDir), 0.0);
    vec3 diffuse = lightColor * (diff * material.diffuse);
    
    // specular
    vec3 viewDir = normalize(viewPos - FragPos);
    vec3 reflectDir = reflect(-lightDir, norm);  
    float spec = pow(max(dot(viewDir, reflectDir), 0.0), material.shininess);
    vec3 specular = lightColor * (spec * material.specular);  
        
    vec3 result = ambient + diffuse + specular;
    FragColor = vec4(result, 1.0);
}
```

## Lighting maps
*  Objects in the real world however usually do not consist of a single material, but of several materials.

### Diffuse maps
* using an image wrapped around an object that we can index for unique color values per fragment. In lit scenes this is usually called a diffuse map
* Warning
    * Keep in mind that sampler2D is a so called opaque type which means we can't instantiate these types, but only define them as uniforms. If the struct would be instantiated other than as a uniform (like a function parameter) GLSL could throw strange errors; the same thus applies to any struct holding such opaque types.
    
### Specular maps
* The intensity of the specular highlight comes from the brightness of each pixel in the image. Each pixel of the specular map can be displayed as a color vector where black represents the color vector vec3(0.0) and gray the color vector vec3(0.5) for example. In the fragment shader we then sample the corresponding color value and multiply this value with the light's specular intensity. The more 'white' a pixel is, the higher the result of the multiplication and thus the brighter the specular component of an object becomes.
* Notices:
    *  you could also use actual colors in the specular map to not only set the specular intensity of each fragment, but also the color of the specular highlight. Realistically however, the color of the specular highlight is mostly determined by the light source itself so it wouldn't generate realistic visuals (that's why the images are usually black and white: we only care about the intensity).
    
    
## Light casters
* in the real world we have several types of light that each act different. A light source that casts light upon objects is called a light caster.

### Directional Light
* When a light source is far away the light rays coming from the light source are close to parallel to each other. It looks like all the light rays are coming from the same direction, regardless of where the object and/or the viewer is. When a light source is modeled to be infinitely far away it is called a directional light since all its light rays have the same direction; it is independent of the location of the light source.
![directional_light](https://learnopengl.com/img/lighting/light_casters_directional.png)
* Notices:
    * We've been passing the light's position and direction vectors as vec3s for a while now, but some people tend to prefer to keep all the vectors defined as vec4. When defining position vectors as a vec4 it is important to set the w component to 1.0 so translation and projections are properly applied. However, when defining a direction vector as a vec4 we don't want translations to have an effect (since they just represent directions, nothing more) so then we define the w component to be 0.0.

    * Direction vectors can then be represented as: vec4(-0.2f, -1.0f, -0.3f, 0.0f). This can also function as an easy check for light types: you could check if the w component is equal to 1.0 to see that we now have a light's position vector and if w is equal to 0.0 we have a light's direction vector; so adjust the calculations based on that:
```C
if(lightVector.w == 0.0) // note: be careful for floating point errors
  // do directional light calculations
else if(lightVector.w == 1.0)
  // do light calculations using the light's position (as in previous chapters)  
```
    * Fun fact: this is actually how the old OpenGL (fixed-functionality) determined if a light source was a directional light or a positional light source and adjusted its lighting based on that.

### Point lights
*  A point light is a light source with a given position somewhere in a world that illuminates in all directions, where the light rays fade out over distance. Think of light bulbs and torches as light casters that act as a point light.
* Attenuation
    * To reduce the intensity of light over the distance a light ray travels is generally called attenuation. One way to reduce the light intensity over distance is to simply use a linear equation. Such an equation would linearly reduce the light intensity over the distance thus making sure that objects at a distance are less bright. However, such a linear function tends to look a bit fake. In the real world, lights are generally quite bright standing close by, but the brightness of a light source diminishes quickly at a distance; the remaining light intensity then slowly diminishes over distance. We are thus in need of a different equation for reducing the light's intensity.
* Formula
$$
\begin{aligned}
\mathbf{F}_{att} = \frac{1.0}{\mathbf{K}_c + \mathbf{K}_l * d + \mathbf{K}_q * \mathbf{d}^2}
\end{aligned}
$$
* Here $d$ represents the distance from the fragment to the light source. Then to calculate the attenuation value we define 3 (configurable) terms: a `constant` term $K_c$, a `linear` term $K_l$ and a `quadratic` term $K_q$.
    * The constant term is usually kept at 1.0 which is mainly there to make sure the denominator never gets smaller than 1 since it would otherwise boost the intensity with certain distances, which is not the effect we're looking for.
    * The linear term is multiplied with the distance value that reduces the intensity in a linear fashion.
    * The quadratic term is multiplied with the quadrant of the distance and sets a quadratic decrease of intensity for the light source. The quadratic term will be less significant compared to the linear term when the distance is small, but gets much larger as the distance grows.

<div align=center>
<img src="https://learnopengl.com/img/lighting/attenuation.png" width="400">
</div>

* Table for attenuation

    | Distance |	Constant |	Linear	|  Quadratic  |
    | :------: | :---------: | :------: | :---------: |
    | 7	        |  1.0	     |  0.7	      |  1.8
    | 13	     |  1.0	     |  0.35	  |  0.44
    | 20	     |  1.0	     |  0.22	  |  0.20
    | 32	     |  1.0	     |  0.14	  |  0.07
    | 50	     |  1.0	     |  0.09	  |  0.032
    | 65	     |  1.0	     |  0.07	  |  0.017
    | 100	    |  1.0	     |  0.045	  |  0.0075
    | 160	    |  1.0	     |  0.027	  |  0.0028
    | 200	    |  1.0	     |  0.022	  |  0.0019
    | 325	    |  1.0	     |  0.014	  |  0.0007
    | 600	    |  1.0	     |  0.007	  |  0.0002
    | 3250    |  1.0	     |  0.0014	  |  0.000007|

    * reference from:    http://wiki.ogre3d.org/tiki-index.php?page=-Point+Light+Attenuation

#### Implementing attenuation
```GLSL
struct Light {
    vec3 position;  
  
    vec3 ambient;
    vec3 diffuse;
    vec3 specular;
	
    float constant;
    float linear;
    float quadratic;
}; 
```
```GLSL

float distance    = length(light.position - FragPos);
float attenuation = 1.0 / (light.constant + light.linear * distance + light.quadratic * (distance * distance));  
```

### Spotlight
* The last type of light we're going to discuss is a spotlight. A spotlight is a light source that is located somewhere in the environment that, instead of shooting light rays in all directions, only shoots them in a specific direction. The result is that only the objects within a certain radius of the spotlight's direction are lit and everything else stays dark. A good example of a spotlight would be a street lamp or a flashlight.
* A spotlight in OpenGL is represented by a world-space position, a direction and a `cutoff` angle that specifies the radius of the spotlight
<div align=center>
<img src="https://learnopengl.com/img/lighting/light_casters_spotlight_angles.png">
</div>
*
    * LightDir: the vector pointing from the fragment to the light source.
    * SpotDir: the direction the spotlight is aiming at.
    * Phi $\phi$: the cutoff angle that specifies the spotlight's radius. Everything outside this angle is not lit by the spotlight.
    * Theta $\theta$: the angle between the LightDir vector and the SpotDir vector. The $\theta$ value should be smaller than $\Phi$ to be inside the spotlight.

```GLSL
struct Light {
    vec3  position;
    vec3  direction;
    float cutOff;
    ...
}; 

// ...

float theta = dot(lightDir, normalize(-light.direction));
    
if(theta > light.cutOff) 
{       
  // do lighting calculations
}
else  // else, use ambient light so scene isn't completely dark outside the spotlight.
  color = vec4(light.ambient * vec3(texture(material.diffuse, TexCoords)), 1.0);
```
* Notices:
    * but don't forget angle values are represented as cosine values and an angle of 0 degrees is represented as the cosine value of 1.0 while an angle of 90 degrees is represented as the cosine value of 0.0 as you can see here:
    ![cos_image](https://learnopengl.com/img/lighting/light_casters_cos.png)

### Smooth/Soft edges
* using simulate a spotlight having an inner and an outer cone
$$
\begin{aligned} 
I = \frac{\theta - \gamma}{\epsilon} 
\end{aligned}
$$
* Here $\epsilon$ (epsilon) is the cosine difference between the inner ($\phi$) and the outer cone ($\gamma$) ($\epsilon = \phi - \gamma$). The resulting $I$ value is then the intensity of the spotlight at the current fragment.
* 
|$\theta$	|$\theta$ in degrees| $\phi$ (inner cutoff)| $\phi$ in degrees	|$\gamma$ (outer cutoff) |$\gamma$ in degrees |$\epsilon$	|$I$
| :-: | :-: | :-: | :-: | :-: | :-: | :-: | :-: |
|0.87	|30 |	0.91	|25	    |0.82	|35	    |0.91 - 0.82 = 0.09	        |0.87 - 0.82 / 0.09 = 0.56
|0.9	|26 |	0.91	|25	    |0.82	|35	    |0.91 - 0.82 = 0.09	        |0.9 - 0.82 / 0.09 = 0.89
|0.97	|14 |	0.91	|25	    |0.82	|35	    |0.91 - 0.82 = 0.09	        |0.97 - 0.82 / 0.09 = 1.67
|0.83	|34 |	0.91	|25	    |0.82	|35	    |0.91 - 0.82 = 0.09	        |0.83 - 0.82 / 0.09 = 0.11
|0.64	|50 |	0.91	|25	    |0.82	|35	    |0.91 - 0.82 = 0.09	        |0.64 - 0.82 / 0.09 = -2.0
|0.966	|15 |	0.9978	|12.5	|0.953  |17.5	|0.9978 - 0.953 = 0.0448	|0.966 - 0.953 / 0.0448 = 0.29
```GLSL
float theta     = dot(lightDir, normalize(-light.direction));
float epsilon   = light.cutOff - light.outerCutOff;
float intensity = clamp((theta - light.outerCutOff) / epsilon, 0.0, 1.0);    
...
// we'll leave ambient unaffected so we always have a little light.
diffuse  *= intensity;
specular *= intensity;
...
```

## Multiple Lights
* To use more than one light source in the scene we want to encapsulate the lighting calculations into GLSL functions. The reason for that is that the code quickly gets nasty when we do lighting computations with multiple light types, each requiring different computations. If we were to do all these calculations in the main function only, the code quickly becomes difficult to understand.

*  If for example two light sources are close to the fragment, their combined contribution would result in a more brightly lit fragment compared to the fragment being lit by a single light source


## Glossary
* `Color vector`: a vector portraying most of the real world colors via a combination of red, green and blue components (abbreviated to RGB). The color of an object is the reflected color components that an object did not absorb.
* `Phong lighting model`: a model for approximating real-world lighting by computing an ambient, diffuse and specular component.
* `Ambient lighting`: approximation of global illumination by giving each object a small brightness so that objects aren't completely dark if not directly lit.
* `Diffuse shading`: lighting that gets stronger the more a vertex/fragment is aligned to a light source. Makes use of normal vectors to calculate the angles.
* `Normal vector`: a unit vector that is perpendicular to a surface.
* `Normal matrix`: a 3x3 matrix that is the model (or model-view) matrix without translation. It is also modified in such a way (inverse-transpose) that it keeps normal vectors facing in the correct direction when applying non-uniform scaling. Otherwise normal vectors get distorted when using non-uniform scaling.
* `Specular lighting`: sets a specular highlight the closer the viewer is looking at the reflection of a light source on a surface. Based on the viewer's direction, the light's direction and a shininess value that sets the amount of scattering of the highlight.
* `Phong shading`: the Phong lighting model applied in the fragment shader.
* `Gouraud shading`: the Phong lighting model applied in the vertex shader. Produces noticeable artifacts when using a small number of vertices. Gains efficiency for loss of visual quality.
* `GLSL struct`: a C-like struct that acts as a container for shader variables. Mostly used for organizing input, output, and uniforms.
* `Material`: the ambient, diffuse and specular color an object reflects. These set the colors an object has.
* `Light (properties)`: the ambient, diffuse and specular intensity of a light. These can take any color value and define at what color/intensity a light source shines for each specific Phong component.
* `Diffuse map`: a texture image that sets the diffuse color per fragment.
* `Specular map`: a texture map that sets the specular intensity/color per fragment. Allows for specular highlights only on certain areas of an object.
* `Directional light`: a light source with only a direction. It is modeled to be at an infinite distance which has the effect that all its light rays seem parallel and its direction vector thus stays the same over the entire scene.
* `Point light`: a light source with a location in a scene with light that fades out over distance.
* `Attenuation`: the process of light reducing its intensity over distance, used in point lights and spotlights.
* `Spotlight`: a light source that is defined by a cone in one specific direction.
* `Flashlight`: a spotlight positioned from the viewer's perspective.
* `GLSL uniform array`: an array of uniform values. Work just like a C-array, except that they can't be dynamically allocated.