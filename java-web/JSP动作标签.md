这些动作标签与html提供的动作标签由本质的区别

动作标签有tomcat服务器来解析执行，与Java代码一样都是在服务器段
解析执行的

HTML由浏览器执行

- <jsp:forward>   转发！它与RequestDispatcher的forward方法一
样，一个是在servlet中使用，一个实在jsp中使用

- <jsp:include> 包含！它与RequestDispatcher的include方法一
样，一个在servlet中使用一个是在jsp中使用   > 要注意的是
<%@inlcude%>是真正的合并，而<jsp:include>只是调用
- <jsp:param> 它用来作为forward和include的子标签，用来给转发
或包含的页面传递参数