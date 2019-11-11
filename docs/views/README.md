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
          url: '/views/linux/linux.html',
          title: 'Linux',
          content: 'linux 学习笔记'
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