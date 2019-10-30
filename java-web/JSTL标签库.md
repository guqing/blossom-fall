### 1、什么是JSTL？
    JSTL是apache对EL表达式的扩展（也就是说JSTL依赖EL），JSTL是标
    签语言！JSTL标签使用以来非常方便，它与JSP动作标签一样，只不过
    它不是JSP内置的标签，需要我们自己导包，以及指定标签库而已！
    
    如果你使用MyEclipse开发JavaWeb，那么在把项目发布到Tomcat时，
    你会发现，MyEclipse会在lib目录下存放jstl的Jar包！如果你没有
    使用MyEclipse开发那么需要自己来导入这个JSTL的Jar包：
    jstl-1.2.jar
    
    
### 2、JSTL标签库：

#### JSTL一共包含四大标签库：

    core：核心标签库，我们学习的重点；
    fmt：格式化标签库，只需要学习两个标签即可；
    sql：数据库标签库，不需要学习了，它过时了；
    xml：xml标签库，不需要学习了，它过时了。

### 3、使用taglib指令导入标签库：

除了JSP动作标签外，使用其他第三方的标签库都需要：
    
- 导包；
- 在使用标签的JSP页面中使用taglib指令导入标签库；

下面是导入JSTL的core标签库：
```html
<%@ taglib prefix="c"uri="http://java.sun.com/jstl/core" %>  
```

### 4、core标签库常用标签：
==注意：导标签时不要导错==

    不要导 ："http://java.sun.com/jstl/core"（没有jsp）
    而是导："http://java.sun.com/jsp/jstl/core"
    否则会出错

