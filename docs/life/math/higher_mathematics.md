
# 高等数学

## 函数,极限与连续
XXX

## 一元函数微分学
XXX

## 一元函数积分学
XXX

## 微分方程
XXX

## 向量与空间解析几何

## 多元函数微分学

### 全微分
* [1] 全微分 https://zh.wikipedia.org/wiki/%E5%85%A8%E5%BE%AE%E5%88%86
* [2] 求解全微分的意义？https://www.zhihu.com/question/31464934/answer/152231899

<div align=center>
<img src="../../_images/life/B站宋浩全微分.png" width="990">
</div>

* 在微积分中，函数$\displaystyle f$在某一点的全微分（英語：total derivative）是指该函数在该点附近关于其自变量的最佳线性近似。与偏微分不同，全微分反映了函数关于其所有自变量的线性近似，而非单个自变量。[1]

<div align=center>
<img src="../../_images/life/math/全微分.jpg" width="1290">
</div>

<div align=center>
<img src="../../_images/life/math/全微分2.jpg" width="690">
</div>

### 偏导数
* [1] 高阶偏导数 https://baike.baidu.com/item/%E9%AB%98%E9%98%B6%E5%81%8F%E5%AF%BC%E6%95%B0/22343611

<div align=center>
<img src="../../_images/life/B站宋浩导数与偏导数.png" width="990">
</div>

#### 高阶偏导数
<div align=center>
<img src="../../_images/life/math/高阶偏导数.jpg" width="690">
</div

### 多元复合函数求导

<div align=center>
<img src="../../_images/life/math/多元复合函数求导.jpg" width="790">
</div>

#### 例题

<div align=center>
<img src="../../_images/life/math/多元复合函数求导-例题.jpg" width="790">
</div>

### 隐函数求导
* [1] 2 4 高阶导数 part4 隐函数的二阶导数 https://www.youtube.com/watch?v=YgBHqb00NNI

> 隐函数求导-单个方程

<div align=center>
<img src="../../_images/life/math/隐函数求导.jpg" width="790">
</div>

* 【1】使用相除求导公式
* 【2】要把y看做x的函数

隐函数求导-方程组

<div align=center>
<img src="../../_images/life/math/隐函数求导2.jpg" width="790">
</div>

* 【1】克莱姆法则

### 一元向量值函数及其导数

<div align=center>
<img src="../../_images/life/math/一元向量值函数及其导数.jpg" width="790">
</div>

<div align=center>
<img src="../../_images/life/math/一元向量值函数及其导数-例题.jpg" width="790">
</div>

* 【1】这里求的是切向量，所以是两个方向；我们之前求的是切线，注意这里的区别

### 空间曲线的切线与法平面

<div align=center>
<img src="../../_images/life/math/空间曲线的切线与法平面.jpg" width="790">
</div>

* 使用克莱姆法则

### 空间曲面的切平面与法线
<div align=center>
<img src="../../_images/life/math/空间曲面的切平面与法线.jpg" width="790">
</div>

F(x,y,z) = 0, 空间曲面方程z=f(x,y) 其中f具有连续偏导数，取F(x,y,z)=z-f(x,y), 或者 F(x,y,z)=f(x,y)-z, 所以z为-1或者1，最终这一点处的法线向量为 n=(-f'x, -f'y, 1)或n=(f'x, f'y, -1);

### 方向导数
* [1] 如何直观形象地理解方向导数与梯度以及它们之间的关系？ https://www.zhihu.com/question/36301367

<div align=center>
<img src="../../_images/life/math/方向导数.jpg" width="790">
</div>

* 【1】y不变，x变化，偏导数的定义
* 【2】绝对值无法消去，所以偏导数不存在
* 【3】约掉$t$
* 【4】三维情况下

### 梯度
* [1] 为什么梯度的方向与等高线切线方向垂直？https://zhuanlan.zhihu.com/p/27731819
* [2] 梯度 https://zh.wikipedia.org/zh-cn/%E6%A2%AF%E5%BA%A6

<div align=center>
<img src="../../_images/life/math/梯度.jpg" width="790">
</div>

