#### 1. 导包
-> mail.jar
-> actvition.jar
#### 核心类
1.session
1. Session
```
 如果你得到了它，表示已经与服务器连接上了，与Connection的作用相似！
 
得到Session，需要使用Session.getInstance(Properties, Authenticator);
  Properites props = new Properties();
  props.setProperty("mail.host", "smtp.163.com");
  props.setProperty("mail.smtp.auth", "true");

  Authenticator auth = new Authenticator() {
    protected PasswordAuthentication getPasswordAuthentication() {
      return new PasswordAuthentication("itcast_cxf", "itcast");
    }
  };
  Session session = Session.getInstance(props, auth);
```
2. MimeMessage
- 它表示一个邮件对象，你可以调用它的setFrom()，设置发件人、设置收件人、设置主题、设置正文！


3. TransPort
- 它只有一个功能，发邮件！