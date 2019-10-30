```java
HttpServlet extends GenericServlet{
/*第一个service()方法,父类中的方法
*/
    void service(ServletRequest req,ServletResponse res)
    -->生命周期方法
    *强转两个参数为Http协议类型
    *调用本类的service(HttpServletRequest req,HttpServletResponse resp)

    /*HttpServlet中的service()方法
    */
    void service(HttpServletRequest req,
                    HttpServletResponse resp)
     -->参数已经是Http协议相关的，使用起来就更加方便
     *它会通过request得到当前请求的请求方式，例如：GET或POST
     *会根据请求方式调用doGet()或doPost()方法
     
     void doGet(){...}-->要重写
     void doPost(){..}---》要重写
}
```
所以以后我们的类要继承HttpServlet然后重写doGet()或doPost()
然后Tomcat会调用void service(ServletRequest req,
ServletResponse res)方法，这个方法会把两个参数强转为与HTTP
协议相关的类型

然后调用void service(HttpServletRequest req,HttpServletResponse resp)，然后会通过HttpServletRequest对象来或取请求方式，如果是GET调用doGet()，如果是POST调用doPost()