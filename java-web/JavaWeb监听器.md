### 三大组件
- Servlet
- Listener
- Filter

### Listener：监听器
- 初次相见：AWT
- 二次相见：SAX解析

### 监听器：
- 它是一个接口
- 内容由我们来实现
- 需要注册，例如注册在按钮上
- 监听器中的方法，会在特定时间发生时被调用

### 观察者：
- 事件源
    > 小偷
- 事件
    > 偷东西
- 监听器
    > 警察
    > 
    > 监听器中的方法：抓捕

### JavaWeb中的监听器
#### 1. 事件源:三大域
```
> ServletContex
    ->生命周期监听：ServletContextListener,它有两个方法，一个在出
        生时调用，一个在死亡时调用
    ->属性监听：ServletContextAttributeListener,它有三个方法，
     一个在添加属性时调用，一个在替换属性时调用，最后一个是
        在替换属性时调用
> HttpSession
    ->生命周期监听：HttpSessionListener,它有两个方法，一个在出生时
        调用，一个在死亡时调用
    ->属性监听：HttpSessionAttributeListener,它有三个方法，一
        个在添加属性时调用，一个在替换属性时调用，最后一个是在
        替换属性时调用
> ServletRequest
    ->生命周期监听：ServletRequestListener,它有两个方法，一个在出
        生时调用，一个在死亡时调用
    ->属性监听：ServletRequestAttributeListener,它有三个方法，
        一个在添加属性时调用，一个在替换属性时调用，最后一个是
        在替换属性时调用
```
#### 2. JavaWeb中完成编写监听器
```
> 写一个监听器类，要求必须去实现某个监听器接口
> 注册，在web.xml中配置去完成注册
```
web.xml中配置
```
<listener>
   <listener-class>web.listener.BListener</listener-class>
</listener>
```
#### 3.事件对象
- ServletContextEvent:ServletContext getServletContext()
- HttpSessionEvent:HttpSession getSession()
- ServletRequest:
```
ServeltContext getServletContext()
ServletRequest getServletRequest()
```
- ServletContextAttributeEvent:
- HttpSessionBuildingEvebt：略
- ServeltRequestAttributeEvent:略

#### 感知监听（都与HttpSession相关）
- 它用来添加到JavaBean上，而不是添加到三大域上
- 这两个监听器都不需要在web.xml中注册
HttpSessionBindingListener:添加到JavaBean上，JavaBean就知道自己是否添加到session中