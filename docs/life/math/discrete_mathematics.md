# 离散数学

## 集合论基础

### 集合定义

A set is a group of objects. (simplest way)
By a set we mean any collection M into a whole of definite distinct objects m (which
we called elements of M) of our perception or of our thought. (Cantor’s way)

集合 是由指定范围内的满足给定条件的所有对象聚集在一起构成，每一个对象称
为这个集合的元素。 (In chinese)

用带或不带下标的大写英文字母表示集合: A; B; C; ... ; A1; B1; C1; ...
用带或不带下标的小写英文字母表示元素: a; b; c; ... ; a1; b1; c1;

若 a 是集合 A 中的元素，则称 a属于A，记为 a ∈ A
若 a 不是集合 A 中的元素，则称 a不属于A，记为 a ∉ A

### 集合表示

**枚举法**
列出集合中的全部元素或者仅列出一部分元素，其余用省略号 (... ) 表示

**叙述法**
通过刻画集合中元素所具备的某种性质或特性来表示一个集合。P = {x|P(x)}

**文氏图**
文氏图是利用平面上的点来做成对集合的图解方法。一般使用平面上的方形或圆形表示一个集合，而使用平面上的一个小圆点来表示集合的元素。

### 集合基数

基数
集合 A 中的元素个数称为集合的基数(base number)，记为 |A| (注意与绝对值符合一样)
若一个集合的基数是有限的，称该集合为**有限集**(finite set)
若一个集合的基数是无限的，称该集合为**无限集**(infinite set)

e.g. B={a, {b,c}}, |B|=2 (里面还有一个集合，所以是2)

### 空集

不含任何元素的集合叫做空集(empty set)，记作 ∅.
空集可以符号化为 ∅ = {x|x≠x}

**空集是绝对唯一的**

### 全集

针对一个具体范围，我们考虑的所有对象的集合叫做全集(universal set)，记作 U 或 E.
在文氏图一般使用方形表示全集

e.g. 在立体几何中，全集是由空间的全体点组成的；在我国的人口普查中，全集是由我国所有人组成的。

**全集是相对唯一的**

### 相等关系

#### 集合的相等关系

* 元素的基本特性
  * 集合中的元素是无序的。 {1,2,3,4} 与 {2,3,1,4} 相同。
  * 集合中的元素是不同的。 {1,2,2,3,4,3,4,2} 与 {1,2,3,4} 相同

e.g. 设$E=\{ x|(x-1)(x-2)(x-3)=0,x \in R \}, F=\{ x|x\in Z^+,x^2<12 \}$ 可见 E 和 F 具有相同的元素 {1,2,3}, 此时称两个集合相等

### 包含关系

#### 子集和真子集

* citing example
  * 设 A = {BASIC; PASCAL; ADA}; B = {ADA; PASCAL}
此时 A 中含有 B 中所有的元素，这种情况称为A 包含 B.

* Definition
  * 设 A; B 是任意两个集合，如果 B 的每个元素都是 A 中的元素，则称 B 是 A 的子集，也称做B 被 A 包含或A 包含 B，记作B ⊆ A，否则记作B ⊈ A.
  * 如果 B ⊆ A 并且 A ̸= B，则称 B 是 A 的真子集，也称做B 被 A 真包含或A 真包含 B，记作B ⊂ A，否则记作B ̸⊂ A.

"⊆" 关系的数学语言描述为： B ⊆ A , 对∀ , 如果 x ∈ B, 则 x ∈ A.

<div align=center>
<img src="https://cdn.jsdelivr.net/gh/aaronmack/image-hosting@master/mathematics/子集和真子集.4nhk2xey9og0.png" width="790">
</div>

#### 证明集合相等

<div align=center>
<img src="https://cdn.jsdelivr.net/gh/aaronmack/image-hosting@master/mathematics/证明集合相等.581ezkvl2q80.png" width="790">
</div>

#### n元集的子集

<div align=center>
<img src="https://cdn.jsdelivr.net/gh/aaronmack/image-hosting@master/mathematics/n元集的子集.2usl6zhm25u0.png" width="790">
</div>

* 【1】二项式定理

### 幂集

* Definition
  * 设 A 为任意集合，把 A 的所有不同子集构成的集合叫做 A 的幂集(power set), 记作 P(A)，即，
