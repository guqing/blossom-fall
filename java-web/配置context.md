```xml
<?xml version='1.0' encoding='utf-8'?>

<Context reloadable="true">

    <!-- Default set of monitored resources -->
    <WatchedResource>WEB-INF/web.xml</WatchedResource>

    <!-- Uncomment this to disable session persistence across Tomcat restarts -->
    <!--
    <Manager pathname="" />
    -->

    <!-- Uncomment this to enable Comet connection tacking (provides events
         on session expiration as well as webapp lifecycle) -->
    <!--
    <Valve className="org.apache.catalina.valves.CometConnectionManagerValve" />
    -->

</Context>
```
就加了这么一句：reloadable="true" 之后就算修改了servlet也不用在
重启tomcat了，只适合在开发阶段使用