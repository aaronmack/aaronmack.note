# USD 
* [1] Overview https://graphics.pixar.com/usd/docs/index.html
* [2] Github https://github.com/PixarAnimationStudios/USD
* [3] API https://graphics.pixar.com/usd/docs/api/index.html
* [4] What's the Difference Between a URI and a URL? https://danielmiessler.com/study/difference-between-uri-url/

## Modules

### base
* [1] `\dev-asset\programming\research_usd\base`
* [2] [IEEE 754](../technology/technology_glossary#IEEE-754)
* [3] Imath-repo https://github.com/AcademySoftwareFoundation/Imath

#### Arch
**Arch: Architecture Dependent** module **centralizes functionality** that must be implemented differently for different operating systems or architectures, so that we can avoid littering the entire code-base with conditionally-compiled code.

1. Bits: Functions having to do with how bits are laid out on a machine.
2. Multithreading: Functions having to do with multithreading.
3. Math: Functions for math
4. Strings: Functions having to do with string massaging/manipulation.
5. System Functions: Functions that encapsulate differing low-level system calls.
6. Memory Management: Functions having to do with memory allocation/handling.
7. Diagnostics: Functions having to do with error reporting/handling.
8. Symbol Visibility: Macros having to do with symbol visibility.

#### Tf
**Tf: Tools Foundations** module is a **catch-all for low-level, commonly used services developed at Pixar**, including facilities for memory tracking, error reporting and debugging, string utilities, boost python wrapping aids, threading/synchronization tools, registry and singleton management, smart pointers, and "observer pattern" support, which we call "notification".

Contains foundation classes and functions for all C/C++ software development.

* The high-level grouping of C++ classes and functions is as follows:
  1. Memory Management - `TfRefPtr, TfWeakPtr, TfRefBase, TfWeakBase, TfMallocTag`
  2. Runtime Typing - `TfType, TfEnum, TfTypeInfoMap`
  3. Path Utilities - `TfRealPath, TfNormPath, TfAbsPath, TfReadLink, TfGlob`
  4. Diagnostic Utilities - `TF_AXIOM(), TF_FATAL_ERROR(), TF_CODING_ERROR(), TF_RUNTIME_ERROR(), TF_WARN(), TF_STATUS()`
  5. Output For Debugging - `TfDebug, TF_DEBUG(), TF_FUNC_NAME()`
  6. String Utilities - `TfStringPrintf(), TfHash,` (and a large number of miscellaneous free functions)
  7. Containers - `TfByteData, TfArray2, TfArray3, TfTypeInfoMap`
  8. STL Utilities - `TfIterator, TfDeleter, TfMapLookup(), TfOrderedPair()`
  9. Object Creation - `TfSingleton, TfType`
  10. Mathematical Operations - `TfAbs(), TfMin(), TfMax()`
  11. Performance Measurements - `TfStopwatch`
  12. File Utilities - `TfSearchPath`
  13. Systems Extensions and Enhancements - `TfDlopen(), TfDlclose(), TfGetenv()`

* TfType
  * TfType represents a dynamic runtime type.
  * TfTypes are created and discovered at runtime, rather than compile time.
  * Features:
    * unique typename
    * safe across DSO boundaries
    * can represent C++ types, pure Python types, or Python subclasses of wrapped C++ types
    * lightweight value semantics – you can copy and default construct TfType, unlike std::type_info.
    * totally ordered – can use as a std::map key

#### Gf
**Gf : Graphics Foundations** module provides **Pixar's equivalent to imath**, and provides many of the types enumerated in Vt. It also provides other foundational graphics abstractions like frusta and a camera model. 

Contains foundation classes and functions for working with the basic mathematical aspects of graphics.

* The high-level grouping of the classes and functions is as follows:
  1. Linear Algebra - Includes classes representing basic types, including vectors of varying numbers and types (such as vectors of two, three, and four float components), two and three-dimensional arrays of sizes, and compound linear transformations.
  2. Basic Mathematical Operations - Includes classes and functions for performing operations such as converting between radians and degrees, calculating square roots, minimum and maximum values, absolute values, and so on.
  3. Basic Geometry - Includes classes that represent basic types such as one to three-dimensional floating point ranges, three-dimensional bounding boxes, planes, rays, frusta, and a camera model.
  4. Output For Debugging - Includes functions for quickly outputting Gf types (these are particularly useful for diagnostic purposes).

#### Js
**Js: JSON I/O** module provides **a thin API wrapper on top of the RapidJSON package**, which is what our plugin system uses for multi-threaded plugin discovery.

Methods for parsing and writing JSON data from C++, and converting between arbitrary recursive container structures.

This library provides an abstraction of values described by the JSON standard. It abstracts away the details of how the parsing and serialization are performed, in order to allow the implementation to change without affecting clients. It also adheres to the coding standards of this repository, providing a more consistent interface for developers.

The top-level entrypoints are in `js/json.h`

No Python bindings are provided by this library. Use the Python standard library 'json' module when working with json data in Python.

#### Vt
**Vt : Value Types** module provides many of the **concrete types** that Sdf is able to recognize and serialize. It provides a **copy-on-write array-type**, VtArray, which is used for all array types in Usd, and an efficient **type-erasure wrapper** class, VtValue, that also provides datatype conversion facilities and support for unboxing python objects from boost python. VtValue is supported in all Usd API for getting and setting values.

Defines classes that provide for type abstraction (VtValue) and enhanced array types (VtArray). The Vt library also provides functions for manipulating value types. This library operates on the level of language data types and there are differences in the C++ and Python interfaces.

* Type Erasure with VtValue
  * The VtValue class wraps type objects (float, int, bool, GfVec3d, and so on) in a type-agnostic container that includes functions for determining the content type within the container. The VtValue class is found in the C++ API only, since Python does not have the strong type restrictions of C++. Python to C++ type conversion is handled automatically by the system.

* Shared Arrays - VtArray
  * The VtArray class represents an arbitrary length homogeneous container. In the C++ API, the constructor lets you create an array of a specified size. The VtArray interface on the Python side is implemented as a set of typed array classes (for example, BoolArray, StringArray, Vec4dArray).

#### Work
**Work : Multi-threaded Dispatch** module provides a **thin abstraction layer on top of Intel's TBB** (Thread Building Blocks), and is leveraged extensively in Usd core and higher-level services for multi-threading.

* Summary
  * The work library is intended to simplify the use of multithreading in the context of our software ecosystem.
  * This library is intended as a thin abstraction layer on top of a multithreading subsystem. The abstraction serves two purposes:
    * To simplify the use of common constructs like "Parallel For"
    * To centralize our dependency on a particular multithreading subsystem (e.g., TBB, etc.).
  * Because of the way multithreading subsystems work and because of the way they need to interact with each other in managing system resources, it is not generally practical for each client to use whatever threading system they like (e.g., TBB for one client, OpenMP for another).

#### Plug
**Plug: Plugin Framework** module provides** the organization and access API for all plugins**. It identifies plugins by the existence of a plugInfo.json manifest file, which enumerates the number and kinds of plugins provided by a module.

* Overview
  * Provides a plug-in framework implementation. The PlugPlugin class defines the interface to plug-in modules. The PlugRegistry class defines a mechanism for discovering and registering plug-in modules both automatically upon first use and manually at run-time by client calls to PlugRegistry::RegisterPlugins. PlugRegistry sends the PlugNotice::DidRegisterPlugins notice when new plug-ins are registered (both when Plug is first used and again for subsequent calls to PlugRegistry::RegisterPlugins).
  * PlugRegistry also provides a mechanism to find TfType objects for types defined in plug-ins, then find the plug-ins that provide those types, and read metadata related to those plug-ins and the contained types, and load the plug-ins.
  * The PlugPlugin class contains properties that indicate whether or not a plug-in is currently loaded and whether a plug-in is a Python module or a C++ shared library. It also includes functions that return a plug-in's name, location in the file system, the names of its base classes, its metadata, and any existing dependencies.

#### Trace
**Trace: Performance tracking** Defines **utility classes for counting, timing, measuring, and recording events**.

* Overview
  * Defines utility classes for counting, timing, measuring, and recording events. The TraceCollector class records TraceEvent objects. The TraceReporter class contains functions to generate reports on events gathered by the TraceCollector object.

### usd
* [1] `\dev-asset\programming\research_usd\usd`

#### Ar
**Ar: Asset Resolution** module defines **the abstract interface for USD's asset resolution plugin**, so that clients can author asset references in their USD files that make sense to their asset management systems.

The Ar (Asset Resolution) library is responsible for querying, reading, and writing asset data. It provides several interfaces that allow USD to access an asset without knowing how that asset is physically stored.

URI: A URI is an identifier of a specific resource. Like a page, or book, or a document.[4]

> ArResolver

ArResolver is the central interface for asset operations in Ar. Clients can implement subclasses of this interface to customize behaviors for their asset system.

> Asset Path Resolution

An asset path is a string that describes the location of an asset in a user's system. These paths are used extensively throughout USD; for example, asset paths are used to specify sublayers, references, and payloads in scene description.

> Resolver Contexts

A resolver context is an object that stores configuration or other information that can be used by a resolver to guide path resolution and other operations. Resolver contexts can be bound within blocks of code to affect resolver operations within that scope via an ArResolverContextBinder. UsdStage uses this functionality heavily to allow different stages to resolve asset paths differently.

#### Kind

**Kind : Extensible Categorization** module provides a simple, site-extensible token-based typing system, which USD uses, for example, **to identify and classify types of "models".**

The Core Kind Hierarchy

The KindRegistry begins its life pre-loaded with the following hierarchy of kinds that define our concept of "model hierarchy", which is so central to our organization and discovery of scene description. Of course, as described in the next section, unlimited new, entirely unrelated taxonomies can be created by extension.

*  model - Everything in the model hierarchy is a kind of model.
  * component - A component model is a terminal model in the model hierarchy - it can have no child models.
  * group - a model that is simply a container for other models.
    * assembly - An "important" group model - often because it is itself a published asset.
* subcomponent - Within a component model, subcomponents identify important (generally articulable) sub-trees. Subcomponents are "stopping points" when dynamically unrolling/expanding a component.

#### Sdf

**Sdf : Scene Description Foundations** module defines the Usd data model, namely: prims, attributes, relationships, meta-data, as well as the concrete types that attributes can possess. Sdf also provides the key abstraction SdfLayer, which represents a file of data subscribing to the Usd data model, and provides low-level data authoring and extraction API's. SdfLayer also has an associated plugin mechanism known as SdfFileFormat that allows any reasonable file format to be dynamically

Sdf provides the foundations for serializing scene description to a reference ascii format, or a (multitude of) plugin-defined format. It also provides the primitive abstractions for interacting with scene description, such as SdfPath, SdfLayer, SdfPrimSpec.

#### Pcp
**Pcp : PrimCache Population (Composition)** module implements the composition logic at the heart of USD; Pcp efficiently builds and caches an "index cache" that the Usd scenegraph uses to determine which prims need to be populated, and where to look for values for any particular property in a multi-layer aggregation of assets.

### imaging
* [1] `\dev-asset\programming\research_usd\imaging`

### usdImaging
* [1] `\dev-asset\programming\research_usd\usdImaging`

# rez
* *https://github.com/nerdvegas/rez*

## configuration

```bash
cd C:\DEV_PROJECT\dev-repository
git clone https://github.com/nerdvegas/rez.git
cd rez
python ./install.py -v ./build
set path=C:\DEV_PROJECT\dev-repository\rez\build\Scripts;%path%
```

```bash
# cmd run as admin
rez-bind platform
rez-bind arch
rez-bind os
rez-bind python
rez-bind --quickstart

rez-env python -- which python
rez-env python -- where python
```

```bash
cd C:\DEV_PROJECT\dev-repository\rez\example_packages\hello_world
rez-build --install

rez-env hello_world
rez-env hello_world -- hello
rez-env hello_world -- python "C:\Users\Aaron\packages\hello_world\1.0.0\bin\hello"
```

```bash
rez env
rez gui
```