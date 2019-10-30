如何让浏览器访问servlet

    1.给servlet指定一个servlet路径（给servlet绑定一个路径）
    2.浏览器访问servlet路径
    
这就需要给servlet配置一个路径，在web.xml中配置
```xml
<servlet>
    <servlet-name>XXX</servlet-name>
    <servlet-calss>servlet_a</servlet-class>
</servlet>

<servlet-mapping>
    <servlet-name>XXX</servlet-name>
    //不必要与上边的类名一样是一个路径即可
    <url-pattern>/servlet_a</url-pattern>
</servlet-mapping>
```
请求发出时，与url-pattern匹配在一起<servlet>下的 <servlet-name>就与<servlet-mapping>下的<servlet-name>做了一个关联最终执行servlet_a类

### servlet总结

servlet总共五个方法

三个生命周期方法

	void destroy()
        /*
    	 * 它是生命周期方法
    	 * 它会在servlet被销毁之前来调用，并且只会被调用一次
    	 * 它并不代表servlet用来自杀的方法，而是用来留遗言的方法
    	 * 但是很少会在里面些方法
    	 */
    
	void init(ServletConfig servletConfig)
    	/*
    	 * 它是一个生命周期方法
    	 * 它会在servlet对象创建之后马上执行，并且（出生之后）只执行一次
    	 */

	
	 void service(ServletRequest servletRequest, ServletResponse servletResponse)
    	 /*
    	 * 它是生命周期方法
    	 * 它会被调用多次
    	 * 并且每次处理请求都调用这个方法
    	 */


### 两个很少用的方法

    /*
     * 能获取servlet的配置信息
     */
    ServletConfig getServletConfig()
    
    /*
     * 获取servlet的信息，很少用
     * @see javax.servlet.Servlet#getServletInfo()
     */
    String getServletInfo()

	
### servlet特性
- 单例：一个类只有一个对象。当然可能存在多个类
    
-  线程不安全的所以效率会比较高
	

##### servlet类由我们来写但是对象由服务器去创建，并且由服务器去调用相关的方法			