P(A) = {x|x ⊆ A}
* Example
  * 设 A = {a; b; c}， B = {a; {b; c}}，求他们的幂集 P(A) 和 P(B)。
  * 解： P(A) = {∅; {a}; {b}; {c}; {a; b}; {b; c}; {a; c}; {a; b; c}}; P(B) = {∅; {a}; {{b; c}}; {{a; {b; c}} }

**幂集也叫做集族或集合的集合，对集族的研究在数学方面、知识库和表处理语言以及人工智能等方面都有十分重要的意义。**

### 并集

设 A; B 是两个集合，则集合 A 与 B 的并集定义为：A ∪ B = {x|x ∈ A 或 x ∈ B}

e.g. 若集合 A 是选修了音乐欣赏的学生， B 是选修了西方文学的学生，则 A ∪ B 是选修了音乐欣赏或选修了西方文学或两门课都同时选修的学生.

### 交集

设 A; B 是两个集合，则集合 A 与 B 的交集定义为：A ⋂ B = {x|x ∈ A 并且 x ∈ B}

e.g. 若集合 A 是选修了音乐欣赏的学生， B 是选修了西方文学的学生，则 A ⋂ B 是即选修了音乐欣赏又选修了西方文学的学生

### 补集

设 U 是全集，则集合 A 的补集定义为：$\overline{X}=\{ x|x\notin A\}$

若集合 A 是选修了音乐欣赏的学生，全集 U 是所有在校学生，则 x̄ 是没有选修音乐欣赏的学生.

### 差集


设 A; B 是两个集合，则集合 A 与 B 的差集定义为：A − B = {x|x ∈ A 并且 x ∉ B}

若集合 A 是选修了音乐欣赏的学生， B 是选修了西方文学的学生，则 A − B 是选修了音乐欣赏但没有选修西方文学的学生.

**差集可以理解为相对的补集运算**

### 对称差集

设 A; B 是两个集合，则集合 A 与 B 的对称差集定义为：A ⊕ B = {x|(x ∈ A and x ∉ B) or (x ∉
A and x ∈ B) } 

* Example
  * 集合 {1; 3; 5} 和集合 {1; 2; 3} 的对称差集是 {2; 5};
  * 若集合 A 是选修了音乐欣赏的学生， B 是选修了西方文学的学生，则 A ⊕ B 是只选修了音乐欣赏和西方文学两门课中某一门的学生.

### 并集和交集的扩展

<div align=center>
<img src="https://cdn.jsdelivr.net/gh/aaronmack/image-hosting@master/mathematics/并集和交集的扩展.15e2l39pmyao.png" width="790">
</div>

### 运算定律

<div align=center>
<img src="https://cdn.jsdelivr.net/gh/aaronmack/image-hosting@master/mathematics/集合运算的基本等式.298ldpayoosg.png" width="790">
</div>

* ∪并集 ⋂交集这两个符号，可以这样去想象，想象成一个挂钩，例如A∪B,AB同时往上挂，都可以挂上；⋂这个是AB搓到一起同时往上扔，只有公共的部分可以在顶峰留下来,哈哈

### 形象理解

基于文氏图的形象理解 - 这里需要动手画出来上面运算定律中的文氏图，来加深理解

### 证明方法

[先前知识-集合相等的证明](#证明集合相等)

e.g. 证明德摩根律的等式之一

<div align=center>
<img src="https://cdn.jsdelivr.net/gh/aaronmack/image-hosting@master/mathematics/集合相等的证明-证明德摩根律的等式之一.1vniu2b872zk.png" width="790">
</div>

* 首先运用**证明集合相等**中的证明两个集合相等的理论 (A,B两个集合，A=B <==> A⊆B and B⊆A)；所以这里需要证明等式左边的是右边的真子集，等式右边的是等式左边的真子集，然后一个一个证明

### 自然数集的定义

<div align=center>
<img src="https://cdn.jsdelivr.net/gh/aaronmack/image-hosting@master/mathematics/自然数集的定义.tcxfka0k6vk.png" width="790">
</div>

### 等势

> 等势的引入： 对于两个有限集合而言，比较二者的大小只需要看**集合的基数**，但对于无限集合却没有这么简单。如何比较无限集合的“大小”呢？这里需要采用一种通过判断两个无限集合之间是否存在一种一一对应的关系来解决这个问题。

* 定义：
  * 设 A; B 为两个集合，若在 A; B 之间存在一种一一对应的关系：`Ψ : A ⟶ B`则称 A 与 B 是等势的 (equipotential)，记作：`A ∼ B`

**由等势定义可以看出，如果 A = B，那么 A ∼ B，反之却不成立**

### 可数集合

* 定义：凡与自然数集合 N 等势的集合，称为可数集合(countable set)，该集合的基数记为`ℵ_0`(读作阿列夫零)

#### 证明下列集合都是可数集合

<div align=center>
<img src="https://cdn.jsdelivr.net/gh/aaronmack/image-hosting@master/mathematics/证明下列集合都是可数集合.4c13bd3ugf40.png" width="790">
</div>

* 从有限到无限，不仅仅是简单数量上的变化 (量变)，而引起了本质的改变 (质变)。
  * 两个无限集合的“大小”已经不能单纯使用集合中的元素个数来衡量。 `ℵ_0`表示一切可数集合的基数，是一种抽象的表达。
  * 表面上个数完全不相等的两个集合之间仍可能存在等势关系，如集合与其真子集之间，这体现了有限集合和无限集合的根本差别。

### 不可数集合

* 定义
  * 开区间 (0; 1)称为不可数集合，凡与开区间 (0; 1) 等势的集合，称为不可数集合，该类集合的基数记为`ℵ`(读作阿列夫)

<div align=center>
<img src="https://cdn.jsdelivr.net/gh/aaronmack/image-hosting@master/mathematics/不可数集合.6uyq3ekxj6gw.png" width="790">
</div>

## 命题逻辑

### 命题

**数理逻辑研究的中心问题是推理，而推理的前提和结论都是命题。因而命题是推理的基本单位。**

* 什么是命题
  * 具有确切真值的陈述句称为命题(proposition)。该命题可以取一个“值”，称为真值。真值只有“真”和“假”两种，分别用“T” (或“1” ) 和“F” (或“0” )表示
  * Example
    * 北京是中国的首都。 真值： T
    * 3 能被 2 整除。 真值： F

* 非命题
  * 一切没有判断内容的句子，如命令句 (或祈使句)、感叹句、疑问句、二义性的陈述句等都不能作为命题
  * Example 
    * 这个语句是假的；
    * x + y > 0；
    * 把门关上；

### 复合命题

* Example
  * 既是素数又是奇数；
  * 张谦是大学生或是运动员；
  * 如果周末天气晴朗，则我们将到郊外旅游；
  * 两个三角形全等当且仅当三角形的三条边全部相等。
* Definition
  * **原子命题 (简单命题)**：不能再分解为更为简单命题的命题。
  * 复合命题：可以分解为更为简单命题的命题。这些简单命题之间是通过如“或者”、“并且”、“不”、“如果......则......”、“当且仅当”等这样的关联词和标点符号复合而成

> 约定：通常用大写的带或不带下标的英文字母表示命题 (包括原子命题和复合命题)。A,B,C,... ,P,Q,R,... , $A_i$,$B_i$,$C_i$,... ,$P_i$,$Q_i$,$R_i$,· ·

> 注意: 复合命题中，一般是通过联结词和标点符号将简单命题联结成复杂的语句，最常见的**联结词**主要有以下五种：“或者”、 “并且”、 “不”、 “如果...... 则......”、 “当且仅当” e.g.: 四川`不`是一个国家； 3`既`是素数`又`是奇数； 张谦是大学生`或`是运动员； `如果`周末天气晴朗， `则`我们将到郊外旅游； 两个三角形全等`当且仅当`三角形的三条边全部相等。

### 否定联结词

* Definition
  * 设 P 是任意一个命题，复合命题`“非 P”(或 “P 的否定”)`称为 P 的否定式(negation)，记作:**¬P**，¬ 为**否定联结词**。 P 为真当且仅当 **¬P** 为假。
* Example
  * P：四川是一个国家。
  * ¬P：四川不是一个国家。

**¬ 是自然语言中的 “非”、 “不”、 “没有” 等的逻辑抽象。**

### 合取联结词

* Definition
  * 设 P、 Q 是任意两个命题，复合命题`“P 并且 Q”(或 “P 和 Q”)`称为 P 与 Q 的合取式(conjunction)，记作P ∧ Q， “∧” 为**合取联结词**。 P ∧ Q 为真当且仅当 P， Q 同为真。

* Example
  * P： 3 是素数；
  * Q： 3 是奇数。
  * P ∧ Q： 3 既是素数又是奇数

> 注意: `∧`是自然语言中的 “并且”、 “既…又…”、 “但”、 “和”、 “与”、 “不仅…而且…”、 “虽然…但是…”、 “一面…, 一面…” 等的逻辑抽象；但不是所有的“和”，“与”都要使用合取联结词表示，要根据句子的语义进行分析。Example:  2 和 3 的最小公倍数是 6； 点 a 位于点 b 与点 c 之间。**这两个命题都是简单命题，不能再分**

### 析取联结词

* Definition
  * 设 P、 Q 是任意两个命题，复合命题`“P 或 Q”`称为 P 与 Q 的析取式(disjunction)，记作`P ∨ Q`; “∨” 为析取联结词。 P ∨ Q 为真当且仅当 P， Q 至少有一个为真
* Example
  * P：张谦是大学生；
  * Q：张谦是运动员。
  * P ∨ Q：张谦是大学生**或**是运动员

> 注意: 联结词 “∨” 是自然语言中的 “或”、 “或者” 等的逻辑抽象。自然语言中的 “或” 有 “可兼或”(或称为**同或**)、 “不可兼或”(即**异或**) 两种。严格来讲，析取联结词实际上代表的是可兼或，异或有时会使用单独的异或联结词 “⊕” 或 $\overline{V}$ 来表示。 Example: 命题：张红生于 1982 年或 1983 年，令 P: 张红生于 1982 年； Q: 张红生于 1983 年。**P 与 Q 不能同时为真，即为“不可兼或”**

### 蕴涵联结词

> 注意: 在自然语言中，前件为假，不管结论真假，整个语句的意义，往往无法判断。但对于数理逻辑中的蕴涵联结词来说，当前件 P 为假时，不管 Q 的真假如何，则 P ⟶ Q 都为真。此时称为 “**善意推定**”。Example: 命题：如果角 A 和角 B 是对顶角，则角 A 等于角 B。**这个命题是我们非常熟悉的一个定理，当然是真命题。当前件为假时，这个定理依然成立。**

* Example
  * Example: 设 P：约翰学习微积分， Q：约翰是大学一年级学生。则以下的复合命题均可用 P ⟶ Q 表示。
    * 如果约翰学习微积分，则他是大学一年级学生。 如果 P，则 Q
    * 因为约翰学习微积分，所以他是大学一年级学生。 因为 P，所以 Q
    * 只要约翰学习微积分，他就是大学一年级学生。 只要 P，就 Q
    * 约翰学习微积分仅当他是大学一年级学生。 P 仅当 Q
    * 只有约翰是大学一年级学生，他才能学习微积分。 只有 Q，才 P
    * 除非约翰是大学一年级学生，他才能学习微积分。 除非 Q，才 P
    * 除非约翰是大学一年级学生，否则他不学习微积分。 除非 Q，否则 ¬P
    * 除非约翰不是大学一年级学生，他才能不学习微积分。 除非 ¬Q，才¬P (突然想到的)

### 等价联结词

* Definition
  * 设 P、 Q 是任两个命题，复合命题`“P 当且仅当 Q”`称为 P 与 Q 的等价式(equivalence)，记作**P ↔ Q**，↔为等价联结词(也称作**双条件联结词**) **P ↔ Q** 为真当且仅当 P、 Q 同为真假
* Example
  * P：两个三角形全等；
  * Q：三角形的三条边全部相等。
  * P ↔ Q：两个三角形全等当且仅当三角形的三条边全部相等

**“↔” 是自然语言中的 “等价”、 “充分必要条件”、 “当且仅当” 等的逻辑抽象。**

### 命题联结词和联结词表

<div align=center>
<img src="https://cdn.jsdelivr.net/gh/aaronmack/image-hosting@master/mathematics/联结词表.5h31bp6w5yc0.png" width="790">
</div>

<div align=center>
<img src="https://cdn.jsdelivr.net/gh/aaronmack/image-hosting@master/mathematics/命题联结词.5du5regy84s0.png" width="790">
</div>

### 联结词总结
联结词是**两个命题真值之间的联结**，而不是命题内容之间的连接，因此复合命题的真值只取决于构成他们的各简单命题的真值，而与它们的内容无关，与二者之间是否有关系无关。

* Example
  * 命题 1：雪是白的当且仅当北京是中国的首都。
  * 命题 2：如果 2 是偶数，则天上就可以掉馅饼。
  * **尽管两个简单命题的内容之间无关联，但二者均为合法命题，且具有确定的真值**

### 联结词的优先级

* 优先级顺序
  * 所有五个联接词的优先顺序为：**否定，合取，析取，蕴涵，等价**；
  * 同级的联结词，按其出现的先后次序 (从左到右)；
  * 若运算要求与优先次序不一致时，可使用括号；同级符号相邻时，也可使用括号。括号中的运算为最高优先级。

### 命题符号化

* Example
  * 设命题 
    * P : 你陪伴我;
    * Q : 你代我叫车子;
    * R : 我将出去:
  * 符号化下述语句：
    * 如果你陪伴我并且代我叫辆车子， 则我将出去。
      * 符号化为：(P∧Q)⟶R
    * 如果你不陪伴我或不代我叫辆车子，我将不出去。
      * 符号化为：(¬P ∨ ¬Q) ⟶ ¬R
    * 除非你陪伴我或代我叫车子， 否则我将不出去。
      * 符号化为：R⟶(P∨Q) 或  (¬P ∨ ¬Q) ⟶ ¬R

### 联结祠应用

<div align=center>
<img src="https://cdn.jsdelivr.net/gh/aaronmack/image-hosting@master/mathematics/联接词应用.2ffil9s0jvk0.png" width="790">
</div>

### 命题变元
* 定义
  * 一个特定的命题是一个**常值命题**，它不是具有值 “T”(“1”)，就是具有值 “F”(“0”)。
  * 一个任意的没有赋予具体内容的原子命题是一个**变量命题**，常称它为**命题变量 (或命题变元)(propositional variable)**，该命题变量无具体的真值，它的变域是集合`{T, F}(或 {0, 1})`

> 复合命题是由**原子命题**与**联结词**构成的命题。所以，当其中的原子命题是命题变元时，此复合命题也即为命题变元的函数，且该函数的值仍为“真”或“假”值，这样的函数可形象地称为`“真值函数” 或 “命题公式”`，此命题公式没有确切的真值 例如： G = P ∧ Q ⟶ ¬R

### 命题公式

* 定义
  * 命题演算的合式公式 (well formed formula， wff)，又称**命题公式** (简称公式)，按如下规则生成：
    1. 命题变元本身是一个公式； （如： P; Q; R; ... ）
    2. 如 G 是公式，则(¬G)也是公式； （如： ¬P; ¬Q; ¬R; ... ）
    3. 如 G， H 是公式，则(G ∧ H)、 (G ∨ H)、 (G ⟶ H)、 (G ↔ H)也是公式； （**如：P ∧ Q, (¬Q) ⟶ R, ...** ）
    4. 仅由**有限步使用规则 (1)、 (2)、 (3)**后所得到的包含命题变元、联结词和括号的符号串才是命题公式.
  * （**如： ¬(P ∧ Q) ↔ R, (¬Q ∨ (P ∧ ¬R)) ⟶ R, ... ）** 如果 G 是含有 n 个命题变元 $P_1$、 $P_2$、 $P_3$、 ... 、 $P_n$ 的公式，可记为： $G(P_1, P_2, P_3, \cdots, P_n)$ 或简写为 $G$。

* 关于命题公式的说明
  1. 原子命题变元是最简单的合式公式，称为原子合式公式，简称原子公式；
  2. 命题公式没有真值，只有对其命题变元进行真值指派后，方可确定命题公式的真值；
  3. 整个公式的最外层括号可以省略；公式中不影响运算次序的括号也可以省略。
  4. 在实际应用中，为了便于存储和运算，命题公式常用二元树的方式来表达

<div align=center>
<img src="https://cdn.jsdelivr.net/gh/aaronmack/image-hosting@master/mathematics/命题公式二元树的表达.4q3otguf670g.png" width="390">
</div>

#### 命题公式的解释

* 定义
  * 设 P1、 P2、 P3、 ... 、 Pn 是出现在公式 G 中的**所有命题变元**，指定 P1、 P2、 P3、 ... 、 Pn 一组真值，则这组真值称为 G 的一个解释，常记为 I。
* 例
  * 设有公式: $G=P \rightarrow (\neg Q\wedge R)$
    1. $I_1:P=0,Q=1,R=0$是 G 的一个解释，使得 G 的真值为 1
    2. $I_2:P=1,Q=0,R=0$是 G 的一个解释，使得 G 的真值为 0

> 如果公式 G 在解释 I 下是真的，则称I 满足 G，此时 I 是 G 的**成真赋值**；如果 G 在解释 I 下是假的，则称I 弄假于 G，此时 I 是 G 的**成假赋值**

### 真值表

> 一般来说，若有 n 个命题变元，则应有 $2^n$ 个不同的解释。利用真值表，可得到公式的所有成真赋值和成假赋值

* 定义
  * 由公式 G 在其所有可能的解释下所取真值构成的表，称为 G 的**真值表**(truth table)

* 真值表画法
  * 一般我们将公式中的命题变元放在真值表的左边，将公式的结果放在真值表的右边。有时为了清楚起见，可将求公式的中间结果也放在真值表中

<div align=center>
<img src="https://cdn.jsdelivr.net/gh/aaronmack/image-hosting@master/mathematics/真值表.3thi7z4n78jk.png" width="590">
</div>

### 命题公式分类

* 公式 G 称为**永真公式**(重言式,tautology)，如果在它的所有解释之下其真值都为“真”。
* 公式 G 称为**永假公式**(矛盾式,contradiction)，如果在它的所有解释之下其真值都为“假”。有时也称永假公式为不可满足公式。
* 公式 G 称为**可满足公式**(satisfiable)，如果它不是永假的

* 三种特殊公式之间的关系
  1. $G$ 是永真的当且仅当 $\neg G$ 是永假的；
  2. G 是可满足的当且仅当至少有一个解释 I，使 G 在 I 下为真。
  3. 若 G 是永真式，则 G 一定是可满足式，但反之可满足公式不一定是永真式；

### 公式的逻辑等价

* 考虑一个永真公式 $G_1=(P\rightarrow Q) \leftrightarrow (\neg P \vee Q)$ 将这个公式拆开，令$G=P\rightarrow Q, H=\neg P \vee Q$, 从而$G_1=G\leftrightarrow H$, 由于 $G_1$ 是永真公式,根据等价联接词的定义可知 G,H 必同为真或者同为假。此时我们称公式 G,H 具有逻辑等价关系

* Definition
  * 设 G， H 是两个命题公式， $P_1， P_2， P_3，\cdots， P_n$ 是出现在 G， H 中所有的命题变元，如果对于$P_1， P_2， P_3， \cdots ， P_n$ 的 $2^n$ 个解释， G 与 H 的真值结果都相同，则称公式 G 与 H 是等价的，记作$G = H$, 或$G\iff H$

#### 公式等价的充分必要条件

* **Theorem**: 对于任意两个公式 G 和 H， G = H 的充分必要条件是公式 $G \leftrightarrow H$ 是永真公式
* **Proof**
  * 必要性：假定 G = H，则 G， H 在其任意解释 I 下或同为真或同为假，于是由 $\leftrightarrow$ 的意义知，公式 $G \leftrightarrow H$ 在其任何的解释 I 下，其真值为“真”，即 $G \leftrightarrow H$ 为永真公式。
  * 充分性：假定公式 $G \leftrightarrow H$ 是永真公式， I 是它的任意解释，在 I 下， $G \leftrightarrow H$ 为真，因此，G， H 或同为真，或同为假，由于 I 的任意性，故有 G = H。

### 基本等价关系
* [1] 如何理解数理逻辑中蕴含式？ https://www.zhihu.com/question/35646091
* [2] 无聊的逻辑学：蕴涵式 https://zhuanlan.zhihu.com/p/136166713

<div align=center>
<img src="https://cdn.jsdelivr.net/gh/aaronmack/image-hosting@master/mathematics/基本等价关系.73rkyajgf0xs.png" width="790">
</div>

* 补充1：
  * 可以这样理解:假如小明的爸爸对小明承诺，只要小明离散数学考了100分，就给他买iPhone 7。这个例子中，p是“小明离散数学考了100分”，q是“小明爸爸给小明买iPhone 7”。假如p为真，也就是小明考了100分，如果此时q为假，那爸爸的承诺p->q就为假。假如p为假，那无论小明他爸给不给他买iPhone 7，都不会违背那个承诺，也就是p->q为真。因此，只有当p为真，q为假时，p->q才为假。[1]

### 判断公式类型

<div align=center>
<img src="https://cdn.jsdelivr.net/gh/aaronmack/image-hosting@master/mathematics/判断公式类型.w1f8q66gokw.png" width="790">
</div>

### 证明公式等价

<div align=center>
<img src="https://cdn.jsdelivr.net/gh/aaronmack/image-hosting@master/mathematics/证明公式等价.6exj1ee79zb4.png" width="790">
</div>

### 命题公式的应用

<div align=center>
<img src="https://cdn.jsdelivr.net/gh/aaronmack/image-hosting@master/mathematics/命题公式的应用.2p2el0czgi4g.png" width="790">
</div>

### 公式的标准型-范式

#### 范式定义

> 引入范式: 真值表能够方便的给出命题公式的真值情况，但真值表的规模随命题变元的数量呈指数形式增长，因而我们考虑一种真值表的替代方法，这种方法是基于命题公式的一种标准形式。

* Definition
  * 命题变元或命题变元的否定称为文字。 P; ¬P; Q; ¬Q; ...
  * **有限个**文字的析取称为简单析取式(或子句)。 P V Q V ¬R; ... P; ¬P
  * **有限个**文字的合取称为简单合取式(或短语)。 :P ^ Q ^ R; ... P; ¬P **(因为这里是有限个，包含一个，所以单个也可以构成短语)**
  * P 与 :P 称为互补对
* Definition
  * **有限个**简单合取式（短语）的析取式称为析取范式(disjunctive normal form)；
    * 如 (P ∧ Q) V (¬P ∧ Q) ，又如 P ∧ ¬Q， P， ¬P
  * **有限个**简单析取式（子句）的合取式称为合取范式(conjunctive normal form)。
    * 如 (P V Q) ∧ (¬P V Q)，又如 P V ¬Q， P， ¬P **(这里因为是有限个，所以单个也可以构成合取范式)**

<div align=center>
<img src="https://cdn.jsdelivr.net/gh/aaronmack/image-hosting@master/mathematics/范式的例子.6ide9ymc1i00.png" width="790">
</div>

* 【1】为什么是子句? 根据子句的定义(有限个文字的析取) 为什么是合取范式？根据合取范式的定义(有限个子句的合取式称为合取范式，这里可以只包含一个子句)，而这里是一个子句，所以是合取范式；**注意：加了括号之后还是子句，但不能拆分，必须当做一个整体去看待，不能拆分成P,Q,R去分别看待成一个个短语，然后再构成析取范式**
* 【2】为什么是短语？根据短语的定义(有限个文字的合取) 为什么是析取范式? 根据析取范式的定义(有限个短语的析取式称为析取范式，这里可以只包含一个短语)，而这里是一个短语，所以是析取范式
* 4 的解释，这里加了括号之后 $Q\vee \neg R$ 只能看做一个整体，只能看做是一个子句，而子句的析取是既不构成析取范式也不构成合取范式，但如果去掉括号之后就可以了

#### 范式求解

> 总结
 1. 范式关注的是命题公式的当前书写形式；
 2. 单个的文字是子句、短语、析取范式，合取范式；
 3. 析取范式、合取范式仅含联结词集 {¬,V,∧}，且否定联接词仅出现在命题变元之前

> 范式存在定理 - Theorem (范式存在定理): 对于任意命题公式，都存在与其等价的析取范式和合取范式

<div align=center>
<img src="https://cdn.jsdelivr.net/gh/aaronmack/image-hosting@master/mathematics/范式存在定理.5r3ihj1qq4c0.png" width="790">
</div>

> 范式求解定理

<div align=center>
<img src="https://cdn.jsdelivr.net/gh/aaronmack/image-hosting@master/mathematics/范式求解定理.30br3bnfxy6.png" width="790">
</div>

* 【1】范式求解定理步骤：[公式见](#基本等价关系), 先使用蕴含式和等价式将公式中的 ⟶,↔ 用联结词 ¬,V,∧ 来取代； 然后利用德摩根律，然后整理公式，必要时使用分配律，这里使用分配律得到第二个等号这一行公式，然后析取是满足结合律的我们可以去掉括号，显然可以利用幂等律，消掉重复出现的，使用排中律；再然后在第五行后半部分，因为1析取任何都等于1，所以保留一个1就可以，然后再整理，最后根据同一律，就是合取范式了

> 范式与真值 - 总结

1. **命题公式的析取范式可以指出公式何时为真，而合取范式可以指出公式何时为假，从而能够替代真值表**。 $((\neg P \vee Q) \wedge (P \vee \neg R),[1] \neg P\vee (\neg Q\wedge R))$ 
1. 命题公式的范式表达并不唯一，比如对公式 $$ 而言，对应的析取范式有很多：
  * $P\vee (Q\wedge R)$
  * $(P\wedge P) \vee (Q \wedge R)$
  * $P \vee (Q\wedge \neg Q) \vee (Q\wedge R)$
  * $P \vee (P\wedge R)\vee (Q\wedge R)$
3. 一般而言，求解范式时，需要进行最后的化简步骤

* [1] 因为我们知道，合取中只要一个为假，就都为假，所以这里对假的判断方便，而判断真需要判断两边；先从左边开始，如果结果为假,则$(P \vee Q)$为假，$(P \vee Q)$要想为假，则$\neg P$为假，并且$Q$为假，所以只要$P$为真和Q为假，则整个公式就为假，可以非常方便的判断出来

### 主析取范式和主合取范式

> **为什么需要引入主析取和主合取范式？**因为前面我们知道，范式不是唯一的，如果我们需要范式的形式满足唯一性的话就需要引入主析取和主合取范式

>  **引入主范式**: 由于范式的不唯一性，我们考虑对构成范式的子句或短语进一步规范化，从而形成唯一的主析取范式和主合取范式。

#### 极小项和极大项

* 定义
  * 在含有 n 个命题变元 $P_1, P_2, P_3 ... , P_n$ 的短语或子句中，若每个命题变元与其否定不同时存在，但二者之一恰好出现一次且仅一次，并且出现的次序与 $P_1, P_2, P_3 ... , P_n$ 一致，则称此短语或子句为关于 $P_1, P_2, P_3 ... , P_n$ 的一个极小项或极大项
  * 一般来说，若有 $n$ 个命题变元，则应有 $2^n$ 个不同的极小项和 $2^n$ 个不同的极大项

* 极小项与极大项的性质

<div align=center>
<img src="https://cdn.jsdelivr.net/gh/aaronmack/image-hosting@master/mathematics/极小项和极大项.144hdyqh1lj4.png" width="790">
</div>

* 【1】这里看$\neg P \wedge \neg Q$，$\neg P$是0，$\neg Q$也是0，所以是$m_{00}$，这是二进制，转为10进制是$m_0$；**或者根据下面的黄字，命题变元取1，命题变元的否定取0，**
* 【2】这里的编码是，当P和Q取值分别是1和1的时候为假，所以它的编码是$M_{11}$; **或者根据下面的黄字，命题变元的否定取1，命题变元取0**
* 或者这样理解，极小项就是如果那一行(先称为第m行)(这里是指结果为0的那一行)我不取，就可以得到所有为0的结果，然后对应第m行中命题变元的取值进行编码

---

* 极小项和极大项的编码

<div align=center>
<img src="https://cdn.jsdelivr.net/gh/aaronmack/image-hosting@master/mathematics/极小项和极大项的编码.1pswpo2gliio.png" width="790">
</div>

* 【1】极小项和极大项的编码方式刚好是相反的，我们可以换一种方式记忆：**首先我们考虑极小项**，极小项的编码就是让极小项为真，例如 $\neg P \wedge Q \wedge R$，要想让整个式子为真，就需要PQR都为真，$\neg P$为真，那么P就要为假，所以就是P假，Q真，R真，那么编码就是011; **其次是极大项**，极大项的编码就是让极大项为假，其余情况正好都是相反的情况

---

* 极小项和极大项的性质

<div align=center>
<img src="https://cdn.jsdelivr.net/gh/aaronmack/image-hosting@master/mathematics/极小项和极大项的性质.6d1k5lbqons.png" width="790">
</div>

#### 主范式定义

* 主析取范式和主合取范式

* 定义
  * 在给定的析取范式中，若每一个短语都是极小项，且按照编码从小到大的顺序排列，则称该范式为**主析取范式**(principal disjunctive normal form)。
  * 在给定的合取范式中，若每一个子句都是极大项，且按照编码从小到大的顺序排列，则称该范式为**主合取范式**(principal conjunctive normal form)。
  * 如果一个主析取范式不包含任何极小项，则称该主析取范式为 “空”；如果一个主合取范式不包含任何极大项，则称主合取范式为 “空”。

> 定理： 任何一个公式都有与之等价的主析取范式和主合取范式

#### 求解定理

* 主范式求解定理

<div align=center>
<img src="https://cdn.jsdelivr.net/gh/aaronmack/image-hosting@master/mathematics/主范式求解定理.7dnfihdpvxj4.png" width="790">
</div>

* **用这四步就可以求解出主范式**

---

* 范式求解方法一、公式转换法

<div align=center>
<img src="https://cdn.jsdelivr.net/gh/aaronmack/image-hosting@master/mathematics/范式求解方法一公式转换法.6in8qwb90pkw.png" width="790">
</div>

* 【1】使用分配律
* 【2】计算出编码然后排好序就得到主析取范式
* 【3】使用两次分配律展开；然后化简合并
* 【4】找缺少的项，补充上；补充完后用分配律展开得到六项
* 【5】利用幂等律消去重复的；然后得到四项，是合法的极大项

#### 真值表技术

* 范式求解方法一、真值表技术

* 真值表技术
  * 利用真值表技术求主析取范式和主合取范式的简要方法：
    * 列出真值表，选出公式的真值结果为真的所有的行，在这样的每一行中，找到其每一个解释所对应的极小项，将这些极小项进行析取即可得到相应的主析取范式。
    * 列出真值表，选出公式的真值结果为假的所有的行，在这样的每一行中，找到其每一个解释所对应的极大项，将这些极大项进行合取即可得到相应的主合取范式。
  * 从真值表按所给的算法求出主范式的方法，称为真值表技术 (technique of truth table)

<div align=center>
<img src="https://cdn.jsdelivr.net/gh/aaronmack/image-hosting@master/mathematics/范式求解方法一-真值表技术.3snyt67rvqo0.png" width="790">
</div>

* 【1】[极小项和极大项-极小项和极大项的性质](#极小项和极大项) 例如第二行，P=0，Q=0,R=1,极小项值为$m_{001}=m_1$,其它也一样
* 【2】[极小项和极大项-极小项和极大项的性质](#极小项和极大项) 极小项式子中是合取，极大项式子中是析取，将第二行的取值001写出式子，$\neg P \wedge \neg Q \wedge R $
* 【3】G已经是一个析取范式，所以求主析取范式比较容易，直接求；又我们根据**真值表技术**知道它们之间的编码是互补关系，所以可以轻松求出另一个

* 范式的相互转化
  * 由真值表技术可知，对于任一个命题公式而言，主析取范式所使用的极小项的编码和主合取范式所使用的极大项的编码是 “互补” 的关系。从而我们在求主析取范式和主合取范式时，可根据公式特点，先求出二者之一，然后可直接写出另一个。

#### 主范式应用

* 范式的应用
  * 主范式可用于了解公式的真值情况，进行公式类型的判定以及等价关系的判定。
    * 如果主析取范式包含所有的极小项，则该公式为永真公式；
    * 如果主合取范式包含所有的极大项，则该公式为永假公式；
    * 若两个公式具有相同的主析取范式或主合取范式，则两公式等价。
  * (根据真值表我们可以得知，极小项是取所有情况为真的情况，所以如果取了全部为真，也就是取了全部的极小项，根据永真公式定义，如果所有的解释之下其值都为真，则该公式就是永真公式)

<div align=center>
<img src="https://cdn.jsdelivr.net/gh/aaronmack/image-hosting@master/mathematics/主范式应用.4ok5lsobl240.png" width="790">
</div>

* 【1】根据题目要求，列出每一项，再根据题目需求，选派时需要满足这三个条件，也就是同时满足，所以列出式子

### 基本推理形式和蕴涵公式

#### 推理的基本形式

<div align=center>
<img src="https://cdn.jsdelivr.net/gh/aaronmack/image-hosting@master/mathematics/推理的基本形式.k06jlnxc7xc.png" width="790">
</div>

#### 基本蕴涵关系

<div align=center>
<img src="https://cdn.jsdelivr.net/gh/aaronmack/image-hosting@master/mathematics/基本蕴涵关系.5sez18wvdwc0.png" width="790">
</div>

### 自然演绎法推理

#### 推理规则

<div align=center>
<img src="https://cdn.jsdelivr.net/gh/aaronmack/image-hosting@master/mathematics/离散数学-推理规则.4ylwuk2e6og0.png" width="790">
</div>


#### 演绎法推理

<div align=center>
<img src="https://cdn.jsdelivr.net/gh/aaronmack/image-hosting@master/mathematics/离散数学-演绎法推理.2on1lyp8qs80.png" width="790">
</div>

* **E是使用基本等价关系推出**
* **I是使用基本蕴涵关系推出**
* **P(前提引用规则)、T(逻辑结果引用规则)和CP(附加前提规则)都是使用的推理规则**

#### 推理的应用

<div align=center>
<img src="https://cdn.jsdelivr.net/gh/aaronmack/image-hosting@master/mathematics/离散数学-推理的应用.5j97tjb495g0.png" width="790">
</div>


### 概念总结

* 否定: ¬
* 析取: V
* 合取：∧
* 蕴含: ⟶
* 等价: ↔

* 命题：具有确切真值的陈述句称为命题(proposition).
* 原子命题/简单命题: 不能再分解为更为简单命题的命题.
* 命题变元/命题变量: 一个任意的没有赋予具体内容的原子命题是一个变量命题，常称它为命题变量 (或命题变元)(propositional variable)
* 文字: 命题变元或命题变元的否定称为文字
* 简单析取式/子句: 有限个文字的析取称为简单析取式(或子句)
* 简单合取式/短语: 有限个文字的合取称为简单合取式(或短语)
* 析取范式: 有限个简单合取式（短语）的析取式称为析取范式(disjunctive normal form)；
* 合取范式: 有限个简单析取式（子句）的合取式称为合取范式(conjunctive normal form)。
* 极小项/极大项：在含有 n 个命题变元 $P_1, P_2, P_3 ... , P_n$ 的短语或子句中，若每个命题变元与其否定不同时存在，但二者之一恰好出现一次且仅一次，并且出现的次序与 $P_1, P_2, P_3 ... , P_n$ 一致，则称此短语或子句为关于 $P_1, P_2, P_3 ... , P_n$ 的一个极小项或极大项
* 主析取范式：在给定的析取范式中，若每一个短语都是极小项，且按照编码从小到大的顺序排列，则称该范式为主析取范式(principal disjunctive normal form)。
* 主合取范式：在给定的合取范式中，若每一个子句都是极大项，且按照编码从小到大的顺序排列，则称该范式为主合取范式(principal conjunctive normal form)


## 谓词逻辑

### 谓词的引入

#### 引入谓词逻辑

<div align=center>
<img src="https://cdn.jsdelivr.net/gh/aaronmack/image-hosting@master/mathematics/引入谓词逻辑.2kpcs3yobw00.png" width="790">
</div>

#### 个体词和谓词

<div align=center>
<img src="https://cdn.jsdelivr.net/gh/aaronmack/image-hosting@master/mathematics/个体词和谓词.6aj3lyvuxpc0.png" width="790">
</div>

### 量词的引入

#### 量词引入

<div align=center>
<img src="https://cdn.jsdelivr.net/gh/aaronmack/image-hosting@master/mathematics/量词引入.6sfcly33muo0.png" width="790">
</div>

#### 个体域符号化

<div align=center>
<img src="https://cdn.jsdelivr.net/gh/aaronmack/image-hosting@master/mathematics/离散数学-个体域符号化.3cpbx0w2lon4.png" width="790">
</div>

* 全称量词，放到蕴含式的前面
* 存在量词，放到合取式的前面

#### 量词真值确定

<div align=center>
<img src="https://cdn.jsdelivr.net/gh/aaronmack/image-hosting@master/mathematics/离散数学-量词真值确定.4vdx6qxmzxxc.png" width="790">
</div>

### 谓词符号化举例

#### 示例

<div align=center>
<img src="https://cdn.jsdelivr.net/gh/aaronmack/image-hosting@master/mathematics/离散数学-谓词符号化举例.3c3o2ywch3gg.png" width="790">
</div>

* 示例三中和示例四中描述的都是动物和鸟类，所以我们可以假定个体域为动物和鸟类

### 谓词合式公式

#### 四类符号

<div align=center>
<img src="https://cdn.jsdelivr.net/gh/aaronmack/image-hosting@master/mathematics/谓词合式公式-四类符号.5touv7kqhn9c.png" width="790">
</div>

#### 项

<div align=center>
<img src="https://cdn.jsdelivr.net/gh/aaronmack/image-hosting@master/mathematics/谓词合式公式-项.6mliufafl30g.png" width="790">
</div>

#### 合式公式

<div align=center>
<img src="https://cdn.jsdelivr.net/gh/aaronmack/image-hosting@master/mathematics/谓词合式公式-合式公式.76zrpcd79dvk.png" width="790">
</div>

### 自由变元与约束变元

> 合式公式何时成为命题? **所有变元用个体常量赋值或用量词约束**

#### 定义

<div align=center>
<img src="https://cdn.jsdelivr.net/gh/aaronmack/image-hosting@master/mathematics/自由变元与约束变元的定义.6v4qblfbtyf4.png" width="790">
</div>

#### 判定

<div align=center>
<img src="https://cdn.jsdelivr.net/gh/aaronmack/image-hosting@master/mathematics/自由变元与约束变元的判定.6mfim95xpu68.png" width="790">
</div>

#### 两个规则

<div align=center>
<img src="https://cdn.jsdelivr.net/gh/aaronmack/image-hosting@master/mathematics/自由变元与约束变元的两个规则.4rjz21uiutfk.png" width="790">
</div>

#### 闭式

<div align=center>
<img src="https://cdn.jsdelivr.net/gh/aaronmack/image-hosting@master/mathematics/自由变元与约束变元-闭式.4qwjf0xwnl34.png" width="790">
</div>


### 公式的解释与分类

#### 公式的解释

<div align=center>
<img src="https://cdn.jsdelivr.net/gh/aaronmack/image-hosting@master/mathematics/公式的解释与分类之解释.36psk5s6jebk.png" width="790">
</div>

#### 公式的分类

<div align=center>
<img src="https://cdn.jsdelivr.net/gh/aaronmack/image-hosting@master/mathematics/离散数学-公式的解释与分类之分类.54egj5ytxoqo.png" width="790">
</div>

### 公式的等价关系

#### 定义

<div align=center>
<img src="https://cdn.jsdelivr.net/gh/aaronmack/image-hosting@master/mathematics/离散-公式的等价关系的定义.70y2d2llhm2o.png" width="790">
</div>

#### 基本等价关系

<div align=center>
<img src="https://cdn.jsdelivr.net/gh/aaronmack/image-hosting@master/mathematics/离散-谓词演算中的基本等价公式.5okfmwdfs5mo.png" width="790">
</div>

* Example中：使用了 -> **量词转换公式 -> 德摩根律 -> 蕴含式**

### 前束范式

#### 定义

<div align=center>
<img src="https://cdn.jsdelivr.net/gh/aaronmack/image-hosting@master/mathematics/前束范式的定义.6j7tl9ozpf5s.png" width="790">
</div>

#### 求解步骤

<div align=center>
<img src="https://cdn.jsdelivr.net/gh/aaronmack/image-hosting@master/mathematics/前束范式的求解步骤.7dpav2tbtvnk.png" width="790">
</div>

### 推理形式和推理规则

#### 推理形式

<div align=center>
<img src="https://cdn.jsdelivr.net/gh/aaronmack/image-hosting@master/mathematics/离散-推理形式.3m00d7eeaqf4.png" width="790">
</div>

#### 推理规律

<div align=center>
<img src="https://cdn.jsdelivr.net/gh/aaronmack/image-hosting@master/mathematics/离散-推理规律.1oauo5j5xw5c.png" width="790">
</div>

* 窥一斑而见全豹，观滴水可知沧海
* 一叶知秋

#### 推理规则

<div align=center>
<img src="https://cdn.jsdelivr.net/gh/aaronmack/image-hosting@master/mathematics/离散-推理规则.595sbfmhu22o.png" width="790">
</div>


* US 全称特指规则 (∀x)G(x) ⟹ G(y) 或 (∀x)G(x) ⟹ G(c) c为任意个体常量
* ES 存在特指规则 (∃x)G(x) ⟹ G(c) c为使得G(c)为真的特定的个体常量
* UG 全称推广规则 G(y) ⟹ (∀x)G(x)
* EG 存在推广规则 G(y) ⟹ (∃x)G(x) 或 G(c) ⟹ (∃x)G(x)

### 综合推理方法

<div align=center>
<img src="https://cdn.jsdelivr.net/gh/aaronmack/image-hosting@master/mathematics/离散-综合推理方法.4w4b620hv4ao.png" width="790">
</div>


### 概念总结

* **个体词**: 在原子命题中,可以独立存在的客体(句子中的主语、宾语等),称为个体词。
* **谓词**: 而用以刻划客体的性质或客体之间的关系即是谓词。 
* **个体常量**: 表示具体或特定的个体词称为个体常量。一般用带或不带下标的小写英文字母a, b, c, .., a1, b1, c1, 等表示
* **个体变量**: 表示抽象的或泛指的个体词称为个体变量。一般用带或不带下标的小写英文字母x,y,z. .., x1, y1, z1, 等表示
* **个体域**: 个体词的取值范围称为个体域(或论域),常用D表示;
* **全总个体域**: 宇宙间的所有个体域聚集在一起所构成的个体域称为全总个体域。若无特别说明,均使用全总个体域。 
* **谓词常量**: 表示具体性质或关系的谓词称为谓词常量。
   * e.g.小张和小李同岁。可描述为: F(a,b) ,其中a:小张, b:小李,这里的F是谓词常量。
* **谓词变量**: 表示抽象的或泛指的性质或关系的谓词称为谓词变量。 
   * e.g.x与y具有关系L.可描述为: L(x.y) ,这里的L是谓词变量。 
* **全称量词(∀x)**: 所有的x;任意的x;一切的x;每一个x;....
* **存在量词(∃x)**: 有些x;至少有一个x;某一些x;存在x;.... 
* **特性谓词**: 一元谓词用以描述某一个个体的某种特性,而n元谓词(n> 2)则用以描述n个个体之间的关系。 

* **四类符号**
   * **常量符号**: 指所属个体域`D中的某个元素`,用带或不带下标的小写英文字母`a, b, c...., a1, bl, c1,...`来表示。
   * **变量符号**: 指所属个体域`D中的任意元素`,用带或不带下标的小写英文字母`x, y,z...., x1, y1, z1, ...`来表示。
   * **函数符号**: n元函数符号`f(x1,x2,...,xn)`可以是所属个体域集合`D^n → D`的任意个函数,用带或不带下标的小写英文字母`f,g,h...,f1,g1,h1,..`来表示。
   * **谓词符号**: n元谓词符号`P(x1,x2,...,xn)`可以是所属个体域集合`D^n → {0,1}`的任意一个谓词,用带或不带下标的大写英文字母`P,Q,R, .., P1, Q1,R1,...`来表示。 
* **项**: e.g. 任意的常量符号或任意的变量符号是项 ...
* **原子谓词公式/原子公式**: 若`P(x1,x2, ..,xn)`是n元谓词, `t1,t2, ..,tn`是项,则称`P(t1, t2,...,tn)`为原子谓词公式,简称原子公式。
* **合式公式**: e.g. 原子公式是合式公式 ...
* **约束变元/自由变元**: 给定一个合式公式G,若变元x出现在使用变元的量词的辖域之内,则称变元x的出现为约束出现,此时的变元x称为约束变元。若x的出现不是约束出现,则称它为自由出现,此时的变元x称为自由变元。
* **量词辖域**: 若量词后有括号,则括号内的子公式就是该量词的辖域; (∀x)(...)若量词后无括号,则与量词邻接的子公式为该量词的辖域。(∀x)F(x)
* **闭式**: 设G是任意一个公式,若G中无自由出现的个体变元,则称G为封闭的合式公式,简称闭式。
* **等价**: 如果公式G ↔ H是有效公式,则公式G.H称为等价的,记为G=H. 
* **前束范式/基式**: 称公式G是一个前束范式,如果G中的一切量词都位于该公式的最前端(不含否定词)且这些量词的辖域都延伸到公式的末端。其标准形式如下:`(Q1x1)(Q2x2)...(QnXn)M(x1,x2,...,xn)`其中`Q`,为量词`∀`或`∃(i=1,...n)`, M称作公式G的母式(基式), M中不再有量词。 

* 推导规则:
  * [演绎法推理](#演绎法推理)
    * E是使用基本等价关系推出 [公式-基本等价关系](#基本等价关系) [公式-基本等价关系-公式的等价关系](#基本等价关系)
    * I是使用基本蕴涵关系推出 [公式-基本蕴涵关系](#基本蕴涵关系) [公式-推理规律](#推理规律)
    * P(前提引用规则)
    * T(逻辑结果引用规则)
    * CP(附加前提规则)
  * [推理规则](#推理规则)
    * US 全称特指规则 (∀x)G(x) ⟹ G(y) 或 (∀x)G(x) ⟹ G(c) c为任意个体常量
    * ES 存在特指规则 (∃x)G(x) ⟹ G(c) c为使得G(c)为真的特定的个体常量
    * UG 全称推广规则 G(y) ⟹ (∀x)G(x)
    * EG 存在推广规则 G(y) ⟹ (∃x)G(x) 或 G(c) ⟹ (∃x)G(x)

## 二元关系

### 序偶和笛卡尔积

#### 引言

> 引言 - 万事万物皆有联系
   * 蝴蝶效应 - 亚马逊雨林一只蝴蝶翅膀偶尔振动，也许两周后就会引起美国得克萨斯州的一场龙卷风; 初始十分微小的变化，经过不断放大，对其未来状态会造成极其巨大的差别
   * 八卦 - 太极生两仪，两仪生四象，四象生八卦，八卦生万物

#### 序偶

<div align=center>
<img src="https://cdn.jsdelivr.net/gh/aaronmack/image-hosting@master/mathematics/二元关系-序偶.w7tncr986a8.png" width="790">
</div>

* 尖括号表明了一定的顺序关系

#### 笛卡儿积

<div align=center>
<img src="https://cdn.jsdelivr.net/gh/aaronmack/image-hosting@master/mathematics/笛卡尔积.6vxkx4vsybnk.png" width="790">
</div>

#### 推广

<div align=center>
<img src="https://cdn.jsdelivr.net/gh/aaronmack/image-hosting@master/mathematics/序偶和笛卡尔积的推广.5skdzrorg41s.png" width="790">
</div>


### 关系的定义

#### 二元关系定义

<div align=center>
<img src="https://cdn.jsdelivr.net/gh/aaronmack/image-hosting@master/mathematics/离散-二元关系定义.3sud7sr40wsg.png" width="790">
</div>

#### 定义域和值域

<div align=center>
<img src="https://cdn.jsdelivr.net/gh/aaronmack/image-hosting@master/mathematics/离散-二元关系的定义域和值域.4j4ltnabktfk.png" width="790">
</div>

#### n元关系

<div align=center>
<img src="https://cdn.jsdelivr.net/gh/aaronmack/image-hosting@master/mathematics/离散-二元关系的推广-n元关系.781z1rt35k74.png" width="790">
</div>

### 关系的表示

#### 集合表示法

<div align=center>
<img src="https://cdn.jsdelivr.net/gh/aaronmack/image-hosting@master/mathematics/离散-关系的集合表示.7ew8cr71bz40.png" width="790">
</div>

#### 关系图表示法

<div align=center>
<img src="https://cdn.jsdelivr.net/gh/aaronmack/image-hosting@master/mathematics/离散-关系的图形表示.6lnctzcg5aps.png" width="790">
</div>

#### 关系矩阵表示法

<div align=center>
<img src="https://cdn.jsdelivr.net/gh/aaronmack/image-hosting@master/mathematics/离散-关系的矩阵表示.6w3vs4tsmg74.png" width="790">
</div>

#### 布尔矩阵的运算

<div align=center>
<img src="https://cdn.jsdelivr.net/gh/aaronmack/image-hosting@master/mathematics/离散-布尔矩阵的运算.4a61df1v1ssg.png" width="790">
</div>

### 关系的运算

> 回顾：二元关系是笛卡尔积的子集，因而是集合，所以集合的一切的都可以用到关系上，这有点类似于面向对象的概念，集合是父类，关系是子类，父类有的，子类都有，因而集合的所有运算都适用于关系

#### 基本运算

<div align=center>
<img src="https://cdn.jsdelivr.net/gh/aaronmack/image-hosting@master/mathematics/离散-关系的基本运算.29q4c6t4kvuo.png" width="790">
</div>

#### 复合运算

<div align=center>
<img src="https://cdn.jsdelivr.net/gh/aaronmack/image-hosting@master/mathematics/离散数学-关系的复合运算.69hafzik7u2o.png" width="790">
</div>

#### 逆运算

<div align=center>
<img src="https://cdn.jsdelivr.net/gh/aaronmack/image-hosting@master/mathematics/离散数学-关系的逆运算.7cmpc7pyyow0.png" width="790">
</div>

### 关系的运算性质

#### 复合运算性质

<div align=center>
<img src="https://cdn.jsdelivr.net/gh/aaronmack/image-hosting@master/mathematics/关系的运算性质-复合运算性质.39ez6l8prjgg.png" width="790">
</div>

#### 逆运算性质

<div align=center>
<img src="https://cdn.jsdelivr.net/gh/aaronmack/image-hosting@master/mathematics/关系的运算性质-逆运算性质.6n7z1cw7qa9s.png" width="790">
</div>

### 关系的幂运算

#### 幂运算定义

<div align=center>
<img src="https://cdn.jsdelivr.net/gh/aaronmack/image-hosting@master/mathematics/离散-幂运算的定义.7i91pferan0g.png" width="790">
</div>

#### 幂运算的性质

<div align=center>
<img src="https://cdn.jsdelivr.net/gh/aaronmack/image-hosting@master/mathematics/离散-幂运算的性质.euyyf95vkmw.png" width="790">
</div>

* |A|表示基数，⋃ 表示并， 公式为：R的n次幂，i从1到A的基数R^i的并

#### 幂运算的收敛性

<div align=center>
<img src="https://cdn.jsdelivr.net/gh/aaronmack/image-hosting@master/mathematics/离散-幂运算的收敛性.5q5xqrek93ls.png" width="790">
</div>

### 关系的性质 (一)

#### 自反性与反自反性 

<div align=center>
<img src="https://cdn.jsdelivr.net/gh/aaronmack/image-hosting@master/mathematics/关系的性质-自反性与反自反性.cow07jtc2xk.png" width="790">
</div>

#### 对称性与反对称性

<div align=center>
<img src="https://cdn.jsdelivr.net/gh/aaronmack/image-hosting@master/mathematics/关系的性质-对称性与反对称性.76hnh84bd3sw.png" width="790">
</div>

* 这里与线性代数的本质中，点积中所讲的对称性意义一样

#### 传递性

<div align=center>
<img src="https://cdn.jsdelivr.net/gh/aaronmack/image-hosting@master/mathematics/关系的性质-传递性.2dui7h96mkcg.png" width="790">
</div>

### 关系的性质 (二)

#### 判定定理

<div align=center>
<img src="https://cdn.jsdelivr.net/gh/aaronmack/image-hosting@master/mathematics/关系性质的判定定理.681p0orp39c0.png" width="790">
</div>

* $I_A$ 中包含了所有元素自身相关的序偶，见[**概念总结-恒等关系**]

#### 保守性

<div align=center>
<img src="https://cdn.jsdelivr.net/gh/aaronmack/image-hosting@master/mathematics/关系性质的保守性.5gcjst0v1lhc.png" width="790">
</div>

### 关系的闭包

> 引言

<div align=center>
<img src="https://cdn.jsdelivr.net/gh/aaronmack/image-hosting@master/mathematics/关系的闭包-引言.4d1megdcfedc.png" width="790">
</div>

#### 什么是闭包

<div align=center>
<img src="https://cdn.jsdelivr.net/gh/aaronmack/image-hosting@master/mathematics/离散数学-什么是闭包.1qvsvdqcg65c.png" width="790">
</div>

#### 闭包求解

<div align=center>
<img src="https://cdn.jsdelivr.net/gh/aaronmack/image-hosting@master/mathematics/离散数学-闭包求解.21myncd45gyo.png" width="790">
</div>

* 利用关系运算求闭包: Theorem 3 - 这里是使用的[关系性质的判定定理] R是传递的 ⟺ R ○ R ⊆ R; 一个关系R的传递性是当且仅当R复合R是R的子集，因而求它的传递闭包也就等同于不停的求复合，直到没有新的元素出现为止

### 概念总结
* **序偶**: 由两个元素按照一定的次序组成的二元组称为序偶,记作`<x,y>` ,其中x是第一元素,y是第二元素。
* **笛卡尔积**: 设A, B是两个集合,称集合`AxB={<x,y>|(x ∈ A)∧(y ∈ B)}`为集合A与B的笛卡儿积。 
* **二元关系**: 设A,B为两个非空集合,称AxB的任意子集R为从A到B的一个二元关系,简称关系(relation),其中,A称为关系R的前域, B称为关系R的后域。如果A=B,则称R为A上的一个二元关系。 
* **空关系**: 当R=∅时，称R为从A到B的空关系(empty relation);
* **全关系**: R=AxB时,称R为从A到B的全关系(total relation) ; A上的全关系通常记为 $E_A$。
* **恒等关系**: 当`R=I_A={<x, x>|x ∈ A}`时,称R为A上的恒等关系(identity relation).
* **前域/后域**: 设R是从A到B的二元关系,则A为关系R的前域, B为关系R的后域。
* **定义域/值域/域**: $C=\{ x|x\in A, \exist u \in B, <x,y> \in R \}, \ D=\{y|y\in B, \exist x\in A, <x,y>\in R \}$ 称C为R的定义域(domain)，记为$C=dom R$; D为R的值域(range),记为$D=ran R$; fldR = domR ⋃ ranR为R的域(field)
* **关系矩阵/邻接矩阵**: [关系矩阵表示法](#关系矩阵表示法)
* **复合关系/复合运算**: [复合运算](#复合运算)
* **自反性/反自反性/对称性/反对称性/传递性**: [关系的性质(一)](#关系的性质-一)
* **闭包/自反闭包/对称闭包/传递闭包**: [什么是闭包](#什么是闭包)

> 我们在生活中会遇到很多都是具有关系的，例如同性关系, A是女生，A和A也就是和自己也是女生，自反性；A和B是女生，B和A也是女生，对称性；A和B是女生，B和C是女生，则A和C也是女生，传递性； 但有一些则不是的，例如，朋友关系，A和A是朋友关系，A和B是朋友关系，B和A也是朋友关系，但如果B和C是朋友关系，但A和C就不一定是朋友关系的，可能都不认识

## 特殊关系

### 等价关系定义
#### 定义

<div align=center>
<img src="https://cdn.jsdelivr.net/gh/aaronmack/image-hosting@master/mathematics/等价关系的定义.3zy9whypspq8.png" width="790">
</div>

#### 等价类和商集

<div align=center>
<img src="https://cdn.jsdelivr.net/gh/aaronmack/image-hosting@master/mathematics/等价类和商集.6dkov6lmh1xc.png" width="790">
</div>


### 集合的划分

#### 定义

<div align=center>
<img src="https://cdn.jsdelivr.net/gh/aaronmack/image-hosting@master/mathematics/离散数学-集合的划分的定义.5zz11vzq2cg0.png" width="790">
</div>

#### 等价划分

<div align=center>
<img src="https://cdn.jsdelivr.net/gh/aaronmack/image-hosting@master/mathematics/离散数学-集合的划分之等价划分.4n9z514eok1s.png" width="790">
</div>

#### 等价关系导出

<div align=center>
<img src="https://cdn.jsdelivr.net/gh/aaronmack/image-hosting@master/mathematics/离散数学-集合的划分之等价关系导出.1r2zmv3w9ym8.png" width="790">
</div>


### 偏序关系定义

> 等价关系 -> 分类

> 偏序关系 -> 排序

#### 定义

<div align=center>
<img src="https://cdn.jsdelivr.net/gh/aaronmack/image-hosting@master/mathematics/离散数学-偏序关系定义.5b78o0e04ark.png" width="790">
</div>

#### 可比与覆盖

<div align=center>
<img src="https://cdn.jsdelivr.net/gh/aaronmack/image-hosting@master/mathematics/偏序关系定义-可比与覆盖.13sv42xw16bk.png" width="790">
</div>

#### 字典排序

<div align=center>
<img src="https://cdn.jsdelivr.net/gh/aaronmack/image-hosting@master/mathematics/离散数学-计算机科学中的字典排序.53gd1oertxc.png" width="790">
</div>

### 哈斯图及特殊元素

> 引言: 在偏序集的关系图中, 许多有向边可以不用显示出来. 例如, 偏序关系满足自反性, 所以每个结点都有环, 因此可以不必显示这些环; 又如, 偏序关系满足传递性, 我们不必显示由于传递性而必须出现的边; 另外, 由于其反对称的特性, 我们可以规定边的方向, 从而省去箭头.按照以上方法对关系图进行简化而得到的图形叫做哈斯图, 哈斯图对于判断元素之间的先后顺序以及确定特殊元素非常方便

#### 哈斯图

<div align=center>
<img src="https://cdn.jsdelivr.net/gh/aaronmack/image-hosting@master/mathematics/哈斯图.35mwegx4kc8w.png" width="790">
</div>

#### 特殊元素

<div align=center>
<img src="https://cdn.jsdelivr.net/gh/aaronmack/image-hosting@master/mathematics/离散数学-特殊元素.1villmb3z0bk.png" width="790">
</div>

* 最大元和最小元: 2和3不可比，所以既没有最小的，也没有最大的，记得这里是整除关系，而不是数字的大小比较
* 极大元和极小元: 没有比2更大的，也没有比3更大的

### 其它次序关系

#### 拟序关系

<div align=center>
<img src="https://cdn.jsdelivr.net/gh/aaronmack/image-hosting@master/mathematics/离散数学-拟序关系.4omiofv01lvk.png" width="790">
</div>

#### 全序关系

<div align=center>
<img src="https://cdn.jsdelivr.net/gh/aaronmack/image-hosting@master/mathematics/离散数学-全序关系.4ghs9uepx8xs.png" width="790">
</div>

#### 良序关系

<div align=center>
<img src="https://cdn.jsdelivr.net/gh/aaronmack/image-hosting@master/mathematics/离散数学-良序关系.2ul09378jn0g.png" width="790">
</div>

* 为什么整数集上的小于等于关系不是良序关系，因为整数集上找不到最小的元素

### 函数基本定义

> 由于函数体现了自变量与函数值之间的关系，因而可从二元关系的角度来研究

> 引言: 函数是数学中的一个基本概念, 它非常古老, 这个词出现于十七世纪下半叶,比关系理论早两个多世纪, 由伟大的数学家莱布尼兹提出, 他也与牛顿各自独立的发现了微积分的基本定理.在高等数学中, 函数一般是在实数集的基础上来研究, 通常是连续或间断连续的函数. 在这里, 我们将函数看作是一种特殊的二元关系, 从离散量的角度讨论函数的定义, 运算和性质.函数的概念在日常生活和计算机科学中非常重要. 例如, 各种高级程序语言中都大量的使用了函数。实际上, 计算机的任何输出都可看成是某些输入的函数.

> 引例

<div align=center>
<img src="https://cdn.jsdelivr.net/gh/aaronmack/image-hosting@master/mathematics/离散数学-函数的引例.4izol6ib15kw.png" width="790">
</div>

#### 定义

<div align=center>
<img src="https://cdn.jsdelivr.net/gh/aaronmack/image-hosting@master/mathematics/离散数学-函数的定义.5i1sltl9jbsw.png" width="790">
</div>

#### 举例

<div align=center>
<img src="https://cdn.jsdelivr.net/gh/aaronmack/image-hosting@master/mathematics/离散数学-函数的举例.412ubjugrups.png" width="790">
</div>

#### 数量

<div align=center>
<img src="https://cdn.jsdelivr.net/gh/aaronmack/image-hosting@master/mathematics/离散数学-函数的数量.1m0muckhfu9s.png" width="790">
</div>

#### 比较

<div align=center>
<img src="https://cdn.jsdelivr.net/gh/aaronmack/image-hosting@master/mathematics/离散数学-关系与函数的差别.3v69ayrq2x6o.png" width="790">
</div>


### 函数的类型
* [1] 离散数学自然映射什么意思？ https://www.zhihu.com/question/357125199

#### 类型

<div align=center>
<img src="https://cdn.jsdelivr.net/gh/aaronmack/image-hosting@master/mathematics/离散数学-函数的类型.7i9qiozgte2o.png" width="790">
</div>

#### 必要条件

<div align=center>
<img src="https://cdn.jsdelivr.net/gh/aaronmack/image-hosting@master/mathematics/离散数学-函数类型的必要条件.59gblmx4cwe8.png" width="790">
</div>

#### 数学化描述

<div align=center>
<img src="https://cdn.jsdelivr.net/gh/aaronmack/image-hosting@master/mathematics/离散数学-函数类型的数学化描述.5d0f9ees4pkw.png" width="790">
</div>

#### 证明

<div align=center>
<img src="https://cdn.jsdelivr.net/gh/aaronmack/image-hosting@master/mathematics/离散数学-函数类型的证明.5k7dtzm6a16o.png" width="790">
</div>

> 自然映射[1]: 设 R 是 集合 A 上的等价关系,定义映射 g：A → A/R 为 g(a) = [a], 即把 A 的元素 a 映射到 a 的等价类 [a],这样的映射就称为自然映射.**比如整数集 Z 在某等价关系下分成两个等价类：偶数类 2Z 和 奇数类 2Z+1,则分别把 2k 和 2k+1 映成 2Z 和 2Z+1 的映射就是一个自然映射**.

### 函数的运算

> 两个函数的并和交不一定是函数； 例如，假设集合A={x},集合B={yl, y2},f和g均为A到B的函数。`f={<x,y1>}` `g={<x,y2>}`

#### 函数的复合运算

<div align=center>
<img src="https://cdn.jsdelivr.net/gh/aaronmack/image-hosting@master/mathematics/离散数学-函数的复合运算.szjcppkyuww.png" width="790">
</div>

#### 复合运算保守性

<div align=center>
<img src="https://cdn.jsdelivr.net/gh/aaronmack/image-hosting@master/mathematics/离散数学-函数复合运算的保守性.4wxnhn70grnk.png" width="790">
</div>

#### 函数的逆运算

<div align=center>
<img src="https://cdn.jsdelivr.net/gh/aaronmack/image-hosting@master/mathematics/离散数学-函数的逆运算.38mirhltrrb4.png" width="790">
</div>

### 概念总结
* **等价关系**: 设R是非空集合A上的关系,如果R是自反的、对称的、传递的,则称R为A上的等价关系(equivalent relation). e.g. 同姓关系
* **等价类/生成元**: 设R是非空集合A上的等价关系,对任意$x\in A$,称集合$[x]_R=\{ y|y\in A, <x,y>\in R\}$,为x关于R的等价类(equivalence class) ,或叫作由x生成的一个R等价类,其中x称为$[x]_R$的生成元(代表元或典型元)(generator).
* **商集**: 设R是非空集合A上的等价关系,由R确定的**一切等价类的集合**,称为集合A上关于R的商集(quotient set) ,记为$A/R$,即$A/R=\{[x]_R|x\in A \}$
* **集合划分/块/类**: 给定一个非空集合A,设有集合 `π = ({S1, S2, .., Sm}`。如果满足: ......, 则集合 称作集合A的一个划分(partition) ,而S1, S2,...,Sm叫做这个划分的块(block)或类(class).
* **等价划分**: 设R是非空集合A上的等价关系,则A对R的商集A/R是A的一个划分,称为由R所导出的等价划分.
* **集合划分导出等价关系**: 给定集合A的一个划分 `π = {S1, S2,..., Sm}` ,则由该划分确定的关系. `R= (S1 x S1) U (S2 x S2) U...U (Sm x Sm)` (x是笛卡尔积) 是A上的等价关系。我们称该关系`R`为由划分`π`所导出的等价关系。
* **偏序关系**: 设R是非空集合A上的关系,如果R是自反的、反对称的、传递的,则称R为A上的偏序关系(partial order relation)
* **可比与覆盖**: 设R是非空集合A上的偏序关系, $\exist x,y\in A$,如果x≤y或y≤x，则称x与y可比；如果x≤y且不存在$z\in A$使得x≤z≤y，则称y覆盖x
* **哈斯图**: [哈斯图](#哈斯图)
* **最大元/最小元**: [特殊元素](#特殊元素)
* **极大元/极小元**: [特殊元素](#特殊元素)
* **上界/上确界**: [特殊元素](#特殊元素)
* **下界/下确界**: [特殊元素](#特殊元素)
* **拟序关系/拟序集**: [拟序关系](#拟序关系) e.g. 实数集上的小于关系是拟序关系
* **全序关系(全序集/线序集/链)**: [全序关系](#全序关系) e.g. 数集上的小于等于关系是全序关系
* **良序关系/良序集**: [良序关系](#良序关系) e.g. 整数集上的小于等于关系不是良序关系, 但正整数集上的小于等于关系是良序关系
* **函数/定义域/值域/自变量(原像)/函数值(像)**
* **单射/满射/双射**
* **典型映射**
* **复合函数**

## 图论基础

> 计算机出现以后，图论得到了长足的发展,至会仍然活跃在科研和实际应用的第一线，如现在受到普遍关注的云计算，大数据应用和深度学习等。

> 图论中所谓的图是指某类具体离散事物集合和该集合中的每对事物间以某种方式相联系的数学模型。一个图就是由一个表示具体事物的点的集合和表示事物之间联系的一些线的集合所构成。

> 引言:

<div align=center>
<img src="https://cdn.jsdelivr.net/gh/aaronmack/image-hosting@master/mathematics/离散数学-图论基础-引言.2q1uoeaiymrk.png" width="790">
</div>

### 图的引入

#### 图的示例

<div align=center>
<img src="https://cdn.jsdelivr.net/gh/aaronmack/image-hosting@master/mathematics/离散数学-图的示例.3xg6hy08zrgg.png" width="790">
</div>

* 栖息地重叠图: 两点之间表示的是食物竞争关系
* 群体影响图: 谁对谁有影响时，就建立一条有向边；通过这种模型可以分析社会中的核心影响力人物
* 巡回联赛: 两个队伍之间都恰好比赛一次；谁击败谁就链接一条有向边，可以看到队伍1击败了所有对手
* 优先图: 表示了需要赋值时之间的顺序关系，例如想给S4赋值之前必须先给S1个S2赋值，通过图可以很清楚的看出；可以帮助我们制定行之有效的并行策略

#### 无序对

<div align=center>
<img src="https://cdn.jsdelivr.net/gh/aaronmack/image-hosting@master/mathematics/离散数学-无序对和无序积.msf1xf5v4c0.png" width="790">
</div>

* 注意与笛卡尔积的区别，笛卡尔积中使用的是尖括号<>,表示是有顺序的，这里使用的圆括号()，表示的是无顺序的

#### 图的定义

<div align=center>
<img src="https://cdn.jsdelivr.net/gh/aaronmack/image-hosting@master/mathematics/离散数学-图的定义.43bace18mugw.png" width="790">
</div>

### 图的表示

#### 集合表示和图形表示

<div align=center>
<img src="https://cdn.jsdelivr.net/gh/aaronmack/image-hosting@master/mathematics/离散数学-图的表示-集合表示和图形表示.4s10agyz72tc.png" width="790">
</div>

#### 矩阵表示法

<div align=center>
<img src="https://cdn.jsdelivr.net/gh/aaronmack/image-hosting@master/mathematics/离散数学-图的表示-矩阵表示法.53eipr7h8pvk.png" width="790">
</div>

#### 邻接点与邻接边

<div align=center>
<img src="https://cdn.jsdelivr.net/gh/aaronmack/image-hosting@master/mathematics/离散数学-图的表示-邻接点与邻接边.3hdzzuer662o.png" width="790">
</div>


### 图的分类

#### 按边的方向分类

<div align=center>
<img src="https://cdn.jsdelivr.net/gh/aaronmack/image-hosting@master/mathematics/图的分类-按边的方向分类.11yaw5uvzyrk.png" width="790">
</div>

#### 按平行边分类

<div align=center>
<img src="https://cdn.jsdelivr.net/gh/aaronmack/image-hosting@master/mathematics/图的分类-按平行边分类.4zm8uf0nbi4g.png" width="790">
</div>

#### 按权值分类

<div align=center>
<img src="https://cdn.jsdelivr.net/gh/aaronmack/image-hosting@master/mathematics/图的分类-按权值分类.4hyns2e6y9vk.png" width="790">
</div>

#### 综合分类方法

<div align=center>
<img src="https://cdn.jsdelivr.net/gh/aaronmack/image-hosting@master/mathematics/图的分类-综合分类方法.2iuedrfwfayo.png" width="790">
</div>


### 子图和补图

#### 子图

<div align=center>
<img src="https://cdn.jsdelivr.net/gh/aaronmack/image-hosting@master/mathematics/子图和补图-各类子图.243hc5eivl6o.png" width="790">
</div>

* 导出子图: 某一部分中之间的关系；例如全校的师生关系，有时候我们只需要研究某个班级的师生关系，所以只需要与这个班级相关

#### 完全图

<div align=center>
<img src="https://cdn.jsdelivr.net/gh/aaronmack/image-hosting@master/mathematics/离散数学-完全图.4ugqmei334ao.png" width="790">
</div>

#### 补图

<div align=center>
<img src="https://cdn.jsdelivr.net/gh/aaronmack/image-hosting@master/mathematics/离散数学-补图.5cr624euvtds.png" width="790">
</div>

* 为什么需要补图: 例如我们有一个一群人之间认识情况的图，如果想要研究这一群人之中哪些人不认识，就会用到补图
* 补图的邻接矩阵: 主对角线都为0，这是因为，它们是简单图，不存在自身的闭环
* 补图的应用: **这5条边一定有3条在G或G补中**是根据鸽笼原理(把多于n个的物体例如n+1放到n个抽屉里，则至少有一个抽屉里的东西不少于两件)，假设只有1个放在G中，那么就必然有4个在G补中，或只有2两个放在G中，那么就必然有3个G补中，反之亦然

### 握手定理

#### 结点的度数

<div align=center>
<img src="https://cdn.jsdelivr.net/gh/aaronmack/image-hosting@master/mathematics/离散数学-握手定理-结点的度数.701o5lldvbi8.png" width="790">
</div>

#### 握手定理

<div align=center>
<img src="https://cdn.jsdelivr.net/gh/aaronmack/image-hosting@master/mathematics/离散数学-握手定理.3mtjs0hv6io0.png" width="790">
</div>

#### 度数序列

<div align=center>
<img src="https://cdn.jsdelivr.net/gh/aaronmack/image-hosting@master/mathematics/离散数学-握手定理-度数序列.2ykkfis0ln0g.png" width="790">
</div>

* 图的度数序列: 为什么(3, 5, 1, 4)， (1, 2, 3, 4, 5)， 因为(3, 5, 1, 4)中有(3,5,1)三个奇数 和 (1, 2, 3, 4, 5)中也有(1,3,5)三个奇数，总度数是为偶的，所以这个无法构成度数序列

### 图的同构

#### 引言

<div align=center>
<img src="https://cdn.jsdelivr.net/gh/aaronmack/image-hosting@master/mathematics/图的同构-引言.4lhz2yibnwxs.png" width="790">
</div>

#### 定义

<div align=center>
<img src="https://cdn.jsdelivr.net/gh/aaronmack/image-hosting@master/mathematics/图的同构-定义.5ht4o7bth400.png" width="790">
</div>

#### 必要条件

<div align=center>
<img src="https://cdn.jsdelivr.net/gh/aaronmack/image-hosting@master/mathematics/图同构的必要条件.36waiducd0zk.png" width="790">
</div>


### 通路和回路

> 引言

<div align=center>
<img src="https://cdn.jsdelivr.net/gh/aaronmack/image-hosting@master/mathematics/通路和回路-引言.4v525wydq934.png" width="790">
</div>

#### 通路与回路

<div align=center>
<img src="https://cdn.jsdelivr.net/gh/aaronmack/image-hosting@master/mathematics/通路与回路.1fl58rtssjhc.png" width="790">
</div>

* 复杂通路: 边数出现相同
* 简单通路: 边数都不相同
* 基本通路: 节点数都不相同

#### 通路数量

<div align=center>
<img src="https://cdn.jsdelivr.net/gh/aaronmack/image-hosting@master/mathematics/通路数量的概念.5z2fr75dxw5c.png" width="790">
</div>

* 邻接矩阵乘法与矩阵乘法一样，幂就是自己乘自己
* 邻接矩阵中例如$A^{2}_{G_1}$是2次幂，所有元素加起来就是长度为2的所有通路数，其中也包含回路，回路数就是主对角线上的元素相加

### 可达性与最短通路

#### 可达性

<div align=center>
<img src="https://cdn.jsdelivr.net/gh/aaronmack/image-hosting@master/mathematics/离散数学-可达性.1qqad9ge8gg0.png" width="790">
</div>

* 无向图的可达性矩阵是对称的，而有向图的可达性矩阵则不一定对称

#### 最短通路

<div align=center>
<img src="https://cdn.jsdelivr.net/gh/aaronmack/image-hosting@master/mathematics/离散数学-最短通路.123f7uogqvhs.png" width="790">
</div>

* 最短通路应用：例如高德百度地图等，我们想要去到某个地方，其实本质上就是求解最短通路

### 无向图的连通性

#### 无向图的连通性

<div align=center>
<img src="https://cdn.jsdelivr.net/gh/aaronmack/image-hosting@master/mathematics/无向图的连通性.a2600qh3ggw.png" width="790">
</div>

#### 点割集与边割集

<div align=center>
<img src="https://cdn.jsdelivr.net/gh/aaronmack/image-hosting@master/mathematics/点割集与边割集.74jua79cgwzk.png" width="790">
</div>

* 点割集: 为什么$\{ v_2, v_4 \} \{ v_1, v_6\}$不是点割集，因为只需要删除$v_2$就可以增加连通数了，可以不用删除$v_4$， $\{ v_1, v_6\}$同理

#### 连通度

<div align=center>
<img src="https://cdn.jsdelivr.net/gh/aaronmack/image-hosting@master/mathematics/离散数学-连通度.bu2ihkqbafk.png" width="790">
</div>


### 有向图的连通性

#### 有向图的连通性

<div align=center>
<img src="https://cdn.jsdelivr.net/gh/aaronmack/image-hosting@master/mathematics/有向图的连通性.1e49qjvxt674.png" width="790">
</div>

#### 连通分支

<div align=center>
<img src="https://cdn.jsdelivr.net/gh/aaronmack/image-hosting@master/mathematics/三类连通分支.3wv3xjqk34w0.png" width="790">
</div>

### 概念总结
* **图**: 图论中的图是指**某类具体离散事物集合**和**该集合中的每对事物间以某种方式相联系**的**数学模型**
* **无序对/无序积**: 设 A,B 为任意集合, 称集合 `A&B = {(a,b)|a ∈ A, b ∈ B}` 为 A 与 B 的无序积,`(a,b)` 称为无序对
* **结点/结点集**: [什么是图](#图的定义)
* **边/边集**: [什么是图](#图的定义)
* **邻接矩阵**
* **邻接点/邻接边**: [邻接点与邻接边](#邻接点与邻接边)
* **环(自回路)/孤立结点**: [邻接点与邻接边](#邻接点与邻接边)
* **零图**：仅由孤立结点组成的图称为零图
* **平凡图**：仅含一个结点的零图称为平凡图
* **(n,m)图**：含有 n 个结点,m 条边的图, 称为(n; m) 图
* **无向图/有向图/混合图**: [图的分类](#图的分类)
* **多重图/线图/简单图**: [图的分类](#图的分类)
* **赋权图/无权图**: [图的分类](#图的分类)
* **子图/真子图/生成子图/导出子图** [子图](#子图)
* **无向完全图/有向完全图** [完全图](#完全图)
* **补图** [补图](#补图)
* **度数/出度/入度/悬挂节点/悬挂边**: [结点的度数](#结点的度数) 度数为1的结点称为悬挂结点，以悬挂结点为端点的边称为悬挂边
* **握手定理**: 图中结点度数的总和等于边数的二倍; 推论: 图中度数为奇数的结点个数为偶数； 推论：有向图中各结点的出度之和等于各结点的入度之和，等于边数 (**每一条边都连接了两个节点之间，都会被算作两个度，所以无论是奇数边还是偶数边，两倍之后都是偶数**)(推论中的证明是是使用了拆分，首先结果为偶数，其次拆分的两个一个为奇，一个为偶，因为偶数之和为偶数，所以要保证结果为偶，那么奇的那个就必须为偶)
* **度数序列** [度数序列](#度数序列)
* **同构**: 形象地说，若图的结点可以任意挪动位置，而边是完全弹性的，只要在不拉断的条件下，一个图可以变形为另一个图，那么这两个图是同构的。
* **通路/回路**: [通路与回路](#通路与回路)
* **简单通路/简单回路/复杂通路/复杂回路**: [通路与回路](#通路与回路)
* **基本通路(初级通路)/基本回路(初级回路)**: [通路与回路](#通路与回路)
* **可达/不可达**: 如果两个节点间存在通路，那么就是可达的; 任何结点到自己都是可达的
* **短程线**: 如果两个节点之间可达，则称长度最短的通路为这两个节点的短程线
* **连通图/非连通图(分离图)**: 若无向图 G 中的任何两个结点都是可达的，则称 G 是连通图，否则称 G 是非连通图或分离图
* **点割集/割点/边割集/割边**: [点割集与边割集](#点割集与边割集)
* **点连通度/边连通度**: 在连通的无向图中，由点割集和边割集可知，其连通的程度也有较大差异，这一点可用点连通度和边连通度来表示。
* **彼得森图**: TO
* **连通图(弱连通图)/非连通图/单向连通图/强连通图**: 略去 G 中所有有向边的方向得无向图是连通图，则称向图 G 是连通图或称为**弱连通图**。否则称 G 是非连通图；若 G 中任何一对结点之间至少有一个结点到另一个结点是可达的，则称 G 是**单向连通图**；若 G 中任何一对结点之间都是相互可达的，则称 G 是**强连通图**
* **强连通分支/单向连通分支/弱连通分支(强分图/单向分图/弱分图)**: [三类连通分支](#三类连通分支)

## 树

### 认识树

#### 树的模型

<div align=center>
<img src="https://cdn.jsdelivr.net/gh/aaronmack/image-hosting@master/mathematics/离散数学-树-认识树-树的模型.59jrnyv2zc00.png" width="790">
</div>

#### 树的应用

<div align=center>
<img src="https://cdn.jsdelivr.net/gh/aaronmack/image-hosting@master/mathematics/离散数学-树-认识树-树的应用.107kx0donqgg.png" width="790">
</div>


### 无向树

#### 定义

<div align=center>
<img src="https://cdn.jsdelivr.net/gh/aaronmack/image-hosting@master/mathematics/离散数学-树-无向树-定义.6e1j0dxht56o.png" width="790">
</div>

#### 树的性质

<div align=center>
<img src="https://cdn.jsdelivr.net/gh/aaronmack/image-hosting@master/mathematics/离散数学-树-无向树-树的性质.5k3ci0do1yf4.png" width="790">
</div>

#### 性质应用

<div align=center>
<img src="https://cdn.jsdelivr.net/gh/aaronmack/image-hosting@master/mathematics/离散数学-树-无向树-性质应用.4lid9e9g4sjk.png" width="790">
</div>


### 生成树

#### 引入

<div align=center>
<img src="https://cdn.jsdelivr.net/gh/aaronmack/image-hosting@master/mathematics/离散数学-树-生成树-引入.3vudr9e9qrsw.png" width="790">
</div>

#### 定义

<div align=center>
<img src="https://cdn.jsdelivr.net/gh/aaronmack/image-hosting@master/mathematics/离散数学-树-生成树-定义.6sda65qiz0g0.png" width="790">
</div>

#### 算法

<div align=center>
<img src="https://cdn.jsdelivr.net/gh/aaronmack/image-hosting@master/mathematics/离散数学-树-生成树-算法.4bg7u7is8zls.png" width="790">
</div>

#### 应用

<div align=center>
<img src="https://cdn.jsdelivr.net/gh/aaronmack/image-hosting@master/mathematics/离散数学-树-生成树-应用.oico7owrla8.png" width="790">
</div>


### 最小生成树

#### 引入

<div align=center>
<img src="https://cdn.jsdelivr.net/gh/aaronmack/image-hosting@master/mathematics/离散数学-树-最小生成树-引入.6ya9d6k5o5j4.png" width="790">
</div>

#### 定义

<div align=center>
<img src="https://cdn.jsdelivr.net/gh/aaronmack/image-hosting@master/mathematics/离散数学-树-最小生成树-定义.432x1ll5l1ts.png" width="790">
</div>

#### 算法

<div align=center>
<img src="https://cdn.jsdelivr.net/gh/aaronmack/image-hosting@master/mathematics/离散数学-树-最小生成树-算法.6ts5rpb1vv4.png" width="790">
</div>

> Kruskal算法的步骤

<div align=center>
<img src="https://cdn.jsdelivr.net/gh/aaronmack/image-hosting@master/mathematics/离散数学-树-最小生成树-Kruskal算法.k5slcj2zngg.png" width="1890">
</div>

> Prim算法的步骤

<div align=center>
<img src="https://cdn.jsdelivr.net/gh/aaronmack/image-hosting@master/mathematics/离散数学-树-最小生成树-Prim算法.44qooh3arc5c.png" width="1890">
</div>

### 根树

#### 定义

<div align=center>
<img src="https://cdn.jsdelivr.net/gh/aaronmack/image-hosting@master/mathematics/离散数学-树-根树-定义.39sd9gvb36ww.png" width="790">
</div>

* 树最早的起源就是家族学

#### 倒置法

<div align=center>
<img src="https://cdn.jsdelivr.net/gh/aaronmack/image-hosting@master/mathematics/离散数学-树-根树-倒置法.46fjb1y9fgzk.png" width="790">
</div>

#### 家族关系

<div align=center>
<img src="https://cdn.jsdelivr.net/gh/aaronmack/image-hosting@master/mathematics/离散数学-树-根树-树的家族关系.2d7gqwbue4ao.png" width="790">
</div>

#### k元树

<div align=center>
<img src="https://cdn.jsdelivr.net/gh/aaronmack/image-hosting@master/mathematics/离散数学-树-根树-k元树.ilyqujjx01c.png" width="790">
</div>


### 根树的遍历

> 遍历问题

* 在使用根树来保存信息时，我们经常需要依次访问树的每个结点，或是查询这些结点中是否有某些特定信息，或是利用这些结点信息来进行计算，诸如此类。基本要求就是能系统地访问树的结点，使得每个结点恰好访问一次，这称作根树的遍历问题。
* 根树也经常用来表示各种类型的表达式，比如由数字、变量和运算所组成的算术表达式。当需要对表达式求值时，就需要对此根树进行遍历

#### 二元树的遍历

<div align=center>
<img src="https://cdn.jsdelivr.net/gh/aaronmack/image-hosting@master/mathematics/离散数学-树-根树的遍历-二元树的遍历.4lzp4n5m3b0g.png" width="790">
</div>

#### 表达式的记法

<div align=center>
<img src="https://cdn.jsdelivr.net/gh/aaronmack/image-hosting@master/mathematics/离散数学-树-根树的遍历-表达式的记法.t012rm03tmo.png" width="790">
</div>

* 前缀形式: 没有二义性，不用像表达式那样需要括号；前缀形式的计算只需要将其压栈，然后只要碰到运算符号的时候，e.g. `-x43` 遇到减号的时候只需要将后面的`x`和`4`执行减法操作就可以了；求值方式是从右向左

#### 根树的遍历

<div align=center>
<img src="https://cdn.jsdelivr.net/gh/aaronmack/image-hosting@master/mathematics/离散数学-树-根树的遍历.3pzrmv3ufukg.png" width="790">
</div>


### 最优树与哈夫曼算法

#### 前缀码

<div align=center>
<img src="https://cdn.jsdelivr.net/gh/aaronmack/image-hosting@master/mathematics/离散数学-树-前缀码.lfdsh8061ts.png" width="790">
</div>

* {1, 01, 001, 000}是前缀码
* {1, 11, 001, 0011}不是前缀码, 因为第一个1可以是第二个11的前缀码，而001也是0011的前缀码，会引起混淆

#### 最优树

<div align=center>
<img src="https://cdn.jsdelivr.net/gh/aaronmack/image-hosting@master/mathematics/离散数学-树-最优树.79jqghg9iydc.png" width="790">
</div>

#### 哈夫曼算法

<div align=center>
<img src="https://cdn.jsdelivr.net/gh/aaronmack/image-hosting@master/mathematics/离散数学-树-哈夫曼算法.1uuh5c2i315s.png" width="790">
</div>

#### 应用

<div align=center>
<img src="https://cdn.jsdelivr.net/gh/aaronmack/image-hosting@master/mathematics/离散数学-树-最优树与哈夫曼算法-应用.yu1xic5cok0.png" width="790">
</div>


### 概念总结
* **无向树(树)**: 连通而不含回路的无向图称为无向树(undirected tree)，简称树(tree)，常用 T 表示树
* **叶/分支点(内部结点)**: 树中度数为 1 的结点称为叶(leaf)；度数大于 1 的结点称为分支点(branch point)或内部结点(interior point)
* **森林**: 每个连通分支都是树的无向图称为森林(forest)
* **平凡树**: 平凡图称为平凡树(trivial tree)
* **生成树/树枝/弦/补**: 给定图 $G = <V, E>$，若 $G$ 的某个生成子图是树，则称之为 $G$ 的生成树 (spanning tree)，记为 $T_G$。生成树 $T_G$ 中的边称为树枝。$G$ 中不在 $T_G$ 中的边称为弦， $T_G$ 的所有弦的集合称为生成树的补
* **最小生成树**: 设 $G =< V, E >$ 是连通的赋权图， $T$ 是 $G$ 的一棵生成树， $T$ 的每个树枝所赋权值之和称为 $T$ 的权，记为$w(T)$。 $G$ 中具有最小权的生成树称为 G 的最小生成树(minimalspanning tree)
* **有向树**: 一个有向图，若略去所有有向边的方向所得到的无向图是一棵树，则这个有向图称为有向树
* **根树(外向树)/根/叶/内点/分支点**: 一棵非平凡的有向树，如果恰有一个结点的入度为 0，其余所有结点的入度均为 1， 则称之为根树(root tree) 或外向树(outward tree)。入度为 0 的结点称为根(root)；出度为 0 的结点称为叶(leaf)；入度为 1，出度大于 0 的结点称为内点(interior point)；又将内点和根统称为分支点(branch point)。
* **层/高**: 在根树中，从根到任一结点 v 的通路长度，称为该结点的层数；称层数相同的结点在同一层上；所有结点的层数中最大的称为根树的高
* **有序树**: 如果在根树中规定了每一层上结点的次序，这样的根树称为有序树
* **k元树/满k元树/k元有序树/满k元有序树**: 在根树 T 中，1）若每个分支点至多有 k 个儿子，则称 T 为 k 元树；2)若每个分支点都恰有 k 个儿子，则称 T 为 满 k 元树；3)若 k 元树 T 是有序的，则称 T 为 k 元有序树；4)若 满 k 元树 T 是有序的，则称 T 为 满 k 元有序树。5)任一结点 v 及其所有后代导出的子图 T ′ 称为 T 的以 v 为根的子树。
* **中缀形式**: 当我们对二叉树进行中根遍历时，就得到了原表达式。中缀形式
* **前缀形式(波兰符号法)**: 对表达式的二叉树进行先根遍历时，就得到了它的前缀形式
* **后缀形式(逆波兰符号法)**: 对表达式的二叉树进行后根遍历时，就得到了它的后缀形式。
* **前缀/前缀码/二元前缀码**: [前缀码](#前缀码)
* **赋权二元树/赋权二元树的权/最优树**: [最优树](#最优树)
* **哈夫曼算法**: [哈夫曼算法](#哈夫曼算法)

## 特殊图

### 欧拉图

#### 引子

<div align=center>
<img src="https://cdn.jsdelivr.net/gh/aaronmack/image-hosting@master/mathematics/离散数学-特殊图-欧拉图-引子.jq8j2lv1w1c.png" width="790">
</div>

#### 定义

<div align=center>
<img src="https://cdn.jsdelivr.net/gh/aaronmack/image-hosting@master/mathematics/离散数学-特殊图-欧拉图-定义.23ipekyrjsyo.png" width="790">
</div>

* 回路是经过每一条边一次且仅一次最终又回到了起点
* 通路也是经过的了每一条边一次且仅一次,但最终没有回到起点

#### 判定

<div align=center>
<img src="https://cdn.jsdelivr.net/gh/aaronmack/image-hosting@master/mathematics/离散数学-特殊图-欧拉图-判定.1dgu3j1hp8m8.png" width="790">
</div>

* 有向欧拉图的判定定理: 在欧拉通路中，一个结点的入度比出度大 1，(则这个节点是终点) 另一个结点的出度比入度大 1 （则这个节点是起点）

#### 一笔画

<div align=center>
<img src="https://cdn.jsdelivr.net/gh/aaronmack/image-hosting@master/mathematics/离散数学-特殊图-欧拉图-一笔画.3t8jnjw5922o.png" width="790">
</div>

#### 求回路

<div align=center>
<img src="https://cdn.jsdelivr.net/gh/aaronmack/image-hosting@master/mathematics/离散数学-特殊图-欧拉图-求回路.25d62w5ns97k.png" width="790">
</div>

* 求无向图的欧拉回路–Fleury 算法: 我们选择了从e1e2e3e4e5e6e7,此时我们有三条路可以走,e8e9e12,根据算法，除非我们无路可走，否则不能选择割边，我们知道e8是割边，因为e1已经被选了

### 哈密顿图

#### 引子

<div align=center>
<img src="https://cdn.jsdelivr.net/gh/aaronmack/image-hosting@master/mathematics/离散数学-特殊图-哈密顿图-引子.2d1nly2p5w00.png" width="790">
</div>

#### 定义

<div align=center>
<img src="https://cdn.jsdelivr.net/gh/aaronmack/image-hosting@master/mathematics/离散数学-特殊图-哈密顿图-定义.1kkjp0c9qbkw.png" width="790">
</div>

#### 必要条件

<div align=center>
<img src="https://cdn.jsdelivr.net/gh/aaronmack/image-hosting@master/mathematics/离散数学-特殊图-哈密顿图-必要条件.5mohsgfyhfcw.png" width="790">
</div>

* 在必要条件的推论及使用中: 彼得森图旁边的图就不是哈密顿图，因为我们删除那两处红色的点时，它的连通分支数变为了4个{v2, v6v7, v5, v4}
* 所以有割点的图一定不是哈密顿图，因为根据割点的定义，割点是连接其它节点的，如果断开就会造成连通分支数+1， 而连通分支数+1就是2>1不满足哈密顿图的必要条件了

#### 充分条件

<div align=center>
<img src="https://cdn.jsdelivr.net/gh/aaronmack/image-hosting@master/mathematics/离散数学-特殊图-哈密顿图-充分条件.6a29gs9k44jk.png" width="790">
</div>

* 必要条件可以证明一个图不是哈密顿图，要证明一个图是哈密顿图就要用到充分条件了
* 满足充分条件是哈密顿图，但如果不满足这个充分条件不代表就不是哈密顿图了，例如六边形

#### 其它方法

<div align=center>
<img src="https://cdn.jsdelivr.net/gh/aaronmack/image-hosting@master/mathematics/离散数学-特殊图-哈密顿图-其它判定方法.26ksdu2a5gjk.png" width="790">
</div>

#### 应用

<div align=center>
<img src="https://cdn.jsdelivr.net/gh/aaronmack/image-hosting@master/mathematics/离散数学-特殊图-哈密顿图-应用.2d4iem8hoqm8.png" width="790">
</div>


### 偶图

#### 引入偶图

<div align=center>
<img src="https://cdn.jsdelivr.net/gh/aaronmack/image-hosting@master/mathematics/离散数学-特殊图-偶图-引入偶图.7j1b1bggeolc.png" width="790">
</div>

#### 偶图的判定

<div align=center>
<img src="https://cdn.jsdelivr.net/gh/aaronmack/image-hosting@master/mathematics/离散数学-特殊图-偶图-偶图的判定.72b3mjc0uagw.png" width="790">
</div>

#### 偶图的匹配

<div align=center>
<img src="https://cdn.jsdelivr.net/gh/aaronmack/image-hosting@master/mathematics/离散数学-特殊图-偶图-偶图的匹配.1a3j0t6lfli8.png" width="790">
</div>

* 匹配的应用: 
  * 1) 左 C1C2C3中最小的是2，S1S2S3S4S5中最大的是2，满足t条件
  * 2) 中 C1C2C3中任取两个节点例如C1C2,它们所关联的节点是S1S2S3S4有四个，满足相异性条件
  * 3）右 选择C1与C2，对应的节点是S1，不满足t条件，所以需要用相异性条件来判定

### 平面图

#### 引入平面图

<div align=center>
<img src="https://cdn.jsdelivr.net/gh/aaronmack/image-hosting@master/mathematics/离散数学-特殊图-平面图-引入平面图.7ibb8g788g74.png" width="790">
</div>

* 只要能改化成不交叉的情形我们就可以叫做它为平面图，叫平面表示

#### 平面图的面

<div align=center>
<img src="https://cdn.jsdelivr.net/gh/aaronmack/image-hosting@master/mathematics/离散数学-特殊图-平面图-平面图的面.744rxz17laps.png" width="790">
</div>

#### 欧拉公式

<div align=center>
<img src="https://cdn.jsdelivr.net/gh/aaronmack/image-hosting@master/mathematics/离散数学-特殊图-平面图-欧拉公式.5gwjdie6xcsg.png" width="790">
</div>

#### 平面图的必要条件

<div align=center>
<img src="https://cdn.jsdelivr.net/gh/aaronmack/image-hosting@master/mathematics/离散数学-特殊图-平面图-平面图的必要条件.477aww2uxcn4.png" width="790">
</div>

#### 库拉托夫斯基定理

<div align=center>
<img src="https://cdn.jsdelivr.net/gh/aaronmack/image-hosting@master/mathematics/离散数学-特殊图-平面图-库拉托夫斯基定理.3zxomul40m4g.png" width="790">
</div>

### 概念总结
* **欧拉通路/回路**: 设 G 是无孤立结点的图，若存在一条通路 (回路)， 经过图中每边一次且仅一次，则称此通路 (回路) 为该图的一条欧拉通路 (回路)。具有欧拉回路的图称为欧拉图(Eulerian graph)
* **哈密顿通路/回路**: 设 G 是一个无向或有向图，若存在一条通路 (回路)， 经过图中每个结点一次且仅一次，则称此通路 (回路) 为该图的一条哈密顿通路 (回路)。具有哈密顿回路的图称为哈密顿图(Hamiltonian graph)。
* **偶图(二分图/二部图)**: [引入偶图](#引入偶图)
* **完全偶图(完全二分图)**: [引入偶图](#引入偶图)
* **完全匹配(匹配)**: [偶图的匹配](#偶图的匹配)
* **相异性条件/t条件**: [偶图的匹配](#偶图的匹配)
* **平面图/非平面图**: 如果能够把一个无向图 G 的所有结点和边画在平面上，使得任何两边都不会在非结点处交叉，则称 G 为平面图(plane Graph)，否则称 G 为非平面图
* **面/边界/次数**: 在平面图 G 的一个平面表示中，由边所包围的其**内部不包含图的结点和边的区域**，称为 G 的一个面，包围该面的诸边所构成的回路称为这个面的边界，面 r 的边界的长度称为该面的次数，记为 D(r)。区域面积有限的面称为有限面，区域面积无限的面称为无限面。
* **欧拉公式/球极投影**: [欧拉公式](#欧拉公式)
* **同胚**: 如果两个图 G1 和 G2 同构，或经过反复插入或消去 2 度结点后同构，则称 G1 与 G2 同胚
* **收缩/库拉托夫斯基定理**: [库拉托夫斯基定理](#库拉托夫斯基定理)