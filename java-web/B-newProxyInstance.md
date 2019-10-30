## newProxyInstance动态代理
### 1.只学一个方法
- 方法作用：在运行时，动态创建一组指定接口的实现类对象（在运行时，创建实现指定接口的一组对象）
```java
interface A{
	
}
interface B{
	
}
Object obj = 方法(new Class[] {A.class,B.class})
obj它实现了A和B两个接口

class Myclass implements A,B{
	
}
使用时：new Myclass();

动态代理能实现在运行时实现
```
---------------------------------------------------
### 2.动态代理的作用
OOP叫做面向对象编程
- 最终是学习AOP（面向切面编程），它与装饰着模式有点相似，它比装饰着模式还要灵活！

```java
Object proxyObject = Proxy.newProxyInstance(ClassLoader classLoader, Class[] interfaces, InvocatopmHandler h)

> 1.方法作用：动态创建实现了interfaces数组中的所有指定接口的实现类对象
参数：
> 1.ClassLoader：类加载器
	- 它是用来加载类的，把calss文件加载到内存，形成class对象
> 2.Calss[] interfaces:执行要实现的接口们
> 3.InvocationHandler:代理对象的所有方法(个别不执行，getClass())都会调用InvocationHandler的invoke()方法
```

### InvocationHandler
public Object invoke(Object proxy, Method method, Objectp[] args);

- 这个invoke()方法什么时候被调用？在调用代理对象所实现接口中的方法时

- Object proxy:当前对象，即代理对象，再调用谁的方法
- Method method:当前被调用的方法（目标方法）
- Object[] args:实参

-----------------------
目标对象：被增强的对象
代理对象：需要目标对象，然后再目标对象上添加了增强后的对象
目标方法：增强的容

代理对象 = 目标对象 + 增强

增强、通知
织入
切点