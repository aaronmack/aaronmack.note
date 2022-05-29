# Signals and Systems 

## Resources

* 网易公开课 - 麻省理工学院公开课：信号与系统：模拟与数字信号处理 - Alan V. Oppenheim
    * http://open.163.com/newview/movie/courseintro?newurl=%2Fspecial%2Fopencourse%2Fsignals.html

## 引言
<div align=center>
<img src="../_images/life/Signals and Systems-Intro.jpg" width="900">
</div>

* 引言
  * 信号
    * 连续时间信号 维度-变量个数
    * 图像信号 二维
    * 离散时间信号
  * 系统
    * 连续时间系统
    * 离散时间系统
    * 线性 时不变系统
    * 非线性 时变系统
  * 相互连接
    * 串联连接 - 级联连接
    * 并联连接
    * 反馈连接
  * 频域
    1. 傅里叶转换
    2. 拉普拉斯转换
    3. 拉普拉斯转换所对应的离散时间转换 - Z转换
    4. 2与3都是傅里叶转换的扩展

## 正弦信号与指数信号
<div align=center>
<img src="../_images/life/Signals and Systems-Sin.jpg" width="690">
</div>

* 正弦信号和指数信号
  * 连续时间信号
    * 时移与相变始终相等
  * 离散时间信号
    * 时移等于相变，而相变不一定等于时移
* 实指数信号
  * 若发生时移，等于标度的变化
* 负指数信号
  * 连续时间
  * 离散时间

* 注意这几种基础信号的相似性与一些重要的区别

<div align=center>
<img src="https://cdn.jsdelivr.net/gh/aaronmack/image-hosting@master/mathematics/信号与系统-正弦信号与指数信号.69xqer7xb668.png" width="790">
</div>

* [1] 正弦信号
* [2] 实指数信号
* [3] 包络线就是实指数 （阻尼正弦曲线）

## 第二部分(阶跃信号和输入信号)

* 单位阶跃
* 单位脉冲

<div align=center>
<img src="https://cdn.jsdelivr.net/gh/aaronmack/image-hosting@master/mathematics/信号与系统-第二部分1.bo2abjmev1k.png" width="790">
</div>

* 我们可以使用单位脉冲来表示单位阶跃，有很多种方式，我们这里使用的是一种动求和的方式【1】，小于0时，没有积累任何值【2】，n>0时候，会积累一个项【3】

* 事实上我们可以将单位阶跃序列看作是一串单位脉冲，一个接一个的【4】

--- 

<div align=center>
<img src="https://cdn.jsdelivr.net/gh/aaronmack/image-hosting@master/mathematics/信号与系统-第二部分2.1oeaqhnk3ips.png" width="790">
</div>

* 单位阶跃函数实际上是不连续的，所以在t=0时候的会产生一些数学问题；所以我们需要单位阶跃函数看做是某个**连续函数的极限**，所以如【1】；离散时间：一阶差分；连续时间：一阶导数；我们刚刚说过，t=0是非连续的，所以我们只能看做是近似；面积为1，△趋于0的时候。宽度也趋于0，此时高度就会趋于无穷，我们就说此时产生了一个脉冲，用一个向上的箭头来表示如【2】

---

<div align=center>
<img src="https://cdn.jsdelivr.net/gh/aaronmack/image-hosting@master/mathematics/信号与系统-第二部分3.538ihlc1qfsw.png" width="790">
</div>


* **在离散时间的情况下，通过动求和我们可以将脉冲还原成阶跃**
* **在连续时间的情况下，如果脉冲是阶跃的导数，或多或少，我们有理由认为阶跃是脉冲的积分【1】**

---

<div align=center>
<img src="https://cdn.jsdelivr.net/gh/aaronmack/image-hosting@master/mathematics/信号与系统-第二部分4.5hvsdnq1a9kw.png" width="790">
</div>

* 一个系统最普遍的定义就是**从输入信号到输出信号的一种转换；我们用方框来表示转换【1】；离散时间情况下也是一样的，只不过输入和输出是序列【2】**
* 系统级联(串联)【3】，系统级联的顺序是非常重要的，例如一个系统x2，另一个系统取平方根，反过来的话差异是非常大
* 系统并联【4】
* 反馈互联【5】
  
* 系统的属性
  * 无记忆性【6】
    * 是指某个时间点上的输出，只与该时间点上的输入有关，例如输出是输入的平方$y(t)=x^2(t), \ y[n]=x^2[n]$,我们称作是**平方电路**，鉴于任何时间点上，一个信号的平方只与这个时间点上的信号值有关，显然是一个无记忆性的系统；另外一个例子是**积分电路** $y(t)=\int_{-\infin}^{t} x^2(\delta)dt$，这是一个过去积分的积累，在本质上意味着记忆，为了求得在一个给定时间上的输出，我们需要知道该时间点之前很长一段时间内的输入，因此这种系统时有记忆的;还有一个例子是**离散时间系统** $y[n]=x[n-1]$，输出等于但不完全等于输入，而是某个时间点上的输出,(例如n=0时候)，等于该时间点之前的指数的时间抽样，在该系统中，输出等于延迟或者移位了一个样值的输出，该系统被称为**单位延迟系统**，它违反了我们关于无记忆的定义，所以不是（**本质上讲，有延迟就有记忆**）
  * 可逆属性
    * 已知系统的输出，可以计算出唯一的输入
    * 恒等系统：如果一个A系统如果和一个逆系统B级联 （B是A的逆系统，然后结果等于y2=x1），那么这两个系统的整体级联就被称作恒等系统
    * 例子【7】，积分电路系统，这是一种可逆系统；逆系统是微分电路
    * 还有平方电路是不可逆的，因为无法知道结果是正号还是负号
  * 因果属性
    * 其中一种说法是，**当你给予激励时，它才会做出反应；另一种说法是，在任何时间点上，系统的响应只取决于该时间点之前的输入值，这意味着该系统无法遇见未来的输入** 原句: Output at any time depends only on input prior or equal to that time. or: system can't anticipate "future" inputs
    * 因果关系要求，输出无法预见，输入在未来某个时间点上会不一样；数学定义 $x_1(t) \rightarrow y_1(t)$, $x_2(t) \rightarrow y_2(t)$ IF $x_1(t) = x_2(t), \ t<t_0$ THEN $y_1(t) = y_2(t), \ t<t_0$ Same for discrete time
    * 例子：滑动平均系统【8】，它取决了未来的一个时间点，所以不具有因果关系，但在【9】中，它采用的是过去的两个时间点，所以是因果关系系统，**关键点就在与是否用了未来的时间点**
  * 稳定属性
    * 有界输出-有界输入的稳定性，本质上讲，若一个系统是稳定的，当且仅当输入有界则输出必有界的情况下 （For every bounded input the output is bounded）
    * 例如摆锤，正过来的时候是有界的，但当倒过来时，轻微的输入就会让输出变为无界的了，也就是会倒向的位置我们不确定
    * 如果我们这样做例如【10】中，就是一个反馈系统，通过反馈稳定了系统，**视觉到手这个过程**，反馈最重要的地方就是在用于稳定不稳定的系统
    * 例【11】，假设有一个积分电路，我们给他输入一个阶跃函数，或者是阶跃信号，输出被称作斜坡信号，现在的问题是斜坡是无界的吗，输入有界，但斜坡是无界的，因为如果尝试定义界限，那么随着时间T，增加，总会超过界限的，因此实际上**积分电路是不稳定的**
  * 时不变属性
    * 本质上说的是，原点是什么，系统并不在乎，换句话说，如果你取输入，在时间上对其位移，则其输入也会发生相应的时间位移 【12】；累加器例子【13】，累加器不关心时间尺度上的位移，其结果也只是发生位移
    * 例子：调制器【14】，两者结果并不相等，所以不是的，这个系统不是时不变的
  * 线性属性
    * 定义为：【15】假设有一些输入与相关输出，即这些输出具有任意线性组合与相关输出也有相同的线性组合

## 卷积

* 延时脉冲
  * 即把一个信号分解成一组延时脉冲的线性组合，从而得到线性时不变系统的表达式

* LTI System:
  * Delayed impulses  <-> Convolution
  * Complex exponential <-> Fourier analysis

<div align=center>
<img src="https://cdn.jsdelivr.net/gh/aaronmack/image-hosting@master/mathematics/信号与系统-卷积.4o56t7br2ccg.png" width="790">
</div>

* 【1】卷积和
* 【2】加权延时响应

* TO

## XXX
<div align=center>
<img src="" width="790">
</div>

# 信号与线性系统分析

> 全课程有三个关键问题

  * 基本信号与基本响应
  * 任意信号的分解
  * LTI系统分析

## Resource

* 信号与线性系统分析 吴大正 郭宝龙 https://www.bilibili.com/video/BV16E411E7PA?from=search&seid=8183378572286645236

## 章节
* 第一章 信号与系统概述
* 第二章 连续系统的时域分析
* 第三章 离散系统的时域分析
* 第四章 傅里叶变换与频域分析
* 第五章 离散傅里叶变换
* 第六章 拉普拉斯变换与复频域分析
* 第七章 z变换分析
* 第八章 系统的状态空间分析
* 第九章 小波分析理论简介

## 1.1信号的基本概念和分类
### Z1.1 信号的分类：确定与随机， 连续与离散

<div align=center>
<img src="https://cdn.jsdelivr.net/gh/aaronmack/image-hosting@master/mathematics/信号与线性系统分析-信号的分类-确定与随机-连续与离散.1oc4r33bmp5s.png" width="790">
</div>

### Z1.2 信号的分类：周期与非周期信号

<div align=center>
<img src="https://cdn.jsdelivr.net/gh/aaronmack/image-hosting@master/mathematics/信号与线性系统分析-信号的分类-周期与非周期信号.fhps6xp6g8g.png" width="790">
</div>

* 【1】多个信号之间如何判断是否为周期信号

### Z1.3 信号的分类：能量与功率信号， 因果与反因果

* [1] 求电阻的所有公式 https://zhidao.baidu.com/question/445889144.html

<div align=center>
<img src="https://cdn.jsdelivr.net/gh/aaronmack/image-hosting@master/mathematics/信号与线性系统分析-信号的分类-能量与功率信号-因果与反因果.36gc9o9uigao.png" width="790">
</div>

* 电阻的计算公式 [1]

```bash
p=w/t
p=UI
P=I^2 *R
P=Fv
P=U^2 /R
```

### Z1.4 信号的Matlab表示与绘图

<div align=center>
<img src="https://cdn.jsdelivr.net/gh/aaronmack/image-hosting@master/mathematics/信号与线性系统分析-信号的Matlab表示与绘图.7gvtcrh44iv4.png" width="790">
</div>

> Octave

```bash
scoop install octave
```

## 1.2基本信号
### Z1.5 阶跃函数

<div align=center>
<img src="https://cdn.jsdelivr.net/gh/aaronmack/image-hosting@master/mathematics/信号与线性系统分析-基本信号-阶跃函数.5g59hq2geydc.png" width="790">
</div>

* 2性质 (1) 表示分段常量信号，当前时刻原点处或0处就是t
* 2性质 (3) 最后积分的结果是一个斜坡函数

### Z1.6 冲激函数

<div align=center>
<img src="https://cdn.jsdelivr.net/gh/aaronmack/image-hosting@master/mathematics/信号与线性系统分析-基本信号-冲激函数.3wrkbm75s5xc.png" width="790">
</div>

### Z1.7 冲激函数的广义函数定义*

<div align=center>
<img src="https://cdn.jsdelivr.net/gh/aaronmack/image-hosting@master/mathematics/信号与线性系统分析-基本信号-冲激函数的广义函数定义.747ttv6e8q9s.png" width="790">
</div>

### Z1.8 冲激函数的取样性质

<div align=center>
<img src="https://cdn.jsdelivr.net/gh/aaronmack/image-hosting@master/mathematics/信号与线性系统分析-基本信号-冲激函数的取样性质.697qlw1m5da8.png" width="790">
</div>

* [1] 不包含区间t=0时刻，
* [2] 没有包含非0值的区间
* [3] 只有在τ=t时刻，也就是t-t=0时刻；所以让τ=t那么因为式子是对τ求积分，所以2t可以拿出去，最终结果分段表示
* [4] τ=0时刻，(0-1)^2可以拿出去，里面就可以分开讨论，当积分上限t<0时候，δ(τ)的积分为0，因为δ(τ)是在0时刻的，小于0就不包含了，当t>0的时候，从-1到t的积分，那么这个积分就包含δ(τ)了，值是1，那么结果就是ε(t)，ε(t)的定义就是小于0为0，大于0为1

### Z1.9 冲激函数的导数

<div align=center>
<img src="https://cdn.jsdelivr.net/gh/aaronmack/image-hosting@master/mathematics/信号与线性系统分析-基本信号-冲激函数的导数.2c9ea2egeirk.png" width="790">
</div>

* 0-0趋向于无穷大，0+0趋向于无穷小

### Z1.10 冲激函数的尺度变换

<div align=center>
<img src="https://cdn.jsdelivr.net/gh/aaronmack/image-hosting@master/mathematics/信号与线性系统分析-基本信号-冲激函数的尺度变换.1bkej18vuxpc.png" width="790">
</div>

* [1] 坐标轴的压缩与扩展就是它的尺度
* [2] at换成x；小于0的时候有个负号，但积分限也是反的，最后再反过来，就抵消掉了
* [3] 压缩了，长度从`-2~2`变为了`-1~1`, (4)变为(2)
* [4] sin(x)/x当趋近于0时是1，这里是2t，下面和上面都配上一个2，最后出来就是2
* [5] 看到不要慌，后面就是t=0时刻，所以t=1，前面就是$δ'(t)$的定义 $\int_{-\infin}^{\infin} f(t)\delta'(t) dt=-f'(0)$ 也就是-的f函数求导在t=0的时刻

* 注意：

<div align=center>
<img src="https://cdn.jsdelivr.net/gh/aaronmack/image-hosting@master/mathematics/信号与线性系统分析-基本信号-冲激函数注意点.4v0tqpvgacqo.png" width="790">
</div>

