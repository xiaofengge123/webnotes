
# CentOS
## SSH连接
```
ssh root@服务器ip
```
* root是用户名
* 第一次登陆输入yes
* 输入密码：**密码输入后是隐藏的，直接输入完成后回车即可**

## scp 命令

* 什么是scp
    * secure copy
    * 用于在Linux下进行远程拷贝文件，scp传输是加密的
    * 需要输入密码
* 优点
    * 远程服务器既不需要配置ftp服务器
    * 不需要开启web服务器
    * 也不需要开启共享

* 命令
```bash
// 上传文件到远程服务器
scp -r 本地需要上传的文件的路径 root@服务器ip:服务器文件路径

// 下载远程服务器文件到本地
scp -r root@服务器ip:服务器文件路径 本地文件路径
```

::: tip
scp上传文件到服务器是在我们本地电脑运行命令，不是登录服务器
:::


## Node.js部署
**使用nvm管理和安装nodejs**

::: tip
按照下面的命令一个一个的走下就好了
:::

* 下载安装nvm

```bash
curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.33.11/install.sh | bash
```

* nvm官网：[nvm官网](https://github.com/creationix/nvm)

* 下载完成后加入系统环境，否则有时候会出现关掉终端后，node命令无法识别

```bash
source   ~/.bashrc
```

* 安装需要的node版本

````bash
nvm install  v8.11.3

// 或者安装node的最新稳定版
nvm install stable
````

* 查看已经安装的nodejs版本

```bash
nvm list
```

* 根据版本号切换node版本

```bash
nvm use v8.11.3
```

* 设置默认的node版本

```bash
nvm alias default v8.11.3
```
* 查看nodejs版本
```bash
node -v
npm -v
```
都能正常显示即可

## 切换淘宝镜像源

* 临时使用

```bash
npm --registry https://registry.npm.taobao.org install express
```

* 持久使用

```bash
npm config set registry https://registry.npm.taobao.org
```

* 配置后可通过下面方式来验证是否成功 
```bash
npm config get registry
```
找到`taobao`关键字即可

* 通过`cnpm`使用

```bash
npm install -g cnpm --registry=https://registry.npm.taobao.org
```

* 使用示例 

```bash
cnpm install express
```

## nginx部署

* 安装nginx的依赖

```bash
yum install gcc-c++  
yum install pcre pcre-devel  
yum install zlib zlib-devel  
yum install openssl openssl--devel
```

* 下载

```bash
wget -c https://nginx.org/download/nginx-1.14.0.tar.gz
```

* 解压

```bash
tar -zxvf nginx-1.14.0.tar.gz
cd nginx-1.14.0
```

* 使用默认配置

```bash
./configure
```

* 编译安装

```bash
make
make install
```

* 找到nginx路径

```bash
whereis nginx
结果：/usr/local/nginx
```

* 启动

```bash
cd /usr/local/nginx/sbin/
./nginx :启动
./nginx -s stop：此方式相当于先查出nginx进程id再使用kill命令强制杀掉进程
./nginx -s quit：此方式停止步骤是待nginx进程处理任务完毕进行停止。
./nginx -s reload：重启
```
::: tip
在浏览器中输入启动nginx的服务器的ip地址即可
:::
* 查看nginx进程

```bash
ps aux|grep nginx
```

* 重启nginx

```bash
如果nginx不是全局命令，那么进去sbin目录用./nginx 运行命令
先停止再启动（推荐）：
对 nginx 进行重启相当于先停止再启动，即先执行停止命令再执行启动命令。如下：

cd /usr/local/nginx/sbin/
./nginx -s quit
./nginx
```

* 重新加载配置文件

```bash
1.当 ngin x的配置文件 nginx.conf 修改后，要想让配置生效需要重启 nginx
2.使用-s reload不用先停止nginx再启动 nginx 即可将配置信息在 nginx 中生效，命令如下：

./nginx -s reload
```
* 配置文件
```bash
vim /usr/local/nginx/conf/nginx.conf
```
* user：
    * 定义nginx运行的用户和用户组，这个需要注意去设置
    * 默认是注释的，**有些网站目录是需要访问权限的**
* worker_processes：nginx进程数，建议设置为等于CPU总核心数
* server
    * listen：监听端口
    * root：根目录
    * location