* 【1】二元函数`f`在`l`方向在`x0,y0`处的方向导数
* 【2】两处画橙色线处相等；这里使用点积公式；`el`是单位向量，模长等于1，所以可以划去
* 【3】θ=0，cosθ=1，所以它在这一点的方向导数就等于它的模，cosθ最大就是1，所以这一点的**方向导数最大**
* 【4】函数值不变 == 等值线

> 梯度就是它的方向导数取最大值的方向；在每一点处不是可以求各个方向的方向导数嘛，最大的那个就是梯度方向，它的模就是方向导数的最大值

> **方向与梯度方向相反时，减少最快**

> **梯度方向**就是等值线在这一点的法线方向 (注意三维空间与二维空间的转换) ，梯度的模就是沿这个法线方向的**方向导数**

> 梯度下降的方向与等高线的切线方向垂直。[1]

> 在向量微积分中，梯度（gradient）是一种关于多元导数的概括。平常的一元（单变量）函数的导数是标量值函数，而多元函数的梯度是**向量值函数**。多元可微函数 ${\displaystyle f}$ 在点 ${\displaystyle P}$ 上的梯度，是以 ${\displaystyle f}$ 在 ${\displaystyle P}$ 上的**偏导数为分量的向量**。就像一元函数的导数表示这个函数图形的切线的斜率，如果多元函数在点 ${\displaystyle P}$ 上的梯度不是零向量，则它的方向是这个函数在 ${\displaystyle P}$ 上最大增长的**方向**、而它的量是在这个方向上的**增长率**。梯度向量中的**幅值**和**方向**是与坐标的选择无关的独立量。在**欧几里德空间**或更一般的**流形**之间的**多元可微映射**的向量值函数的梯度推广是**雅可比矩阵**[6]。在**巴拿赫空间**之间的函数的进一步推广是**弗雷歇导数**。

#### 例题

<div align=center>
<img src="../../_images/life/math/梯度-例题.jpg" width="790">
</div>

* 【1】单位化
* 【2】方向导数
* 【3】切平面公式

### 多元函数的极值

最大值和最小值

<div align=center>
<img src="../../_images/life/math/多元函数的极值.jpg" width="790">
</div>

* 【1】求出所有的情况；怎么求：根据驻点的定理(分别对x和y求偏导=0)，解出；然后再做判断

### 数量场向量场

<div align=center>
<img src="../../_images/life/math/数量场向量场.jpg" width="790">
</div>

### 多元函数的最值

<div align=center>
<img src="../../_images/life/math/多元函数的最值.jpg" width="790">
</div>

### 条件极值-拉格朗日乘数法

<div align=center>
<img src="../../_images/life/math/条件极值-拉格朗日乘数法.jpg" width="790">
</div>

* 【1】这个条件其实已经决定了`x`与`y`之间的函数关系，所以这里将`y`看成是`x`的函数; 如果有极值，求导等于0

#### 例题
<div align=center>
<img src="../../_images/life/math/条件极值-拉格朗日乘数法-例题.jpg" width="790">
</div>

* 【1】假设这是约束的条件，φ(x,y,z)约束函数
* 【2】v=xyz，体积函数
* 【3】变为无约束条件且只与xy相关的函数

## 多元函数积分学

### 二重积分的定义和性质

<div align=center>
<img src="../../_images/life/math/二重积分的定义.jpg" width="790">
</div>

* 【1】用点`M`来近似为这一小块区域的质量
* 【2】定义中的`σ`在实际情况中是`dxdy`(直角坐标系)或者`drdθ`(极坐标系)；`D`积分区域
* 【3】`λ`为分成的每一小块区域的中的直径的最大值

<div align=center>
<img src="../../_images/life/math/二重积分的性质.jpg" width="790">
</div>

* 【1】6) 中值定理,第5)式子同时除以`σ`；然后让一个函数`f`等于它
* 【2】我们可以找到一点；使得这一点的函数值作为高形成的**平顶柱体**的体积等于原来**曲顶柱体**的**体积**
* 【3】两边乘以`σ`

#### 例题
<div align=center>
<img src="../../_images/life/math/二重积分-例题.jpg" width="790">
</div>

