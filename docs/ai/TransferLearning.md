## Transfer Learning
  迁移学习(Transfer learning) 顾名思义就是就是把已学训练好的模型参数迁移到新的模型来帮助新模型训练。考虑到大部分数据或任务是存在相关性的，所以通过迁移学习我们可以将已经学到的模型参数（也可理解为模型学到的知识）通过某种方式来分享给新模型从而加快并优化模型的学习效率不用像大多数网络那样从零学习（starting from scratch，tabula rasa）

## Catastrophic Forgetting (神经网络的一个性质)

  意思是如果我们将 pre-trained 的模型作为初始值训练一个全新的任务，模型之前学习到的特征将灾难性遗忘，也意味着之前网络训练的任务结果将非常糟糕

## Progressive Neural Networks 
  通过 Lateral Connection 的方式将一学习好的模型参数通过另一层网络教给一个新的任务。由于在网络设计中，已训练完成的模型将会被 Freeze 因此在 back-propagation 优化参数的方式并不影响已学习完成的网络。这种网络设计很自然的避免了 Catastrophic Forgetting 的出现，但也引出了一些新的问题。不断的加入新的任务会引出新的网络分支，以及 lateral connection 分支，这种学习效率显然是很低的，因为我们一次只能学一个任务。我们无法确定先学哪个任务将会给后续的任务有一个最好的结果。i.e. 我们不清楚任何关于任务的相关和层级信息，因此找到最优方法需要 n 个任务的排列也就是 n! 种方式，再一次突出了学习效率之低。(better to learn from A -> B or B -> A?) (https://arxiv.org/pdf/1606.04671.pdf)

## Overcoming catastrophic forgetting in neural networks
  (https://arxiv.org/pdf/1612.00796.pdf) -
  不直接用于 Deep Learning 的 back-propagation 方式而专注于 Bayesian Learning 通过 Full Bayesian posterior distribution 来计算网络参数。他们的方法，Elastic Weight Consolidation (EWC), 通过 Laplace Approximation 的方式来计算 Bayesian 那也无法进行数值计算的 log-likelihood，最后取得相当不错的效果 More(https://www.inference.vc/comment-on-overcoming-catastrophic-forgetting-in-nns-are-multiple-penalties-needed-2/)