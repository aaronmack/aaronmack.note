# Windows

## Development 

### Configuration on the new computer

Version: `Win10_1909_English_x64.iso`

VMware Workstation: `15.5.6`

#### Windows Package Manager

* Chocolatey (https://chocolatey.org/)

##### Install with Administrative

With PowerShell, you must ensure `Get-ExecutionPolicy` is not Restricted. We suggest using Bypass to bypass the policy to get things installed or AllSigned for quite a bit more security.

run follow command in PowerShell with Administrative 

```bash
Set-ExecutionPolicy Bypass -Scope Process -Force; [System.Net.ServicePointManager]::SecurityProtocol = [System.Net.ServicePointManager]::SecurityProtocol -bor 3072; iex ((New-Object System.Net.WebClient).DownloadString('https://chocolatey.org/install.ps1'))
```

* Scoop (https://scoop.sh/)


Installs in seconds

Make sure PowerShell 5 (or later, include PowerShell Core) and .NET Framework 4.5 (or later) are installed. Then run:

```bash
# run follow
Invoke-Expression (New-Object System.Net.WebClient).DownloadString('https://get.scoop.sh')

# or shorter
iwr -useb get.scoop.sh | iex

# config
scoop bucket add extras
scoop bucket add jetbrains
```

Note: if you get an error you might need to change the execution policy (i.e. enable Powershell) with

```bash
Set-ExecutionPolicy RemoteSigned -scope CurrentUser
```

Problems

* 1.The remote name could not be resolved

```bash
Exception calling "DownloadString" with "1" argument(s): "The remote name could not be resolved:
'raw.githubusercontent.com'"
At line:1 char:1
+ Invoke-Expression (New-Object System.Net.WebClient).DownloadString('h ...
+ ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    + CategoryInfo          : NotSpecified: (:) [], MethodInvocationException
    + FullyQualifiedErrorId : WebException
```
  * Description
    * The address of `raw.githubusercontent.com` by our inquire the ip is  `151.101.108.133` and the location is Tokyo, we can not ping that with unhindered

  * Solution
    * Install vpn for see more to go to `VPN` chapter



#### VPN

* install v2ray

`choco install v2ray`

* copy `config.json` file

* run with command

```bash
v2ray -config config.json
# e.g.
v2ray -config C:\DEV_PROJECT\config.json
```

* set proxy with socks5 in terminal

```bash
set http_proxy=socks5://127.0.0.1:10808
set https_proxy=socks5://127.0.0.1:10808
```

* set privoxy

```bash
# install
choco install privoxy

# confing file
# -> go config.txt:1387

# modify
#        forward-socks5t   /               127.0.0.1:9050 .
# to
        forward-socks5t   /               127.0.0.1:10808 .

# -> go config.txt:781
listen-address  127.0.0.1:8118
# to
listen-address  127.0.0.1:10809

# set env var
setx path "%path%;C:\Program Files (x86)\Privoxy"

# start privoxy software
privoxy
```

* configuration windows system setting

Settings -> Network & Internet -> Proxy

  * Use a proxy server: True
  * Address 127.0.0.1
  * Port 10809

```bash
localhost;127.*;10.*;172.16.*;172.17.*;172.18.*;172.19.*;172.20.*;172.21.*;172.22.*;172.23.*;172.24.*;172.25.*;172.26.*;172.27.*;172.28.*;172.29.*;172.30.*;172.31.*;192.168.*
```

#### Dev Environment Configuration

GCC

`git clone https://github.com/aaronmack/open-dev-environment.git`

for more to see [README](https://github.com/aaronmack/open-dev-environment/blob/master/README.txt)


#### Dev Software installer & Configuration

```bash
# run with cmd Administrative

# sublime-text
choco install SublimeText3

# git
choco install git

git config --global user.email "my-email@email.com"
git config --global user.name "Aaron"
git config --global core.autocrlf input
git config --global http.proxy 'socks5://127.0.0.1:10808' 
git config --global https.proxy 'socks5://127.0.0.1:10808'
git config --global http.proxy http://127.0.0.1:10809
git config --global https.proxy https://127.0.0.1:10809

# vscode
choco install vscode

# google-chrome
scoop install googlechrome-portable
```

#### Developer

## Operators

### windows查看端口占用
* [1] Windows下如何查看某个端口被谁占用 https://www.runoob.com/w3cnote/windows-finds-port-usage.html

<div align=center><img src="https://cdn.jsdelivr.net/gh/aaronmack/image-hosting@master/life/windows查看端口占用.32trzrqmxsm0.png" width="690"></div>

# Linux

## Useful Tools Install

### lnmp
* *https://github.com/licess/lnmp*

* https://github.com/licess/lnmp#lnmp%E5%AE%89%E8%A3%85

### nextcloud
* *https://xuhc.net/archives/22*


```bash
wget https://download.nextcloud.com/server/releases/nextcloud-20.0.10.zip
unzip nextcloud-20.0.10.zip
mv nextcloud /home/
```

Joplin [LNMP中安装NextCloud](:/8b3dbc07a1b34e36b608d54496999ff9)

### iredMail [x]
* *https://www.linuxidc.com/Linux/2015-06/118364.htm*

```bash
wget https://github.com/iredmail/iRedMail/archive/1.4.0.tar.gz
tar -xzvf 1.4.0.tar.gz
```

### Poste.io [x]
* *https://zhuanlan.zhihu.com/p/237419059*
* *https://poste.io/open*


1. tcp4 0.0.0.0:995/587: bind: address already in use.

* *https://www.faqforge.com/linux/how-to-enable-port-587-submission-in-postfix/*

systemctl stop dovecot #995

systemctl stop postfix #587

`netstat -ntlp | grep 985`

## Development

### phpmyadmin connect

http://你的域名/phpmyadmin/

### SSH connect

## CentOS

1. ssh-keygen -t rsa -b 4096
2. C:\Users\User\.ssh> cat ~/.ssh/id_rsa.pub | ssh root@0.0.0.0 -p 20000 "cat >> ~/.ssh/authorized_keys"
3. ssh -i ~/.ssh/id_rsa root@0.0.0.0 -p 20000

### Install
```bash
label linux
  menu label ^Install CentOS 7
  kernel vmlinuz
  append initrd=initrd.img inst.stage2=hd:LABEL=CentOS\x207\x20x86_64 quiet

```


### Development

#### Configuration on the new computer

##### Dependencies

```bash
rpm --import https://www.elrepo.org/RPM-GPG-KEY-elrepo.org
yum -y install yum-utils epel-release 
yum -y update
```

##### VPN 

* install 

```bash
# enter root mode and run
bash <(curl -L https://raw.githubusercontent.com/v2fly/fhs-install-v2ray/master/install-release.sh)

yum install privoxy -y
systemctl enable v2ray privoxy
cp config.json /usr/local/etc/v2ray/config.json
vim /etc/privoxy/config
# confing file
# -> go config.txt:1336
#        forward-socks5t   /               127.0.0.1:9050 .
#  to
forward-socks5t   /               127.0.0.1:10808 .

# -> go config.txt:783
listen-address  127.0.0.1:8118
# to
listen-address  127.0.0.1:8118 # or others 

systemctl start v2ray privoxy
systemctl status v2ray privoxy

# export
export http_proxy=http://127.0.0.1:8118
export https_proxy=http://127.0.0.1:8118
```

* remove

```bash
systemctl disable v2ray.service --now

# rm -r /usr/bin/v2ray/
# rm /etc/systemd/system/v2ray.service
# rm /lib/systemd/system/v2ray.service
# rm /etc/init.d/v2ray

```

## Ubuntu

### VirtualBox Ubuntu Settings

#### Password
*https://superuser.com/questions/221340/set-password-for-root-on-virtualbox-ubuntu*

Ubuntu uses sudo by default. If you preface your command with "sudo" it prompts for your user password and then runs it as root. To get a root session use:

`sudo -i`

To enable the root account, open a terminal and run the following to set a root password:

`sudo passwd root`

#### Network of Bridge
ISSUS

## Command

```bash
1.Text Edit: gedit
2.Environment Variable:
	CurrentUser: vim ~/.bashrc
	AllUser:vim /etc/profile
3.Normal User Add sudo group function
	/etc/sudoers  chmod u+w sudpers
	username ALL=(ALL)ALL
4.Unlock file
	sudo chown username caffe/ -R username is you username,caffe is will unlock file
5.Wifi network hardwere off
	sudo nano /etc/modprobe.d/blacklist.conf
	LastRow add:  blacklist acer-wmi
6.add on-computer progammer
	gnome-session-properties
7.Start and off Network card: sudo ifconfig xxx down/up

```

# Mac OS

# Errors

## Linux

1. rm: cannot remove `.user.ini‘: Operation not permitted in Linux delete file in rm-rf

* *https://www.programmersought.com/article/80925108661/*

`chattr -i .user.ini `

2. MYSQL Error – Server Quit Without Updating PID 

cp /etc/my.cnf.2021.xxx /etc/my.cnf

because we upgraded mysql and destroy the config of lnmp mysql.

# WSL

## XServer
* *https://www.makeuseof.com/tag/linux-desktop-windows-subsystem/*
* *https://github.com/microsoft/WSL/issues/4106*
* *https://www.illuminiastudios.com/dev-diaries/ssh-on-windows-subsystem-for-linux/*

* *https://www.zdnet.com/article/linux-graphical-apps-coming-to-windows-subsystem-for-linux/*

* Configuration

```bash
# install ubuntu desktop
sudo apt install lxde

export DISPLAY="192.168.88.102:0"
export LIBGL_ALWAYS_INDIRECT=1

# run x server
sudo startlxde
```

* SSH on Windows Subsystem for Linux (WSL)

```bash
sudo apt install openssh-server
sudo nano /etc/ssh/sshd_config
# Change PasswordAuthentication to yes

sudo service ssh restart
```

* WSL2 Authorization required, but no authorization protocol specified

```bash
vcxsrv -ac
```

## Config

### Open WindowsApps
* *https://www.maketecheasier.com/access-windowsapps-folder-windows-10/*

### Command Lines
* WINDOWS
  * `wsl --list -v`

* WSL UBUNTU
  * Upgrade
    * `sudo apt-get update && sudo apt-get upgrade -y`

  * Install gcc-9
    1. way 1
    ```bash
    sudo add-apt-repository ppa:ubuntu-toolchain-r/test
    sudo apt update
    sudo apt install gcc-9
    ```

    2. way 2

    ```bash
    sudo apt install software-properties-common
    sudo add-apt-repository ppa:ubuntu-toolchain-r/test
    sudo apt install gcc-7 g++-7 gcc-8 g++-8 gcc-9 g++-9
    sudo update-alternatives --install /usr/bin/gcc gcc /usr/bin/gcc-9 90 --slave /usr/bin/g++ g++ /usr/bin/g++-9 --slave /usr/bin/gcov gcov /usr/bin/gcov-9
    sudo update-alternatives --install /usr/bin/gcc gcc /usr/bin/gcc-8 80 --slave /usr/bin/g++ g++ /usr/bin/g++-8 --slave /usr/bin/gcov gcov /usr/bin/gcov-8
    sudo update-alternatives --install /usr/bin/gcc gcc /usr/bin/gcc-7 70 --slave /usr/bin/g++ g++ /usr/bin/g++-7 --slave /usr/bin/gcov gcov /usr/bin/gcov-7
    sudo update-alternatives --config gcc

    sudo ln -s /usr/bin/gcc /usr/bin/cc
    ```
  * Run
    * `wsl --set-default Ubuntu-20.04`
    * `wsl`

  * Run as root
    * `wsl -u root -d Ubuntu-20.04`
    * `passwd root`

### Proxy
* *https://blog.csdn.net/duapple/article/details/106299011*

```bash
sudo apt install proxychains
sudo vim /etc/proxychains.conf
# Edit the last line to your socket5 proxy config, e.g. socket5 192.168.88.101 10808
proxychains curl google.com

sudo proxychains apt install g++
```

export http_proxy=http://localhost:10809
export https_proxy=http://localhost:10809

#### Error

### proxychains LD_PRELOAD cannot be preloaded
* *https://askubuntu.com/questions/293649/proxychains-ld-preload-cannot-be-preloaded*

```bash
find /usr/lib/ -name libproxychains.so.3 -print

sudo nano /usr/bin/proxychains
# added
export LD_PRELOAD=/usr/lib/x86_64-linux-gnu/libproxychains.so.3

```

### Connection
* *https://www.jianshu.com/p/d80fd2e385f0*
* *https://jeetblogs.org/post/sshing-into-a-windows-wsl-linux-subsystem/*
* *https://www.hanselman.com/blog/how-to-ssh-into-wsl2-on-windows-10-from-an-external-machine*

1. 配置 WSL SSH

```bash
#设置root的口令（密码），用作后续登陆使用
sudo passwd root

#安装openssh-server（ubuntu自带已安装，但是我使用有问题，没找到原因）
sudo apt remove openssh-server
sudo apt install openssh-client openssh-server

#备份原始的sshd_config
sudo cp /etc/ssh/sshd_config /etc/ssh/sshd_config.bak
sudo cp /etc/ssh/ssh_config /etc/ssh/ssh_config.bak

#使用vim进行编辑，按i进入insert模式
sudo vim /etc/ssh/sshd_config

在vim中找到对应项并修改，ESC，输入`wq`保存退出：
Port 2222
ListenAddress 0.0.0.0        # 如果需要指定监听的IP则去除最左侧的井号，并配置对应IP，默认即监听PC所有IP
PermitRootLogin no           # 如果你需要用 root 直接登录系统则此处改为 yes
PasswordAuthentication yes    # 将 no 改为 yes 表示使用帐号密码方式登录

#使用vim进行编辑，按i进入insert模式
sudo vim /etc/ssh/sshd_config

#在vim中找到对应项并修改，ESC，输入`wq`保存退出：
Port 2222
ListenAddress 0.0.0.0        # 如果需要指定监听的IP则去除最左侧的井号，并配置对应IP，默认即监听PC所有IP

#启动ssh，查看status
sudo service ssh start             #启动SSH服务
sudo service ssh status            #检查状态
sudo systemctl enable ssh          #开机自动启动ssh命令，我好想失效了
```

2. Windows 添加入站规则
* Open up port 2222 in the windows firewall:
* In the Windows Start menu, type “WF.msc”.
* In the “Windows Firewall with Advanced Security” section, click on “Inbound Rules”.
* Add a new rule for TCP 2222 and allow the connection:
  * “Actions” > “New Rule …”
  * “What type of rule would you like to create?”: “Port“
  * “Does this rule apply to TCP or UDP? “TCP“
  * “Does this rule apply to all local ports or specific local ports”: “Specific local ports: 2222“
  * “What action should be taken when a connection matches the specified conditions”: “Allow the connection“
  * “When does this rule apply” (check all boxes)

## Command

```bash
# Check all services status
service --status-all

# Start a server
sudo service dbus start

# wsl utilities
wslview index.html

# list the packages we installed
apt list --installed | grep nvidia
```

## NVIDIA on WSL2

* [1] Getting started with CUDA on Ubuntu on WSL 2 https://ubuntu.com/blog/getting-started-with-cuda-on-ubuntu-on-wsl-2


# ReactOS

* [1] https://github.com/reactos/reactos
* [2] Cygwin系列（三）：盘点与Cygwin相似和相反的项目 https://zhuanlan.zhihu.com/p/57774611

项目成员在1998年重新发起了一个项目，就是ReactOS，目标是从零实现一个开源版的Windows NT。为了保证ReactOS完全自由开源不受污染，项目组还专门花了几年时间审查代码库，剔除逆向Windows而来的代码。历经20年ReactOS项目依旧活跃，2018年发布了0.4.10版，高度兼容Windows的硬件驱动、应用程序。

ReactOS的内核独立于UNIX/Linux/Windows的任何API，完全是凭借对Windows“连蒙带猜”的理解从零开始写，并基于这个内核实现Win32子系统，Win32子系统、子系统之上的函数库和服务参考/使用了很多Wine项目的源代码。

ReactOS为在其他系统（如UNIX/Linux）上构建Windows兼容环境提供了宝贵的技术路线和经验 [2]

# Fuchsia

## Repoitory Address
`git clone https://fuchsia.googlesource.com/fuchsia`

## Development
https://fuchsia.dev/fuchsia-src/development


### Test

#### CentOS

* Source Code
  * `https://fuchsia.googlesource.com/fuchsia/+/refs/heads/master`

* Create a bootable Fuchsia image
  * `https://fuchsia.dev/fuchsia-src/development/hardware/installer`

* Build

```bash
# https://fuchsia.dev/fuchsia-src/get-started/get_fuchsia_source

export http_proxy=http://127.0.0.1:8118
export https_proxy=http://127.0.0.1:8118

yum install -y build-essential curl git python unzip
yum groupinstall -y 'Development Tools'

curl -s "https://fuchsia.googlesource.com/fuchsia/+/HEAD/scripts/bootstrap?format=TEXT" | base64 --decode | bash
```