* 【1】根据交点数判断使用`x`型还是`y`型；不能大于2个
* 【2】上面是x型，下面是y型，注意y是x的函数还是x是y的函数
* 【3】先将原函数积出来
* 【4】`y`型时根据**左边小放下限，右边大放上限**;后面的`dx`，可以理解为沿着`x`方向积分
* 【5】`dy`还是`dx`取决于上下限是沿着哪个方向(个人理解)
* 【6】因为`dy^2=2ydy`所以需要配一个`1/2`才可以与原来一样 （换元积分法-第一类）
* 【7】对`y`求积分，`x`看做常数；所以填个`x`没问题
* 【8】上限往里带减去下限往里带
* 【9】积分区域关于原点对称，`|x^3|`是偶函数，**一重积分中如果关于原点对称并且是偶函数那就是两倍**
* 【10】这里为什么是`|x^3|-1`,原式子`-1/3 |x|^3 + 1/3`,提出一个`-1/3`等于`|x|^3 - 1`
* 【11】对`x`求积分，`y`看做常数; 求积分中，e.g. `∫kf(x)dx=k∫f(x)dx` 常数`k`可以往外提，此外如果`k`不是常数而是个变量且与x无关也可以往外提; 所以这里的`y`可以往外提；最终计算这个积分过于复杂
* 【12】`c`到`d`的积分区域与`x`无关,所以是可以直接往外提的； **二次积分必须先积分后面的，再带进去**

### 二重积分的应用
* [1] 多变量微积分笔记10——二重积分的应用 https://www.cnblogs.com/bigmonkey/p/8602418.html
* [2] 多变量微积分笔记8——二重积分 https://www.cnblogs.com/bigmonkey/p/8523926.html

<div align=center>
<img src="../../_images/life/math/二重积分的应用.jpg" width="1290">
</div>

### 极坐标

<div align=center>
<img src="../../_images/life/math/极坐标.jpg" width="790">
</div>

* 【1】将直线求出来
* 【2】右边线段cos表示，上边线段sin表示
* 【3】`ρ sinθ + ρ cosθ = 2` 提出 `ρ` 等于 `ρ (sinθ + cosθ) = 2` 得 `ρ=2 / sinθ + cosθ`

### 二重积分-极坐标

<div align=center>
<img src="../../_images/life/math/二重积分-极坐标.jpg" width="790">
</div>

* 【1】为什么多一个`ρ`
* 【2】提出`ρ`,配负号
* 【3】**积分值**只与**积分区域**和**被积函数**有关系，与积分变量没关系； 所以这里的`∫e^(-y^2) dy`可以换为`∫e^(-x^2) dx`
* 【4】通过求体积来计算表面积
* 【5】这里为什么是`-ρ^2` 见【2】标注上面橙色中圈出的式子； 这里老老实实积分，虽然被积表达式中没有关于`θ`，但是积分区域上限有

### 二重积分的换元法

<div align=center>
<img src="../../_images/life/math/二重积分的换元法.jpg" width="790">
</div>

* 【1】J(Jacobi)的由来
* 【2】用x和y表示出来，`u+v = u+v=2y` `y=(u+v)/2`
* 【3】都补一个`1/v`
* 【4】代入`x`和`y`，解出`u`和`v`之间的关系; 分别是`x`轴`y`轴和原来的方程
* 【5】前面是`dv`，后面是`du`，所以都需要表示成`u`的函数
* 【6】Jacobi行列式求解中是需要将式子写成`x=... y=...`再用
* 【7】提出一个`u`等于`u(1+v)`，然后和分母消了一个`1+v`
* 【8】`v`是`u`的函数,`u`是自变量`v`是因变量
* 【9】将`x`和`y`代入计算得到`ρ^2`

### 三重积分的定义

<div align=center>
<img src="../../_images/life/math/三重积分与密度均匀.jpg" width="790">
</div>

* 【1】二重积分 区域`Dσ`，是个面积元素，三重积分 区域`dv`是个体积元素

### 三重积分的计算
* [1] 椭圆面积公式 https://baike.baidu.com/item/%E6%A4%AD%E5%9C%86%E9%9D%A2%E7%A7%AF%E5%85%AC%E5%BC%8F/11061566

