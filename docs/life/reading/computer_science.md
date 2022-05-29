# Algorithms to Live By

## Introduction

* Thirty-seven percent.
* We know this because finding an apartment belongs to a class of
mathematical problems known as “optimal stopping” problems. The 37% rule
defines a simple series of steps—what computer scientists call an “algorithm”—
for solving these problems

* There is a particular set of problems that all people face, problems that are adirect result of the fact that our lives are carried out in finite space and time.
What should we do, and leave undone, in a day or in a decade? What degree of
mess should we embrace—and how much order is excessive? What balance
between new experiences and favored ones makes for the most fulfilling life?

* Don’t always consider all your options. Don’t
necessarily go for the outcome that seems best every time. Make a mess on
occasion. Travel light. Let things wait. Trust your instincts and don’t think too long. Relax. Toss a coin. Forgive, but don’t forget. To thine own self be true.

## Optimal Stopping - When to Stop Looking

### The Secretary Problem

### Whence 37%?

In your search for a secretary, there are two ways you can fail: stopping early
and stopping late. When you stop too early, you leave the best applicantundiscovered. When you stop too late, you hold out for a better applicant who
doesn’t exist. The optimal strategy will clearly require finding the right balance
between the two, walking the tightrope between looking too much and not
enough.

Okay, so we know that taking the first best-yet applicant we encounter (a.k.a.
the first applicant, period) is rash. If there are a hundred applicants, it also seems
hasty to make an offer to the next one who’s best-yet, just because she was better
than the first. So how do we proceed?
Intuitively, there are a few potential strategies. For instance, making an offer
the third time an applicant trumps everyone seen so far—or maybe the fourth
time. Or perhaps taking the next best-yet applicant to come along after a long
“drought”—a long streak of poor ones.

But as it happens, neither of these relatively sensible strategies comes out on
top. Instead, the optimal solution takes the form of what we’ll call the LookThen-Leap Rule: You set a predetermined amount of time for “looking”—that
is, exploring your options, gathering data—in which you categorically don’t
choose anyone, no matter how impressive. After that point, you enter the “leap”
phase, prepared to instantly commit to anyone who outshines the best applicant
you saw in the look phase.

We can see how the Look-Then-Leap Rule emerges by considering how the
secretary problem plays out in the smallest applicant pools. With just one
applicant the problem is easy to solve—hire her! With two applicants, you have
a 50/50 chance of success no matter what you do. You can hire the first applicant
(who’ll turn out to be the best half the time), or dismiss the first and by default
hire the second (who is also best half the time).

Add a third applicant, and all of a sudden things get interesting. The odds if
we hire at random are one-third, or 33%. With two applicants we could do nobetter than chance; with three, can we? It turns out we can, and it all comes
down to what we do with the second interviewee. When we see the first
applicant, we have no information—she’ll always appear to be the best yet.
When we see the third applicant, we have no agency—we have to make an offer
to the final applicant, since we’ve dismissed the others. But when we see the
second applicant, we have a little bit of both: we know whether she’s better or
worse than the first, and we have the freedom to either hire or dismiss her. What
happens when we just hire her if she’s better than the first applicant, and dismiss
her if she’s not? This turns out to be the best possible strategy when facing three
applicants; using this approach it’s possible, surprisingly, to do just as well in the
three-applicant problem as with two, choosing the best applicant exactly half the
time.

Enumerating these scenarios for four applicants tells us that we should still
begin to leap as soon as the second applicant; with five applicants in the pool, we shouldn’t leap before the third.

As the applicant pool grows, the exact place to draw the line between looking
and leaping settles to 37% of the pool, yielding the 37% Rule: look at the first
37% of the applicants, choosing none, then be ready to leap for anyone better
than all those you’ve seen so far

<div align=center>
<img src="../_images/life/percent37.png" width="400">
</div>

### Lover’s Leap

for instance, has a straightforward mathematical solution: propose
early and often. If you have, say, a 50/50 chance of being rejected, then the same
kind of mathematical analysis that yielded the 37% Rule says you should start
making offers after just a quarter of your search. If turned down, keep making
offers to every best-yet person you see until somebody accepts. With such a
strategy, your chance of overall success—that is, proposing and being accepted
by the best applicant in the pool—will also be 25%. Not such terrible odds,
perhaps, for a scenario that combines the obstacle of rejection with the general
difficulty of establishing one’s standards in the first place.

For example, assume an immediate proposal is a sure thing but belated
proposals are rejected half the time. Then the math says you should keep looking
noncommittally until you’ve seen 61% of applicants, and then only leap if
someone in the remaining 39% of the pool proves to be the best yet.

_images/life/percent37_example.png

_images/life/基延斯指数.png

### Knowing a Good Thing When You See It: Full Information



# Computer SCIENCE distilled v1.4

## Preface

https://xkcd.com/

## Chapter 1 - Basics

Computer science is not about machines, in
the same way that astronomy is not about
telescopes. There is an essential unity of
mathematics and computer science. —EDSGER DIJKSTRA

### 1.1 Ideas

#### flowchart

<div align=center>
<img src="../_images/life/wiki_edition_process.jpg" width="400">
</div>

