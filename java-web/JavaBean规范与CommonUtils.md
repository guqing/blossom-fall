### JavaBean
- JavaBean必须要为成员提供get/set方法（两者只提供一个也是可以的）
- 比需要有默认的构造器即无参构造方法
- 一般对于具有get/set方法的成员变量称之为属性
- 其实就算一个属性没有对应的成员变量，只有get/set方法也是可以的
属性的名字就是get/set方法，去除get/set后再把首字母小写了

### 总结就是
JavaBean规范
- 必须要有默认构造器
- 提供get/set方法，如果只有get那么这个属性就是只读属性
- 属性：有get/set方法的成员，只有get/set方法属性名称由get/set
方法来决定而不是成员名称
- 方法名称满足了一定的规范那么它就是属性

### JavaBeanUtils的使用
```java
@Test
public void BeanUtilsTest1(){
    String className = "domain.Person";
    Class clazz = Class.forName(className);
    Object bean = clazz.newInstance();
    
    //设置属性
    BeanUtils.setProperty(bean, "name", "张三");
    BeanUtils.setProperty(bean, "age", "28");
    BeanUtils.setProperty(bean, "gender", "男");
    
    System.out.println(bean);
}

```

### 把map中的数据直接封装到bean中
```java
/*
*Map:{"username":"zhangsan","password":"123"}
*我们要把Map的数据封装到一个JavaBean中，要求Map的键与Bean
*的属性名相同
*/
@Test
public void BeanUtilsTest2(){
    Map<String,String> map = new HashMap<String,String>;
    map.put("username","zhangsan");
    map.put("password","123");
    
    User user = new User();
    //把map里的数据封装到了User里面去
    BeanUtils.populate(user,map);
}
```
```java
Class User{
    private String username;
    private String password;
    
    public User(){
        
    }
    
    public void setUserName(String username){
        this.username = username;
    }
    public String getUserName(){
        return username;
    }
    
    public void setPassWord(String password){
        this.password = password;
    }
    public String getPassWord(){
        return password;
    }
}
```

### 把map转换成指定类型JavaBean对象
```java
import java.util.Map;
import java.util.UUID;

public class CommonUtils{
    /*
    *生成不重复的32为长的大写字符串
    */
    public static String uuid(){
        return UUID.randomUUID().toString().replace("-","").toUpperCase();
    }
    
    /*把Map转换成指定类型的JavaBean对象
    */
    public static <T> T toBean(Map map,Class<T> clazz){
       try{
            /*创建指定的JavaBean对象*/
            T bean = clazz.newInstance();
            
            //把数据封装到JavaBean中
            Beanutils.populate(bean,map);
            
            //返回JavaBean对象
            return bean;
            
        }catch(Exception e){
            throw new RuntimeException(e);
        }
    }
}
```
### 使用刚刚创建的CommonUtils工具类
```java
@Test
public void BeanUtilsTest3(){
    Map<String,String> map = new HashMap<String,String>;
    map.put("username","zhangsan");
    map.put("password","123");
    
    User user = CommonUtils.toBean(map,User.calss);
    
    System.out.println(user);
}
```
使用这个之后将来可以使用request.getParameterMap();方法直接蒋表单数据变成Map封装到JavaBean中去，非常之有用