# 3D游戏与计算机图形学中的数学方法

* EX 外部

## 渲染管线

### 图形处理器

* OpenGL中基本图形元素
  * [OpenGL库中定义的10种基本图形元素](https://cdn.jsdelivr.net/gh/aaronmack/image-hosting@master/graphics/OpenGL库中定义的10种基本图形元素.65opxy0tpkc0.webp)
* GPU与CPU通信模型
* [GPU与CPU之间的通信](https://cdn.jsdelivr.net/gh/aaronmack/image-hosting@master/graphics/GPU与CPU之间的通信.3nemcje2u060.webp)

### 顶点变换

* 坐标空间
  * [渲染管线中的坐标空间](https://cdn.jsdelivr.net/gh/aaronmack/image-hosting@master/graphics/渲染管线中的坐标空间.2nbs5lyqbqa0.webp)

### 光栅化

* 光栅化
  * 几何模型的顶点经过裁剪并转换到窗口空间后, GPU必须确定视见区内的哪些像素被图形元素覆盖。对几何元素覆盖的像素的水平填充过程称为光栅化。

* Z缓冲区
* 模型视图变换
* 裁切空间

## 向量

> 向量是所有3D游戏引擎的重要基础,被用来表示空间中的点,如游戏中的物体位置或者三角网格的顶点。向量还可以表示空间中的方向,如虚拟相机的方向或三角网格的表面法向量。

### 向量性质

* 行向量
* 列向量
* 转置
* 向量减法
  * $\mathbb{P}-\mathbb{Q}=\mathbb{P}+(-\mathbb{Q})$
* 向量模长
  * $$\begin{aligned} ||\mathbb{V}||=\sqrt{\sum_{i=1}^{n}V_{i}^{2}} \end{aligned}$$
* 单位长度向量
* 三角不等式

### 内积

* 余弦定理
* 正交向量
* Cauchy-Schwarz不等式
* 向量投影
* 投影的矩阵表示
  * 向量P在向量Q上的投影是向量P的线性变换，可以表示成矩阵向量乘积的形式

### 外积

* 伪行列式
* 计算三角形面积
* 右手定则
* 计算平行四边形面积

### 向量空间

* 向量空间$\mathbb{R}^n$
* 基
  * 如果向量空间的所有向量都可由其子集的向量线性组合产生,则该子集称为向量空间的基。
* 线性无关
* 正交基
  * 在向量空间的基$\beta$中,如果任意两个向量$e_1$,和$e_2$,如果$e_1\cdot e_2=0$,则基$\beta$称为向量空间的正交基。
* 规范正交基
* Gram-schmidt正交化算法

## 矩阵

> 在3D图形引擎中,计算可以在多个不同的笛卡儿坐标空间中执行,从一个坐标空间到另一个坐标空间需要使用变换矩阵。

### 矩阵性质

* 方阵
* 转置矩阵
* 矩阵与内积
* 单位矩阵
* 相关矩阵
* 矩阵乘积

### 线性方程组

* 矩阵与线性方程组
  * 矩阵给了线性方程组一个紧凑和方便的表示形式
* 系数矩阵
* 常数向量
* 齐次线性方程组
  * 常数向量为零向量的线性方程组
  * 齐次线性方程组至少有一个0向量解
* 初等行变换
* 增广矩阵
* 简约矩阵
  * 计算简约矩阵用于解方程组
* 非平凡解

### 逆矩阵

* 奇异矩阵
  * 没有逆矩阵的矩阵
  * 任何一个具有0行或者0列的矩阵都是奇异矩阵
* Gauss-Jordan消去法
  * 该算法用于计算$n\times n$矩阵$M$的逆矩阵

### 行列式

* 行列式
  * 从矩阵元素导出的一个标量
* 代数余子式
* 单位矩阵的行列式
* 矩阵初等行变换对矩阵行列式的影响
* 矩阵可逆
  * 当且仅当$det\mathbb{M}\neq 0$时,$n\times n$矩阵$M$可逆。
* 逆矩阵的显示表达式
  * $\mathbb{A}^{-1} = \frac{1}{det\mathbb{A}} \left [ \begin{matrix} A_{22}&-A_{12} \\ -A_{21}&A_{11} \end{matrix} \right ]$
* 代数余子式矩阵
* 克莱姆法则

### 特征值和特征向量

* 特征值与特征向量
  * 对于任意可逆方阵,存在一个向量,用该矩阵乘以该向量后,向量的大小发生改变而方向不变
* 对称矩阵
  * 一个矩阵的元素相对主对角线对称
* 性质
  * 由实数元素组成的对称矩阵M的特征值为实数
  * 对称矩阵M的两个不同特征值分别对应的特征向量正交。 
* 共轭
* 复数的共轭
  * 向量和矩阵上的横线表示复数的共轭，表示向量和矩阵进行复数运算
  * $(a+bi)(a-bi)=a^2+b^2; i^2=-1$<div align=center><img src="https://cdn.jsdelivr.net/gh/aaronmack/image-hosting@master/mathematics/ComplexNumberMultiply.10j3nh4rfqqo.webp" width="790"></div>[[1]](https://socratic.org/questions/how-do-you-multiply-a-bi-a-bi)
  
### 矩阵对角化

* 对角矩阵
  * 对角矩阵是指只有主对角线上含有非零元素的矩阵

## 坐标变换

> 对于所有3D图形引擎来说,将一组向量从一个坐标空间变换到另一个坐标空间的操作是最常用和最基本的操作之一。例如,一个模型的顶点坐标通常以对象空间的坐标形式保存,而在渲染该模型前,顶点坐标必须变换到虚拟相机空间才能被正确处理

### 线性变换

* 正交矩阵
  * 正交矩阵的逆等于它的转置
  * 正交矩阵用于向量的变换时,可以保持向量的长度和角度不变。也就是保持坐标系的整体结构不变
  * 正交矩阵仅可用于旋转变换和反射变换或者二者组合
* 反射变换
  * 指沿某个方向镜像时的变换操作
* 偏手性
  * 可以通过计算一个矩阵的行列式来判断该矩阵是否包含反射变换
* 右手螺旋基
  * $(V_1\times V_2)\cdot V_3 > 0$称为右手螺旋基，反之称为左手螺旋基
  
### 比例变换

* 均匀变换与非均匀变换

### 旋转变换

* 从2维扩到3维
* 绕xyz轴向旋转<div align=center><img src="https://cdn.jsdelivr.net/gh/aaronmack/image-hosting@master/mathematics/三维旋转矩阵.5s4txo4uyq00.webp" width="390"></div>
* 绕任意轴旋转[[1]](https://cdn.jsdelivr.net/gh/aaronmack/image-hosting@master/mathematics/三维空间绕任意轴旋转矩阵的推导.2ndjymow1g40.webp)
  * ${v}$绕${n}$旋转
  * 分解${v}$有$v_{\perp}$和$v_{\parallel}$
  * 记${w}$为$n$和$v_{\perp}$的叉积 （由$n$为单位向量得知则$w$和$v_{\perp}$的大小一致）
  * ${v}$到${v}'$的旋转可以看做是$v_{\perp}$到$v_{\perp}'$和$v_{\parallel}$的旋转的组合
  * 有${v}'={v}_{\perp}'+{v}_{\parallel}$

### 齐次坐标

* 平移变换
  * 坐标系在空间中的平移变换可通过加上一个偏移向量实现,平移变换而不影响坐标轴的方向和比例,而且也不能表示成3X3矩阵的形式。
* 四维齐次坐标
* 点与方向
  * 在三维空间中,表示一个点的向量和表示方向的向量是不同的
  * 为了表示三维下的平移，而我们提升到了四维，但在平移中，表示点的向量要发生改变，而表示方向的向量保持不变，为了在四维下对点和向量使用相同的变换，我们另其四维齐次坐标中的w分量等于0，来表示对向量的变换，w等于1表示对点的变换，则这样后我们有• vector + vector = vector • point – point = vector • point + vector = point • point + point = ?? (两个点中间的那个点,因为w分量被加到2，为了变回1，都除以2)
* 坐标w的几何意义

### 法向量变换

> 多边形模型中的顶点除了空间位置信息,还包括一些关于该顶点与周围表面关系的附加信息。在所有附加信息中,一个切向量和一个法向量是最常见的顶点附加信息。当进行模型变换时,不仅要变换顶点的位置,还要变换这些法向量和切向量。

* 切向量
  * 切向量可通过计算一个顶点向量与另一个顶点向量之间的差获得
* 法向量
  * 当使用非正交矩阵变换法向量时，变换后的法向量常常指向一个与变换表面不垂直的方向
  * 切向量T和法向量N需要满足方程$T\cdot N=0$变换后的$T'\cdot N'$也需要满足<div align=center><img src="https://cdn.jsdelivr.net/gh/aaronmack/image-hosting@master/graphics/image.6dqax3djyx80.webp" width="390"></div>
  * 如果矩阵M为正交矩阵,那么$M^{-1}=M^{T}$,则$(M^{-1})^{T}=M$,这时为了计算法向量的变换矩阵的求逆矩阵和转置矩阵的操作可以避免
* 共变向量
  * 例如法向量变换后保持还需保持垂直与变换后的平面
* 逆变向量
  * 以矩阵M为变换矩阵的普通方式变换

### 四元数

* Refer: 
  * [1] 四元数与三维旋转 https://github.com/Krasjet/quaternion/blob/master/quaternion.pdf

> 四元数是3D图形程序员用来表示旋转的数学方法,在许多情况下,与用矩阵表示的旋转相比,用四元数表示的旋转有很多优点,四元数所需的存储空间比矩阵少,合并四元数所需的代数操作少,对四元数的插值更容易实现,从而产生更连续的动画。

* Hamilton四元数环
* 四维向量空间
* 四元数集合
  * 四元数集合是对复数集合的自然扩展
* 四元数的乘法
* 四元数的共轭
* 四元数旋转
  * 三维空间的旋转可以看成函数$\phi$在三维向量空间$\mathbb{R}$内的映射变换。
  * 需要保持长度、角度和偏手性不变
  * (当对一个对象进行多次旋转操作时，使用四元数进行变换可以提高效率)
* 同态函数
* 球形线性插值
  * 可以参考[[1]](https://krasjet.github.io/quaternion/quaternion.pdf)
  * 由于四元数$q$和$-q$表示相同的旋转,所以$q_1$和$q_2$的符号的选取应保证$q_1\cdot q_2\geq 0$,这可保证沿着$q_1$到$q_2$的最短路径插值。

## 3D引擎中的几何学

### 三维空间中的直线

* 直线的参数化表达
* 射线的参数方程
* 点与直线间的距离
* 直线间的距离
  * 函数$f(t_1,t_2)$的最小值可以通过令其相对于$t_1$和$t_2$的偏导数为0得到

### 三维空间中的平面

* 平面的方程
* 直线和平面的交点
* 三个平面斜交
  * 一个空间区域通常表示成由一系列平面为边界的凸多面体的形式。该多面体的边和顶点可以通过执行多次三个平面的求交运算得出。 
* 平面变换

### 视锥

> 在三维场景中,视锥是包含所有可视内容的空间体。 

* 视场
* 投影平面
  * 投影平面是一个与相机指向垂直的平面，其距离也被称为焦距
* 焦距
* 锥平面

### 透视校正插值

* 相似三角形
* 深度插值
  * 三角形面上一点的z坐标(表示深度)可由3D图形硬件通过线性插值得到
  * $ax+bz=c (c\neq 0), \frac{p}{x} = \frac{-e}{z} \Rightarrow (-\frac{ap}{e}+b)z=c \Rightarrow \frac{1}{z}=-\frac{ap}{ce}+\frac{b}{c} \Rightarrow \frac{1}{z_3}=\frac{1}{z_1}(1-t)+\frac{1}{z_2}t$
  * (**三角形面上的插值点的坐标值的倒数是线性插值**) **EX**: 为什么会这样呢？我们知道，透视矩阵最终除以$w$项其实就是除以$-z$项，在除以$-z$之前是线性的，除以之后为非线性，而在这里我们又用$1$比上了这个非线性插值,将其又变回线性插值
* 顶点属性插值
  * 顶点携带的光照颜色和纹理映射坐标等信息统称为顶点属性。当对三角形进行光栅化时,三角形面中任一点的属性需对相应顶点属性进行插值而获得。
  * 两个端点的属性差之比等于插值深度值与两个端点的深度值差之比
  * **三角形面上的插值属性与z坐标值的倒数的乘积b/z是线性插值**。当光栅化一条扫描线时,图形处理器首先计算1/z的线性插值,再计算其倒数,最后乘以b/z的线性插值结果,则可获得顶点属性b的透视校正插值结果[[三角形内插值]](https://cdn.jsdelivr.net/gh/aaronmack/image-hosting@master/graphics/三角形内插值.58nkjvv3tvo0.webp)

### 投影

* 隐藏面剔除算法
* 透视投影
  * 通过将视锥映射成立方体可实现透视投影 (**EX**: 在GAMES101中讲述的，透视变换可以先进行Persp->Ortho的变换，然后再应用Ortho变换即可实现透视效果，其中P->O就是将椎体后面压扁，实现近大远小效果)
  * 无穷远投影矩阵<div align=center><img src="https://cdn.jsdelivr.net/gh/aaronmack/image-hosting@master/graphics/无穷远投影矩阵.2mpj1z8e6u20.webp"></div>
* 正投影
  * 正投影也被称为平行投影,不会出现透视扭曲现象。由于不存在透视扭曲,正投影中的三角形的深度可用线性插值获得
* 提取锥平面<div align=center><img src="https://cdn.jsdelivr.net/gh/aaronmack/image-hosting@master/graphics/Extracting-Frustum-Planes.2nvo6s38s0k0.webp"></div>

### 镜像与倾斜裁剪

* [1] Projection matrix with oblique near clip plane https://forum.yoyogames.com/index.php?threads/projection-matrix-with-oblique-near-clip-plane.60537/
* 使用一个虚拟摄像机，这个虚拟摄像机与主摄像机是反射关系，因为反射关系，所以虚拟摄像机需要使用左手坐标系
* 当物体没有插入到水中时(这里也就是反射平面内)，一切都OK，但当物体插入到水中时，就会导致一些额外的结果不是我们想要的，因为此时插入水中的物体距离虚拟摄像机的距离比反射平面到虚拟摄像机的距离**要近**
* 一般解决方案是允许用户自定义反射裁切平面将位于反射表面下的物体裁剪掉；但这里又会带来一个麻烦，就是这个物体需要保存两个版本，且多一个平面 参考`Eric Lengyel, “Oblique Depth Projection and View Frustum Clipping",Journal of Game Development, Vol. I, No. 2 (Mar 2005), pp. 5-16)`
* 参考中的解决方案是一个自定义的平面来**代替**透视投影矩阵中的**近锥平面**来实现将物体裁切掉
* 参考 [1](https://cdn.jsdelivr.net/gh/aaronmack/image-hosting@master/graphics/Oblique-View-Frustum-Clipping.2kzechajkxq0.webp)
* 图片 [1](https://cdn.jsdelivr.net/gh/aaronmack/image-hosting@master/graphics/倾斜裁剪.41p6z2xr6fs0.webp)

```c++
inline float sgn(float x)
{
  if (x > 0.0F) return (1.0F);
  if (x < 0.0F) return (-1.0F);
  return (0.0F);
}
void ModifyProjectionMatrix(const Vector4D& clipPlane)
{
  float matrix[16];
  Vector4D q;
  // Grab the current projection matrix from OpenGL.
  glGetFloatv(GL_PROJECTION_MATRIX, matrix);
  // Calculate the clip-space corner point opposite the clipping plane
  // using Equation (5.64) and transform it into camera space by
  // multiplying it by the inverse of the projection matrix.
  q.x = (sgn(clipPlane.x) + matrix[8]) / matrix[0];
  q.y = (sgn(clipPlane.y) + matrix[9]) / matrix[5];
  q.z = -1.0F;
  q.w = (1.0F + matrix[10]) / matrix[14];
  // Calculate the scaled plane vector using Equation (5.68)
  // and replace the third row of the projection matrix.
  Vector4D c = clipPlane * (2.0F / Dot(clipPlane, q));
  matrix[2] = c.x;
  matrix[6] = c.y;
  matrix[10] = c.z + 1.0F;
  matrix[14] = c.w;
  // Load it back into OpenGL.
  glMatrixMode(GL_PROJECTION);
  glLoadMatrix(matrix);
}
```

## 光线追踪

### 多项式的根

* 二次多项式
* 三次多项式
  * 变量替换
* 四次多项式
* 牛顿方法
  * The Newton-Raphson iteration method, usually just called Newton’s method, is a
numerical technique that can find roots of an arbitrary continuous function by
iterating a formula that depends on the function and its derivative.
  * 图片 https://cdn.jsdelivr.net/gh/aaronmack/image-hosting@master/mathematics/牛顿法.4g88fy21fua0.webp
* 倒数与平方根的精细化
  * 快速平方根倒数/Fast Inverse Square Root

### 表面求交

* 光线方程$\mathbf{P}(t)=\mathbf{S}+t\mathbf{V}$
  * S表示光线的起始位置,V表示光线的照射方向
* 光线与三角形的交点
  * 重心坐标
* 光线与立方体盒相交
* 光线与球面相交
* 光线与圆柱面相交
* 光线与圆环相交

### 计算法向量

* 隐式表面的法向量计算
  * 微分链式法则
  * 微分参数方程

### 反射与折射向量

光线照射到物体表面时,一部分能量将被物体表面吸收,一部分能量被物体表面反射出去,一部分能量也可能被物体本身传导出去

* 反射向量计算
* 折射向量计算
  * Snell/斯涅尔定律
  * 全内反射现象(光线不被折射)

## 光照与着色

光照或者照明通常用来表示计算一"束光线照射到物体表面的颜色和强度的处理过程。着色通常表示用来确定表面上每一点反射到观察者的光线的颜色和强度。光线颜色由照射物体表面的光源颜色和表面本身的反射特性决定。

### RGB颜色

* 颜色调制

### 光源

* 环境光、平行光、点光、聚光灯

* 环境光
  * 环境光是来自各个方向的等强度的光
* 平行光源
  * 也称无穷远光源，适合模拟太阳
* 点光源
  * 点光源是从空间中一点向各个方向发出的等强度的光的光源

### 漫反射

对于照射在漫反射表面上某一点的光,其中部分光线被沿着随机的方向散射出去。漫反射的平均效果可以看成光线的某种颜色,也就是表面的漫反射颜色被**沿任意方向均匀地反射**,这就是所谓的朗伯(Lambertian)反射。由于朗伯反射中光线被沿所有方向均匀反射出去,朗伯反射的视觉效果**与观察者的位置无关**。

### 镜面反射

除了均匀漫反射,大部分照射到物体表面的光线被物体表面**沿着反射方向反射出去**,反射方向是光线的入射方向关于表面法向量的镜像,这样,在物体表面可以产生一个明亮的高光效果,这种反射称为镜面反射。与漫反射不同,物体表面的镜面反射的可见性**与观察者的位置有关**。 

### 纹理映射

可将一个或者多个纹理图覆盖到物体的表面,实现表面更详细的细节

与漫反射颜色一起进行调制

* 标准纹理图
* 投影纹理图
  * 第四个纹理坐标用于投影纹理映射；纹理坐标q的作用在大多数情况下与齐次坐标点中的w坐标相同,默认值为1
  * 投影映射的一个典型应用是模拟一个聚光灯光源将一幅图像投影到环境中
* 立方纹理图
  * 立方纹理图是另外一种对物体进行纹理映射的方法,通常用于模拟模型表面的**环境映射**效果
* 滤波与多级纹理
  * 纹理图分辨率与窗口分辨率不匹配的问题，例如摄像机拉近拉远
  * 双线性滤波方法
  * 三线性滤波方法
  * mipmap

### Emission/发射映射

* 自发光，不受法线影响

### 着色模型

计算三角形表面光照效果的方法称为着色

* 计算法向量
  * 两个向量的外积与其构成的三角形的面积成正比
* Gouraud着色
* Blinn-Phong着色
  * 在Blinn-Phong着色中,不对每个顶点的光照值进行插值,而是对顶点法向量N、指向光源的方向L和指向观察者的方向V进行插值,计算每个像素的光照公式

### 凹凸映射

凹凸映射是一种可为观察者显示更详细细节的技术,在该技术中,纹理图被用来扰动每一像素的法向量,以产生像素级的细节

* 切向量空间
* 计算切向量
  * TBN
* 实现凹凸映射

### 物理反射模型

为了获得真实感更强的光线物理反射模型,需要进一步构造表面的微观结构和光的电磁传播理论

* 双向反射分布函数 BRDF
  * 根据光源方向L和光线反射方向R,计算沿方向L的入射光线被沿着反射方向R反射出去的光能的多少
* **辐射学**/radiometry
  * **光通**/flux
    * 单位时间内光源辐射出的能量或者物体表面吸收的能量称为光通；单位为瓦特 (W)
    * energy per unit time
  * **光通强度**/flux density
    * 单位面积的光源辐射出的能量或者物体表面吸收的能量称为光通强度
  * **辐射强度**/radiosity
    * 物体表面发射出的光通强度称为表面的辐射强度 
    * The flux density emitted by a surface is called the surface’s radiosity
  * **光的辐射强度**/irradiance of the light
    * 照射到表面上的光通强度称为光的辐照强度
    *  the flux density incident on a surface is called the irradiance of the light
* 立体角
* Cook-Torrance光照
  * 微平面
* Fresnel因子
  * 电磁波碰到物体表面时,会产生**反射波和透射波**。反射波的能量等于人射电磁波的能量减去透射电磁波的能量,不透明材料会将透射波能量很快吸收
  * Snell定律
* 微平面分布函数
  * Beckmann分布函数
  * 各向同性
    * 也就是绕法向量N旋转时函数值不变
  * 各向异性
    * 很多表面在不同方向上的粗糙度不同,这些表面被称为各向异性的反射面,包括雾面金属、毛发和织物等材料表面都属于这类反射面
  * 参考
    *  Petr Beckmann and André Spizzichino, The Scattering of Electromagnetic Waves from Rough Surfaces, Macmillan, 1963
* 几何衰减系数
  * 照向一个微平面的光线可能被相邻的微平面阻断,而照不到该微平面。微平面的反射光线也可能被相邻微平面阻断而反射不出来。被阻断的光线基本沿任意方向散射出去,最后形成表面的漫反射 
  * **EX**: 这会造成一部分能量损失，我们使用Kulla-Conty Approximation将损失的这部分能量补充
* 物理光照模型实现
  * 使用2D lookup texture (LUT)保存一些预计算的值

## 可见性判断

* bounding volume tests
* portal system
* binary space partitioning (BSP) trees or octrees

### 构造边界体

* 主分量分析
  * 通过为每个三角网格的顶点集选择一个与其对齐的坐标系,可以减小每个边界体的尺寸。使用统计学中的主分量分析算法可以计算出这些坐标系的坐标轴
  * 参考：On+the+bounding+boxes+obtained+by+principal+component+analysis.pdf
* 位置平均数
* 协方差矩阵
* 构造边界盒
  * 给定一个三角网格的顶点位置P,P2,…,Px,可计算出与该对象自然轴对应的方向R,S和T,下面需要计算出顶点沿这三个方向分布最大和最小位置,根据这些最大值和最小值可容易构造出边界盒的6个平面
  * 使用内积可以计算获得
* 构造边界球
* 构造边界椭球
* 构造边界圆柱

### 边界体测试

* 边界球测试
* 边界椭球测试
* 边界圆柱测试
* 边界盒测试

### 空间分割

* 八叉树
* 二叉空间分割/BSP

### 门系统/Portal Systems

门是一个凸多边形

* 门裁剪
* 视锥收缩

## 多边形技术

贴片构造与公告板

这些修饰性的对象通常被**贴到**当前的物体表面上,因此这些对象包含的多边形与场景中的多边形会**存在公共面**。这时会出现一个问题,就是与其中一个多边形某一部分对应的渲染像素的插值深度值,很少会等于与共面的另一多边形某一部分对应的宣染像素的插值深度值,这将导致一个不想要的渲染结果,即原始表面的多边形会**透过**贴上去的多边形而显示出来 (也就是Z战)

### 深度值偏移

* 引入$1+\epsilon$因子
  * 这样最终投影矩阵中就会多一个偏移值$\epsilon \frac{f+n}{f-n}$
* 偏移值选择

### 贴片应用

<div align=center><img src="https://cdn.jsdelivr.net/gh/aaronmack/image-hosting@master/graphics/贴片的应用.6nl2hm2130k0.webp" width="500"></div>

* 贴片网格构造
* 多边形裁剪

### 公告牌

通过将一个二维纹理图应用到一个多边形平面上可以产生很多种特效,在这个方法中,多边形平面要一直面对相机,因此被称为公告牌技术。该技术可以非常有效地产生**平面对象的立体效果假象**

* 无约束四边形
* 约束四边形
  * 控制只能绕z轴旋转的四边形。应用这种四边形的公告牌的例子是对**火炬发出火焰的渲染**。在这种情况下,火焰总是向上,而四边形所在平面面向相机。由于相机不能从正上方或者下方观察该四边形,因此可以产生令人满意的立体火焰效果。
* 多段面
  * 多段面的一个应用是渲染路径由一组点定义的**闪电**,另一个应用是渲染运动模糊粒子,实现在前一顿的位置和当前位置之间的几个计算好的中间位置上的渲染

### 多边形化简

为了减少处理过程的计算量以及向图形硬件传输数据的量；消减网格中三角形的数量的一般方法是边收缩方法

* 价
  * 每个端点一个价,端点的价是指在边收缩中移动该端点将其合并到另一端点对三角网格**外观的影响程度**；(通常使用顶点的法向量与周围顶点的法向量的点乘的数值作为比较，数值较大意味着很平坦，剔除之后影响较小)

### T型连接消除

<div align=center><img src="https://cdn.jsdelivr.net/gh/aaronmack/image-hosting@master/graphics/T多边形.4qurm9qmiru0.webp"></div>

对于图形引擎,在全局光照的模板阴影技术中,缝隙的去除非常重要

### 三角化

* 凹多边形
* 凸多边形
* 非退化状态
* 耳状三角形

## 阴影

阴影是**真实感环境谊染**的基本组成,可使3D空间中的对象位置更加突出。在实时应用中产生阴影的方法分为两大类,即**基于图像**的方法和**基于图形**的方法

### 定影集

定影集是可见对象集和视锥相关光源位置的一个超集,视锥相关光源可以决定哪些对象必须参与阴影生成计算

### 阴影映射

* 渲染阴影图
  * 在光源位置放置虚拟摄像机，再应用正交投影
* 渲染主场景
* 自阴影
  * 自阴影瑕疵，这是由于阴影图中保存的深度值的有限精度引起的

### 模板阴影

模板阴影技术可以产生**动态场景**中任意位置和任意类型光源的**准确阴影**,而与阴影映射不同的是,模板阴影需要大量的几何运算,这些计算只能在CPU中完成,而模板阴影的优点是阴影的精度与产生阴影的模型的多边形表示精度相同,可以完全避免走样瑕疵。

* 算法概述
* 无限视锥
* 轮廓计算  
  * 二维封闭流形
* 构造阴影体
* 确定阴影体的必要帽子(上限)/Determining Cap Necessity
* 渲染阴影体
* 剪式矩形优化

## 曲线与曲面

### 三次曲线

* 参数连续
* 几何连续
* 三次曲线的几何约束条件
* 几何矩阵
* 常数基本矩阵

### Hermite曲线

* [1] 3D曲线2：埃尔米特(Hermite)曲线 https://zhuanlan.zhihu.com/p/268030358

### Bezier曲线

* Bernstein多项式
* 二项式系数
* 帕斯卡三角形
* 三次Bezier曲线
* Bezier曲线截断
* de Casteljau算法

### Catmull-Rom样条

* 分段三次曲线插值

### 三次样条

三次样条具有全局控制特性,即移动一个控制点可影响整条曲线

### B样条

B样条不仅具有$C^2$连续性,同时还具备局部控制特性,但B样条不插值于一个点集,只是逼近它们

* 均匀B样条
* B样条全局化
* 非均匀B样条
* 非均匀有理B样条(NURBS)

### 双三次曲面

三次曲线的知识可很容易地应用于双三次曲面

### 曲率与挠率

曲线在空间中弯曲和扭转相关的特征量

## 碰撞检测

### 平面碰撞

* 球体与平面碰撞
* 长方体盒与平面碰撞
* 空间分割

### 普通球体碰撞

### 表面滑行

### 两个球体之间的碰撞

## 线性物理运动

### 位置函数

位置函数是一个**物体的三维位置关于时间的函数**。当物体的位置已知时,其时间是相对于起始点的时间进行计算的

### 二阶微分方程

* 齐次方程
* 非齐次方程

### 抛物运动

### 阻尼运动

### 摩擦力

## 旋转物理运动

### 旋转环境

### 刚体运动

### 振动

## 流体与织物仿真

### 流体仿真

### 织物仿真

## 数值方法

### 三角函数

### 线性方程组

### 特征值与特征向量

### 常微分方程