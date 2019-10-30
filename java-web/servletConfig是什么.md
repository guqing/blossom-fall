这是一个配置文件会被加载到servletConfig中去被servletConfig解析
一个servletConfig对象对应一段web.xml里的servlet配置信息
```xml
<servlet>
    <servlet-name>xxx</servlet-name>
    <servlet-class>day09_1.Servlet_a</servlet-class>
</servlet>
```
### servletConfig有哪些功能
- String getServletName()获取<servlet-name>中的内容
- ServletContext getServletContext()  获取servlet上下文对象
- -tring getInitParameter(String name)
通过名称获取指定初始化参数的值

- Enumeration<String> getInitParameterNames() 
获取所有初始化参数的名称

#### 初始化参数配置供下面的servlet接口实现类使用
```xml
<servlet>
    <servlet-name>xxx</servlet-name>
    <servlet-class>day09_1.Servlet_a</servlet-class>
    
    <init-param>
        <param-name>name1</param>
        <param-value>v1</param-value>
    </init-param>
    <init-param>
        <param-name>name2</param>
        <param-value>v2</param-value>
    </init-param>
</servlet>
```
#### 在servlet的接口实现类中使用方法
```java
    @Override
    public void init(ServletConfig servletConfig)
            throws ServletException {
	System.out.println("init() run....");
		
    /*
     * 获取初始化参数
     */
    System.out.println(servletConfig.getInitParameter("name1"));
    System.out.println(servletConfig.getInitParameter("name2"));
    
    //获取初始化参数的名字
    Enumeration<String> en = servletConfig.getInitParameterNames();
    while(en.hasMoreElements()){
    	System.out.println(en.nextElement());
    }

	}
```
执行结果为：

    init() run....
    v1
    v2
    name2
    name1
    service....
但是获取初始化参数的方法几乎无人使用，最有用的是
getServletContext() 
