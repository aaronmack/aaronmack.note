## Assimp
These so called 3D modeling tools allow artists to create complicated shapes and apply textures to them via a process called uv-mapping. The tools then automatically generate all the vertex coordinates, vertex normals, and texture coordinates while exporting them to a model file format we can use. This way, artists have an extensive toolkit to create high quality models without having to care too much about the technical details. All the technical aspects are hidden in the exported model file.

All by all, there are many different file formats where a common general structure between them usually does not exist. So if we want to import a model from these file formats, we'd have to write an importer ourselves for each of the file formats we want to import

### A model loading library
A very popular model importing library out there is called Assimp that stands for Open Asset Import Library. Assimp is able to import dozens of different model file formats (and export to some as well) by loading all the model's data into Assimp's generalized data structures. As soon as Assimp has loaded the model, we can retrieve all the data we need from Assimp's data structures. Because the data structure of Assimp stays the same, regardless of the type of file format we imported, it abstracts us from all the different file formats out there.

![assimp_structure](https://learnopengl.com/img/model_loading/assimp_structure.png)

* Structure
  * All the data of the scene/model is contained in the Scene object like all the materials and the meshes
  * The Root node of the scene may contain children nodes (like all other nodes) 
  * A Mesh object itself contains all the relevant data required for rendering, think of vertex positions, normal vectors, texture coordinates, faces, and the material of the object.
  * A mesh contains several faces. A Face represents a render primitive of the object (triangles, squares, points). A face contains the indices of the vertices that form a primitive. 
  * Finally a mesh also links to a Material object that hosts several functions to retrieve the material properties of an object

* Mesh
  * When modeling objects in modeling toolkits, artists generally do not create an entire model out of a single shape. Usually, each model has several sub-models/shapes that it consists of. Each of those single shapes is called a mesh. 

* Build Assimp

```bash
# windows
set http_proxy=http://127.0.0.1:10809
set https_proxy=http://127.0.0.1:10809

git clone https://github.com/Microsoft/vcpkg.git
cd vcpkg
.\bootstrap-vcpkg.bat
.\vcpkg integrate install


> All MSBuild C++ projects can now #include any installed libraries.
> Linking will be handled automatically.
> Installing new libraries will make them instantly available.
> CMake projects should use: "-DCMAKE_TOOLCHAIN_FILE=C:/DEV_PROJECT/dev-repository/vcpkg/scripts/buildsystems/vcpkg.cmake"

# using vcpkg
vcpkg install assimp:x64-windows

> The package assimp:x86-windows provides CMake targets:

>    find_package(Assimp CONFIG REQUIRED)
>    target_link_libraries(main PRIVATE assimp::assimp)

```

### Mesh
A mesh should at least need a set of vertices, where each vertex contains a position vector, a normal vector, and a texture coordinate vector. A mesh should also contain indices for indexed drawing, and material data in the form of textures (diffuse/specular maps).


### Model

The Model class contains a vector of Mesh objects and requires us to give it a file location in its constructor. It then loads the file right away via the loadModel function that is called in the constructor. The private functions are all designed to process a part of Assimp's import routine

```c++
class Model 
{
    public:
        Model(char *path)
        {
            loadModel(path);
        }
        void Draw(Shader &shader);	
    private:
        // model data
        vector<Mesh> meshes;
        string directory;

        void loadModel(string path);
        void processNode(aiNode *node, const aiScene *scene);
        Mesh processMesh(aiMesh *mesh, const aiScene *scene);
        vector<Texture> loadMaterialTextures(aiMaterial *mat, aiTextureType type, 
                                             string typeName);
};
```

**loadModel**

first declare an `Importer` object from Assimp's namespace and then call its `ReadFile` function. The function expects a file path and several post-processing options as its second argument.

Assimp allows us to specify several options that forces Assimp to do extra calculations/operations on the imported data. By setting `aiProcess_Triangulate` we tell Assimp that if the model does not (entirely) consist of triangles, it should transform all the model's primitive shapes to triangles first. The `aiProcess_FlipUVs` flips the texture coordinates on the y-axis where necessary during processing

```c++
Assimp::Importer importer;
const aiScene *scene = importer.ReadFile(path, aiProcess_Triangulate | aiProcess_FlipUVs); 
```

**Assimp to Mesh**
Translating an aiMesh object to a mesh object of our own is not too difficult. All we need to do, is access each of the mesh's relevant properties and store them in our own object. 

**Indices**
Assimp's interface defines each mesh as having an array of faces, where each face represents a single primitive, which in our case (due to the aiProcess_Triangulate option) are always triangles. A face contains the indices of the vertices we need to draw in what order for its primitive

**Material**
a mesh only contains an index to a material object.