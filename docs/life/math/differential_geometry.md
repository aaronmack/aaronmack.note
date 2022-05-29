# 微分几何入门与广义相对论

## 拓扑空间简介

### 集论初步

* **元素**，**子集**
  * **属于**，**含于**
    * 属于是对元素而言，含于是对子集而言
    * symbol分别为$\in$ 和$\sqsubset$
* **卡氏积**
* $\mathbb{R}^n$**自然坐标**
  * $\mathbb{R}^n$表示有n个实数排着队决定了一个元素
* $\mathbb{R}^n$之间距离
  <div align=center><img src="https://cdn.jsdelivr.net/gh/aaronmack/image-hosting@master/mathematics/R^n距离.4q2iaap1csu0.webp" width="340"></div>
* **映射**
  <div align=center><img src="https://cdn.jsdelivr.net/gh/aaronmack/image-hosting@master/mathematics/映射.ziyqse1651s.webp" width="440"></div>
  * $f: \mathbb{R}^n \rightarrow \mathbb{R}^m$ 表示m个n元函数
  * $\epsilon-\delta$定义
    * $:= $this symbol表示定义
    * 定义1: $f:\mathbb{R}\rightarrow \mathbb{R}\ is\ C^0\ at\ x\in \mathbb{R}\ if\ \forall \epsilon > 0 \ st(such\ that)\ |x^{'}-x| < \delta \Rightarrow |f(x^{'})-f(x)|<\delta$
    * 定义2: $f:\mathbb{R}\rightarrow \mathbb{R}\ (X\rightarrow Y)\ is\ C^0\ if\ Y的any开区间的“逆像”是X的开区间之并$ 这个定义中的**带引号的逆像**指的是子集而不是元素，这样定义可是打破1-1；之并的含义是指例如在x轴上Y的逆像**可能同时对应正半轴与负半轴**<div align=center><img src="https://cdn.jsdelivr.net/gh/aaronmack/image-hosting@master/mathematics/epsilon-delta定义2.4kehnq3par20.webp" width="390"></div>
    * 定义1与定义2是等价的;同时定义2便于推广
    * 开区间的Y不一定就对应开区间的X<div align=center><img src="" width="730"></div>
* **连续**
  * $C^0$其中0表示naught， $C^1$就是一阶导数存在并可微
* **像**，**逆像**

### 拓扑空间

