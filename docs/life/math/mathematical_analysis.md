# 数学分析

* 数学分析(第二版)上下册陈纪修.pdf

## 集合与映射

### 集合

> 集合，集合运算

* 集合的表示
  * 枚举法
  * 描述法
* 注：集合的表示没有次序关系； 重复没有意义； 空集的概念（没有一个元素）
* 子集：蕴含
* 非子集：至少有一个元素不属于
* 集合相等：所有元素完全相同； **可以用于证明集合相等，S和T两个集合，证明T是S的子集，再证明S是T的子集**
* 集合的运算
  * 并交差补
  * 满足：交换律，结合律，分配律； 对偶律
  * 例如：S的补集 `S=(a,b), S^c = (-∞, a] 并 [b, +∞)`

* 证明：

  <div align=center>
  <img src="https://cdn.jsdelivr.net/gh/aaronmack/image-hosting@master/mathematics/集合证明1.3b5azdzn2n00.png" width="600">
  </div>

> 有限集与无限集

* 无限集可列举：可按某种规则排成一列（满足没有重复与遗漏）
* 无限集包含可列举;无限集不一定是可列举
* 定理1.1.1 可列个可列集之并也是可列集
* 定理1.1.1 有理数集Q是可列集

> Descartes 乘积集合

* 当A与B都是实数集R时，$R\times R$记作$R^2$, 表示平面Descartes直角坐标系下用坐标表示的集合


### 映射与函数

> 映射

* 映射是指集合之间的一种对应关系
* **像，逆像(原像)，定义域，值域**
  * 必须满足唯一性要求
  * 逆像不要求具有唯一性
* 定义1.2.1 **映射**
* 定义1.2.2 **满射，单射，双射**
* **逆映射，复合映射**
* **一元实函数(函数)**
  * 函数中的f表示的是一种定义规则
  * x是主动变化的，称为自变量
* **基本初等函数**

> 函数的分段表示、隐式表示与参数表示

* 函数可以分为多段或者是无限多段
* 符号函数 sgn x

* **函数的隐式表示**，是指通过方程F(x,y)=0来确定变量y和x之间函数关系的方式。例如圆的标准方程 $x^2+y^2=R^2$,反应了x与y之间的特定关系
* **函数参数表示**：在表示变量x与y的函数关系时，我们常常需要引入第三个变量（例如参数t），通过建立t与x、t与y之间的函数关系，间接的确定x与y之间的函数关系

> 函数的简单特性

* 有界性，单调性，奇偶性，周期性

> 两个常用不等式

* 定理1.2.1 三角不等式 对于任意实数a和b都有 $||a|-|b||\leq |a+b| \leq |a|+|b|$
* 定理1.2.2 平均值不等式 对于任意n个正数a1,a2,...an有 $\frac{a_1+a_2+\cdots  +a_n}{n} \geq \sqrt[n]{{a_1a_2\cdots a_n}} \geq n/(\frac{1}{a_1}+\frac{1}{a_2}+\cdots + \frac{1}{a_n})$

* 算术平均值，几何平均值，调和平均值 (**P22**)

## 数列极限

### 实数系的连续性

> 实数系

* 在数学分析中，变量的取值范围时限制在实数集合内的
* 数系扩充：自然数N -> 整数集合Z -> 有理数集合Q
* 整数点，有理点，无理点
* 有理数集合Q -> 实数集合R (因为有理数不能表示例如边长为1的正方形的对角线的长度)
* 数轴

> 最大数与最小数

> 上确界与下确界

* [1] 一图搞懂 sup：上确界, inf：下确界 https://blog.csdn.net/weixin_45562000/article/details/107946101

  <div align=center>
  <img src="https://cdn.jsdelivr.net/gh/aaronmack/image-hosting@master/mathematics/数学分析-上确界与下确界.3cz6e1pn77s0.png" width="600">
  </div>

* 一、上确界：
  * 上确界是一个集的最小上界，是数学分析中最基本的概念。“上确界”的概念是数学分析中最基本的概念。 考虑一个实数集合M. 如果有一个实数S，使得M中任何数都不超过S,那么就称S是M的一个上界。

  * 在所有那些上界中如果有一个最小的上界，就称为M的上确界。 
  * 一个有界数集有无数个上界和下界，但是上确界却只有一个。

* 二、下确界：
  * 下确界　“下确界”的概念是数学分析中最基本的概念。 考虑一个实数集合M. 如果有一个实数S，使得M中任何数都大于等于S,那么就称S是M的一个下界。

  * 在所有那些下界中如果有一个最大的下界，就称为M的下确界。
  * 一个有界数集有无数个上界和下界，但是下确界却只有一个。[1]

* 定理2.1.1 确界存在定理-实数系连续性定理， 非空有上界的数集必有上确界，非空有下界的数集必有下确界
* 定理2.1.2 非空有界数集的上(下)确界是唯一的

### 数列极限

> 数列与数列极限

* 数列是指按正整数编了号的一串数， 通常表示成$\{x_n\}$,其中$X_n$为该数列的通项
* 与数集的区别
  * 重复的数不能随便舍去
  * 前后次序不能颠倒
* **极限，发散**

> 数列极限的性质

* 极限的唯一性
* 数列的有界性
* 数列的保序性
* 极限的夹逼性
* 定理2.2.2 收敛数列必有界

> 数列极限的四则运算

### 无穷大量

> 无穷大量

* 按数列收敛定义，{n^2}, {(-2)^n}, {-10^n}等数列都是发散的，但她们与{(-1)^n}之类发散数列有一个根本区别，即当n增大时，其各项的绝对值也**无限制的增大**，这样的数列我们称为无穷大量
* 记为：$\{ x_n \} \gt G$
* **定号无穷大量**： 从某一项开始都是正的或者负的

> 待定型

* 例如 $\begin{aligned}\lim_{n\rightarrow \infin} \frac{a_1+a_2+\cdots +a_n}{n}\end{aligned}$就是$\begin{aligned}\frac{\infin}{\infin}\end{aligned}$待定型
* 单调增加数列/严格单调增加数列（减少）
* Stolz定理

### 收敛准则

> 单调有界数列收敛定理

* 定理2.4.1 单调有界数列必定收敛
* Fibonacci数列
* 利用数列的"单调有界必定收敛"性质导出最重要的两个无理数$\Pi$与$e$
* 自然对数
* Euler常数
  
> 闭区间套定理

* 定义：条件一说明了a3b3套在a2b2当中，一个套一个； 条件二说明了长度趋于0
* 定理：如果$\{[a_n, b_n]\}$形成一个闭区间套，则存在唯一的实数$\xi$属于所有的区间$[a_n, b_n]$，且$\begin{aligned}\xi = \lim_{n\rightarrow\infin} a_n = \lim_{n\rightarrow\infin} b_n\end{aligned}$
* 定理2.4.3 实数集R是不可列集

> 子列

* [1] 波尔查诺-魏尔斯特拉斯定理 维基百科，自由的百科全书 https://zh.wikipedia.org/zh-cn/%E6%B3%A2%E7%88%BE%E6%9F%A5%E8%AB%BE-%E9%AD%8F%E7%88%BE%E6%96%AF%E7%89%B9%E6%8B%89%E6%96%AF%E5%AE%9A%E7%90%86

* 子列中下标$n_k$表示子列中的第k项恰好是原数列中的第$n_k$项
  * 例如取其偶数项所构成的子列可以表示为$\begin{aligned}\{x_{2k}\}\end{aligned}$
  * 又例如，取$n_k=2^k$,则子列$\begin{aligned}x_{n_k}\end{aligned}$是通过依次选择原数列$x_n$中的第2，4，8，16...项而构成的数列
* Bolzano-Weierstrass定理
* 定理2.4.5 Bolzano-Weierstrass定理 有界数列必有收敛子列
  * 波尔查诺-魏尔施特拉斯定理（英语：Bolzano–Weierstrass theorem）是数学中，尤其是拓扑学与实分析中，用以刻画 ${\displaystyle \mathbb {R} ^{n}}$中的紧集的基本定理[1]

* Cauchy收敛原理： 数列$\{x_n\}$收敛的充分必要条件是$\{x_n\}$是基本数列
* 基本数列

> 实数系的基本定理

  <div align=center>
  <img src="https://cdn.jsdelivr.net/gh/aaronmack/image-hosting@master/mathematics/数学分析-实数系的基本定理.60aqvhgva6o0.png" width="200">
  </div>

* 实数系的连续性包含了实数系的完备性，也就是说在实数系中，这两个概念是相等的
* 上述的五个定理是等价的，即从其中任何一个定理出发都可以推断出其它的定理，所以这五个定理中的每一个都可以称为是**实数系的基本定理**

## 函数极限与连续函数

### 函数极限

> 函数极限的定义

* 当自变量趋于某个点x0时，因变量y是否相应的趋于某个定值A
* 例如圆弧 $y=\frac{\sin x}{x}$,注意，在x趋于0的过程中，我们不取x=0，否则没有意义，我们关心的是在x趋于0的时候，函数y的**变化趋势**

> 函数极限的性质

* 极限的唯一性
* 局部保序性
* 局部有界性
* 夹逼性

> 函数极限的四则运算

> 函数极限与数列极限的关系

* 定理3.1.5 Heine定理 $\begin{aligned}\lim_{x\rightarrow x_0}f(x)=A\end{aligned}$的充分必要条件是；对于任意满足条件 $\begin{aligned}\lim_{n\rightarrow \infin}x_n=x_0\end{aligned}$,且$x_n\neq x_0(n=1,2,3,\cdots)$的数列$\{x_n\}$相应的函数之数列$\{f(x_n)\}$成立

> 单侧极限

* 左极限，右极限

> 函数极限定义的扩充

* 自变量的极限过程有六种情况: $x\rightarrow x_0$,$x_0 +$,$x_0 -$, $\infin$, $+\infin$, $-\infin$

### 连续函数

> 连续函数的定义

* 图像上各点相互"连接"而不出现"间断"，构成了连续的外观，但像符号函数y=sgn x的图像在x=0处遭到破环，出现了"间断";用分析的观点来看，连续特性就是当x在x0处附近做微小变化时，f(x)是否也在f(x0)处附近做微小变化；用函数极限工具来看待就是自变量x趋于x0时，因变量y是否趋于$f(x_0)(y\rightarrow f(x_0))$
* 连续，**连续点**
* **单侧连续**，左👈(右👉)连续
* **上连续**

> 连续函数的四则运算

> 不连续点类型

* 不连续点，间断点
* **第一类不连续点**(跳跃点)，右极限与左极限之差$f(x_0 +) - f(x_0 -)$称为函数f(x)在点$x_0$的**跃度**
* **第二类不连续点**，函数f(x)在点$x_0$的左、右极限中至少有一个不存在
* **第三类不连续点**，函数f(x)在点$x_0$的左、右极限都存在并相等，但不等于$f(x_0)$或者$f(x)$在点$x_0$无定义, 例如$f(x)=x\sin \frac{1}{x}$,他在x=0没有定义，但在x=0的左右极限都等于0，所以x=0时它的第三类不连续点
* 对于第三类不连续点，可以通过重新定义在该点的函数值，使之成为函数的连续点，因此第三类不连续点又称为**可去不连续点**或**可去间断点**
* Riemann函数

> 反函数连续性定理

* 定理3.2.1 反函数存在性定理
* 定理3.2.2 反函数连续性定理

> 复合函数的连续性

* 定理3.2.3 若u=g(x)在点x0连续，g(x0)=u0,又y=f(u)在点u0连续，则复合函数y=f°g(x)在点x0连续
* 定理3.2.4 一切初等函数在其定义区间上连续

### 无穷小量与无穷大量的阶

> 无穷小量的比较

* 高阶无穷小量，低阶无穷小量，同阶无穷小量，等价无穷小量

> 无穷大量的比较

* 高阶无穷大量，低阶无穷大量，同阶无穷大量，等价无穷大量

> 等价量

* **等价量**是指**等价无穷小量**或**等价无穷大量**

### 闭区间上的连续函数

> 有界性定理

* 定理3.4.1 若函数f(x)在闭区间[a,b]上连续，则它在[a,b]上有界

> 最值定理

* 定理3.4.2 若函数f(x)在闭区间[a,b]上连续，则它在[a,b]上比能取到最大值与最小值，即存在$\xi$和$\eta \in [a,b]$，对于一切$x\in [a,b]$成立

> 零点存在定理

* [1] 零点存在定理 https://www.cnblogs.com/wanghai0666/p/11967020.html#

  <div align=center>
  <img src="https://cdn.jsdelivr.net/gh/aaronmack/image-hosting@master/mathematics/零点存在定理.wuddzbq8zg0.png" width="1000">
  </div>

> 中间值定理

* 中间值定理(介值定理)

* [1] 介值定理-数学乐 https://www.shuxuele.com/algebra/intermediate-value-theorem.html
* [resource/介值定理]

* 介值定理（又名中值定理）背后的概念是：介值 A 到 B	 ; 当连续的曲线连接着两点一点在直线下面, 另一点在线上面,则曲线会在至少一个地方通过直线！[1]

> 一致连续概念

* 定义3.4.1 一致连续

* [1] 函数连续和一致连续有什么区别？开区间上的连续函数不一定是一致连续的，为什么？ https://www.zhihu.com/question/32201415

* 一致连续： 函数连续是一静一动，所以之关乎静止的那个点，而一致连续是两动，所以就与整个区间有关[1]

* 定理3.4.6 Cantor定理 - 若函数f(x)在闭区间[a,b]上连续，则它在[a,b]上一致连续

## 微分

### 微分和导数

> 微分概念的导出背景

* 当一个函数的自变量有微小的改变时，它的因变量一般来说也会有一个相应的改变，微分的原始思想在于去寻找一种方法，当因变量的**改变是很微小**的时候，能够简便而又比较精确的估计出这个**改变量**
* Δy(x)=f(x+Δx)-f(x);这里的Δx和Δy(x)分别称为自变量和因变量的**差分**
* 可微，线性主要部分，自变量的微分，因变量的微分
* dy=g(x)dx
* **可微必定连续**

> 微分和导数

* 若f(x)在x0处可微，则有关系是，Δy=g(x0)Δx+o(Δx)，由于g(x0)与Δx无关，即知g(x0)是当Δx→0时，因变量的差分与自变量的差分之比$\frac{\Delta y}{\Delta x}$（称为差商）的极限值
* 定义4.1.2 可导，导数
  * $\begin{aligned}\lim_{\Delta x \rightarrow 0}\frac{\Delta y}{\Delta x} = \lim_{\Delta x \rightarrow 0} \frac{f(x_0 + \Delta x) - f(x_0)}{\Delta x}\end{aligned}$
* 导函数一般简称为导数
* 由上面的结论可以知道，若f(x)在x处可微，则它必定在x处可导，而所描述的函数g(x)，就是在这一点的导数值f'(x),于是差分的**无穷小量关系式**和微分关系式分别成为 $\Delta y=f'(x)\Delta x + o(\Delta x)$和$dy=f'(x)dx$; 因此，导数也可以看成是函数在可微的情况下，因变量与自变量的微分之比，所以导数又被称为"**微商**"
* 定理4.1.1 函数y=f(x)在x处可微的充分必要条件是它在x处可导

### 导数的意义和性质

> 产生导数的实际背景

* 运动物体的速度是它的位移函数的导数；我们可以将"速度"这个概念加以推广-凡是牵涉到**某个量的变化快慢**的,诸如物理学中的光热磁电的各种传导率、化学中的反应速率、经济学中的资金流动速率、人口学中的人口增长速率等等,统统都可以看成是广义的"速度",因而都可以用导数来表达。换句话说,**导数实际上是因变量关于自变量的变化率**。 

> 导数的几何意义

* 切线，Leibniz，抛物线（根据光反射定律，入射角等于反射角，可知任意一束从抛物线焦点处发出的光线，经过抛物线的反射，反射光线与抛物线的对称轴平行【探照灯，伞形太阳灶等都是这一原理实际应用的例子】）

> 单侧导数

* 左导数，右导数
* 例如函数y=|x|的函数图像，在x=0处的左右导数都存在，但不相等，由定义，它在x=0处**不可导**

### 导数四则运算和反函数求导法则

> 从定义出发求导函数

* 计算一个函数的导函数的运算称为对这个函数求导
  1. y=C的导数恒等于0
  2. y=sin x; (sin x)' = cos x
  3. y= ln x; (ln x)' = 1/x
  4. y=e^x; y=Ce^x; 导函数就是它本身
  5. y=x^a; (x^a)' = ax^(a-1)

> 求导的四则运算法则

* 定理4.3.1 `[c1f(x)+c2g(x)]' = c1f'(x)+c2g'(x)`
* 定理4.3.2 `[f(x)·g(x)]' = f'(x)g(x)+f(x)g'(x)`
* 定理4.3.3 设g(x)在某一区间上可导，且g(x)≠0，则它的倒数也在该区间上可导

> 反函数求导法则

* 定理4.3.4 反函数求导定理
* 多个函数线性组合的导函数
* 多个函数乘积的导函数

### 复合函数求导法则及其应用

> 复合函数求导法则

* 定理4.4.1 复合函数求导法则 设函数u=g(x)在x=x0处可导，而函数y=f(u)处可导，在u=u0=g(x0)处可导，则复合函数y=f(g(x))在x=x0可导，且有 $\begin{aligned} [f(g(x))]_{x=x_0}' = f'(u_0)g'(x_0) = f'(g(x_0))g'(x_0) \end{aligned}$
* 链式法则 【See. Essence of calculus】
* 对于幂指函数的求导，常采用的方法叫**对数求导法**

> 一阶微分的形式不变性

* 无论u是自变量还是中间函数，函数y=f(u)的微分形式是相同的，这就被称为"一阶微分的形式不变性"

> 隐函数求导与求微分

* 形如方程F(x,y)=0,决定了一个y关于x的函数y=y(x),称为隐函数，有些函数可以通过某种方法**解出y关于x的一般变化规律**，化成显函数y=f(x)的形式，称为**隐函数的显化**，如椭圆的标准方程 $\frac{x^2}{a^2}+\frac{y^2}{b^2}=1$确定了上下半平面上的两个显函数$y=±\frac{b}{a}\sqrt{a^2 - x^2} (-a\leq x \leq a)$
* Galois理论
* 对于隐函数的求导与求微分问题,可以利用复合函数的求导法则或一阶微分的形式不变性来求得,而**无须从隐函数解出显函数**。

> 复合函数求导法则的其他应用

* 反函数求导公式可以看成是复合函数求导法则的特殊情况
  * 例如可以将$y=\frac{1}{g(x)}$看做$\begin{cases} & y=\frac{1}{u} \\ & u=g(x) \end{cases}$
  * 再比如，假定y=f(x)满足反函数求导定理的条件，将它的反函数记为x=f^-1 (x),则成立x=f^-1 (f(x))

