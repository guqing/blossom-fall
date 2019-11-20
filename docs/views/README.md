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
          content: 'Java web 基础学习笔记'
        },
        {
          url: '/views/spring/spring.html',
          title: 'Spring',
          content: 'Spring 学习笔记'
        },
        {
          url: '/views/mybatis/mybatis.html',
          title: 'Mybatis',
          content: 'Mybatis 学习笔记'
        },
        {
          url: '/views/linux/linux.html',
          title: 'Linux',
          content: 'linux 学习笔记'
        },
        {
          url: '/views/redis/redis.html',
          title: 'Redis',
          content: 'Redis 学习笔记'
        },
        {
          url: '/views/springboot/springboot.html',
          title: 'SpringBoot',
          content: 'SpringBoot 学习笔记'
        },
        {
          url: '/views/docker/docker.html',
          title: 'Docker',
          content: 'Docker 学习笔记'
      }]
    }
  }
}
</script>
