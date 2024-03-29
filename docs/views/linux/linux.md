## Linux

### linux入门：

关机操作：`shutdown -h now`（正常关机 root用户可以执行） 或 `halt`（关闭内存）、`init 0`(有局限性)

### Linux系统的文件与文件夹

**什么是文件？**

一般是一个独立的东西，可以通过一些特定的工具去打开，并且不能包含除了文字以外的东西

**什么是文件夹？**

文件夹可以在其中包含其他东西

日常运维工作中，一半以上的工作或精力都是在对文件或者文件夹的操作

linux本身也是一个基于文件形式表示的操作系统
**Linux一切皆文件:**

- 在windows是文件的，Linux下同样是文件
- 在windows下不是文件的，Linux也是文件的形式存储的

#### 对文件的操作

- 创建文件
- 编辑文件
- 保存文件
- 关闭文件
- 重命名文件
- 删除文件
- 恢复文件

#### Linux文件目录结构

- bin：改目录下存储的都是一些可以被运行的二进制文件
- dev:该目录中主要存放的是一些外接存储设备，例如：
  u盘，移动硬盘、光盘等，但是这些外接设备是不能被直接使用的，如果想使用那就需要去分配盘符即挂载
- etc：该目录主要存储所有配置文件，比如数据库配置网站项目配置
- home:该目录，除了root用户以外的其他用户目录，类似于windows下的user目录
- proc:全称process，该目录下存储的是所有进程
- root:该目录是root用户独有的家目录与home一样
- sbin:该目录也是存储一些可以被执行的二进制文件，但是必须要有supper权限的用户才可执行
- tmp:该目录用来存储当系统运行时产生的一些临时文件，系统用完会自动删除
- usr:存放的是用户自己安装的软件类似windows下的program files
- var:存放的是程序/系统的日志文件
- mnt:当外接设备需要挂载时，就需要被挂载到mnt目录下

### Linux下的基本指令

#### 什么是指令？

在Linux终端（命令行）中输入的内容就成为指令

#### 一个完整的指令的标准格式：linux的通用指令

- 语法：`指令主体 [选项] [操作对象]`
- 一个指令只可以包含一个指令主体，一个指令可以包含多个选项

### 指令

 - **ls**:list 列表清单，列出当前工作目录下的所有目录和文件的名称
 - **ls 路径**：列出指定路径下的所有文件和文件夹的名称

 > 关于路径（重要）：
 >
 > - 路径分为两种：相对路径，绝对路径
 > - 相对路径：当前工作路径就是参照物，相对路径是相对于参照物的
 > - 相对路径的写法：在相对路径中通常会用到两个符号：`./`表示当前目录下,`../`表示上上一级目录
 > - 绝对路径：绝对路径不需要参照物，是直接从根“/”开始寻找的

 - **ls 选项 路径**：列出指定路径下的文件或文件夹的名称，并以指定的格式进行显示

```
 ls -l 路径
 ls -la 路径
 选项解释：
 -l :表示以详细列表的形式显示
 -la :表示显示所有的文件或文件夹（包含了隐藏文件/文件夹）
 列出文件/文件夹后：第一列 -开头则文档类型为文件
 d开头：文档类型为文件夹
```

- **ls -lh 路径**:列出指定路径下的所有文件个文件夹的名称，以列表的形式并且在显示文档大小的时候以可读性较高的形式显示

#### pwd指令

- pwd：print working directory打印当前工作目录

#### cd 命令

- 作用：change directory切换当前工作路劲
- 语法：cd 路径

 ```
 补充：在linux下有一个特殊的符号 ~
 表示当前用户的家目录。
 切换的方式：cd ~
 ```

#### mkdir指令

- 含义：make directory创建目录
- 语法：mkdir 路径

 ```
 注意：ls列出的结果颜色说明
 蓝色表示文件夹
 黑色的表示文件
 绿色的表示其权限为拥有所有权限
 ```

- 语法2：mkdir -p
- 作用：可以一次创建很多层目录例如：/a/b/c/d

- 语法3：mkdir 路径1 路径2 路径3
- 作用：同时创建多个目录

#### touch指令

- 作用：创建文件
- 语法：touch 文件路径
- 描述：路径可以是直接的文件名也可以是路径，也可以同时创建多个文件

#### cp指令

- 作用：copy复制文件/文件夹到指定位置
- 语法：cp 被复制的文档路径（源） 文档复制到的路径（目的）
- 描述：linux在文件复制的过程中是可以对目的文件进行重命名的但是如果没有特殊需求一般不这么做
- 注意：使用cp命令进行文件夹复制的时候需要添加选项 -r【表示递归复制】，否则目录会被忽略 

#### mv指令

- 作用：movey移动文档（文件或文件夹）到新的位置与剪切的作用一样
- 语法：mv 源路径 目的路径

```
案例：使用mv命令移动文件（使用后原始文件是不在原来位置的）
mv ./hello ./桌面/
```

- 语法：mv ./hello ./hi
- 作用：重命名

#### rm指令

- 语法：rm 选项 需要移除的文档路径
- 选项：-f【force强制删除】  -r【recursion递归】
- 作用：删除一个或多个文档

- 语法：rm 选项 路径 路径
- 作用同时删除多个文档，批量删除

```
案例：删除一个目录下有公共特性的文档，例如都已hello开头
rm -f hello*【起终*称之为通配符，表示任意字符】
```

#### vim指令

- 作用：作用是打开文件，文件可以存在也可以不存在。vim是一款文本编辑器类似于文本编辑器，但比之强大很多
- 语法：vim 文件路径
- 描述：打开以后如何退出：shift+: +输入q +回车 即可退出

#### 输出重定向

- 描述:一般命令的输出都是输出在终端中，有些时候需要将一些命令保存到文件中
  进行后续的分析/统计，则在这个时候需要使用输出重定向技术

```
>  表示覆盖输出，会覆盖原先的文件内容
>> 表示追加输出，会在原始内容的，末尾继续输出，即追加
```

- 语法：正常执行的命令 `>`或`>>` 文件路径
- 注意：文件可以不存在，它会自动新建
- 例如：`ls ./ > ./hello.txt`

#### cat指令

- 作用1：cat有 直接 打开一个文件的功能
- 语法：cat 文件路径

- 作用2：cat还可以将两个文件合并
- 语法： cat 待合并的文件路径1 待合并的文件路径2 > 合并之后的文件路径

