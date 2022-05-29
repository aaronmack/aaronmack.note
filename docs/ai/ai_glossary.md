## ground truth
* 机器学习包括有监督学习(supervised learning)，无监督学习(unsupervised learning)，和半监督学习（semi-supervised learning）.在有监督学习中，数据是有标注的，以(x, t)的形式出现，其中x是输入数据，t是标注.正确的t标注是ground truth，* 错误的标记则不是。（也有人将所有标注数据都叫做ground truth）

## Teacher forcing
* Teacher forcing is a method for quickly and efficiently training recurrent neural network models that use the ground truth from a prior time step as input. It is a network training method critical to the development of deep learning language models used in machine translation, text summarization, and image captioning, among many other applications.

## self-attention
* Self Attention也经常被称为intra Attention（内部Attention），最近一年也获得了比较广泛的使用，比如Google最新的机器翻译模型内部大量采用了Self Attention模型。在一般任务的Encoder-Decoder框架中，输入Source和输出Target内容是不一样的，比如对于英-中机器翻译来说，Source是英文句子，Target是对应的翻译出的中文句子。而Self Attention顾名思义，指的不是Target和Source之间的Attention机制，而是Source内部元素之间或者Target内部元素之间发生的Attention机制，也可以理解为Target=Source这种特殊情况下的注意力计算机制。[from] https://blog.csdn.net/shenfuli/article/details/106523650
  * Attention
    * Target不等于Source情形下的注意力计算，比如对于机器翻译来说，本质上是目标语单词和源语单词之间的一种单词对齐机制。
  * Self-Attention
    self Attention可以捕获同一个句子中单词之间的一些句法特征.引入Self Attention后会更容易捕获句子中长距离的相互依赖的特征, 如果是RNN或者LSTM，需要依次序序列计算，对于远距离的相互依赖的特征，要经过若干时间步步骤的信息累积才能将两者联系起来，而距离越远，有效捕获的可能性越小。但是Self Attention在计算过程中会直接将句子中任意两个单词的联系通过一个计算步骤直接联系起来，所以远距离依赖特征之间的距离被极大缩短，有利于有效地利用这些特征。除此外，Self Attention对于增加计算的并行性也有直接帮助作用。这是为何Self Attention逐渐被广泛使用的主要原因

## Positional Encoding - Transformer
* 在没有 Position embedding 的 Transformer 模型并不能捕捉序列的顺序，交换单词位置后 attention map 的对应位置数值也会进行交换，并不会产生数值变化，即没有词序信息。所以这时候想要将词序信息加入到模型中。

* 关于如何生成词序信息的问题，可能让人迷惑的是词序信息是什么呢？这里以情感分析 sentiment analysis 为例：`I like this movie because it doesn't have an overhead history.` Positive
`I don't like this movie because it has an overhead history`. Negative. don’t 的位置不同，决定了这两句话的情感取向是一正一负的，但在传统词袋模型中，这两句话得到的句子表征却是一致的，可见单词的位置对句子含义很重要。并且在本例子中， don't 和 like 的相对位置对句子含义而言起了关键作用，这里可以联想词向量中的分布语义假设“You shall know a word by the company it keeps” ：词的含义可由其上下文词的分布进行表示，进行理解。词序信息的表示方法很丰富，但究其根本，需要的是对不同维度的不同位置生成合理的数值表示。这里的合理，理解为不同位置的同一维度的位置向量之间，含有相对位置信息，而相对位置信息可以通过函数的周期性实现。Transformer 使用的解决方案是三角函数实现相对位置信息的表示。原回答已经对论文中的公式做了细致的解释，实质上就是对不同维度使用不同频率的正/余弦公式进而生成不同位置的高维位置向量。 [from] https://www.zhihu.com/question/347678607

## OCR (Optical Character Recognition)