（1）out和set标签
out标签 | 功能介绍
---|---
<c:out value=”aaa”/> |输出aaa字符串常量
<c:out value=”${aaa}”/> | 与${aaa}相同
<c:out value=”${aaa}” default=”xxx”/> | 当${aaa}不存在时，输出xxx字符串
<%request.setAttribute("a","<script>alert('hello');</script>";%> | 当escapeXml为false，不会转换“<”、“>”。这可能会受到JavaScript攻击。

    <!-- 防止script攻击 -->
	<%
		request.setAttribute("code", 
		"<script>alert('哈哈');</script>");
	%>
    <c:out value="${code }" />


set标签 | 功能介绍
---|---
<c:set var=”a” value=”hello”/> | 在pageContext中添加name为a，value为hello的数据
<c:set var=”a” value=”hello” scope=”session”/> | 在session中添加name为a，value为hello的数据。

    var:变量名
    value：变量值，可以是EL表达式
    scope:域，默认为page，可选值：page、request、session、application

(2)**remove**

    <remove> :删除域变量
    var:变量名
    scope：如果不给出scope，表示删除所有域中的该变量名称的变
    量如果指定了域，只删除该域中的变量
    
```html
    <c:remove var="a" scope=”page”/> 删除pageContext中name为a的数据 
```
```html
删除所有域中name为a的数据！
<%
   pageContext.setAttribute("a","pageContext");
   request.setAttribute("a","session");
   session.setAttribute("a","session");
   application.setAttribute("a","application");
  %>
    <c: remove var="a"/>
    <c: out value="${a}" default="none"/>
```

(3)**url**

    1. > value:制定一个路径！他会在路径前面自动添加项目名
    <c:url value="/index.jsp" />它会输出/web13_1/index.jsp
    (web13_1是我的项目名)
    2. > 可以用来给URL后边添加参数，例如：
    <c:url value="index,jsp">
        <c:param name="username" value="张三"> <!--可以为参数进行url编码-->
    </c:url>
    结果为：/web13_1/index.jsp?username=%E5%BC%A0%E4%B8%89
    3. > var:指定变量名，一旦添加了这个属性，那么url标签就
    不会在输出到页面，而是把生成的url保存到域中
    4. > scope :它与var一起使用用来保存url
***例子：***
```html
<c:url value="/Servlet_a">
结果：/web13_1/Servlet_a
<pageContext.request.contextPath>/Servlet_a
结果：/web13_1/Servlet_a
```
(4)**if**

    if标签的test属性必须是一个boolean类型的值，如果test的值
    为true，那么执行if标签的内容，否则不执行
```html
<c:set var="a" value="hello"/>  
<c:if test="${not empty a }">  <!--not empty a:如果a不为空 -->
    <c:out value="${a }"/>  
</c:if>  

<c:if test="${布尔类型 }">...</c:if>当test为真时，执行标签提内容
```

(5)**choose**
对应Java中的if/else if/.../else
```html
<c:set var="score" value="${param.score }"/>  
<!--创建一个名为score的参数，赋值给score变量-->
<c:choose>  
    <c:when test="${score > 100 || score < 
    0}">错误的分数：${score }</c:when>  
    <c:when test="${score >= 90 }">A级</c:when>  
    <c:when test="${score >= 80 }">B级</c:when>  
    <c:when test="${score >= 70 }">C级</c:when>  
    <c:when test="${score >= 60 }">D级</c:when>  
    <c:otherwise>E级</c:otherwise>  
</c:choose>  
```
等同于
```java
if(score > 100 || score < 0) {
    System.out.println("错误的分数"+score);
} else if(....) {
    ....
} else if(....) {
    ....
} else {
    .....
}
```
(6)**forEach**

forEach当前就是循环标签了，forEach标签有多种两种使用方式：

- 使用循环变量，指定开始和结束值，类似for(int i = 1; i <= 10; i++) {}；
- 循环遍历集合，类似for(Object o : 集合)；
- 
***例如***
```html
<c:set var="sum" value="0" />
<!--定义一个sum，值为0-->
<c:forEach var="i" begin="1" end="10">
    <c:set var="sum" value="${sum + i}" />   
</c:forEach> 
```
***相当于***
```java
int sum = 0;
for(int i =1; i<=10; i++) {
    sum = sum + i;
}
```
***属性介绍***
- var :循环变量
- begin : 设置循环变量从几开始
- end :设置循环变量到几结束
- step : 设置步长！等同于Java中的i++,i+=2..默认为1

***输出数组或集合方式***
```html
<%  
String[] names = {"zhangSan", "liSi", "wangWu", "zhaoLiu"};  
pageContext.setAttribute("ns", names);  
%>  
<c:forEach var="item" items="${ns }">  
    <c:out value="name: ${item }"/><br/>  
</c:forEach>  
```
***遍历List***
```
<%  
    List<String> names = new ArrayList<String>();  
    names.add("zhangSan");  
    names.add("liSi");  
    names.add("wangWu");  
    names.add("zhaoLiu"); 
    
    要先添加到域中才能使用标签遍历，因为List不是域对象，下同！！
    pageContext.setAttribute("name", names);  
%>  
<c:forEach var="name" items="${names }">  
    <c:out value="name --> ${name }"/><br/>  
</c:forEach>  
```
**属性：**
- items ：指定要循环谁、它可以是一个数组或集合
- var ：把数组或集合中的每个元素赋值给var指定的变量。

***等同于***
```java
for(String name : names) {
    ....
}
```
==▲▲▲千万注意：items="${names }"的 } 后边不能有空格，会导致输出不出来，一旦出现这种问题会很难找到错误在哪！！！==
*****
***遍历Map***
```
<%  
    Map<String,String> stu = new LinkedHashMap<String,String>();  
    stu.put("number", "N_1001");  
    stu.put("name", "zhangSan");  
    stu.put("age", "23");  
    stu.put("sex", "male");  
    pageContext.setAttribute("stu", stu);  
%>  
<c:forEach var="item" items="${stu }">  
    <c:out value="${item.key }: ${item.value }"/><br/>  
</c:forEach> 
```
****
### forEach循环状态
**forEach标签还有一个属性：varStatus，这个属性用来指定接收“循环
状态”的变量名，例如：<forEach varStatus=”vs” 
…/>，这时就可以使用vs这个变量来获取循环的状态了。**

- count：int类型，当前以遍历元素的个数；
- index：int类型，当前元素的下标；
- first：boolean类型，是否为第一个元素；
- last：boolean类型，是否为最后一个元素；
- current：Object类型，表示当前项目。

***例如***
```
<c:forEach var="item" items="${ns }" varStatus="vs">  
    <c:if test="${vs.first }">第一行：</c:if>  
    <c:if test="${vs.last }">最后一行：</c:if>  
    <c:out value="第${vs.count }行: "/>  
    <c:out value="[${vs.index }]: "/>  
    <c:out value="name: ${vs.current }"/><br/>  
</c:forEach>
```

