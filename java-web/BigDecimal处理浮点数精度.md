# BigDecimal处理浮点数精度


```java
public void testBigDecimal(){
  /*
   * 创建BigDecimal必须使用String构造器
   */
   BigDecimal d1 = new BigDecimal("2.0");
   BigDecimal d2 = new BigDecimal("1.1");
   BigDecimal d3 = d1.subtract(d2);
  System.out.println(d3);
}
结果为：0.9，如果不使用这个结果为0.8999999999....

```

