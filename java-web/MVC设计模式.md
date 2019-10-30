
```
graph TD
A[控制器&#58<br/>接受用户请求<br/>调用模型响应请求<br/>选择视图显示响应结果]-->B[<span style='color:red'>选择视图&#58</span><br/>&#40视图&#41<br/>解释模型<br/>接受数据更新请求<br/>发送用户输入给控制器<br/>允许控制器选择视图]
A-->C[<span style='color:red'>业务处理&#58</span><br/>&#40模型&#41<br/>封装应用程序状态<br/>响应状态查询<br/>处理业务流程<br/>通知视图业务状态更新]
```
### MVC
它不是Java独有的，所有的B/S结构的项目都在使用它：
M-->model 模型(自己写代码)
V-->View 视图（jsp）
C-->Cotroller 控制器(Servlet)

***MVC的全名是: Model View- Controller，是模型(model)－视图(view)－控制器(controller)的缩写，是一种软件设计典范。它是用一种业务逻辑、数据与界面显示分离的方法来组织代码，将众多的业务逻辑聚集到一个部件里面，在需要改进和个性化定制界面及用户交互的同时，不需要重新编写业务逻辑，达到减少编码的时间***
#### 使用的MVC的目的：
在于将M和V的实现代码分离，从而使同一个程序可以使用不同的表现形式。比如Windows系统资源管理器文件夹内容的显示方式，下面两张图中左边为详细信息显示方式，右边为中等图标显示方式，文件的内容并没有改变，改变的是显示的方式。不管用户使用何种类型的显示方式，文件的内容并没有改变，达到M和V分离的目的。 
[image](http://note.youdao.com/noteshare?id=2bbfad88ebb0073a644ad237bee2cf8d&sub=203534CFB9314810BAD1693F08181BEE)
****
#### JavaWeb三层架构
- Web层-->与web相关的内容(Servlet,JSP，servlet相关的API:request、response、session、ServletContext)
- 业务层-->业务对象(Service)
- 数据层-->操作数据库(DAO Access Object)(所有对数据库的操作不能跳出DAO)
[点击查看图片](http://note.youdao.com/noteshare?id=521a052d56ff447f33660c3a880ac9b4&sub=141C13D40475433E8070EE8940A573A2)