### 高阶导数和高阶微分

> 高阶导数的实际背景及定义

* 一个函数的导数任然是一个函数，因此有必要的话，可以对它继续进行求导
* 冲量定律： $F\delta t = m\frac{\delta v}{\delta t}$, 对于匀变速运动来讲，相同时间内的速度该变量$\frac{\delta v}{\delta t}$是常数，记这个常数为a，就得到了牛顿第二运动定理$F=ma$
* 二阶导数；一般的n阶导数(n≥2称为**高阶导数**)

> 高阶导数的运算法则

* 定理4.5.2 **Leibniz公式**，设f(x)和g(x)都是n阶可导函数，则它们的积函数也n阶可导，且成立公式 $\begin{aligned}[f(x)\cdot g(x)]^{(n)} = \sum_{k=0}^{n}C_n^k f^{(n-k)}(x)g^{(k)}(x)\end{aligned}$

> 高阶微分

* n阶微分： $d^n y = d(d^{n-1} y), n=2,3,\cdots$; $d^n y=f^{(n)}(x)dx^n, n=2,3,\cdots$,即y的n阶微分等于它的n阶导数乘上自变量的微分的n次方

## 微分中值定理及其应用

### 微分中值定理

> 函数极值与Fermat定理

* **极值点**，**极值**
* 所谓的极大和极小只是指在x0附近的一个局部范围中的函数值的大小关系，因而是一个局部性质；所以在一个区间内，f(x)的一个极小值完全有可能大于f(x)的某些极大值； 对极值点的定义并不牵涉到函数的其他性质，如连续，可微等
* **Riemann函数**
* 定理5.1.1 Fermat引理， 设x0是f(x)的一个极值点。且f(x)在x0处导数存在，则f'(x0)=0; 几何意义，若曲线y=f(x)在其极值点处可导，或者说在该点存在切线，那么这条切线必定平行于x轴

> Rolle定理

* 定理5.1.2 (Rolle定理) 设函数f(x)在闭区间`[a,b]`上连续,在开区间`(a,b)`上可导,且`f(a)=f(b)`,则至少存在一点$\xi \in(a,b)$,使得 $f'(\xi) = 0$
* Legendre多项式： $P_n(x) = \frac{1}{2^nn!} \frac{d^n}{dx^n} (x^2 -1)^n, (n=0,1,2,\cdots)$
* Legendre多项式是数学物理中一个重要的特殊函数

> Lagrange中值定理， 设函数f(x)在闭区间`[a,b]`上连续，在开区间`(a,b)`上可导，则至少存在一点$\xi \in (a,b)$使得$f'(\xi) = \frac{f(b)-f(a)}{b-a}$
* Lagrange公式

> 用Lagrange中值定理讨论函数性质

* 定理5.1.4 若f(x)在`(a,b)`上可导且有`f'(x)≡0`,则f(x)在(a,b)上恒为常数
* 定理5.1.5 （一阶导数与单调性的关系） 设函数f(x)在区间I上可导，则f(x)在I上单调增加的充分必要条件是：对于任意的$x\in I$有$f'(x)≥0$
* **函数凸性**
  * 上凸：例如y=lnx的图像
  * 下凸：例如y=e^x的图像
* 定义5.1.2 下凸函数，严格下凸函数
* 定理5.1.6 （二阶导数与凸性的关系）
* **拐点**：曲线在某点两侧的凸性相反，也就是说，它们是曲线上凸与下凸的分界点，我们称这样的点为曲线的拐点
定理5.1.8 （Jensen不等式）

> Cauchy中值定理

* 定理5.1.9 (Cauchy中值定理) 设f(x)和g(x)都在闭区间`[a,b]`上连续，在开区间`(a,b)`上可导，且对任意的$x\in (a,b), g'(x)\neq 0$，则至少存在一点$\xi \in (a,b)$使得，$\frac{f'(\xi)}{g'(\xi)} = \frac{f(b)-f(a)}{g(b)-g(a)}$

* Lagrange中值定理是Cauchy中值定理的特殊情况；Cauchy中值定理也可以看成是Lagrange中值定理的参数表达形式

### L'Hospital 法则 (洛必达法则)

> 待定型极限和L'Hospital法则

* 在计算一个分式函数的极限时，常常会遇到分子分母都趋于零或者都趋于无穷大的情况，这个时候就无法使用"商的极限等于极限的商"的法则，运算会出现很大的困难；我们将这种类型的极限称为$\frac{0}{0}$待定型或$\frac{\infin}{\infin}$待定型

### Taylor公式和插值多项式

> 带Peano余项的Taylor公式

* 多项式是一类比较简单的函数，在理论上，如果能用多项式近似的代替某些复杂的函数去研究它们的某些性态，会带来很大的方便，实际计算中，多项式只设计加减乘三种运算
* Taylor多项式，Peano余项

  <div align=center>
  <img src="https://cdn.jsdelivr.net/gh/aaronmack/image-hosting@master/mathematics/数学分析-带Peano余项的Taylor公式.7jfdxja05ec0.png" width="600">
  </div>

  * Pn：P是polynomial，n是n次多项式
  * 局部结果

> 带Lagrange余项的Taylor公式

  <div align=center>
  <img src="https://cdn.jsdelivr.net/gh/aaronmack/image-hosting@master/mathematics/数学分析-带Lagrange余项的Taylor公式.np7fxf4h4ww.png" width="600">
  </div>

  * 描述整体
  * Lagrange余项

* 带Lagrange余项的Taylor公式看成是Lagrange中值定理的推广

> 插值多项式和余项

* 我们希望用多项式近似代替函数时应与该函数近似得**较好**。所谓的“较好”当然可以有不同的定义,比如**Weierstrass逼近定理:**闭区间上的连续函数可以用多项式一致逼近。但对于实际应用来说,最常见的要求是使多项式与原来的函数在某些指定的点上**有相同的函数值**乃至**若干阶导数值**,这样的多项式称为原来函数的**插值多项式**

* **插值条件，插值节点，插值多项式，插值余项**
* 在实际问题中,人们往往只能通过**实验或统计的办法**获得要考察的量在某些离散点上的值或是变化情况(例如,在天文观测中,一般只能在若干个离散的时刻测定日月星辰的位置),用数学的语言来说,只能知道**未知函数**在**某个点集上的函数值**或**一定阶的导数值**,这时,用插值多项式近似代替这个函数进行分析、研究和计算,便成了解决问题的有力手段之一
* 定理5.3.3（插值多项式的余项定理）$\begin{aligned}r_n(x)=f(x)-P_n(x)=\frac{f^{n+1}(\xi)}{(n+1)!} \prod_{i=0}^{m}(x-x_i)^{n_i}\end{aligned}$
* **插值余项**：`rn(x) = f(x)-Pn(x)`
* 定理5.3.4 满足上述插值条件的插值多项式存在且唯一

> Lagrange插值多项式和Taylor公式

1）均为函数值（n0=n1=...=nm=1）； 但结点还是多个(x0,x1,...,xm)

* Kronecker记号
* 基函数：$\begin{aligned}|q_k(x)|_{k=0}^{n}\end{aligned}$
* **Lagrange插值多项式**：$\begin{aligned}P_n(x) = \sum_{k=0}^{n}[ f(x_k) \prod_{i=0,i\neq k}^{n} \frac{(x-x_i)}{x_k-x_i} ]\end{aligned}$

  <div align=center>
  <img src="https://cdn.jsdelivr.net/gh/aaronmack/image-hosting@master/mathematics/Lagrange插值多项式-例子.7b9dg0njeo00.png" width="790">
  </div>

2）结点仅一个x0; 插值条件$P_n^{j}(x_0) = f^{j}(x_0), j=0,1,2,\cdots ,n$

* 基函数：$\begin{aligned}q_k^{(j)}(x_0) = \delta _{jk}\end{aligned}$
* 带Lagrange余项的Taylor公式：$f(x)=f(x_0)+f'(x_0)(x-x_0)+\frac{f''(x_0)}{2!}(x-x_0)^2+...+\frac{f^{(n)}(x_0)}{n!}(x-x_0)^n+r_n(x)$

  <div align=center>
  <img src="https://cdn.jsdelivr.net/gh/aaronmack/image-hosting@master/mathematics/Lagrange插值多项式-例子.5vjbjlzpsjs0.png" width="790">
  </div>

* Taylor公式 `vs` Lagrange插值多项式
* 总而言之,这两种极端情况的插值多项式-一个取尽可能多的点,一个取尽可能高阶的导数--各有特点,在理论和实际中各主司一职而又相辅相成,都是我们解决问题的重要工具。

### 函数的Taylor公式及其应用

> 函数在x=0处的Taylor公式

* Maclaurin公式 (麦克劳林公式)
* 函数f(x)在x=0处的Taylor公式又称为函数f(x)的Maclaurin公式

> Taylor公式的应用

1) 近似计算
2) 求极限
3) 证明不等式
   1) 关于不等式的证明,我们可以使用Lagrange中值定理来证明不等式,利用函数的凸性来证明不等式,以及通过讨论导数的符号来得到函数的单调性,从而证明不等式的方法。其Taylor公式也是证明不等式的一个重要方法。
4) 求曲线的渐近线方程
   1) **渐近线** https://www.shuxuele.com/algebra/asymptote.html
5) 外推
   1) 外推是一种通过将精度较低的近似值进行适当组合，产生精度较高的近似值的方法
   2) 割圆术

### 应用举例

> 极值问题

* 驻点
* 定理5.5.1 (极值点判定定理)

> 最值问题

* 在自然科学、生产技术、经济管理等领域,经常需要研究如何**花费最小代价去获取最大收益的问题**,这在许多情况下,可以归结为求**一个函数在某一范围内的最大值或最小值问题**。根据连续函数的性质,闭区间上的连续函数必定能取到最大值与最小值。,需要注意的是,如果去掉函数的连续性或者将闭区间改为开区间,函数有可能取不到最大值或最小值。函数的最大值与最小值统称为函数的最值,使函数取到最大值(或最小值)的点称为函数的最大值点(或最小值点),也称为函数的**最值点**。函数的极大值与极小值反映的是函数的一种局部性质,而函数的最大值与最小值反映的是函数在某一范围内的一种整体性质。
* **最大利润原理**：当且仅当边际成本与边际收益相等，并且边际成本的变化率大于边际收益的变化率时，可取得最大利润

> 数学建模

* 随着科学技术的发展,越来越多的人认识到了“高技术本质上是一种数学技术”这一精辟的观点。近半个世纪以来,数学与电子计算机技术相结合,在解决自然科学、工程技术乃至社会科学等各个领域的实际问题中大显身手,取得了令人瞩目的成绩。要用数学技术去解决实际问题,首先必须将所考虑的现实问题通过“去芜存菁,去伪存真”的深入分析和研究,用数学工具将它归结为一个相应的数学问题,这个过程称为**数学建模**,所得到的数学问题称为**数学模型**。
* 微分方程
* 初值条件
* 解微分方程
* 满足初值条件的解

* Malthus人口模型
  * Preface1: `第四章$2` - $\Delta p=p(t+\Delta t)-p(t)$,单位时间内人口增长速率在$[t,t+\Delta t]$时间段中，该地区人口平均增长率为$\frac{\Delta p}{\Delta t} = \frac{p(t+\Delta t)-p(t)}{\Delta t}$, 当$\Delta t \rightarrow 0$时，便求得该地区在时刻t的人口增长速率为$\begin{aligned}p'(t)=\lim_{\Delta t \rightarrow 0}\frac{\Delta p}{\Delta t} = \lim_{\Delta t \rightarrow 0}\frac{p(t+\Delta t)-p(t)}{\Delta t}\end{aligned}$
  * Preface2: $d(a^x) = \ln a\cdot a^xdx$
  * 设p(t)是某地区的人口数量函数，人口增长速率应为人口数量函数的导数p'(t);显然，某一时刻的人口数量越多，在单位时间中的人口增长数也就越多，设比例系数λ(可以通过已有资料给出)，则有人口模型$\begin{cases} & p'(t)=\lambda p(t) \\ & p(t_0)=p_0 \end{cases}$
  * 像`p'(t)=λp(t)`这种含有未知函数的导数(或微分)的方程称为**微分方程**，而`p(t_0)=p_0`称为微分方程的初值条件，代表某个给定的t_0时刻的实际人口数
  * 将`p'(t)=λp(t)`写为微分形式，$\frac{dp}{p} = \lambda dt$
  * 将它看作是某个隐函数，$f(p)=g(t)$,两边求微分的结果，由一阶微分的形式不变性和Preface2中公式，得$f(p)= \ln p+C, g(t)=\lambda t+C$,C是任意给定的常数，于是$\ln p=\lambda t+C$,也就是$p=C_1e^{\lambda t}$;其中$C_1=e^C$,令$t=t_0$并利用初值条件$p(t_0)=p_0$，可以定出$C_1=p_0e^{-\lambda t_0}$
  * 最终得到人口数量函数$p(t)=p_0e^{\lambda (t-t_0)}$
  * 求未知函数p(t)的过程称为**解微分方程**，其结果$p(t)=p_0e^{\lambda (t-t_0)}$称为满足该微分方程的**满足初始条件的解**

> 函数作图

### 方程的近似求解

> 解析方法与数值方法

