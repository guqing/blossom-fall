EL函数库是由JSTL提供的

### 如何使用函数库
- 1.导标签
```jsp
    <%@taglib prefix="fn" uri="http://java.sun.com/jsp/jstl/functions"%>
```
### 使用EL函数库
- #### 函数及功能介绍：
 fn:toLowerCase 
 
    ${fn:toLowerCase("Www.SinA.org")} 的返回值为字符串“www.sina.org”
 
    ${fn:toLowerCase("")}的返回值为空字符串
 
 
 
  fn:toUpperCase 
 
    ${fn:toUpperCase("Www.SinA.org")} 的返回值为字符串“WWW.SINA.ORG”
 
    ${fn:toUpperCase("")}的返回值为空字符串
 
 
 
  fn:trim 
 
    ${fn:trim("   www.sina.org  ")} 的返回值为字符串“www.sina.org”。
 
 
 
  fn:length
 
    ${fn:length(list) }
 
    ${fn:length("好好学习，天天向上！") } ——返回值10
 
 
 
  fn:split 
 
    ${fn:split("www.sina.org", ".")[1]}的返回值为字符串“sina”。
 
 
 
  fn:join 
 
    ${fn:join(fn:split("www,sina,org", ","), ".")} 
的返回值为字符串“www.sina.org”
 
    ${fn:join(stringArray, “.")}返回字符串“www.sina.org” 
    其中的stringArray为数组{"www","sina","org"}
 
 
 
  fn:indexOf
 
    ${fn:indexOf("www.sina.org","in")} 的返回值为5
 
 
 
  fn:contains -- fn:containsIgnoreCase 
 
     ${fn:contains("aaaabbbcc","ab") } 的返回值为true
 
    备注：fn:contains(string, 
    substring)等价于fn:indexOf(string, substring) != -1。
 

  fn:startsWith -- fn:endsWith 
 
    ${fn:startsWith("www.sina.org","sina")}的返回值为false
 
 
 
  fn:replace 
 
    ${fn:replace("www sina org", " ", ".")}的返回值为字符串“www.sina.org”
 
 
 
  fn:substring 
 
    ${fn:substring("www.sina.org", 4, 8)} 的返回值为字符串“sina”
 
 
 
  fn:substringAfter -- fn:substringBefore 
 
    ${fn:substringAfter(“www.sina.org”, “.”)}的返回值为字符串“sina.org”。
 
 
 
  fn:escapeXml 
 
    ${fn:escapeXml("<a href=''>点点</a>")}
    
### 自定义函数库
- 第一步：写一个Java类，类中可以定义0-N个方法，但必须是静态的有返回值的
- 第二步：在WEB-INFO目录下创建一个.tld的文件，例如：
```xml
<?xml version="1.0" encoding="UTF-8" ?>

<taglib xmlns="http://java.sun.com/xml/ns/j2ee"
  xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
  xsi:schemaLocation="http://java.sun.com/xml/ns/j2ee
  http://java.sun.com/xml/ns/j2ee/web-jsptaglibrary_2_0.xsd"
  version="2.0">
  
  <description>JSTL 1.1 functions library</description>
  <display-name>JSTL functions</display-name>
  <tlib-version>1.1</tlib-version>
  <short-name>fn</short-name>
  <uri>http://java.sun.com/jsp/jstl/functions</uri>
    <!--上面的不用管，照搬-->


<!-- 我们声明的函数-->
  <function>
  <!-- 描述信息可以不写-->
    <description>
      Tests if an input string contains the specified substring.
    </description>
    
    <!-- 函数名称-->
    <name>contains</name>
    
    <!-- 函数对应的类-->
    <function-class>org.apache.taglibs.standard.functions.
    Functions</function-class>
    
    <!-- 函数对应的方法签名，包含了：返回值 方法名（参数类型..）这些信息
    但是参数类型要带包名如：java.lang.String-->
    <function-signature>boolean contains(java.lang.String, 
    java.lang.String)</function-signature>
    
    <!-- 最后还可以给个例子，也可以不给-->
    <example>
      &lt;c:if test="${fn:contains(name, searchString)}">
    </example>
  </function>
```
- 第三步：在jsp页面中导入标签库
```html 
    <%@ taglib prefix="fn" uri="/WEB-INF/tlds/myfn.tld" %>
```
- 第四步：在jsp页面使用自定义的函数
```html
${fn:fun() }
```

### 完整自定义函数库实例：
#### 第一步：创建java类
```java
package fn;

public class MyFunction {
	public static String fun() {
		return "这是我自定义的El函数库";
	}
}

```
#### 第二步：在WEB-INF目录下创建一个tlds文件夹,创建一个myfn.tld文件,并配置
```xml
<?xml version="1.0" encoding="UTF-8" ?>

<taglib xmlns="http://java.sun.com/xml/ns/j2ee"
  xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
  xsi:schemaLocation="http://java.sun.com/xml/ns/j2ee
  http://java.sun.com/xml/ns/j2ee/web-jsptaglibrary_2_0.xsd"
  version="2.0">
  
  <description>myfn</description>
  <display-name>myfn-function</display-name>
  <tlib-version>1.0</tlib-version>
  <short-name>fn</short-name>
  <!-- 这个uri不打jar包用不上，用的时候写写真实路劲 -->
  <uri>http://www.baidu.com/el/functions</uri>
  
  <function>
    <!-- 函数名称-->
    <name>fun</name>
    
    <!-- 函数对应的类-->
    <function-class>fn.MyFunction</function-class>

    <function-signature>java.lang.String fun()</function-signature>
  </function>
  </taglib>
```
#### 第三步：在WebRoot文件夹下创建一个fn文件夹，创建一个b.jsp文件
```html
<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
    
    <%-- 导入自定义标签库--%>
    <%@ taglib prefix="fn" uri="/WEB-INF/tlds/myfn.tld" %>
    
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 
Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html;
        charset=UTF-8">
        <title>Insert title here</title>
    </head>
    <body>
        <h1>${fn:fun() }</h1>
    </body>
</html>
```