### Linux进阶指令

#### df指令

- 语法：df -h
- 作用：以较高可读性的形式展现磁盘空间大小

#### free指令

- 作用：表示查看内存使用情况
- 语法：free -m
- 描述：以兆为单位显示内存使用情况

#### head指令

- 作用：查看一个文件的前n行，如果不指定则默认显示文件的前10行
- 语法：head -n【表示数字】 文件路径

#### tail指令

- 作用1：显示文件末尾，-n如果不指定则显示文件后10行
- 语法: tail -n 文件路径

- 作用2：可以通过tail指令查看一个文件的动态变化（不能是用户手动输入的）该命令一般用于查询日志文件
- 语法：tail -f 文件路径

#### less指令

- 作用：查看文件，已较少的内容进行输出，按下辅助功能键（数字+回车从指定行显示、空格键翻页、上下方向键翻行）查看更多
- 语法：less 需要查看的文件路径
- 描述：在退出时只需要按下q键即可

#### wc指令

- 作用:统计文件内容信息（包括行数、单词数、字节数）
- 语法：wc -lwc 需要统计的文件路径
- 描述：l即lines表示行数、w即words表示字数、c即bytes表示字节数

#### date指令

- 作用：表示操作时间和日期的（读取、设置）shell脚本操作时会需要时间
- 语法1：date  输出形式：2018年8月13日 星期一
- 语法2：date +%F(等价于date "+%Y-%m-%d")
- 语法3：date "+%F %T"
- 语法4：date -d "1 day ago" +"%Y-%m-%d"获取之前或之后的某个时间（备份）

#### cal指令

- 语法1：cal (等价于cal -1)
- 作用1;直接输出当前月份的日历
- 语法2：cal -3
- 作用2：输出上一月本月下一月的日历
- 语法3：cal -y 年份
- 作用3：输出某一年的日历

#### 管道(重要)

- 管道符：|
- 作用：管道操作一般可以用于“过滤”，“特殊”,"扩展处理"
- 语法：管道不能单独使用，必须配合前面的一些指令来一起使用起作用主要是辅助

```
①案例：需要通过管道查询出根目录下包含"y"字母的文档名称
ls /|grep y
命令说明：以|管道符作为分界线，前面的命令是输出作为后面管道的输入【grep的作用：过滤】

②特殊用法案例：通过管道的操作方法来实现less的等价效果（了解）
cat 路径|less

③扩展处理：学习学过的命令来统计某个目录下的文档的总个数
ls /|wc -l
```

### Linux高级指令

#### hostname指令

- 作用:操作服务器的主机名（读取，设置）
- 语法1：hostname
- 含义：输出完成的主机名
- 语法2：hostname -f
- 含义：表示输出当前主机名中的FQDN（Full Qualified Domin name权限定域名）

#### id指令

- 作用：查看一个用户的基本信息（包含：用户id,用户组id,附加组id..）
  该指令如果不指定用户则显示当前用户
- 语法：id
- 含义：默认显示当前执行命令的用户的基本信息
- 语法2：id 用户名
- 含义：指定显示用户名的基本信息

#### whoami指令

- 作用：我是谁，显示当前登录的用户名,一般用于shell脚本，用于获取当前操作的用户名记录日志
- 语法：whoami

#### ps指令

- 作用：用于查看当前服务器的进程信息
- 语法：ps -ef【e等价于-A表示列出全部进程】【f表示显示全部的列也可称显示全字段】

```
字段含义：
uid:执行该进程的用户id
pid：进程id
ppid:该进程对应的父进程id,如果一个进程的父级进程找不到则进程称为僵尸进程
c：cpu的占用率，其形式是一个百分比
stime:start time进程的启动时间
tty:终端设备，发起该进程的设备是被符号如果是？则该进程不是由终端发起
time:进程执行时间
cmd；该进程对应的名称或路径
```

- 案例：在ps进程结果中过滤出想要查看的进程状态

> ps -ef|grep python


#### top指令

- 作用:查看服务器的进程占用的资源
- 语法：进入命令 top（动态显示）
  退出命令：q键
  	

```
打印结果说明：
pid；进程id
user:进程对应用户
pr:优先级
virt:虚拟内存
res:常驻内存
shr:共享内存，计算一个进程实际使用的内存=常驻内存（res）-共享内存shr
s:表示进行的状态（sleeping，其中s表示睡眠，r表示运行）
%cpu:表示cpud的占用百分比
%MEM：表示内存的占用百分比
TIME+：执行的时间
command：表示进程名称/路径
```

- 在运行top时可以按下方便的快捷键：
- M:表示将结果按照内存从高到低进行降序排列
- P:表示将结果按照cpu的占用率从高到低进行降序排列
- 1：当服务器拥有多个cpu时可以使用1快捷键来切换是否显示各个cpu的详细信息


#### du -sh指令

- 作用：查看目录的真实大小
- 选项含义：-s【summeries只显示汇总的大小】-h【表示以较高可读性的形式进行显示】
- 语法：du -sh 路径

#### find指令

- 作用：用于查找文件
- 参数：其参数有55个之多，常用-name【按名称搜素】-type【按类型搜索“-”表示文件搜索时用f来替换，“d”表示文件夹，d表示】
- 语法：find 路径范围即从那开始搜索 -name 选项值	（支持模糊搜索）

#### service指令

- 作用：用于控制一些软件的服务（服务的启动，停止，重启）
- 语法： service 服务名 start/stop/restart 
- 例如：需要启动本机安装的Apache（网站服务器软件）其服务名为：httpd

#### kill指令

- 作用：杀死进程	（当遇到一些僵尸进程时可以使用kill杀死进程）
- 语法：kill 进程pid (语法需要配合ps一起使用)
- 与kill命令作用相似但比kill更加好用的杀死进程的命令killall
- 语法：kill 进程名称

#### ifconfig指令

- 作用：用于操作网卡相关指令
- 语法：ifconfig (获取网卡信息)

#### reboot指令

- 作用：重新启动计算机
- 语法：reboot

#### uptime指令

- 作用：输出计算机的持续在线时间（计算机从开机到现在的运行时间）
- 语法：uptime

#### uname指令

- 作用：获取计算机操作系统相关信息
- 语法：uname(获取操作系统类型)
- 语法2:uname -a
- 含义:all表示获取全部的系统信息

#### netstat -tnlp指令