Figure 1.1 Wiki edition process (adapted from https//wikipedia.org)

* Write states and instruction steps inside rectangles.
* Write decision steps, where the process may go different
ways, inside diamonds.
* Never mix an instruction step with a decision step.
* Connect sequential steps with arrows.
* Mark the start and end of the process.

#### Pseudocode

pseudocode expresses computational processes.
Pseudocode is human-friendly code that cannot be understood by
a machine

<div align=center>
<img src="../_images/life/pseudocode_example1.jpg" width="400">
</div>
<div align=center>
<img src="../_images/life/pseudocode_example2.jpg" width="600">
</div>

#### Mathematial Models

A model is a set of concepts that represents a problem and its characteristics. It allows us to better reason and operate with the problem.

e.g.

LIVESTOCK FENCE Your farm has two types of livestock.
You have 100 units of barbed wire to make a rectangular
fence for the animals, with a straight division for separating
them. How do you frame the fence in order to maximize
the pasture’s area?

Starting with what’s to be determined, w and l are the pasture’s
dimensions; w × l, the area. Maximizing it means using all the
barbed wire, so we relate w and l with 100:

<div align=center>
<img src="../_images/life/mathematial_models_example1.jpg" width="600">
</div>

### 1.2 Logic

<div align=center>
<img src="../_images/life/logical_operations.jpg" width="600">
</div>

#### Boolean Algebra
<div align=center>
<img src="../_images/life/BooleanAlgebra1.jpg" width="500">
</div>
<div align=center>
<img src="../_images/life/BooleanAlgebra2.jpg" width="500">
</div>
<div align=center>
<img src="../_images/life/BooleanAlgebra3.jpg" width="350">
</div>

`HOT SERVER` A server crashes if it’s overheating while
the air conditioning is off. It also crashes if it’s overheating
and its chassis cooler fails. In which conditions does the
server work?

<div align=center>
<img src="../_images/life/HOT_SERVER_PROBLEM.jpg" width="650">
</div>

#### Truth Tables
Another way to analyze logical models is checking what happens
in all possible configurations of its variables. A truth table has a
column for each variable. Rows represent possible combinations
of variable states

`FRAGILE SYSTEM` We have to create a database system
with the following requirements:

I : If the database is locked, we can save data.
II : A database lock on a full write queue cannot happen.
III : Either the write queue is full, or the cache is loaded.
IV : If the cache is loaded, the database cannot be locked.

Is this possible? Under which conditions will it work?

<div align=center>
<img src="../_images/life/TruthTablesSolveProblem.jpg" width="750">
</div>

All requirements are met in states 9–11 and 13–15. In these states,
A = False, meaning the database can’t ever be locked. Notice
the cache will not be loaded only in states 10 and 14.

#### Logic in Computing


# Operating System Concepts 10th Edition

## Preface

### Programming Environments
* POSIX：
  * POSIX (which stands for Portable Operating System Interface) represents a set of standards implemented primarily for UNIX-based operating systems. Although Windows systems can also run certain POSIX programs, our coverage of POSIX focuses on Linux and UNIX systems. POSIXcompliant systems must implement the POSIX core standard (POSIX.1); Linux and macOS are examples of POSIX-compliant systems.


# C++ CIA 中文版

## 第1章 C++的并发世界

### 1.1 何谓并发
最简单和最基本的并发,是指两个或更多独立的活动同时发生

#### 1.1.1 计算机系统中的并发
计算机领域的并发指的是在单个系统里同时执行多个独立的任务， 而非顺序的进行一些活动。

#### 1.1.2 并发的途径
* 试想当两个程序员在两个独立的办公室一起做一个软件项目， 他们可以安静地工作、 不互相干扰， 并且他们人手一套参考手册。 但是， 他们沟通起来就有些困难， 比起可以直接互相交谈， 他们必须使用电话、 电子邮件或到对方的办公室进行直接交流。 并且， 管理两个办公室需要有一定的经费支出， 还需要购买多份参考手册。
* 假设， 让开发人员同在一间办公室办公， 他们可以自由的对某个应用程序设计进行讨论， 也可以在纸或白板上轻易绘制图表， 对设计观点进行辅助性阐释。 现在， 你只需要管理一个办公室， 只要有一套参考资料就够了。 遗憾的是开发人员可能难以集中注意力， 并且还可能存在资源共享的问题(比如， “参考手册哪去了?”)
* 以上两种方法， 描绘了并发的两种基本途径。 

#### 1.1.3 并发与并行
* 其区别主要在于关注点和意图方面(差距甚微)。
* 并行更加注重性能。

### 1.2 为什么使用并发？
* 主要原因有两个： 关注点分离(SOC)和性能。

#### 1.2.3 什么时候不使用并发
* 不使用并发的唯一原因就是收益比不上成本
* 使用并发的代码在很多情况下难以理解， 因此编写和维护的多线程代码就会直接产生脑力成本， 同时额外的复杂性也可能引起更多的错误。 除非潜在的性能增益足够大或关注点分离地足够清晰， 能抵消所需的额外的开发时间以及与维护多线程代码相关的额外成本(代码正确的前提下)； 否则， 勿用并发。

1. 性能增益可能会小于预期；因为操作系统需要分配内核相关资源和堆栈空间， 所以在启动线程时存在固有的开销
2. 线程的资源有限。 如果太多的线程同时运行， 则会消耗很多操作系统资源
3. 运行越多的线程， 操作系统就需要越多的上下文切换
4. 更加复杂， 更难以理解， 并且更容易出错。

### 1.3 C++中的并发和多线程
* C++11新增 - C++14 C++17补充

#### 1.3.4 C++线程库的效率
* 抽象代价(abstraction penalty)

#### 1.3.5 平台相关的工具
* `native_handle()`

### 1.4 开始入门
* CODE: *dev-asset\coding\coding_cpp\cia\1.4.1_Intro*

#### 1.4.1 你好， 并发世界
* 每个线程都必须具有一个初始函数(initial function)， 新线程的执行从这里开始。
* 新的线程启动之后, 初始线程继续执行。 如果它不等待新线程结束， 它就将自顾自地继续运行到main()的结束， 从而结束程序 - 有可能发生在新线程运行之前。 这就是为什么调用 join() 的原因， 这会导致调用线程(在`main()`中)等待与`std::thread`对象相关联的线程


## 第2章 线程管理

### 2.1 线程管理的基础

#### 2.1.1 启动线程
* CODE: *dev-asset\coding\coding_cpp\cia\2.1.1_Start*

* 使用C++线程库启动线程， 可以归结为构造 `std::thread` 对象
* 注意
  * 当把函数对象传入到线程构造函数中时， 需要避免"最令人头痛的语法解析"(`C++'s most vexing parse`)。 如果你传递了一个临时变量， 而不是一个命名的变量； C++编译器会将其解析为函数声明， 而不是类型对象的定义。
  * `std::thread my_thread(background_task());`
  * 相当与声明了一个名为my_thread的函数， 这个函数带有一个参数(函数指针指向没有参数并返回background_task对象的函数)， 返回一个 std::thread 对象的函数， 而非启动了一个线程
  * 解决
    * `std::thread my_thread((background_task())); // 1`
    * `std::thread my_thread{background_task()}; // 2`
    * 使用lambda表达式也能避免这个问题
* 启动了线程， 你需要明确是要等待线程结束,还是让其自主运行
* 使用一个能访问局部变量的函数去创建线程是一个糟糕的主意(除非十分确定线程会在函数完成前结束)。

#### 2.1.2 等待线程完成

* 只能对一个线程使用一次`join()`;一旦已经使用过join()， std::thread 对象就不能再次加入了， `当对其使用joinable()`时， 将返回false。

#### 2.1.3 特殊情况下的等待
* 倾向于在无异常的情况下使用join()时， 需要在异常处理过程中调用join()， 从而避免生命周期的问题。
* 一种方式是使用"资源获取即初始化方式"`(RAII， Resource Acquisition Is Initialization)`， 并且提供一个类， 在析构函数中使用`join()`

#### 2.1.4 后台运行线程
* 分离线程的确在后台运行， 所以分离线程不能被加入
* C++运行库保证， 当线程退出时， 相关资源的能够正确回收
* 通常称分离线程为守护线程(daemon threads)， UNIX中守护线程是指， 没有任何显式的用户接口， 并在后台运行的线程。 

### 2.2 向线程函数传递参数
```c++
//--------------------------------------
void f(int i, std::string const& s);
std::thread t(f, 3, "hello");

//--------------------------------------
/*
* buffer是一个指针变量，函数可能会在将字面值转化成std::string之前奔溃
* 并且想要依赖隐式转换将字面值转为std::string,但std::thread的构造函数只会提供变量的复制，
*   可能没有达到期望
*/
void f(int i,std::string const& s);
void oops(int some_param)
{
  char buffer[1024]; // 1
  sprintf(buffer, "%i",some_param);
  std::thread t(f,3,buffer); // 2
  t.detach();
}

//--------------------------------------
// 解决方案就是在传递到 std::thread 构造函数之前就将字面值转化为 std::string 对象
void f(int i,std::string const& s);
void not_oops(int some_param)
{
  char buffer[1024];
  sprintf(buffer,"%i",some_param);
  std::thread t(f,3,std::string(buffer)); // 使用std::string， 避免悬垂指针
  t.detach();
}

//--------------------------------------
// 使用 std::ref 将参数转换成引用的形式， 从而可将线程的调用改为以下形式
void update_data_for_widget(widget_id w,widget_data& data); // 1
void oops_again(widget_id w)
{
  widget_data data;
  // - 
  //std::thread t(update_data_for_widget,w,data); // 2
  //std::thread t(update_data_for_widget,w,std::ref(data));
  // -
  display_status();
  t.join();
  process_widget_data(data);
}

//--------------------------------------
//新线程可以调用move移动，但不能拷贝
std::unique_ptr
std::thread - std::move(p)
```

### 2.3 转移线程所有权
* *coding/coding_cpp/cia/2.3_Transfer/main.cpp*

* 执行线程的所有权可以在 std::thread 实例中移动
* 需要在线程对象被析构前， 显式的等待线程完成， 或者分离它； 进行赋值时也需要满足这些条件(说明： 不能通过赋一个新值给 std::thread 对象的方式来”丢弃”一个线程)。
* std::thread 支持移动的好处是可以创建thread_guard类的实例

### 2.4 运行时决定线程数量
* `std::thread::hardware_concurrency()` 这个函数会返回能并发在一个程序中的线程数量, 当系统信息无法获取时，函数也会返回0
* 因为不能直接从一个线程中返回一个值， 所以需要传递results容器的引用到线程中去

### 2.5 标识线程
* *coding/coding_cpp/cia/2.5_Identify/main.cpp*

* std::thread::id 对象可以自由的拷贝和对比,因为标识符就可以复用
* 标准库也提供 `std::hash<std::thread::id>` 容器， 所以 std::thread::id 也可以作为无序容器的键值。
* 主线程可能要做一些与其他线程不同的工作。 这种情况下， 启动其他线程前， 它可以将自己的线程ID通过 `std::this_thread::get_id()` 得到， 并进行存储

### 2.6 本章总结
* 基本的线程管理方式： 启动线程， 等待结束和不等待结束。 并向线程函数中传递参数， 如何转移线程的所有权， 如何使用线程组来分割任务。使用线程标识来确定关联数据， 以及特殊线程的特殊解决方案

## 第3章 线程间共享数据
* 当线程在访问共享数据的时候， 必须定一些规矩， 用来限定线程可访问的数据位。 还有， 一个线程更新了共享数据， 需要对其他线程进行通知。 从易用性的角度， 同一进程中的多个线程进行数据共享，有利有弊。 错误的共享数据使用是产生并发bug的一个主要原因

### 3.1 共享数据带来的问题
* 不变量(invariants)
  * 双链表中每个节点都有一个指针指向列表中下一个节点， 还有一个指针指向前一个节点。 其中不变量就是节点A中指向“下一个”节点B的指针， 还有前向指针。 为了从列表中删除一个节点， 其两边节点的指针都需要更新。 当其中一边更新完成时， 不变量就被破坏了， 直到另一边也完成更新； 在两边都完成更新后， 不变量就又稳定了
* 并行中常见错误： 条件竞争(race condition)

#### 3.1.1 条件竞争
* 一种特殊的条件竞争： 并发的去修改一个独立对象
* 条件竞争出现的概率很低，除非当数据量很大的时候，并且很难查找已经复现， 条件竞争通常是时间敏感的

#### 3.1.2 避免恶性条件竞争
* 对数据结构采用某种保护机制， 确保只有进行修改的线程才能看到不变量被破坏时的中间状态。 从其他访问线程的角度来看， 修改不是已经完成了， 就是还没开始。
* 无锁编程
* 使用事务的方式去处理数据结构的更新(这里的”处理”就如同对数据库进行更新一样)。 所需的一些数据和读取都存储在事务日志中， 然后将之前的操作合为一步， 再进行提交。 当数据结构被另一个线程修改后， 或处理已经重启的情况下， 提交就会无法进行， 这称作为“软件事务内存”(software transactional memory (STM))。 

### 3.2 使用互斥量保护共享数据
* 互斥量一种数据保护通用机制，互斥量自身也有问题， 也会造成死锁, 对数据保护的太多(或太少)

#### 3.2.2 用代码来保护共享数据
* *coding/coding_cpp/cia/3.2_Mutex/main.cpp*

* 只要没有成员函数通过返回值或者输出参数的形式，向其调用者返回指向受保护数据的指针或引用， 数据就是安全的
* 函数可能没在互斥量保护的区域内， 存储着指针或者引用， 这样就很危险。 
* 更危险, 将保护数据作为一个运行时参数

#### 3.2.3 定位接口间的条件竞争
* *coding/coding_cpp/cia/3.2_Mutex/main.cpp*

* 潜在的条件竞争
<div align=center>
<img src="../_images/life/CPP-CIA-list3.1.jpg" width="600">
</div>

1. 当线程运行时， 调用两次top()， 栈没被修改， 所以每个线程能得到同样的值

* 假设有一个 `stack<vector<int>>` ， `vector`是一个动态容器， 当你拷贝一个`vetcor`，标准库会从堆上分配很多内存来完成这次拷贝。 当这个系统处在重度负荷， 或有严重的资源限制的情况下， 这种内存分配就会失败， 所以`vector`的拷贝构造函数可能会抛出一个 `std::bad_alloc` 异常。 当`pop()`函数返回弹出值时,会有一个潜在的问题： 这个值被返回到调用函数的时候， 栈才被改变； 但当拷贝数据的时候， 调用函数抛出一个异常,要弹出的数据将会丢失； 它的确从栈上移出了， 但是拷贝失败了！ `std::stack` 的设计人员将这个操作分为两部分： 先获取顶部元素(`top()`)， 然后从栈中移除(`pop()`)

```c++
std::shared_ptr<T> pop()
{
    std::lock_guard<std::mutex> lock(m);
    if(data.empty()) throw empty_stack(); // 在调用pop前， 检查栈是否为空
    std::shared_ptr<T> const res(std::make_shared<T>(data.top())); // 在修改堆栈前， 分配出返回值
    data.pop();
    return res;
}
void pop(T& value)
{
    std::lock_guard<std::mutex> lock(m);
    if(data.empty()) throw empty_stack();
    value=data.top();
    data.pop();
}
```

* 解决
  * 选项1： 传入一个引用 - 第一个选项是将变量的引用作为参数， 传入pop()函数中获取想要的“弹出值”
  * 选项2： 无异常抛出的拷贝构造函数或移动构造函数 - 虽然安全， 但非可靠。  `std::is_nothrow_copy_constructible` 和 `std::is_nothrow_move_constructible`
  * 选项3： 返回指向弹出值的指针 - `std::shared_ptr`
  * 选项4： “选项1 + 选项2”或 “选项1 + 选项3”

* 一个给定操作需要两个或两个以上的互斥量时， 另一个潜在的问题将出现： 死锁。 与条件竞争完全相反——不同的两个线程会互相等待， 从而什么都没做。

#### 3.2.4 死锁： 问题描述及解决方案
* 一对线程需要对他们所有的互斥量做一些操作， 其中每个线程都有一个互斥量， 且等待另一个解锁。 这样没有线程能工作， 因为他们都在等待对方释放互斥量。 这种情况就是死锁， 它的最大问题就是由两个或两个以上的互斥量来锁定一个操作。
* 避免死锁的一般建议， 就是让两个互斥量总以相同的顺序上锁： 总在互斥量B之前锁住互斥量A， 就永远不会死锁。但这也有问题，比如一个操作对同一个类的不同实例进行的数据的交换操作，为了保证数据交换操作的正确性，就要避免数据被并发修改， 并确保每个实例上的互斥量都能锁住自己要保护的区域。 不过， 选择一个固定的顺序(例如， 实例提供的第一互斥量作为第一个参数， 提供的第二个互斥量为第二个参数)， 可能会适得其反： 在参数交换了之后， 两个线程试图在相同的两个实例间进行数据交换时， 程序又死锁了！
* 解决 - `std::lock` 可以一次性锁住多个(两个以上)的互斥量， 并且没有死锁风险

* 一个互斥量可以在同一线程上多次上锁， 标准库中 `std::recursive_mutex` 提供这样的功能
* `std:lock` - 可能会抛出异常, 这种情况下， 异常会传播到 `std::lock` 之外,所以 `std::lock` 要么将两个锁都锁住， 要不一个都不锁
* `std::scoped_lock` 的好处在于， 可以将所有 `std::lock` 替换掉， 从而减少潜在错误的发生

#### 3.2.5 避免死锁的进阶指导
* 避免嵌套锁
  * 一个线程已获得一个锁时， 再别去获取第二个。 因为每个线程只持有一个锁， 锁上就不会产生死锁。 即使互斥锁造成死锁的最常见原因， 也可能会在其他方面受到死锁的困扰(比如： 线程间的互相等待)。当你需要获取多个锁， 使用一个 `std::lock` 来做这件事(对获取锁的操作上锁)， 避免产生死锁
* 避免在持有锁时调用用户提供的代码
  * 因为代码是用户提供的， 你没有办法确定用户要做什么； 用户程序可能做任何事情， 包括获取锁。 
* 使用固定顺序获取锁
  * 当硬性条件要求你获取两个或两个以上的锁， 并且不能使用 std::lock 单独操作来获取它们； 那么最好在每个线程上， 用固定的顺序获取它们(锁)
  * “手递手”锁的模式 - 如果两个线程试图用互为反向的顺序， 使用“手递手”锁遍历列表， 他们将执行到列表中间部分时， 发生死锁
  <div align=center>
  <img src="../_images/life/CPP-CIA-死锁.jpg" width="600">
  </div>
* 使用锁的层次结构
  * *coding/coding_cpp/cia/3.2_Mutex/main.cpp* `test4()`, `test5()`
  * 定义锁的顺序是一种特殊情况， 但锁的层次的意义在于提供对运行时约定是否被坚持的检查。 这个建议需要对你的应用进行分层， 并且识别在给定层上所有可上锁的互斥量。 当代码试图对一个互斥量上锁， 在该层锁已被低层持有时， 上锁是不允许的
* 超越锁的延伸扩展
  * 死锁不仅仅会发生在锁之间； 死锁也会发生在任何同步构造中(可能会产生一个等待循环)，

#### 3.2.6 std::unique_lock——灵活的锁
* `std::unqiue_lock` 使用更为自由的不变量， 这样 `std::unique_lock` 实例不会总与互斥量的数据类型相关， 使用起来要比 `std:lock_guard` 更加灵活。
* `std::unique_lock` 会占用比较多的空间， 并且比 `std::lock_guard` 稍慢一些。 保证灵活性要付出代价， 这个代价就是允许 `std::unique_lock` 实例不带互斥量： 信息已被存储， 且已被更新

#### 3.2.7 不同域中互斥量所有权的传递
* `std::unique_lock` 的灵活性同样也允许实例在销毁之前放弃其拥有的锁。 可以使用`unlock()`来做这件事， 如同一个互斥量： std::unique_lock 的成员函数提供类似于锁定和解锁互斥量的功能。 std::unique_lock 实例在销毁前释放锁的能力， 当锁没有必要在持有的时候， 可以在特定的代码分支对其进行选择性的释放。 这对于应用性能来说很重要， 因为持有锁的时间增加会导致性能下降， 其他线程会等待这个锁的释放， 避免超越操作。
```c++
std::unique_lock<std::mutex> get_lock()
{
  extern std::mutex some_mutex;
  std::unique_lock<std::mutex> lk(some_mutex);
  prepare_data();
  return lk; // 1
}
void process_data()
{
  std::unique_lock<std::mutex> lk(get_lock()); // 2
  do_something();
}
```

#### 3.2.8 锁的粒度
* 锁的粒度是一个摆手术语(hand-waving term)， 用来描述通过一个锁保护着的数据量大小。 一个细粒度锁(a fine-grained lock)能够保护较小的数据量， 一个粗粒度锁(a coarse-grained lock)能够保护较多的数据量。 选粒度对于锁来说很重要， 为了保护对应的数据， 保证锁有能力保护这些数据也很重要。
```c++
void get_and_process_data()
{
  std::unique_lock<std::mutex> my_lock(the_mutex);
  some_class data_to_process=get_next_data_chunk();
  my_lock.unlock(); // 1 不要让锁住的互斥量越过process()函数的调用
  result_type result=process(data_to_process);
  my_lock.lock(); // 2 为了写入数据， 对互斥量再次上锁
  write_result(data_to_process,result);
}
```

### 3.3 保护共享数据的其他方式
* *coding/coding_cpp/cia/3.3_Protect/main.cpp*
* 一个特别极端(但十分常见)的情况就是， 共享数据在并发访问和初始化时(都需要保护)

#### 3.3.1 保护共享数据的初始化过程
* *coding/coding_cpp/cia/headers.h* `X4`

* C++标准委员会也认为条件竞争的处理很重要， 所以C++标准库提供了 `std::once_flag` 和 `std::call_once` 来处理这种情况。
* 使用 `std::call_once` 比显式使用互斥量消耗的资源更少, 非常适合只需要初始化一次的例子中
* 还有一种初始化过程中潜存着条件竞争： 其中一个局部变量被声明为`static`类型， 这种变量的在声明后就已经完成初始化； 对于多线程调用的函数， 这就意味着这里有条件竞争——抢着去定义这个变量。

#### 3.3.2 保护不常更新的数据结构
* "读者-作者锁"
* C++17标准库提供了两种非常好的互斥量—— `std::shared_mutex` 和 `std::shared_timed_mutex` 。 C++14只提供了 `std::shared_timed_mutex` ， 并且在C++11中并未提供任何互斥量类型。 如果你还在用支持C++14标准之前的编译器， 那你可以使用`Boost`库中实现的互斥量
* 比起使用 `std::mutex` 实例进行同步， 不如使用 `std::shared_mutex` 来做同步。 对于更新操作， 可以使用 `std::lock_guard<std::shared_mutex>` 和 `std::unique_lock<std::shared_mutex>` 上锁。 作为 std::mutex 的替代方案， 与 `std::mutex` 所做的一样， 这就能保证更新线程的独占访问。 因为其他线程不需要去修改数据结构， 所以其可以使用 `std::shared_lock<std::shared_mutex>` 获取访问权

### 3.3.3 嵌套锁
* 当一个线程已经获取一个 std::mutex 时(已经上锁)， 并对其再次上锁， 这个操作就是错误的， 并且继续尝试这样做的话， 就会产生未定义行为
* 互斥量锁住其他线程前， 必须释放拥有的所有锁， 所以当调用lock()三次后， 也必须调用unlock()三次, 用 `std::lock_guard<std::recursive_mutex>` 和 `std::unique_lock<std::recursive_mutex>` 

## 第4章 同步并发操作
* 通常情况下， 线程会等待一个特定事件发生， 或者等待某一条件达成。 这可能需要定期检查“任务完成”标识， 或将类似的东西放到共享数据中， 但这与理想情况差很多。像这种情况就需要在线程中进行同步， C++标准库提供了一些工具可用于同步操作， 形式上表现为`条件变量(condition variables)`和`期望值(futures)`。 并发技术规范(TS)中， 为期望值添加了更多的操作， 并与新的`同步工具锁存器(latches)(轻量级锁资源)`和`栅栏机制(barriers)`一起使用

### 4.1 等待一个事件或其他条件
* *coding/coding_cpp/cia/4.1_Sync/main.cpp* `test1()`

* 很难确定正确的休眠时间。 太短的休眠和没有休眠一样， 都会浪费执行时间； 太长的休眠时间， 可能会让任务等待线程醒来。 休眠时间过长是很少见的情况， 因为这会直接影响到程序的行为， 当在高节奏游戏中， 它意味着丢帧， 或在一个实时应用中超越了一个时间片。

#### 4.1.1 等待条件达成
* C++标准库对条件变量有两套实现： `std::condition_variable` 和 `std::condition_variable_any` 。 这两个实现都包含在 `<condition_variable>` 头文件的声明中。 两者都需要与一个互斥量一起才能工作(互斥量是为了同步)； 前者仅限于与 std::mutex 一起工作， 而后者可以和任何满足最低标准的互斥量一起工作， 从而加上了_any的后缀。 因为 `std::condition_variable_any` 更加通用， 这就可能从体积、 性能， 以及系统资源的使用方面产生额外的开销， 所以 `std::condition_variable` 一般作为首选的类型， 当对灵活性有硬性要求时， 我们才会去考虑 `std::condition_variable_any`
* 本质上说， `std::condition_variable::wait` 是对“忙碌-等待”的一种优化

#### 4.1.2 使用条件变量构建线程安全队列
* *coding/coding_cpp/cia/4.1_Sync/main.cpp* `test3()`
* *coding/coding_cpp/cia/headers.h* `class threadsafe_queue{};`

* `empty()`是一个`const`成员函数， 并且传入拷贝构造函数的`other`形参是一个`const引用`； 因为其他线程可能有这个类型的非const引用对象， 并调用变种成员函数， 所以这里有必要对互斥量上锁。 又因为锁住互斥量是个可变操作，所以互斥量成员必须（ 修饰） 为`mutable`才能在`empty()`和拷贝构造函数中锁住。
* 一种可能是， 很多线程等待同一事件。 对于通知， 他们都需要做出回应。通过条件变量调用`notify_all()`成员函数， 而非直接调用`notify_one()`函数。 

### 4.2 使用期望值等待一次性事件
* C++标准库模型将这种一次性事件称为期望值(future)。 当线程需要等待特定的一次性事件时， 某种程度上来说就需要知道这个事件在未来的期望结果。 
* C++标准库中， 有两种期望值， 使用两种类型模板实现， 声明在 `<future>` 头文件中: 唯一期望值`(uniquefutures)( std::future<> )`和共享期望值`(shared futures)( std::shared_future<> )`。 仿照了 `std::unique_ptr` 和 `std::shared_ptr` 。 `std::future` 的实例只能与一个指定事件相关联，而 `std::shared_future` 的实例就能关联多个事件。 后者的实现中， 所有实例会在同时变为就绪状态， 并且他们可以访问与事件相关的任何数据

#### 4.2.1 后台任务的返回值
* *coding/coding_cpp/cia/4.2_Wait/main.cpp* `test1()`

* 当不着急要任务结果时， 可以使用 `std::async` 启动一个异步任务。 与 `std::thread` 对象等待的方式不同，`std::async` 会返回一个 `std::future` 对象， 这个对象持有最终计算出来的结果。 当需要这个值时， 只需要调用这个对象的`get()`成员函数； 并且会阻塞线程直到期望值状态为就绪为止；

* 与 `std::thread` 做的方式一样， `std::async` 允许你通过添加额外的调用参数， 向函数传递额外的参数。 
* 使用 std::async 向函数传递参数
* *coding/coding_cpp/cia/4.2_Wait/main.cpp* `test2()` 

* 默认情况下， 期望值是否等待取决于 `std::async` 是否启动一个线程， 或是否有任务正在进行同步。 也可以在函数调用之前向 `std::async` 传递一个额外参数， 这个参数的类型是 `std::launch` ， 可以是 `std::launch::defered` ， 表明函数调用被延迟到`wait()`或`get()`函数调用时才执行， `std::launch::async` 表明函数必须在其所在的独立线程上执行， `std::launch::deferred | std::launch::async` 表明实现可以选择这两种方式的一种。 最后一个选项是默认的， 当函数调用被延迟， 它可能不会在运行了

#### 4.2.2 任务与期望值关联
* *coding/coding_cpp/cia/4.2_Wait/main.cpp* `test3()`

* `std::packaged_task<>` 对一个函数或可调用对象， 绑定一个期望值。 当调用 std::packaged_task<> 对象时， 它就会调用相关函数或可调用对象， 将期望状态置为就绪， 返回值也会被存储。 
* 可以把用 `std::packaged_task` 打包任务， 并在它被传到别处之前的适当时机取回期望值。 当需要异步任务的返回值时， 你可以等待期望的状态变为"就绪"
* 因为 `std::packaged_task` 对象是一个可调用对象， 所以可以封装在 `std::function` 对象中， 从而作为线程函数传递到 `std::thread` 对象中， 或作为可调用对象传递另一个函数中， 或可以直接进行调用
* 线程间传递任务
  * 很多图形架构需要特定的线程去更新界面， 所以当一个线程对界面的更新时， 它要发出一条信息给正确的线程， 让特定的线程来做界面更新

#### 4.2.3 使用(std::)promises
* *coding/coding_cpp/_single/std_promise_01[02,03].cpp*

* `std::promise<T>` 提供设定值的方式(类型为T)， 这个类型会和 `std::future<T>` 对象相关联

#### 4.2.4 将异常存与期望值中
* *coding/coding_cpp/cia/4.2_Wait/main.cpp* `test6()`

* 函数作为 `std::async` 的一部分时， 当调用抛出一个异常时， 这个异常就会存储到期望值中，之后期望值的状态被置为"就绪"， 之后调用`get()`会抛出这个已存储异常
* 通过函数的显式调用， std::promise 也能提供同样的功能。 当存入的是一个异常而非一个数值时， 就需要调用`set_exception()`成员函数， 而非`set_value()`。

```c++
extern std::promise<double> some_promise;
try
{
  some_promise.set_value(calculate_value());
}
catch(...)
{
  some_promise.set_exception(std::current_exception());
}
```
* 这里使用了 `std::current_exception()` 来检索抛出的异常， 可用 `std::copy_exception()` 作为一个替代方案， `std::copy_exception()` 会直接存储一个新的异常而不抛出：
* `some_promise.set_exception(std::copy_exception(std::logic_error("foo ")));`
* 另一种向期望值中存储异常的方式是， 在没有调用承诺值上的任何设置函数前， 或正在调用包装好的任务时， 销毁与 `std::promise` 或 `std::packaged_task` 相关的期望值对象。 任何情况下， 当期望值的状态还不是“就绪”时， 调用 `std::promise` 或 `std::packaged_task` 的析构函数， 将会存储一个与 `std::future_errc::broken_promise` 错误状态相关的 `std::future_error` 异常

#### 4.2.5 多个线程的等待
* `std::shared_future`
*  因为 `std::future` 是只移动的， 所以其所有权可以在不同的实例中互相传递， 但是只有一个实例可以获得特定的同步结果， 而 `std::shared_future` 实例是可拷贝的， 所以多个对象可以引用同一关联期望值的结

<div align=center>
<img src="../_images/life/CPP-CIA-avoid_future.jpg" width="600">
</div>

* `std::shared_future` 的实例同步 `std::future` 实例的状态。 当 `std::future` 对象没有与其他对象共享同步状态所有权， 那么所有权必须使用 `std::move` 将所有权传递到 `std::shared_future` 

```c++
std::promise<int> p;
std::future<int> f(p.get_future());
assert(f.valid()); // 1 期望值 f 是合法的
std::shared_future<int> sf(std::move(f));
assert(!f.valid()); // 2 期望值 f 现在是不合法的
assert(sf.valid()); // 3 sf 现在是合法的
```

* 转移所有权是对右值的隐式操作， 所以可以通过 `std::promise` 对象的成员函数`get_future()`的返回值， 直接构造一个 `std::shared_future` 对象
```c++
std::promise<std::string> p;
std::shared_future<std::string> sf(p.get_future()); // 1 隐式转移所有权
```

* `std::future` 有一个`share()`成员函数， 可用来创建新的 `std::shared_future`， 并且可以直接转移期望值的所有权
```c++
std::promise< std::map< SomeIndexType, SomeDataType, SomeComparator, SomeAllocator>::iterator> p;
auto sf=p.get_future().share();
```

### 4.3 限定等待时间
* 介绍两种指定超时方式： 一种是"时延"， 另一种是"绝对时间点"。处理持续时间的变量以"_for"作为后缀， 处理绝对时间的变量以"_until"作为后缀。

#### 4.3.1 时钟
* 对于C++标准库来说， 时钟就是时间信息源。
  * 当前时间
  * 时间类型
  * 时钟节拍
  * 通过时钟节拍的分布， 判断时钟是否稳定
* 时钟节拍被指定为`1/x(x在不同硬件上有不同的值)秒`， 这是由时间周期所决定——一个时钟一秒有25个节拍， 因此一个周期为 `std::ratio<1, 25>` ， 当一个时钟的时钟节拍每2.5秒一次， 周期就可以表示为 `std::ratio<5, 2>`
* 当时钟节拍均匀分布(无论是否与周期匹配)， 并且不可调整， 这种时钟就称为稳定时钟。 当`is_steady`静态数据成员为true时， 表明这个时钟就是稳定的； 否则， 就是不稳定的
* C++标准库提供一个稳定时钟 `std::chrono::steady_clock` 。 C++标准库提供的其他时钟可表示为 `std::chrono::system_clock`， 它代表了系统时钟的"实际时间"， 并且提供了函数可将时间点转化为time_t类型的值； `std::chrono::high_resolution_clock` 可能是标准库中提供的具有最小节拍周期(因此具有最高的精度`[分辨率]`)的时钟。 

#### 4.3.2 时延
* std::chrono::duration<> 
  * 分钟 std::chrono::duration<short, std::ratio<60, 1>>
  * 毫秒 std::chrono::duration<double, std::ratio<1, 1000>> 
* 标准库在 std::chrono 命名空间内， 为延时变量提供一系列预定义类型： nanoseconds[纳秒] ,
microseconds[微秒] , milliseconds[毫秒] , seconds[秒] , minutes[分]和hours[时]
* 从 std::atto(10^(-18)) 到 std::exa(10^(18))
* C++14中 `std::chrono_literals` 命名空间中， 有许多预定义的后缀操作符用来表示时长
```c++
using namespace std::chrono_literals;
auto one_day=24h;
auto half_an_hour=30min;
auto max_time_between_messages=30ms;
// 当使用整型字面符， 这些后缀类似使用了预定义的类型， 
// 比如： 15ns和 std::chrono::nanoseconds(15) 就是等价的
```

```c++
std::chrono::milliseconds ms(54802);
std::chrono::seconds s=std::chrono::duration_cast<std::chrono::seconds>(ms);
// 这里的结果就是截断的， 而不是进行了舍入， 所以s最后的值为54。
```

* 基于时延的等待可由 std::chrono::duration<> 来完成
```c++
std::future<int> f=std::async(some_task);
if(f.wait_for(std::chrono::milliseconds(35)) == std::future_status::ready)
  do_something_with(f.get());
//等待函数会返回一个状态值， 表示是等待是超时， 还是继续等待。 
// 这里可以等待期望值， 所以当函数等待超时时， 会返回 std::future_status::timeout ； 
//当期望值状态改变， 函数会返回 std::future_status::ready
// 当与期望值相关的任务延迟了， 函数会返回 std::future_status::deferred
```

#### 4.3.3 时间点
* 时间点可以用 `std::chrono::time_point<>` 类型模板来表示， 实例的第一个参数用来指定所要使用的时钟， 第二个函数参数用来表示时间的计量单位(特化的 `std::chrono::duration<>` )
* ` std::chrono::time_point<std::chrono::system_clock, std::chrono::minutes>`
* 可以通过 `std::chrono::time_point<>` 实例来加/减时延， 来获得一个新的时间点， 所以 `std::chrono::hight_resolution_clock::now() + std::chrono::nanoseconds(500)` 将得到500纳秒后的时间
* 也可以减去一个时间点(二者需要共享同一个时钟)。 结果是两个时间点的时间差
```c++
auto start=std::chrono::high_resolution_clock::now();
do_something();
auto stop=std::chrono::high_resolution_clock::now();
std::cout<<"do_something() took "<<std::chrono::duration<double,std::chrono::seconds>(stop-start).count() <<" seconds"<<std::endl;
```

#### 4.3.4 具有超时功能的函数
* `std::this_thread::sleep_for()` 和 `std::this_thread::sleep_until()` 。 它们的工作就像一个简单的闹钟： 当线程因为指定时延而进入睡眠时， 可使用sleep_for()唤醒； 因指定时间点修眠的， 可使用sleep_until唤醒
* `std::mutex` 和 `std::recursive_mutex` 都不支持超时锁， 但是 `std::timed_mutex` 和 `std::recursive_timed_mutex` 支持。 这两种类型也有`try_lock_for()`和`try_lock_until()`成员函数， 可以在一段时期内尝试获取锁或在指定时间点前获取互斥锁

### 4.4 使用同步操作简化代码
* 当程序需要并发时，可提供更多的函数化的方法， 帮助你简化代码。 比起在多个线程间直接共享数据， 每个任务拥有自己的数据会更好，并且结果可以使用期望值对其他线程进行广播。

#### 4.4.1 使用期望值的函数化编程
* 术语函数化编程(functional programming)引用于一种编程方式， 这种方式中的函数结果只依赖于传入函数的参数， 并不依赖外部状态
* 快速排序——FP模式版
  * *coding/coding_cpp/cia/headers.h* `sequential_quick_sort()`
  * 快速排序算法
    * 给定一个数据列表， 然后选取其中一个数为“中间”值， 之后将列表中的其他数值分成两组——一组比中间值大， 另一组比中间值小。 之后对小于“中间”值的组进行排序， 并返回排序好的列表； 再返回“中间”值； 再对比“中间”值大的组进行排序， 并返回排序的列表
  
  <div align=center>
  <img src="../_images/life/CPP-CIA-快速排序.jpg" width="600">
  </div>

* 快速排序——FP模式线程强化版
  * * *coding/coding_cpp/cia/headers.h* `parallel_quick_sort()`
  * `std::async`: 运行库可能会同步的切换新产生的任务当任务产生的线程数足够多时
  * parallel_quick_sort函数。 因为只是直接递归去获取new_higher列表， 但是，`new_lower`列表是 `std::future<std::list<T>>` 的实例， 而非是一个简单的列表， 所以需要调用`get()`成员函数在调用`splice()`之前去检索数值。 之后， 等待后台任务完成， 并且将结果移入`splice()`调用中； `get()`返回一个包含结果的右值引用， 这样结果就是可以移动的

#### 4.4.2 使用消息传递的同步操作
* 通讯顺序进程(CSP， Communicating Sequential Processer)
* 消息传递接口 MPI(Message Passing Interface)
* CSP 消除潜在的混乱(数据共享并发)， 这就让编程变的更加简单， 且降低错误率。真正通讯顺序处理没有共享数据， 所有消息都是通过消息队列传递
* 试想有一天你要为实现ATM(自动取款机)写一个应用。 这个应用需要处理： 人们尝试取钱时和银行之间的交互情况，以及控制物理器械接受用户的卡片， 显示适当的信息， 处理按钮事件， 吐出现金， 还有退还用户的卡。
  * 一种处理方法是让代码将所有事情分配到三个独立线程上去： 一个线程去处理物理机械， 一个去处理ATM机的逻辑， 还有一个用来与银行通讯。 这些线程可以通过信息进行纯粹的通讯， 而不共享任何数据
  * 一种为ATM机逻辑建模的方式， 就是将其当做一个状态机。 线程的每一个状态都会等待一条可接受的信息， 这条信息包含需要处理的内容。 这会让线程过渡到新的状态， 并且继续循环
  <div align=center>
  <img src="../_images/life/CPP-CIA-ATMSimpleModel.jpg" width="600">
  </div>

* 信息传递编程
  * *coding/coding_cpp/cia/headers.h* `class atm;`
* 注意， handle()函数调用与wait()函数进行连接的； 当收到的信息类型与处理类型不匹配， 收到的信息将会被丢弃， 并且线程继续等待， 直到接收到一条类型匹配的消息。
* 因为调用都被连接在了一起， wait()的实现知道它是等待一条digit_pressed消息， 或是一条clear_last_pressed肖息， 亦或是一条cancel_pressed消息， 这样其他的消息类型将会被丢弃

#### 4.4.3 并发技术扩展规范中的持续性并发
* 并发技术扩展规范在 `std::experiment` 命名空间中提供了新的 `std::promise`和 `std::packaged_taks` 。 与 `std` 命名空间中类型完全不同， 其返回实例类型为 `std::experimental::future` ， 而不是` std::future`
* 为了给期望值添加持续性， 只需要在成员函数后添加then()即可。 比如：给定一个期望值fut， 添加持续性的调用即为`fut.then(continuation)`。
```c++
std::experimental::future<int> find_the_answer;
auto fut=find_the_answer();
auto fut2=fut.then(find_the_question);
assert(!fut.valid());
assert(fut2.valid());
```
* 与直接调用 `std::async` 或 `std::thread` 不同， 持续性函数不需要传入参数， 因为运行库已经为其定义好了参数——会传入一个就绪态持续性期望值， 这个期望值保存了持续性触发后的结果。 假设find_the_answer返回类型为int，`find_the_question`函数根据之前的例子将会传入一个 `std::experimental::future<int>` 作为唯一参数
```c++
std::string find_the_question(std::experimental::future<int> the_answer);
```
* 并发技术扩展规范中没有指定这种情况等价于 std::async ， 但实现可以提供这一扩展。 这种函数写
起来也很简单： 使用 `std::experimental::promise` 来获取一个期望值， 并且生成一个新的线程运行Lambda表达式， 该Lambda表达式为承诺值设置给定函数的返回值
```c++
template<typename Func>
std::experimental::future<decltype(std::declval<Func>()())>
spawn_async(Func&& func){
    std::experimental::promise<
            decltype(std::declval<Func>()())> p;
    auto res=p.get_future();
    std::thread t(
            [p=std::move(p),f=std::decay_t<Func>(func)]()
                    mutable{
                try{
                    p.set_value_at_thread_exit(f());
                } catch(...){
                    p.set_exception_at_thread_exit(std::current_exception());
                }
            });
    t.detach();
    return res;
}

```

#### 4.4.4 持续性连接
* 多线程的方式异步完成这些耗时任务 - 比如登录，需要发送验证凭证，验证后，后台获取账户信息，然后对显示进行更新
  * 处理用户登录——串行函数
  * 处理用户登录——异步方式
  * 处理用户登录——持续性方式
  * 处理用户登录——全异步操作

```c++
void process_login(std::string const& username, std::string const& password)
{
    try{
        user_id const id = backend.authenticate_user(username, password);
        user_data const info_to_display = backend.request_current_info(id);
        update_display(info_to_display);
    } catch(std::exception& e){
        display_error(e);
    }
}
std::future<void> process_login(
        std::string const& username, std::string const& password)
{
    return std::async(std::launch::async,[=](){
        try{
            user_id consst id = backend.authenticate_user(username, password);
            user_data const info_to_display =
                    backend.request_current_info(id);
            update_display(info_to_display);
        } catch(std::exception& e){
            display_error(e);
        }
    });
}
std::experimental::future<void> process_login(
        std::string const& username, std::string const& password)
{
    return spawn_async([=](){
        return backend.authenticate_user(username, password);
    }).then([](std::experimental::future<user_id> id){
        return backend.request_current_info(id.get());
    }).then([](std::experimental::future<user_data> info_to_display){
        try{
            update_display(info_to_display.get());
        } catch(std::exception& e){
            display_error(e);
        }
    });
}
std::experimental::future<void> process_login(std::string const& username, std::string const& password){
    return backend.async_authenticate_user(username, password).then(
            [](std::experimental::future<user_id> id){
                return backend.async_request_current_info(id.get());
            }).then([](std::experimental::future<user_data> info_to_display){
        try{
            update_display(info_to_display.get());
        } catch(std::exception& e){
            display_error(e);
        }
    });
}
/*
 * 区别就是Lambda表达式和将相应的功能包裹在 .then 的调用中。 如果所用编译
 * 器支持C++14泛型Lambda表达式， 那么Lambda表达式的参数列表中的类型可以使用auto替换

return backend.async_authenticate_user(username, password).then(
  [](auto id){
    return backend.async_request_current_info(id.get());
  });
*/
```

* 每个持续性函数都有一个 `std::experimental::future` 作为独立参数， 然后使用 .get() 来获取其拥有
的值。 这意味着异常会沿着这个链条进行传播， 如果有函数抛出异常， 那么就会在调用`info_to_display.get()`时
抛出， 捕获结构可以处理所有的异常类型

* `std::experimental::shared_future` 同样支持持续性。 二者的区别在于， `std::experimental::shared_future` 对象可以具有多个持续性对象， 并且持续性参数是 `std::experimental::shared_future` 

```c++
auto fut = spawn_async(some_function).share();
auto fut2 = fut.then([](std::experimental::shared_future<some_data> data){
    do_stuff(data);
});
auto fut3 = fut.then([](std::experimental::shared_future<some_data> data){
    return do_other_stuff(data);
});
```
* 由于调用了 `share()` ， fut是一个 `std::experimental::share_future` 实例， 这是因为持续性函数必须将 `std::experimental::shared_future` 对象作为参数。 不过， 持续性返回的值为 `std::experimental::future `——目前这个值无法共享——所以fut2和fut3的类型都是 `std::experimental::future`

#### 4.4.5 等待多个期望值
* 假设你有很多的数据需要处理， 并且每个数据都可以单独的进行处理。 这是利用硬件的好机会， 可以产生异步任务组来处理数据项， 每个任务通过期望值来返回处理过后的数据。 不过， 当需要等待所有任务完成， 才能得到最终的结果， 对于逐个的对期望值进行收集， 然后在整理结果， 这总觉得不是很爽。 如果打算用一个异步任务来收集结果， 那就先要生成这个异步任务， 这样的话就会占用一个线程的资源， 并且需要不断的对期望值进行轮询， 当所有期望值状态为就绪时， 生成新的任务

```c++
std::future<FinalResult> process_data(std::vector<MyData>& vec)
{
    size_t const chunk_size = whatever;
    std::vector<std::future<ChunkResult>> results;
    for (auto begin=vec.begin(), end=vec.end(); beg!=end;){
        size_t const remaining_size = end - begin;
        size_t const this_chunk_size = std::min(remaining_size, chunk_size);
        results.push_back(
                std::async(process_chunk, begin, begin+this_chunk_size));
        begin += this_chunk_size;
    }
    return std::async([all_results=std::move(results)](){
        std::vector<ChunkResult> v;
        v.reserve(all_results.size());
        for (auto& f : all_results)
        {
            v.push_back(f.get()); // 1
        }
        return gather_results(v);
    });
}
```
*  每个任务都是独立的， 因此当结果可用前， 调度程序会在1处反复的进行唤醒，
* 可以使用 `std::experimental::when_all` 来避免这里的等待和切换， 可以将一组需要等待的期望值传入`when_all`函数中， 其会返回一个新的期望值——当传入的所有期望值的状态都为就绪时， 这个新的期望值状态就会被置为就绪

```c++
std::experimental::future<FinalResult> process_data(
        std::vector<MyData>& vec)
{
    size_t const chunk_size = whatever;
    std::vector<std::experimental::future<ChunkResult>> results;
    for (auto begin = vec.begin(), end = vec.end(); beg != end){
        size_t const remaining_size = end - begin;
        size_t const this_chunk_size = std::min(remaining_size, chunk_size);
        results.push_back(
                spawn_async(
                        process_chunk, begin, begin+this_chunk_size));
        begin += this_chunk_size;
    }
    return std::experimental::when_all(
            results.begin(), results.end()).then( // 1
            [](std::future<std::vector<std::experimental::future<ChunkResult>>> ready_results){
                std::vector<std::experimental::future<ChunkResult>> all_results =
                        ready_results.get();
                std::vector<ChunkResult> v;
                v.reserve(all_results.size());
                for (auto& f: all_results){
                    v.push_back(f.get()); // 2
                }
                return gather_results(v);
            });
}
```
* when_all函数会等待所有期望值的状态变为就绪， 然后再用 .then 调用调度函数

#### 4.4.6 使用when_any等待第一个期望值
* 假设你在一大堆数据里面找一个符合要求的值， 不过符合这样要求的值有很多， 找到任何一个都可以。 这种任务是可以并行的， 可以多线程完成， 每个任务去检查数据的一个子集； 如果有线程找到了合适的值， 那么这个线程会设置一个标志， 让其他线程停止搜索， 并返回结果

```c++
std::experimental::future<FinalResult>
find_and_process_value(std::vector<MyData> &data)
{
    unsigned const concurrency = std::thread::hardware_concurrency();
    unsigned const num_tasks = (concurrency > 0)? concurrency : 2;
    std::vector<std::experimental::future<MyData *>> results;
    auto const chunk_size = (data.size() + num_tasks - 1) / num_tasks;
    auto chunk_begin = data.begin();
    std::shared_ptr<std::atomic<bool>> done_flag =
            std::make_shared<std::atomic<bool>>(false);
    for (unsigned i = 0; i < num_tasks; ++i){ // 1
        auto chunk_end =
                (i < (num_tasks - 1)? chunk_begin + chunk_size : data.end());
        results.push_back(spawn_async([=]{ // 2
            for (auto entry = chunk_begin;
                 !*done_flag && (entry != chunk_end);
                 ++entry){
                if (matches_find_criteria(*entry)){
                    *done_flag = true;
                    return &*entry;
                }
            }
            return (MyData *)nullptr;
        }));
        chunk_begin = chunk_end;
    }
    std::shared_ptr<std::experimental::promise<FinalResult>> final_result =
            std::make_shared<std::experimental::promise<FinalResult>>();
    struct DoneCheck {
        std::shared_ptr<std::experimental::promise<FinalResult>> final_result;

        DoneCheck(std::shared_ptr<std::experimental::promise<FinalResult>> final_result_)
                : final_result(std::move(final_result_)) {}

        void operator()(std::experimental::future<std::experimental::when_any_result<
                std::vector<std::experimental::future<MyData *>>>> results_param) {
            auto results = results_param.get();
            MyData *const ready_result =
                    results.futures[results.index].get(); // 5
            if (ready_result)
                final_result->set_value( // 6
                        process_found_value(*ready_result));
            else {
                results.futures.erase(
                        results.futures.begin() + results.index); // 7
                if (!results.futures.empty()) {
                    std::experimental::when_any( // 8
                            results.futures.begin(), results.futures.end())
                            .then(std::move(*this));
                } else {
                    final_result->set_exception(
                            std::make_exception_ptr( // 9
                                    std::runtime_error("Not found")));
                }
            }
        };
    }
    std::experimental::when_any(results.begin(), results.end()).then(DoneCheck(final_result)); // 3
    return final_result->get_future(); // 10
}
```

```c++
std::experimental::future<int> f1=spawn_async(func1);
std::experimental::future<std::string> f2=spawn_async(func2);
std::experimental::future<double> f3=spawn_async(func3);
std::experimental::future<
  std::tuple<
    std::experimental::future<int>,
    std::experimental::future<std::string>,
    std::experimental::future<double>>> result=
  std::experimental::when_all(std::move(f1),std::move(f2),std::move(f3));
```

* 时所等待的事件是一组线程， 或是要达到代码的特定点， 或是需要配合着处理了一定量的数据。 这种情况下， 最好使用锁存器或栅栏机制， 而不是期望值。 现在， 让我们来了解一下并发技术扩展规范所提供的锁存器和栅栏机制

#### 4.4.7 并发技术扩展规范中的锁存器和栅栏机制
* 锁存器是一种同步对象， 当它的计数器减为0时， 它就准备就绪了。 锁存器这个名称是基于其输出特性——当处于就绪态时， 其就会保持就绪态， 直到被销毁。 因此， 锁存器是为同步一系列事件发生的轻量级装置
* 栅栏机制是一种可复用的同步装置， 其用于一组线程间的内部同步。 虽然， 锁存器不在乎是哪个线程使得计数器递减——同一个线程可以对计数器递减多次， 或多个线程对计数器递减一次， 再或是其中有些线程对计数器有两次的递减——对于栅栏机制来说， 每一个线程只能在每个周期到达栅栏一次。 当线程都抵达栅栏时， 会对线程进行阻塞， 直到所有线程都达到栅栏处， 这时阻塞将会被解除。 栅栏可以复用——线程可以再次到达栅栏处， 等待下一个周期的所有线程

#### 4.4.8 `std::experimental::latch`基础的锁存器类型
* *coding/coding_cpp/cia/4.4_Experimental/main.cpp* `test1()`

#### 4.4.9 `std::experimental::barrier`简单的栅栏机制
* *coding/coding_cpp/cia/4.4_Experimental/main.cpp* `test2()`

#### 4.4.10 `std::experimental::flex_barrie`更灵活和友好版`std::experimental::barrier`
* *coding/coding_cpp/cia/4.4_Experimental/main.cpp* `test3()`

## 第5章 C++内存模型和原子类型操作
* C++是一个系统级别的编程语言， 标准委员会的目标之一就是不需要比C++还要底层的高级语言。 C++应该向程序员提供足够的灵活性， 无障碍的去做他们想要做的事情； 当需要的时候， 可以让他们“接触硬件”。 原子类型和原子操作就允许他们“接触硬件”， 并提供底层级别的同步操作， 通常会将常规指令数缩减到1~2个CPU指令。

### 5.1 内存模型基础
* 内存模型： 一方面是基本结构， 这与内存布局的有关， 另一方面就是并发。 并发基本结构很重要， 特别是低层原子操作

#### 5.1.1 对象和内存位置
<div align=center>
<img src="../_images/life/CPP-CIA-5.1StructLocation.jpg" width="600">
</div>

* 在C++和C中规定， 宽度为0的一个未命名位域强制下一位域对齐到其下一type边界， 其中type是该成员的类型

#### 5.1.2 对象、 内存位置和并发
* 所有东西都在内存中。 当两个线程访问不同的内存位置时， 不会存在任何问题。 当两个线程访问同一个内存位置， 就要小心了。 如果没有线程更新数据； 只读数据不需要保护或同步。 当有线程对内存位置上的数据进行修改， 那就有可能会产生条件竞争。为了避免条件竞争， 两个线程就需要一定的执行顺序。 第一种方式,使用互斥量来确定访问的顺序； 当同一互斥量在两个线程同时访问前被锁住， 那么在同一时间内就只有一个线程能够访问到对应的内存位置， 所以后一个访问必须在前一个访问之后。 另一种是使用原子操作， 决定两个线程的访问顺序。 当多于两个线程访问同一个内存地址时， 对每个访问这都需要定义一个顺序。如果不规定两个不同线程对同一内存地址访问的顺序， 那么访问就不是原子的； 并且， 当两个线程都是“作者”时， 就会产生数据竞争和未定义行为。

* 当程序对同一内存地址中的数据访问存在竞争， 可以使用原子操作来避免未定义行为。 当然， 这不会影响竞争的产生——原子操作并没有指定访问顺序——但原子操作把程序拉回到定义行为的区域内。

#### 5.1.3 修改顺序
* 每个C++程序中的对象， 都有(由程序中的所有线程对象)确定好的修改顺序， 且在初始化开始阶段确定。 大多数情况下， 这个顺序不同于执行中的顺序， 但在给定的程序中， 所有线程都需要遵守这个顺序。 如果对象不是一个原子类型必须确保有足够的同步操作， 来确定每个线程都遵守了变量的修改顺序。 当不同线程在不同序列中访问同一个值时， 可能就会遇到数据竞争或未定义行为。 如果使用原子操作， 编译器就有责任去做必要的同步。

### 5.2 C++中的原子操作和原子类型
* 原子操作是个不可分割的操作。 系统的所有线程中， 不可能观察到原子操作完成了一半； 要么就是做了， 要么就是没做， 只有这两种可能。
* 非原子操作可能会被另一个线程观察到只完成一半。 如果这个操作是一个存储操作， 那么其他线程看到的值， 可能既不是存储前的值， 也不是存储的值， 而是别的什么值。 如果非原子操作是一个加载操作， 它可能先取到对象的一部分， 然后值被另一个线程修改， 然后它再取到剩余的部分， 所以它取到的既不是第一个值， 也不是第二个值， 而是两个值的某种组合。

#### 5.2.1 标准原子类型
* 标准库提供了一组宏， 在编译时对各种整型原子操作是否无锁进行判别。 C++17中， 所有原子类型有一个static
`constexpr`成员变量， 如果相应硬件上的原子类型`X`是无锁类型， 那么`X::is_always_lock_free`将返回`true`
* `std::atomic_flag` 类型不提供`is_lock_free()`。 该类型是一个简单的布尔标志， 并且在这种类型上的操作都是无锁的；
* 标准原子类型是不能进行拷贝和赋值的， 它们没有拷贝构造函数和拷贝赋值操作符。 但是， 可以隐式转化成对应的内置类型， 所以这些类型依旧支持赋值， 可以使用`load()`和`store()`、 `exchange()`、`compare_exchange_weak()`和`compare_exchange_strong()`。 它们都支持复合赋值符： `+=, -=, *=, |=` 等等。 并且使用整型和指针的特化类型还支持`++`和`--`操作。 当然， 这些操作也有功能相同的成员函数所对应：`fetch_add()`, `fetch_or()`等等。
* 每种函数类型的操作都有一个内存排序参数， 这个参数可以用来指定存储的顺序
  1. Store操作， 可选如下顺序： memory_order_relaxed, memory_order_release,memory_order_seq_cst
  2. Load操作， 可选如下顺序： memory_order_relaxed, memory_order_consume, memory_order_acquire, memory_order_seq_cst
  3. Read-modify-write(读-改-写)操作， 可选如下顺序： memory_order_relaxed, memory_order_consume, memory_order_acquire, memory_order_release, memory_order_acq_rel, memory_order_seq_cst。

#### 5.2.2 std::atomic_flag的相关操作
* 有限的特性使得 `std::atomic_flag` 非常适合于作自旋互斥锁。
* 由于 `std::atomic_flag` 局限性太强， 没有非修改查询操作， 甚至不能像普通的布尔标志那样使用。 所以， 实际中最好使用 `std::atomic<bool>`

#### 5.2.3 std::atomic<bool> 的相关操作
* *coding/coding_cpp/cia/5.2_Atomic/main.cpp* `test1() test2() test3() test4()`

* 可以使用非原子的bool类型进行构造， 所以可以被初始化为true或false， 并且可以从非原子bool变量赋值给 `std::atomic<bool>` 
* 使用`store()`去写入`(true或false)`是好于 `std::atomic_flag` 中限制性很强的`clear()`。 同样， `test_and_set()`函数也可以被更加通用的`exchange()`成员函数所替换， `exchange()`成员函数允许使用新选的值替换已存储的值， 并且会自动检索原始值。 `store()`是一个存储操作， 而`load()`是一个加载操作。 `exchange()`是一个“读-改-写”操作
* `std::atomic<bool>` 提供的`exchange()`， 不仅仅是一个“读-改-写”的操作； 它还介绍了一种新的存储方式： 当当前值与预期值一致时， 存储新值的操作。
* 因为`compare_exchange_weak()`可以**伪失败**， 所以通常使用一个循环
* 当实际值与期望值不符， `compare_exchange_strong()`就能保证值返回false。 这就能消除对循环的需要， 就可以知道是否成功的改变了一个变量， 或已让另一个线程完成

#### 5.2.4 std::atomic<T*> :指针运算
* *coding/coding_cpp/cia/5.2_Atomic/main.cpp* `test5()`

* `std::atomic<T*>` 为指针运算提供新的操作。 基本操作有`fetch_add()`和`fetch_sub()`提供， 它们在存储地址上做原子加法和减法， 为`+=`, `-=`, `++`和`--`提供简易的封装

#### 5.2.5 标准的原子整型的相关操作
* `std::atomic<int>` 和 `std::atomic<unsigned long long>`

#### 5.2.6 std::atomic<> 类模板
*  为了使用 `std::atomic<UDT>` (UDT是用户定义类型)， 这个类型必须有拷贝赋值运算符。 这就意味着这个类型不能有任何虚函数或虚基类， 以及必须使用编译器创建的拷贝赋值操作
* 当使用用户定义类型T进行实例化时， `std::atomic<T>` 的可用接口就只有: `load(), store(), exchange(),compare_exchange_weak(), compare_exchange_strong()`和赋值操作， 以及向类型`T`转换的操作
* 每一个原子类型所能使用的操作
<div align=center>
<img src="../_images/life/CPP-CIA-每一个原子类型所能使用的操作.jpg" width="600">
</div>

#### 5.2.7 原子操作的释放函数
* *coding/coding_cpp/cia/5.2_Atomic/main.cpp* `test6()`

### 5.3 同步操作和强制排序
* *coding/coding_cpp/cia/5.2_Atomic/main.cpp* `test7()`

* 假设两个线程， 一个向数据结构中填充数据， 另一个读取数据结构中的数据。 为了避免恶性条件竞争， 第一个线程设置一个标志， 用来表明数据已经准备就绪， 并且第二个线程在这个标志设置前不能读取数据

#### 5.3.1 同步发生
* "同步发生"的基本想法： 原子写操作`W`对变量`x`进行标记， 同步与对`x`进行原子读操作， 读取的是`W`操作写入的内容； 或是`W`之后， 同一线程上的原子写操作对`x`写入的值； 亦或是任意线程对`x`的一系列原子`读-改-写`操作

#### 5.3.2 先行发生
* *coding/coding_cpp/cia/5.2_Atomic/main.cpp* `test8()`

* "先行发生"关系是一个程序中， 基本构建块的操作顺序： 它指定了某个操作去影响另一个操作。 对于单线程来说： 当一个操作排在另一个之后， 那么这个操作就是先行执行的。 如果源码中操作`A`发生在操作`B`之前， 那么`A`就先行于`B`发生

#### 5.3.3 原子操作的内存顺序
[Program/C++/Reference/std/std::memory_order](./technology/program#stdmemory_order)

* *coding/coding_cpp/cia/5.2_Atomic/main.cpp* `test9()`
* 松散序列
  * 原子类型上的操作以松散序列执行， 没有任何同步关系。 同一线程中对于同一变量的操作还是服从先发执行的关系，但是不同线程几乎不需要相对的顺序。 唯一的要求是在访问同一线程中的单个原子变量不能重排序， 当给定线程看到原子变量的特定值时， 随后线程的读操作就不会去检索变量较早的那个值

* 非限制操作
  * *coding/coding_cpp/cia/5.3_Order/main.cpp* `test1()`

* 获取和释放顺序进行同步传递
  * *coding/coding_cpp/cia/5.3_Order/main.cpp* `test2()`

```c++
std::atomic<int> sync(0);
void thread_1()
{
  // ...
  sync.store(1,std::memory_order_release);
}
void thread_2()
{
  int expected=1;
  while(!sync.compare_exchange_strong(expected,2,
    std::memory_order_acq_rel))
    expected=1;
}
void thread_3()
{
  while(sync.load(std::memory_order_acquire)<2);
  // ...
}
```

* 数据依赖： 第二个操作依赖于第一个操作的结果， 这样两个操作之间就有了数据依赖。 这里有两种新关系用来处理数据依赖： `前序依赖(dependency-ordered-before)`和`携带依赖(carries-a-dependency to)`。 携带依赖对于数据依赖的操作， 严格应用于一个独立线程和其基本模型； 如果`A`操作结果要使用操作`B`的操作数， 而后`A`将携带依赖于`B`。 如果`A`操作的结果是一个标量(比如int)， 而后的携带依赖关系仍然适用于， 当`A`的结果存储在一个变量中， 并且这个变量需要被其他操作使用； 这个操作是也是可以传递的， 所以当`A`携带依赖`B`， 并且`B`携带依赖`C`， 就可以得出`A`携带依赖`C`的关系。

* *coding/coding_cpp/cia/5.3_Order/main.cpp* `test3()`
* 有时， 不想为携带依赖增加其他开销。 想让编译器在寄存器中缓存这些值， 以及优化重排序操作代码， 而不是对这些依赖大惊小怪。 可以使用 `std::kill_dependecy()` 来显式打破依赖链

```c++
int global_data[]={ … };
std::atomic<int> index;
void f()
{
  int i=index.load(std::memory_order_consume);
  do_something_with(global_data[std::kill_dependency(i)]);
}
```

#### 5.3.4 释放队列与同步
* *coding/coding_cpp/cia/5.3_Order/main.cpp* `test4()`

<div align=center>
<img src="../_images/life/CPP-CIA-队列操作的释放顺序.jpg" width="600">
</div>

* 操作链中可以有任意数量的链接， 提供的都是`读-改-写`操作， 比如`fetch_sub()， store()`， 每一个都会与使用`memory_order_acquire`语义的操作进行同步

#### 5.3.5 栅栏
* *coding/coding_cpp/cia/5.4_Fence/main.cpp* `test1()`
* 栅栏属于全局操作， 执行栅栏操作可以影响到在线程中的其他原子操作。 因为这类操作就像画了一条任何代码都无法跨越的线一样， 所以栅栏操作通常也被称为内存栅栏(memory barriers)

#### 5.3.6 原子操作对非原子的操作排序

```c++
bool x=false; // x现在是一个非原子变量
std::atomic<bool> y;
std::atomic<int> z;
void write_x_then_y()
{
  x=true; // 1 在栅栏前存储x
  std::atomic_thread_fence(std::memory_order_release);
  y.store(true,std::memory_order_relaxed); // 2 在栅栏后存储y
}
void read_y_then_x()
{
  while(!y.load(std::memory_order_relaxed)); // 3 在#2写入前， 持续等待
  std::atomic_thread_fence(std::memory_order_acquire);
  if(x) // 4 这里读取到的值， 是#1中写入
    ++z;
}
int main()
{
  x=false;
  y=false;
  z=0;
  std::thread a(write_x_then_y);
  std::thread b(read_y_then_x);
  a.join();
  b.join();
  assert(z.load()!=0); // 5 断言将不会触发
}
```

* 一旦读取线程看到存储到y的操作， 栅栏将会对x执行有序的操作。 这个执行顺序意味着， 即使它被另外的
线程修改或被其他线程读取， x上也不存在条件竞争

#### 5.3.7 非原子操作排序
* 使用 `std::memory_order_acquire` 序列的`lock()`操作是在`flag.test_and_set()`上的一个循环， 并且使用 `std::memory_order_release` 序列的`unlock()`调用`flag.clear()`。 第一个线程调用`lock()`时， 标志最初是没有的， 所以第一次调用`test_and_set()`将会设置标志， 并且返回`false`， 表示线程现在已锁， 并且结束循环。 之后，线程可以自由的修改由互斥量保护的数据。 这时， 任何想要调用`lock()`的线程， 将会看到已设置的标志， 而后会被`test_and_set()`中的循环所阻塞。当带锁线程完成对保护数据的修改， 它会调用`unlock()`， 相当于调用带有 `std::memory_order_release` 语义的`flag.clear()`。 因为对`lock()`的调用带有 `std::memory_order_acquire` 语义， 所以随后线程访问`flag.test_and_set()`时调用`lock()`会进行同步

1. std::thread
2. std::mutex, std::timed_mutex, std::recursive_mutex, std::recursibe_timed_mutex
3. std::shared_mutex , std::shared_timed_mutex
4. std::packaged_task , std::future和std::shared_future
5. std::async , std::future和std::shared_future
6. std::experimental::latch
7. std::experimental::barrier  和 std::experimental::flex_barrier
8. std::condition_variable和std::condition_variable_any

## 第6章 基于锁的并发数据结构设计

### 6.2.1 线程安全栈——使用锁
* *coding/coding_cpp/cia/6.1_Lock/main.cpp* `test1()`

### 6.2.2 线程安全队列——使用锁和条件变量

## Reference
* 并发与并行的区别是什么？
  * *https://www.zhihu.com/question/33515481/answer/58849148*
  * 你吃饭吃到一半，电话来了，你一直到吃完了以后才去接，这就说明你不支持并发也不支持并行。你吃饭吃到一半，电话来了，你停了下来接了电话，接完后继续吃饭，这说明你支持并发。你吃饭吃到一半，电话来了，你一边打电话一边吃饭，这说明你支持并行。并发的关键是你有处理多个任务的能力，不一定要同时。并行的关键是你有同时处理多个任务的能力。所以我认为它们最关键的点就是：是否是『同时』。