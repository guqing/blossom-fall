#### 注意：上传用不了BaseServlet
#### 1.上传对表单的限制
- method="post"
- enctype="multipart/form-data"
- 表单中需要添加文件表单项：<input type="file" name="xxx">

例如：
```html
<form action="xxx" method="post" enctype="multipart/form-data">
    用户名：<input type="text" name="username"/><br/>
    照片：<input type="file" name="picture"/><br/>
    <input type="submit" value="上传"/>
</form>
```
#### 2.上传对Servlet的限制
- request.getParameter("xxx");这个方法在表单中为enctpye="multipart/form-data"时，作废； 它永远返回的都是null。
- ServletInputStream request.getInputStream();包含整个请求的体

#### commons-fileupload
使用这个commons工具需要两个jar包
- commons-fileupload.jar
- commons-io.jar

#### 上传三步
相关的类
- 工厂DiskFileItemFactory
- 解析器:ServletFileUpload
- 表单项：FileItem
```
1) 创建工厂：
DiskFileItemFactory factory = new DiskFileItemFactory();

2) 创建解析器工厂：
ServletFileItemUpload suf = new ServletFileItemUpload(factory);

3) 使用解析器来解析request：得到FileItem集合：
List<FileItem> fileItemList = suf.parseRequest(request);
```
#### FileItem API接口
- boolean isFormFiled:是否为普通表单项！返回true为普通表单项，如果false即文件表单项
- String getFiledName():返回当前表单项的名称
- String getString(String charset):获取返回表单项的值（不适用于文件表单项）
- String getName():返回上传的文件名称
- long getSize():返回上传文件的字节数
- String getContentType():获取MIMe类型
- InputStream getInputStream()：返回上传文件对应的输入流
- void write(File destFile):把上传的文件内容保存到指定的文件中

#### 上传的细节
1.文件必须保存到WEB-inf下
- 目的是不能直接通过浏览器访问到

2.文件名称相关问题
- 有的浏览器上传的文件是绝对路径，这血药切割c:files/fiveKill.jpg
- 文件名乱码或者普通表单项乱码：request.setCharacterEncoding("utf-8");是有用的因为fileUpload内部会调用request.getCharacterEncoding()方法
- 上传文件同名问题：我们需要为每个文件添加名称前缀，这个前缀要保证不能重复。uuid解决
```
filename = CommonUtils.uuid() + "_" + filename;
```

3. 目录打散
- 不能再一个目录下存放过多文件。
```
方法：
> 1.首字母打散：使用文件的首字母作为目录名称，例如：abc.txt，那
    么我们把文件保存到a目录下，如果a目录这时不存在那么创建之
> 2.时间打散：使用当前日期作为目录
> 哈希打散：
    -> 通过文件名称得到int值，即hashCode();
    -> 把int值转换成16进制0-9，A-F
    -> 获取16进制的前两位用来生成目录，目录为二层！例如：1B2C3D4F5E
    那么：/1/B保存文件
```


- 4.上传文件的大小限制
- 单个文件大小限制
```
suf.setFileSizeMax(100*1024);限制单个文件大小为100kb
->上面的方法调用，必须在解析之前调用
-> 如果上传的文件超出限制，在parseRequest()方法执行时，会抛出异常


```
- 整个请求所有数据大小限制
```
suf.setSizeMax(1024*1024);
->上面的方法调用，必须在解析之前调用
-> 如果上传的文件超出限制，在parseRequest()方法执行时，会抛出异常
```

5. 缓存大小于临时目录
```
缓存大小超过多大，才像硬盘保存，例如10k？
临时目录：像硬盘的什么目录保存？
使用构造方法：DiskFileItemFactory(int seizeThreshold,File repository)
seizeThreshold:缓存大小
repository：临时目录
```
