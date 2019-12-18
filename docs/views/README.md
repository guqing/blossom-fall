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
          content: 'Git 学习笔记',
          thumbnail: '/thumbnail/2134131312313123.jpg'
        },
        {
          url: '/views/spring/spring.html',
          title: 'Spring',
          content: 'Spring 学习笔记',
          thumbnail: '/thumbnail/20160910093722279.png'
        },
        {
          url: '/views/mybatis/mybatis.html',
          title: 'Mybatis',
          content: 'Mybatis 学习笔记',
          thumbnail: '/thumbnail/e66_w1080_h692.jpeg'
        },
        {
          url: '/views/springmvc/springmvc.html',
          title: 'Springmvc',
          content: 'Springmvc 学习笔记',
          thumbnail: '/thumbnail/20160910093722279.png'
        },
        {
          url: '/views/linux/linux.html',
          title: 'Linux',
          content: 'linux 学习笔记',
          thumbnail: '/thumbnail/14131324131311331.jpg'
        },
        {
          url: '/views/redis/redis.html',
          title: 'Redis',
          content: 'Redis 学习笔记',
          thumbnail: '/thumbnail/redis-logo.jpg'
        },
        {
          url: '/views/springboot/springboot.html',
          title: 'SpringBoot',
          content: 'SpringBoot 学习笔记',
          thumbnail: '/thumbnail/2fd74dcb35be6d44.jpg'
        },
        {
          url: '/views/vue/vue.html',
          title: 'Vuejs',
          content: 'Vuejs 学习笔记',
          thumbnail: '/thumbnail/5o8gp7zatp.png'
        },
        {
          url: '/views/lucene-solr/luceneAndSolr.html',
          title: 'Lucene和Solr',
          content: 'Lucene和Solr的学习笔记',
          thumbnail: '/thumbnail/1476656132-7894.jpg'
        },
        {
          url: '/views/docker/docker.html',
          title: 'Docker',
          content: 'Docker 学习笔记',
          thumbnail: '/thumbnail/1hl1evnkof.jpeg'
        }]
    }
  }
}
</script>
