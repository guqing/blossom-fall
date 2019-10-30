### 1.EL是JSP内置的表达式语言

- jsp2.0开始，不让在使用Java脚本，而是使用EL表达式和动态标签来替代Java脚本
- EL要替代的是<%=....%>也就是说EL只能做输出！

### 2. EL表达式来读取四大域
- ${xxx},全域查找名为xxx的属性，如果不存在输出空字符串，而不是null
- ${pageContextScope.xxx}、${requestScope.xxx}、${sessionScope.xxx}、${applicationScope.xxx}指定域获取属性

### 3.JavaBean导航

```java
public class Employee {
	private String name;
	private double salary;
	private Address address;
	
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public double getSalary() {
		return salary;
	}
	public void setSalary(double salary) {
		this.salary = salary;
	}
	public Address getAddress() {
		return address;
	}
	public void setAddress(Address address) {
		this.address = address;
	}
	
	public String getHaha(){
		return "哈哈我只是测试一个这个没有属性的get方法能
		不能行";
	}
}

public class Address {
	private String city;
	private String street;
	
	public String getCity() {
		return city;
	}
	public void setCity(String city) {
		this.city = city;
	}
	public String getStreet() {
		return street;
	}
	public void setStreet(String street) {
		this.street = street;
	}
	
	@Override
	public String toString() {
		return "Adress[city="+city+","+"street="+street;
	}
}
```
#### JSP代码：
```html
<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
    <%@page import="domain.*" %>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 
Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
	<head>
		<meta http-equiv="Content-Type" content="text/html; 
		charset=UTF-8">
		<title>Insert title here</title>
	</head>
	<body>
		<% 
			Address address = new Address();
			address.setCity("北京");
			address.setStreet("西三旗");
			
			Employee employee = new Employee();
			employee.setName("李筱思");
			employee.setSalary(123456);
			employee.setAddress(address);
			
			request.setAttribute("employee", employee);
		%>
		
		<h3>使用el获取request域的employee</h3>
		
		${requestScope.employee.address.street }<br/>
		<%--这里边这么写不对，这是调用方法才这么写
		requestScope.employee.getAddress().getStreet。
		应该使用JavaBean导航 
		上面那种写法就相当于调用get方法，但是不能写
		成get方法 --%>
		
		<%--去Employee类看gethaha方法 --%>
		${employee.Haha }
		<%--这个也是可以的 
		它满足JavaBean规范只要有get方法没有属性也可以，但是
		不能加参数，加了参数不满足JavaBean规范 --%>
	</body>
</html>
```

输出结果：

    使用el获取request域的employee
    西三旗
    哈哈我只是测试一个这个没有属性的get方法能不能行 
    