****
### fmt标签库常用标签
 fmt标签库是用来格式化输出的，通常需要格式化的有时间和数字。
 #### 格式化时间：
 ```html
 <%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt" %>  
......  
<%  
    Date date = new Date();  
    pageContext.setAttribute("d", date);  
%>  
<fmt:formatDate value="${d }" pattern="yyyy-MM-dd HH:mm:ss"/>  
 ```
 ***formatDate属性***
- value ：指定一个Date类型的变量
- pattern ：用来指定输出模板！例如：yyyy-MM-dd HH:mm:ss
#### 格式化数字：
```html
<%  
    double d1 = 3.5;  
    double d2 = 4.4;   
    pageContext.setAttribute("d1", d1);  
    pageContext.setAttribute("d2", d2);  
%>  
<!-- 位数不够会补位-->
<fmt:formatNumber value="${d1 }" pattern="0.00"/><br/>  

<!-- 位数不够不补位-->
<fmt:formatNumber value="${d2 }" pattern="#.##"/>  
```

### 1、自定义标签
#### 继承关系


```
graph TD
父接口JspTag-->Tag
父接口JspTag-->SimpleTag
```

#### 1.1步骤：
其实我们在JSP页面中使用标签就等于调用某个对象的某个方法一样，例如：<c:if test=””>，这就是在调用对象的方法一样。自定义标签其实就是自定义类一样！

- 定义标签处理类：必须是Tag或SimpleTag的实现类；
- 编写标签库描述符文件（TLD）；
```
SimpleTag接口是JSP2.0中新给出的接口，用来简化自定义标签，所
以现在我们基本上都是使用SimpleTag。Tag是老的，传统的自定义
标签时使用的接口，现在不建议使用它了。
```
#### 1.2　SimpleTag接口介绍：
SimpleTag接口内容如下：

- void doTag()：每次执行标签时都会执行这个方法
- JspTag getParent()：获取父标签（非生命周期方法）
- void setParent(JspTag parent)：设置父标签
- void setJspContext(JspContext context)：设置jsp上下文对象，儿子是PageContext
- void setJspBody(JspFragment jspBody)：设置标签体对象；
其中doTag()会在其他三个方法之后被Tomcat调用。

#### 1.3 tld配置
tld文件一般都放WEB-INF之下，这样保证客户端访问不到
```xml
<?xml version="1.0" encoding="UTF-8" ?>

<taglib xmlns="http://java.sun.com/xml/ns/j2ee"
  xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
  xsi:schemaLocation="http://java.sun.com/xml/ns/j2ee
  http://java.sun.com/xml/ns/j2ee/web-jsptaglibrary_2_0.xsd"
  version="2.0">
  <tlib-version>1.0</tlib-version>
  <short-name>it</short-name>
  <uri>http://www.baidu.com/tlds/tag-1.0</uri>
  
	<!-- 配置标签 -->
	<tag>
    	<!-- 指定当前标签的名称-->
		<name>myTag1</name> 
		<!-- 指定当前标签的标签处理类 -->
		<tag-class>tag.MyTag1</tag-class>
		<!-- 指定标签体的类型，我们这里使用的是空标签 -->
		<body-content>empty</body-content>
	</tag>
  </taglib>
```
#### 1.4 指定TLD标签的位置
```
导标签库
<%@ taglib prefix="it" uri="/WEB-INF/tlds/tag.tld" %>
```
#### 1.5 使用自定义标签
```
<it:myTag1/>
```
结果：hello Tag

****
### 2.自定义标签进阶


#### 2.1　继承SimpleTagSupport
　　继承SimpleTagSuppport要比实现SimpleTag接口方便太多了，现在你只需要重写doTag()方法，其他方法都已经被SimpleTagSuppport完成了。
```java
public class MyTag2 extends SimpleTagSupport {

	@Override
	public void doTag() throws JspException, IOException {
		this.getJspBody();
		this.getJspContext().getOut().print("再Hello 一次Tag");
	}
}
```
#### tld文件同上配置
#### 使用之
```html
<it:myTag2/>
```

#### 2.2　有标签体的标签
我们先来看看标签体内容的可选值：
<body-content>元素的可选值有：