<div align=center>
<img src="../../_images/life/math/三重积分的计算.jpg" width="790">
</div>

* 【1】`x`可以提到最前面去；因为对`z`和对`y`中，`x`都看做常数
* 【2】这条线是落在`z=0`,所以可以直接解出公式得 `x+2y=1 y=(1-x)/2`
* 【3】`dy`沿着`y`轴咔咔咔咔咔，所以公式表示成`y=(1-x-z)/2`; `dz`沿着z轴咔咔咔咔咔咔，此时`y`轴为`0`,代入得`x+z=1 z=1-x`
* 【4】椭圆面积公式：S=π(圆周率)×a×b，其中a、b分别是椭圆的长半轴，短半轴的长.[1]
* 【5】不用担心，因为是随着`z`值的变动`dz`也是会发生变化的

**用激光笔照射的时候只有两个交点就可以**

### 柱面坐标

<div align=center>
<img src="../../_images/life/math/柱面坐标.jpg" width="790">
</div>

* 【1】`x^2+y^2=4` `x=2,y=2` 所以半径为2
* 【2】`ρ^2`是因为`x^2+y^2`转换为极坐标后是`ρ^2`
* 【3】将ρ放到前面去
* 【4】原本是一个ρ，是椭圆，前面现在多一个`a*b`,所以这里是`√6`

### 球面坐标

<div align=center>
<img src="../../_images/life/math/球面坐标.jpg" width="790">
</div>

* 【1】这个ρ是点到原点的距离
* 【2】这个角可以看做垂直的，另外一边也可以看做垂直的，因为就转动了一点点
* 【3】tan是对边比领边，所以对边就是`r tan(dφ)` 而 `tan θ`根据等价无穷小的替换，就是`θ`，所以就是`r dφ`

### 重积分的应用

#### 曲面面积
* [1] 【IB】线线角、线面角、面面角 https://zhuanlan.zhihu.com/p/73727598

<div align=center>
<img src="../../_images/life/math/重积分的应用-曲面面积.jpg" width="790">
</div>

