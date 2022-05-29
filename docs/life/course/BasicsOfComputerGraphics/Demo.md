> 仓库地址: https://github.com/AAaronMack/course-basics_computer_graphics.git <br>将这个仓库Clone下来后，进入文件夹中的**resources**目录并解压**tools.7z**点击其中的**install.bat**将会配置好课程中所需要的环境(包括git、nodejs、docsify)

## Day01-Git & Github

* **演示示例**
  * Github上新建个人Token与仓库 (Github账号已经注册成功)
  * Clone远端的Github仓库
  * 新建a.txt文件，并提交，Comment为*firstEdit*，发布到远程仓库
  * 检查远程仓库
  * 修改a.txt文件，并提交，Comment为*secondEdit*,发布到远程仓库
  * 切换历史提交*firstEdit*
  * 检查本地内容
  * 模拟在月球上的情景 (移动仓库到另外一个位置，再把远程的拷贝下来)
  * 修改a.txt文件，并提交，Comment为*thirdEdit*，发布到远程仓库
  * 把之前移动的仓库再移动回来，然后拉取在月球上提交的内容
  * 检查本地内容

## Day02-Docsify & Markdown

模板仓库地址: https://github.com/AAaronMack/aaaronmack.github.io

* **演示示例**
  * Github上新建仓库 (用户名.github.io)
  * 设置Pages (branch: main /docs)
  * 拷贝仓库到本地
  * docsify init docs
  * docsify serve docs
  * 提交到云端
  * 检查云端笔记内容
  * <div align=center><img src="https://cdn.jsdelivr.net/gh/aaronmack/image-hosting@master/life/github-pages.4vrpg7baj3m0.webp"></div>

* **Markdown练习**
  * 参照Example.md中的内容
  * 总的来说，我们做笔记主要是写**Markdown**，然后使用**Git**提交到**Github**上，最后访问那个github的链接就可以随时随地看到我们的笔记了，而**Docsify**搭建一次之后，一般就不需要再修改了

## Day03-JavaScript & TypeScript

* **演示示例**
  * **以交互方式**
    * 启动**cmd**命令行窗口
    * 输入`node`
    * 例如<div align=center><img src="https://cdn.jsdelivr.net/gh/aaronmack/image-hosting@master/graphics/cmd-node.24ysk47mp63k.webp"></div>
  * **以执行方式**
    * 新建文件`test.js` (文件中是我们要执行的代码)
    * 启动**cmd**命令行窗口
    * 输入`node test.js`
    * 例如<div align=center><img src="https://cdn.jsdelivr.net/gh/aaronmack/image-hosting@master/graphics/cmd-js.3pity8t9jx60.webp"></div>


## Day05- Graphics

* pyopengl
  * persp
    * fov
  * ortho
* webgpu
  * trig
  * cube