- empty：无标签体。
- JSP：传统标签支持它，SimpleTag已经不再支持使用<body-content>JSP</body-content>。标签体内容可以是任何东西：EL、JSTL、<%=%>、<%%>，以及html；==不在使用==
- scriptless：标签体内容不能是Java脚本，但可以是EL、JSTL等。在SimpleTag中，如果需要有标签体，那么就使用该选项；
- tagdependent：标签体内容不做运算，由标签处理类自行处理，无论标签体内容是EL、JSP、JSTL，都不会做运算。这个选项几乎没有人会使用！==几乎没人用==


#### 自定义有标签体的标签需要：
获取标签体对象：JspFragment jspBody = getJspBody();；
把标签体内容输出到页面：jspBody.invoke(null)；
tld中指定标签内容类型：scriptless。

####  2.3　不执行标签下面的页面内容
　　如果希望在执行了自定义标签后，不再执行JSP页面下面的东西，
那么就需要在doTag()方法中使用SkipPageException。

也就是Tomcat会调用标签处理类的doTag()方法，然后Tomcat会的到
SkipPageException，他会跳过本页面的其他内容
```java
public class MyTag4 extends SimpleTagSupport{

    @Override
    public void doTag() throws JspException, IOException {
    	//向页面输出一句话
    	this.getJspContext().getOut().print("只能看到我，下面的看不到");
    	throw new SkipPageException();
    	//抛出这个异常后，再本标签后面的内容将看不到
    }

}
```
```html
<tag>
	<name>myTag4</name>
	<tag-class>tag.MyTag4</tag-class>
	<body-content>empty</body-content>
</tag>
```
```html
<h1><it:myTag4/></h1>
<hr/>
<h1><it:myTag1/></h1><br/>
<h1><it:myTag2/></h1><br/>
<hr/>
```

#### 2.4　带有属性的标签
一般标签都会带有属性，例如<c:iftest=””>，其中test就是一个boolean类型的属性。完成带有属性的标签需要：
- 在处理类中给出JavaBean属性（提供get/set方法）；
- 在TLD中部属相关属性。

**步骤**
- 1.给你的标签处理类添加属性
```
标签处理类添加属性，属性至少要有且要有一个set方法，这个set方
法会在doTag()方法之前tomcat执行，所以在doTag中就可以使用属性了
```
- 2.在tld文件中对属性进行配置
```xml
tag>
	<name>myTag5</name>
	<tag-class>tag.MyTag5</tag-class>
	<!-- 有标签体了  要使用scriptless -->
	<body-content>scriptless</body-content>
	<attribute>
		<name>test</name>
		<required>true</required>
		<!-- runtime experition value指定属性是否可以使用EL-->
		<rtexprvalue>true</rtexprvalue>
	</attribute>
</tag>
```
```java
public class MyTag5 extends SimpleTagSupport{
    private boolean test;
    /*
     * 这个方法会由tomcat来调用，并且在doTag()之前
     */
    public void setTest(boolean test) {
    	this.test = test;
    }
    @Override
    public void doTag() throws JspException, IOException {
    	if(test){//自己写一个if语句，在标签体执行时使用
    		/*
    		 * 执行标签体
    		 */
    		//如果传递的输出流为null，表示使用的默认的就是房前页面的out
    		this.getJspBody().invoke(null);
    	}
    }
	
}
```
```html
<body>
<!-- 看xxx的属性值存不存在，如果不为空就执行，为空就不执行 -->
<it:myTag5 test="${empty param.xxx }">
	<h1><it:myTag4/></h1>
</it:myTag5>

<h1><it:myTag1/></h1><br/>
<h1><it:myTag2/></h1><br/>
<hr/>
<%
	request.setAttribute("xxx", "zhangsan");
%>
<h1>
    <it:myTag3>
    ${xxx }
    </it:myTag3>
</h1>

<h3>
    <it:myTag3>
    我是张三的大哥
    </it:myTag3>
</h3>
</body>
```
***当我访问http://localhost:8080/web13_2/index.jsp时执行结果为：***

    只能看到我，下面什么都没有
    
***当我访问http://localhost:8080/web13_2/index.jsp?xxx=XXX时执行结果为：***

    Hello Tag
    再Hello 一次Tag

    ***********
    zhangsan 
    *********** 
    ***********
    我是张三的大哥 
    ***********