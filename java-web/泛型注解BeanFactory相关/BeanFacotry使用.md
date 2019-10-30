# BeanFactory的使用

### 通过工厂获得对象，beanFactory

```java
面向接口编程
创建Dao接口
创建Dao的实现类DaoImpl
Servcie接口
Service的实现类
ServiceImpl
```

```java
如何使用：
第一步导出依赖：
itcast-framework-1.3.4.jar
commons-beanutils-1.8.3.jar
commons-logging-1.1.1.jar
dom4j-src-1.6.1.jar
jaxen-1.1-beta-6.jar

创建beans.xml配置文件(查看day27_3)
```

```java
    @Test
	public void test1(){
		/*
		 * 1.创建工厂，创建时需要给工厂指定配置文件
		 * 2，从工厂中获取bean对象
		 */
		BeanFactory bf = new BeanFactory("beans.xml");
		Student stu1 = (Student) bf.getBean("stu1");
		//Student stu2 = (Student) bf.getBean("stu1");
		//System.out.println(stu1==stu2);//true表明只创建一个，时单类的

	}
```

```java
  /**
	* @Title: test2  
	* @Description: bean与bean的关联  
	* @param 
	* @return void
	* @throws
	 */
	@Test
	public void test2(){
		/*
		 * 1.创建工厂，创建时需要给工厂指定配置文件
		 * 2，从工厂中获取bean对象
		 */
		BeanFactory bf = new BeanFactory("beans.xml");
		Student stu1 = (Student) bf.getBean("stu1");
		System.out.println(stu1.getTeacher());
	}
	
```

```java
	/**
	* @Title: test2  
	* @Description: 测试不同学生同一个老师看创建几个老师对象  
	* @param 
	* @return void
	* @throws
	 */
	@Test
	public void test3(){
		/*
		 * 1.创建工厂，创建时需要给工厂指定配置文件
		 * 2，从工厂中获取bean对象
		 */
		BeanFactory bf = new BeanFactory("beans.xml");
		Student stu1 = (Student) bf.getBean("stu1");
		Student stu2 = (Student) bf.getBean("stu2");
		System.out.println(stu1.getTeacher()==stu2.getTeacher());//结果为：true
	}
```

### bean

```java
/**  
* <p>Title: Student.java</p>  
* <p>Description: </p>  
* <p>Copyright: Copyright (c) 2018</p>  
* @author guqing   
* @date 2018年9月26日  
* @version 1.0  
*/ 
package guqing.domain;

/**  
* <p>Title: Student</p>  
* <p>Description: </p>  
* @author guqin  
* @date 2018年9月26日  
*/
public class Student {
	private String number;
	private String name;
	private String sex;
	private int age;
	private Teacher teacher;

	public Student() {
	}

	
	public Teacher getTeacher() {
		return teacher;
	}
	public void setTeacher(Teacher teacher) {
		this.teacher = teacher;
	}

	public String getNumber() {
		return number;
	}

	public void setNumber(String number) {
		this.number = number;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getSex() {
		return sex;
	}

	public void setSex(String sex) {
		this.sex = sex;
	}

	public int getAge() {
		return age;
	}

	public void setAge(int age) {
		this.age = age;
	}

	@Override
	public String toString() {
		return "Student [number=" + number + ", name=" + name + ", sex=" + sex + ", age=" + age + ", teacher=" + teacher
				+ "]";
	}

}
```

```xml
<?xml version="1.0" encoding="UTF-8"?>
<beans>
	<bean id="stu1" className="guqing.domain.Student">
		<property name="number" value="001"/>
		<property name="name" value="zhangsan"/>
		<property name="sex" value="male"/>
		<property name="age" value="29"/>
		<property name="teacher" ref="t1"/><!-- 引用，ref的值必须是另一个bean的id -->
	</bean>
</beans>
```

```xml
<?xml version="1.0" encoding="UTF-8"?>
<beans>
	<bean id="stu1" className="guqing.domain.Student">
		<property name="number" value="001"/>
		<property name="name" value="zhangsan"/>
		<property name="sex" value="male"/>
		<property name="age" value="29"/>
		<property name="teacher" ref="t1"/><!-- 引用，ref的值必须是另一个bean的id -->
	</bean>

	<!-- 测试同一个老师看创建几个老师对象 -->
	<bean id="stu2" className="guqing.domain.Student">
		<property name="number" value="002"/>
		<property name="name" value="wangwu"/>
		<property name="sex" value="female"/>
		<property name="age" value="30"/>
		<property name="teacher" ref="t1"/>
	</bean>
	</bean>
		<bean id="t1" className="guqing.domain.Teacher">
		<property name="tid" value="teacher2001"/>
		<property name="tname" value="lisi"/>
		<property name="salary" value="1234"/>
	</bean>
</beans>
```