- 作用：查看网络连接状态
- 语法：netstat -tnlp

```
选项说明：
-t:表示只列出tcp协议的连接
-n:表示将地址从字母组合转化成ip地址，将协议转化成端口号
l:表示过滤只显示state（状态列）中其值为listen的连接数
-p:显示发起连接的进程的pid和进程名称
```

#### man指令

- 作用：manual手册（包含了linux中全部命令手册，英文）
- 语法格式：man 需要找的命令
- 描述：按q退出

#### 扩展快捷键

- 前：ctrl+u
- 后：ctrl+k

### Vim编辑器

#### vim三种模式

- vim中存在三种模式：命令模式、编辑模式、末行模式
- 命令模式：在该模式下不能对文件直接编辑，可以输入快捷键进行一些操作（删除行，复制行，移动光标，粘贴等）【打开文件之后默认进入的模式】
- 编辑模式：在该模式下可以对文件的内容进行编辑
- 末行模式：可以在末行输入命令来对文件进行操作（搜索、替换、保存、退出、撤销、高亮等等）

#### vim打开文件的方式（四种）

- 语法1：vim 文件路径  作用：打开指定的文件
- 语法2：vim +数字 文件路径	作用：打开指定文件并定位到指定行
- 语法3：vim +/关键词 文件路径	作用：打开指定文件并且高亮显示关键词
- 语法4：vim 文件路径1 文件路径2 文件路径3	 作用：同时打开多个文件
- 退出方式：输入：q 回车

#### 命令模式

注意：该模式是打开文件第一个看到的模式，打开文件即可进入

##### 光标的移动

- 光标移动到行首：按键：shift + 6 即^(T字母上方的6)
- 将光标移动到行尾：shift+4 即$(E上方的4)
- 光标移动到首行：按gg
- 光标移动到末行：按G
- 翻屏：按向上翻屏：按ctrl+b(before)或PageUp	向下翻屏：按ctrl+f(after)或PageDown
- 复制操作：

```
①复制光标所在行 按:yy 粘贴按：p
②光标所在行为准(包含当前行)向下复制指定的行数 按：数字+yy
③可视化复制 按ctrl+v然后移动方向键选中需要复制区块按yy复制p粘贴
```

- 剪切/删除

```
①剪切或删除光标所在行 按键:dd
②删除之后按p键即可实现剪切粘贴效果
注意：dd严格意义上是剪切，如果剪切后不粘贴就是删除
③剪切或者删除光标所在行但是光标不上移 按: D  (当前行会变成空白行)
```

- 撤销/恢复

```
撤销：按【:u回车】或者 直接按u 全称undo
恢复:ctrl+r		(取消之间的操作)
```

##### 扩展1：光标快速移动

①快速将光标移动到指定的行数 按键：数字G
②以当前光标为准向上/向下移动n行  按键：数字+方向键
③快速移动到指定的行数 按键：【:数字回车】

#### 模式之间的切换

