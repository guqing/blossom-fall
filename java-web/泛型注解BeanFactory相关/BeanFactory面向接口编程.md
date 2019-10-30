# BeanFactory面向接口编程


## xml如下
```xml
<?xml version="1.0" encoding="UTF-8"?>
<beans>
	<!-- 使用以上测试过的功能实现Dao面向接口编程 -->
	<bean id="stuDao" className="guqing.dao.impl.StudentImpl">
	</bean>
	
	<!-- 工厂有能力帮我们办到这一系列问题，谁调用service谁就要传递Dao -->
	<bean id="stuService" className="guqing.service.impl.StudentServiceImpl">
		<property name="studentDao" ref="stuDao"/><!-- 把这个Dao的bean赋给Service -->
	</bean>
</beans>
```
### 文档结构如下
[文档结构](图片/QQ截图20180927093347.png)
```java
编写Dao接口
StudentDao
创建impl实现包及
  StudentImpl类
  StudentImpl2类
```
StudentDao
```java
public interface StudentDao {
	void add(Student stu);
	void update(Student stu);
}

```
StudentImpl
```java
public class StudentImpl implements StudentDao{

	@Override
	public void add(Student stu) {
		System.out.println("StudentImpl.add()...");
	}

	@Override
	public void update(Student stu) {
		System.out.println("StudentImpl.update().....");
	}
	
}
```
配置xml
```xml
	<!-- 使用以上测试过的功能实现Dao面向接口编程 -->
	<bean id="stuDao" className="guqing.dao.impl.StudentImpl">
	</bean>
```
如何使用
```java
	@Test
	public void test1(){
		BeanFactory bf = new BeanFactory("beans.xml");
		//原本是对于实现类
		//StudentImpl stuImpl = (StudentImpl) bf.getBean("stuDao");
		//但是依赖接口以后，不在依赖具体的实现类
		StudentDao stuDao = (StudentDao) bf.getBean("stuDao");
		stuDao.add(null);
		stuDao.update(null);
	}
```

当想要切换实现类时只需将配置文件dao.impl.StudentImpl改为dao.impl.StudentImpl2即可

### Service
- 创建Service接口StudentService
- 实现类StudentServiceImpl

```java
接口
public interface StudentService {
	void login();
}

```
- Service实现类

```java

public class StudentServiceImpl implements StudentService{
	private StudentDao studentDao = null; 
	
	//谁调用我service方法，谁就需要先调用本方法提供Dao
	public void setStudentDao(StudentDao studentDao) {
		this.studentDao = studentDao;
	}


	@Override
	public void login() {
		studentDao.add(null);
		studentDao.update(null);
	}

}
```
在service实现类中不创建Dao对象，而是由谁使用谁创建，提供一个setStudentDao的方法，
然后配置Bean工厂，这一项工厂会自动完成
```java
	<!-- 工厂有能力帮我们办到这一系列问题，谁调用service谁就要传递Dao -->
	<bean id="stuService" className="guqing.service.impl.StudentServiceImpl">
		<property name="studentDao" ref="stuDao"/><!-- 把这个Dao的bean赋给Service -->
	</bean>

```
### 使用Service

```java
	@Test
	public void test2(){
		BeanFactory bf = new BeanFactory("beans.xml");
		StudentService service = (StudentService) bf.getBean("stuService");
		service.login();
	}
```
如果想切换实现类只需要将service.impl.StudentServiceImpl切换为其他比如service.impl.StudentServiceImpl2即可完成不许做任何改动