* **拓扑**，**同胚**
  * 选拓扑的概念与在集合X中选定哪些subset是Open的这两件事是一回事；起因是想将一维数轴上可选的开或闭区间进行推广
  * 现将X中的所有subset，每个subset作为一个元素组成一个新集合大花P$\mathcal{P}$（这就是为什么图片中X中为圈，新集合中为点）；然后再在大花P中选择一个subset，就称在这个subset圈中的元素都是集合X中的opensubset，把这个圈记为大花T$\mathcal{T}$，称这个为X的一个拓扑；但也不是随便选取的，需要满足(a)(b)(c)
  * **拓扑空间**
    * anySet配一个拓扑就是一个拓扑空间,记为$(X, \mathcal{T})$
    * （定义了开子集的集合叫拓扑空间）
  * **离散拓扑**(开集最多) $X,\mathcal{T}=\{\cdots\cdots\}$
  * **凝聚拓扑**(开集最少) $X, \mathcal{T}^{'}\equiv \{X,\emptyset\}$
  * **通常拓扑**： u；X为任意非空集合，设$X=\mathbb{R}$，则$\mathcal{T}_u :=\{$空集或$\mathbb{R}$中能表为开区间之并的子集$\}$称为$\mathbb{R}$的通常拓扑
  <div align=center><img src="https://cdn.jsdelivr.net/gh/aaronmack/image-hosting@master/mathematics/拓扑.43crinegvjy0.webp" width="450"></div>
* **开球**
  * $B(x_0,r):=\{x\in \mathbb{R}^{n}|\ |x-x_0|<r\}$
  * 这里是$\mathbb{R}^n$,n=1是开区间，n=2是开圆盘
* **$\mathbb{R}^{n}$的u拓扑**
  * $\begin{aligned} \mathcal{T}_u :=\{可表为开球之并的子集\} \end{aligned}$ - 例如将这个定义退回n=1的时候，这个所谓的usual_topology就是开区间之并(开集)
* **什么是Open的**
  * 在一个$\mathbb{R}^2$空间中，一个subset，如果这个subset可以装的下许许多多的开圆盘（开圆盘之并），那么就是open的，还例如一条线，装不下开圆盘，就是non-open的
* **诱导拓扑，拓扑子空间**
  <div align=center><img src="https://cdn.jsdelivr.net/gh/aaronmack/image-hosting@master/mathematics/诱导拓扑.7hwfzk3in1c0.webp" width="790"></div>
* **互相同胚，同胚映射**
  <div align=center><img src="https://cdn.jsdelivr.net/gh/aaronmack/image-hosting@master/mathematics/互相同胚.1elllx4ekxr4.webp" width="790"></div>

  * anyopenset它的逆像也openset （一分钱一分货，花点代价，去定义这两个都是拓扑空间）
  * 现在是定义在$c^0$上的，如果是$c^1$就要牵扯到可微，不仅需要拓扑结构还需要微分结构
  * 如果**one-one，正反连续**、两个拓扑空间之间也有这个性质，那么我就说这两个拓扑空间互相同胚

## 流形和张量场

### 微分流形

* **背景空间**
  * $\begin{aligned} \mathbb{R}^4 \end{aligned}$ 三维空间+时间
* **n维流形**
  * （局域的像$R^n$；就是一个拓扑空间+一些条件就是=流形）
  * (OpenCover：一个接一个的覆盖填充，最终并完就称完全Cover它了)
  * 1.对于这个Cover里的任意一个OpenSet （也就是$O_\alpha$），存在一个同胚映射($O_\alpha \rightarrow \psi_\alpha$) 
  * 2. $C^\infin$ 就是任意阶导函数存在；from $R^n$的一个subset到一个$R^n$的subset；$\psi_\beta \circ \psi_{\alpha}^{-1}$ is $C^\infin$；n个n元函数，满足这些的就是一个流形
  * （坐标与自然坐标）；类似于的坐标变换（Chart图【数学家】与坐标系【物理学家】）
  * （从直角坐标到极坐标，作了坐标变换，什么是坐标变换，就是找同一图册中的另一个图，现在这个图册就一个，没法找，就换个图册，这就是坐标变换）
  <div align=center><img src="https://cdn.jsdelivr.net/gh/aaronmack/image-hosting@master/mathematics/n维流形.78ji0d4pvcw0.webp" width="790"></div>
  <div align=center><img src="https://cdn.jsdelivr.net/gh/aaronmack/image-hosting@master/mathematics/n维微分流形的定义.678fcnbehu8.webp" width="790"></div>

* **相容性条件**
  * n维微分流形中的(b)的条件
* **图**
  * 坐标系$(O_\alpha , \psi_\alpha)$在数学上就称为图
* **图册**
  * 好多图搁到一起
* **恒等映射**
  * $X \rightarrow X$,原像点就是自己，那么就是恒等
* **平凡流形**
* Ball与Sphere
  * Ball是实心球，Sphere是球面，三维中的Sphere球面需要用两个坐标（经纬度）去刻画，球面是二维的，空间在三维，
* **$S^1$与$S^2$**
  <div align=center><img src="https://cdn.jsdelivr.net/gh/aaronmack/image-hosting@master/mathematics/微分几何-S1S2.vim7hmrhhs0.webp" width="790"></div>
  * $S^1$需要4个图，$S^2$需要6个图；然后拍扁
* **微分结构**
  <div align=center><img src="https://cdn.jsdelivr.net/gh/aaronmack/image-hosting@master/mathematics/微分结构.geb307wsgpk.webp" width="790"></div>

  * 【1】 同一个拓扑空间，甲乙赋予不同的微分结构，就说这是两个不同的流形
  * 当我们说它是一个manifold的时候，就取它那个最大的图册；图与图之间的变换就是坐标变换;选取最大的那个图册作为微分结构，使得我们可以做任意坐标变换
  * (两个manifold之间的map的$C^r$性如何定义呢？如果这两个只是topologySpace，那这个定义没法用，必须得要是manifold，因为这个微分结构起作用了；现在是两分钱两分货)
  * $O_\alpha$作为$M$的一个chart，那么就有一个homeomorphism叫$\psi_\alpha$ to where, $\mathbb{R}^n$里面的一个OpenSubset叫$V_\alpha$
* **坐标域**
  * 例如直角坐标系和极坐标的原点和极坐标那个$\alpha =0$的那个条线，属于出了坐标域
* **平凡流形**
  * 能用一个坐标域覆盖的流形
* **微分同胚** diffeomaphism
  * 微分同胚强于同胚
  * （就是存在一个映射，这个映射叫做diffeomaphism map；什么是diffeomaphism map呢？就是one-one on to 正反，$C^\infin$）
* **函数(标量场)**
  <div align=center><img src="https://cdn.jsdelivr.net/gh/aaronmack/image-hosting@master/mathematics/函数和标量场.7f62tthp2w40.webp" width="790"></div>

  * M上的function与M上的scalarField是一回事，都是指From M-> R
  * 标量场的映射是不需要给定坐标系的，但将它理解为函数的时候，就需要**借**坐标系了
  * 【1】 f表示函数，F也表示函数，$\mu$表示坐标系，但需要区分，相当于$f$(爸爸)娶了一个$\{x^{\mu}\}$妻子,生了一个$F$儿子;娶不同的妻子，生不同的儿子；f是绝对的，**不依赖与其它的因素，天生就是**，F是相对的(需要一些人为的因素，这里就是坐标系)；（F是n原函数，f是M上的函数，务必分清）
  * M上有很多标量场，我们要找一个最好的$C^\infin$, M上全体的这些最好的ScalarField记作$\mathcal{F}$，也可以理解为Function或Fields，如果流形多了，可以注明$\mathcal{F}_M$
* **集**
  * 一个集可以是开的，可以是闭的，可以是不开不闭的，还有即开又闭的；例如$X\in \mathcal{T}$它的补集是空集$\emptyset \in \mathcal{T}$ (空集也是开的) X的补集是开的，但定义是闭的，所以全集即开又闭
* **连通的 Connected**
  <div align=center><img src="https://cdn.jsdelivr.net/gh/aaronmack/image-hosting@master/mathematics/微分几何-连通定义.5r4hxrr3ezc0.webp" width="790"></div>

  * A topological space is set to B Connected, if 它的即开又闭的 subset只有两个
  * 在A上取一点，B上取一点，没法用一条连续的曲线连起来，不能超过X
  * (弧连通与连通,在流形下没有区别)
* **函数的表示**
  <div align=center><img src="https://cdn.jsdelivr.net/gh/aaronmack/image-hosting@master/mathematics/微分几何-函数的表示.60yyvffwom40.webp" width="790"></div>

### 切矢和切矢场

* **矢量空间 (vector space)**
  * 定义一些运算（加与数乘），再满足一些性质的vector就构成了vector space，也叫作**线性空间**
  * （箭头的向量是点的向量的一种特例，0元也是一个箭头，特殊的箭头，长度为0）
  * (arrow如果说是一个带方向和长度这样不便于推广，现在将这个arrow看做一个map，from$\mathcal{F}_{\mathbb{R}^3} \rightarrow \mathbb{R}$,这样就将vector推广了)
  * （在我们有这个arrow之后，对这个函数f求**方向导数**，导函数的取值是一个realNumber）
  <div align=center><img src="https://cdn.jsdelivr.net/gh/aaronmack/image-hosting@master/mathematics/微分几何-vector.46q64zhbmx40.webp" width="790"></div>

  * 【1】选一个坐标系$O_\alpha$,包含p；然后在整个坐标系内每一点都可以定义coordinate，我们记这个n个coordinate为$\{x^{\mu}\}$;P点取了这个坐标系后呢，就有两个非常特殊的vector，$X_1$和$X_2$
  * 【2】（每一个映射就称为p点的一个vector，换一个映射就有一个vector，所以p点有很多的vector）

* **实数域上的矢量空间**
  <div align=center><img src="https://cdn.jsdelivr.net/gh/aaronmack/image-hosting@master/mathematics/微分几何-实数域上的矢量空间.53lphdem1yo0.webp" width="790"></div>

* **流形上的矢量空间**
  * 由于"方向"，"长度"这些对一般流形没有定义，用箭头推广矢量的做法不能直接推广至一般流形，所以需要抓住箭头的本质特征，便于推广的特性，设$\vec{v}$是$\mathbb{R}^3$中任一点$p$的一个箭头，则对$\mathbb{R}^3$上任一$C^{\infin}$函数$f$就可以沿$\vec{v}$求方向导数，这导函数在$p$点是一个实数，可见$\vec{v}$就是一个把$f$变为实数的映射，所以本质上就是一个$\mathcal{F}_{\mathbb{R}^3}$到$\mathcal{R}$的一个线性**映射**

* **基底**
  * $X_\mu$中有许多许多的coordinate,($X_\mu$表示从1~n的所有坐标)，我们选取一组$X_1$和$X_2$，它们想要成为基底，必需要是线性无关(线性独立)的
  * (证明[书中就是定理2-2-2]：$V_p$的维度与M流形的维度是相等的记作n)（p点全体vector的集合记作$V_p$，作为vector space）
  <div align=center><img src="https://cdn.jsdelivr.net/gh/aaronmack/image-hosting@master/mathematics/微分几何-dimVp=dimM=n的证明.4j7npnyxt0y0.webp" width="790"></div>

  * 【1】这里的取值只有0和1，所以也被称为$\delta$
  * 【2】$\alpha^{\mu}$: n个实数；并且用爱因斯坦惯例，重复指标代表对该指标求和，所以这里$\alpha^{\mu}X_\mu$是求总和
  * 【3】让这两边都作用一个光滑函数
  * 【4】p点矢量是就是能够把任意作用于f变为一个实数
  * 【5】坐标域$O_\alpha$上的每一点都有n个坐标，叫$x^1...x^n$, $x^1...x^n$就是说在这个坐标域内我们随便指一个地方，都可以指出这个实数是几；$x^1$是$O_\alpha$上的一个scalar field vector function，并且是光滑（根据流形定义，相容性），所以$x^1$也是一种f；最后我们随便取一个$x^\nu$
  * XXX：向量、映射、函数是一回事嘛？
* **基矢，坐标分量**
  * （在流形M上）
  * $v^\mu$:称为坐标分量
  * 整个$\{X_\mu\}$合到一起这个集合称为一个坐标基底，其中的每一个就叫一个basis vector（基矢）
  * 如果想将$v$基底展开，选一个coordinate basis，为此需要先选一个coordinate system
  <div align=center><img src="https://cdn.jsdelivr.net/gh/aaronmack/image-hosting@master/mathematics/微分几何-基矢坐标分量.1uk8i31miiu8.webp" width="790"></div>
  
  * (告诉我们，同一个vector，如果给我们两个coordinate system，就有两组coordinate components，就告诉我们两组坐标分量之间的关系，指标平衡)
  * 【1】相对的f 【2】绝对的f 【3】x表示的n个，不是一个

* **曲线(Curve)、参数、参数化**
  * 在一个流形M上，A curve on the manifold is a map (Call C), From C: I -> M（可以把像叫做曲线，也可以把映射叫曲线？；I是interval）
  * （指定一个t，像点就是C(t), 就把这个t值称为这个像点的一个parameter参数）
  * (带参数的曲线，或参数化的曲线)（把$I$与$I'$称为同一条曲线的两种参数化）
  <div align=center><img src="https://cdn.jsdelivr.net/gh/aaronmack/image-hosting@master/mathematics/微分几何-曲线参数参数化.3hoja67zp3c0.webp" width="790"></div>

  * 【1】重参数化 【2】$C[I]$：集合的像是方括弧
  * (这里一般用$C(t)$ [C of t]来表示，因为可以知道参数是用what symbol表示的，也可是用$C[I]$表示，只不过不知道参数表示)
  * （如果可以找到一个坐标系，它的坐标域能把整个曲线映射的像包到里面，对表述曲线有方便性；在$I$里面指定一个t,就会得到一个像点 C of t,但又因为这个像点在坐标域里面，所以就会有n个坐标，相等于给定一个自变数实数，就会出n个因变数，就出了n个1元函数）就是【3】曲线的参数方程

---

<div align=center><img src="https://cdn.jsdelivr.net/gh/aaronmack/image-hosting@master/mathematics/微分几何-切矢和坐标线.2oxz2qn5smk0.webp" width="890"></div>

* **切矢**
  * （curve-带参数的曲线）
  * 【1】闹了半天，$X_1$就是Tangent $X_1$；$X_\mu$就是Tangent $X_\mu$；我们之前所说的特殊的coordinate basis vector也可以认为就是tangent vector to coordinate line
  * （感觉切矢与坐标系之间有某种联系？）
  * 【2】曲线线上任意一点的切矢$\partial / \partial _t$在该坐标基底的展开式；曲线上任意一点切矢$\frac{\partial}{\partial_t}$在坐标基底$\frac{\partial}{\partial x^\mu}$下的展开；总结来说就是：曲线的切矢的坐标分量是(【3】)该曲线的参数式的导数
* **坐标线**
  * 像坐标轴但又不是的线；叫做$x_1$坐标线，坐标轴是不变的，坐标线在变
  * （例如$x_1$的坐标线，它的参数是就是$x_1$,以$x_1$为参数的一条曲线）

* **曲线的重参数化，互相平行**
  <div align=center><img src="https://cdn.jsdelivr.net/gh/aaronmack/image-hosting@master/mathematics/微分几何-曲线的重参数化和平行.5qb5m6qak5g0.webp" width="790"></div>

  * 重参数化就是存在一个map叫$\alpha$，from I to I' ；重参数化之后，Tangent vector不一样了，但方向一样，就是强度变化了
* **切空间**
  <div align=center><img src="https://cdn.jsdelivr.net/gh/aaronmack/image-hosting@master/mathematics/微分几何-切空间.11iqu0i95wvk.webp" width="790"></div>

  * 代数上的vector不能随随便便称为tangent vector，现在是几何了，在流形上的一点，一点的每一个vector（按映射定义）其实都可以称为一个tangent vector。$V_p$ vector space往往称为tangent space of P（P点的切空间）
  * `书26~27页`
* **矢量场(Vector fields)**
  * 在manifold上一般是一个subset（三维流形上的一个curve是open的吗？不是，因为窄到装不下三维球）
  * 对于自相交curve，不能定义vector fields，（因为根据定义，A上的任意一点有唯一的vector），除此之外都可以，tangent vector fields
  * （例如静电场E就是一个vector fields）<div align=center><img src="https://cdn.jsdelivr.net/gh/aaronmack/image-hosting@master/mathematics/微分几何-矢量场.4twni82gta00.webp" width="790"></div>

---

<div align=center><img src="https://cdn.jsdelivr.net/gh/aaronmack/image-hosting@master/mathematics/微分几何-单参数微分同胚群-对称性-积分曲线-对易子.4cz9bym47ko0.webp" width="1020"></div>

* **对易子**
  * (坐标基矢就是坐标域上的vector field)
  * (坐标基底场)
* **积分曲线**
* **群(Group)**
  * 有$g_1$和$g_2$，一定能找到第三个称为他们的积$g_1g_2$,（vector space中也有这个概念，只不过称为和，但他们的symbol都是$\times$）
  * 群是研究对称性非常有力的一个工具
* **对称性**
  * 一个对象如果在某种变换下，那个对象不变，那我们就说这个对象具有在这个变换下的对称性
  * （点变换，其实是同一个问题的两种讲法，通常将点变换叫做主动语言，坐标变换叫做被动语言；点变换就是映射，例如上图中就是$\mathbb{R}^3 \rightarrow \mathbb{R}^3$）
  * ($\begin{aligned} \{\Phi_a|a\in \mathbb{R}\} \end{aligned}$；$\Phi_a$是由a来刻画，所以$a$称为这个map1的一个参数,将整个set记为G，一个自然group，自然就是满足群乘法，这个group是无限多的元素，但只要一个参数就可以刻画，就是一个one-parameter group，并且这个group里面的每一个元素都是一个diffeomephisms)
* **单参数微分同胚群**
  * （M拥有比set更多结构，但也是一个set， $\mathbb{R}^1$也是一个set；M最低限度得要是个拓扑空间，$\mathbb{R}^1$也是一个拓扑空间【用通常拓扑】，两个拓扑空间在cartesian cross之后还是一个拓扑空间又同时这两个又都是manifold，所以可以定义为流形，维度是两个之和$1+n$）
  * (consider a map $\Phi$, $t\in \mathbb{R}, p\in M$，则有$q\in M$；将$\Phi$考虑成一个机器，这个机器要输入两个原材料，一个是real number，一个是M中的一个点p)
  * （$\Phi_t$还是个机器，$\Phi_p$称作this is nothing,but a curve on M）
  * (实际上是在说，$\{\Phi_t|t\in \mathbb{R}\}$,这个t跑遍了$\mathbb{R}^1$, 这个是一个单参数微分同胚群)<div align=center><img src="https://cdn.jsdelivr.net/gh/aaronmack/image-hosting@master/mathematics/微分几何-单参数微分同胚群的理解.75um0ros9wo0.webp" width="790"></div>

  <div align=center><img src="https://cdn.jsdelivr.net/gh/aaronmack/image-hosting@master/mathematics/微分几何-单参数微分同胚群.oqawmp5qrw.webp" width="790"></div>

  * (v is $C^\infin$ vector field on M)
  * (在M上随便给一个单微群，我就可以很自然生出M上的一个$C^\infin$ vector field v.f.)
  * (什么是一个vector field？如果我宣称M上现在有一个vector field，意思就是随便给我指定一点，我都能告诉你那个field在这一点有个值；所以证明的思路就是，你给我任意一点，我都把他当做p点，那么我就有个curve，curve在这一点都有一个tangent vector，这个vector就是我要找的我宣称的有的那个vector field $v$在这一点的value)
  * (Global v.s. Local problem) (单参微分同胚群需要全局，因为参数t是跑遍$\mathbb{R}^1$的；但如果根据图中，有一个M'将M分开，如果t的参数取得太大就会超过M'的定义范围，也就是像点跑到外面去了，就出问题了)
  * 【1】如果是Locally就可以成立
* **$\frac{\partial}{\partial_t}$**
  * 为什么要这样定义呢，我们通常都是习惯了$\frac{\partial f}{\partial_t}$的这样的定义，有个f，而现在这样定义是为：（vector的定义不就是吃进一个函数【或者称作用于，映射都是一回事，】一个vector作用于一个function【scalar field， 一个f】就出实数了【出实数是因为便于vector在流形上的推广，求方向导数出来就是一个实数】）

### 对偶矢量场

<div align=center><img src="https://cdn.jsdelivr.net/gh/aaronmack/image-hosting@master/mathematics/微分几何-对偶.67q9u4uxg580.webp" width="1050"></div>

* **Dual(对偶) vector fields**
  * （Dual space）
  * （当我们将一个map升级为一个space的时候，往往就有一些结构在里面；例如vector space因为它有线性结构，满足加法数乘零元）
  * （如何证明$V^*$和$V$的维数一样，无法就是在$V^*$中找到一个基底它的里面的元素的个数和$V$是一样多）
  * （基底那个元素叫基矢，这个不是坐标基底，坐标基底是什么时候才有的概念呢？坐标基底是在M上，取一个坐标域，那我们就有了n个坐标基矢场，每一点就有一个坐标基底；而我们目前还在代数阶段，基底就叫基底，没有坐标基底这个词）
  * 由基底变换($*e_\mu \rightarrow *e^{'}_{\mu}$) -> 引生出 对偶基底变换;把$\nu$写在上面，把$\mu$写在下面是为了指标平衡,这样写是为了暗示上下重复指标求和，左右都在下面；当然也可以这样写$A_{\nu\mu}$
  * (标注-两边作用于它：$\omega$天生作用于$v$就是一个real number，所以这里相当与$v^{**}$做用于$\omega$)
* **转置矩阵 Transposed matrix**
  * 我们用$\tilde{A}$来表示转置矩阵
* **同构 (isomorphism)**
  * （两个拓扑空间像的不能再像的关系叫同胚；两个流形像的不能再像的关系叫微分同胚；两个vector space像的不能再像的关系叫同构(isomorphism);两个群像的不能再像的关系也叫同构(群同构)）
  * 同构就是两者之间存在一一到上的线性映射
  * （$V$和$V^*$之间是同构的；但还真找不到一个自然的映射）
* **Dual vector field on M**
  * A example of a dual vector field on M, Give you a scalar field on M (The scalar field is a Map from M -> R, we called $f$), with the aid of f, We would define a dual vector field on M, which is denoted by $df$ what's this? 我们通常说这是f函数的是微分，现在我们说这个是dual vector field on M
  * （$df$称为a dual vector field on M，但如果是$df|_p$称为a dual vector at point p； dual vector 它的那个map 就是 linear的）
  * `书34页 选读2-3-1`
* **对偶坐标基**
  * $dx_\mu$,不要将其反应成$x_\mu$的微分，而是应反应成对偶坐标基矢

* 符号
  * $v$ 				is vector in $V$
  * $v^\mu$ 			is component of $v$
  * $ω$ 				is $V\rightarrow R$ map ; is also call dual vector ; is also a point on $V^*$
  * $ω_\mu$				is component of $\omega$
  * $ω'$ 				is $V\rightarrow R$ new map
  * $ω ω'...$ 		is collected -> $V^*$
  * $e_1,e_2$ 		is basis vector on $V$
  * $e^{1*} e^{2*}$ 		is basis vector on $V^*$
  * $e^{\mu *}$			is which any 1~n basis vector on $V^*$ ; is also call dual basis vector
  * $e^{\nu *}$				is which any 1~n basis vector on $V^*$ (like x & y with $e^{\mu *}$)
  * $e^{'\mu *}$			is which any 1~n new basis vector on $V^*$
  * $e_\mu$				is which any 1~n basis vector on $V$
  * $e'_\mu$			is which any 1~n new basis vector on $V$
  * $e_\nu$				is which any 1~n basis vector on $V$ (like x & y with $e_\mu$)


* 总结一下：为什么流形上的对偶矢量场用df表示，首先定义在流形上的对偶矢量也是一个映射，矢量在流形上没有定义，但我们可以对矢量求方向导数得到一个实数，我们将这些所有构成一个空间叫定义在流形上的矢量空间，所以可以理解为矢量就是一个M到R实数的映射；而df微分我们知道是移动了一个极其小的距离，所以也可以理解为一段极其短的矢量，也是一个映射；全体就在流形上就构成了一个矢量空间，再加上满足线性性质

### 张量场

<div align=center><img src="https://cdn.jsdelivr.net/gh/aaronmack/image-hosting@master/mathematics/微分几何-张量.7gfv4677xi40.webp" width="1200"></div>

* **张量**
  * ($V^*: V\rightarrow R$; $V^{**}: V^*\rightarrow R$)
  * (为什么$v\equiv v^{**}$,因为$v$可以线性映射为$v^*$,再线性映射回来$v^{**}$)
* **张量积 tensor product**
  * (越乘阶数越高)
  * ($\times$是cartesian 的product， $\otimes$是Tensor的 product)
  * ($T\otimes T'$,T因为是(k,l)型的所以可以作用到前$k$个$\omega$以及后$l$个$v$)

<div align=center><img src="https://cdn.jsdelivr.net/gh/aaronmack/image-hosting@master/mathematics/微分几何-缩并_迹.2s3ekppizwk0.webp" width="1200"></div>

* **缩并 contraction**
  * (越缩阶数越低，1,1型的一来contraction就成了0,0型的，一个标量)
  * ($e'_\nu = A^\sigma_{\ \ \nu} e_\sigma$, $e'_\nu$是一个基底，$e_\sigma$也是一个之间，之间可以通过基底变换； $A^\sigma_{\ \ \nu}$是分量，使用指标平衡)
  * (作用是线性的，所以前面的系数$(\tilde{A}^{-1})_\rho^{\ \ \mu}A_{\sigma}^{\ \ \nu}$可以滴溜出去)
  * 【1】(给我一个$T\in \mathcal{T}_v(2,1)$2，1型的tensor，它的contraction有两个)
  * 【2】$v(e^{\mu *})$ 矢量怎么作用到对偶矢量，将v看做$v^{**}$,对偶的对偶不就可以作用到对偶了嘛；$v(e^{\mu *}) = e^{\mu *}(v)$; 将$v$看做$v^{**}$
* **迹 trace**
  * (两个相似矩阵T和T'他们的trace迹就是invariants不变量,也就是矩阵的对角元之和；也就是$T'^{\mu}_{\ \ \ \mu}$;因为这个写法可以写为$T_{\mu\mu}所以相等于T_{11},T_{22},\cdots$,然后所有的取和；需要注意$T'^{\mu}_{\ \ \ \mu}$和$T'^{\mu}_{\ \ \ \nu}$不一样)
  * (两个相似的矩阵他们的trace是一样的)

<div align=center><img src="https://cdn.jsdelivr.net/gh/aaronmack/image-hosting@master/mathematics/微分几何-流形上的张量_并矢.43m3dk8pbjs.webp" width="1200"></div>

* **流形上的张量**
  * 符号
    * $O$ coordinate the domain (coordinate patch)
    * $\{x^\mu\}$ coordinate value 
    * $\{ \frac{\partial}{\partial x^{\mu}} \}$ which n coordinate basis vector
    * $\{ dx^{\mu} \}$ which n dual coordinate basis vector
* **并矢**
  * (直观说法就是两矢量隔一起，中间没有任何运算)
  * (第一并矢是一个张量，第二是由9个数【电动力学$\mathbb{R}^3$上】所组成的这么一个张量；并且这9个数在坐标变换下要变，并且根据这个规则①去变)
  * (并矢是张量的一种特殊情形)

* 符号
  * $\omega ^1$       is which 1 dual vector
  * $v_1$       is which 1 dual vector
  * $e_\mu$       is which any 1~n basis vector on $V$
  * $e_\nu$       is which any 1~n basis vector on $V$ (like x & y with $e_\mu$)
  * $e^{\sigma *}$      is which any 1~n basis vector on $V^*$
  * $e^{\rho *}$      is which any 1~n basis vector on $V^*$ (like x & y with $e^{\mu *}$)
  * $CT$        is contraction of $T$ 
  * $C^1_1 T$:   $^1$ is the first slot on top, $_1$ is the first slot at down


### 度规张量场

<div align=center><img src="https://cdn.jsdelivr.net/gh/aaronmack/image-hosting@master/mathematics/微分几何-度规张量_类空类时类光_笛卡尔伪笛卡尔_线元_黎曼空间.hzpn9ivzixc.webp" width="1200"></div>

* **度规张量**
  * (g就是那个充当度规Metric，满足那两条，记为$(V,g)$)
  * (度规是比较像内积的，但还有区别；当只有一个V，而没有度规，去问V上的一个元素的方向和长度这是不允许的，指定了度规之后，这个问题才有意义)
  * 【1】之前我们说$V$和$V^*$之间没有一个prefer的，但带了一个度规之后，就有一个prefer的了
* **正交的，正交归一的 (orthonormal)**
* **正(负)定 (Positive(negative)definite)**
  * ($\left | \begin{matrix} 1 & 0 & 0 \\ 0 & 1 & 0 \\ 0 & 0 & 1 \end{matrix} \right | $ 所有的对角元都是1，就是正定的，都是-1，就是负定的，如果不是正定也不是负定那么就是不定的；如果-1只有一个，在相对论中比较常用，叫**洛伦兹的**，是不定中的一个特例)
  * (正定的度规还有一个名称叫**黎曼的**;**洛伦兹的**又称为**伪黎曼的**)
* **类空的 (Spacelike) 类时的 (Timelike) 类光的 (Lightlike)**
  * ($g(v,v)$，有时候叫做自我内积，就有三种情况了，>0,<0,=0，这取决于vector自己了，在g选定之后；将Positive情况称为类空的spacelike，类空矢量, 将negative的情况称为timelike， =0称为Lightlike或称为null无的)
* **流形上的度规，欧式空间**
  * (流形配度规，度完是什么样的度规一律现在都加个广义，广义黎曼空间)
  * (黎曼空间中最简单的那一个就是欧氏空间)
* **线元 (line element)**
  * ($ds^2$就称为线元，对于正定的情况就是$dl^2$)
* **笛卡尔坐标系**
  * (凡是一个坐标系如果他的坐标基矢是正交归一的根据欧式度规就叫做笛卡尔坐标系)
* **闵氏空间**
  * (最简单的伪黎曼空间)
  * (物理上有个元间隔在数学上来看就是闵氏线元)
* **伪笛卡尔坐标**
  * (也称为**洛伦兹坐标系**)
* **伪转动 (boost)**

* 符号
  * $dx^{\mu}(t)$: 参数表达式
  * $\frac{dx^{\mu}(t)}{dt}$: 曲线的切矢的第$\mu$坐标分量 
  * $s.l.$: spacelike
  * $t.l.$: timelike
  * $\delta _{\mu\nu}$: 一个数，具体看$\mu$与$\nu$取什么，如果这两个数都是1-1那么就是1，如果是1-2的话就是0
  * $(\mathbb{R}^n, \delta)$: $\delta$是Tensor field of type (0，2),并且是Metric，满足Symmetric和Nondegenerate；$\delta$也叫欧氏度规
  * $(\mathbb{R}^n, \eta)$: $\eta$叫闵氏度规
  * $ch$: 双曲余弦
  * $sinh$: 双曲正弦

### 抽象指标记号

* ($T_{\ \ \ \ \sigma}^{\mu\nu}$: 叫做具体指标 （相对的）$T^{a}_{\ \ \ bcd}$: 叫抽象指标（绝对的）)
* (使用拉丁字母和希腊字母来区分两种记号)
* $v^a$:问a等于几，不许这么问，这就相等于问一个向量上面的箭头等于几

<div align=center><img src="https://cdn.jsdelivr.net/gh/aaronmack/image-hosting@master/mathematics/微分几何-抽象指标记号.3bxnuxqsuec0.webp" width="1200"></div>

> 1

* $v^a\neq v^b$: 不许这么写(因为指标不平衡) $\alpha v^a+u^a=\omega ^a$可以这样写 (指标是平衡的) 

> 2

* $\begin{aligned} T^{\mu}_{\ \ \mu}=T(e^{\mu *}; e_{\mu}) \equiv CT \equiv T^{a}_{\ \ a}\end{aligned}$

* $T^{a}_{\ \ a}$一上一下重复指标代表缩并就没有了就代表一个标量了；$T^{ab}_{\ \ \ \ a}$一缩并就是一vector了

> 3

* $T^{ab}_{\ \ \ \ c}S^{d}_{\ \ e}$　　$T^{ab}_{\ \ \ \ c}S^{c}_{\ \ a}$ -> a vector

* $\omega \otimes \mu (v,u)=\omega(v)\mu (u)=\omega_av^a\mu_bu^b=\omega_a\mu_bv^au^b=\mu_b\omega_av^au^b\Rightarrow \omega_a\mu_b=\mu_b\omega_a$
* $\mu\otimes\omega(v,u)=\cdots \Rightarrow \omega_b\mu_a=\mu_a\omega_b$
* $\omega_a\mu_b\neq\mu_a\omega_b$

> 4

* $T^{\mu\nu}_{\ \ \ \ \sigma}$是$T^{ab}_{\ \ \ \ c}$的分量
* $T=T^{\mu\nu}_{\ \ \ \ \sigma}e_\mu\otimes e_\nu\otimes e^{\sigma *} \Rightarrow T^{ab}_{\ \ \ \ c}=T^{\mu\nu}_{\ \ \ \ \sigma}(e_\mu)^a(e_\nu)^b(e^\sigma)_c$
* $T^{\mu\nu}_{\ \ \ \ \sigma}\equiv T(e^{\mu *}, e^{\nu *};e_\sigma) \Rightarrow T^{\mu\nu}_{\ \ \ \ \sigma}\equiv T^{ab}_{\ \ \ \ c}(e^\mu)_a(e^\nu)_b(e_\sigma)^c$

* $*$不用写了，因为之前是为了强调他是一个dual basis，现在指标在下方相当于已经强调了

> 5

* $T^{a}_{\ \ b}: V \rightarrow V, T^{a}_{\ \ b}v^b\in V$
* $T^{a}_{\ \ b}: V^* \rightarrow V^*, T^{a}_{\ \ b}\omega_a\in V^*$
* 【1】先积后并 -> 先积 $T^{a}_{\ \ b}v^c$ -> 后并$T^{a}_{\ \ b}v^b$
* 【2】这个$\delta$是 The tensor of type (0, 2); 这个$\delta^{a}_{\ \ b}$是 The tensor of type (1, 1)

> 6

* $g_{ab}: V \rightarrow V^*$
* $g^{ab}: V^* \rightarrow V$

* 【3】积并 $g_{ab}v^c$是纯积，$g_{ab}v^b$是积并；$v^b$和$v_a$可以看做是相同的物理对象
* （$g_{ab}$ it's a tensor of type (0, 2), $g^{-1}$ it's a tensor of type (2, 0)）
* (因为$(g^{-1})^{ab}$中的上ab是不会与$g_{ab}$中的下ab相混，所以-1一般去掉)
* (我们说$g_{ab}$有降指标的功能，所谓降指标就是把上指标降下来；我们还说$g^{ab}$有升指标的功能)

* **指标升降 (index raising&lowering)**

<div align=center><img src="https://cdn.jsdelivr.net/gh/aaronmack/image-hosting@master/mathematics/微分几何-全对称全反称.gjtl50vn77k.webp" width="1200"></div>

* **全对称**
* **全反称**

* 符号
  * $T^{\mu\nu}_{\ \ \ \ \sigma}$: it's a component of a tensor
  * $\vec{v}$: it's a vector
  * $v^\mu$: it's a component of the vector v
  * $\overset{\omega}{\rightarrow}$: it's dual vector
  * $\delta_{ab}$: 代表欧氏度规
  * $\delta_{\nu\mu}$: 是欧氏度规在笛卡尔坐标系统中的坐标分量

## 黎曼(内禀)曲率张量

### 导数算符

<div align=center><img src="https://cdn.jsdelivr.net/gh/aaronmack/image-hosting@master/mathematics/微分几何-导数算符.781viaztqtk0.webp" width="1200"></div>

* **梯度 (Gradient)**
  * it's denoted $\vec{\triangledown}f$
  * (我们说呢，gradient是一个vector field，但是我们也可以说它是一个dual vector field，只不过用度规给它升上去 $\delta_{ab}\omega^a\equiv\delta^{ab}\omega_b$)
  * (欧氏空间导数算符$\vec{\triangledown}$作用于标量场$f$得矢量场$\vec{\triangledown}f$(梯度))
* **散度 (Divergence)**
  * (欧氏空间导数算符$\vec{\triangledown}$作用于矢量场(再求缩并)得到标量场$\vec{\triangledown}\cdot\vec{v}$(散度))
* **无挠的 (torsion free)**
  * (M上的导数算符，如果满足或加上第五条e就称为无挠的，挠(就是不屈不挠的意思)；狭义导数算符也被称为无挠导数算符)
* **(无挠)导数算符 (derivative operator)**
  * 映射$\triangledown: \mathcal{F}_M(k,l) \rightarrow \mathcal{F}_M(k,l+1)$称为M上的(无挠)导数算符
  * (一个function，scalar field也可以看做一个tensor field of type(0,0),没有上标与下标，被grad作用了之后就变成了一个vector field，好像就变成了type(1, 0)型了，如果推广到(k,l)就是(k+1,l),由于流形上没有指定度规，所以指标升降这个工具不能使用，所以就要区分清楚是v.f.还是d.v.f.；将grad of function f定义为一个d.v.f.替换v.f. 所以最终是将(0,0)变为(0,1),更一般就是(k,l)变为(k,l+1))
* **延拓**
  * 延拓的结果是M上的一个dual vector field，叫做$\omega_b$,所谓它是$\mu_a$的延拓是什么意思？就是$\omega_b$在p点的value是与$\mu_b$相等的，只要满足这个要求的任意dual vector field$\omega_b$,都称为$\mu_b$的一个延拓；类型是tensor field of type(0,1)
  * 【1】(1.给定两个导数算符，它们的差也还是导数算符 2.如果给定p点的一个dual vector叫$\mu_a$,就说能自然获得p点的一个tensor of type(0,2))
* **协变的 (covariant)**
  * 【2】一个张量场用偏a来求导，那个导数的坐标分量$\partial_\mu T^{\nu}_{\ \ \sigma}$，也就是$\frac{\partial T^{\nu}_{\ \ \sigma}}{\partial x^\mu}$，这个是坐标基矢($(dx^\mu)_a(\frac{\partial}{\partial x^\nu})^b(dx^\sigma)_c$)，等于原来张量场的坐标分量($T^{\nu}_{\ \ \sigma}$)再求偏导;简单来说就是导数的坐标分量等于坐标分量的偏导数
  * (我们所说的$\triangledown_a$是不依赖与坐标系的，不依赖任何人为选择的因素，而$\partial_a$是依赖坐标系的；我们将这种不依赖称为协变的，一般的$\triangledown_a$都叫做**协变导数算符**，$\partial_a$不算，因为它是依赖某个坐标系的)
* **克氏符 (Christoffel symbol)**
  * (将$\Gamma_{\ \ ab}^{c}$称为克氏符；克氏符是张量吗？如果用抽象指标讲法，就一定是个tensor，抽象指标表示的就是tensor)
  * 定义: 设$\partial_a$是$(M,\triangledown_a)$上任给的坐标系的普通导数算符，则体现在$\triangledown_a$与$\partial_a$差别的张量场$C^{c}_{\ \ ab}$(也就是将$\partial_a$看做式子$\triangledown_a\omega_b=\tilde{\triangledown_a}\omega_b-C^{c}_{\ \ ab}\omega_c$中的$\tilde{\triangledown_a}$)称为$\triangledown_a$在该坐标系的克氏符，记作$\Gamma^{c}_{\ \ ab}$

* 符号
  * $\vec{\triangledown}$: 欧氏空间导数算符
  * $\hat{i};\hat{j};\hat{k}$: The basis vector of the unit coordinate in cartesian coordinates
  * $(M,\triangledown)$: $\triangledown$ Derivative operator
  * $\delta^{ab}$: $\delta_{ab}$欧氏度规的inverse
  * $\mathcal{F}_M$: M上全体的s.f.的集合；既可以看做函数f，也可以看做(0,0)型的t.f
  * $\mathcal{F}_M (k,l)$: M上全体光滑的(k,l)型t.f的集合
  * $\mathcal{T}_V (k,l)$: VectorSpace V 上的全体tensors的集合类型是(k,l)
  * $v^a$: vector field on M
  * $\triangledown_a$: 导数算符 on M；将$\vec{\triangledown}$推广到流形上时更像d.v.，所以记作$\triangledown_a$；表示$\mathcal{F}_M (k,l) \rightarrow \mathcal{F}_M (k,l+1)$
  * $\tilde{\triangledown}_a$: 另外一个导数算符 on M
  * $\omega_a$: is a dual vector field on M
  * $\omega_\mu$: 就是一个function，s.f.，一个(0,0)型的t.f.；也是$\omega_a$的分量
  * $\mu_a$: dual vector of point p on M （p点的切空间是$V^*_p$）
  * $\tilde{\triangledown}_a - \triangledown_a$: 也可以看做一个导数算符;也可以看做一个映射(a map), from p点全体的dual vectors的集合，记作$V_p^*$,也可以记作$\mathcal{T}_{V_p}(0,1) \rightarrow \mathcal{T}_{V_p}(0,2)$,就是p点的一个tensor of type (1,2)
  * $C = \tilde{\triangledown}_a - \triangledown_a$
  * $T^{\cdots}_{\ \ \ \ \cdots}$: t.f. of type(k,l)
  * $S^{\cdots}_{\ \ \ \ \cdots}$: t.f. of type(k,l)
  * $v(f)$: 这里应该是$v_a$抽象指标，但为了避免混淆不写抽象指标,v作用于f，还是一个M上的一个f
  * $\partial_a$: 在指定坐标域$O$之后上的导数算符，从$\triangledown_a \rightarrow \partial_a$,一个特殊的$\triangledown_a$, $\partial_a: \mathcal{F}_O(k,l) \rightarrow \mathcal{F}_O(k,l+1)$
* 符号
  * $s.f.$: scalar field
  * $v.f.$: vector field
  * $d.v.f$: dual vector field
  * $d.v.$: dual vector
  * $t.f.$: tensor field

* 克氏符是一个坐标系依赖的张张量
* 符号
  * $v^{\nu}_{\ ,\ \mu}$: 中的$,$代表求偏导数；如$\frac{\partial v^\nu}{\partial x^\mu} \equiv \partial_\mu v^\nu \equiv v^{\nu}_{\ ,\ \mu}$
  * $v^{\nu}_{\ ;\ \mu}$: 中的$;$代表坐标分量；如$\triangledown_av^b=(dx^\mu)_a(\partial/\partial x^\nu)^b v^{\nu}_{\ ;\ \mu}$

### 矢量场沿曲线的导数和平移


## 疑惑点

### Dual vector & vector
* [1] What is dual vector and covector? https://math.stackexchange.com/questions/1446403/what-is-dual-vector-and-covector

Given a vector space $V$ over field $K$, the dual space of $V$, denoted $V^∗$, is the set of all linear maps $\phi : V \rightarrow K$

### Tensor & Matrix
* [1] 矩阵与张量的区别 https://zhuanlan.zhihu.com/p/49446026
* [2] 二阶张量与矩阵的区别与联系是什么？ https://www.zhihu.com/question/29150964

* 张量通常被认为是一个广义矩阵
* 矩阵是特殊的张量的坐标表示，比如线性映射是11型张量，二次型是02型张量[1]
* 张量是多重线性代数的通用工具，而矩阵是特定的线性代数工具，张量的范围是要大于矩阵的。[2]
* (根据[1]中的解药，矩阵可以应用一个矩阵得到一个变换，也可以作用一个权矩阵得到一个数，所以这就是对应张量中的上槽和下槽？)