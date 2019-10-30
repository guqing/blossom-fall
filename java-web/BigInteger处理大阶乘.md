# BigInteger处理大阶乘

```
不可变的任意精度的整数。所有操作中，都以二进制补码形式表示 BigInteger
（如 Java 的基本整数类型）。BigInteger 提供所有 Java 的基本整数操作
符的对应物，并提供 java.lang.Math 的所有相关方法。另外，BigInteger 
还提供以下运算：模算术、GCD 计算、质数测试、素数生成、位操作以及一些
其他操作。

算术运算的语义完全模仿 Java 整数算术运算符的语义，
如 _The Java Language Specification_ 中所定义的。
例如，以零作为除数的除法抛出 ArithmeticException，而负数除以正数的
除法则产生一个负（或零）的余数。Spec 中关于溢出的细节都被忽略了，
因为 BigIntegers 所设置的实际大小能适应操作结果的需要。

位移操作的语义扩展了 Java 的位移操作符的语义以允许产生负位移距离。
带有负位移距离的右移操作会导致左移操作，反之亦然。忽略无符号的右位
移运算符（>>>），因为该操作与由此类提供的“无穷大的词大小”抽象结合使用时毫无意义。
```

```java
public void testBigInteger() {
  //sum=1
  BigInteger sum = BigInteger.valueOf(1);
  for(int i=1;i<100;i++){
    //将i包装成BigInteger类型
    BigInteger bi = BigInteger.valueOf(i);
    sum = sum.multiply(bi);//sum = sum * bi;
    
  }
  System.out.println(sum);
}
```