* 【1】这个投影的边就是上面的那个边，又有a投影后一样，所以就是b相比`b/bcosγ=1/cosγ`;所以 `ｄＡ=ｄσ/cosγ`
* 【2】由 `ｎ=(-ｆ'x(ｘ,ｙ), -ｆ'ｙ(ｘ,ｙ), １)`与 ① `cosr = z/向量的模`得出此式子 ② r是两平面的夹角，等于两面法向量夹角，上边平面的法向量是n1(f'x,f'y,-1),下面平面法向量n2取(1,0,0)，平面夹角公式可以算出cosr ③cosr等于曲面A的法线向量(F'x,F'y,F'z)与投影面法向量(0,0,1)的夹角，由这两个向量数量积除以两向量的模长相乘（**取n的模为1**）**** 自己的总结：这里是cosr,所以邻边与斜边是单位向量的比;然后根据参考[1]中的面面角 $cos\theta = \frac{|\vec{b_1} \cdot \vec{b_2}|}{| \vec{b_1} | | \vec{b_2} |}$ [Normalize-Vector](../life/math/math_concept#normalize-vector) [法线](#空间曲面的切平面与法线)
* 【3】 将cosr带入到`ｄＡ=ｄσ/cosγ`

#### 质心

<div align=center>
<img src="../../_images/life/math/重积分的应用-质心.jpg" width="790">
</div>

* 【1】这里对1求积分，相等于求面积
* 【2】A是阴影区域面积，面积是πr^2
* 【3】用极坐标比较容易表示，范围π
* 【4】对y积分，根据极坐标的转换公式就是ρsinθ

#### 转动惯量

<div align=center>
<img src="../../_images/life/math/重积分的应用-转动惯量.jpg" width="790">
</div>

#### 引力

<div align=center>
<img src="../../_images/life/math/重积分的应用-引力.jpg" width="790">
</div>

### 对弧长的曲线积分

> 第一类曲线积分 - 就是求质量，密度乘以弧长就是质量

<div align=center>
<img src="../../_images/life/math/对弧长的曲线积分.jpg" width="790">
</div>

* △Si 曲线上一小段的长度
* 【1】为什么是这样，ds = √ dx^2+dy^2; **这里为什么对空间曲线也可以成立?**
* 【2】[函数](../life/math/math_concept#函数-function) 将y看做是x的一个函数；然后再将x看做是t的表达式，最终替换t为x即可，因为一重积分中与积分变量无关，只与区间和被积表达式有关
* 【3】x的变化范围0-1，本身应该是都t的范围，只不过我们这里转换成了x
* 【4】√y，这里不妥，将它替换成进去就是√x^2，所以就是x
* 【5】倍角公式

### 对坐标的曲线积分

> 第二类曲线积分 - 就是求做功，x方向上的功，与y方向上的功 相加

<div align=center>
<img src="../../_images/life/math/对坐标的曲线积分.jpg" width="790">
</div>

* 性质1中，是两个功作用于一个曲线
* 【1】x被参数方程表示了，dx就是dt，所以这里是对函数求导；最终是关于dt的一重积分
* 【2】为什么一定要是`α<β`，因为被积函数是大于等于0的，所以必须从小的到大的求积分最终才能是大于等于0，否则不就直接成了负的

#### 计算

<div align=center>
<img src="../../_images/life/math/对坐标的曲线积分-计算.jpg" width="790">
</div>

* 【1】按照x必须分成两部分，按照y，区域是-1~1所以不用

### 两类曲线积分的联系

<div align=center>
<img src="../../_images/life/math/两类曲线积分的联系.jpg" width="790">
</div>

### 格林公式
* [1] 多元微积分中有偏导数，为什么没有偏积分的概念？https://www.zhihu.com/question/395133572
* [2] 多变量微积分 Calculus Part2 https://machine-learning-from-scratch.readthedocs.io/zh_CN/latest/%E5%A4%9A%E5%8F%98%E9%87%8F%E5%BE%AE%E7%A7%AF%E5%88%86.html
* [3] 积分符号上加个圈是什么意思?  https://zhidao.baidu.com/question/55105119.html
* [4] 格林公式的几何意义是什么？https://www.zhihu.com/question/22674439 [Joplin:格林公式的几何意义是什么.jpg](:/80bb6ef188f249289ca9c8cd1cab3a03)

<div align=center>
<img src="../../_images/life/math/格林公式.jpg" width="790">
</div>

* 【1】正方向： 在外侧就是逆时针，在内测就是顺时针，保证边界在左侧就可
* 【2】p(x,y),求偏导再求积分两者是一个逆过程，例如y^2求导2y，2y再积分又是y^2
* 【3】积分符号上加个圈表示强调。在闭曲线上的曲线积分，我们常常在积分号上面写一个○以强调，即把积分号∫写成∮。在闭曲线上的曲线积分可以写∮，也可以仍然写∫，但不是闭曲线上的曲线积分，不可以用∮，只能写∫。[3]
* 【4】dx没有变化，常数求导就是0，所以BC段上是0，同理GA段也是0
* 【5】这里为什么减号成为了加号，是因为曲线方向反了，再反过来就变为加号
* 【6】两个逆方向可以抵消

#### 计算
* [1] 复连通区域运用格林公式？https://www.zhihu.com/question/30217203

<div align=center>
<img src="../../_images/life/math/格林公式-计算.jpg" width="790">
</div>

* 【1】无法找到原函数；书中这里为什么将P=0，Q=xe^(-y^2),，是因为∂Q/∂x,将y看做常数，而原函数就是x
* 【2】无重点，分段光滑
* 【3】这个区域不包含原点，所以是可以用格林公式的，又之前∂Q/∂x = ∂P/∂y，**应用格林公式最后等于0**；其次，里面那个适当小的圆，它的方向是反的，根据第二类曲线积分的方向性，如果方向是反的，那就得加一个负号; `或者这样理解，未验证，1. 这里我们就当做方向是顺时针，前面的那个式子应用格林公式等于0是中间没有小洞的，是单连通区域，而这里中间多了一个小洞，所以需要加上才完整，而如果加上之后，移项会多一个负号，所以这里直接将方向设为反方向，可以抵消那个负号； 2.根据复连通区域运用格林公式，注意中间的方向，为了整体保持正方向，内部的方向为负方向，最终应用格林公式等于0，而这里将内部方向设置为负，知识为了计算上的简便，有以前的+号转变为-号`
* 【4】因为是逆时针转的，范围是`0~2π`，如果是顺时针则是`2π~0`

## 无穷级数

### 常数项级数
* [1] 等比数列求和公式 https://baike.baidu.com/item/%E7%AD%89%E6%AF%94%E6%95%B0%E5%88%97%E6%B1%82%E5%92%8C%E5%85%AC%E5%BC%8F/7527367
<div align=center>
<img src="https://cdn.jsdelivr.net/gh/aaronmack/image-hosting@master/mathematics/常数项级数.a38zot638kk.png" width="690">
</div>

* 以前我们学过的是**等比数列**，我们求的是前n项和，而这里是等比级数，是无穷多个的概念，它的含义就是所有项的和；主要在做两件事，判断是否是收敛还是发散，如果收敛，找到收敛到哪里
* 求和公式：$\frac{a}{1-q}\ |q|<1, n->∞$， 通项公式：$a\times q^{n-1}$ [1]
* 【1】证明0.999999.... = 1；用前n项和公式，q=0.1，也就是公比， 
* 【2】前n项之和
* 【3】两项的和大于前一项，相当于在不断突破极限；而前面那个收敛的速度要快，两项的和远远小于前一项
* 【4】如果一个数列是收敛的，那么分别取出部分，它的子数列也是收敛的，并且总的和不变
* 【5】调和级数是发散的
* 【6】如果通项不趋于0，那么一定发散；相当于性质5的逆否命题；这里绿色箭头,通项是$1+\frac{1}{2^n}$,，n趋于无穷，通项趋于1，不趋于0，所以一定是发散的
* 【7】Un一般项就是通项

### 正项级数

<div align=center>
<img src="../../_images/life/math/正项级数.jpg" width="790">
</div>

* 【1】使用比值收敛法

### 交错级数

<div align=center>
<img src="../../_images/life/math/交错级数.jpg" width="790">
</div>

### 任意项级数

<div align=center>
<img src="../../_images/life/math/任意项级数.jpg" width="790">
</div>

### 幂级数

<div align=center>
<img src="../../_images/life/math/幂级数.jpg" width="790">
</div>

* 幂级数是一种特殊的函数项无穷级数
* 【1】收敛情况 ①②举例
* 【2】ρ就是后一项与前一项的比
* 【3】对1/ρ是区间的解释，就以ρ=2来说，后一项比前一项是2，所以式子中是2x，4x，8x,...，都是2x的几次几次方，是一个等比，等比要想收敛，它的公比 |2x| < 1;所以|x| < 1/2,所以区间就是 (-1/2, 1/2)
* 【4】这里不是x^n,而是(x-1)^n,将x-1当做参数t即可，变量做换元；对于任何不是x^n的情形都可以使用换元

#### 幂级数的运算与例题

* 和函数: $1+x+x^2+x^3+\cdots = \frac{1}{1-x} \\ |x|<1,收敛域(-1, 1) $

<div align=center>
<img src="../../_images/life/math/幂级数的运算与例题.jpg" width="790">
</div>

* 【1】这里为什么需要再推一遍，是因为以前的积分定理适用于有限项N，而级数是无限项；这里的重点是：1.无穷项求导等于先每一项求导再求和 2.无穷项求积分等于先每一项求积分再求和
* 【2】通项 $(-1)^{n-1}$, 不趋于0，发散的
* 【3】变上限积分求导，它求导就是S(x)

### 函数展成幂级数

<div align=center>
<img src="../../_images/life/math/函数展成幂级数.jpg" width="790">
</div>

* 【1】1+x+x^2+...+x^n+... 是函数f(x)在x0处展开；通过换元换(x-x0)=t
* 【2】上述9个公式都是由123得来
* 【3】注意此处是马克劳林展开，也就是x在x0处时的情景

#### 例题

<div align=center>
<img src="../../_images/life/math/函数展成幂级数-例题.jpg" width="790">
</div>

* 【1】凑成我们想要展开的样子，这里需要展开成(x+1)，所以x要变为x+1的形式，但变完之后，平白无故减了3，所以5+3补上