* 求方程的解主要方法有两种:**解析方法和数值方法**
  * 解析方法也称为**公式法**,它是将**方程的解**表达为方**程的系数的函数形式**,只要把待求解的方程的系数**代人表达式**,就可以求出方程的解。如果不考虑运算中的四舍五入所产生的误差,那么在理论上,解析方法所得到的解是精确的,我们将这个解称为**解析解或精确解**,解析方法也因此被称为**精确方法**。(但由于真正运算时不可能不产生误差,因此从求解实际问题来说,不存在真正的精确方法。

* 数值方法是一种求**近似解**的方法。粗略地说,它无意去追究方程的解与系数本质上到底存在着什么样的联系,而只是设法去构造一个**可实际计算的过程**,并通过运行这个过程产生方程的精确解的一系列近似值。在一定的条件下,这,些近似值理论上将收敛于方程的精确解,因此可以用精度较高的近似值来代替精确解,我们称其为**数值解或近似解**。由于实际问题中提出的许许多多形态迥异的方程绝大多数都无法找到其解析解,因此,数值方法是用数学工具解决实际问题过程中的一个重要方法。

> 二分法

> Newton迭代法

* 迭代函数
* 也叫做Newton切线法
* 割线法或弦割法

## 不定积分

### 不定积分的概念和运算法则

> 微分的逆运算-不定积分

* 在实际中,我们经常需要解决的另一个(或许可以说更重要的)问题是,如何在只知道一个函数的微分或导数的情况下,将这个函数“复原”出来。
* 只要求出f(x)的任意一个原函数F(x),就可以用F(x)+C来代表f(x)的全部原函数了
* 定义6.1.2 一个函数f(x)的原函数全体称为这个函数的**不定积分**，记作$\int f(x)dx$;这里 $\int$称为**积分符号**，f(x)称为**被积函数**，x称为**积分变量**
* 微分运算"d"与不定积分运算"∫"构成逆运算

> 不定积分的线性性质

* 定理6.1.1 (线性性)

  <div align=center>
  <img src="https://cdn.jsdelivr.net/gh/aaronmack/image-hosting@master/mathematics/不定积分-线性性.55n2aaggxh80.png" width="790">
  </div>

### 换元积分法和分部积分法

> 换元积分法

* 第一类换元积分法

  <div align=center>
  <img src="https://cdn.jsdelivr.net/gh/aaronmack/image-hosting@master/mathematics/第一类换元积分法.66q1dulxmdg0.png" width="790">
  </div>

* 第二类换元积分法

  <div align=center>
  <img src="https://cdn.jsdelivr.net/gh/aaronmack/image-hosting@master/mathematics/第二类换元积分法.wy43509uij4.png" width="790">
  </div>

> 分部积分法

  <div align=center>
  <img src="https://cdn.jsdelivr.net/gh/aaronmack/image-hosting@master/mathematics/分部积分法.qu57uorqwlc.png" width="790">
  </div>

* 例题
  * 求`∫x cos xdx`
  * 将x看成u(x),cos x看成v'(x),则u'(x)=1, v(x)=sin x,代入分部积分公式，∫x cos x dx=∫ xd(sin x) = x sin x-∫sin x dx=xsin x+cos x +C

> 基本积分表

### 有理函数的不定积分及其应用

> 有理函数的不定积分

* "积不出"：有些被积函数无法用基本初等函数的有限次四则运算和复合来表达，注意，这并不意味这些被积函数没有原函数，只是不能用初等函数表达出来
* 形如$\frac{p_m(x)}{q_n(x)}$的函数称为**有理函数**，这里的$p_m(x)$和$q_n(x)$分别是m次和n次多项式

* [1] 有理函数不定积分，你确定弄懂了？ https://www.sohu.com/a/312022298_120115175 
* [2] 2. 有理函数的不定积分 - 中国科学技术大学 http://staff.ustc.edu.cn/~rui/ppt/math-analysis/chap4_2.html#
* [3] 有理函数(积分)——留数定理拆分计算法
 https://zhuanlan.zhihu.com/p/264510923

* **有理函数的原函数一定是初等函数**

* R(x):rational表示有理函数
* 求有理函数的不定积分$\int \frac{p_m(x)}{q_n(x)}dx$的关键，是将有理函数$\frac{p_m(x)}{q_n(x)}$**分解成简单分式之和，再分别求简单分式的不定积分**
* 定理6.3.1
* 定理6.3.2
* 在理论上,求有理函数的不定积分问题已经圆满地得到了解决,并且上面的结果也告诉我们,有理函数的原函数一定是初等函数。

> 可化成有理函数不定积分的情况

* 有些函数的不定积分可以通过适当的变换化成有理函数的不定积分
* 有理函数与有理函数的复合仍未有理函数，有理函数的导数也是有理函数

## 定积分

### 定积分的概念和可积条件

> 定积分概念的导出背景

* 1609年至1619年间,德国天文学家Kepler提出了著名的“**行星运动三大定律**":
  * (1)行星在椭圆轨道上绕太阳运动,太阳在此椭圆的一个焦点上。
  * (2)从太阳到行星的向径在相等的时间内扫过相等的面积。
  * (3)行星绕太阳公转周期的平方与其椭圆轨道的半长轴的立方成正比。
* 阿基米德-穷竭法
* 例如求曲边三角形的面积
* 例如求曲边梯形的面积
* 这些问题都可以归纳为**和式的极限问题**

> 定积分的定义

* [1] 黎曼积分 维基百科，自由的百科全书 https://zh.wikipedia.org/wiki/%E9%BB%8E%E6%9B%BC%E7%A7%AF%E5%88%86

* 定义7.1.1 
  * Riemann可积
  * Riemann和-定积分
* 黎曼积分
  * 不太严格地来说，黎曼积分就是当分割越来越“精细”的时候，黎曼和趋向的极限[1]
* Dirichlet函数 $D(x) = \begin{cases} &1, x为有理数 \\ & 0, x为无理数 \end{cases}$
  * 虽然两个和式的极限都存在，但极限不相同，所以Dirichlet函数在Riemann意义下是不可积的

> Darboux和

* 不是所有的有界函数都是可积的
* 引理7.1.1 若在原有划分中加入分点形成新的划分，则大和不增，小和不减
* 引理7.1.3 (Darboux定理)

> Riemann可积的充分必要条件

* [1] 数学分析（9）第七章 定积分 https://zhuanlan.zhihu.com/p/342279244 [resource/数学分析（9）第七章-定积分]

* 定理7.1.1 

  <div align=center>
  <img src="https://cdn.jsdelivr.net/gh/aaronmack/image-hosting@master/mathematics/Riemann可积的充分必要条件.5zqnr6juu000.png" width="790">
  </div>

* 振幅: $\omega_i = M_i-m_i$ 
* 定理7.1.2 有界函数f(x)在[a,b]上可积的充分必要条件是，对任意划分，当$\begin{aligned}\lambda = \max_{1\leq i\leq n}(\Delta x_i)\rightarrow 0\end{aligned}$时, $\begin{aligned}\lim_{\lambda \rightarrow 0} \sum_{i=1}^{n}\omega_i\Delta x_i = 0\end{aligned}$
  * 几何意义为当分割无限细分时，即($\lambda \rightarrow 0$),其图7.1.5中阴影部分的面积之和趋于0

  <div align=center>
  <img src="https://cdn.jsdelivr.net/gh/aaronmack/image-hosting@master/mathematics/数学分析-定积分-图7.1.5.2fvyk54gkbk0.png" width="490">
  </div>

* 推论1：闭区间上的连续函数必定可积
* 推论2：闭区间上的单调函数必定可积

### 定积分的基本性质

* 性质1：线性性质
  * 设f(x)和g(x)都在[a,b]上可积，k1和k2是常数，则函数k1f(x)+k2g(x)在[a,b]上也可积
* 性质2：乘积可积性
  * 设f(x)和g(x)都在[a,b]上可积，则f(x)·g(x)在[a,b]上也可积
* 性质3：保序性
  * 设f(x)和g(x)都在[a,b]上可积，且在[a,b]上恒有f(x)≥g(x),则成立$\int_a^b f(x)dx \geq \int_a^bg(x)dx$
* 性质4：绝对可积性
  * 设f(x)在[a,b]上可积，则|f(x)|在[a,b]上也可积，且成立$|\int_a^b f(x)dx| \geq \int_a^b |f(x)|dx $
* 性质5：区间可加性
  * 设f(x)在[a,b]上可积，则对任意点$c\in [a,b]$f(x)在[a,c]和[c,b]上都可积，反过来也成立
* 性质6：积分第一中值定理

  * 证明
  <div align=center>
  <img src="https://cdn.jsdelivr.net/gh/aaronmack/image-hosting@master/mathematics/积分第一中值定理.54rgfoun0fw0.png" width="790">
  </div>

  * 特殊情况
  <div align=center>
  <img src="https://cdn.jsdelivr.net/gh/aaronmack/image-hosting@master/mathematics/积分第一中值定理-特殊情况.2v79cw1b3620.png" width="790">
  </div>

### 微积分基本定理

> 从实例看微分与积分的联系

* 举例1
  * 物体在时间段[T1,T2]所走过的路程可以表示为$S=S(T_2)-S(T_1)$
  * 于是就有$\begin{aligned}\int_{T_1}^{T_2} v(t)dt = S(T_2)-S(T_1)\end{aligned}$,可以说S(T)是v(t)的一个原函数
  * 于是说明了，v(t)在区间[T1,T2]上的积分值可以用它的一个原函数在区间的**两个端点处的函数值之差来表示**
* 举例2
  * 图7.3.1/2
  <div align=center>
  <img src="https://cdn.jsdelivr.net/gh/aaronmack/image-hosting@master/mathematics/数学分析-从实例看微分与积分的联系-图.51rccmhkql40.png" width="790">
  </div>

  * 斜边的斜率k(k=tan θ)
  * 高为h=k(b-a)
  * 将此直角三角形的斜边换成曲线y=f(x)，即目前直角三角形变为曲边直角三角形，当作近似看作，如图(a)
  * 将f(x)在x=a处的导数值f'(a)近似看作"斜边"的斜率，那么关于这个曲边直角三角形的"高"就近似的有`h≈f'(a)·(b-a)`,显然这样的结果是很粗糙的，我们可以提高精度，在区间[a,b]作划分`a=x0<x1<x2<...<xn=b`,并在每个小区间[x_(i-1),xi]上构造小曲边直角三角形，如图(b),将每个小曲边直角三角形近似看作直角三角形，并将f(x)在x=x_(i-1)处的导数值f'(x_(i-1))近似视作"斜边"的斜率，那么每个小曲边直角三角形的"高"就近似的等于$\begin{aligned}h_i = f'(x_{i-1})\cdot \Delta x_i\end{aligned}$
  * 将所有的h_i加起来，得到曲边直角三角形的"高"近似等于$\begin{aligned}\sum_{i=1}^{n} h_i = \sum_{i=1}^{n}f'(x_{i-1})\Delta x_i\end{aligned}$；**最终**$\begin{aligned}h=\lim_{\lambda \rightarrow 0}\sum_{i=1}^{n}f'(x_{i-1})\Delta x_i\end{aligned}$
  * 由定积分的定义，这个**极限值**就是$\int_a^b f'(x)dx$
  * 由于曲边直角三角形的"高"实际上就是f(x)在区间[a,b]的两个端点处的函数值之差，即f(b)-f(a)，于是得到$\int_a^b f'(x)dx = f(b)-f(a)$

* **结果**: f'(x)在[a,b]上的积分值,可以用它的一个原函数f(x)在积分区间的**两个端点处**的**函数值之差**来表示。

> 微积分基本定理 Newton-Leibniz公式

* [1] 微积分基本定理 https://zh.wikipedia.org/wiki/%E5%BE%AE%E7%A7%AF%E5%88%86%E5%9F%BA%E6%9C%AC%E5%AE%9A%E7%90%86

  <div align=center>
  <img src="https://cdn.jsdelivr.net/gh/aaronmack/image-hosting@master/mathematics/Fundamental_theorem_of_calculus_animation.gif" width="490">
  </div>

  * 微积分基本定理（英语：Fundamental theorem of calculus）描述了微积分的两个主要运算──微分和积分之间的关系。[1]

* 定理7.3.1
  * 这个定理扩展了函数的形式（本质上还是函数），但与我们所熟知的初等函数形式迥异

  <div align=center>
  <img src="https://cdn.jsdelivr.net/gh/aaronmack/image-hosting@master/mathematics/数学分析-微积分基本定理-定理7.3.1.1al92kpfy880.png" width="790">
  </div>

* 定理7.3.2 （微积分基本定理）

> 定积分的分部积分法和换元积分法

* **分部积分法**

  <div align=center>
  <img src="https://cdn.jsdelivr.net/gh/aaronmack/image-hosting@master/mathematics/定积分-分部积分公式.1yydanrepl5s.png" width="790">
  </div>

* 正交函数列
* 正交多项式列

* **换元积分法**

  <div align=center>
  <img src="https://cdn.jsdelivr.net/gh/aaronmack/image-hosting@master/mathematics/定积分-换元积分法.1p18njsai55s.png" width="590">
  </div>

* 定理7.3.5 

  <div align=center>
  <img src="https://cdn.jsdelivr.net/gh/aaronmack/image-hosting@master/mathematics/数学分析-定积分-定理7.3.5.15zjc1fywpek.png" width="590">
  </div>

* 定理7.3.6 

  <div align=center>
  <img src="https://cdn.jsdelivr.net/gh/aaronmack/image-hosting@master/mathematics/数学分析-定积分-定理7.3.6.4e91m9l2l5a0.png" width="590">
  </div>

### 定积分在几何计算中的应用

* 应用一元函数的定积分可解决求平面图形的面积、求曲线的**弧长**、求某些特殊的几何体的体积、求旋转曲面的**面积**等等类型的问题。至于一般几何体的体积和表面积,则要等学完多元函数的积分学后才能计算。

> 求平面图形的面积

> 求曲线的弧长

* 光滑曲线
* 定理7.4.1 弧长公式

  <div align=center>
  <img src="https://cdn.jsdelivr.net/gh/aaronmack/image-hosting@master/mathematics/数学分析-定理7.4.1-弧长公式.x5lhg86raeo.png" width="590">
  </div>

* 弧长的微分 - $dl = \sqrt{[x'(t)]^2 + [y'(t)]^2} dt$

> 求某些特殊几何体的体积

* 据《九章算术》记载,我国南北朝时的数学家祖暅(祖冲之之子)在求出球的体积的同时,得到了一个重要的结论(后人称之为“**祖暅原理**"):"**夫叠基成立积,缘幂势既同,则积不容异**。”用现在的话来讲,一个几何体(“立积”)是由一系列很薄的小片(“基”)叠成的;若两个几何体相应的小片的截面积(“幂势")都相同,那它们的体积(“积”)必然相等。这一结论与上述求体积公式的推导思想是相同的。

> 求旋转曲面的面积

> 曲线的曲率

* 平均曲率，曲率圆，密切圆，曲率半径，曲率中心

> 常用几何曲线图示

### 微积分实际应用举例

> 微元法

* 微元 - dx称为x的微元

  <div align=center>
  <img src="https://cdn.jsdelivr.net/gh/aaronmack/image-hosting@master/mathematics/数学分析-微元法-步骤.3ntooqcmc740.png" width="590">
  </div>

> 由静态分布求总量
* 分布函数

> 求动态效应
* 除了静态的物理量之外,还有一类物理量是通过**运动而产生**的,或者说是另一个物理量**持续作用的效果**。比如,“**位移**”是**速度作用**了一段时间的结果;“功”是**力作用**了一段距离的结果,等等。

> 简单数学模型和求解

  <div align=center>
  <img src="https://cdn.jsdelivr.net/gh/aaronmack/image-hosting@master/mathematics/数学分析-定积分-简单数学模型和求解-举例.4jiopvftu1k0.png" width="590">
  </div>

* 例7.5.5 跟踪问题模型

  <div align=center>
  <img src="https://cdn.jsdelivr.net/gh/aaronmack/image-hosting@master/mathematics/数学分析-定积分-跟踪问题模型.6vnc9upbyxo0.png" width="790">
  </div>

* 例7.5.6 火箭飞行的运动规律

* 例7.5.7 (Logistic人口模型)

> 从Kepler行星运动定律到万有引力定律 

* [1] 椭圆普通方程怎么化成极坐标？ https://www.zhihu.com/question/385065865/answer/1129706655

* Kepler第一定律

* 圆锥曲线方程
  <div align=center>
  <img src="https://cdn.jsdelivr.net/gh/aaronmack/image-hosting@master/mathematics/圆锥曲线方程.21wpkraq1em8.png" width="790">
  </div>

### 定积分的数值计算

> 数值积分

* 寻找求定积分的近似方法，即

  <div align=center>
  <img src="https://cdn.jsdelivr.net/gh/aaronmack/image-hosting@master/mathematics/数学分析-数值积分.o517hutn27.png" width="390">
  </div>

* 从定积分的几何意义知道,将**积分区间分得越细,小块近似面积之和与总面积就越是接近**。因此,用简单函数替代被积函数,并将积分区间细化是数值积分的主要思想。

> Newton-Cotes求积公式 (牛顿-柯特斯公式)

* [1] 牛顿-柯特斯公式 维基百科，自由的百科全书 https://zh.wikipedia.org/wiki/%E7%89%9B%E9%A0%93%EF%BC%8D%E5%AF%87%E6%AC%A1%E5%85%AC%E5%BC%8F

* 在数值分析上，**梯形法则**和**辛普森法则**均是数值积分的方法。它们都是计算定积分的。
* 这两种方法都属于牛顿-柯特斯公式。它们以函数于等距$n+1$点的值，取得一个$n$次的多项式来近似原来的函数，再行求积。[1]

  <div align=center>
  <img src="https://cdn.jsdelivr.net/gh/aaronmack/image-hosting@master/mathematics/牛顿-柯特斯公式.2p59dshd6ac0.png" width="760">
  </div>

* **梯形公式** n=1时的情况
* n步**Newton-Cotes求积公式**
* **Cotes系数**
* **Simpson公式** （也称为抛物线公式） n=2时的情况
* **Cotes公式** n=4时的情况

* 定理7.6.1 (Newton-Cotes公式误差估计定理)
* 定义7.6.1 n次代数精度

> 复化求积公式

* [1] 数值计算（七十）复化梯形公式求积分 https://zhuanlan.zhihu.com/p/337837258
* [2] 复化求积公式 https://baike.baidu.com/item/%E5%A4%8D%E5%8C%96%E6%B1%82%E7%A7%AF%E5%85%AC%E5%BC%8F/19131010

  <div align=center>
  <img src="https://cdn.jsdelivr.net/gh/aaronmack/image-hosting@master/mathematics/复化梯形公式.5xka652ol780.png" width="760">
  </div>

```matlab
function s= trap( a, b, M)
%UNTITLED4 此处显示有关此函数的摘要
%   此处显示详细说明
%a, b上下限
%M 区间数量
    h=(b-a)/M ;
    s=0;
    for k=1:M-1
        
        x=a+h*k;
        s=s+fx(x) ;
    end
    s=h*(fx(a) +fx(b) )/2+h*s ;

end

%被积分函数
function y =fx(x)
```

* 要提高**数值积分的精度**,不能采用一味提高Newton-Cotes公式的步数的办法。理论上已经证明,n较大时, Newton-Cotes公式的计算过程中将产生不稳定,因此实际使用时,几乎不会有人**将n取得大于4**
* 其他思路：先将积分区间分成**若干**等份,再在每一个小区间上使用**低步数的Newton-Cotes公式**,最后将各小区间上的积分近似值加起来。

* **复化梯形公式**
* **复化Simpson公式** (复化Simpson公式实质上是对复化梯形公式做了一次**外推**的结果)
* **复化Cotes公式**
* **两个低精度的近似值进行适当外推后，可产生一个精度高的多的近似值**

* Romberg方法

* 将复化Cotes公式的外推思想推广到一般的$\begin{aligned}T_{m}^{(k)}\end{aligned}$，就成了数值积分的Romberg方法
* Romberg方法是在**计算机**上实际使用的求数值积分的最重要的方法之一
  * 自适应算法

> Gauss型求积公式

* **Gauss-Legendre求积公式**

## 反常积分

### 反常积分的概念和计算

> 反常积分

* 前面讨论Rienann积分时,首先假定了积分区间[a,b]有限且被积函数f(x)在[a,b]上**有界**,但在实际中经常会碰到不满足这两个条件,却确实需要求积分的情况。所以,我们有必要**突破Riemann积分**的限制条件,考虑积**分区间无限**或**被积函数无界**的积分问题,这样的积分称为`反常积分`(或`广义积分`),而以前学过的Riemann积分相应地称为`正常积分`(或`常义积分`),

* 第二宇宙速度
* **收敛**，**上可积**，**发散**，**奇点**

> 反常积分计算

* 定积分的性质,对于反常积分**大多相应成立**,如线性性质、保序性、区间可加性等;但也有一些性质,如乘积可积性,却不再成立。定积分的一切**计算法则**,如线性运算、换元积分法、分部积分法等,也都**可以平行地用于反常积分**。

* [1] 为什么要在广义积分里面引入cauchy主值积分的概念？ https://www.zhihu.com/question/53079854

* Cauchy主值 (柯西主值)

  <div align=center>
  <img src="https://cdn.jsdelivr.net/gh/aaronmack/image-hosting@master/mathematics/数学分析-柯西主值.1gmns0pqanj4.png" width="790">
  </div>

* 例如$\begin{aligned}\int_{-1}^{1} \frac{1}{x}dx\end{aligned}$,x=0是它的唯一奇点，可以将它分为两部分

### 反常积分的收敛判别法

> 反常积分的Cauchy收敛原理

* 由于一般的被积函数的原函数并不一定是初等函数,而且即使是初等函数,也往往**不容易求出**,因此有必要建立反常积分**敛散性的判别法**。事实上,在理论研究和实际应用中,经常会遇到只需要确定一个反常积分的收敛性,而不一定需要求出它的积分值的情况。此外,用数值方法计算反常积分的先决条件是确认其收敛,否则就会得出荒谬的结论-在积分本身发散时,却从数值求积公式得到了一个“收敛"值。

* 定理8.2.1 Cauchy收敛原理
  * 绝对收敛，上绝对可积，条件收敛，上条件可积

> 非负函数反常积分的收敛判别法

* 定理8.2.2 (比较判别法)
* 推论(比较判别法的极限形式)
* 定理8.2.3 (Cauchy判别法)
* 推论(Cauchy判别法的极限形式)

> 一般函数反常积分的收敛判别法

* 定理8.2.4 (积分第二中值定理)
* 定理8.2.5 (Abel判别法) (Dirichlet判别法)

> 无界函数反常积分的收敛判别法

## 数项级数

* Zeno学者，**Achilles追赶乌龟悖论**
* 无限个数相加的问题

### 数项级数的收敛性

> 数项级数

* 设x1,x2,...xn,...是无穷可列个实数，我们称它们的"和"，x1+x2+...+xn+...为**无穷数项级数**简称**级数**，记为$\begin{aligned}\sum_{n=1}^{\infin} x_n\end{aligned}$,其中xn称为级数的**通项**或**一般项**
* 收敛与发散的判别 - 如果**部分和数列**收敛于**有限数**S，则收敛，只有收敛时，无穷多个实数的加法才是有意义的，并且它们的和就是**级数的部分和数列的极限**，所以**级数的收敛与数列的收敛本质上是一回事**

* p级数，调和级数，余和数列

> 级数的基本性质

* 可以由数列的性质平行的导出级数的一些性质

* 定理9.1.1 (级数收敛的必要条件)
* 定理9.1.1 (线性性)

* 例题

  <div align=center>
  <img src="https://cdn.jsdelivr.net/gh/aaronmack/image-hosting@master/mathematics/数学分析-数列级数-例题.3cnr7d9qog60.png" width="790">
  </div>

### 上极限与下极限

> 数列的上极限和下极限

* 研究级数的敛散性常常需要借助于某些数列,但这些数列本身却不一定收敛,因而有必要引进比“极限存在”稍弱一些、并在**一定程度上反映其变化规律**的新概念。Bolzano-Weierstrass定理告诉我们,有界数列中必有收敛子列。这启示我们,对不存在极限的数列,或许可以用它的子列的极限情况来刻画它本身的变化情况。

* 极限点
* 上极限，下极限 （H=maxE, h=minE）

> 上极限和下极限的运算

### 正项级数

> 正项级数

* 定义9.3.1 如果级数的各个项都是非负实数，则称此项为正项级数
* 定理9.3.1 (正项级数的收敛原理) 正项级数收敛的充分必要条件是它的**部分和数列有上界**

> 比较判别法

* 定理9.3.2 （比较判别法）
* 判断一个正项级数是否收敛,最常用的方法是用一个已知收敛或发散的级数与它进行比较。
* 定理9.3.2' （比较判别法的极限形式）

> Cauchy判别法与d'Alembert判别法

* 用比较判别法时,先要对所考虑的级数的收敛性有一个大致估计,进而找一个敛散性已知的合适级数与之相比较。但就绝大多数情况而言,这两个步骤都具有相当难度,因此,理想的判别方法似应着眼于**对级数自身元素的分析**。

* 正项等比级数$\begin{aligned}\sum_{n=1}^{\infin} q^n (q>0)\end{aligned}$给我们很重要的启示，即$\begin{aligned}\sum_{n=1}^{\infin} q^n\end{aligned}$的敛散性只依赖于其**后项于前项之比**，即公比q是否小于1，类比一下，若一个级数$\begin{aligned}\sum_{n=1}^{\infin} x_n\end{aligned}$的后项于前项之比$\begin{aligned}\frac{x_{n+1}}{x_n}\end{aligned}$或前n项的"平均公比"$\sqrt[n]{x_n}$,(记为$x_0=1$,则$\begin{aligned}\sqrt[n]{x_n} = \sqrt[n]{\frac{x_1}{x_0} \cdot \frac{x_2}{x_1} \cdot \cdots \cdot \frac{x_n}{x_{n-1}}}\end{aligned}$) 存在小于(或大于)1的极限，则这个级数应该是收敛(或发散)的，**若它们的极限不存在，那么可以通过讨论其上(下)极限来得到类似的结论**。正是这样的思路，产生了Cauchy判别法与d'Alembert判别法

* Cauchy判别法的适用范围比d'Alembert判别法广，d'Alembert判别法比Cauchy判别法更方便一些；它们的本质是**比较判别法**，与之相比较的是几何级数$\begin{aligned}\sum_{n=1}^{\infin}q^n\end{aligned}$

> Raabe判别法

* 对某些正项级数$\begin{aligned}\sum_{n=1}^{\infin} x_n\end{aligned}$,成立$\begin{aligned}\lim_{n\rightarrow \infin} \frac{x_{n+1}}{x_n} = 1\end{aligned}$, (或$\begin{aligned}\lim_{n\rightarrow \infin} \frac{x_{n}}{x_{n+1}} = 1\end{aligned}$),这时Cauchy判别法和d'Alembert判别法都失效
* 定理9.3.5 Raabe判别法
* Raabe判别法在$\begin{aligned}\lim_{n\rightarrow \infin} n( \frac{x_{n}}{x_{n+1}} - 1)= 1\end{aligned}$时仍会失效，即级数可能收敛，也可能发散
* **Bertrand判别法**

* 建立不断完善的判别法的过程是**无限的**，虽然每次都能得到新的、适用范围更广的判别法，但这些判别法的证明也变更加复杂

> 积分判别法

* 我们利用积分判别法，由已知收敛性的反常积分出发，来判断级数的收敛性，事实上我们也可以**反其道而行之**，由已知敛散性的级数出发，去判断某些反常积分的敛散性


### 任意项级数

> 任意项级数

* 一个级数,如果只有有限个负项或有限个正项,都可以用正项级数的各种判别法来判断它的敛散性。如果一个级数**既有无限个正项,又有无限个负项**,那么正项级数的各种判别法不再适用。为此,我们从正项级数转向讨论任意项级数,也就是**通项任意地可正或可负的级数**。由于Cauchy收敛原理是对敛散性最本质的刻画,为了判断任意项级数的敛散性,我们将关于数列的**Cauchy收敛原理**应用于级数的情况,即可得到定理9.4.1 **级数的Cauchy收敛原理**

> Leibniz级数

* 交错级数
* 定理9.4.2 Leibniz判别法 - Leibniz级数必定收敛

> Abel判别法于Dirichlet判别法

* Abel变换 - 分部求和公式
* Abel变换就是离散形式的分部积分公式
* Abel引理
* 定理9.4.3 级数的A-D判别法

> 级数的绝对收敛与条件收敛

> 加法交换律

* 更序级数
* 定理9.4.6 Riemann

> 级数的乘法

* Cauchy乘积

### 无穷乘积

> 无穷乘积的定义

* 设p1, p2, ... ,pn,...(pn ≠ 0)是无穷可列个实数,我们称它们的“积” P1·P2·...Pn·...为无穷乘积,记为$\begin{aligned}\prod_{n=1}^{\infin} p_n\end{aligned}$,其中pn,称为**无穷乘积的通项**或**一般项**。
* Wallice公式
* Viete公式

> 无穷乘积与无穷级数

* Stirling公式

## 函数项级数

### 函数项级数的一致收敛性

> 点态收敛

* 设$u_n(x) (n=1,2,3,...)$是具有公共定义域$E$的一列函数，我们将这无穷个函数的“和”，$u_1(x)+u_2(x)+\cdots +u_n(x)+\cdots$称为**函数项级数**，记为$\begin{aligned}\sum_{n=1}^{\infin}u_n(x)\end{aligned}$,函数项级数的收敛性可以借助数项级数来得到
* 收敛点，收敛域，和函数
* 由于这是通过逐点定义的方式得到的，因为称为点态收敛
* 部分和函数 （n -> k个）


> 函数项级数(或函数序列)的基本问题

* 若有限个函数在D上定义且具有某种分析性质，如连续性、可导性和Riemann可积性，则它们的和函数在D上仍保持同样的分析性质，且其**和函数的极限**(或导数、积分)可以通过对函数**分别求极限**(或导数、积分)后再求和**来得到**
* **逐项求极限**，**逐项求导**，**逐项求积分**

> 函数项级数(或函数序列)的一致收敛性

* 内闭一致收敛

### 一致收敛级数的判别与性质

> 一致收敛的判别

* 和函数(或极限函数)寻找困难，因此需要寻找无需事先知道和函数(或极限函数)的判断条件，我们知道,用"ε-N"定义判断一个数列的极限,需要先知道它的极限值,而用**Cauchy收敛原理**则可以避开这一点。将这个结论用于函数项级数,就有定理10.2.1 (函数项级数的一致收敛的Cauchy收敛原理)
* 定理10.2.2 Weierstrass判别法

> 一致收敛级数的性质

* 定理10.2.4 连续性定理
* 定理10.2.5' 逐项积分定理
* 定理10.2.6' 逐项求导定理
* 定理10.2.7 Dini定理

> 处处不可导的连续函数之例

* 一般说来,数学分析所讨论的连续函数在其绝大部分连续点上总是可导的。因此在数学分析的发展历史上,数学家们一直猜测:连续函数在其定义区间中,至多除去可列个点外都是可导的。也就是说,**连续函数的不可导点至多是可列集**。以后,随着级数理论的发展, **Weierstrass利用函数项级数**第一个构造出了一个**处处连续而处处不可导的函数**,为上述猜测做了一个否定的终结。下面我们叙述的反例相对简易些，它是由荷兰数学家Van Der Waerden于1930年给出的。 

### 幂级数

* 幂级数可以看成是一个"无限次多项式"，而它的部分和函数Sn(x)是一个n-1次多项式

> 幂级数的收敛半径

* Cauchy-Hadamard定理
* d'Alembert判别法

> 幂级数的性质

* Abel第二定理
* 根据Abel第二定理，得到幂级数的如下性质
  * 和函数的连续性：幂级数在它的收敛域上连续
  * 逐项可积性：幂级数在包含于收敛域中的任意闭区间上可以逐项求积分
  * 逐项可导性：幂级数在它的收敛域内部可以逐项求导

### 函数的幂级数展开

> Taylor级数与余项公式

* 幂级数具有一些良好性质，所以如果**一个函数在某一区间上能够表示成一个幂级数**,将给理论上讨论其性质带来极大的**方便**,同时也具有重要的应用价值。
* Taylor系数
* Taylor级数

<div align=center>
<img src="https://cdn.jsdelivr.net/gh/aaronmack/image-hosting@master/mathematics/Taylor级数.6mqxt16i8gg0.png" width="790">
</div>

* 任意阶可导的函数的Taylor级数并非一定能收敛于函数本身
* 幂级数展开(或Taylor展开)

* (注意Taylor级数与之前学习的Taylor公式的区别，Taylor公式是取的前n项(k项)+一个余项(r), 而Taylor级数是无穷多项)
* 定理10.4.1 *Lagrange余项的积分形式

<div align=center>
<img src="https://cdn.jsdelivr.net/gh/aaronmack/image-hosting@master/mathematics/数学分析-函数的幂级数展开-Lagrange余项的积分形式.65b187lzceo0.png" width="790">
</div>

* **Cauchy余项**， **Lagrange余项**

<div align=center>
<img src="https://cdn.jsdelivr.net/gh/aaronmack/image-hosting@master/mathematics/数学分析-Taylor展开余项.1tz2e1d4ki5c.png" width="790">
</div>

> 初等函数的Taylor展开

* 先通过讨论使余项rn(x)趋于0的**x的范围**，导出基本初等函数的**幂级数展开式**

<div align=center>
<img src="https://cdn.jsdelivr.net/gh/aaronmack/image-hosting@master/mathematics/数学分析-初等函数的Taylor展开.1bfku9aex7kw.png" width="790">
</div>

### 用多项式逼近连续函数

* 定义10.5.1 设函数`f(x)`在闭区间`[a,b]`上有定义,如果存在多项式序列`{Pn(x)}`在`[a,b]`上一致收敛于`f(x)`,则称`f(x)`在这闭区间上可以用**多项式一致逼近**。应用分析语言,"`f(x)`在`[a,b]`上可以用多项式一致逼近"可**等价表述**为: 对任意给定的`ε>0`,存在多项式`P(x)`,使得`|P(x)-f(x)<ε`对一切`x∈[a,b]`成立。
* 幂级数的部分和函数序列只是多项式序列的一种特殊情况，对于任意正整数n次多项式Sn(x),只能是在n-1次多项式Sn-1(x)的基础上增加一项，而不能更改Sn-1(x)中的任何一项，这样**极大了限制了活动的余地**
* Weierstrass首先证明了：闭区间[a,b]上**任意连续函数**f(x)都可以**用多项式一致逼近**
* 定理10.5.1 Weierstrass第一逼近定理
  * Bernstein多项式
  * 定理10.5.1还可以表述为： 设`f`在`[a,b]`上连续，则它的Bernstein多项式序列`{Bn(f,x)}`在`[a,b]`上一致收敛于`f`

<div align=center>
<img src="https://cdn.jsdelivr.net/gh/aaronmack/image-hosting@master/mathematics/数学分析-Weierstrass第一逼近定理.3j8uuomoore0.png" width="790">
</div>

## Euclid空间上的极限和连续

### Euclid空间上的基本定理

* 在现实生活中,除了非常简单的情况之外,可以仅用**一个自变量和一个因变量**的变化关系来刻画的问题可以说是**比较少**的。比如,即便是像物理学中研究质点运动这么一个相对较为容易的问题,也需要用到三**个空间变量**`x、y、z`和一个时间变量`t`以及多个函数值(如位置、速度、加速度、动量等),更不用说在化学、生物及社会科学领域产生的远为复杂的情况。这种**多自变量和多因变量的变化关系**,反映到数学上就是**多元函数**(或多元函数组,即向量值函数)。
* 多元函数的分析性质无非也是极限理论、连续性、可微性、可积性等,它们与一元函数的相应性质既有紧密联系,又有很大差别。

> Euclid空间上的距离与极限

* 回顾极限定义，其中**任意接近**，而这个"接近"，实质上是使用即一维空间中两点间的距离来刻画的，若没有距离的概念和定义，就无所谓"接近"，"不接近"，也就没有"收敛"和"发散"这么一说法，**收敛就是距离趋向于0**

<div align=center>
<img src="https://cdn.jsdelivr.net/gh/aaronmack/image-hosting@master/mathematics/数学分析-Euclid空间定义.5yngynx0gi80.png" width="790">
</div>

* 向量，坐标，向量空间，内积，Euclid空间
* 内积满足的性质
  * 正定性
  * 对称性
  * 线性性
  * Schwarz不等式
* 平面解析几何两点距离公式

<div align=center>
<img src="https://cdn.jsdelivr.net/gh/aaronmack/image-hosting@master/mathematics/平面解析几何两点距离公式.7lbti1d8eds0.png" width="790">
</div>

  * 这个距离公式可以推广到R^n上的"距离"

* `<x,y>` 表示内积运算
* 定义11.1.1 **Euclid范数**

<div align=center>
<img src="https://cdn.jsdelivr.net/gh/aaronmack/image-hosting@master/mathematics/Euclid范数.5jzb643oxak0.png" width="790">
</div>

* **定义了距离就可以引入邻域以及收敛的概念**

* **邻域**

  <div align=center>
  <img src="https://cdn.jsdelivr.net/gh/aaronmack/image-hosting@master/mathematics/数学分析-Euclid空间邻域.3oe9j37m2qq0.png" width="790">
  </div>

  * 一维：开区间，二维：开圆盘，三维：开球

* **收敛**

  <div align=center>
  <img src="https://cdn.jsdelivr.net/gh/aaronmack/image-hosting@master/mathematics/数学分析-Euclid空间收敛.3wtqb3r1j9w0.png" width="790">
  </div>

* 为什么高维中的两个点不存在大小关系？
  * [1] 走进高维空间三—所有点之间的距离都相等！奇妙、疯狂 https://cloud.tencent.com/developer/news/625906

* **有界集**

  <div align=center>
  <img src="https://cdn.jsdelivr.net/gh/aaronmack/image-hosting@master/mathematics/数学分析-Euclid空间有界集.4i08hwmloby0.png" width="790">
  </div>

> 开集与闭集

* **内点**，内部，**边界点**，边界
* 要注意的是，内点必属于S，外点必不属于S，但边界点可能属于S，也可能不属于S

<div align=center>
<img src="https://cdn.jsdelivr.net/gh/aaronmack/image-hosting@master/mathematics/内点外点边界点.3lj9rpjtu520.png" width="790">
</div>

* 进一步，若存在x的一个邻域，其中只有x点属于S，则称x是S的孤立点，显然，**孤立点**必是边界点
* **聚点**
  * 若x的任意邻域都含有S中的无限个点，则称x是S的**聚点**。S的聚点全体记为S'。显然，**S的内点必是S的聚点**；S的边界点，只要不是S的孤立点，也必是S的聚点。因此S的聚点可能属于S，也可能不属于S
* **开集，闭集，闭包**
  * 定义11.1.5 设S是R^n上的点集。如S中的每一个点都是它的内点，则称S为开集；若S中包含了它的所有的聚点，则称S为闭集。S与它的聚点全体S'的并集称为S的闭包，记为$\overline{S}$

* n维开(闭)矩形，n维开(闭)球
* 引理11.1.1 (De Morgan公式)
* 定理11.1.6' (Cantor闭区域套定理)
* 定理11.1.7 (Bolzano-Weierstrass定理)
* 基本点列，Cauchy点列
* 定理11.1.8 (Cauchy收敛原理)

> **紧集**

<div align=center>
<img src="https://cdn.jsdelivr.net/gh/aaronmack/image-hosting@master/mathematics/数学分析-紧集.1a44ajv1sg5c.png" width="790">
</div>

  * 开覆盖
  * Heine-Borel定理

* 定理11.1.10
<div align=center>
<img src="https://cdn.jsdelivr.net/gh/aaronmack/image-hosting@master/mathematics/数学分析-定理11.1.10.4o88p6di49k0.png" width="790">
</div>

### 多元连续函数

> 多元函数

* 在科学技术及日常生活中,常常遇到的是因变量的变化与几个自变量有关。
* 它们表示的是因变量随多个自变量的变化而相应变化"的某种规律,这是一元函数推广,即**多元函数**。

* 定义11.2.1

  <div align=center>
  <img src="https://cdn.jsdelivr.net/gh/aaronmack/image-hosting@master/mathematics/多元函数定义与示例.371eu5pd4is0.png" width="790">
  </div>

> 多元函数的极限
* (n重)极限

* 对一元函数而言,只要在`x0`的左、右极限存在且相等,那么函数在`x0`处的极限就存在。而多元函数就没有这样简单。根据极限存在的定义,要求当`x`以任何方式趋于`x0`时,函数值都趋于同一个极限。这就为我们判断函数极限的不存在提供了方便,因为若自变量**沿不同的两条曲线趋于某一定点**时,函数的**极限不同或不存在**,那么这个函数在该点的**极限一定不存在**。
* 有时，即使点x沿着任意直线趋于x0时，f(x)的极限都存在且相等，仍无法保证函数f在x0处有极限

> 累次极限

* 对于重极限，我们是否在一定条件下，将重极限`(x,y)➡(x0,y0)`分解成为两个独立的极限，`x➡x0`和`y➡y0)`,再利用一元函数的极限理论和方法**逐个处理之**，这种称为累次极限
* 二次极限
* **二次极限存在并不能保证二重极限存在，二重极限存在，两个二次极限中可能也有一个不存在，两个极限运算不一定可以交换次序**
* 定理11.2.1 

  <div align=center>
  <img src="https://cdn.jsdelivr.net/gh/aaronmack/image-hosting@master/mathematics/数学分析-定理11.2.1.5i9a08361og0.png" width="790">
  </div>

* 若函数f(x,y)的二重极限及两个二次极限都存在，则三者必相等，此时意味着，**极限运算可以交换顺序**

> 多元函数的连续性

* 连续函数 - 函数f在D上每一点连续

> 向量值函数

  <div align=center>
  <img src="https://cdn.jsdelivr.net/gh/aaronmack/image-hosting@master/mathematics/向量值函数定义.5l6c7ef34s00.png" width="790">
  </div>

* **连续映射**

* 例
  <div align=center>
  <img src="https://cdn.jsdelivr.net/gh/aaronmack/image-hosting@master/mathematics/数学分析-例11.2.11.1ar5r51t3pnk.png" width="790">
  </div>

* **复合映射**

### 连续函数的性质

> 紧集上的连续映射

* 闭区间实质上是一维空间中的**有界闭集**,顺理成章地,在讨论高维空间上连续函数的性质时,应该要求f的定义域是**高维空间**中的**有界闭集**,即**紧集**。这样,一元函数在闭区间上的性质就可以拓展至多元函数,这也是**引进紧集概念的一个原因**。

* 定理11.3.1 **连续映射将紧集映射成紧集**
* 定理11.3.2 有界性定理
* 定理11.3.3 最值定理
* 定理11.3.4 一致连续定理

> 连通集与连通集上的连续映射

* 在直线上,区间实质上是"连成一体"的**点集**,在高维空间,“连成一体”的点集就是**连通集**。

  <div align=center>
  <img src="https://cdn.jsdelivr.net/gh/aaronmack/image-hosting@master/mathematics/数学分析-连通集定义.4vj5251n6ly0.png" width="790">
  </div>

* 定理11.3.5 **连续映射将连通集映射成连通集**

## 多元函数的微分学

### 偏导数与全微分

> 偏导数

* 引入
  <div align=center>
  <img src="https://cdn.jsdelivr.net/gh/aaronmack/image-hosting@master/mathematics/数学分析-偏导数的引入.4o2xa9svagi0.png" width="790">
  </div>
* 定义
  <div align=center>
  <img src="https://cdn.jsdelivr.net/gh/aaronmack/image-hosting@master/mathematics/数学分析-偏导数的定义.3306ed91x5k0.png" width="790">
  </div>

> 方向导数

* 偏导数反映的是二元函数沿`x`轴方向或`y`轴方向的**变化率**。而在平面`R^2`上,从一点出发有无穷条射线,当然也可以讨论**函数沿任一射线方向的变化率**。

* 定义
  <div align=center>
  <img src="https://cdn.jsdelivr.net/gh/aaronmack/image-hosting@master/mathematics/数学分析-方向导数的定义.2a8xdo1splog.png" width="790">
  </div>
* 方向导数存在的条件
  <div align=center>
  <img src="https://cdn.jsdelivr.net/gh/aaronmack/image-hosting@master/mathematics/数学分析-方向导数存在的条件.4ho0ycitkby0.png" width="790">
  </div>

> 全微分

* 引入
  <div align=center>
  <img src="https://cdn.jsdelivr.net/gh/aaronmack/image-hosting@master/mathematics/数学分析-全微分的引入.6frd359ais80.png" width="790">
  </div>
* 定义
  <div align=center>
  <img src="https://cdn.jsdelivr.net/gh/aaronmack/image-hosting@master/mathematics/数学分析-全微分的定义.24ijogz8fy3k.png" width="790">
  </div>
* **可微必连续，可微必可偏导**

* 定理12.1.1
  <div align=center>
  <img src="https://cdn.jsdelivr.net/gh/aaronmack/image-hosting@master/mathematics/数学分析-定理12.1.1-方向全微分" width="790">
  </div>
* 定理12.1.2 设函数`z=f(x,y)`在`(x0,y0)`点的某个领域上存在偏导数，并且偏导数在`(x0,y0)`点连续，那么`f`在`(x0,y0)`点可微

> 梯度

* 定义
  <div align=center>
  <img src="https://cdn.jsdelivr.net/gh/aaronmack/image-hosting@master/mathematics/数学分析-梯度的定义.4y97l1vtcng0.png" width="790">
  </div>

  * 【1】为什么这个向量就可以称为梯度呢？考量一个二维空间，式子中的fx,fy是分别求偏导，（**导数**的定义就是变化率），**偏导**是在某个方向上它的变化率，考虑一对正交的方向，再结合**向量**的定义，朝一个方向移动了固定步长之后，又朝另外一个方向移动了固定步长，在当前这个二维空间，衡量了两个方向的变化量之后，则明确可知；或这样理解，考量所有的方向的变化率构成的空间，就是**切平面**，由正交构成两个方向的三角形，（这样的三角形，总共有四对，其中对角之间是相反的）先考量其中两对，根据向量加法，这两对求得的向量都是梯度方向，可知，最大下滑方向就是三角形的高的方向，而**方向向量**求出来的就是三角形高的方向

  * ①
    <div align=center>
    <img src="https://cdn.jsdelivr.net/gh/aaronmack/image-hosting@master/mathematics/梯度方向的另一种情况.3340n4s9fqc0.png" width="790">
    </div>
  * ②
    * [resource/如何直观形象地理解方向导数与梯度以及它们之间的关系]
    * https://www.zhihu.com/question/36301367

> 高阶偏导数

* 二阶偏导数
* 二阶及二阶以上统称为**高阶偏导数**
* 定理12.1.3
<div align=center><img src="https://cdn.jsdelivr.net/gh/aaronmack/image-hosting@master/mathematics/数学分析-高阶偏导数-定理12.1.3.2wtga0wlg7c0.png" width="790"></div>

> 高阶微分

* 二阶微分
* 二阶及二阶以上统称为**高阶微分**

> 向量值函数的导数

* Jacobi矩阵

  <div align=center>
  <img src="https://cdn.jsdelivr.net/gh/aaronmack/image-hosting@master/mathematics/数学分析-向量值函数与Jacobi矩阵.37diu3wwkes0.png" width="790">
  </div>

* 例-向量值函数

  <div align=center>
  <img src="https://cdn.jsdelivr.net/gh/aaronmack/image-hosting@master/mathematics/数学分析-向量值函数-例.2kwg031bfmu0.png" width="790">
  </div>

  <div align=center>
  <img src="https://cdn.jsdelivr.net/gh/aaronmack/image-hosting@master/mathematics/数学分析-向量值函数-例2.7f28l0pbu9s0.png" width="790">
  </div>

* 定理12.1.4 向量值函数可微的条件
  <div align=center>
  <img src="https://cdn.jsdelivr.net/gh/aaronmack/image-hosting@master/mathematics/数学分析-向量值函数可微条件.3edotnhurj80.png" width="790">
  </div>

### 多元复合函数的求导法则

> 链式规则

  <div align=center>
  <img src="https://cdn.jsdelivr.net/gh/aaronmack/image-hosting@master/mathematics/数学分析-多元复合函数的求导法则-链式规则.6djb8qtrmqo0.png" width="790">
  </div>

> 一阶全微分的形式不变性

  <div align=center>
  <img src="https://cdn.jsdelivr.net/gh/aaronmack/image-hosting@master/mathematics/数学分析-一阶全微分的形式不变性.2t1g43csr8g.png" width="790">
  </div>

* 全微分的形式不变性在高阶微分时是不成立的

### 中值定理和Taylor公式

> 中值定理

* 凸区域
  <div align=center>
  <img src="https://cdn.jsdelivr.net/gh/aaronmack/image-hosting@master/mathematics/数学分析-凸区域.6oiubi2ix3c0.png" width="790">
  </div>

* 中值定理
  <div align=center>
  <img src="https://cdn.jsdelivr.net/gh/aaronmack/image-hosting@master/mathematics/数学分析-n元函数中值定理.1prq6gwu5jxc.png" width="790">
  </div>

> Taylor公式

* Taylor公式的基本想法就是在某点附近,**利用一个函数的各阶(偏)导数在**该点的值构造多项式来近似这个函数。

  <div align=center>
  <img src="https://cdn.jsdelivr.net/gh/aaronmack/image-hosting@master/mathematics/数学分析-n元函数Taylor公式.7fqk4j2fijk0.png" width="790">
  </div>

* **中心差商**
* **五点差分格式**

### 隐函数
P171

* 有些函数无法显示表达，例如反映行星运动的Kepler方程`F(x,y)=y-x-εsin(y)=0, 0＜ε＜1`，这里`x`是时间,`y`是行星与太阳的连线扫过的扇形的弧度,`ε`是行星运动的椭圆轨道的离心率。从天体力学上考虑,`y`必定是`x`的函数,但要将函数关系用显式表达出来却无能为力。这种自变量和因变量混合在一起的方程(组)`F(x,y)=0`,在一定条件下也表示`y`与`x`之间的函数关系,通称隐函数。那么自然要问,**这种函数方程(组)何时确实表示了一个隐函数(向量值隐函数),又如何保证该隐函数具有连续和可微等分析性质?**

> 单个方程的情形

* 我们可以使用`F(x,y)≠0`来确定y是否是x的隐函数，例如**单位圆周方程**,`x^2+y^2=1`,如果使用`y=sqrt(1-x^2)`和`y=-sqrt(1-x^2)`表示上平面和下平面,如果遇到即出现在上平面，也出现在下平面的点，则会出现一个x值对应不同y值的现象；我们可以将单位圆周方程改写为`F(x,y)=x^2+y^2-1=0`

<div align=center><img src="https://cdn.jsdelivr.net/gh/aaronmack/image-hosting@master/mathematics/数学分析-单个方程的情形.5rvh6p6o63s0.png" width="790"></div>

  * 这里为什么说Fy可能具有举足轻重的意义呢？因为在分母上 [【高等数学】多元复合函数求导的基本方法](https://zhuanlan.zhihu.com/p/61585348)

* 定理12.4.1 （一元隐函数存在定理）
  <div align=center><img src="https://cdn.jsdelivr.net/gh/aaronmack/image-hosting@master/mathematics/数学分析-一元隐函数存在定理.5ohrxjkmnfc0.png" width="790"></div>

* 定理12.4.2 （多元隐函数存在定理）
  <div align=center><img src="https://cdn.jsdelivr.net/gh/aaronmack/image-hosting@master/mathematics/数学分析-多元隐函数存在定理.eokjwspnasw.png" width="790"></div>

> 多个方程的情形

* 定理12.4.3 （多元向量值隐函数存在定理）

> 逆隐射定理

* 反函数
* Jacobi行列式

### 偏导数在几何中的应用

> 空间曲线的切线和法平面

* 空间曲线参数方程
* 光滑曲线

<div align=center><img src="https://cdn.jsdelivr.net/gh/aaronmack/image-hosting@master/mathematics/数学分析-空间曲线定义.3m9uu8hvkq20.png" width="790"></div>

  * 向量形式中的$i,j,k$为单位向量，r(t)为空间向量

* 空间曲线的切线的定义与平面的情况相同，即定义为割线的极限位置
* **切向量** - 切线的一个方向向量
* **法平面** - 与切线垂直的平面，即垂直于虚拟法线的平面

<div align=center><img src="https://cdn.jsdelivr.net/gh/aaronmack/image-hosting@master/mathematics/法平面.6zmswohjk300.png" width="790"></div>

* (平面中和空间中切线都只有一条，平面中法线有一条(点内面和外面)，空间中法线有多条构成法平面)

* 由空间解析几何知道,由一点及两个线性无关(即非平行)的向量确定一张过该点的平面(称为这两个向量张成的平面),平面上的任一向量都可以表为这两个向量的线性组合。
* 空间曲线还可以表示为空间中两张曲面的交

* [1] 形象理解“梯度”与“法向量”的关系 https://zhuanlan.zhihu.com/p/62718992

<div align=center><img src="https://cdn.jsdelivr.net/gh/aaronmack/image-hosting@master/mathematics/梯度与法向量的关系.n8v0s6qugn4.png" width="790"></div>

* 定理12.5.1

  <div align=center><img src="https://cdn.jsdelivr.net/gh/aaronmack/image-hosting@master/mathematics/数学分析-定理12.5.1.782d8ayqd7w0.png" width="790"></div>

* 螺旋线

> 曲面的切平面与法线

* 若将曲线视为点的运动轨迹,则曲面就可以看成曲线的运动轨迹。

* 光滑曲面
* **切平面**
* **法向量**，法线
* 曲面的参数方程

### 无条件极值

> 无条件极值

* 多元函数最值问题

* 驻点不一定是极值点，例如马鞍面
* 偏导数不存在的点也可能是极值点

<div align=center><img src="https://cdn.jsdelivr.net/gh/aaronmack/image-hosting@master/mathematics/数学分析-马鞍面.3pvqayupi0m0.png" width="790"></div>

* 定理12.6.2

<div align=center><img src="https://cdn.jsdelivr.net/gh/aaronmack/image-hosting@master/mathematics/数学分析-定理12.6.2.7949xwjxoeg0.png" width="790"></div>

* 定理12.6.3

<div align=center><img src="https://cdn.jsdelivr.net/gh/aaronmack/image-hosting@master/mathematics/数学分析-定理12.6.3.2am0tpntepj4.png" width="790"></div>

  * **Hesse矩阵**

> 函数的最值

* **最值**问题是求函数在其定义域内某个区域上的**最大**值和**最小**值。最值点可能在**区域内部**(此时必是极值点),也可能在**区域的边界**上,因此,求函数的最值时,要求出它在区域内部的所有极值以及在区域边界上的最值,再加以比较,从中找出`f`在整个区域上的最值。

<div align=center><img src="https://cdn.jsdelivr.net/gh/aaronmack/image-hosting@master/mathematics/数学分析-函数的最值-例12.6.4重心.hk5ky32n4y0.png" width="790"></div>

* [1] 这里是将求出的驻点带进函数中求得的值
* [2] 这里是书中的二元函数判断极值点的条件 <div align=center><img src="https://cdn.jsdelivr.net/gh/aaronmack/image-hosting@master/mathematics/二元函数极值点判断条件.6on6abe95n80.png" width="490"></div>

> 最小二乘法

* 指数关系：可以设函数$z=βe^{\alpha x}$ [指数函数](../life/math/math_concept#指数函数)
* 指数转成线性关系: 令$y=\ln z, a=\alpha, b=\ln \beta$, 则指数关系可以变为 
  * $\ln z=\alpha x+\ln \beta ,y=ax+b$
  * 这样转变后，原来的指数关系散点图，也会变为线性关系散点图
  * 要确定直线$y=ax+b$, 就要使得所有观测值$y_i$与函数值$ax_i+b$之差的平方和
    <br>$\begin{aligned}Q=\sum_{i=1}^{n}(y_i-ax_i-b)^2\end{aligned}$<br>
  * 最小，这种方法就叫做最小二乘法
  * 确定常数a，b用的方法就叫做**二元函数求极值**的方法

* 例1

<div align=center><img src="https://cdn.jsdelivr.net/gh/aaronmack/image-hosting@master/mathematics/数学分析-最小二乘法-例题.4wup5gi54eu0.png" width="790"></div>

* [1] 求偏导为0，也就是求驻点方法，驻点是一种临界点，在这一点趋于平稳，而我们也正是要找这样一种在这个数据周围与这个数据最接近的

* 例2 - "牧童"经济模型

<div align=center><img src="https://cdn.jsdelivr.net/gh/aaronmack/image-hosting@master/mathematics/数学分析-牧童经济模型.3yzf2vv0viq0.png" width="790"></div>

* [1] V表示平均价值，但V是关于X的函数，X为这片草地上所有的羊数
* [2] $x_i$为这个牧民的羊数，乘以V(一个羊的平均价值)，再减$x_i$个羔羊的价值(c)
* [3] 等于0，也就是求临界值，在这一点数据趋于稳定，也就是价值最大，也就是**极值点**，极值点偏导为0；公式是根据**多元复合函数偏导**
* [4] 增加一只羊的效应有正负两方面，正的一方面是这只羊的价值V(X),负的一方面是这只羊的增加导致这只羊之前已有的羊的价值减少；因为公式④; 公式4又因为公式⑤的条件
* [5] 随着羊群数量的不断增加，价值则不断下降，并且总数增加的越快，价值也下降的越快；所以`dV/dx < 0`
* [6] 我们可以看出，第i个牧民饲养的最优饲养量$x_i$是受其他牧民的饲养数目影响的，因此认为$x_i$是$x_j$的函数

### 条件极值问题与Lagrange乘数法

> Lagrange乘数法

* [1] 如何理解拉格朗日乘子法？ https://www.zhihu.com/question/38586401
  1. **在极值点**，**圆与曲线**($x^2y=3$)**相切**
  2. 梯度是等高线的法线
  3. **梯度与等高线的切线垂直**

* 第一部分，引出
<div align=center><img src="https://cdn.jsdelivr.net/gh/aaronmack/image-hosting@master/mathematics/Lagrange乘数法.6rxj0r5x8kw0.png" width="790"></div>

* 第二部分，导出
<div align=center><img src="https://cdn.jsdelivr.net/gh/aaronmack/image-hosting@master/mathematics/v2-b59fd83680cc736a4bde6b7714013915_720w.gif" width="790"></div>
  
  * 根据之前的结论，可知，**在相切点，圆的梯度向量和曲线的梯度向量平行**：数学表示为$\triangledown f = \lambda \triangledown g$， 还需要引入$x^2y=3$这个条件，否则不知道是哪一根
  * 连立方程有
  <div align=center><img src="https://cdn.jsdelivr.net/gh/aaronmack/image-hosting@master/mathematics/Lagrange乘数法.1wmh7i2k41s0.png" width="790"></div>
  * 这就是Lagrange乘数法，其中$\lambda$表示为两平行向量之间的系数

* 第三部分，定义
* <div align=center><img src="https://cdn.jsdelivr.net/gh/aaronmack/image-hosting@master/mathematics/Lagrange乘数法3.e0ck0fx2dco.png" width="790"></div>

* 第四部分，多约束情况下
* <div align=center><img src="https://cdn.jsdelivr.net/gh/aaronmack/image-hosting@master/mathematics/Lagrange乘数法4.8bxr03oj81g.png" width="790"></div>

* 条件极值，目标函数，约束条件，Lagrange函数，Lagrange乘数(法)
* 定理12.7.1 条件极值的必要条件

* 例题
  * <div align=center><img src="https://cdn.jsdelivr.net/gh/aaronmack/image-hosting@master/mathematics/Lagrange乘数法-例题.1s3iq115ifuo.png" width="790"></div>

> 一个最优价格模型

<div align=center><img src="https://cdn.jsdelivr.net/gh/aaronmack/image-hosting@master/mathematics/数学分析-一个最优价格模型.4ghe3i41nsm0.png" width="790"></div>

## 重积分

### 有界闭区域上的重积分

> 面积

* 在一元定积分中已经学过计算曲边梯形等平面图形的面积的方法,但是,并不能将其简单照搬到一般的平面点集上,因为一般平面点集是否有面积还是一个问题。为此,引入面积的定义 (**矩形分割，不断加细，然后确定上下确界，就称为可求面积的**)
* 边界的面积为零的有界区域称为**零边界区域**

* 定理13.1.1
<div align=center><img src="https://cdn.jsdelivr.net/gh/aaronmack/image-hosting@master/mathematics/数学分析-定理13.1.1.4j94vrw9uco0.png" width="790"></div>

* **平面上光滑曲线段的面积为0,若一个有界区域的边界是分段光滑曲线(即由有限条光滑曲线衔接而成的曲线),那么它是可求面积的。**

> 二重积分的概念

* 二重积分的概念
<div align=center><img src="https://cdn.jsdelivr.net/gh/aaronmack/image-hosting@master/mathematics/数学分析-二重积分的概念.3lu78cp76zo0.png" width="790"></div>

* 二重积分的定义
<div align=center><img src="https://cdn.jsdelivr.net/gh/aaronmack/image-hosting@master/mathematics/数学分析-二重积分的定义.4lfbdljim5k0.png" width="790"></div>

* 二重积分的性质
<div align=center><img src="https://cdn.jsdelivr.net/gh/aaronmack/image-hosting@master/mathematics/数学分析-二重积分的性质.1p0gaolntubk.png" width="790"></div>

* 定理13.1.2 若f(x,y)在零边界闭区域D上连续，那么它在D上可积

> 多重积分

* 有界点集$\Omega$是可求体积的充分必要条件为其边界的体积为零,即$\Omega$为零边界区域。

* 多重积分的定义
<div align=center><img src="https://cdn.jsdelivr.net/gh/aaronmack/image-hosting@master/mathematics/数学分析-多重积分的定义.3v0xw5o7su00.png" width="790"></div>

> Peano曲线

* **一条平面曲线所绘出的图形的面积并不一定是零**。Peano发现,存在将实轴上的闭区间映满平面上的一个二维区域(如三角形和正方形)的连续映射。也就是说,这条**曲线通过该二维区域的每个点**,这种曲线被称为Peano曲线。

<div align=center><img src="https://cdn.jsdelivr.net/gh/aaronmack/image-hosting@master/mathematics/数学分析-Peano曲线.rwckafgz47k.png" width="790"></div>

### 重积分的性质与计算

> 重积分的性质

<div align=center><img src="https://cdn.jsdelivr.net/gh/aaronmack/image-hosting@master/mathematics/数学分析-重积分的性质.15j6wwa5l5uo.png" width="790"></div>

* 性质1：线性性
* 性质2：区域可加性
* 性质3：设被积函数$\begin{aligned} f\equiv 1 \end{aligned}$,当$\begin{aligned} n=2 \end{aligned}$时，$\begin{aligned} \iint_{\Omega} fdV=\iint_{\Omega}1dxdy=\Omega \end{aligned}$的面积，当$\begin{aligned} n\geq3 \end{aligned}$时，$\begin{aligned} \int_{\Omega}dV=\int_{\Omega} 1dV=\Omega\end{aligned}$的体积
* 性质4：保序性
* 性质5：设$f$在区域$\Omega$上可积，$M$与$m$分别为$f$在$\Omega$上的上确界和下确界，则成立不等式$\begin{aligned} mV\leq \int_{\Omega}fdV\leq MV \end{aligned}$
* 性质6 绝对可积性
* 性质7：乘积可积性
* 性质8：积分中值定理：设$f$和$g$都在区域$\Omega$上可积，且$g$在$\Omega$上不变号，设$M$与$m$分别为$f$在$\Omega$上的上确界和下确界，则存在常数$\mu\in [m,M]$,使得$\begin{aligned} \int_{\Omega}f\cdot gdV=\mu\int_{\Omega} gdV \end{aligned}$,特别地，如果$f$在$\Omega$上连续，则存在$\xi\in\Omega$,使得$\begin{aligned} \int_{\Omega}f\cdot gdV=f(\xi)\int_{\Omega}gdV \end{aligned}$

> 矩形区域上的重积分计算

<div align=center><img src="https://cdn.jsdelivr.net/gh/aaronmack/image-hosting@master/mathematics/数学分析-矩形区域上的重积分计算-累次积分.8fkwjsi2k14.png" width="790"></div>

* 定理13.2.1 
<div align=center><img src="https://cdn.jsdelivr.net/gh/aaronmack/image-hosting@master/mathematics/数学分析-定理13.2.1.10e2vbii5ols.png" width="790"></div>

* 例题
<div align=center><img src="https://cdn.jsdelivr.net/gh/aaronmack/image-hosting@master/mathematics/数学分析-矩形区域上的重积分计算-例题.kqgzej3cxgw.png" width="790"></div>

* 定理13.2.2 推论13.2.1
<div align=center><img src="https://cdn.jsdelivr.net/gh/aaronmack/image-hosting@master/mathematics/数学分析-定理13.2.2推论13.2.1.5v1hybtu1cg0.png" width="790"></div>

> 一般区域上的重积分计算

<div align=center><img src="https://cdn.jsdelivr.net/gh/aaronmack/image-hosting@master/mathematics/数学分析-一般区域上的重积分计算.5rgie2wr3js0.png" width="790"></div>

* [1] 区域外，为0，所以这两项就没有了
* [2] 这里的f(x,y)只是关于x和y的函数，理解为当在D区域上，确定了一个x和一个y，则唯一得到一个点(或者叫做一个极小的区域)，面积趋于0，如①处所示

### 重积分的变量代换

> 曲线坐标

<div align=center><img src="https://cdn.jsdelivr.net/gh/aaronmack/image-hosting@master/mathematics/数学分析-曲线坐标.42w8097wfo00.png" width="790"></div>

> 二重积分的变量代换

* 偏导 <--> 线性变换

* 定理13.3.1 (二重积分变量代换公式)
<div align=center><img src="https://cdn.jsdelivr.net/gh/aaronmack/image-hosting@master/mathematics/数学分析-二重积分变量代换公式.5uy5flzimpk0.png" width="790"></div>

* **Jacobi行列式的几何意义为面积的比例系数** （这里的理解是，Jacobi行列式中都是求得偏导，而偏导表示某一极小区域的变化量，无限多的小的区域的变化量就构成了整体区域的变化量，这里的区域就是面积）

<div align=center><img src="https://cdn.jsdelivr.net/gh/aaronmack/image-hosting@master/mathematics/数学分析-Jacobi行列式的几何意义.5j5ko3gd0z80.png" width="790"></div>

> 变量代换公式的证明

> n重积分的变量代换

<div align=center><img src="https://cdn.jsdelivr.net/gh/aaronmack/image-hosting@master/mathematics/数学分析-三维空间-柱面坐标和球面坐标变换.3m1ag8551ma0.png" width="790"></div>

* 事实上，在$R^n (n\geq 3)$上都可以引入球面坐标变换

> *均匀球体的引力场模型

<div align=center><img src="https://cdn.jsdelivr.net/gh/aaronmack/image-hosting@master/mathematics/数学分析-均匀球体的引力场模型.37pc78gpr5a0.png" width="790"></div>

### 反常重积分

> 无界区域上的反常重积分

* 反常二重积分

* 定义
<div align=center><img src="https://cdn.jsdelivr.net/gh/aaronmack/image-hosting@master/mathematics/数学分析-反常二重积分的定义.2xflu4muoyc0.png" width="790"></div>

* 定理
<div align=center><img src="https://cdn.jsdelivr.net/gh/aaronmack/image-hosting@master/mathematics/数学分析-反常重积分的定理.5me5lke8a6s0.png" width="790"></div>

* 例题-Poisson积分
<div align=center><img src="https://cdn.jsdelivr.net/gh/aaronmack/image-hosting@master/mathematics/数学分析-反常二重积分例题-Poisson积分.2ihaxtcp3ou0.png" width="790"></div>
  
  * 过程：1. 极坐标的转换(注意确定新的积分范围) 2. 变量代换公式(带绝对值的雅克比行列式) 3. 化累次积分法
  * 参考[极坐标]

> 无界函数的反常重积分

* 无界函数的反常二重积分定义

<div align=center><img src="https://cdn.jsdelivr.net/gh/aaronmack/image-hosting@master/mathematics/数学分析-无界函数的反常二重积分.59a4acfkjro0.png" width="790"></div>

### 微分形式

> 有向面积与向量的外积

* 有向面积的定义
<div align=center><img src="https://cdn.jsdelivr.net/gh/aaronmack/image-hosting@master/mathematics/数学分析-有向面积的定义.4iml58gus7s0.png" width="790"></div>

* 将重积分与定积分类比
  * 如果dxdy和dudv允许带有符号，则雅克比行列式的绝对值符号可以去掉
* 外积和向量积是两种运算，前者的结果是数量，后者是向量，但他们的绝对值是相等的

* 例13.5.1
<div align=center><img src="https://cdn.jsdelivr.net/gh/aaronmack/image-hosting@master/mathematics/数学分析-微分形式-例13.5.1.5suc0euweo80.png" width="790"></div>

> 微分形式

* 一次微分形式，简称`1-形式`
* 二次微分形式，简称`2-形式`
* k次微分形式，简称`k-形式` （1.交换其中两个，变号 2.其中两个相同，为0）
* n次微分形式，简称`n-形式`

<div align=center><img src="https://cdn.jsdelivr.net/gh/aaronmack/image-hosting@master/mathematics/数学分析-微分形式.6olaxqogxio0.png" width="790"></div>

<div align=center><img src="https://cdn.jsdelivr.net/gh/aaronmack/image-hosting@master/mathematics/数学分析-微分形式.3xszb9abd380.png" width="790"></div>

* [1] ①处我们看成面积微元，②处我们看成有向面积微元，则雅克比行列式的绝对值符号就可以不要了；这些都因为我们引入了外积这个概念，将微分dxdy和dudv看做向量来处理；形式上简单了
* [2] C^1(U),1代表1阶偏导，C代表连续
* [3] $\Lambda ^1(U)$, 就是个集合，向量空间，既然是向量空间，就要定义加法数乘
* [4] $\Lambda ^1$ 是如何构造的
* [5] $\Lambda ^2$ 是如何构造的
* [6] $\Lambda ^k$ 是如何构造的
* [7] $\Lambda ^n$ 是如何构造的
* [8] 微分形式空间;维度为$2^n$

> 微分形式的外积

<div align=center><img src="https://cdn.jsdelivr.net/gh/aaronmack/image-hosting@master/mathematics/数学分析-微分形式的外积.60tnghsy08g0.png" width="790"></div>

* [1] 换句话说，$\omega$和$\eta$每一个元素都要进行外积;此外，还有 1.如果i=j，等于0; 2. xi和xj和xj和xi的外积，就相差了负号，所以得到②
* [2] 两个1形式进行外积后变为2形式；一个p形式和一个q形式出来是(p+q)形式
* [3] 交换次序，没交换一次变号

* 例题

<div align=center><img src="https://cdn.jsdelivr.net/gh/aaronmack/image-hosting@master/mathematics/数学分析-微分形式的外积-例题.31mnevd1oxq0.png" width="790"></div>

  * 参考-补充[雅克比矩阵示例] 补充[直角坐标与极坐标的互化] 

## 曲线积分、曲面积分与场论

### 第一类曲线积分与第一类曲面积分

> 第一类曲线积分

* 在设计曲线形细长构件时,常常需要计算它们的质量,而构件的线密度(单位长度的质量)却是因点而异的。工程技术人员常常用这样的方法来计算一个构件的质量:设想构件为空间上一条具有质量的曲线`L`,`L`上任一点`(x,y,z)`处的线密度为`ρ(x, y,z)`,这样就把实际问题定量化。

* 定义
<div align=center><img src="https://cdn.jsdelivr.net/gh/aaronmack/image-hosting@master/mathematics/数学分析-第一类曲线积分的定义.2u4rdn819g00.png" width="790"></div>

* 性质
<div align=center><img src="https://cdn.jsdelivr.net/gh/aaronmack/image-hosting@master/mathematics/数学分析-第一类曲线积分的性质.6wiy4gqa26c0.png" width="790"></div>

* 定理
<div align=center><img src="https://cdn.jsdelivr.net/gh/aaronmack/image-hosting@master/mathematics/数学分析-第一类曲线积分的定理.4h9jvs2ytmw0.png" width="790"></div>

> 曲面的面积

* [1] 高数笔记：曲线积分、向量场积分、梯度/旋度/格林/散度定理（上） https://www.pluvet.com/2020/06/04/%E9%AB%98%E6%95%B0%E7%AC%94%E8%AE%B0%EF%BC%9A%E6%9B%B2%E7%BA%BF%E7%A7%AF%E5%88%86%E3%80%81%E5%90%91%E9%87%8F%E5%9C%BA%E7%A7%AF%E5%88%86%E3%80%81%E6%A2%AF%E5%BA%A6-%E6%97%8B%E5%BA%A6-%E6%A0%BC%E6%9E%97/

<div align=center><img src="https://cdn.jsdelivr.net/gh/aaronmack/image-hosting@master/mathematics/数学分析-曲面的面积的定义.dy3100gd3bc.png" width="790"></div>

* [1] u0,v0表示一点，u,v0表示取u向上所有的点，v0固定，得到曲线
* [2] i,j,k为一组基，不同的基代表在不同的空间下

* 定理14.1.2
<div align=center><img src="https://cdn.jsdelivr.net/gh/aaronmack/image-hosting@master/mathematics/数学分析-曲面的面积-定理14.1.2.6h406661ofo0.png" width="790"></div>

  [第一基本形式](../life/math/math_concept#第一基本形式)

* 两种特殊情况 (z=f(x,y), H(x,y,z)=0)
<div align=center><img src="https://cdn.jsdelivr.net/gh/aaronmack/image-hosting@master/mathematics/数学分析-曲面的面积的两种特殊情况.5z75wjicvqk0.png" width="790"></div>

  * 第二种特殊情况由于是隐函数，需通过隐函数存在定理可求出

* 例题
<div align=center><img src="https://cdn.jsdelivr.net/gh/aaronmack/image-hosting@master/mathematics/数学分析-曲面的面积-例题.5koim4598qc0.png" width="790"></div>

> Schwarz的例子

* 我们将光滑曲线的内接折线长度的极限定义为曲线的弧长,但这一定义不能推广到光滑曲面的面积定义上去。Schwarz曾举过一个例子:即使对一段圆柱面,都**无法用“内接多面形之面积的极限”来定义它的面积**。

> 第一类曲面积分

第一类曲线积分和第一类曲面积分

<div align=center><img src="https://cdn.jsdelivr.net/gh/aaronmack/image-hosting@master/mathematics/第一类曲线积分和第一类曲面积分.4i6xjcmfi9a0.png" width="790"></div>

### 第二类曲线积分与第二类曲面积分

> 第二类曲线积分

* 引入 & 定义 & 性质
<div align=center><img src="https://cdn.jsdelivr.net/gh/aaronmack/image-hosting@master/mathematics/数学分析-第二类曲线积分-引入定义性质.5o5kdzmtwpk0.png" width="790"></div>

* 计算
<div align=center><img src="https://cdn.jsdelivr.net/gh/aaronmack/image-hosting@master/mathematics/数学分析-第二类曲线积分的计算.gmodru9u5s8.png" width="790"></div>

> 曲面的侧

* 如果放一只蚂蚁在一张白纸上,无论它怎样爬,只要它不越过白纸的边界,当它再爬回到原来的位置时,还是在纸的上方,不会到下面去。这就像在白纸上的一点处选择一个指向上方的单位法向量,然后沿任何一条不越过边界的闭曲线连续地移动它,使它与所过之点处的一个单位法向量相合,并保持这种相合的连续性,那么当它又回到原来的位置时,它还是原来的那个单位法向量,而不会变成指向白纸下方的那个单位法向量。具有这种性质的曲面叫做**双侧曲面**。

* 双侧曲面，定向曲面，单侧曲面

<div align=center><img src="https://cdn.jsdelivr.net/gh/aaronmack/image-hosting@master/mathematics/数学分析-曲面的侧.4xv15ban4wc0.png" width="790"></div>

> 第二类曲面积分

* 引入 & 定义 & 性质
<div align=center><img src="https://cdn.jsdelivr.net/gh/aaronmack/image-hosting@master/mathematics/数学分析-第二类曲面积分-引入定义.589hno44drs0.png" width="790"></div>

* 性质三的推广
<div align=center><img src="https://cdn.jsdelivr.net/gh/aaronmack/image-hosting@master/mathematics/数学分析-第二类曲面积分-性质三的推广.3cqwmvnxrqg0.png" width="790"></div>

* 计算
<div align=center><img src="https://cdn.jsdelivr.net/gh/aaronmack/image-hosting@master/mathematics/数学分析-第二类曲面积分的计算.42wm6p47ymg0.png" width="790"></div>

### Green公式、Gauss公式和Stokes公式

> Green公式

* Jordan curve 若尔当曲线
* 单连通区域，复连通区域 - 例如圆盘是单连通区域，圆环与复连通区域；单连通区域D内的任何一条封闭曲线所围的点集扔属于D；通俗来说，单连通区域之中不含有"洞"，而复连通区域之中会有"洞"

<div align=center><img src="https://cdn.jsdelivr.net/gh/aaronmack/image-hosting@master/mathematics/数学分析-格林公式.1kc2up7rwiww.png" width="790"></div>

* Green公式说明了**有界闭区域上的二重积分与沿区域边界的第二类曲线积分的关系**。

* 推广
<div align=center><img src="https://cdn.jsdelivr.net/gh/aaronmack/image-hosting@master/mathematics/数学分析-格林公式的推广.4vd1adb051y0.png" width="790"></div>

* Green公式是Newton-Leibniz公式的推广

> 曲线积分与路径无关的条件

* 若一个函数沿着联结A,B两个端点的一条路径L积分,一般说来,积分值不仅会**随端点变化而变化**,还会**随路径的不同而不同**。但也有一些曲线积分的值,如重力所做的功,可以**仅与路径的端点有关而与路径无关**。

* 定义
<div align=center><img src="https://cdn.jsdelivr.net/gh/aaronmack/image-hosting@master/mathematics/数学分析-曲线积分与路径无关的条件-定义.jze6u4to9wg.png" width="790"></div>

* 定理
<div align=center><img src="https://cdn.jsdelivr.net/gh/aaronmack/image-hosting@master/mathematics/数学分析-格林定理.2q40nwjhv120.png" width="790"></div>
<div align=center><img src="https://cdn.jsdelivr.net/gh/aaronmack/image-hosting@master/mathematics/数学分析-曲线积分与路径无关的条件-定理14.3.3.76lhq3b4u9o0.png" width="790"></div>

> Gauss公式

* 二维单连通区域
<div align=center><img src="https://cdn.jsdelivr.net/gh/aaronmack/image-hosting@master/mathematics/数学分析-二维单连通区域.8ano34nj3zo.png" width="790"></div>

* 定理14.3.4 Gauss公式
<div align=center><img src="https://cdn.jsdelivr.net/gh/aaronmack/image-hosting@master/mathematics/数学分析-定理14.3.4-Gauss公式.4abgc1abgsy0.png" width="790"></div>

* Gauss公式说明了在空间中一个区域`Ω`上的三重积分与沿其边界`∂Ω`的曲面积分间的内在关系,可视为**Green公式的一个推广**。与Green公式一样,Gauss公式的一个直接应用就是可用沿区域`Ω`的边界的曲面积分来计算`Ω`的体积,具体地说就是<div align=center><img src="https://cdn.jsdelivr.net/gh/aaronmack/image-hosting@master/mathematics/数学分析-Gauss公式应用.5nwltjhcs040.png" width="790"></div>其中`∂Ω`的定向为外侧

> Stokes公式

<div align=center><img src="https://cdn.jsdelivr.net/gh/aaronmack/image-hosting@master/mathematics/数学分析-Stokes公式.4cxs5sj4m3y0.png" width="790"></div>

### 微分形式的外微分

> 外微分

<div align=center><img src="https://cdn.jsdelivr.net/gh/aaronmack/image-hosting@master/mathematics/数学分析-外微分的定义.60h5a40h8l00.png" width="790"></div>

* g是一个函数，与i1,i2,一直到ik相关，一个n元函数； 按照定义是对系数进行微分，它的系数是常数1,所以微分是0
* 注1：具有连续偏导数的函数称为0-形式
* 注2：一个0-形式作了微分运算后成为了1-形式

* 例
<div align=center><img src="https://cdn.jsdelivr.net/gh/aaronmack/image-hosting@master/life/数学分析-外微分-例.3wenyvupnwg0.png" width="790"></div>

* 性质
<div align=center><img src="https://cdn.jsdelivr.net/gh/aaronmack/image-hosting@master/life/数学分析-外微分-性质.2bp0j0v820pw.png" width="790"></div>

> 外微分的应用

<div align=center><img src="https://cdn.jsdelivr.net/gh/aaronmack/image-hosting@master/life/数学分析-外积分的应用.70920ehd9080.png" width="790"></div>

* 这个式子统称为**Stokes公式**。它说明了,高次的微分形式**dω**在给定区域上的积分等于低一次的微分形式**ω**在低一维的区域边界上的积分。**Stokes公式是单变量情形的Newton-Leibniz公式在多变量情形的推广**,是数学分析中最精彩的结论之一。

* 注1：1-形式
  * R2: ω=P(x,y)dx+Q(x,y)dy
  * R3: ω=P(x,y,z)dx+Q(x,y,z)dy+R(x,y,z)dz
* 注2：2-形式
  * R3: ω=P(x,y,z)dy∧dz+Q(x,y,z)dz∧dx+R(x,y,z)dx∧dy

### 场论初步

在实际应用中,常常要**考察某种物理量**(如温度,密度,电场强度,力,速度等)**在空间的分布和变化规律**,从数学和物理上看就是**场**。设**Q⊂R³**是一个区域,若在时刻**t,Ω**中每一点`(x,y,z)`都有一个确定的数值f(x,y,z,t)或确定的向量值**f**(x,y,z,t)与它对应,就称f(x,y,z,t)(或**f**(x,y, z,t))为**Ω**上的数量场(或向量场)。例如,**某一区城上每一点的温度确定了一个数量场**,它称为温度场;而**某流体在某一区域上每一点的速度确定了一个向量场**,它称为速度场,如此等等。如果一个**场不随时间的变化而变化**,就称该场为**稳定场**;否则称为**不稳定场**。

> 梯度

<div align=center><img src="https://cdn.jsdelivr.net/gh/aaronmack/image-hosting@master/mathematics/数学分析-梯度.732ys2vknsg0.png" width="790"></div>

> 通量与散度

* 引入
<div align=center><img src="https://cdn.jsdelivr.net/gh/aaronmack/image-hosting@master/mathematics/数学分析-通量与散度-场中源汇的判断.3gwyrj3u4280.png" width="790"></div>

* 定义 & 定理
<div align=center><img src="https://cdn.jsdelivr.net/gh/aaronmack/image-hosting@master/mathematics/数学分析-通量与散度-定义定理.5lzack7opu80.png" width="790"></div>

* 正源(源),负源(汇),无源场 - 如果场中每一点都成立$div a=0$

> 向量线

* 在稳定流动的流体中,质点的瞬时运动方向是该点的速度方向,这就是说,流体中质点的运动轨迹的切线方向,就是速度方向,这条轨迹称为流线。这就是一般向量场中的向量线概念。
* 设$a(x,y,z)=P(x,y,z)i+Q(x,y,z)j+R(x,y,z)k, (x,y,z)\in \Omega$,为向量场,$\Gamma$为$\Omega$中的一条曲线。若$\Gamma$上的**每一点处的切线方向都与场向量在该点的方向一致**,则称$\Gamma$为向量场$a$的向量线。静电场中的电力线、磁场中的磁力线等都是向量线的实际例子。 
* 再看向量线需要满足什么条件。设$M(x,y,z)$为向量线上任一点,则其矢量方程为$r=xi+yj+zk$,那么$dr=dxi+dyj+dzk$就是向量线在$M$点处的切向量。由定义它与在$M$点处的场向量共线,因此$\begin{aligned} \frac{dx}{P(x,y,z)} = \frac{dy}{Q(x,y,z)} = \frac{dz}{R(x,y,z)}\end{aligned}$这就是向量线所满足的方程,如果解出它的话,一般就得到向量线族。如果再利用过$M$点这个条件,就得到过$M$点的向量线。一般来说,向量场中每一点有一条且仅有一条向量线通过它,向量线族充满了向量场所在的空间。 

> 环量与旋度

* 引入

<div align=center><img src="https://cdn.jsdelivr.net/gh/aaronmack/image-hosting@master/mathematics/数学分析-环量与旋度-引入.y7b3um2fwgw.webp" width="790"></div>

<div align=center><img src="https://cdn.jsdelivr.net/gh/aaronmack/image-hosting@master/mathematics/数学分析-环量与旋度-引入.3z587ulkqp40.webp" width="790"></div>

* 讨论的是ω这个向量和速度场v之间的关系
* $v_0$表示的是旋涡自身的移动速度，就像水流中一个旋涡自身在移动一样
* [1] 因为$\begin{aligned} \frac{\partial v_z}{\partial y} = \omega_x \end{aligned}$ 和 $\begin{aligned} \frac{\partial v_y}{\partial z} = \omega_x \end{aligned}$
* **第二类曲线积分相当于环量**

* 定义&定理
<div align=center><img src="https://cdn.jsdelivr.net/gh/aaronmack/image-hosting@master/mathematics/数学分析-环量与旋度-定义定理.2u2zkoq2lwu0.webp" width="790"></div>

> Hamilton算子

<div align=center><img src="https://cdn.jsdelivr.net/gh/aaronmack/image-hosting@master/mathematics/数学分析-Hamilton算子.1ryeecsycbj4.webp" width="790"></div>

> 保守场与势函数

<div align=center><img src="https://cdn.jsdelivr.net/gh/aaronmack/image-hosting@master/mathematics/数学分析-保守场与势函数-定义定理.3pye0fq8q0s0.webp" width="790"></div>

> 均匀带电直线的电场模型

> 热传导模型

<div align=center><img src="https://cdn.jsdelivr.net/gh/aaronmack/image-hosting@master/mathematics/数学分析-热传导模型.26a20ipgmwps.webp" width="790"></div>

### 概念总结

> 外微分的应用-格林高斯斯托克斯公式
<div align=center><img src="https://cdn.jsdelivr.net/gh/aaronmack/image-hosting@master/life/外微分的应用-格林高斯斯托克斯.5lp1p6qldgw0.png" width="790"></div>

> 通量，散度，环量，旋度

* 通量: 单位时间内通过某个曲面的量，也相当于流体的流量
* 散度：对一个无限小的微团，内部通过微团的边界向外界释放、流出的流量；梯度是一个向量，向量的三个分量的和就是散度；表示流出单位体积的通量
* 环量: 单位时间内环绕某个曲线的量
* 旋度: 通过不断缩小封闭区域就可以得到环流量的强度，即旋度

## 含参变量积分

### 含参变量的常义积分 

> 含参变量常义积分的定义

<div align=center><img src="https://cdn.jsdelivr.net/gh/aaronmack/image-hosting@master/mathematics/数学分析-含参变量常义积分的定义.1sgf2v8ep2bk.webp" width="790"></div>

> 含参变量常义积分的分析性质

<div align=center><img src="https://cdn.jsdelivr.net/gh/aaronmack/image-hosting@master/mathematics/数学分析-含参变量常义积分的分析性质-定理.3o8r0zfr53s0.webp" width="790"></div>

### 含参变量的反常积分

> 含参变量反常积分的一致收敛

<div align=center><img src="https://cdn.jsdelivr.net/gh/aaronmack/image-hosting@master/mathematics/数学分析-含参变量反常积分的一致收敛-定义.
37tkmg7me740.webp" width="790"></div>

> 一致收敛的判别法

<div align=center><img src="https://cdn.jsdelivr.net/gh/aaronmack/image-hosting@master/mathematics/数学分析-一致收敛的判别法.5083rsv4ifk0.webp" width="790"></div>

> 一致收敛积分的分析性质

* 含参变量反常积分的分析性质：连续性、可微性、可积性

<div align=center><img src="https://cdn.jsdelivr.net/gh/aaronmack/image-hosting@master/mathematics/数学分析-一致收敛积分的分析性质.1uvuryxdf734.webp" width="790"></div>

### Euler积分

> Beta函数

<div align=center><img src="https://cdn.jsdelivr.net/gh/aaronmack/image-hosting@master/mathematics/数学分析-Beta函数.5w0cs1vw39k0.webp" width="790"></div>

> Gamma函数

<div align=center><img src="https://cdn.jsdelivr.net/gh/aaronmack/image-hosting@master/mathematics/数学分析-Gamma函数.4o7nfjfsokc0.webp" width="790"></div>

* 性质2说明Gamma函数可以说是阶乘的推广

> Beta函数与Gamma函数的关系

<div align=center><img src="https://cdn.jsdelivr.net/gh/aaronmack/image-hosting@master/mathematics/数学分析-Beta函数与Gamma函数的关系.647qw3mue800.webp" width="790"></div>

## Fourier级数

### 函数的Fourier级数展开

古往今来,从Archimedes开始的众多大数学家,一直在孜孜不倦地寻找**用简单函数较好地近似代替复杂函数**的途径 - 除了理论上的需要之外,它对实际应用领域的意义更是不可估量。但在**微积分发明之前**,这个问题一直没能获得本质上的突破。人们最熟悉的简单函数无非两类:**幂函数和三角函数**。英国数学家Taylor在17世纪初找到了用**幂函数的(无限)线性组合表示一般函数f(x)的方法**,即通过**Taylor展开将函数化成幂级数形式** 

　　$\begin{aligned} f(x) = \sum_{n=0}^{\infin}\frac{f^{(n)} (x_0) }{n!}(x-x_0)^n \end{aligned}$

但是，函数的Taylor展开在应用中有一定的局限性，首先我们在实际问题中总是(也只能)使用Taylor级数的部分和，即$f(x)$的$n$次Taylor多项式 

　　$\begin{aligned} P_n(x) = f(x_0)+f'(x_0)(x-x_0)+\frac{f''(x_0)}{2!}(x-x_0)^2+\cdots+\frac{f^{(n)}(x_0)}{n!}(x-x_0)^n \end{aligned}$

来近似的代替函数$f(x)$，这时候要求$f(x)$有至少$n$阶的导数，许多实际问题来说是过于苛刻的(特别是在发现了许多不可导甚至不连续的重要函数之后);同时,一般来说Taylor多项式仅在点$x_0$。附近与$f(x)$吻合得较为理想,也就是说,它只有**局部性质**。为此有必要寻找函数的新的级数展开方法。 

形如

　　$\begin{aligned} \frac{a_0}{2}+\sum_{n=1}^{\infin}(a_n\cos nx+b_n\sin nx) \end{aligned}$

的函数项级数称为**三角级数**，其中$a_0,a_n$和$b_n(n=1,2,...)$为常数；19世纪初,法国数学家和工程师Fourier在研究热传导问题时,找到了在有限区间上用三角级数表示一般函数$f(x)$的方法,即把$f(x)$展开成所谓的**Fourier级数**

> 周期为2π的函数的Fourier展开

<iframe src="https://www.geogebra.org/graphing/nbacumcw?embed" width="800" height="600" allowfullscreen style="border: 1px solid #e4e4e4;border-radius: 4px;" frameborder="0"></iframe>

* Fourier展开的基础是三角函数的正交性

<div align=center><img src="https://cdn.jsdelivr.net/gh/aaronmack/image-hosting@master/mathematics/数学分析-Fourier级数.3rqzc66bkp00.webp" width="790"></div>

* Euler-Fourier公式
* Fourier级数
* Fourier系数

* 例题16.1.1

  * 补充：<iframe src="https://www.geogebra.org/calculator/rec6sktw?embed" width="800" height="600" allowfullscreen style="border: 1px solid #e4e4e4;border-radius: 4px;" frameborder="0"></iframe>

  <div align=center><img src="https://cdn.jsdelivr.net/gh/aaronmack/image-hosting@master/mathematics/数学分析-Fourier级数-例题16.1.1.189gj1ih8tfg.webp" width="790"></div>

  * 傅里叶级数$\begin{aligned} \frac{a_0}{2}+\sum_{n=1}^{\infin}(a_n\cos nx+b_n\sin nx) \end{aligned}$，其中$a_0$为1，带入得前项$\frac{1}{2}$,其次$a_n$项为0，所以$a_n\cos nx$这一项为0，将$\frac{1}{\pi}$移出，得式子$f(x) \sim ...$

  * Fourier级数的部分和

> 正弦级数和余弦级数

<div align=center><img src="https://cdn.jsdelivr.net/gh/aaronmack/image-hosting@master/mathematics/数学分析-正弦级数和余弦级数.2mq0rxmdbeg0.webp" width="790"></div>

<div align=center><img src="https://cdn.jsdelivr.net/gh/aaronmack/image-hosting@master/mathematics/正弦级数和余弦级数.2zfadr3kpyw0.webp" width="790"></div>

* 见补充[函数奇偶性](#函数奇偶性)

* 例题
  * [例题-16.1.2](https://cdn.jsdelivr.net/gh/aaronmack/image-hosting@master/mathematics/数学分析-例题-16.1.2.48dqomnzs8c0.webp)

> 任意周期的函数的Fourier展开

<div align=center><img src="https://cdn.jsdelivr.net/gh/aaronmack/image-hosting@master/mathematics/数学分析-任意周期的函数的Fourier展开.1ne1dr1gmya.webp" width="790"></div>

### Fourier级数的收敛判别法

> Dirichlet积分

* 与Taylor级数相比, Fourier级数尽管具有对$f(x)$的要求较弱,以及它的部分和在整个区间上与$f(x)$逼近得较好等优点,但在收敛性问题的讨论上,Taylor级数相对比较简单,因为对它只要确定收敛半径,并在收敛区间的端点讨论**余项的收敛情况**就行了,而Fourier级数却要复杂得多。

<div align=center><img src="https://cdn.jsdelivr.net/gh/aaronmack/image-hosting@master/mathematics/数学分析-Dirichlet积分.7dws9i9jrno0.webp" width="790"></div>

* Dirichlet积分,是研究Fourier级数敛散性的重要工具。

> Riemann引理及其推论

<div align=center><img src="https://cdn.jsdelivr.net/gh/aaronmack/image-hosting@master/mathematics/数学分析-Riemann引理及其推论.2ri4x2sx3ck0.webp" width="790"></div>

> Fourier级数的收敛判别法

<div align=center><img src="https://cdn.jsdelivr.net/gh/aaronmack/image-hosting@master/mathematics/数学分析-Fourier级数的收敛判别法.33oauol1yx00.webp" width="790"></div>

* Dirichlet-Jordan判别法和Dini-Lipschitz判别法都是Fourier级数收敛的**充分条件**

### Fourier级数的性质

> Fourier级数的分析性质

<div align=center><img src="https://cdn.jsdelivr.net/gh/aaronmack/image-hosting@master/mathematics/数学分析-Fourier级数的分析性质.2dcafv6y30cg.webp" width="790"></div>

> Fourier级数的逼近性质

<div align=center><img src="https://cdn.jsdelivr.net/gh/aaronmack/image-hosting@master/mathematics/数学分析-Fourier级数的逼近性质.76fvodgsuy80.webp" width="790"></div>

> 等周问题

* 在平面上周长相等的所有简单闭曲线中,怎样的曲线所围图形的面积最大?"这就是著名的“等周问题”。早在古希腊时期,人们就已经猜测这样的曲线应该是圆周。但这一事实的严格证明是近代才给出的。

### Fourier变换和Fourier积分

> Fourier变换及其逆变换

* 以上关于Fourier级数的论述都是对周期函数而言的,那么对于不具备周期性的函数,又该如何处理呢? 在$\begin{aligned} (-\infin, +\infin) \end{aligned}$上可积的非周期函数$f(x)$可以看成是周期函数的极限情况,处理思路是这样的:
  * (1)先取$f(x)$在$[-T,T]$上的部分(即把它视为仅定义在$[-T,T]$上的函数),再以$2T$为周期,将它延拓为$\begin{aligned} (-\infin, +\infin) \end{aligned}$上的周期函数$f_T(x)$;
  * (2)对得到的周期函数$f_T(x)$作Fourier展开;
  * (3)令$T$趋于无穷大。

<div align=center><img src="https://cdn.jsdelivr.net/gh/aaronmack/image-hosting@master/mathematics/数学分析-Fourier变换及其逆变换.5ws7xi6m7m00.webp" width="790"></div>

<div align=center><img src="https://cdn.jsdelivr.net/gh/aaronmack/image-hosting@master/mathematics/数学分析-Fourier变换及其逆变换-定理.76dilr1a0uo0.webp" width="790"></div>

> Fourier变换的性质

* Fourier变换和Fourier逆变换的性质对于理论分析和实际计算都很有用。

<div align=center><img src="https://cdn.jsdelivr.net/gh/aaronmack/image-hosting@master/mathematics/数学分析-Fourier变换的性质.1v89er7h8y80.webp" width="790"></div>

> 卷积

<div align=center><img src="https://cdn.jsdelivr.net/gh/aaronmack/image-hosting@master/mathematics/数学分析-卷积.6wavgim4yls0.webp" width="790"></div>

### 快速Fourier变换

> 离散Fourier变换

* 由来
  * 人们刚开始利用无线电技术传输信号时,是将连续信号进行某种调制处理后直接传送的(**信号->调制->传送->解调->信号**),本质上传送的还是连续信号(也叫模拟信号)。这样的传输方式抗干扰能力差,失真严重,尤其是经过长距离传送或多级传递后,信号可能面目全非,质量自然难尽人意。以后发展了离散的传输方法,它不是传送连续信号本身,而是每隔一段时间$\Delta t$,从信号中提取一个数值脉冲(称为数值抽样),将连续信号转化成数据序列 $x(0),x(1),x(2) ...x(N-1)$,再经编码后发送。只要抽取的时间间隔足够小,这列数据就能很好地反映原信号,接收方通过逆向处理,可以复原出所传递的信号(**信号->抽样->编码->调制->传送->解调->编码->还原->信号**)。这种方法称为数字信号传输,具有抗干扰能力强、信号还原质量高、易于加密和解密等优点
  * 可以想见的是,为了保证接收的质量,$\Delta t$必须取得很小,即$N$非常之大。因此,直接发送这列数据将会长时间地占用传输设备和线路,这不但需要支付昂贵的费用,在情况紧急时甚至会误事。所以,在抽样之后需要对数据序列$x(0),x(1),...,x(N-1)$进行简化和压缩,但由于序列中数据的大小是散乱的,因此一方面我们不能随意舍弃某些数据,另一方面压缩的效果也比较差

<div align=center><img src="https://cdn.jsdelivr.net/gh/aaronmack/image-hosting@master/mathematics/数学分析-离散Fourier变换.71ri8e15n100.webp" width="790"></div>

> 快速Fourier变换

<div align=center><img src="https://cdn.jsdelivr.net/gh/aaronmack/image-hosting@master/mathematics/数学分析-快速Fourier变换.1fe210jouetc.webp" width="790"></div>

## 补充

### 快速傅里叶变换
* [1] 十分简明易懂的FFT（快速傅里叶变换） https://blog.csdn.net/enjoy_pascal/article/details/81478582
* [2] 一小时学会快速傅里叶变换（Fast Fourier Transform） https://zhuanlan.zhihu.com/p/31584464 

* 快速傅里叶变换的基本思路，**由系数表达式到点值表达式到结果的点值表达式再到结果的系数表达式**。

<div align=center><img src="https://cdn.jsdelivr.net/gh/aaronmack/image-hosting@master/mathematics/快速傅里叶变换.6vmctsh7r6w0.webp" width="790"></div>

### 离散傅里叶变换
* [1] 如何通俗地解释什么是离散傅里叶变换？ https://www.zhihu.com/question/21314374
* [2] 离散傅里叶变换（DFT）博客园 https://www.cnblogs.com/21207-iHome/p/6048925.html

<div align=center><img src="https://cdn.jsdelivr.net/gh/aaronmack/image-hosting@master/mathematics/离散Fourier变换.1p0jubc5s2jk.webp" width="790"></div>

### 如何通俗易懂地解释卷积？
* [1] 如何通俗易懂地解释卷积？ https://www.zhihu.com/question/22298352

<div align=center><img src="https://cdn.jsdelivr.net/gh/aaronmack/image-hosting@master/mathematics/卷积举例.2g8yglutxc2s.webp" width="790"></div>

### 反常积分 狄利克雷（Dirichlet）积分
* [1] 反常积分 狄利克雷（Dirichlet）积分 https://zhuanlan.zhihu.com/p/396690012
* [2] 狄利克雷积分 维基百科，自由的百科全书 https://zh.wikipedia.org/wiki/%E7%8B%84%E5%88%A9%E5%85%8B%E9%9B%B7%E7%A9%8D%E5%88%86

<iframe src="https://www.geogebra.org/calculator/wmxdtr8q?embed" width="800" height="600" allowfullscreen style="border: 1px solid #e4e4e4;border-radius: 4px;" frameborder="0"></iframe>

### 傅里叶级数
* [1] 傅里叶级数 维基百科，自由的百科全书 https://zh.wikipedia.org/wiki/%E5%82%85%E9%87%8C%E5%8F%B6%E7%BA%A7%E6%95%B0
* [2] 傅里叶系列（一）傅里叶级数的推导 https://zhuanlan.zhihu.com/p/41455378
* [3] 傅里叶系列（二）傅里叶变换的推导 https://zhuanlan.zhihu.com/p/41875010
* [4] 傅里叶级数与傅里叶变换 http://incf19.com/yynotes/posts/2020-03-29-%E5%82%85%E9%87%8C%E5%8F%B6%E7%BA%A7%E6%95%B0%E4%B8%8E%E5%82%85%E9%87%8C%E5%8F%B6%E5%8F%98%E6%8D%A2/index.html

<div align=center><img src="https://cdn.jsdelivr.net/gh/aaronmack/image-hosting@master/mathematics/傅里叶级数.3qoog500x7a0.webp" width="790"></div>

### How do I integrate xcos(nx)?
* https://www.quora.com/How-do-I-integrate-xcos-nx

<div align=center><img src="https://cdn.jsdelivr.net/gh/aaronmack/image-hosting@master/mathematics/How-do-I-integrate-xcos-nx.5y14bd6g3is0.webp" width="790"></div>

  * Integration by parts 分部积分法

### 函数奇偶性
* [1] 函数奇偶性_百度百科 https://baike.baidu.com/item/%E5%87%BD%E6%95%B0%E5%A5%87%E5%81%B6%E6%80%A7/10844145#

<iframe src="https://www.geogebra.org/calculator/teegaebb?embed" width="800" height="600" allowfullscreen style="border: 1px solid #e4e4e4;border-radius: 4px;" frameborder="0"></iframe>

* 偶函数±偶函数=偶函数
* 奇函数×奇函数=偶函数
* 偶函数×偶函数=偶函数
* 奇函数×偶函数=奇函数
* 上述奇偶函数乘法规律可总结为：**同偶异奇**

### 三角函数求导公式如何证明？
* [1] 三角函数求导公式如何证明 https://www.zhihu.com/question/49123901
* [2] 三角函数积分表 维基百科，自由的百科全书 https://zh.wikipedia.org/wiki/%E4%B8%89%E8%A7%92%E5%87%BD%E6%95%B0%E7%A7%AF%E5%88%86%E8%A1%A8

<div align=center><img src="https://cdn.jsdelivr.net/gh/aaronmack/image-hosting@master/mathematics/三角函数求导公式如何证明.1wbqu3jklkjk.webp" width="790"></div>[1]

$\begin{aligned} \int \cos cs dx = \frac{1}{c}\sin cs \end{aligned}$

### 微积分：五、幂级数与三角级数
* https://zhuanlan.zhihu.com/p/359682056

<div align=center><img src="https://cdn.jsdelivr.net/gh/aaronmack/image-hosting@master/mathematics/三角级数.21lokj7d93kw.webp" width="790"></div>

### 彻底理解为什么三角函数系具有正交性

* [1] 深入理解正交函数 https://zhuanlan.zhihu.com/p/338045910
* [2] 彻底理解为什么三角函数系具有正交性 https://zhuanlan.zhihu.com/p/341796771

* **函数的本质就是向量，连续函数就是无穷大维的向量，离散函数可以是无穷大维的向量，也可以是有限维向量**[1]
* **正交使我们容易求解系数**

<div align=center><img src="https://cdn.jsdelivr.net/gh/aaronmack/image-hosting@master/mathematics/为什么三角函数系具有正交性.2tqduoxg9420.webp" width="790"></div>[2]

### Beta 函数和 Gamma 函数有什么用？
* https://www.zhihu.com/question/31407058

<div align=center><img src="https://cdn.jsdelivr.net/gh/aaronmack/image-hosting@master/mathematics/Beta函数和Gamma函数.71r0ic189140.webp" width="850"></div>

### 偏导数的定义及其计算
* https://zhuanlan.zhihu.com/p/82470946

<div align=center><img src="https://cdn.jsdelivr.net/gh/aaronmack/image-hosting@master/mathematics/偏导数的计算.4lyt89cp86c0.webp" width="790"></div>

### 梯度的方向为什么是函数值增加最快的方向？
* https://zhuanlan.zhihu.com/p/38525412

<div align=center><img src="https://cdn.jsdelivr.net/gh/aaronmack/image-hosting@master/mathematics/梯度的方向为什么是函数值增加最快的方向.6wfllr1w53c0.png" width="790"></div>

* 梯度只是一个我们为了确定一个曲面上变化量最大的那个方向所规定出来的一个名词；我们该如何知道哪个方向最大呢？用方向导数可求得每一个方向上的变化率，所以有`梯度=max(所有方向导数上的变化率)`，方向导数的计算公式<br>　　$D_uf(x,y)=f_x(x,y)cos\theta+f_y(x,y)sin\theta$<br>我们可以发现方向导数公式中的$cos\theta$和$sin\theta$可以组合为一个向量$I$,再设<br>　　$A=(f_x(x,y), f_y(x,y))$<br>则我们可以得到<br>　　$D_uf(x,y)=A\cdot I=|A|*|I|cos\alpha$<br> (α为向量$A$与向量$I$之间的夹角) 那么此时如果$D_uf(x,y)$要取得最大值，那么$\alpha$就要为0度或180度，也就是说，当我们固定某一点时，这个唯一确定的向量<br>　　$A=(f_x(x,y), f_y(x,y))$<br>要与向量$I$平行，即得向量$A$就是我们要找的"梯度"

* 参考1 - https://mp.weixin.qq.com/s?__biz=MzI4MDYzNzg4Mw==&mid=2247483704&idx=1&sn=8f0c6e33ef84c26823e562be16bce684&chksm=ebb439ecdcc3b0fa4e9571deb33ccea62e42034c88db4e190633588307dce4a1e0c91ed2635c&scene=21#wechat_redirect
* 参考2 - https://www.cnblogs.com/LeslieForever/p/9226581.html

### 方向导数与梯度
* https://blog.csdn.net/myarrow/article/details/51332421

* **方向导数**：是一个数；反映的是f(x,y)在P0点沿方向v的变化率。
* **偏导数**：是多个数（每元有一个）；是指多元函数沿坐标轴方向的方向导数，因此二元函数就有两个偏导数。
* **偏导函数**：是一个函数；是一个关于点的偏导数的函数。
* **梯度**：是一个向量；每个元素为函数对一元变量的偏导数；它既有大小（其大小为最大方向导数），也有方向。

### 直观理解梯度，以及偏导数、方向导数和法向量等
* https://www.cnblogs.com/shine-lee/p/11715033.html

<div align=center><img src="https://cdn.jsdelivr.net/gh/aaronmack/image-hosting@master/life/梯度与等高线垂直的解释.zo32ghlqscw.png" width="790"></div>

* **梯度与等高线垂直**

### 如何通俗易懂地解释外微分？
* https://www.zhihu.com/question/263674338

<div align=center><img src="https://cdn.jsdelivr.net/gh/aaronmack/image-hosting@master/mathematics/如何通俗易懂地解释外微分.6vsd1xzb5us0.png" width="850"></div>

### 浅谈外微分形式
* https://zhuanlan.zhihu.com/p/252456098

<div align=center><img src="https://cdn.jsdelivr.net/gh/aaronmack/image-hosting@master/mathematics/外微分形式.5sk9j70a87s.png" width="850"></div>

### 散度和旋度的物理意义是什么？

* [1] https://www.zhihu.com/question/21912411

* **通量**是单位时间内**通过的某个曲面的量**
* **散度**是**通量强度**
* **环流量**是单位时间内**环绕的某个曲线的量**
* **旋度**是**环流量强度**

### 格林公式的几何意义是什么?

* [1] https://www.zhihu.com/question/22674439

<div align=center><img src="https://cdn.jsdelivr.net/gh/aaronmack/image-hosting@master/mathematics/格林公式-解释.5bcupuf87jo0.png" width="790"></div>

* [1] 这里为什么**桌边的能量和=桌边围成区域内的能量和**，想象一个矩形桌面(x方向和y方向)，桌面没有摩擦力，我们在某一点处放置一个小球，沿着某一方向(这里假设是y方向)，给一个初始的力，此时就会沿着这个方向(y方向)运动，撞击到桌面边界时弹回，如此往复，则可以得知，**初始的力=桌边受到的力的和**；这个初始的力也是属于桌面内的，所以就是**桌面的力=桌边受到的力的和**，如果此时加上桌面的力，则有**桌面内的力=桌边的力的和**

### 三阶行列式对角法则

<div align=center><img src="https://cdn.jsdelivr.net/gh/aaronmack/image-hosting@master/mathematics/三阶行列式对角法则.17va3a9wk4sg.png" width="790"></div>

### 第一类曲面积分的几何意义是什么？

* [1] 第一类曲面积分的几何意义是什么？ - 百度知道 http://zhidao.baidu.com/question/1433910158368736819.html

<div align=center><img src="https://cdn.jsdelivr.net/gh/aaronmack/image-hosting@master/mathematics/第一类曲面积分的几何意义.r1tpe7dxz40.png" width="790"></div>

### 第一(二)类曲线积分与曲面积分

* [1] 曲线积分与曲面积分 https://zhuanlan.zhihu.com/p/338915365

<div align=center><img src="https://cdn.jsdelivr.net/gh/aaronmack/image-hosting@master/mathematics/曲线积分与曲面积分.401tijc8lfw0.png" width="830"></div>

### 图解高等数学-第一类曲面积分

* [1]【第一类曲面积分】- 图解高等数学 17 https://zhuanlan.zhihu.com/p/26032981

<div align=center><img src="https://cdn.jsdelivr.net/gh/aaronmack/image-hosting@master/mathematics/图解高等数学-第一类曲面积分.1v2iw8movn4.png" width="790"></div>

### 偏导数、方向导数、梯度以及微分之间的关系

  <div align=center><img src="https://cdn.jsdelivr.net/gh/aaronmack/image-hosting@master/mathematics/多元函数的偏导数方向导数梯度以及微分之间的关系思考.5s2jhe980rs.png" width="790"></div>

  * 发现函数只要每一个变量都沿着关于这个变量的偏导所指定的方向来变化，函数的整体变化就能达到最快（变化的绝对值最大）。因此函数在A处的梯度为（以三元函数为代表）：$grad A=(f_x(A), f_y(A), f_z(A))$

  * [1] 多元函数的偏导数、方向导数、梯度以及微分之间的关系思考 https://zhuanlan.zhihu.com/p/31942912

### 曲线积分基本定理

<div align=center><img src="https://cdn.jsdelivr.net/gh/aaronmack/image-hosting@master/mathematics/曲线积分基本定理.4zjl5296xcs0.png" width="790"></div>

  * [1] 曲线积分基本定理 https://www.matongxue.com/parts/2676/

### 梯度与偏微分

* 梯度
  $(f_x'(x_0, y_0), f_y'(x_0,y_0)) = grad f(x_0, y_0) = \triangledown f(x_0, y_0)$

  * [1] 高数笔记：曲线积分、向量场积分、梯度/旋度/格林/散度定理（上） https://www.pluvet.com/2020/06/04/%E9%AB%98%E6%95%B0%E7%AC%94%E8%AE%B0%EF%BC%9A%E6%9B%B2%E7%BA%BF%E7%A7%AF%E5%88%86%E3%80%81%E5%90%91%E9%87%8F%E5%9C%BA%E7%A7%AF%E5%88%86%E3%80%81%E6%A2%AF%E5%BA%A6-%E6%97%8B%E5%BA%A6-%E6%A0%BC%E6%9E%97/


### 弧微分

  <div align=center><img src="https://cdn.jsdelivr.net/gh/aaronmack/image-hosting@master/mathematics/弧微分.19e4hovb8lfk.png" width="790"></div>

  * [1] 数学乐-弧长 https://www.shuxuele.com/calculus/arc-length.html

### 二重积分中值定理

<div align=center><img src="https://cdn.jsdelivr.net/gh/aaronmack/image-hosting@master/mathematics/二重积分中值定理.263k2afal96o.png" width="790"></div>

### 万有引力公式

<div align=center><img src="https://cdn.jsdelivr.net/gh/aaronmack/image-hosting@master/mathematics/万有引力公式.3879c4x6j2w0.png" width="790"></div>

### 极坐标

<div align=center><img src="https://cdn.jsdelivr.net/gh/aaronmack/image-hosting@master/mathematics/极坐标.43sprcbmhzs0.png" width="790"></div>

### 直角坐标与极坐标的互化

<div align=center><img src="https://cdn.jsdelivr.net/gh/aaronmack/image-hosting@master/mathematics/直角坐标与极坐标的互化.54vseif8vpc0.png" width="790"></div>

  **注意第一幅图中的式子是雅克比行列式展开后的结果**

  * [1] 直角坐标与极坐标的互化中，为什么 dxdy=rdrdθ？ https://www.zhihu.com/question/368888687

### 二阶行列式与平行四边形的关系

<div align=center><img src="https://cdn.jsdelivr.net/gh/aaronmack/image-hosting@master/mathematics/二阶行列式与平行四边形的关系.31393tuexgi0.png" width="790"></div> 

  * [1] 图说行列式：几张图让你明白行列式的性质 http://www.duodaa.com/blog/index.php/archives/1168/

### 雅克比矩阵示例

补充：cosx求导就是-sinx

<div align=center><img src="https://cdn.jsdelivr.net/gh/aaronmack/image-hosting@master/mathematics/雅克比矩阵示例.4jgma34npgc0.png" width="790"></div>


## 疑惑点

### 无穷小量究竟是否为零？ - 知乎

* [1] 无穷小量究竟是否为零？ - 知乎 https://www.zhihu.com/question/20454375

* 0是数.无穷小是具有某种性质的函数。
* 无穷小是在自变量的某种变化趋势下趋近于0的（因）变量，也就是说谈无穷小，一定离不开自变量的变化和由此导致的因变量变化。所以无穷小首先要有两个重要的因素，一个是函数关系，一个是自变量的变化趋势。
* 0是无穷小，指的并不是这个数本身的无穷小，而是无论自变量如何变化因变量始终保持不变，一直是0。[1]

* 趋近于零的不是数，是数列，是一列数。数列不能和数比较，不能等于一个数。
* 但是数列可以趋近于一个数，这个数叫做这个数列的极限。
* 所以数列的极限是一个数，可以和其他数比较，可以等于一个数。
* 0.9, 0.99, 0.999, ... 是一个数列，这个数列趋近于 1。
* 这个数列的极限是一个数，记作 0.99999...，这个数等于 1。

### 泰勒级数，泰勒公式，泰勒展开式

* [1] 泰勒级数，泰勒公式，泰勒展开式 https://zhuanlan.zhihu.com/p/93996275

  <div align=center>
  <img src="https://cdn.jsdelivr.net/gh/aaronmack/image-hosting@master/mathematics/泰勒级数-泰勒公式-泰勒展开式.33ailcee3ci0.png" width="890">
  </div>

* 泰勒级数可以说只是代表一种计算方式

### 第一类换元积分法和第二类换元积分法有什么本质区别？

* [1] 第一类换元积分法和第二类换元积分法有什么本质区别？ https://www.zhihu.com/question/35887059

* 第一类换元法通过配凑导数，将配凑到的导数u'和dx合在一起形成du，构成形如f(u)du的形式求积分，这里的f(u)通常为易求的积分形式
* 而第二类换元法则是令x=g(t),把dx拆分为g'(t)dt,从而把简单函数变为一个复合函数，高数中常常用三角函数代换分母中的多项式，再利用三角恒等变换使分母简单化从而得解
* 换句话来说，第一类换元法是先将函数分为两部分，一部分为u',另一部分为f(u),其中u'dx=du,于是待求积分从f(x)dx转化为f(u)du,而第二类换元法是将x用g(t)代换，再将dx拆分为g'(t)dt从而使积分可求，而其不同于第一类换元法表现在其后须使用t=g-(x)将t换掉得到关于x的积分[1]