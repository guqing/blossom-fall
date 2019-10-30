## Servlet3.0
### 一、要求：
- MyEclipes10.0或以上版本
- 发布到Tomcat7.0或以上版本
#### 二、步骤
- 1.创建JavaEE6.0应用

### 三、概述
特性：
- 注解代替web.xml配置文件
- 异步处理
- 对上传的支持

### 四、注解替代配置文件
- 删除web.xml
- 在Servletl类上添加@WebServlet(urlPatterns={"/AServlet"})

### 五、异步处理
1.什么是异步处理
运来啊，在服务器没有结束响应结束之前，浏览器是看不到响应内容的！只有响应结束时，浏览器再能显示结果
现在，异步处理的作用是：在服务器开始响应后，浏览器既可以看到响应内容，不用再等待服务器响应结束

2.实现异步处理的步骤
- 得到AsyncContex:它是异步处理上下文对象
> AsyncContext ac = request.startAsync(request,response);
- 给上下文一个Runnable对象，启动它（）给上下文一个任务，让他完成） void start(java.lang.Runnable run)
- ac.start(new Runnable(){
	public void run(){
		....
	}
})
- 配置支持异步：@WebServlet(urlPatterns="/AServlet",asyncSupported=true)
- response.setContentType("text/html;charset=utf-8");//如果不设置这个编码经常会导致异步失败

```java
对于IE浏览器来说，想要出现异步效果，响应体大小必须超过512B，才能出现异步效果
随便输出什么都行，为的是让输出达到512B
 for(int i=0; i<512; i++) {
	 response.getWriter().print("a");
 }
 response.getWriter().flush();
```

```java
	//通知Tomcat我们已经执行结束了
	ac.complete();//内部类使用外部或局部的变量必须加final
	
	//final AsyncContext ac = request.startAsync(request,response);
	这样Tomcat才能及时的断开连接
```
### 六、上传
- 1.上传
上传对表单的要求：
	> method ="post"
	> enctype="mutilipart/form-data"，它的默认值application/x-www-form-urlencoded
上传Servlet的使用
	>request.getParameter()不能再用
	>request.getInputStream()使用它来获取整个表单的数据
Commons-fileupload
	>创建工厂
	>创建解析器
	>使用解析器来解析request对象，得到List<FileItem>
Servlet3.0对上传提供了支持
- 表单不变
- 在Servlet中不需要再使用Commons-fileupload,而是使用Servlet3.0提供的上传组件接口！
上传步骤：
- 使用request.getPart("字段名")，得到part实例
- Part:
 > String getContentType();获取上传文件的MIME类型
 > String getName():获取表单项的名称，暴怒是文件名称
 > String getHeader(String header):获取指定头的值
 > long getSize():获取上传文件的大小
 > InputStream getInputStream():获取上传文件的内容
 > void write(String fileName):把上传文件保存到指定路径下
- 默认Servlet是不支持使用上传组件：需要给Servlet添加一个注解
```
@WebServlet(urlPatterns="/AServlet")
@MultipartConfig
```
- 它没有提供获取上传文件名称的方法：
>这需要我们自己从Content-Disposition中截取
```java
	/**
	* @Title: filename  
	* @Description: 提取上传文件名信息  
	* @param @param contentDisposition
	* @param @return
	* @return String
	* @throws
	 */
	private String filename(String contentDisposition) {
		String filename = null;
		Pattern pattern = Pattern.compile("filename=\"(.*?)\"$");
		Matcher matcher = pattern.matcher(contentDisposition);
		if(matcher.find()){
			filename = matcher.group(1);
		}
		return filename;
	}
```