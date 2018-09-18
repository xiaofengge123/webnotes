## CentOS

:::tip

**最后更新时间：2018年09月10日**

**字数：14784**

:::

## 学习资源
* [CentOS官网](https://www.centos.org/)
* [Linux教程](http://www.runoob.com/linux/linux-tutorial.html)
* [CentOS百度百科](https://baike.baidu.com/item/centos/498948?fr=aladdin)
* [MongoDB教程](http://www.runoob.com/mongodb/mongodb-tutorial.html)

## CentOS 介绍

* Community Enterprise Operating System，中文意思是：社区企业操作系统
* Linux发行版之一，它是来自于Red Hat Enterprise Linux依照[开放源代码](https://baike.baidu.com/item/%E5%BC%80%E6%94%BE%E6%BA%90%E4%BB%A3%E7%A0%81/114160)规定释出的源代码所编译而成

## CentOS 常见命令

### SSH

```bash
ssh root@服务器ip
```
* root是用户名
* 第一次登陆输入yes
* 输入密码：**密码输入后是隐藏的，直接输入完成后回车即可**

### uname

uname可显示电脑以及操作系统的相关信息

#### 语法

```bash
uname [-amnrsv][--help][--version]
```

#### 参数说明

- -a或--all 　显示全部的信息。
- -m或--machine 　显示电脑类型。
- -n或-nodename 　显示在网络上的主机名称。
- -r或--release 　显示操作系统的发行编号。
- -s或--sysname 　显示操作系统名称。
- -v 　显示操作系统的版本。
- --help 　显示帮助。
- --version 　显示版本信息。

### whois

whois指令会去查找并显示指定帐号的用户相关信息，因为它是到Network Solutions的WHOIS数据库去查找，所以该帐号名称必须在上面注册方能寻获，且名称没有大小写的差别

#### 语法

```bash
whois [帐号名称]
```

#### 参数

* . 强制执行“仅按名称”搜索，查找Name参数指定的名称。 
* ! 显示在 Name 参数中指定的别名或句柄标识的帮助信息。 

* 星号 显示一个组或组织的完整会员资格列表。如果有很多成员，这可能要花费一些时间。 
* ? 向 ARPANET 主机请求帮助。 
* -h HostName 指定一个备用的主机名。在 ARPANET 上的缺省主机名是 internic.net。 
* 通过指定 -h HostName 标志，可以联系其他主要的 ARPANET 用户名数据库（nic.ddn.mil）。 
* -p 连接到指定端口

### ls

用于显示指定工作目录下之内容（列出目前工作目录所含之文件及子目录)

#### 语法

```bash
 ls [-alrtAFR] [name...]
```

#### 参数

- -a 显示所有文件及目录 (ls内定将文件名或目录名称开头为"."的视为隐藏档，不会列出)
- -l 除文件名称外，亦将文件型态、权限、拥有者、文件大小等资讯详细列出
- -r 将文件以相反次序显示(原定依英文字母次序)
- -t 将文件依建立时间之先后次序列出
- -A 同 -a ，但不列出 "." (目前目录) 及 ".." (父目录)
- -F 在列出的文件名称后加一符号；例如可执行档则加 "*", 目录则加 "/"
- -R 若目录下有文件，则以下之文件亦皆依序列出

### cd

用于切换当前工作目录至 dirName(目录参数)

#### 语法

```bash
cd [dirName]
```

#### 参数

- dirName：要切换的目标目录。

### touch

用于修改文件或者目录的时间属性，包括存取时间和更改时间。若文件不存在，系统会建立一个新的文件

#### 语法

```bash
touch [-acfm][-d<日期时间>][-r<参考文件或目录>] [-t<日期时间>][--help][--version][文件或目录…]
```

#### 参数

- a 改变档案的读取时间记录。
- m 改变档案的修改时间记录。
- c 假如目的档案不存在，不会建立新的档案。与 --no-create 的效果一样。
- f 不使用，是为了与其他 unix 系统的相容性而保留。
- r 使用参考档的时间记录，与 --file 的效果一样。
- d 设定时间与日期，可以使用各种不同的格式。
- t 设定档案的时间记录，格式与 date 指令相同。
- --no-create 不会建立新档案。
- --help 列出指令格式。
- --version 列出版本讯息。

### mkdir

用于建立名称为 dirName 之子目录

#### 语法

```
mkdir [-p] dirName
```

#### 参数

- -p 确保目录名称存在，不存在的就建一个。

### vim

使用vim打开或创建一个文档

#### 语法

vim 文件路径

###  sudo

以系统管理者的身份执行指令，也就是说，经由 sudo 所执行的指令就好像是 root 亲自执行

#### 语法

```bash
sudo 参数
```

#### 参数

- -V 显示版本编号
- -h 会显示版本编号及指令的使用方式说明
- -l 显示出自己（执行 sudo 的使用者）的权限
- -v 因为 sudo 在第一次执行时或是在 N 分钟内没有执行（N 预设为五）会问密码，这个参数是重新做一次确认，如果超过 N 分钟，也会问密码
- -k 将会强迫使用者在下一次执行 sudo 时问密码（不论有没有超过 N 分钟）
- -b 将要执行的指令放在背景执行
- -p prompt 可以更改问密码的提示语，其中 %u 会代换为使用者的帐号名称， %h 会显示主机名称
- -u username/#uid 不加此参数，代表要以 root 的身份执行指令，而加了此参数，可以以 username 的身份执行指令（#uid 为该 username 的使用者号码）
- -s 执行环境变数中的 SHELL 所指定的 shell ，或是 /etc/passwd 里所指定的 shell
- -H 将环境变数中的 HOME （家目录）指定为要变更身份的使用者家目录（如不加 -u 参数就是系统管理者 root ）
- command 要以系统管理者身份（或以 -u 更改为其他人）执行的指令

### su

用于变更为其他使用者的身份，除 root 外，需要键入该使用者的密码

#### 语法

```bash
su [-fmp] [-c command] [-s shell] [--help] [--version] [-] [USER [ARG]]
```

#### 参数

- -f 或 --fast 不必读启动档（如 csh.cshrc 等），仅用于 csh 或 tcsh
- -m -p 或 --preserve-environment 执行 su 时不改变环境变数
- -c command 或 --command=command 变更为帐号为 USER 的使用者并执行指令（command）后再变回原来使用者
- -s shell 或 --shell=shell 指定要执行的 shell （bash csh tcsh 等），预设值为 /etc/passwd 内的该使用者（USER） shell
- --help 显示说明文件
- --version 显示版本资讯
- \- -l 或 --login 这个参数加了之后，就好像是重新 login 为该使用者一样，大部份环境变数（HOME SHELL USER等等）都是以该使用者（USER）为主，并且工作目录也会改变，如果没有指定 USER ，内定是 root
- USER 欲变更的使用者帐号
- ARG 传入新的 shell 参数

### whoami

显示当前用户

### whereis

* 用于查找文件
* 该指令会在特定目录中查找符合条件的文件。这些文件应属于原始代码、二进制文件，或是帮助文件。
* 该指令只能用于查找二进制文件、源代码文件和man手册页，一般文件的定位需使用locate命令。

#### 语法

```bash
whereis [-bfmsu][-B <目录>...][-M <目录>...][-S <目录>...][文件...]
```

#### 参数

-b 　只查找二进制文件。

-B<目录> 　只在设置的目录下查找二进制文件。

-f 　不显示文件名前的路径名称。

-m 　只查找说明文件。

-M<目录> 　只在设置的目录下查找说明文件。

-s 　只查找原始代码文件。

-S<目录> 　只在设置的目录下查找原始代码文件。

-u 　查找不包含指定类型的文件。

### mv

用来为文件或目录改名、或将文件或目录移入其它位置。

#### 语法

```bash
mv [options] source dest
mv [options] source... directory
```

#### 参数

- -i: 若指定目录已有同名文件，则先询问是否覆盖旧文件;
- -f: 在mv操作要覆盖某已有的目标文件时不给任何指示;

| 命令格式         | 运行结果                                                     |
| ---------------- | ------------------------------------------------------------ |
| mv 文件名 文件名 | 将源文件名改为目标文件名                                     |
| mv 文件名 目录名 | 将文件移动到目标目录                                         |
| mv 目录名 目录名 | 目标目录已存在，将源目录 移动到目标目录；目标 目录不存在则改名 |
| mv 目录名 文件名 | 出错                                                         |

### scp

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

## Node.js

### nvm

使用nvm管理和安装nodejs

::: tip
按照下面的命令一个一个的走下就好了
:::

### 下载安装nvm

```bash
curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.33.11/install.sh | bash
```

* nvm官网：[nvm官网](https://github.com/creationix/nvm)

* 下载完成后加入系统环境，否则有时候会出现关掉终端后，node命令无法识别

```bash
source   ~/.bashrc
```

### 安装需要的node版本

````bash
nvm install  v8.11.3

// 或者安装node的最新稳定版
nvm install stable
````

### 查看已经安装的nodejs版本

```bash
nvm list
```

### 根据版本号切换node版本

```bash
nvm use v8.11.3
```

### 设置默认的node版本

```bash
nvm alias default v8.11.3
```
#### 查看nodejs版本

```bash
node -v
npm -v
```
都能正常显示即可

### 切换淘宝镜像源

* 临时使用

```bash
npm --registry https://registry.npm.taobao.org
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

### 通过`cnpm`使用

```bash
npm install -g cnpm --registry=https://registry.npm.taobao.org
```

* 使用示例 

```bash
cnpm install express
```

## nginx部署

### 安装nginx的依赖

```bash
yum -y install gcc-c++  
yum -y install pcre pcre-devel  
yum -y install zlib zlib-devel  
yum -y install openssl openssl--devel
```

###下载

```bash
wget -c https://nginx.org/download/nginx-1.14.0.tar.gz
```

### 解压

```bash
tar -zxvf nginx-1.14.0.tar.gz
cd nginx-1.14.0
```

### 使用默认配置

```bash
./configure
```

### 编译安装

```bash
make
make install
```

### 找到nginx路径

```bash
whereis nginx
结果：/usr/local/nginx
```

### 启动

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
### 查看nginx进程

```bash
ps aux|grep nginx
```

### 重启nginx

```bash
如果nginx不是全局命令，那么进去sbin目录用./nginx 运行命令
先停止再启动（推荐）：
对 nginx 进行重启相当于先停止再启动，即先执行停止命令再执行启动命令。如下：

cd /usr/local/nginx/sbin/
./nginx -s quit
./nginx
```

### 重新加载配置文件

```bash
1.当 ngin x的配置文件 nginx.conf 修改后，要想让配置生效需要重启 nginx
2.使用-s reload不用先停止nginx再启动 nginx 即可将配置信息在 nginx 中生效，命令如下：

./nginx -s reload
```
### 配置文件

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

## MongoDB

### mongodb介绍

* MongoDB 是一个基于分布式文件存储的数据库
* 由 C++ 语言编写，旨在为 WEB 应用提供可扩展的高性能数据存储解决方案。
* MongoDB 是一个介于关系数据库和非关系数据库之间的产品，是非关系数据库当中功能最丰富，最像关系数据库的

### MongoDB安装（CentOS）

### 相关信息

* 系统：CentOS 7.4
* MongoDB版本：3.4

####  配置yum源

```bash
// 打开或者创建文件
vim /etc/yum.repos.d/mongodb-org-3.4.repo

// 添加一下内容
[mongodb-org-3.4]  
name=MongoDB Repository  
baseurl=https://repo.mongodb.org/yum/redhat/$releasever/mongodb-org/3.4/x86_64/  
gpgcheck=1  
enabled=1  
gpgkey=https://www.mongodb.org/static/pgp/server-3.4.asc

这里可以修改 gpgcheck=0, 省去gpg验证

安装之前先更新所有包 ：yum update （可选操作）
```

### 安装MongoDB

```bash
yum -y install mongodb-org
```

### 查看mongo安装位置

```bash
whereis mongod
```

### 配置文件

```bash
/etc/mongod.conf
```

### 开启和停止服务

```bash
启动mongodb ：systemctl start mongod.service
停止mongodb ：systemctl stop mongod.service
重启mongodb ：systemctl restart mongod.service
```

### 设置开机启动

```bash
systemctl enable mongod.service
```

### 启动mongodb shell

```bash
mongo
```

### 创建数据库

```bash
use DATABASE_NAME
```

如果数据库不存在，则创建数据库，否则切换到指定数据库。

#### 注意事项

* **show dbs**查看数据库，会费想爱你数据库没有
* 要显示它，我们需要向数据库插入一些数据，才会被显示（请看后面插入数据）

### 查看数据库

```bash
show dbs
```

### 删除数据库

```bash
db.dropDatabase()
```

* 删除当前数据库，默认为 test，你可以使用 db 命令查看当前数据库名。
* 先use切换数据库，再删除数据库

### 创建集合

```bash
db.createCollection(name, options)
```

#### 参数说明

- name: 要创建的集合名称
- options: 可选参数, 指定有关内存大小及索引的选项

* options 可以是如下参数

| 字段        | 类型 | 描述                                                         |
| ----------- | ---- | ------------------------------------------------------------ |
| capped      | 布尔 | （可选）如果为 true，则创建固定集合。固定集合是指有着固定大小的集合，当达到最大值时，它会自动覆盖最早的文档。 **当该值为 true 时，必须指定 size 参数。** |
| autoIndexId | 布尔 | （可选）如为 true，自动在 _id 字段创建索引。默认为 false。   |
| size        | 数值 | （可选）为固定集合指定一个最大值（以字节计）。 **如果 capped 为 true，也需要指定该字段。** |
| max         | 数值 | （可选）指定固定集合中包含文档的最大数量。                   |

在插入文档时，MongoDB 首先检查固定集合的 size 字段，然后检查 max 字段。

```bash
// 使用test数据库，创建collection集合，查看集合
> use test
switched to db test
> db.createCollection("collection")
{ "ok" : 1 }
>
> show collections
collection
```

### 查看集合

```bash
show collections
```

###删除集合

```
db.collection.drop()
```

### 插入文档

```bash
db.COLLECTION_NAME.insert(document)
```

```bash
// 插入在col中一条数据
>db.collection.insert({title: 'MongoDB 教程', 
    description: 'MongoDB 是一个Nosql数据库',
    by: 'mongodb',
    url: 'http://www.xuefeng666.com',
    tags: ['mongodb', 'database', 'NoSQL'],
    likes: 100
})
```

* 如果collection集合不在该数据库中， MongoDB 会自动创建该集合并插入文档。

### 查询文档数据

```bash
db.collection.find(query, projection)
```

- **query** ：可选，使用查询操作符指定查询条件
- **projection** ：可选，使用投影操作符指定返回的键。查询时返回文档中所有键值， 只需省略该参数即可（默认省略）。

如果你需要以易读的方式来读取数据，可以使用 pretty() 方法

```
>db.collection.find().pretty()
```

```bash
> db.collection.find().pretty()
{
        "_id" : ObjectId("5b961b4aee3bcc73f0550b15"),
        "title" : "MongoDB 教程",
        "description" : "MongoDB 是一个Nosql数据库",
        "by" : "mongodb",
        "url" : "http://www.xuefeng666.com",
        "tags" : [
                "mongodb",
                "database",
                "NoSQL"
        ],
        "likes" : 100
}
```

* 查询条件query是一个对象，比如：{"title":"MongoDB 教程"}

### 更新文档

```bash
db.collection.update(
   <query>,
   <update>,
   {
     upsert: <boolean>,
     multi: <boolean>,
     writeConcern: <document>
   }
)
```

- **query** : update的查询条件，类似sql update查询内where后面的。
- **update** : update的对象和一些更新的操作符（如$,$inc...）等，也可以理解为sql update查询内set后面的
- **upsert** : 可选，这个参数的意思是，如果不存在update的记录，是否插入objNew,true为插入，默认是false，不插入。
- **multi** : 可选，mongodb 默认是false,只更新找到的第一条记录，如果这个参数为true,就把按条件查出来多条记录全部更新。
- **writeConcern** :可选，抛出异常的级别。

```bash
// 接着我们通过 update() 方法来更新标题(title):
>db.col.update({'title':'MongoDB 教程'},{$set:{'title':'MongoDB'}})

// 查询
> db.col.find().pretty()
{
        "_id" : ObjectId("56064f89ade2f21f36b03136"),
        "title" : "MongoDB",
        "description" : "MongoDB 是一个Nosql数据库",
        "by" : "mongodb",
        "url" : "http://www.xuefeng666.com",
        "tags" : [
                "mongodb",
                "database",
                "NoSQL"
        ],
        "likes" : 100
}
>
```

* 以上语句只会修改第一条发现的文档，如果你要修改多条相同的文档，则需要设置 multi 参数为 true。

```bash
>db.col.update({'title':'MongoDB 教程'},{$set:{'title':'MongoDB'}},{multi:true})
```