### Z1.11 单位脉冲序列与单位阶跃序列

* 主要内容：
1.单位脉冲序列的定义
2.单位阶跃序列的定义
* 基本要求：
1.掌握单位脉冲序列的取样性质
2.掌握单位脉冲序列与单位阶跃序列的关系公式

<div align=center>
<img src="https://cdn.jsdelivr.net/gh/aaronmack/image-hosting@master/mathematics/号与线性系统分析-基本信号-单位脉冲序列与单位阶跃序列.1l7l5m6m9wgw.png" width="790">
</div>

* 【1】坐标轴重的1,2,3...分别是(δ(k-1), δ(k-2), δ(k-3))

## 1.3信号的运算
### Z1.12 信号的加减乘运算

* 主要内容： 
1. 信号的加减乘运算规则 
* 基本要求： 
1. 掌握信号的加减乘运算规则

<div align=center>
<img src="https://cdn.jsdelivr.net/gh/aaronmack/image-hosting@master/mathematics/信号与线性系统分析-信号的加减乘运算.78d3lnqubiio.png" width="790">
</div>

### Z1.13 信号的反折

* 主要内容： 
1. 信号反转的定义 
* 基本要求： 
1. 掌握信号反转的定义和作图方法

<div align=center>
<img src="https://cdn.jsdelivr.net/gh/aaronmack/image-hosting@master/mathematics/信号与线性系统分析-信号的反折.4qf407b9zyww.png" width="790">
</div>

* 【1】离散信号的反折

### Z1.14 信号的平移

* 主要内容： 
1. 信号平移的定义 
2. 信号反转和平移的作图方法 
* 基本要求： 
1. 掌握信号的左移和右移 
2. 掌握反转和平移的作图方法

<div align=center>
<img src="https://cdn.jsdelivr.net/gh/aaronmack/image-hosting@master/mathematics/信号与线性系统分析-信号的平移.1xp69wr7qr4w.png" width="790">
</div>

* 黑板中的t_0=1+1/2处，注意t下面不是0，是点，式子是t=1+1/2

### Z1.15 信号的尺度变换

* 主要内容： 
1. 连续信号的尺度变化定义 
2. 连续信号的平移、反转和尺度变化的作图方法 
* 基本要求： 
1. 掌握连续信号的时域展宽和压缩 
2. 熟练信号平移、反转和尺度变化的作图顺序

<div align=center>
<img src="https://cdn.jsdelivr.net/gh/aaronmack/image-hosting@master/mathematics/信号与线性系统分析-信号的尺度变换.5wp2hx14a1s0.png" width="790">
</div>

* 注意求导的本质，**变化率**

## 1.4系统的概念及分类
### Z1.16 系统定义与典型系统举例（通信系统， 反馈系统等）

* 主要内容： 
1. 系统的定义和作用 
2. 典型通信系统和控制系统的举例 
* 基本要求： 
1. 了解系统的概念 
2. 了解通信系统和控制系统的框图

<div align=center>
<img src="https://cdn.jsdelivr.net/gh/aaronmack/image-hosting@master/mathematics/信号与线性系统分析-系统定义与典型系统举例.20upbhmtq728.png" width="790">
</div>

* 系统模型：对共性的抽取
* 状态：最精炼的一组数表示过去的状态

### Z1.17 系统分类：线性系统与非线性系统

* 主要内容： 
1. 线性系统的定义 
2. 线性系统的判定方法 
* 基本要求： 
1. 熟练掌握动态线性系统的三个判定条件

<div align=center>
<img src="https://cdn.jsdelivr.net/gh/aaronmack/image-hosting@master/mathematics/信号与线性系统分析-线性系统与非线性系统.4t4vwac8czuo.png" width="790">
</div>

* 线性系统：输入的线性组合产生响应的线性组合
* f(.) 代表可以是t也可以是k，.代表既可以是连续系统也可以是离散系统
* y_zs(.), zs(zero status)
* 【1】可以用零状态响应y_zs与零输入响应y_zi,也可以用零状态响应y_f零输入响应y_x
* 【2】这一项与零状态和零输入都有关，所以拆分不开，所以不是线性系统
* 【3】根据零输入响应的式子，(ax)^2 != a(x)^2

### Z1.18 系统分类：时变与时不变系统

* 主要内容： 
1. 时不变系统的定义和判定 
2. LTI连续系统的微积分特性 
* 基本要求： 
1. 掌握时不变系统的判定方法 
2. 掌握LTI连续系统的零状态响应满足的微积分特性

<div align=center>
<img src="https://cdn.jsdelivr.net/gh/aaronmack/image-hosting@master/mathematics/信号与线性系统分析-时变与时不变系统.22ne6tz88edc.png" width="790">
</div>

### Z1.19 系统分类：因果与非因果系统

* 主要内容： 
1. 因果系统的定义 
2. 举例--由LTI系统的性质求响应 
* 基本要求： 
1. 了解因果系统的判定方法 
2. 掌握由线性、时不变性、微积分特性求系统响应 

<div align=center>
<img src="https://cdn.jsdelivr.net/gh/aaronmack/image-hosting@master/mathematics/信号与线性系统分析-因果与非因果系统.2p7mgctsa16o.png" width="790">
</div>

* 四个概念：
  * (1) 可分解的概念，一个系统的响应是由零状态响应与零输入响应加起来产生的
  * (2) 线性概念，零状态响应与零输入响应满足线性关系
  * (3) 满足积分的性质
  * (4) 满足时不变性质
* 导数 -3δ(t)是如何来的
  * 乘法的导数，前导后不导加上前不导后导，后面那项求出来就是（-3deta）
  * 0状态响应把t看成0，中括号里面的算出来的得数就是-3。

## 1.5信号与系统分析方法及知识点导航 
### Z1.20 LTI系统的分析方法

<div align=center>
<img src="" width="790">
</div>

