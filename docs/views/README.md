---
sidebar: none
---

<Card :dataSource="dataSource"></Card>

<script>
export default {
  data() {
    return {
      dataSource: [
        {
          url: '/views/javaweb/javaweb.html',
          title: 'Java web基础',
          content: 'Java web 基础学习笔记',
          thumbnail: '/thumbnail/c36a66235ba6e80fd6.jpg'
        },
         {
          url: '/views/git/git.html',
          title: 'Git',
          content: 'Git是一个免费的开源的分布式版本控制系统，旨在快速高效地处理从小型到大型项目的所有内容。',
          thumbnail: '/thumbnail/2134131312313123.jpg'
        },
        {
          url: '/views/java8/features.html',
          title: 'Java 8 新特性',
          content: 'Java 8是 Java 语言开发的一个主要版本。 Oracle 公司于2014年3月18日发布Java 8 ，它支持函数式编程，新的JavaScript引擎，新的日期 API，新的Stream API 等。',
          thumbnail: '/thumbnail/2293557818,998570268.jpg'
        },
        {
          url: '/views/spring/spring.html',
          title: 'Spring',
          content: 'Spring是一个轻量级控制反转(IoC)和面向切面(AOP)的容器框架，为依赖项注入，事务管理，Web应用程序，数据访问，消息传递等提供核心支持。',
          thumbnail: '/thumbnail/20160910093722279.png'
        },
        {
          url: '/views/mybatis/mybatis.html',
          title: 'Mybatis',
          content: 'MyBatis 是一款优秀的持久层框架，它支持定制化 SQL、存储过程以及高级映射。MyBatis 避免了几乎所有的 JDBC 代码和手动设置参数以及获取结果集。',
          thumbnail: '/thumbnail/e66_w1080_h692.jpeg'
        },
        {
          url: '/views/springmvc/springmvc.html',
          title: 'Springmvc',
          content: '框架提供了模型-视图-控制的体系结构和可以用来开发灵活、松散耦合的 web 应用程序的组件。',
          thumbnail: '/thumbnail/20160910093722279.png'
        },
        {
          url: '/views/linux/linux.html',
          title: 'Linux',
          content: 'Linux是一套免费使用和自由传播的类Unix操作系统，是一个基于POSIX和Unix的多用户、多任务、支持多线程和多CPU的操作系统。',
          thumbnail: '/thumbnail/14131324131311331.jpg'
        },
        {
          url: '/views/redis/redis.html',
          title: 'Redis',
          content: 'Redis是一个开源的内存中的数据结构存储系统，用作数据库，缓存和消息代理。',
          thumbnail: '/thumbnail/redis-logo.jpg'
        },
        {
          url: '/views/springboot/springboot.html',
          title: 'SpringBoot',
          content: 'Spring Boot是一个为了简化Spring开发的框架。用来监护spring应用开发，约定大于配置，去繁就简，just run 就能创建一个独立的，产品级的应用。',
          thumbnail: '/thumbnail/2fd74dcb35be6d44.jpg'
        },
        {
          url: '/views/vue/vue.html',
          title: 'Vuejs',
          content: 'Vue是一套用于构建用户界面的渐进式框架。与其它大型框架不同的是，Vue 被设计为可以自底向上逐层应用。它的核心库只关注视图层，不仅易于上手，还便于与第三方库或既有项目整合。',
          thumbnail: '/thumbnail/5o8gp7zatp.png'
        },
        {
          url: '/views/lucene-solr/luceneAndSolr.html',
          title: 'Lucene和Solr',
          content: 'Lucene提供基于Java的索引和搜索技术，以及拼写检查，命中突出显示和高级分析/令牌化功能。而Solr是建立在Apache Lucene之上的流行，快速，开源的企业级搜索平台。',
          thumbnail: '/thumbnail/1476656132-7894.jpg'
        },
        {
          url: '/views/docker/docker.html',
          title: 'Docker',
          content: 'Docker是一个开源的引擎，可以轻松的为任何应用创建一个轻量级的、可移植的、自给自足的容器。开发者在电脑上编译测试通过的容器可以批量地在生产环境中部署。',
          thumbnail: '/thumbnail/1hl1evnkof.jpeg'
        }]
    }
  }
}
</script>