- 正常模式<br>
  启动vim后默认处于正常模式。不论位于什么模式，按下`<Esc>`键(有时需要按两下）都会进入正常模式。

- 插入模式<br>
  在正常模式中按下i, I, a, A等键，会进入插入模式。现在只用记住按i键会进行插入模式。在插入模式中，击键时会写入相应的字符。

- 命令模式<br>
  在正常模式中，按下:（英文冒号）键，会进入命令模式。在命令模式中可以执行一些输入并执行一些vim或插件提供的指令，就像在shell里一样。这些指令包括设置环境、文件操作、调用某个功能等等。

- 常用的命令有：q（退出）、q!（强制退出）、w（保存）、wq（保存并退出）。
- 可视模式<br>
  在正常模式中按下v, V, `<Ctrl> v`，可以进入可视模式。可视模式中的操作有点像拿鼠标进行操作，选择文本的时候有一种鼠标选择的即视感，有时候会很方便。

#### 末行模式

进入方式：由命令模式按下":"进入
退出方式：
a.按下esc
b.按两下esc
c.删除命令和冒号

- 保存操作

> 保存输入: ":w"<br>
> 另存为：":w 路径"

- 退出（quit）<br>
  输入：":q"

- 保存并退出<br>
  输入：":wq"

- 强制退出不做保存(!)<br>
  输入：":q!"

- 调用外部命令<br>
  输入：":!外部命令"如":!ls"

- 搜索

> 输入"/关键词"
> 在搜索结果中切换上一个和下一个结果：上一个按N 下一个按n

- 替换

```
①":s/搜索的关键词/新内容" String replace替换光标所在行的第一处符合条件的内容
②":s/搜索的关键词/新内容/g" 替换光标所在行的全部符合条件的内容
③":%s/搜索的关键词/新内容"	替换全文每有行中的第一个符合条件的内容
④":%s/搜索内容/新内容/g"		替换全文中所有符合条件的内容

其中 %表示整个文档
g表示全局globe
```

- 显示行号

```
①输入：":set nu" (set number)
②如果向取消行号输入：":set nonu"
```

- 取消高亮

> 输入":nohl" (no high light)

- 扩展命令2

```
使用vim同时打开多个文件，在末行模式下切换文件
查看当前已经打开的文件的文件名称：":files"
在%a的位置有2中显示可能（%a中a=active表示当前正在打开的,也可能是#:表示上一个打开的文件）

切换文件的方式
①如果需要指定切换文件的名称，则输入：":open 已经打开的文件名"
②可以通过其他命令来切换上一个文件/下一个文件输入：":bn"切换到下一个（back next）	输入：":bp"切换到上一个文件（back previous）
```

#### 编辑模式

进入编辑模式：按下"i"（insert在光标所在字符前开始插入）或"a"（after在光标所在字符后面开始插入）
删除一行开始插入按下"S"

#### 实用功能

1.代码着色

- 如何控制着色显示否：
- 显示：输入:":sysntax on"（syntax语法）
- 关闭：输入:":sysntax off"

2.vim简易计算器

- 当我们在编辑文件时突然需要使用计算器去计算一些公式时，需要用到vim提供的计算器
  在文件中，①进入编辑模式，②按下ctrl+r，③输入=号，输入需要计算的内容回车

#### 扩展3

1.vim的配置
vim是一款编辑器，编辑器也是有配置文件的
vim配置有三种情况

- a.在文件打开时在末行模式下输入的配置（临时的）
- b.个人配置文件（~/.vimrc）
- c.全局配置文件(vim自带,/etc/vimrc)
  ①新建好个人的配置文件之后进行编辑
  ②在配置文件中进行配置，比如设置行号：set nu
  配置好之后就可以永远的显示行号

#### 异常退出

什么是异常退出：在编辑文件之后并没有正常的去wq,而遇到的异常退出或断电导致的问题
解决办法：将交换文件（在编辑过程中产生的临时文件）删除掉即可

- rm -f .异常文件名称.swp

#### 别名机制

作用：相当于创建一些自己自定义的命令

例如：在windows下习惯的cls清屏，但是在linux下没有这个命令就可以通过别名机制来解决这个问题

别名机制依靠一个别名映射文件来完成：~/.bashrc

更改之后为了使配置文件生效需要重新登录以下当前账号

#### 退出方式

之前在vim中退出的当时为：":q"/":wq"

除了上面的方式外，vim还支持另外的退出方式:":x",如果文件编辑过则表示保存并退出，否则表示退出
记住：千万不要达成X,千万不要达成X,千万不要达成X,X是对文件进行加密

### Linux自有服务

自由服务，即不需要用户独立去安装服务，而是当系统安装好之后就可以使用的服务（内置）

#### 运行模式

- 运行模式也可以称为运行级别
- 在linux中存在一个进程：init(initialize,初始化)，进程id是1
- 查看进程：ps -ef|grep init
- 该进程存在一个对应的配置文件：inittab(系统运行级别配置文件，位置：/etc/inittab)

**CentOS6.5中存在七种运行级别0-6**

```
0-halt:表示关机级别，不要将此默认的运行级别设置为0
1-Single user mode:单用户模式
2-Multiuser:多用户模式，net work files system网络文件系统，如果没有网络可以启用此模式
3-Full multiuser mode:完整的多用户模式
4-unused:保留模式
5-X11:完整图形化模式
6-reboot:重启级别，不要将默认运行级别设置为此值

与该级别相关的命令
init 0表示关机如果将默认运行级别设置为0则运行级别最高一开机就关机
init 3:表示切换到不带桌面的模式
init 5：切换到带桌面的模式
init 6:重启电脑
这些命令都是调用init进程，将数字（运行级别）传递给init,init会去读配置文件执行对应的操作
```

### 用户与用户组管理（重点）

想要实现用户的管理，要完成的工作有以下几个方面

- 用户账号的添加
- 删除
- 修改
- 用户密码的管理
- 用户组的管理

注意三个文件

- /etc/passwd	(存储用户的关键信息)
- /etc/group	（存储用户组的关键信息）
- /etc/shadow	（存储用户密码信息）

#### 1.用户管理

添加用户

- 语法：useradd 选项 用户名
- 常用选项：

```
-g：表示指定用户的用户主组选项的值可以是用户组的id也可以是组名
-G：表示指定用户的附加组选项的值可以是用户组的id也可以是组名
-u:uid，用户的id(用户的标识符)，系统默认会从500之后按顺序分配，如果不想
被分配可以自定义
-c (comment):添加注释
```

验证是否成功

- 验证/etc/passwd的最后一行，查看是否有刚添加的用户名信息
- 验证是否存在对应的家目录

扩展：认识passwd

```
用户名：表示密码：用户ID:用户组ID:注释：家目录：解释器shell

用户名：新用户的名称后期登录需要输入
密码：此密码位置一般都是x,表示密码占位
用户id:用户的识别符
用户组id:该用户所属的主组id
注释：解释该用户是做什么用的
家目录：用户登录进入系统之后默认的位置
解释器shell：等待用户进入系统之后，用户输入指令之后，该解释器
会搜集用户的指令传到内核执行
```

注意：在不添加选项的时候，执行useradd之后会执行一系列的操作

- a.创建同名的家目录
- b.创建同名的用户组

案例：添加选项，创建用户lisi，让lisi属于501主组，附加组500，自选靓号：666

- useradd -g 500 -G 501 -u lisi

注意：查看用户的主组可以查看passwd文件，查看附加组查看group

#### 修改用户

- 常用语法：usermod 选项 用户名
- 常用选项：

```
-g:表示指定用户的用户主组选项的值可以是用户组的id也可以是组名
-G：表示指定用户的附加组选项的值可以是用户组的id也可以是组名
-u:uid，用户的id(用户的标识符)，系统默认会从500之后按顺序分配，如果不想
被分配可以自定义
-l:修改用户名
```

案例：修改lisi的用户组为500，附加组为501

- usermod -g 500 -G 501 lisi

更改用户名,修改lisi为zhangsan

- usermod -l zhangsan li
- 语法：usermod -l 新用户名 旧用户名

#### 设置用户密码

linux不允许没有密码的用户登录到系统，没有密码的用户处于锁定状态

- 常用语法：passwd 用户名
- 案例：设置zhangsan的密码 passwd zhangsan
- 查看密码：tail -3 /etc/shadow

#### 切换用户命令：

- 语法：su [用户名]
- 描述：switch user如果用户名不指定，则切换到root

#### 删除用户

- 语法：userdel 选项 用户名
- 常用选项:-r ，表示删除用户的同时删除用户的家目录
- 案例：删除zhangsan,userdel -r zhangsan
  注意：已经登录的用户是删除不了的，但是没有登录的用户可以正常删除

- 解决办法：kill 用户进程【删用户的父进程】

提示：所有跟用户操作的命令出passwd外只有超级管理员有用户权限

#### 用户组管理

用户组的管理涉及到用户组的添加，删除和修改。组的操作实际上就是对/etc/group的操作

```
文件结构：
用户组名：密码占位符：用户组id：组内用户名
虽然用户组可以设置密码，但是大部分情况下是不设置密码的
组内用户名：表示附加组是该组的用户名称
```

##### 用户组添加

- groupadd 选项 用户组名
- 常用选项：

```
-g:类似用户添加里的-u，表示自己设置一个自定义的id数字，如果不指定数字，则默认从500之后递增
```

案例：使用groupadd指令创建一个新的用户组，命名为Administrators
groupadd Administr

##### 用户组编辑

- 常用语法：groupmod 选项 用户组名
- 常用选项：

```
-g:类似用户添加里的-u，表示自己设置一个自定义的id数字，如果不指定数字，则默认从500之后递增
-n:类似用户修改里的-l,表示设置新的用户组的名称
```

案例：修改Administrators用户组的id修改为502改为520,用户组名为admins

- groupmod -g 520 -n admins Administrators

##### 用户组的删除

- 语法：groupdel 用户组名称
- 细节：如果需要删除某个用户组，但是当这个用户组是某个用户的主组是无法删除，只有将该组内的用户移走才可删除

### 权限操作

linux的权限操作与用户、用户组是兄弟操作

在Linux中分别有读、写、执行权限

#### 读权限：

对于文件夹来说，读权限影响用户是否能够列出目录结构
对于文件来说，读权限影响用户是否可以查看文件内容

#### 写权限：

对于文件夹来说，写权限影响用户是否可以在文件夹下创建/删除/复制到/移动到文档
对于文件来说，写权限影响用户是否可以编辑文件内容

#### 执行权限

一般都是对于文件来说，特别是脚本文件

#### 身份介绍

#### Owner身份（文件所有者）

由于Linux是多用户、多任务的操作系统，因此可能会常常有很多人在同时在某台主机上工作
但是每个人均可在主机上设置文件权限，让其成为个人的“私密文件”，即个人说有者因为
设置了适当的权限，除本人之外的用户无法查看文件内容

#### Group身份 与文件所有者同组的用户

与文件所有者同组最有用的体现就是多个团队在同一台主机上开发资源的时候

#### Others身份（其他人）

相对于所有者而言

#### Root用户（超级用户）

在Linux中神一样存在的用户，在所有用户中拥有最高的权限，管理着普通用户

#### 权限设置

要设置权限就要知道文件的一些基本属性和权限的分配规则，在Linux中，ls命令
常用来查看文件的属性，用于显示文件的文件名和相关属性

- ls -l 路径	【ls -l等价于ll】

权限属性信息说明：

```
drwxr-x---
其中
d:文件类型
r:read可读
w:write可写
e:execute可执行
-x:文件所属用户组权限
---：其他人对这个文件的权限
-：没有对应权限

十位字符表示含义：
第1位：表示文档类型，取值常见有“d表示文件夹，-表示文件，l表示软连接，s表示套接字”

第2-4位：表示文档所有者的权限情况，第二位表示读权限的情况，取值有r,-。第三位，表示写权限的情况
w表示可写，-表示不可写，第四位表示执行权限的情况，去只有x、-

第5-7位：表示所有者同在一个组的用户的权限情况，取值有r、-。第6位表示写权限情况，w表示可写，-表示不可写
第7位表示执行权限的情况，取值有x、-

第8-10位：表示除了上面的前两部分，用户之外的其他用户的权限情况取值有r、-。第8位表示读权限的情况，第9位表示写权限情况，w表示可写，-表示不可写
第10位表示执行权限的情况，取值有x、-
```

权限分配中，均是rwx的三个参数组合，且位置不会变化，没有对应权限就用-表示

**权限设置语法如下**

语法：chmod 选项 权限模式 文档
注意事项：

- 常用选项：

```
-R:递归设置权限（当文档类型为文件夹的时候）
```

- 权限模式：就是该文档需要设置的权限信息
- 文档：可以是文件也可以是文件夹，可以是相对路径，也可以是绝对路径
  注意点：如果想要给文档设置权限，操作者要么是root用户，要么就是文档的所有者

##### 字母形式

```
选项		字母		介绍
（谁）	u		用户
（谁）	g		所属群体
（谁）	o		其他人
（谁）	a		所有人（全部）
（作用）	+		增加权限
（作用）	-		减少权限
（作用）	=		确定权限
（权限）	r		可读
（权限）	w		可写
（权限）	x		执行

给谁设置：
u:表示所有者身份owner(user)
g:表示给所有者同用户组设置权限
o:表示others,给其他用户设置权限
a:表示all,给所有（包括ugo部分）设置权限
如果设置权限时不指定给谁设置，则默认给所有用户设置

权限字符：
r:读
w:写
x:表示执行
-:表示没有权限

权限分配方式：
+：表示给具体的用户增加权限
-：表示删除用户权限
=：表示将权限设置成具体的值（注重结果）
```

例如：给文件anaconda-ks.cfg设置权限，要求所有者拥有全部的权限，同组用户与所有者用户读和执行权限，其他用户只读权限

- 语法例如：chmod u+x,g+rx,o+r anaconda-ks.cfg
- 使用减还原：chmod u-x,g-rx,o-r anaconda-ks.cfg
- 等号加权限：chmod u=rwx,g=rx,o=r anaconda-ks.cfg

例如：如果anaconda-ks.cfg文件什么权限也没有可以使用root用户设置所有人都有执行权限，则可以写成
语法1：chmod +x anaconda-ks.cfg
语法2：chmod a=x anaconda-ks.cfg
语法3：chmod a+x anaconda-ks.cfg

##### 数字形式

读：r	4
写：w	2
执行：x	1
没有任何权限：0

```
数字		权限							目录
0		不能读，不能写，不能执行			---
1		不能读，不能写，可执行			--x
2		不能读，可写，不能执行			-w-
3		不能读，可写，可执行				-wx
4		可读，不能写，不能执行			r--
5		可读，不能写，可执行				r-x
6		可读，可写，不能执行				rw-
7		可读，可写，可执行				rwx
```

```
例如：要求给annacoonda-ks.cfg设置权限，权限要求所有者拥有全部权限同组用户拥有执行权限其他用户只读
全部权限(u):读+写+执行=4+2+1=7
读和执行权限（g）:读4+执行1=5
读权限（o）：读=4
综上权限为754：
chmod 754 annacoonda-ks.cfg
```

>注意：在写权限的时候千万不要设置只写不能读这种奇葩权限，打不开给写权限没用
>如果一个权限数字中但凡出现2与3这样的数字，则改权限有不合理的情况

在lunux中如果要删除一个文件，不是看文件有没有对应的权限，而是看文件的目录是否有写权限，如果有才可以删除

##### 属主与属组

- 属主：所属的用户（文件的主人）
- 属组：所属的用户组
  这两个信息会在文档创建时，使用创建者的信息（用户名，用户主组名称）

如果有时候删除某个用户，则改用户对应的文档的属主和属组信息就需要去修改

##### chown（重点）

- wn:owner
- 作用更改文档的所属用户
- 语法：chown 用户名 文档路径
- 如果是文件夹：chown -R 用户名 文档路径（-R递归，可选）
- 语法2：chown [-R] 用户名：用户组名 文档路径
- 作用2：改所属用户的同时更改所属用户组

##### chgrp（了解）

- 作用：更改文档的所属用户组
- 语法格式：chgrp [-R] 用户组名 文档路径



#### 扩展 sudo(switch user do)

```
sudo命令用来以其他身份来执行命令，预设的身份为root。
在/etc/sudoers中设置了可执行sudo指令的用户。若其未经
授权的用户企图使用sudo，则会发出警告的邮件给管理员。用户
使用sudo时，必须先输入密码，之后有5分钟的有效期限，超过
期限则必须重新输入密码。
```

- 语法：sudo (选项) (参数)
- 选项说明：

```
-b：在后台执行指令；
-h：显示帮助；
-H：将HOME环境变量设为新身份的HOME环境变量；
-k：结束密码的有效期限，也就是下次再执行sudo时便需要输入密码；。
-l：列出目前用户可执行与无法执行的指令；
-p：改变询问密码的提示符号；
-s<shell>：执行指定的shell；
-u<用户>：以指定的用户作为新的身份。若不加上此参数，则预设以root作为新的身份；
-v：延长密码有效期限5分钟；
-V ：显示版本信息
```

- 参数

```
指令：需要运行的指令和对应的参数。
```

如何改变配置文件：

- 语法：visudo
- 即可打开语法与vim一样，如何编辑可以去找范例

```
root ALL=(ALL) ALL
解释说明：
root表示用户名，如果想设置用户组，则%用户组名
ALL：表示允许登录的主机（地址白名单）
(ALL)：表示以谁的身份去执行，ALL表示root身份
ALL位置:表示当前用户可以执行的命令,多个命令可以使用英文逗号分隔
```

案例：本身guqing用户不能添加用户，要求使用sudo配置，将其设置可以添加用户，
并且可以修改密码（但是不能修改root用户密码）

- 注意：再写sudo规则时不建议写直接形式的命令，而是写命令的完整路径，如何查看命令完整路径，可以使用which命令来查看
- 语法：which 指令名称

```
在编辑器中执行外部命令：
:!which useradd

添加的指令语法：
## 要求guqing用户可以在任何主机上执行添加用户和设置密码操作但是不能修改root,加！表示不能改root的密码，先允许全部，在拒绝修改root
guqing  ALL=(ALL)       /usr/sbin/useradd,/usr/bin/passwd,!/usr/bin/passwd root
```

在添加好对应的规则之后就可以切换到guqing在去执行
此时要想使用刚才的规则，则以以下的命令进行

- 语法：sudo 执行的指令
- 使用sudo -l用户可以查看自己拥有那些权限
  注意：sudo不是任何Linux分支都有的命令，常见CentOS与Ubuntu都存在sudo命令

### cron/crontab计划任务

作用：操作系统不可能24小时都有人操作，有些时候想在指定的时间点去执行任务（例如：每天夜里2点去重新启动apache
但是不可能真的有人每天夜里2点去执行命令，此时可以交给计划任务程序去执行操作）

- 语法：crontab 选项

```
选项：
-l：list列出指定用户的计划任务列表
-e:edit,编辑指定用户的计划任务列表
-u:user,指定用户名。如果不指定就表示当前用户
-r:remove，删除指定用户的计划任务列表
```

例如：crontab -l列出当前用户的计划列表
编辑计划任务：crontab -e 【重点】

#### 计划任务的规则语法格式

- 计划任务一行就是一个计划：
- 计划规则：分 时 日 月 周 需要执行的命令
- 例如：想要每天的0点0分执行reboot指令则可以写成

```
0 0 * * * reboot
表示每天的0点0分执行reboot

取值范围：
分：0-59
时：0-23
日：1-31
月：1-12
周：0-6，0表示星期天

四个符号：
*：表示取值范围里的每一个数字，
-：用于做区间表达式，要想表示一到7则表示为：1-7
/：表示每多少个，例如：想每10分钟执行一次某指令，则可以在分的位置写：*/10
,：表示多个取值，例如：想在1点，2点，6点执行，则可以在时的位置写：1,2,6
```

#### crontab 权限问题：本身是任何用户都可以创建自己的计划任务、

但是超级管理员可以通过配置来设置某些用户不允许设置计划任务

```
配置文件位于：
/etc/cron.deny
里面写用户名，一行一个即可让改用户无法创建计划任务

白名单即允许用户设置计划任务
/etc/cron.allow （本身不在可以自己创建）
如果同时在黑名单和白名单设置过用户则以白名单为准，白名单的优先级更高
```

### Linux网络设置

首先知道网卡配置文件的位置
/etc/sysconfig/network-scripts

其中有两个配置文件：ifcfg-etc0,ifcfg-lo,命名格式是ifcfg-网卡名称

```
网卡配置文件解释：
ONBOOT:是否开机启动
BOOTPROTO:地址分配方式，DHCP表示动态主机分配协议
HWADDR:硬件地址，即MAC地址
```

#### 此处需要会使用网卡重启操作

- 语法1：service network restart
- 语法2：再有的分支版本中没有第一个语法，有一个共性的目录叫/etc/init.d
  该目录放着很多服务的快捷方式，此处重启网卡命令还可以使用：
  /etc/init.d/network restart

```
如果需要去修改网卡的配置文件，但是目录层次很深，则此时可以在浅目录中
创建一个快捷方式(软连接)方便查找
语法：ln -s 原始文件的路径 目的路径
例如：在家目录下创建网卡软连接：ln -s /etc/sysconfig/network-scripts/ifcfg-eth0 ~/ifcfg-eth0
改文件创建以后类型是：l,表示link链接
```

#### 重启单个网卡

- 停止某个网卡语法：ifdown 网卡名称
- 开启某网卡语法：ifup 网卡名称
- 如果需要重启则，先停止在开启
- 提示：在实际工作时不要随意禁用网卡

### 防火墙设置

防火墙：防范一些网络攻击
防水墙：bbs论坛贴吧，水军

防火墙有硬件防护墙与软件防火墙之分

防火墙选择性让请求通过，保证网络安全性
在当前的CentOS6.5中防火墙有一个名字叫iptables 【7.x中使用的是firewalld】

①查看iptables是否开机启动
②iptables 服务的启动/重启/关闭

- 语法1：service iptables start/stop/restart
- 语法2：/etc/init.d/iptables start/restart/stop

③查看防火墙的状态（规则）

- 语法1：service iptables status
- iptables -L（表示列出规则）【或者-L -n ,表示将显示方式单词转为数字】

#### 设置端口开放

##### 允许80端口开放

- 语法：iptables -I INPUT -p tcp --dport 80 -j ACCEPT

```
iptable 指令名
-A:add添加一个规则
INPUT:进站请求
-p：protocol指定协议
--dport:指定端口号
-j:指定行为结果
ACCEPT:表示允许
REJECT:表示禁止
```

##### 添加完规则以后需要保存操作

- 语法：/etc/init.d/iptables save



#### CentOS7.x中设置防火墙规则

```shell
# 开启
systemctl start firewalld.service
# 重启
systemctl restart firewalld.service
# 关闭
systemctl stop firewalld.service

#查看linux哪些程序正在使用互联网
firewall-cmd --permanent --list-services ssh dhcpv6-client

#查看防火墙规则
firewall-cmd --list-all 

#查看防火墙状态
systemctl status firewalld

# 查询端口是否开放
firewall-cmd --query-port=8080/tcp
# 开放80端口
firewall-cmd --permanent --add-port=80/tcp
firewall-cmd --permanent --add-port=8080-8085/tcp
# 移除端口
firewall-cmd --permanent --remove-port=8080/tcp
查看防火墙的开放的端口
firewall-cmd --permanent --list-ports

#重启防火墙(修改配置后要重启防火墙)
firewall-cmd --reload

# 参数解释
1、firwall-cmd：是Linux提供的操作firewall的一个工具；
2、--permanent：表示设置为持久；
3、--add-port：标识添加的端口；
```

### chkconfig服务配置

相当于windows下的开机启动项管理服务

在linux下并不是所有软件安装完成之后都会开机启动服务，有可能需要自己去添加
除此之外还可以查看和删除

#### 查看服务

- 查看语法：chkconfig --list	(check config)

```
其中0-6表示各个启动级别
例如：以httpd为例，其中3级别为关闭（off）,则表示其在3启动形式下默认开机不启动
5对应的也是关闭，则表示其在桌面环境下也是卡机不启动的
```

#### 删除服务(不会再开机启动,而并不是不能service start)

- 语法：chkconfig --del 服务名
  例如：chkconfig --del httpd

#### 添加开机启动服务

添加也只是添加上去，并不是添加后就会开机启动，这需要设置，也并不是所有的软件都有服务
如果想添加服务，必须通过service能都正常运行

- 语法：chkconfig --add 服务名

#### 设置服务在某个级别下开机启动（重点）

- 设置单个级别启动语法：chkconfig --level 级别号 服务名 on/off
- 设置多个语法启动语法2：chkconfig --level 级别号级别号 服务名 on/off

```
例如：设置httpd在 3和5 级别下启动
chkconfig --level 35 httpd on
```

#### ntp服务

ntp作用：主要用于对计算机时间的同步管理操作
时间对服务器来说是很重要的，一般很多网站都需要读取服务器的时间来记录相关信息，如果时间不准则可能造成很大的影响


①一次性同步时间（简单）
ntpdate 时间服务器的域名或IP地址（如120.25.108.11）

②设置时间同步服务
服务名：ntpd
启动ntpd服务
语法：service ntpd start

### 软件管理

#### rpm软件管理

rpm的作用类似windows上的电脑管家中的管家管理，其主要作用就是对于linux服务器上的软件包进行管理操作
管理分为：查询、卸载、安装

**查询**

- 语法：rpm -qa|grep 关键词
- 选项：-q表示查询query,-a表示全部all
- 作用：查询某个软件的安装情况
- 案例：查询linux是否安装firefox,rpm -qa|grep firefox

**卸载**

- 语法：rpm -e 软件名称
- 描述：如果卸载软件存在依赖关系 解决办法：rpm -e 软件包名 -nodeps

**软件的安装**

- 想要装软件，和windows下一样，先得到软件包
  软件包获取方式：
  a.去官网下载
  b.不介意老版本的化，可以光盘镜像安装
  一光盘为类，查看块状设备(光盘硬盘U盘。。)的信息：
- 语法：lsblk  （list block devices）

```
列出信息说明：
NAME：名称
Size:设备大小
Type：类型
MountPoint:挂载点（类似windows下盘符）
```

**挂载盘符**

以光盘的挂载和解挂为例

- 解挂操作
  指令：umount
  语法：umount 当前设备挂载点（路径）
  描述：此时相当于在windows上的u盘被弹出但是未拔出

- 挂载盘符
  指令：mount
  语法：mount 设备原始地址 要挂载的位置
  原始设备地址：统一都在/dev下，然后根据大小确定name值，拼凑在一起组成原始地址例如：/dev/sr0
  挂载位置：建议放在mnt下，也可以建一个目录

**软件安装**

- 语法：rpm -ivh 软件包完成名称
  选项解释：

```
-i:install,安装
-v:显示进度条
-h:以#形式显示进度条
```

- 软件更新语法：rpm -Uvh 完整名称

**扩展**

-语法： rpm -qf 文件路径	【qf查询指定文件属于哪个包】

**lynx介绍**

纯命令行的浏览器，在系统镜像iso中就有这个包

- 安装：rpm -ivh /mnt/dvd/Packages/lynx-2.8.6-27.el6.i686.rpm 
- 访问：lynx --dump 网址


#### yum包管理

- yum list 
- 作用：【列出当前已经安装和能够安装的软件】
- yum search 名
- 作用：【搜索指定关键词的包】
- yum [-y] install 包名
- 作用：安装指定的包名【-y表示允许不再确认】
- yum [-y] update [包名]	
- 作用：更新指定的包，不指定表示更新全部软件
- yum [-y]	remove 包名
- 作用：卸载指定包

### SSH服务

全称为：secure shell，安全外壳协议，该协议有两个常用的作用：远程连接协议、远程文件传输协议

这个协议需要使用一个端口号，默认为22
如果需要修改，则需要去修改ssh的配置文件，目录为：/etc/ssh/ssh_config

- 端口号可以改但是不要随意改：端口号范围，0-65535
- 不能使用别的服务已经占用的端口号

#### 服务的启动/停止/重启

- 语法1：service sshd restart/start/stop
- 语法2：/etc/init.d/sshd start/stop/restart

#### 远程终端

作用：帮助我们通过工具远程连接到远程服务器
常见的终端工具有：xshell、secureCRT、Putty

```
①获取服务器的ip地址，通过ifconfig指令进行查看，然后顺手ping以下相通性
②打开远程终端工具输入ip
③弹出密钥提示时点击 是
④输入用户名
⑤输入密码
登录成功
```

#### ssh服务文件传输

可视化界面传输工具：Filezilla
下载安装连接好以后上传文件到服务器

- 上传文件支持直接拖拽上传，也可本地点选
- 下载：支持文件直接拖拽到本地，也可以右键下载

##### 通过命令行工具传输文件

工具名：pscp
必须通过cmd命令行方式打开

- 下载语法：pscp 选项 用户名@Linux主机地址：资源路径 windows本地地址
- 上传语法：pscp 选项 资源路径 用户名@linux主机地址：远程路径
- 列出远程路径下的结构：pscp 选项 -ls 用户名@linux主机地址

### 设置主机名

- hostname查看主机名
- hostname -f 查看权限定域名

#### 临时设置主机名

- 语法：hostname 设置的主机名

#### 永久设置主机名

- 1.找到文件：/etc/sysconfig/network
- 2.修改其中的HOSTNAME为自己需要这只的永久主机名
- 3.修改linux服务器的hosts文件，将新修改的域名指向本地
  hosts文件位置：/etc/hosts(设置FQDN)
- 4.重启电脑

```
如果不设置FQDN
①很多开源服务器软件如apache可能会无法启动或者报错
②方便记忆，看到主机名对其作用有一个初步的判断
③如果不设置则会影响本地域名的解析
```

### Mysql安装

此处使用yum安装
服务器安装mysql-server

- 语法：yum install mysql-server

#### mysql初始化

- 先启动mysql服务：service mysqld start
- 再配置语法：mysql_secure_installation
- 看到提示

```
Enter current password for root (enter for none): 
这说的是mysql的root密码，如果没有直接回车
然后输入Y设置密码：
DIs9Epvp4dC8s4Dn

然后提示：是否移除匿名用户
选择移除Y

然后提示：是否允许root远程登录，不管输入y与n都不允许所以输什么都可以

然后提示：是否移除测试用户，建议先不移除

Reload privilege tables now? [Y/n]是否重新加载权限表（当我们去更改了mysql用户相关的信息之后建议重载）设置y

看到提示：
All done!  If you've completed all of the above steps, your MySQL
installation should now be secure.

Thanks for using MySQL!
则数据库初始化成功

```

#### mysql的启动控制

- 语法：servcie mysqld restart/start/stop
- 进入mysql的方式：

```
输入：mysql -u 用户名 -p
剩下的就是和以前操作的一样
```

#### 默认目录/文件位置(了解)

- 数据库存储目录：/var/lib/mysql
- 配置文件存储目录：/etc/my.cnf

#### 扩展，如何使用远程登录

1.mysql 的远程管理工具
两大类分别是：B/S架构，C/S架构
在B/S中，有一个mysql的典型管理工具：PMA(phpMyAdmin)
在C/S中有一个典型管理工具：Navicat(能连任何数据库),mysql workbench,sqlyog

如何远程连接：

```
第一步： 
进入mysql数据库中use mysql;

第二步：
执行sql语句：select host,user from user;

第三步：
将其中一个记录host值改为"%",
update user set host='%' where host='localhost.localdomain';

第四步：
刷新权限表，或者重启mysql
刷新权限语法：在mysql表中：flush privileges;

如果想修改密码：
mysql> update user set password=password("你的新密码") where user="root";
mysql> flush privileges;
mysql> quit 
```

#### 设置防火墙规则：

- 开放3306端口：iptables -I INPUT -p tcp --dport 80 -j ACCEPT


#### 安装mariaDB

- #yum install mariadb-embedded mariadb-libs mariadb-bench mariadb mariadb-server -y

先启动（service命令就不要用了）
```
 systemctl start mariadb
```
开机启动

- systemctl enable mariadb

最后开启安装步骤

- mysql_secure_installation
  然后接下来的步骤和上面一样

### Nginx与Tomcat整合

上传tomcat解压至/usr/local/src下

如果没有gcc编译器

- 安装gcc:yum -y install gcc automake autoconf libtool make
- 安装g++:yum install gcc gcc-c++

#### 安装nginx

**安装依赖pcre**

- yum -y install pcre-devel

**安装zlib**

- 下载：yum -y install zlib-devel

**编译Nginx**

- 执行：./configure --prefix=/usr/local/nginx 
- 编译：make
- 若没报错安装：make install
- 切换目录：cd ./nginx/conf
- 在nginx中配置nginx.conf文件：

```
user  nobody; 
worker_processes  4;

#error_log  logs/error.log;
#error_log  logs/error.log  notice;
#error_log  logs/error.log  info;

#pid        logs/nginx.pid;


events {
    worker_connections  1024;
}


http {
    include       mime.types;
    default_type  application/octet-stream;

    #log_format  main  '$remote_addr - $remote_user [$time_local] "$request" '
    #                  '$status $body_bytes_sent "$http_referer" '
    #                  '"$http_user_agent" "$http_x_forwarded_for"';

    #access_log  logs/access.log  main;

    sendfile        on;
    #tcp_nopush     on;

    #keepalive_timeout  0;
    #                  '"$http_user_agent" "$http_x_forwarded_for"';

    #access_log  logs/access.log  main;

    sendfile        on;
    #tcp_nopush     on;

    #keepalive_timeout  0;
    keepalive_timeout  65;

    #gzip  on;
    upstream tomcat_client { #针对于8080端口实现
        ip_hash;
        server localhost:8080; #如果存在多个部署，写入地址和端口即可

    }
    server {
        listen       80;
        server_name  localhost; #本地访问名称可以修改，如果nginx不和tomcat在同一台服务器可以写成域名

        #charset koi8-r;

        #access_log  logs/host.access.log  main;

        location / {
            proxy_pass http://tomcat_client; #上面配置的tomcat服务器的名字
            proxy_redirect default;
            #设置代理
            proxy_set_header Host $host;
            proxy_set_header X-Real-IP $remote_addr;
        }
```

- 检查有没有语法错误：sbin/nginx -t
- 启动tomcat
- 启动nginx就可以访问自己的项目