### 概念总结
* **确定信号**: 可用确定时间函数表示的信号
* **随机信号**: 信号不能用确切的函数描述， 只可能知道它的统计特性比如概率， 例如： 电子系统中的起伏热噪声、 雷电干扰信号
* **连续信号**: 连续时间范围内`(-∞<t<∞)`有定义的信号， 简称连续信号； 若其函数值也连续， 常称为模拟信号。
* **离散信号**: 仅在一些离散的瞬间才有定义的信号， 简称离散信号； 当取值为规定数值时， 常称为数字信号。
* **周期信号/非周期信号**: 周期信号(period signal)是定义在`(-∞,∞)`区间， 每隔一定时间T (或整数N )， 按相同规律重复变化的信号；不具有周期性的信号称为非周期信号
* **能量信号/功率信号**: [z13-信号的分类能量与功率信号-因果与反因果](#z13-信号的分类：能量与功率信号，-因果与反因果)
* **因果信号/反因果信号**: [z13-信号的分类能量与功率信号-因果与反因果](#z13-信号的分类：能量与功率信号，-因果与反因果)
* **阶跃函数**: [阶跃函数](#z15-阶跃函数)
* **冲激函数**: 单位冲激函数： 是奇异函数， 它是对强度极大， 作用时间极短的物理量的理想化模型(狄拉克提出)；理解: 高度无穷大， 宽度无穷小， 面积为1的对称窄脉冲。
* 冲激函数的广义函数定义: 简言之， 能从检验函数φ(t)中筛选出函数值φ(0)的广义函数就称为冲激函数δ(t)
* **单位冲激函数**
* **普通函数**
* **广义函数**
* **冲激函数的广义函数定义**
* **冲激偶**
* **冲激函数的尺度变化**
* **单位脉冲序列**
* **单位阶跃序列**
* **信号的加减乘运算**
* **信号的反转**
* **信号的平移**
* **信号的尺度变化**
* **系统(system)**：是指若干相互关联的事物组合而成具有特定功能的整体
* **系统的基本作用**：对输入信号进行加工和处理，将其转换为所需要的输出信号
* **系统模型**：对实际系统的理想化
* **集中参数系统**：忽略电磁辐射，即电场和磁场可分别用C,L表示，且能量传输不需要时间。电路尺寸<<波长。 
* **分布参数系统**：电磁辐射，电磁能在传输线连续分布，且能量传输需要时间。电路尺寸与波长相近。如微波传输系统
* **系统的状态**: 系统在任意时刻t0的状态，是指取该时刻最少数目的一组数，这组数连同t0以后的输入足以确定t>t0时刻的输出
* **线性系统是指满足线性性质的系统**
* **动态线性系统/即时系统(无记忆系统)**
* **完全响应**
* **零状态响应**
* **零输入响应**
* **时不变系统**: 系统输入延迟多少时间，其零状态响应也相应延迟多少时间
* **因果系统**: 因果系统是指零状态响应不会出现在激励之前的系统

## 2.1 LTI连续系统的响应 
### Z2.1 连续系统的描述-电路图建立微分方程 

* 主要内容： 
1. 数学模型 
2. 相似系统 
* 基本要求： 
1. 掌握连续电路系统的数学模型

<div align=center>
<img src="https://cdn.jsdelivr.net/gh/aaronmack/image-hosting@master/mathematics/信号与线性系统分析-连续系统的描述-电路图建立微分方程.4uuivqoeahkw.png" width="790">
</div>

### Z2.2 微分方程的模拟框图 

* 主要内容： 
1.  基本部件的模型 
2.  框图和方程之间的转换 
* 基本要求： 
1.  掌握框图的作图方法 
2.  熟练掌握框图和微分方程的关系

<div align=center>
<img src="https://cdn.jsdelivr.net/gh/aaronmack/image-hosting@master/mathematics/信号与线性系统分析-微分方程的模拟框图.5jpnsc4l448w.png" width="790">
</div>

* 积分器 - 电容就是一个积分器，充电的过程就是，我们一般用积分器代替微分器
* 微分器 - 对噪声太敏感了
* 围绕着求和器列方程。求和器是关键，因为求和器都是围绕着输入输出，一堆东西加起来等于输出
* 例三
  * 从框图中我们可以看出f(t)对应的输出是x(t)
  * 根据LTI特性，3x(t)肯定由3f(t)产生，4x'(t)由4f'(t)产生
  * f(t)对于输出是x(t)，故4f'(x)+3f(x)对于的输出是y(t)=4x'(t)+3x(t)

### Z2.3 微分方程的经典解法 

* 主要内容： 
1. 齐次解的定义和解法 
2. 特解的含义和全响应的求解 
* 基本要求： 
1. 熟悉齐次解和特解的函数形式 
2. 掌握微分方程的经典解法 

<div align=center>
<img src="https://cdn.jsdelivr.net/gh/aaronmack/image-hosting@master/mathematics/信号与线性系统分析-微分方程的经典解法.1vcw0b3dgd0g.png" width="790">
</div>

* 特解：满足这个方程的任意一个解
* 完全解是全响应
* 解齐次解先写出特征根方程
* 特解是关于原方程的一个解
* 例一 (1)
  * C1C2需要靠边界条件解出
* 例一 (2)
  * 注意 f(t) = e^(-2t), 其中-2，与λ1相等了，所以需要考虑另一种形式
  * 始终将C1+Q0当作整体，因为他们本来就是一个变量

### Z2.4 系统的初始值 

* 主要内容： 
1. 初始值的定义 
2. 初始值的求法 
* 基本要求： 
1. 了解初始值的概念 
2.  掌握系数匹配法

<div align=center>
<img src="https://cdn.jsdelivr.net/gh/aaronmack/image-hosting@master/mathematics/信号与线性系统分析-系统的初始值.73khqgz0d8n4.png" width="790">
</div>

* 【1】例一输入的数值是f(t)=ε(t),带入到式子中就是2δ(t), 见[冲激函数]
* 【2】思考为什么只有y''才可以产生δ,如果是y'产生δ的话，那么y''就会产生一个δ',所以只有可能是最高阶产生的
* 第一点：最高阶中包含一个δ，那么比它低一阶的这个信号里面必然产生一个不相等，必须有个跃变，有跃变后求导才能产生δ
* 第二点：y'中不包含δ，所以意味着原函数是相等的，不能产生δ，（因为y'不含有δ，所以y（t）在0处一定没有突变，所以y导在0处左右值相等。）
* y(t)与ε(t)都是有限函数，求无穷小就是0

### Z2.5 零输入响应  

* 主要内容：
1. 零输入响应的初始值
2. 零输入响应的求解步骤
* 基本要求：
1. 了解零输入响应的初始值
2. 掌握求解方法

<div align=center>
<img src="https://cdn.jsdelivr.net/gh/aaronmack/image-hosting@master/mathematics/信号与线性系统分析-零输入响应.16yosiufzx34.png" width="790">
</div>

### Z2.6 零状态响应  

* 主要内容：
1. 零状态响应的初始值
2. 全响应的求解
* 基本要求：
1. 掌握零状态的求解方法

<div align=center>
<img src="https://cdn.jsdelivr.net/gh/aaronmack/image-hosting@master/mathematics/信号与线性系统分析-零状态响应.7kfpxbywly80.png" width="790">
</div>

### Z2.7 响应分类 

* 主要内容：
1. 固有响应和强迫响应
2. 暂态响应和稳态响应
* 基本要求：
1. 掌握响应分类的判定方法

<div align=center>
<img src="https://cdn.jsdelivr.net/gh/aaronmack/image-hosting@master/mathematics/信号与线性系统分析-响应分类.79rey1hxkr9c.png" width="790">
</div>

### Z2.8 Maltab求解系统的响应 

* 主要内容：
1.  Matlab求解系统响应的函数
2.  系统模型建立的函数
* 基本要求：
1. 掌握系统响应求解的函数

<div align=center>
<img src="https://cdn.jsdelivr.net/gh/aaronmack/image-hosting@master/mathematics/信号与线性系统分析-Maltab求解系统的响应.1njvf87cbmww.png" width="790">
</div>

## 2.2 冲激响应与阶跃响应 
### Z2.9 冲激响应的定义和求法 

* 主要内容：
1.  冲激响应的定义
2.  冲激响应的求法
* 基本要求：
1. 掌握冲激响应的定义
2. 掌握冲激响应的求法

<div align=center>
<img src="https://cdn.jsdelivr.net/gh/aaronmack/image-hosting@master/mathematics/信号与线性系统分析-冲激响应的定义和求法.3x0899hqkev4.png" width="790">
</div>

### Z2.10 阶跃响应的定义和求法 

* 主要内容：
1. 阶跃响应的定义
2. 阶跃响应的求法
* 基本要求：
1. 掌握阶跃响应的求法

<div align=center>
<img src="https://cdn.jsdelivr.net/gh/aaronmack/image-hosting@master/mathematics/信号与线性系统分析-阶跃响应的定义和求法.62ceb88b77r4.png" width="790">
</div>

* 第一个思考:Why? - ε(t)这边不包含冲击，没有冲击意味着导数不能产生差别，导数没有差别，原函数就更不可能有差别，所以g1和g1'只可能相等；因为假如左侧不相等，那么2阶导数与1阶导数会产生冲击
* 第一个思考:Why? 特解=0.5，(特解是满足这个方程的一个解)，假设 特解=q，也就是g1(t)=q,带进去方程，一二阶导数都为0，ε(t)=1, 所以方程为2q=1,q=0.5
* 第二个思考:Why? - 线性的组合性质

### Z2.11 Maltab求解冲激响应和阶跃响应 

* 主要内容：
1. Matlab求解冲激响应和阶跃响应的函数
* 基本要求：
1. 了解冲激响应和阶跃响应的Matlab求解方法

<div align=center>
<img src="https://cdn.jsdelivr.net/gh/aaronmack/image-hosting@master/mathematics/信号与线性系统分析-Maltab求解冲激响应和阶跃响应.2bf620qmz29s.png" width="790">
</div>

## 2.3 卷积积分 
### Z2.12 信号的时域分解 

* 主要内容：
1. 任意信号时域分解的方法
* 基本要求：
1. 了解时域分解公式的含义

<div align=center>
<img src="https://cdn.jsdelivr.net/gh/aaronmack/image-hosting@master/mathematics/信号与线性系统分析-信号的时域分解.us14vdxdrr4.png" width="790">
</div>

* p(t)可以理解为一种单位，都可以与p(t)进行任何分解，例如f1(t)=A高度Δp(t)
* f(t)*δ(t) --> 卷积运算

### Z2.13 卷积公式 

* 主要内容：
1. 卷积积分的定义
2. 零状态响应的卷积求解公式
* 基本要求：
1. 掌握卷积积分的重要公式

<div align=center>
<img src="https://cdn.jsdelivr.net/gh/aaronmack/image-hosting@master/mathematics/信号与线性系统分析-卷积公式.1hflx4stw3s0.png" width="790">
</div>

* 信号输入f(t),得到y_zs(t),根据LTI的性质,相应的变换,得到最后公式
* 根据<信号的时域分解>的那一节,最后推导出来的卷积运算,我们也可以推导出,上一节推导的公式其实是自己和自己卷积,无限多的冲击

### Z2.14 卷积积分的图解法 

* 主要内容：
1. 图解法步骤
2. 图解法作用
* 基本要求：
1. 掌握图解法
1. 会用图解法求某一点的卷积结果

<div align=center>
<img src="https://cdn.jsdelivr.net/gh/aaronmack/image-hosting@master/mathematics/信号与线性系统分析-卷积积分的图解法.1xn3u4z2teps.png" width="790">
</div>

* 卷积就是计算两个信号相互重叠的面积是多少(相加), **所以这里就是为什么GAMES101中,门函数可以去去除高频的信息**

### Z2.15 卷积积分的代数性质 

* 主要内容：
1. 卷积积分满足乘法的三律
2. 复合系统的冲激响应
* 基本要求：
1. 掌握复合系统冲激响应的求法

<div align=center>
<img src="https://cdn.jsdelivr.net/gh/aaronmack/image-hosting@master/mathematics/信号与线性系统分析-卷积积分的代数性质.ir6m6wk7gkw.png" width="790">
</div>

### Z2.16 奇异函数的卷积特性 

* 主要内容：
1. 奇异函数的卷积特性
* 基本要求：
1. 掌握奇异函数的卷积特性公式

<div align=center>
<img src="https://cdn.jsdelivr.net/gh/aaronmack/image-hosting@master/mathematics/信号与线性系统分析-奇异函数的卷积特性.4x5i3oldln4.png" width="790">
</div>

### Z2.17 卷积的微积分性质 

* 主要内容：
1. 卷积的微积分性质
2. 使用微积分性质简化卷积计算的条件
* 基本要求：
1. 掌握卷积的微积分性质

<div align=center>
<img src="https://cdn.jsdelivr.net/gh/aaronmack/image-hosting@master/mathematics/信号与线性系统分析-卷积的微积分性质.6a605zlmh7y8.png" width="790">
</div>

* f1卷积f2，对它求n阶导数，它就等于对其中一个函数求n阶导数，对另外一个函数卷积

### Z2.18 卷积的时移特性 

* 主要内容：
1. 卷积的时移特性
* 基本要求：
1.  掌握卷积的时移特性
2.  熟练运用时移特性简化卷积计算

<div align=center>
<img src="https://cdn.jsdelivr.net/gh/aaronmack/image-hosting@master/mathematics/信号与线性系统分析-卷积的时移特性.6fdha6uppqbk.png" width="790">
</div>

### Z2.19 常用的卷积重要公式 

* 主要内容：
1. 卷积的常用重要公式
* 基本要求：
1. 熟练常用的卷积公式

<div align=center>
<img src="https://cdn.jsdelivr.net/gh/aaronmack/image-hosting@master/mathematics/信号与线性系统分析-常用的卷积重要公式.ujkahlfxb6o.png" width="790">
</div>

### Z2.20 综合举例：卷积的多种求解 

* 主要内容：
1. 卷积的多种求解方法
* 基本要求：
1. 熟练各种卷积求解方法

<div align=center>
<img src="https://cdn.jsdelivr.net/gh/aaronmack/image-hosting@master/mathematics/信号与线性系统分析-卷积的多种求解.78tjkg2q21kw.png" width="790">
</div>

* 图像的卷积，一维下离散信号与另一个卷积核的卷积操作，例如3*3卷积核（就是一个像素与九个像素的卷积操作）

### Z2.21 综合举例：用梳状函数卷积产生周期信号 

* 主要内容：
1. 梳状函数的定义
2. 信号与梳状函数卷积
* 基本要求：
1. 了解信号与梳状函数卷积产生周期信号的过程

<div align=center>
<img src="https://cdn.jsdelivr.net/gh/aaronmack/image-hosting@master/mathematics/信号与线性系统分析-用梳状函数卷积产生周期信号.l51ljmwhjxc.png" width="790">
</div>

* 【1】信号交叠的情况

### Z2.22 综合举例：矩形脉冲的卷积产生三角形和梯形脉冲 

* 主要内容：
1. 同门宽矩形脉冲的卷积结果
2. 不同门宽矩形脉冲的卷积结果
* 基本要求：
1. 掌握同门宽矩形脉冲的卷积产生三角形脉冲

<div align=center>
<img src="https://cdn.jsdelivr.net/gh/aaronmack/image-hosting@master/mathematics/信号与线性系统分析-矩形脉冲的卷积产生三角形和梯形脉冲.4gvypn9bh1q8.png" width="790">
</div>

### Z2.23 卷积的Matlab求解

* 主要内容：
1. 求连续信号的卷积的函数
* 基本要求：
1. 掌握MATLAB求连续信号卷积的方法

<div align=center>
<img src="https://cdn.jsdelivr.net/gh/aaronmack/image-hosting@master/mathematics/信号与线性系统分析-卷积的Matlab求解.74ywmhf05jeo.png" width="790">
</div>

## 2.4 相关函数  
### Z2.24 互相关和自相关函数的定义 

* 主要内容：
1. 互相关函数的定义
2. 自相关函数的定义
* 基本要求：
1. 了解相关函数的定义

<div align=center>
<img src="https://cdn.jsdelivr.net/gh/aaronmack/image-hosting@master/mathematics/信号与线性系统分析-互相关和自相关函数的定义.3kzha72gre68.png" width="790">
</div>

* R_12(τ) -> 就是原函数比后面的函数超前一个τ，然后计算一个积分

### Z2.25 相关与卷积的比较 

* 主要内容：
1. 相关与卷积的区别
* 基本要求：
1. 了解相关与卷积的图解过程
2. 了解相关与卷积相等的条件

<div align=center>
<img src="https://cdn.jsdelivr.net/gh/aaronmack/image-hosting@master/mathematics/信号与线性系统分析-相关与卷积的比较.4p7am2jgwneo.png" width="790">
</div>

### Z2.26 应用案例：对通信信道的不利影响进行建模 

* 主要内容： 
1. 码间干扰的概念 
* 基本要求： 
1. 了解码间干扰的概念

<div align=center>
<img src="https://cdn.jsdelivr.net/gh/aaronmack/image-hosting@master/mathematics/信号与线性系统分析-对通信信道的不利影响进行建模.3ls4sim3h4u8.png" width="790">
</div>

### Z2.27 应用案例：多径传输中的失真问题 

* 主要内容： 
1. 多径传输失真的概念 
* 基本要求： 
1. 了解多径传输失真问题

<div align=center>
<img src="https://cdn.jsdelivr.net/gh/aaronmack/image-hosting@master/mathematics/信号与线性系统分析-多径传输中的失真问题.5x6p00ombwu8.png" width="790">
</div>

## 2.5 连续系统的微分算子描述  

### Z2.28 微分算子P的定义 

* 主要内容： 
1. 微分算子的定义 
2. 微分算子方程 
* 基本要求： 
1. 了解微分算子定义 
2. 了解微分算子方程的转变方法

<div align=center>
<img src="https://cdn.jsdelivr.net/gh/aaronmack/image-hosting@master/mathematics/信号与线性系统分析-微分算子P的定义.19rwqyhwt7gg.png" width="790">
</div>

* 看着会非常舒服

### Z2.29 微分算子的性质 

* 主要内容： 
1. 微分算子的主要性质 
* 基本要求： 
1. 了解微分算子的主要性质

<div align=center>
<img src="https://cdn.jsdelivr.net/gh/aaronmack/image-hosting@master/mathematics/信号与线性系统分析-微分算子的性质.6z59y6kzsqrk.png" width="790">
</div>

* 性质三：不能消的根源是它的导数相同，不代表它的原函数相同，还有它的系统可能消去之后就降阶了，还有就是方程一般左边为结构（y(t)），右边为一个输入(f(t))，输入可以为0，但结构还是存在的
* 性质四：先积分后微分可消，反之不行（因为有个待定系数）；那么交换后再消可以吗？也不可以，这里是分母上的，是负幂

### Z2.30 传输算子H(P) 

* 主要内容： 
1. 传输算子的定义 
* 基本要求： 
1. 了解传输算子的定义求法 

<div align=center>
<img src="https://cdn.jsdelivr.net/gh/aaronmack/image-hosting@master/mathematics/信号与线性系统分析-传输算子H(P).7ily2babl01s.png" width="790">
</div>

* 一种表示方法

### Z2.31 RLC微分算子模型及算子方程建立 

* 主要内容： 
1. R、L、C元件的算子模型 
2. 系统算子方程的建立 
* 基本要求： 
1. 掌握R、L、C元件的算子模型 
2. 了解RLC系统算子方程的建立

<div align=center>
<img src="https://cdn.jsdelivr.net/gh/aaronmack/image-hosting@master/mathematics/信号与线性系统分析-RLC微分算子模型及算子方程建立.luxut5bu3e8.png" width="790">
</div>

* 多输出情况下，i_1(t)和i_2(t)对应会有H_1(P),H_2(P)
* [1] 这里是1H，替换成算子模型就是PL，一个P，就这样，全部替换整个电路，列出方程;绕行一周，电压降的代数和为0
* [2] 第一个网孔，1F这里走了两路，i1-i2

### Z2.32 算子法求连续系统的冲激响应

<div align=center>
<img src="" width="790">
</div>

### 概念总结
* **数学模型**
* **相似系統**
* **模拟框图**
* **微分方程的经典解法**
* **零状态响应**
* **零输入响应**
* **固有响应(自由响应)**: 固有响应仅与系统本身的特性有关，而与激励的函数形式无关。齐次解的函数形式仅与特征方程的根有关，特征方程的根称为系统的“固有频率”，齐次解常称为系统的固有响应或自由响应。
* **强迫响应**: 强迫响应与激励的函数形式有关。特解的函数形式与激励的函数形式有关，常称为强迫响应
* **暂态响应**: 暂态响应是指响应中暂时出现的分量，随着时间的增长，它将消失。
* **稳态响应**: 稳态响应是稳定的分量，若存在，通常表现为阶跃函数和周期函数。比如，电路系统中的直流稳态响应和正弦稳态响应
* **冲激响应**: 冲激响应是由单位冲激函数δ(t)所引起的零状态响应，记为h(t)
* **阶跃响应**: 阶跃响应是由单位阶跃函数ε(t)所引起的零状态响应，记为g(t)
* **信号的时域分解**
* **卷积公式**
* **卷积积分(卷积)**
* **卷积积分图解**
* **梳状函数**: 周期为T的周期单位冲激函数序列
* **梯形函数**
* **相关函数(相关积分) 互相关函数/自相关函数**
* **实偶函数**
* **码间干扰**
* **应用案例：混响、逆系统、反卷积**
* **微分算子方程**
* **传输算子**
* **RLC微分算子**

## 3.1差分方程的建立及经典解法 

### z3.1 离散系统的解析描述-建立差分方程 

* 主要内容： 
1. 差分的定义 
2. 差分方程的定义 
* 基本要求： 
1. 掌握一阶后向差分的定义 
2. 掌握差分方程的一般形式

<div align=center>
<img src="https://cdn.jsdelivr.net/gh/aaronmack/image-hosting@master/mathematics/信号与线性系统分析-离散系统的解析描述之建立差分方程.51f4t1coccg0.png" width="790">
</div>

* 回顾第二章：
  * LTI线性时不变系统，初始状态{x}, 在输入f(t)和x的作用下，产生响应y(t)=y_x+y_f(t)，分为两部分，第一部分是x产生的响应，叫零输入响应，另一部分是由f(t)产生的响应，叫零状态响应， 零输入+零状态就是y(t)
  * 基本信号产生的响应：δ(t) 产生h(t), ε(t) 产生g(t)
  * 分解 `f(t) == f(t)*δ(t)`; 分解 `y_f(t) == f(t)*h(t)`
  * 系统用微分方程描述（线性常系数），定义算子P，传输算子H(P)
* 离散与连续的差别，一个变量是k，一个变量时t

### z3.2 差分方程的模拟框图 

* 主要内容： 
1. 基本部件 
2. 由框图建立差分方程 
* 基本要求： 
1. 掌握框图和差分方程之间的转换方法 

<div align=center>
<img src="https://cdn.jsdelivr.net/gh/aaronmack/image-hosting@master/mathematics/信号与线性系统分析-差分方程的模拟框图.1j5qmn0q7br4.png" width="790">
</div>

*  由【1】得【2】；我们之前设置过了中间变量x_k, 根据LTI特性，我们想要得到4x(k-1),那么输入也需要是4f(k-1),输出扩大4倍，输入扩大4倍

### z3.3 差分方程的经典解法 

* 主要内容： 
1. 递推迭代 
2. 经典法 
* 基本要求： 
1. 了解递推迭代法 
2. 掌握经典法的齐次解和特解的求解方法

<div align=center>
<img src="https://cdn.jsdelivr.net/gh/aaronmack/image-hosting@master/mathematics/信号与线性系统分析-差分方程的经典解法.3vmlq6g60s1s.png" width="790">
</div>

* 不要直接根据方程建立框图，用一个中间变量辅助
* 【1】特征根方程 解出特征根（第二步是如何来的，将负幂变为正幂，两边同乘λ^2）
* 【2】移项
* 【3】β=0.01, 所以等于100N
* 【4】式子，是列出**全解**，其中C=10.1-N-N/β
* 这里的ε代表小于零的时候是0，而不像≥0的定义那样，＜0的时候未定义

### z3.4 零输入响应的定义和求解 

* 主要内容： 
1. 零输入响应的定义 
2. 零输入响应的求解步骤 
* 基本要求： 
1. 掌握零输入响应的初始值 
2. 掌握零输入响应的求解方法 

<div align=center>
<img src="https://cdn.jsdelivr.net/gh/aaronmack/image-hosting@master/mathematics/信号与线性系统分析-零输入响应的定义和求解.qoxcj4imuz4.png" width="790">
</div>

### z3.5 零状态响应的定义和求解 

* 主要内容： 
1. 零状态响应的定义 
2. 零状态响应的求解 
* 基本要求： 
1. 掌握零状态响应的求解方法

<div align=center>
<img src="https://cdn.jsdelivr.net/gh/aaronmack/image-hosting@master/mathematics/信号与线性系统分析-零状态响应的定义和求解.1z1iq4rxyvds.png" width="790">
</div>

* k≥0，但可以延申到＜0，因为零输入响应不考虑输入，小于0大于0变化规律是一样的

### z3.6 应用案例：斐波那契(Fibonacci)数列问题 

* 主要内容： 
1. 斐波那契数列的差分方程 
* 基本要求： 
1. 了解斐波那契数列问题

<div align=center>
<img src="https://cdn.jsdelivr.net/gh/aaronmack/image-hosting@master/mathematics/信号与线性系统分析-斐波那契(Fibonacci)数列问题.6nds6dej27eo.png" width="790">
</div>

### z3.7 应用案例：空运控制系统 

* 主要内容： 
1. 简单空运控制系统的差分方程 
* 基本要求： 
1. 了解简单空运控制系统的模型

<div align=center>
<img src="https://cdn.jsdelivr.net/gh/aaronmack/image-hosting@master/mathematics/信号与线性系统分析-空运控制系统.2i9mg8zzuzgg.png" width="790">
</div>

### z3.8 应用案例：RC取样输入和输出关系 

* 主要内容： 
1. RC取样输入和输出的关系 
* 基本要求： 
1. 了解RC取样输入和输出的差分方程的建立方法

<div align=center>
<img src="https://cdn.jsdelivr.net/gh/aaronmack/image-hosting@master/mathematics/信号与线性系统分析-RC取样输入和输出关系.59ljgzrx31c0.png" width="790">
</div>

* 第二页顶部的第二个式子是将第一个式子转为标准的线性常系数差分方程列出的

### z3.9 Matlab求解离散系统的零状态响应 

* 主要内容： 
1. Matlab求解离散系统响应的函数 
* 基本要求： 
1. 了解Matlab求解离散系统零状态响应的函数调用方法 

<div align=center>
<img src="https://cdn.jsdelivr.net/gh/aaronmack/image-hosting@master/mathematics/信号与线性系统分析-Matlab求解离散系统的零状态响应.6puzofy2jdhc.png" width="790">
</div>

## 3.2基本信号与基本响应 

### z3.10 离散信号表示 

* 主要内容： 
1. 图形表示 
2. 解析表示和集合表示 
* 基本要求： 
1. 了解解析表示方法 
2. 了解集合表示方法

<div align=center>
<img src="https://cdn.jsdelivr.net/gh/aaronmack/image-hosting@master/mathematics/信号与线性系统分析-离散信号表示.48dg1qx8fzgg.png" width="790">
</div>

### z3.11 单位脉冲序列  

* 主要内容： 
1. 单位脉冲序列的定义和运算 
2. 单位脉冲序列的性质 
* 基本要求： 
1. 掌握单位脉冲序列的定义和运算规则 
2. 掌握单位脉冲序列的取样性质

<div align=center>
<img src="https://cdn.jsdelivr.net/gh/aaronmack/image-hosting@master/mathematics/信号与线性系统分析-单位脉冲序列.215ms5r9xti8.png" width="790">
</div>

### z3.12 单位阶跃序列  

* 主要内容： 
1. 单位阶跃序列的定义和运算 
2. 单位阶跃序列和单位脉冲序列的关系 
* 基本要求： 
1. 掌握阶跃序列的运算 
2. 掌握单位阶跃序列和单位脉冲序列的关系

<div align=center>
<img src="https://cdn.jsdelivr.net/gh/aaronmack/image-hosting@master/mathematics/信号与线性系统分析-单位阶跃序列.6xer28wps2o0.png" width="790">
</div>

### z3.13 单位脉冲响应的定义和求解 

* 主要内容： 
1. 单位脉冲响应的定义 
2. 单位脉冲响应的求解 
* 基本要求： 
1. 掌握单位脉冲响应的求解方法

<div align=center>
<img src="https://cdn.jsdelivr.net/gh/aaronmack/image-hosting@master/mathematics/信号与线性系统分析-单位脉冲响应的定义和求解.6syugnxf7wn4.png" width="790">
</div>

* 【1】y(k) 换 h(k)响应, f(k) 换 δ(k)输入

### z3.14 单位阶跃响应的定义和求解 

* 主要内容： 
1. 单位阶跃响应的定义 
2. 单位阶跃响应的求解 
* 基本要求： 
1. 掌握单位阶跃响应的求解方法

<div align=center>
<img src="https://cdn.jsdelivr.net/gh/aaronmack/image-hosting@master/mathematics/信号与线性系统分析-单位阶跃响应的定义和求解.1ijhixf5fkww.png" width="790">
</div>

### z3.15 单位阶跃响应与单位脉冲响应之间的关系 

* 主要内容： 
1. 单位阶跃响应与单位脉冲响应之间的关系 
* 基本要求： 
1. 掌握 g(k) 和 h(k) 之间的关系

<div align=center>
<img src="https://cdn.jsdelivr.net/gh/aaronmack/image-hosting@master/mathematics/信号与线性系统分析-单位阶跃响应与单位脉冲响应之间的关系.10g1rh0do21c.png" width="790">
</div>

### z3.16 Matlab求解单位脉冲响应 

* 主要内容： 
1. Matlab求解单位脉冲响应的函数 
* 基本要求： 
1. 掌握单位脉冲响应的Matlab求解方法

<div align=center>
<img src="https://cdn.jsdelivr.net/gh/aaronmack/image-hosting@master/mathematics/信号与线性系统分析-Matlab求解单位脉冲响应.4xvx1rdcxwjk.png" width="790">
</div>

## 3.3卷积和 

### z3.17 序列的时域分解 

* 主要内容： 
1. 序列的时域分解公式 
* 基本要求： 
1. 了解序列的时域分解方法

<div align=center>
<img src="https://cdn.jsdelivr.net/gh/aaronmack/image-hosting@master/mathematics/信号与线性系统分析-序列的时域分解.1bjwt1gnfzy8.png" width="790">
</div>

### z3.18 卷积和公式 

* 主要内容： 
1. 卷积和的定义 
2. 卷积和的计算 
* 基本要求： 
1. 掌握卷积和公式

<div align=center>
<img src="https://cdn.jsdelivr.net/gh/aaronmack/image-hosting@master/mathematics/信号与线性系统分析-卷积和公式.3hs6fnj0wny8.png" width="790">
</div>

### z3.19 卷积和的图解法 

* 主要内容： 
1. 卷积和的图解法 
* 基本要求： 
1. 了解卷积和的图解过程

<div align=center>
<img src="https://cdn.jsdelivr.net/gh/aaronmack/image-hosting@master/mathematics/信号与线性系统分析-卷积和的图解法.1gggglrbh0zk.png" width="790">
</div>

* 卷积是求交叠的面积，所以这里是求和运算

### z3.20 卷积和的不进位乘法运算 

* 主要内容： 
1. 卷积和的不进位乘法运算规则 
* 基本要求： 
1. 掌握卷积和的不进位乘法运算方法

<div align=center>
<img src="https://cdn.jsdelivr.net/gh/aaronmack/image-hosting@master/mathematics/信号与线性系统分析-卷积和的不进位乘法运算.60p0utihyb5s.png" width="790">
</div>

* 【1】乘积的结果，不管怎么乘，只要最终序号加起来是k就可以，例如f1(-1)f2(k+1), -1+k-1 = k，就可以

### z3.21 卷积和的性质 

* 主要内容： 
1. 卷积和的运算规则 
2. 常用卷积和的公式 
* 基本要求： 
1. 掌握卷积和的性质及其重要公式 

<div align=center>
<img src="https://cdn.jsdelivr.net/gh/aaronmack/image-hosting@master/mathematics/信号与线性系统分析-卷积和的性质.s6d5z9xvjt.png" width="790">
</div>

### z3.22 卷积和的Matlab求解 

* 主要内容： 
1. 卷积和的Matlab求解方法 
* 基本要求： 
1. 掌握卷积和的Matlab求解函数

<div align=center>
<img src="https://cdn.jsdelivr.net/gh/aaronmack/image-hosting@master/mathematics/信号与线性系统分析-卷积和的Matlab求解.t36ibn9hnsw.png" width="790">
</div>

## 3.4离散系统的差分算子描述 

### z3.23 差分算子E的定义 

<div align=center>
<img src="https://cdn.jsdelivr.net/gh/aaronmack/image-hosting@master/mathematics/信号与线性系统分析-差分算子E的定义.74t62pvpzfo.png" width="790">
</div>

* 引入算子：差分方程 -> 代数方程

### z3.24 离散系统的差分算子方程 

* 主要内容： 
1. 离散系统的差分算子方程的定义 
* 基本要求： 
1. 掌握由差分方程建立差分算子方程的方法

<div align=center>
<img src="https://cdn.jsdelivr.net/gh/aaronmack/image-hosting@master/mathematics/信号与线性系统分析-离散系统的差分算子方程.65p0kplws4cg.png" width="790">
</div>

### z3.25 传输算子H(E)  

* 主要内容： 
1. 传输算子的定义 
2. 传输算子的注意事项 
* 基本要求： 
1. 掌握传输算子的求解方法

<div align=center>
<img src="https://cdn.jsdelivr.net/gh/aaronmack/image-hosting@master/mathematics/信号与线性系统分析-传输算子H(E).5yf048db9wxs.png" width="790">
</div>

* [1] 差分算子H(E)
* [2] 分母部分是系统结构(第一个式子①中f(k)和x(k)产生的)，分子部分是第二个求和式产生的
* [3] 同乘E^2得到最后式子

### z3.26 算子法求离散系统的单位脉冲响应

<div align=center>
<img src="" width="790">
</div>

### 概念总结
* **移位序列**： 设有序列f(k), 则...f(k+2), f(k+1), f(k-1)，f(k-2)，... 等称为f(k)的移位序列
* **一阶前向差分定义**: △f(k) = f(k+1) –f(k) 
* **一阶后向差分定义**：▽f(k) = f(k)–f(k –1)
* **差分方程**：由未知输出序列项与输入序列项构成的方程
* **差分方程的阶数**: 未知变量最高序号与最低序号的差
* **线性常系数差分方程**: 用于描述LTI离散系统
* **数乘器/加法器/迟延单元(移位器)**
* **齐次解/特征根/特解/全解**
* **自由响应/强迫响应/固有响应暂态响应/稳态响应**
* **单位脉冲序列/单位阶跃序列**
* **延时/迭分**
* **单位脉冲响应/单位阶跃响应**
* **序列的时域分解**
* **卷积和公式(卷积)**
* **卷积和的不进位乘法运算**
* **卷积和的性质(交换，分配，结合)**
* **差分算子E**
* **差分算子方程**
* **传输算子**

## 4.1信号分解为正交函数

### Z4.1 矢量的正交分解

* 主要内容： 
1. 矢量正交、正交矢量集的定义 
2. 矢量的正交分解 
* 基本要求： 
1. 掌握矢量正交、正交矢量集和矢量正交分解的基本概念 
2. 了解矢量正交分解对信号正交分解的启示 

<div align=center>
<img src="https://cdn.jsdelivr.net/gh/aaronmack/image-hosting@master/mathematics/信号与线性系统分析-矢量的正交分解.4sr76mduj6v4.png" width="790">
</div>

* 正交的时候没有办法表示

### Z4.2 信号的正交分解

* 主要内容： 
1. 信号正交的定义 
2. 正交函数集、完备正交函数集的定义 
3. 信号的正交分解 
* 基本要求： 
1. 掌握信号正交、正交函数集和完备正交函数集的基本概念 
2. 掌握信号正交分解的方法

<div align=center>
<img src="https://cdn.jsdelivr.net/gh/aaronmack/image-hosting@master/mathematics/信号与线性系统分析-信号的正交分解.5vl6w5y5qbnk.png" width="790">
</div>

* [1] 实函数正交的时候就没有共轭了
* [2] 完全平方与偏导； 
  1. 两两信号不一样正交为0，相同的留下了
  2. 对C_i求偏导，
     1. -2C_i看作常数拿出去就是-2x1=-2
     2. C_i^2看作常数，拿出去就是2C_i,
* [3] -2+2C=0； 2C=2; C=1

### Z4.3 帕斯瓦尔定理

* 主要内容： 
1. 信号的能量 
2. 帕斯瓦尔定理 
* 基本要求： 
1. 掌握信号能量的基本概念 
2. 了解帕斯瓦尔方程的物理含义和数学本质

<div align=center>
<img src="https://cdn.jsdelivr.net/gh/aaronmack/image-hosting@master/mathematics/信号与线性系统分析-帕斯瓦尔定理.5tw1mrc7591c.png" width="790">
</div>

## 4.2周期信号的傅里叶级数

### Z4.4 三角形式的傅里叶级数

* 主要内容： 
1. 周期信号三角形式的傅里叶级数 
2. 狄里赫利条件 
3. 吉布斯现象 
* 基本要求： 
1. 掌握周期信号三角形式傅里叶级数和谐波的基本概念 
2. 了解狄里赫利条件 
3. 了解吉布斯现象的原理

<div align=center>
<img src="https://cdn.jsdelivr.net/gh/aaronmack/image-hosting@master/mathematics/信号与线性系统分析-三角形式的傅里叶级数.313jqmfipwcg.png" width="790">
</div>

* [1] 这里写a_0/2的目的是，为了使a_0和a_n的公式是一样的 （例如使a_n中n=0）；a_0/2 -> a_0包含在a_n,n=0,1,2...，n从0开始
* [2] 这个公式里面只有a_0，a_n，b_n未知，其余都是已知
* [3] 三角函数公式：和差化积

### Z4.5 周期信号波形对称性和谐波特性

* 主要内容： 
1. 奇函数、偶函数、奇谐函数和偶谐函数 
2. 谐波特性 
* 基本要求： 
1. 了解奇函数、偶函数、奇谐函数和偶谐函数的谐波特性

<div align=center>
<img src="https://cdn.jsdelivr.net/gh/aaronmack/image-hosting@master/mathematics/信号与线性系统分析-周期信号波形对称性和谐波特性.j6g1nfh3o3s.png" width="790">
</div>

* [1] **f(t)为偶函数**：当f(t)为偶函数，偶偶为偶，偶奇为奇，所以b_n=0,因为sin为奇函数； a_n的计算可以为$2\cdot \frac{2}{T}\int_0^{\frac{T}{2}}$
* [2] 这里是举例的函数图像，计算过程参照上一节中的

### Z4.6 指数形式的傅里叶级数

* 主要内容：
1. 指数形式的傅里叶级数
2. 复傅里叶系数
* 基本要求：
1. 掌握傅里叶级数的指数形式展开式
2. 掌握复傅里叶系数的基本概念

<div align=center>
<img src="https://cdn.jsdelivr.net/gh/aaronmack/image-hosting@master/life/信号与线性系统分析-指数形式的傅里叶级数.79e7yf88g934.png" width="790">
</div>

### Z4.7 两种傅里叶级数展开形式的关系

* 主要内容：
1. 三角形式和指数形式傅里叶级数的相互关系
* 基本要求：
1. 掌握三角形式和指数形式傅里叶级数的相互关系

<div align=center>
<img src="https://cdn.jsdelivr.net/gh/aaronmack/image-hosting@master/life/信号与线性系统分析-两种傅里叶级数展开形式的关系.6l0m0ahpis8w.png" width="790">
</div>

* 三角形式-> 指数形式: $A_n = 2|F_n|$ ; $\phi_n = \phi_n$

## 4.3周期信号的频谱及特点

### Z4.8 周期信号的频谱

* 主要内容：
1. 周期信号频谱、频谱图的定义
2. 单边谱的定义
3. 双边谱的定义
* 基本要求：
1. 掌握周期信号频谱和频谱图的基本概念
2. 掌握单边谱、双边谱的基本概念

<div align=center>
<img src="https://cdn.jsdelivr.net/gh/aaronmack/image-hosting@master/life/信号与线性系统分析-周期信号的频谱.3gup8hbimg3k.png" width="790">
</div>

* 板书中的分解用到的是欧拉公式

### Z4.9 单边谱和双边谱的关系

* 主要内容：
1. 单边谱和双边谱的关系
* 基本要求：
1. 熟练掌握单边谱和双边谱的频谱图的绘制

<div align=center>
<img src="https://cdn.jsdelivr.net/gh/aaronmack/image-hosting@master/life/信号与线性系统分析-单边谱和双边谱的关系.4hf2dvgin1ts.png" width="790">
</div>

* 【1】加减π是一样的；再将后面的sin变成cos；正弦函数变过来后相等于在余弦函数中减去一个二分之π
* 【2】【3】2π是一个周期，(π/4)*8=2π;所以周期是8
* 【4】三次谐波分量的振幅是1/2，四次是1/4

### Z4.10 周期信号频谱的特点

* 主要内容：
1. 周期矩形脉冲信号的频谱
2. 周期信号频谱的特点
3. 谱线结构与波形参数的关系
* 基本要求：
1. 掌握周期矩形脉冲信号的频谱
2. 了解周期信号频谱的特点
3. 了解谱线结构与波形参数的关系

<div align=center>
<img src="https://cdn.jsdelivr.net/gh/aaronmack/image-hosting@master/life/信号与线性系统分析-周期信号频谱的特点.4tcdamy4mc1s.png" width="790">
</div>

* [1] Sa函数 (抽样函数)
* 第一页PPT中，公式变体使用的欧拉公式sinx的变体； x=nΩ·(τ/2)
* **基频**：2π，T=2π ? 设T=4τ，所以为(2π)/(4τ); 
* **零点**：Sa函数是正弦函数比x，正弦等于0的时候就是它的零点，也就是(nΩτ)/2=mπ为0的时候就是零点，谱线是一个一个都是nΩ的倍数，所以也就是(2mπ)/τ ; （**正弦函数一整个周期是2π，零点周期是π**）
* **谱线间隔数**：一个间隔为Ω=(2π)/T, 一个零点周期为(2mπ)/τ,当m=1的时候就为一个周期；所以间隔数为T/τ
* 分析：当τ变小的时候，根据上述，首先**间隔数会变多**，其次，**零点变远**，基频在Sa函数中的分子上，所以**频率会变低**

### Z4.11 周期信号的功率

* 主要内容：
1. 周期信号功率的定义
2. 帕斯瓦尔等式
3. 频带宽度的定义
* 基本要求：
1. 掌握周期信号功率的基本概念
2. 熟练掌握帕斯瓦尔等式计算周期信号功率的方法
3. 了解频带宽度的概念

<div align=center>
<img src="https://cdn.jsdelivr.net/gh/aaronmack/image-hosting@master/life/信号与线性系统分析-周期信号的功率.5wx1mbboxjls.png" width="790">
</div>

### Z4.12 应用案例：DC-to-AC转换器

* 主要内容：
1. 基于周期性切换原理的DC-to-AC转换器
* 基本要求：
1. 了解利用傅里叶级数求解基于周期性切换原理的直流-交流转换器转换效率的方法

<div align=center>
<img src="https://cdn.jsdelivr.net/gh/aaronmack/image-hosting@master/mathematics/信号与线性系统分析-DC-to-AC转换器.3fod0gld46f4.png" width="790">
</div>

* C_{eff} = Conversion efficiency 
* 绝大部分的能量都集中在第一个周期内，所以我们主要计算a1那个波形的系数是最重要的，a1的基波信号能量是最大的；基波信号的能量 `[(a1)^2] / 2`,和原来转换之前的直流信号`A^2`相比

## 4.4非周期信号的频谱——傅里叶变换

### Z4.13 非周期信号的频谱

* 主要内容：
1. 非周期信号的频谱
2. 频谱密度函数
* 基本要求：
1. 了解由非周期信号频谱引出非周期信号频谱的过程
2. 掌握频谱密度函数的基本概念

<div align=center>
<img src="https://cdn.jsdelivr.net/gh/aaronmack/image-hosting@master/life/信号与线性系统分析-非周期信号的频谱.3nb9trixj83k.png" width="790">
</div>

* 将一个无穷小倍的函数放大无穷大倍，然后观察它，就是**频谱密度函数**；例如一个细菌我们看不到，用一个显微镜去观察它
* 【1】经过一个变换，生成一个**频谱密度函数**，就是**傅里叶变换**
* Fn的频谱是实际频谱的大小，F(jω)的频谱是非周期信号的频谱，因为它无穷小，所以放大的无穷大倍，之后看到的频谱，这里指的是**频谱密度**，也是**频谱**
* 所以如果问别人，频谱是多少，别人直接把傅里叶变换写出来了，这个频谱和实际的频谱名称是一样的，但实际是有差异的

### Z4.14 傅里叶变换

* 主要内容：
1. 傅里叶变换
2. 傅里叶反变换
* 基本要求：
1. 熟练掌握傅里叶变换和傅里叶反变换的计算公式
2. 了解傅里叶变换存在的条件

<div align=center>
<img src="https://cdn.jsdelivr.net/gh/aaronmack/image-hosting@master/life/信号与线性系统分析-傅里叶变换.5gl7qhy8yxz4.png" width="790">
</div>

* 周期信号的频谱（取极限的时候产生了一个非周期信号，连续谱，幅度是无穷小），我们将它放大了一个倍数，结果就是频谱密度函数，我们将它定义为**傅里叶变换的正变换**
* 【1】这是两个空间，例如班上的同学拍照，同学与照片的关系，一一对应，同一个事物，不同的表示方式，f(t)时域，f(jω)频域
* **周期信号求傅里叶级数，非周期信号求傅里叶变换**

### Z4.15常用信号的傅里叶变换

* 主要内容：
1. 常用函数的傅里叶变换
* 基本要求：
1. 熟练掌握常用函数的傅里叶变换变换对

<div align=center>
<img src="https://cdn.jsdelivr.net/gh/aaronmack/image-hosting@master/life/信号与线性系统分析-常用信号的傅里叶变换.38dutxoj5lvk.png" width="790">
</div>

* [1] 一些重要的傅里叶变换对
* 【2】相等于将**门**拉开了
* 【3】常数它傅里叶级数不一定是绝对可积，构造函数序列；不能绝对可积的信号表示成一个能绝对可积的一个序列信号求极限，称为**广义傅里叶变换**

## 4.5傅里叶变换的性质
### Z4.16线性

* 主要内容：
1. 傅里叶变换的线性性质
* 基本要求：
1. 掌握傅里叶变换的线性性质

<div align=center>
<img src="https://cdn.jsdelivr.net/gh/aaronmack/image-hosting@master/life/信号与线性系统分析-傅里叶变换的性质-线性.6c53fyc7z30g.png" width="790">
</div>

* **性质建立在之前的变换对的基础上**

### Z4.17奇偶性

* 主要内容：
1. 傅里叶变换的奇偶性
* 基本要求：
1. 了解时间函数与其频谱的奇、偶、虚、实关系

<div align=center>
<img src="https://cdn.jsdelivr.net/gh/aaronmack/image-hosting@master/life/信号与线性系统分析-傅里叶变换的性质-奇偶性.5ycji0608ghs.png" width="790">
</div>

### Z4.18对称性

* 主要内容：
1. 傅里叶变换的对称性
* 基本要求：
1. 熟练掌握傅里叶变换时域和频域的对称性

<div align=center>
<img src="https://cdn.jsdelivr.net/gh/aaronmack/image-hosting@master/life/信号与线性系统分析-傅里叶变换的性质-对称性.6cawkwlj1dz4.png" width="790">
</div>

### Z4.19尺度变换特性

* 主要内容：
1. 傅里叶变换的尺度变换特性
* 基本要求：
1. 掌握傅里叶变换尺度变换特性的基本概念
2. 了解信号持续时间的占用频带的反比关系

<div align=center>
<img src="https://cdn.jsdelivr.net/gh/aaronmack/image-hosting@master/life/信号与线性系统分析-傅里叶变换的性质-尺度变换特性.6bjflwaitz40.png" width="790">
</div>

* 为什么时域扩展，频带压缩？ 见[周期信号频谱的特点](#z410-周期信号频谱的特点)
* 说明：**信号的持续时间与信号占有频带成反比，有时为加速信号的传递，要将信号持续时间压缩，则要以展开频带为代价**

### Z4.20时移特性

* 主要内容：
1. 傅里叶变换的时移特性
* 基本要求：
1. 掌握信号时域平移对应的频域的变化

<div align=center>
<img src="https://cdn.jsdelivr.net/gh/aaronmack/image-hosting@master/life/信号与线性系统分析-傅里叶变换的性质-时移特性.2o3jre3dgef4.png" width="790">
</div>

### Z4.21频移特性

* 主要内容：
1. 傅里叶变换的频移特性
* 基本要求：
1. 掌握傅里叶变换频移特性的基本概念
2. 掌握信号频谱搬移的基本概念
3. 了解通信中调制、解调的基本原理

<div align=center>
<img src="https://cdn.jsdelivr.net/gh/aaronmack/image-hosting@master/life/信号与线性系统分析-傅里叶变换的性质-频移特性.22swozvrgm8w.png" width="790">
</div>

### Z4.22卷积定理

* 主要内容：
1. 时域卷积定理
2. 频域卷积定理
* 基本要求：
1. 掌握傅里叶变换卷积定理的基本概念
2. 掌握通信中的调制、解调的分析方法

<div align=center>
<img src="https://cdn.jsdelivr.net/gh/aaronmack/image-hosting@master/life/信号与线性系统分析-卷积定理.3zlv9shla0hs.png" width="790">
</div>

* 卷积 `f(t)*h(*)` 在时域下是求零状态响应，这一部分是在频域下
* 两个门卷积是三角波
* **时域卷积等于频域乘积，频域卷积乘2π分之一等于时域乘积**
* 同步解调：③和②卷积得到结果④，然后使用一个滤波器，只让中间的通过

<div align=center>
<img src="https://cdn.jsdelivr.net/gh/aaronmack/image-hosting@master/life/信号与线性系统分析-同步解调.6bdixc4gjksg.png" width="790">
</div>

* 载波解调：发射f(t)频谱图的同时将②也发射过去，然后经过一个非线性运算，把这个载波直接和它运算，运算完了之后用里面带的频率就解出来了；这是一种最简单的调制方式，就是将信息放到幅度上面,`f(t)cosω_0t`,要载波的f(t)是随着`cosω_0t`的幅度变化，音乐里面那个是调频，是随着频率变化，这种方式音质比较好，因为传播过程中，只影响到幅度，不影响频率

### Z4.23时域微积分特性

* 主要内容：
1. 时域微积分特性
* 基本要求：
1. 掌握傅里叶变换时域微积分特性的基本概念

<div align=center>
<img src="https://cdn.jsdelivr.net/gh/aaronmack/image-hosting@master/mathematics/信号与线性系统分析-时域微积分特性.6w7mhd12579c.png" width="790">
</div>

### Z4.24频域微积分特性

* 主要内容：
1. 频域微积分特性
* 基本要求：
1. 掌握傅里叶变换频域微积分特性的基本概念

<div align=center>
<img src="https://cdn.jsdelivr.net/gh/aaronmack/image-hosting@master/mathematics/信号与线性系统分析-频域微积分特性.5r90zqt2x30g.png" width="790">
</div>

### Z4.25相关定理

* 主要内容：
1. 相关定理
* 基本要求：
1. 掌握相关定理的基本概念

<div align=center>
<img src="https://cdn.jsdelivr.net/gh/aaronmack/image-hosting@master/mathematics/信号与线性系统分析-相关定理.qn1zyooseps.png" width="790">
</div>

## 4.6能量谱和功率谱

### Z4.26能量谱

* 主要内容：
1. 信号能量的定义
2. 帕斯瓦尔能量方程
3. 能量密度谱的定义
* 基本要求：
1. 了解信号的能量和能量密度谱的基本概念
2. 掌握利用帕斯瓦尔能量方程计算信号能量的方法

<div align=center>
<img src="https://cdn.jsdelivr.net/gh/aaronmack/image-hosting@master/mathematics/信号与线性系统分析-能量谱.4w3137haqhvk.png" width="790">
</div>

* 帕斯瓦尔定理：**时域求能量不好求的话可以在频域求**
* **能量有限信号的能量谱E(ω)与自相关函数R(τ)是一对傅里叶变换对**

### Z4.27功率谱

* 主要内容：
1. 信号功率的定义
2. 功率有限信号及其相关函数
3. 功率密度谱的定义
* 基本要求：
1. 了解信号的功率和功率有限信号相关函数的基本概念
2. 了解功率有限信号的功率密度谱的基本概念
3. 了解功率有限信号的功率密度谱和自相关函数的关系

<div align=center>
<img src="https://cdn.jsdelivr.net/gh/aaronmack/image-hosting@master/mathematics/信号与线性系统分析-功率谱.2dub4bylqpts.png" width="790">
</div>

* **自相关函数和功率谱或能量谱形成了傅里叶变换对**

### Z4.28*应用案例：白噪声功率谱密度的估计

* 主要内容：
1. 白噪声
2. 自相关函数和功率谱密度
* 基本要求：
1. 了解白噪声的基本概念
2. 了解利用自相关函数进行白噪声功率谱密度估计的方法

<div align=center>
<img src="https://cdn.jsdelivr.net/gh/aaronmack/image-hosting@master/mathematics/信号与线性系统分析-白噪声功率谱密度的估计.6r5gs2cxgn0g.png" width="790">
</div>

## 4.7周期信号的傅里叶变换 

### Z4.29周期信号的傅里叶变换

* 主要内容：
1. 正、余弦函数的傅里叶变换
2. 一般周期信号的傅里叶变换
* 基本要求：
1. 掌握正、余弦函数的傅里叶变换
2. 掌握一般周期信号傅里叶变换的计算方法

<div align=center>
<img src="https://cdn.jsdelivr.net/gh/aaronmack/image-hosting@master/mathematics/信号与线性系统分析-周期信号的傅里叶变换.v6i7heu564w.png" width="790">
</div>

### Z4.30周期信号傅里叶级数与傅里叶变换的关系

* 主要内容：
1. 周期信号傅里叶级数与傅里叶变换的关系
* 基本要求：
1. 掌握周期信号傅里叶变换的计算方法
2. 了解由相应非周期信号傅里叶变换计算周期信号傅里叶级数的方法

<div align=center>
<img src="https://cdn.jsdelivr.net/gh/aaronmack/image-hosting@master/mathematics/信号与线性系统分析-周期信号傅里叶级数与傅里叶变换的关系.q8s0lvvk27k.png" width="790">
</div>

* **由傅里叶变换可以求它的傅里叶级数；过去我们是先求傅里叶级数系数，然后再求傅里叶变换**

## 4.8LTI系统的频域分析

> 思考

* 一般信号的分解？傅里叶级数？傅里叶变换？
* 基本信号的响应？ejnΩt？ejωt？
* 一般信号的响应？傅里叶级数？傅里叶变换？
* 频域分析？数学工具？原理？步骤？优缺点

### Z4.31基本信号ejωt作用于LTI系统的响应

* 主要内容：
1. 基本信号ejωt作用于LTI系统的响应
2. 频率响应函数
* 基本要求：
1. 掌握频率响应函数的基本概念
2. 了解基本信号ejωt作用于LTI系统的响应

<div align=center>
<img src="https://cdn.jsdelivr.net/gh/aaronmack/image-hosting@master/mathematics/信号与线性系统分析-基本信号ejωt作用于LTI系统的响应.6o2w2rl2677k.png" width="790">
</div>

* `ω=nΩ`
* **傅里叶分析是将任意信号分解为无穷多项不同频率的虚指数函数之和**

### Z4.32一般信号f(t)作用于LTI系统的响应

* 主要内容：
1. 一般信号f(t)作用于LTI系统的响应
* 基本要求：
1. 掌握一般信号f(t) 作用于LTI系统的响应的基本概念

<div align=center>
<img src="https://cdn.jsdelivr.net/gh/aaronmack/image-hosting@master/mathematics/信号与线性系统分析-一般信号f(t)作用于LTI系统的响应.4h7kzkd56veo.png" width="790">
</div>

### Z4.33傅里叶变换分析法

* 主要内容：
1. 傅里叶变换分析法
* 基本要求：
1. 了解LTI系统的傅里叶变换分析法的基本概念
2. 掌握利用傅里叶变换进行LTI系统分析的方法

<div align=center>
<img src="https://cdn.jsdelivr.net/gh/aaronmack/image-hosting@master/mathematics/信号与线性系统分析-傅里叶变换分析法.49nq25guitmo.png" width="790">
</div>

### Z4.34傅里叶级数分析法

* 主要内容：
1. 傅里叶级数分析法
* 基本要求：
1. 掌握周期信号激励下利用傅里叶级数进行LTI系统分析的方法

<div align=center>
<img src="https://cdn.jsdelivr.net/gh/aaronmack/image-hosting@master/mathematics/信号与线性系统分析-傅里叶级数分析法.5j1mvp2rvaio.png" width="790">
</div>

* **傅里叶变换分析对周期非周期信号都可以，傅里叶级数分析只能是周期信号**

### Z4.35频率响应函数

* 主要内容：
1. 系统频率响应函数的定义
2. 系统频率响应函数的求法
* 基本要求：
1. 掌握系统频率响应函数的基本概念
2. 掌握系统频率响应函数的求法

<div align=center>
<img src="https://cdn.jsdelivr.net/gh/aaronmack/image-hosting@master/mathematics/信号与线性系统分析-频率响应函数.51q29optmxa8.png" width="790">
</div>

* 傅里叶分析：时域的一个变换(**卷积**)对应到频域的空间是一个**乘法**运算
* H(jω) 频率响应函数: 反映系统的特性;本质上与输入输出是没有关系的
* 复函数一般可以写成极坐标的形式
* RC电路(积分电路): 加Ust(输入f(t))产生Uct(响应y(t)),

### Z4.36Matlab求解系统响应

* 主要内容：
1. 求系统的响应
* 基本要求：
1. 了解Matlab求解系统响应的方法

<div align=center>
<img src="https://cdn.jsdelivr.net/gh/aaronmack/image-hosting@master/mathematics/信号与线性系统分析-Matlab求解系统响应.76s29qm68uo.png" width="790">
</div>

### Z4.37无失真传输

* 主要内容：
1. 无失真传输的定义
2. 无失真传输的条件
* 基本要求：
1. 掌握系统无失真传输的基本概念
2. 掌握系统无失真传输的时频条件

<div align=center>
<img src="https://cdn.jsdelivr.net/gh/aaronmack/image-hosting@master/mathematics/信号与线性系统分析-无失真传输.46hi7b1g6npc.png" width="790">
</div>

* 无失真传输：通信中的概念； 例如游戏节目中的，动作表达给一个人，然后再表达给另一个人，这样一层层下去，到最后表达的动作已经完全不像了，这就是失真了，这是因为传输的过程中，要么就是新增了信息，或者是改变了，甚至丢失了

* (为什么可以允许幅度的大小产生变化，而且不算是失真，因为幅度变化，不影响频率，幅度就像声音的大小，可以被改变，而频率变了内容也就变了)

### Z4.38理想低通滤波器

* 主要内容：
1. 理想低通滤波器的频域特性
2. 理想低通滤波器的冲激响应和阶跃响应
* 基本要求：
1. 掌握理想低通滤波器的频域特性
2. 掌握理想低通滤波器的冲激响应和阶跃响应

<div align=center>
<img src="https://cdn.jsdelivr.net/gh/aaronmack/image-hosting@master/mathematics/信号与线性系统分析-理想低通滤波器.4h8v2hjo1q80.png" width="790">
</div>

### Z4.39物理可实现系统的条件

* 主要内容：
1. 物理可实现系统的条件
2. 佩利-维纳准则
* 基本要求：
1. 掌握物理可实现系统的基本概念
2. 了解佩利-维纳准则

<div align=center>
<img src="https://cdn.jsdelivr.net/gh/aaronmack/image-hosting@master/mathematics/信号与线性系统分析-物理可实现系统的条件.4cuj6nixqvuo.png" width="790">
</div>

### Z4.40*应用案例：二次抑制载波振幅调制接收系统

* 主要内容：
1. 二次抑制载波振幅调制接收系统
* 基本要求：
1. 了解二次抑制载波振幅调制接收系统的基本原理

<div align=center>
<img src="https://cdn.jsdelivr.net/gh/aaronmack/image-hosting@master/mathematics/信号与线性系统分析-二次抑制载波振幅调制接收系统.3z73ke2xda2o.png" width="790">
</div>

* fa(t)只是作为包络，调制信号
* 低通就相当于是将包络取出来，低频部分取出来

## 4.9取样定理

### Z4.41信号的取样(冲激取样)

* 主要内容：
1. 信号取样的概念
2. 矩形脉冲取样
3. 冲激取样
* 基本要求：
1. 掌握信号取样的基本概念
2. 掌握矩形脉冲取样和冲激取样的原理

<div align=center>
<img src="https://cdn.jsdelivr.net/gh/aaronmack/image-hosting@master/mathematics/信号与线性系统分析-信号的取样.62d6o53xvdvk.png" width="790">
</div>

* 我们现实生活中见到了几乎都是连续信号，但计算机无法处理，所以需要取样
* **周期信号的频谱是离散的脉冲序列**
* **卷积之后，每个波形不能重叠，只要不重叠，就可以还原出信号**
* 【1】时域
* 【2】频域

### Z4.42时域取样定理

* 主要内容：
1. 时域取样定理
2. 奈奎斯特频率
* 基本要求：
1. 掌握时域取样定理的基本概念
2. 掌握奈奎斯特频率的概念及计算方法

<div align=center>
<img src="https://cdn.jsdelivr.net/gh/aaronmack/image-hosting@master/mathematics/信号与线性系统分析-时域取样定理.5rh77bl23zls.png" width="790">
</div>

<div align=center>
<img src="https://cdn.jsdelivr.net/gh/aaronmack/image-hosting@master/mathematics/信号与线性系统分析-时域取样定理.454ynwc12r9c.png" width="790">
</div>

### Z4.43频域取样定理

* 主要内容：
1. 频域取样定理
* 基本要求：
1. 了解频域取样定理的基本概念

<div align=center>
<img src="https://cdn.jsdelivr.net/gh/aaronmack/image-hosting@master/mathematics/信号与线性系统分析-频域取样定理.7ckc9nvrio00.png" width="790">
</div>

### Z4.44应用案例：Matlab实现Sa信号的采样和恢复

* 主要内容：
1. Matlab实现Sa信号的采样和恢复
* 基本要求：
1. 了解Matlab实现Sa信号的采样和恢复的方法

<div align=center>
<img src="https://cdn.jsdelivr.net/gh/aaronmack/image-hosting@master/mathematics/信号与线性系统分析-Matlab实现Sa信号的采样和恢复.45ayw2grhqtc.png" width="790">
</div>

### Z4.45*应用案例：数字录音系统

* 主要内容：
1. CD数字录音系统
* 基本要求：
1. 了解CD数字录音系统的基本原理

<div align=center>
<img src="https://cdn.jsdelivr.net/gh/aaronmack/image-hosting@master/mathematics/信号与线性系统分析-应用案例数字录音系统.4x91qa5fyfc.png" width="790">
</div>

> 4.10模拟滤波器

* Z4.46模拟滤波器的概念
* Z4.47Matlab设计巴特沃斯低通滤波器
* Z4.48*切比雪夫滤波器

> 4.11傅里叶变换在通信系统中的应用

* Z4.49载波抑制双边带调制
* Z4.50幅度调制
* Z4.51*单边带调制
* Z4.52频分多路复用
* Z4.53*脉冲幅值调制
* Z4.54*时分多路复用
* Z4.55*通信中的多址技术


### 概念总结

* **矢量正交/正交矢量集**
* **信号正交/正交函数集/标准正交函数集/完备正交函数集**
* **三角函数集/虚指数函数集**
* **信号的正交分解/广义傅里叶级数**
* **帕斯瓦尔定理(能量守恒定理)**
* **狄里赫利(Dirichlet)条件**
* **三角形式的傅里叶级数/傅里叶系数/余弦形式的傅里叶级数**
* **直流分量/余弦分量系数/正弦分量系数**
* **基波或一次谐波/二次谐波/n次谐波**
* **吉布斯现象/超调量/振荡**
* **余弦级数/正弦级数/奇次谐波分量/偶次谐波分量**
* 欧拉公式: 
  * $\cos x=\frac{e^{ix} + e^{-ix}}{2}$
  * $e^{ix} =\cos x + i \sin x$
  * $\sin x=\frac{e^{jx}-e^{-jx}}{2j}$
* 傅里叶级数公式形式: 

  <div align=center>
  <img src="https://cdn.jsdelivr.net/gh/aaronmack/image-hosting@master/life/信号与线性系统分析-傅里叶级数公式形式.57bma0rrkf0g.png" width="630">
  </div>

* **虚指数信号**
* **频谱**: 信号的一种新的表示方法
* **频谱**：周期信号分解后，各分量的幅度和相位对于频率的变化，分别为**幅度谱**和**相位谱**
* **频谱图**：将幅度和相位分量用一定高度的直线表示；其中幅度谱图反映了信号不同频率分量的大小
* **单边谱/双边谱** 
* **周期矩形脉冲**
* **基频/零点/谱线间隔数**
* **周期信号频谱的特点**: 
  * (1) **离散性**：以基频Ω 为间隔的若干离散谱线组成；
  * (2) **谐波性**：谱线仅含有基频Ω的整数倍分量；
  * (3) **收敛性**：整体趋势减小
    * 振幅是收敛的：信号的能量主要集中在低频分量中  
    * 收敛具有不同速度：信号连续光滑，幅度谱快速衰减
    * 低频反映信号的主要信息，高频表现细节
    * 时域压缩，频域展宽
* **功率信号**: 期信号一般是功率信号
* **频带宽度**: 在满足一定失真条件下，信号可以用某段频率范围的信号来表示，此频率范围称为频带宽度
* **失真**
* **频谱密度函数**: 引入，当T趋于无穷大时，f(t)周期信号变为非周期信号，虽然各频率分量的幅度趋近于无穷小，但无穷小量之间仍有相对大小差别。故引入频谱密度函数；F( jω)
* 傅里叶变换公式形式: 

  <div align=center>
  <img src="https://cdn.jsdelivr.net/gh/aaronmack/image-hosting@master/life/信号与线性系统分析-傅里叶变换公式形式.1jn2hw6bvk5c.png" width="630">
  </div>
* **傅里叶变换/幅度频谱/相位频谱/傅里叶反变换**
* **傅里叶变换对**
* **常用函数的傅里叶变换**: 单边指数函数/双边指数函数/门函数(矩形脉冲)/冲激函数`δ(t)、δ ́(t)、δ(n)(t)`/常数函数/符号函数/阶跃函数ε(t)
* **广义傅里叶变换**
* **傅里叶变换基本性质**: 线性、奇偶性、对称性、尺度变换特性、时移特性、频移特性、时域微分特性、时域积分特性、频域微分特性、频域积分特性、卷积定理、相关定理
* **相关定理/自相关函数**
* **能量谱**
* **能量信号**: 如果信号能量有限，即`0<E<∞`，称为能量有限信号，简称能量信号;例如门函数，三角形脉冲，单边或双边指数衰减信号等
* 帕斯瓦尔方程
* **能量密度谱`E(ω)`**
  * **定义**：单位频率的信号能量
  * **物理意义**：为了表征能量在频域中的分布情况而定义的能量密度函数，简称为能量频谱或能量谱
  * **单位**：J·s
* **功率谱**
* **信号功率**: 定义：时间`（-∞, ∞）`区间上信号f(t)的平均功率.如果信号功率有限，即`0<P<∞`，信号称为功率有限信号，简称功率信号;如周期信号等
* **功率密度谱`P(ω)`**
  * **定义**：单位频率的信号功率
  * **单位**：W·s
* **维纳-欣钦(Wiener-Khintchine)关系**: 功率有限信号的功率谱`P (ω)`与自相关函数`R(τ)`是一对傅里叶变换，称为维纳-欣钦(Wiener-Khintchine)关系
* **白噪声(white noise)/热噪声/散粒噪声/宇宙噪声**
* **周期信号的傅里叶变换/周期拓展**
* **周期信号傅里叶级数与傅里叶变换的关系**
* **傅里叶分析**: 傅里叶分析是将任意信号分解为无穷多项不同频率的虚指数函数之和
* **频率响应函数**
* **傅里叶变换分析法**
* **傅里叶级数分析法**
* **频率响应函数**
  * 幅频特性
  * 相频特性
* **无失真传输**: 信号无失真传输是指系统的输出信号与输入信号相比，只有幅度的大小和出现时间的先后不同，而没有波形上的变化
* **低通滤波器/截止角频率**
* **吉布斯现象**
* **佩利-维纳准则**
* **信号的取样**
  * 矩形脉冲取样
  * 冲激取样
* **取样定理(时域/频域)**: 取样定理是连续信号与离散信号间的一座桥梁，为其相互转换提供了理论依据
* **带限信号/时限信号**
* **奈奎斯特频率(Nyquist Sampling Rate)**
* **奈奎斯特间隔(Nyquist Space)**
* **采样保持/模数转换/量化/44.1KHz**

## 5.1连续变换到离散变换的演化   

### Z5.1 傅里叶变换中连续到离散的演化 

* 主要内容： 
1. 时域离散化 
2. 频域离散化 
3. DTFT、DFT、DFS 
* 基本要求： 
1. 掌握时域频域离散化的基本概念 
2. 掌握DTFT、DFT和DFS的变换式

<div align=center>
<img src="https://cdn.jsdelivr.net/gh/aaronmack/image-hosting@master/mathematics/信号与线性系统分析-傅里叶变换中连续到离散的演化.26zuq4v9gmkg.png" width="790">
</div>

### Z5.2 五种傅里叶变换的比较 

* 主要内容： 
1. 五种傅里叶变换的含义 
2. 五种傅里叶变换之间的关系 
* 基本要求： 
1. 掌握五种傅里叶变换的差异 
2. 理解各种傅里叶变换的信号波形 

<div align=center>
<img src="https://cdn.jsdelivr.net/gh/aaronmack/image-hosting@master/mathematics/信号与线性系统分析-五种傅里叶变换的比较.4b4w77dvori8.png" width="790">
</div>

* 傅里叶变换与傅里叶级数，变换只是级数中的一个周期；~是周期； 拿出的这一个周期称为主值区间； 或者可以这样说，将这一个周期扩展，就是FS

## 5.2 离散傅里叶变换(DFT)

### Z5.3 离散傅里叶变换定义

* 主要内容： 
1. 离散傅里叶变换 
2. 离散傅里叶变换的基 
3. 离散傅里叶变换的物理意义 
* 基本要求： 
1. 离散傅里叶变换的定义 
2. 离散傅里叶变换的基

<div align=center>
<img src="https://cdn.jsdelivr.net/gh/aaronmack/image-hosting@master/mathematics/信号与线性系统分析-离散傅里叶变换定义.6r8pr6fm5eyo.png" width="790">
</div>

### 概念总结
* 离散时间傅里叶变换（DTFT－Discrete-time Fourier Transform）
* 散傅里叶变换 (DFT- Discrete Fourier Transform)
* 离散傅里叶级数（DFS- Discrete Fourier Series）
* 正交基
* 离散傅里叶反变换（IDFT）

## 拉普拉斯变换与复频域分析

* 课程框架

  <div align=center>
  <img src="https://cdn.jsdelivr.net/gh/aaronmack/image-hosting@master/mathematics/信号与线性系统分析-课程框架.khvndinl1v.png" width="790">
  </div>

### K1.01 双边拉普拉斯变换的定义

* 主要内容： 
1. 双边拉普拉斯变换的定义 
* 基本要求： 
1. 掌握双边拉普拉斯变换和双边拉普拉斯反变换 
2. 掌握象函数与原函数

<div align=center>
<img src="https://cdn.jsdelivr.net/gh/aaronmack/image-hosting@master/mathematics/信号与线性系统分析-双边拉普拉斯变换的定义.39cpnngwpog0.png" width="790">
</div>

### K1.02 收敛域

<div align=center>
<img src="https://cdn.jsdelivr.net/gh/aaronmack/image-hosting@master/mathematics/信号与线性系统分析-收敛域.4hsun6wcfkao.png" width="790">
</div>

* 指数函数积分
* 【1】带状区域

### K1.03 单边拉氏变换的定义

* 主要内容：
1. 单边拉氏变换的定义
* 基本要求：
1. 熟练计算单边拉氏变换
2. 掌握单边拉氏变换的简写形式

<div align=center>
<img src="https://cdn.jsdelivr.net/gh/aaronmack/image-hosting@master/mathematics/信号与线性系统分析-单边拉氏变换的定义.7diia42p7wcg.png" width="790">
</div>

### K1.04 单边拉氏变换与傅里叶变换的关系

* 主要内容：
1. 单边拉氏变换与傅里叶变换的关系
* 基本要求：
1. 掌握收敛坐标对单边拉氏变换和傅里叶变换的影响

<div align=center>
<img src="https://cdn.jsdelivr.net/gh/aaronmack/image-hosting@master/mathematics/信号与线性系统分析-单边拉氏变换与傅里叶变换的关系.3drj9j8os4hs.png" width="790">
</div>

### K1.05 常见信号的拉普拉斯变换

* 主要内容：
1. 常见信号的拉普拉斯变换
* 基本要求：
1. 熟练常用函数的拉普拉斯变换公式

<div align=center>
<img src="https://cdn.jsdelivr.net/gh/aaronmack/image-hosting@master/mathematics/信号与线性系统分析-常见信号的拉普拉斯变换.18ppejuhuig0.png" width="790">
</div>

### K1.06 拉普拉斯变换的性质-线性、尺度变换

* 主要内容：
1. 拉普拉斯变换的线性性质
2. 拉普拉斯变换的尺度变换性质
* 基本要求：
1. 熟练拉普拉斯变换的线性、尺度变换等性质
2. 结合性质计算信号的拉氏变换

<div align=center>
<img src="https://cdn.jsdelivr.net/gh/aaronmack/image-hosting@master/mathematics/信号与线性系统分析-拉普拉斯变换的性质-线性-尺度变换.5zsxa6qfzjsw.png" width="790">
</div>

### K1.07 拉普拉斯变换的性质-时移、复频移特性

<div align=center>
<img src="" width="790">
</div>

### K1.08 拉普拉斯变换的性质-时域和复频域的微积分特性

<div align=center>
<img src="" width="790">
</div>

### K1.09 拉普拉斯变换的性质-卷积定理

<div align=center>
<img src="" width="790">
</div>

### K1.10 拉普拉斯变换的性质-初值、终值定理

<div align=center>
<img src="" width="790">
</div>

### K1.11 拉普拉斯反变换

* 主要内容：
1. 拉普拉斯反变换
2. 拉普拉斯反变换求解方法
* 基本要求：
1. 掌握拉普拉斯反变换
2. 掌握求拉普拉斯反变换方法即查表法、利用性质、部分分式法等
3. 掌握部分分式分解法的极点特点

<div align=center>
<img src="https://cdn.jsdelivr.net/gh/aaronmack/image-hosting@master/life/信号与线性系统分析-拉普拉斯反变换.4ci109uhtirk.png" width="790">
</div>

* 有理分式：分子是s多项式，分母也是s多项式

### K1.12 拉普拉斯变换的Matlab求解

<div align=center>
<img src="" width="790">
</div>

### K1.13 电路元件和定理的s域模型

<div align=center>
<img src="" width="790">
</div>

### K1.14 电路系统的s域分析方法

<div align=center>
<img src="" width="790">
</div>

### K1.15 微分方程的变换解

* 主要内容：
1. 微分方程的变换解
* 基本要求：
1. 掌握微分方程的暂态分量和稳态分量
2. 熟练求解微分方程

<div align=center>
<img src="https://cdn.jsdelivr.net/gh/aaronmack/image-hosting@master/life/信号与线性系统分析-微分方程的变换解.710mizvrhta8.png" width="790">
</div>

* [1] 要减去的内容

### K1.16 连续系统函数H(s)的定义和求解

* 主要内容：
1. 连续系统函数H(s)的定义
2. 求解连续系统的概念图
* 基本要求：
1. 掌握连续系统函数H(s)的定义
2. 熟练系统函数H(s)的求解

<div align=center>
<img src="https://cdn.jsdelivr.net/gh/aaronmack/image-hosting@master/life/信号与线性系统分析-连续系统函数Hs的定义与求解.5sq3l6woowzk.png" width="790">
</div>

### K1.17 连续系统函数的零极点分布与时域特性

<div align=center>
<img src="" width="790">
</div>

### K1.18 连续系统稳定性判据

<div align=center>
<img src="" width="790">
</div>

### K1.19 Matlab绘制零极点图、判断稳定 

<div align=center>
<img src="" width="790">
</div>

### K1.20 系统函数与系统的频率特性 

<div align=center>
<img src="" width="790">
</div>

### K1.21 Matlab求频率响应函数，判断稳定 

<div align=center>
<img src="" width="790">
</div>

### K1.22 连续系统的s域框图 

<div align=center>
<img src="" width="790">
</div>

### K1.23 连续系统的信号流图 

<div align=center>
<img src="" width="790">
</div>

### K1.24 梅森公式

* 主要内容：
1. 梅森公式及其各符号含义
2. 梅森公式求解信号流图的系统函数步骤
* 基本要求：
1. 掌握梅森公式
2. 掌握由梅森公式求信号流图的系统函数

<div align=center>
<img src="https://cdn.jsdelivr.net/gh/aaronmack/image-hosting@master/life/信号与线性系统分析-梅森公式.2ejt75tihfnk.png" width="790">
</div>

* 梅森公式：最简单求系统函数的方法
* L代表这个回路中有多少个环

### K1.25 连续系统的模拟：直接形式 

<div align=center>
<img src="" width="790">
</div>


### K1.26 连续系统的模拟：级联形式 

<div align=center>
<img src="" width="790">
</div>


### K1.27 连续系统的模拟：并联形式 

<div align=center>
<img src="" width="790">
</div>


### K1.28 零极点配置的作用 

<div align=center>
<img src="" width="790">
</div>


### K1.29 低通滤波器，带通滤波器，带阻滤波器中零极点的配置

<div align=center>
<img src="" width="790">
</div>

### 概念总结
* **拉普拉斯反变换**
* **长除法**
* **有理分式/假分式/特征多项式/极点**

## 离散系统z域分析

### K2.01 z换的定义及收敛域 

* 主要内容：
1. z变换的定义
2. z 变换的收敛域
* 基本要求：
1. 理解z变换的定义及其收敛域的概念

<div align=center>
<img src="https://cdn.jsdelivr.net/gh/aaronmack/image-hosting@master/life/信号与线性系统分析-z换的定义及收敛域.22splsbtux34.png" width="790">
</div>

### K2.02 常见序列的z变换 

<div align=center>
<img src="" width="790">
</div>


### K2.03 z变换性质-线性、移序、反折 

<div align=center>
<img src="" width="790">
</div>


### K2.04 z变换性质-z域尺度特性、微分 

<div align=center>
<img src="" width="790">
</div>


### K2.05 z变换性质-时域卷积 

<div align=center>
<img src="" width="790">
</div>


### K2.06 z变换性质-部分和 

<div align=center>
<img src="" width="790">
</div>


### K2.07 z变换性质-初值和终值定理 

<div align=center>
<img src="" width="790">
</div>


### K2.08 逆z变换：幂级数展开和部分分式展开 

* 主要内容：
1. 幂级数展开法
2. 部分分式展开法
3. 用性质求逆z变换
* 基本要求：
1. 掌握正反z变换的方法

<div align=center>
<img src="https://cdn.jsdelivr.net/gh/aaronmack/image-hosting@master/life/信号与线性系统分析-逆z变换.3w7dnrpmo0hs.png" width="790">
</div>

### K2.09 z变换Matlab计算 

<div align=center>
<img src="" width="790">
</div>


### K2.10 z变换与拉普拉斯变换的关系 

* 主要内容：
1. z变换与拉普拉斯变换的关系
* 基本要求：
1. 理解z变换与拉普拉斯变换的关系

<div align=center>
<img src="https://cdn.jsdelivr.net/gh/aaronmack/image-hosting@master/life/信号与线性系统分析-z变换与拉普拉斯变换的关系.qx3k4i8k8sg.png" width="790">
</div>

### K2.11 差分方程的z变换解 

* 主要内容：
1. 差分方程的z域解
* 基本要求：
1. 掌握离散系统的z域描述和分析方法

<div align=center>
<img src="https://cdn.jsdelivr.net/gh/aaronmack/image-hosting@master/life/信号与线性系统分析-差分方程的z变换解.2tuiq9465l4w.png" width="790">
</div>

* 差分方程就是描述一个离散系统的
* Mz/Az 是零输入响应，(Bz/Az)*Fz是零状态响应； Bz/Az也称为系统函数

### K2.12 系统函数H(z) 

* 主要内容：
1. 系统函数H(z)的定义
* 基本要求：
1. 系统函数H(z)的定义方法

<div align=center>
<img src="https://cdn.jsdelivr.net/gh/aaronmack/image-hosting@master/life/信号与线性系统分析-系统函数Hz.tr7f0qnos8w.png" width="790">
</div>

* 一个系统的特性就是由Hz表达的
* 含义：h(k)的单边z变换
* 一个任意信号f(k)可以分解基本信号为z的k次方的线性组合
* **输出Yf(z)与输入F(z)之比就是系统函数**

### K2.13 系统函数与系统特性 

<div align=center>
<img src="" width="790">
</div>

### K2.14 离散系统稳定性判据

<div align=center>
<img src="" width="790">
</div>

### K2.15 系统的方框图

<div align=center>
<img src="" width="790">
</div>

### K2.16 系统的z域信号流图

<div align=center>
<img src="" width="790">
</div>

### K2.17 离散系统的模拟

<div align=center>
<img src="" width="790">
</div>

### K2.18 系统对正弦序列的响应

<div align=center>
<img src="" width="790">
</div>

### K2.19LTI离散系统的频率响应

<div align=center>
<img src="" width="790">
</div>

### K2.20  Matlab绘制零极点图

<div align=center>
<img src="" width="790">
</div>

### K2.21 应用案例

<div align=center>
<img src="" width="790">
</div>

### K2.22 系统函数零极点的配置

<div align=center>
<img src="" width="790">
</div>

### K2.23 数字滤波器的分类

<div align=center>
<img src="" width="790">
</div>

### K2.24 冲激响应不变法设计IIR滤波器

<div align=center>
<img src="" width="790">
</div>

### K2.25 双线性变换法设计IIR滤波器

<div align=center>
<img src="" width="790">
</div>

### K2.26 窗函数法实现FIR滤波器设计

<div align=center>
<img src="" width="790">
</div>

### 概念总结

## 系统的状态空间分析

### K3.01-连续系统状态方程与输出方程

<div align=center>
<img src="" width="790">
</div>

### K3.02-连续系统状态方程的建立-由RLC电路

<div align=center>
<img src="" width="790">
</div>

### K3.03-连续系统状态方程的建立-由微分方程

<div align=center>
<img src="" width="790">
</div>

### K3.04-连续系统状态方程的建立-由框图流图

<div align=center>
<img src="" width="790">
</div>

### K3.05-离散系统状态方程和输出方程

<div align=center>
<img src="" width="790">
</div>

### K3.06-离散系统状态方程的建立

<div align=center>
<img src="" width="790">
</div>

### K3.07-系统状态方程的变换域求解

<div align=center>
<img src="" width="790">
</div>

### K3.08-利用MATLAB求解系统状态方程

<div align=center>
<img src="" width="790">
</div>

### K3.09-系统函数矩阵与系统稳定性分析

<div align=center>
<img src="" width="790">
</div>

### K3.10-线性系统的可控性和可观性

<div align=center>
<img src="" width="790">
</div>

### 概念总结

## 小波分析理论简介

### K4.01 平稳信号与非平稳信号

* 主要内容：
1. 平稳信号和非平稳信号的定义
2. 非平稳信号分析的难点
3. 傅里叶变化的不足
* 基本要求：
1. 理解平稳信号与非平稳信号的概念
2. 理解非平稳信号的分析难点
3. 理解傅里叶变换的不足

<div align=center>
<img src="https://cdn.jsdelivr.net/gh/aaronmack/image-hosting@master/life/信号与线性系统分析-平稳信号与非平稳信号.396sz3clex1c.png" width="790">
</div>

* 平稳信号与非平稳信号在时域内可能具有完全不同的波形，但在频域内却可能非常相似
* 傅里叶变换是一种可逆变换，即它允许原始信号和变换过的信号之间互相转换。不过，在傅里叶变换后的频域中**不包含时间信息**，反变换后的时域中**不包含频率信息**

### K4.02 短时傅里叶变换

* 主要内容：
1. 短时傅里叶变换的定义
2. 短时傅里叶变换的缺陷
3. 实际信号时频分析的需求
* 基本要求：
1. 理解短时傅里叶变换的定义
2. 了解STFT中窗函数的作用
3. 了解多分辨率分析的作用

<div align=center>
<img src="https://cdn.jsdelivr.net/gh/aaronmack/image-hosting@master/life/信号与线性系统分析-时傅里叶变换.2omuity9o740.png" width="790">
</div>

* **整个科学围绕着问题展开，都是在解决某种问题**
* 加一个窗户，得到信号的这一部分，再进行傅里叶变换
* 由于短时傅里叶变换的缺陷，所以引出了小波分析
* 短时傅里叶变换试图通过窗函数来兼顾时间和频率分辨率，但不幸的是，窗函数的选择与频率无关，并在整个变换过程中保持恒定，并且难以恰当地确定窗函数，本质上是一种分辨率单一且固定的分析方法。小波变换(Wavelet Transform)

### K4.03 连续小波变换

* 主要内容：
1. 连续小波变换的定义
2. 小波参数的含义
3. 三种变换的比较
4. 二进小波
* 基本要求：
1. 了解母小波函数与小波函数的关系
2. 理解尺度和平移参数的含义
3. 了解三种变换的时间分辨率与频率分辨率的关系
4. 了解二进小波的特点

<div align=center>
<img src="https://cdn.jsdelivr.net/gh/aaronmack/image-hosting@master/life/信号与线性系统分析-连续小波变换.56j9ejeefatc.png" width="790">
</div>

* 希尔伯特平方可积空间 （一个函数平方了积分还是存在的）
* 连续小波变换，W(a,b)，就是观察在不同的尺度a下与不同的延迟b下它的数值；前面乘以$\frac{1}{\sqrt{a}}$是为了能量归一
* 每一个小波基函数就像一个放大镜（位置可调，根据a和b）
* 尺度变换类似于在看地图

### K4.04 离散小波变换

* 主要内容：
1. 离散小波函数的定义
2. Haar小波
3. DWT的快速算法
* 基本要求：
1. 了解离散小波函数点
2. 了解Haar小波的特点
3. 了解DWT快速分解与合成的实现原理

<div align=center>
<img src="https://cdn.jsdelivr.net/gh/aaronmack/image-hosting@master/life/信号与线性系统分析-离散小波变换.2s0g8dmogi80.png" width="790">
</div>

* a，b离散化

### K4.05 小波变换工程应用

<div align=center>
<img src="" width="790">
</div>

### 概念总结

# 区别概念

> 《信号与系统》里的卷积与“卷积神经网络”里的卷积有何区别？

* [1]《信号与系统》里的卷积与“卷积神经网络”里的卷积有何区别？ https://www.zhihu.com/question/312164193

忽略翻转的话就是同一个东西[1]

> 卷积积分的本质

见[_resources/resource/如何通俗易懂地解释卷积？]

> 调制与解调

* [1] 调制与解调 https://zhuanlan.zhihu.com/p/151422677

* 调制与解调，是无线通信领域中常见的技术词汇。在发送端把基带信号（包含传输信息的有效信号）加载到某个载波（通常为高频的正弦或余弦波）的过程称为调制，得到的信号称为已调信号。解调是调制的逆过程，就是在接收端通过某种信号处理手段从已调信号中得到基带信号。那么为什么要在线通信的过程中采用调制与解调这种手段呢，直接传输基带信号不行吗？

* 还真的不行，主要有以下几种原因：
  * 1）基带信号的频谱范围通常很低，有时，甚至零频的能量也不可忽略，而发射天线的尺度与电磁波的波长有关，只有发射天线尺度大于等于1/4倍的波长时信号才能有效传输，对于十几千赫兹的信号，发射天线都都要十几公里。这在工程上是不切实际的；
  * 2）调制能够实现频谱搬移，将低频信号搬移到高频处，这能够降低发射天线的尺度；
  * 3）低频频带窄，都用低频传输，会造成堵塞，调制能够扩宽传输频带，提高了频率利用率；
  * 4）调制能够将多路基带信号加载到频率不同的载波上，完成信号的频率分配，使多路信号互不干扰地在同一个信道上传输，实现频分复用；
  * 5）调制还可以减弱噪声和降低干扰。

> 傅里叶级数与傅里叶变换的关系

* [1] 傅里叶级数和傅里叶变换是什么关系？ https://www.zhihu.com/question/21665935
* [2] 傅里叶级数和傅里叶变换是什么关系？http://www.360doc.com/content/17/0327/13/908538_640524534.shtml

* 傅里叶级数是以三角函数为基对周期信号的**无穷级数展开**，如果把周期函数的周期取作无穷大，对傅里叶级数**取极限**即得到傅里叶变换。 傅里叶变换是从傅里叶级数推演而来的，傅里叶级数是所有周期函数都可以分解成一系列的正交三角函数，这样，周期函数对应的傅里叶级数即是它的频谱函数[2]

> DFT DTFT DFS

* [1] Discrete-time Fourier transform - Wikipedia https://en.wikipedia.org/wiki/Discrete-time_Fourier_transform

* In mathematics, the **discrete-time Fourier transform (DTFT)** is a form of Fourier analysis that is applicable to a sequence of values

* 离散傅里叶变换(DFT)
* 傅里叶变换(FT)
* 离散时间傅里叶变换(DTFT)
* 离散傅里叶级数(DFS)

> What if the difference between DFT and DTFT? | Glassdoor

* [1] What if the difference between DFT and DTFT? | Glassdoor https://www.glassdoor.com/Interview/What-if-the-difference-between-DFT-and-DTFT-QTN_783809.htm

* **DFT (Discrete Fourier Transform)** is a **practical version of the DTFT**, that is computed for a finite-length discrete signal. The DFT becomes equal to the DTFT as the length of the sample becomes infinite and the DTFT converges to the continuous Fourier transform in the limit of the sampling frequency going to infinity