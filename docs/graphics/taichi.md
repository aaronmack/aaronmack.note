## Fork
https://github.com/aaronmack/taichi-fork.git

git remote add upstream https://github.com/taichi-dev/taichi.git

git pull --rebase upstream master

## Docker build

docker build . --build-arg http_proxy=http://ip:10809

## Basal knowledge
* Fields
Array of high latitudes

* Vector.Field
each data not scalar but vector

* Matrix.field

* Functions and Kernel
kernel can call func, but func can't call kernel

* Matrices
ti.Matrix is for small matrices (e.g. 3x3) only

## Build from source

### Custom Test With Self

0. Setting Windows Env: `TI_CACHE_RUNTIME_BITCODE` = 1   `TAICHI_REPO_DIR` = C:\DEV_PROJECT\dev-repository\taichi
1. Install  Microsoft Visual C++ Redistributable: `https://aka.ms/vs/16/release/vc_redist.x64.exe`

1. CLion CMake Config: `-G "Visual Studio 15 2017 Win64" -DPYTHON_EXECUTABLE="C:\Users\Aaron\scoop\apps\python\current\python.exe" -DLLVM_DIR="C:\DEV_PROJECT\dev-environment\llvm-10_0_0-msvc-x64-windows\lib\cmake\llvm" -DTI_WITH_CUDA:BOOL=True -DCUDA_VERSION=10.1 -DCUDA_DIR="C:\Program Files\NVIDIA GPU Computing Toolkit\CUDA\v10.1"`

2. Run Test
```bash
set PYTHONPATH=C:\DEV_PROJECT\dev-repository\taichi\python
python C:\DEV_PROJECT\dev-asset\graphics_engine\Taichi\tests\working_test.py
```

3. Run Example

```bash
set PYTHONPATH=C:\DEV_PROJECT\dev-repository\taichi\python
python C:\DEV_PROJECT\dev-asset\graphics_engine\Taichi\examples\fractal.py
```

* Note
  * [Taichi] mode=development -> [Taichi] mode=Release: If set `TAICHI_REPO_DIR` var

### Reference From CI Of Taichi-Repo

* Build-old

```bash
set PYTHON=C:\Users\Aaron\scoop\apps\python\3.7.7\python.exe
# set http_proxy=http://127.0.0.1:10809
# set https_proxy=https://127.0.0.1:10809
# set http_proxy=
# set https_proxy=
git clone -q --branch=master https://github.com/taichi-dev/taichi.git C:\taichi
cd C:\taichi
git checkout -qf 6c4f0d89117d22cae912a0b1339a544ab608c6b3
set TAICHI_REPO_DIR=C:\taichi
# %PYTHON% %TAICHI_REPO_DIR%/misc/appveyor_filter.py || appveyor exit 0
cd C:\taichi_env
curl --retry 10 --retry-delay 5 --proxy http://127.0.0.1:10809 https://github.com/taichi-dev/taichi_assets/releases/download/llvm10/taichi-llvm-10.0.0-msvc2019.zip -LO
7z x taichi-llvm-10.0.0-msvc2019.zip -otaichi_llvm
curl --retry 10 --retry-delay 5 --proxy http://127.0.0.1:10809 https://github.com/taichi-dev/taichi_assets/releases/download/llvm10/clang-10.0.0-win.zip -LO
7z x clang-10.0.0-win.zip -otaichi_clang
set PATH=C:\taichi_env\taichi_llvm\bin;%PATH%;
set PATH=C:\taichi_env\taichi_clang\bin;%PATH%
set PYTHONPATH=%TAICHI_REPO_DIR%/python
set PATH=%TAICHI_REPO_DIR%\bin;%PATH%
cd C:\taichi
%PYTHON% misc/ci_setup.py ci
mkdir build
cd build
cmake .. -G"Visual Studio 16 2019" -A x64 -DPYTHON_EXECUTABLE="%PYTHON%" -DLLVM_DIR="C:\taichi_env\taichi_llvm\lib\cmake\llvm"
call "G:\Developer\Microsoft Visual Studio\2019\Community\VC\Auxiliary\Build\vcvars64.bat"
msbuild /p:Configuration=RelWithDebInfo /p:Platform=x64 /m taichi.sln

cd ..
%PYTHON% -c "import taichi"
%PYTHON% examples/laplace.py
%PYTHON% bin/taichi diagnose
%PYTHON% bin/taichi test -Cvr2 -t2

cd python && %PYTHON% build.py test

cd C:\taichi\python\dist
pip install --target C:\taichi\build\taichi taichi-0.7.12-cp37-cp37m-win_amd64.whl
```

* Build-2022-04-17

```bash
# 1
cd C:\DEV_PROJECT\dev-repository
git clone --recursive https://github.com/taichi-dev/taichi.git

git submodule update --init --recursive

# 2
cd C:\DEV_PROJECT\dev-repository\taichi
$env:HTTP_PROXY="http://127.0.0.1:10809"
$env:HTTPS_PROXY="http://127.0.0.1:10809"

# 3
.\.github\workflows\scripts\win_build.ps1 -installVulkan -libsDir C:\

# 4
$env:PATH += ";C:/ccache-4.5.1-windows-64"
$env:PATH += ";C:/taichi_clang/bin"
```

* Test

```bash
set PYTHONPATH=C:\taichi\build\taichi
python C:\taichi\build\taichi\taichi\examples\fem128.py
```

## Resource

* DOCS `https://taichi.readthedocs.io/zh_CN/latest/index.html`