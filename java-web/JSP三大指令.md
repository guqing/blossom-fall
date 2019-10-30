### JSP三大指令
##### 一个jsp页面中可以有0-N个指令定义
#### 1.page--->最复杂
        <%@page language="java"... %>
#### pageEncoding和contentType:

类 型 | 说 明
-------|-------
pageEncoding： |指当前页面的编码只要不说谎就不会出现乱码,服务器再把jsp编译成.java时需要pageEncoding
contentType: | 它表示添加一个响应头：contentType！等同于response.setContentType("text/html;charset=utf-8");
如果两个属性只提供一个，那么另一个的默认值就是哪一个，
如果两个都没有设置，那么默认是iso

#### import:导包，可以出现多次
    
#### errorPage和isErrorPage:

属 性 | 说 明
--|--
 errorPage: | 当前页面如果抛出异常，那么要转发到那个页面由errorPage来指定
isErrorPage: | 它指定当前页面是否为处理错误的页面，这个页面会设置状态码为500，而且这个页面可以使用9大内置对象中的exception
          
在web.xml中配置错误页面
```xml
<error-page>
    <error-code>404</error-code>
    <location>/error/errorPage404.jsp</location>
</error-page>
<error-page>
    <error-code>500</error-code>
    <location>/error/errorPage500.jsp</location>
</error-page>
<error-page>
    <error-code>java.lang.RuntimeException</error-code>
    <location>/error/errorPage.jsp</location>
</error-page>
```
#### autoFlush和buffer:
    > 指定jsp的输出流缓冲区满时，是否自动刷新，如果为false那
      么在缓冲区满时抛出异常
    > buffer:指定缓冲区的大小，默认为8kb，通常不需要修改
#### isELIgnored:
    > isElIgnored: 是否忽略el表达式，默认值为false,不忽略即支持
#### 基本没用
    > language:指定当前jsp编译后的语言类型，默认是Java
    > info：JSP说明性信息
    > isThreadSafe:默认为false，为true时，jsp生成的servlet
    会去实现一个过时的标记接口SingleThreadModel,这是jsp就只
    能处理单线程的访问
    > session:当前页面是否支持session,如果为false，那么当前
    页面就没有session这个内置对象
    > extends:让jsp生成的servlet去继承该属性指定的类
    
          
#### 2.include--->静态包含
- 与requestDispatcher的include()方法的功能相似！
- <%@include%>它是在jsp编译成java文件时完成的 他们功能生成一个Java（就是servlet）文件，然后再生成
 一个class
- RequestDispatcher的inlcude()是一个方法包含和被包含的
 是一个servlet，即两个.class他们只是把响应的内容在运行时合并了
- 把页面分解了，使用包含的方式组合在一起，这样页面中不变的部分就是一个独立的jsp，为我们就只需要处理变化的页面

#### 3.taglib--->导入标签库
- 两个属性：
- prefix:指定标签库在本页面中的前缀，有我们自己来起名字
- uri:指定标签库的位置
    >
    > <%@taglib prefix="pre" uri="/struts-tags"%>
前缀用法：<pre:text>

### jsp九大内置对象
- out  --->jsp的输出流，用来向客户端响应
- page -->当前jsp对象！它的引用类型是object即如下代码：Object page = this
- config -->对应servletConfig对象
- pageContext  -->一个顶九个
- requset     -->HttpServletRequest
- response    -->HttpResponse
- exception   -->Throwable
- session     -->Httpsession
- application --->ServletContext

### 1.pageContext
- 一个顶九个
- servlet中有三大域，而jsp中有四大域，它就是最后一个域对象

    > servletContext:整个应用程序
    >
    > session:整个会话，一个会话中只有一个用户
    >
    > request: 一个请求链
    >
    > pageContext:一个jsp页面！这个域是当前jsp页面和当前jsp页面中使用的标签之间共享数据

pageContext: | 举例
---|---
是域对象 | 无
可以代理其他域 | pageContext.setAttribute("xxx","XXX",pageContext.SESSION_SCOPE);
全域查找 | pageContext.findAttribute("xxx"); 从小到大依赖查找
获取其他8个内置对象 | row 2 col 2
