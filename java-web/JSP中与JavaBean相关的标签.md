### JSP中与JavaBean相关的标签
<jsp:useBean>

    作用：创建或查找bean
    --> <jsp:useBean id="user1 class="domain.user" />
    
    还可以指定在哪一个域来创建:
    <jsp:useBean id="user1" class="domain.user" scope="session"/>
        -->在session域中查找名为user1的bean，如果不存在就创建。
    
<jsp:setPropperty>

    <jsp:setPropperty property="username" name="user1" value="admin"/>
    property:属性名
    value:属性值
    作用:设置bean为user1的属性名为username的属性值为admin
<jsp:getPropperty>

    <jsp:getPropperty property="username" name="user1"/>
    获取user1这个JavaBean的username属性