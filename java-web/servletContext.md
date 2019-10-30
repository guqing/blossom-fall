### servletContext概述
> 一个项目只有一个servletContext对象
> 
> 我们可以在N多个servlet中来获取这个唯一的对象使用它可以给多个servlet传递数据
> 
> 与天地同寿！！这个对象在Tomcat启动时就创建，
在Tomcat关闭时才会死去

### 获取servletContext方式
    Servletconfig->getServletContext()
    GenericService->getServletContext()
    HttpSession->ServletContext()
    ServletContextEvent->ServletContext()
### 域对象功能
> 域对象就是在多个servlet之间传递数据
>
> 域对象必须要有存数据的功能
>
> 域对象必须要有取数据的功能
>
    servletContext.setAttribute("xxx","XXX")用来存对象
    所以域对象内部其实有一个Map集合
   
    getAttribute(String name)
    返回一个String的Value
### 演示
```java    
/**
 * 演示向servletContext中保存数据
 * Servlet implementation class Servler_a
 */
public class Servlet_a extends HttpServlet {

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		/*
		 * 1.获取ServletContext对象
		 * 2.调用其setAttribute()方法完成保存数据
		 */
		ServletContext application = this.getServletContext();
		application.setAttribute("name", "张三");
	}

}
```
```java
/**
 * 演示向servletContext中取数据
 * 运行时出错要注意是否将项目导入到Tomcat中
 * Servlet implementation class Servler_a
 */
public class Servlet_b extends HttpServlet {

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		/*
		 * 1.获取ServletContext对象
		 * 2.调用其getAttribute()方法完成取数据
		 */
		ServletContext application = this.getServletContext();
		String name = (String)application.getAttribute("name");
		System.out.println(name);
	}

}
```
#### 执行结果
    张三
    
## 获取初始化参数
- servlet也可以获取初始化参数，但是它是局部的参数，也就是说一个servlet只能获取自己的初始化参数，不能获取别人的，即初始化参数只为一个servlet准备
- 可以配置公共的初始化参数，为所有的servlet而用，这需要使用ServletContext才能使用