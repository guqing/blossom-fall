1.第一步（得到XMLHttpRequest）
- ajax其实只需要学习一个对象：XMLHttpRequest,如果掌握了它，就掌握了Ajax
- 得到XMLHttpRequest
```
> 大多数浏览器都支持：var xmlHttp = new XMLHttpRequest();
> IE6.0:var xmlHttp = new ActiveXObject("Msxml2.XMLHTTP");
> IE5.5及更早版本的IE:var xmlHttp = new ActiveXObject("Microsoft.XMLHTTP");
```

#### 编写创建XMLHttpRequest对象的函数（业界专业做法）
```
function createXMLHttpRequest(){
   try{
       return new XMLHttpRequest();
   }catch(e){
    try{
       return new ActiveXObject("Msxml2.XMLHTTP");
    }catch(e){
        try{
            return new ActiveXObject("Microsoft.XMLHTTP");
        }catch(e){
            alert("哥们儿，你用的是什么浏览器？");
            throw e;
        }   
    }   
   } 
}
```

2.第二步（打开服务器的连接）
- xmlHttp.open();用来打开与服务器的连接，它需要三个参数：

参数 | 描述
---|---
请求方式 | 可以是GET或POST
请求的URL | 指定服务器端资源，例如：/web23_1/AServlet
请求是否为异步 | 如果为true表示发送异步请求，否则同步请求

- xmlHttp.open("GET","/web23_1/AServlet",true)

#### 3.第三步（发送请求）
- xmlHttp.send(null):如果不给可能会造成部分浏览器无法发送
> 参数：就是请求体内容！如果是GET请求，必须给出null

#### 4. 第四步（）
- 在xmlHttp对象的一个事件上注册监听器：onreadystatechange
- xmlHttp对象一共有五个状态
```
0状态：刚创建还没调用open()方法；
1状态：请求开始，调用了open()方法，但还没调用send()方法
2状态：调用完了send()方法
3状态：服务器已经开始响应，但不表示响应结束了
4状态：服务器响应结束（通常我们只关心这个状态）
```
- 得到xmlHttp对象的状态：
```
var state = xmlHttp.readyState;//可能是0，1，2，3，4
```
- 得到服务器响应的状态码
```
var state = xmlHttp.status;//例如200，404，500
```
- 得到服务器的响应内容
```
var cintent = xmlHttp.responseText;//得到服务器的响应文本格式内容
var content = xmlHttp.responseXML;//得到服务器的响应xml响应的内容，它是Document对象

xmlHttp.onreadystatechange = function(){//xmlHttp的5种状态都会调用本方法
    if(xmlHttp.readyState==4 && xmlHttp.status==200){//双重判断，判断是否为4状态，而且还要判断是否为200
    //获取服务器的响应内容
    var text = xmlHttp.responseText;
    }
}
```

#### 第二类：Ajax发送post请求(如果发送请求时需要带有参数，一般都用POST请求)

- open：xmlHttp.open("POST" ....);
- 添加一步：设置Content-Type请求头：
```
  > xmlHttp.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
  ```
- send：xmlHttp.send("username=zhangSan&password=123");//发送请求时指定请求体


#### 第三例：注册表单之校验用户是否注册！

1. 编写页面：
  * ajax3.jsp
    > 给出注册表单页面
    > 给用户名文本框添加onblur事件的监听
    > 获取文本框的内容，通过ajax4步发送给服务器，得到响应结果
      * 如果为1：在文本框后显示“用户名已被注册”
      * 如果为0：什么都不做！

2. 编写Servlet
-  ValidateUsernameServlet
```
> 获取客户端传递的用户名参数
> 判断是否为it
  * 是：返回1
  * 否：返回0
```
#### 响应内容为xml数据

- 服务器端：
    > 设置响应头：ContentType，其值为：text/xml;charset=utf-8
- 客户端：
    > var doc = xmlHttp.responseXML;//得到的是Document对象！

#### 第五例：省市联动

1. 页面
  <select name="province">
    <option>===请选择省份===</option>
  </select>
  <select name="city">
    <option>===请选择城市===</option>  
  </select>

2. ProvinceServlet
  * ProvinceServlet：当页面加载完毕后马上请求这个Servlet！
    > 它需要加载china.xml文件，把所有的省的名称使用字符串发送给客户端！

3. 页面的工作
  * 获取这个字符串，使用逗号分隔，得到数组
  * 循环遍历每个字符串（省份的名称），使用每个字符串创建一个<option>元素添加到<select name="province">这个元素中

4. CityServlet
  * CityServlet：当页面选择某个省时，发送请求！
  * 得到省份的名称，加载china.xml文件，查询出该省份对应的元素对象！，把这个元素转换成xml字符串，发送给客户端

5. 页面的工作
  * 把<select name="city">中的所有子元素删除，但不要删除<option>===请选择城市===</option>
  * 得到服务器的响应结果：doc！！！
  * 获取所有的<city>子元素，循环遍历，得到<city>的内容
  * 使用每个<city>的内容创建一个<option>元素，添加到<select name="city">
