<template>
  <div class="card-wrapper">
    <a :href="item.url" class="card" v-for="(item, index) in dataSource" :key="index">
      <div class="card-title">{{ item.title }}</div>
      <div class="card-content">{{ item.content }}</div>
    </a>
  </div>
</template>

<script>
export default {
  props: {
    dataSource: {
      type: Array,
      required: false,
      // 对象或数组默认值必须从一个工厂函数获取
      default: function () {
        return []
      }
    }
  }
}
</script>

<style scoped>
.card{
  text-decoration: none!important;
}

.card:hover{
  text-decoration: none!important;
}

.card-wrapper:after {
  content:"";
  display:block;
  height:0;
  clear:left;
  visibility:hidden;
}

.card{
  width: 30%;
  display: block;
  padding: 15px;
  height: 150px;
  background: #fffff1;
  border-radius: 10px;
  position: relative;
  float: left;
  margin: 0 15px 15px 0;
}

.card-title{
  font-size: 18px;
  font-weight: 600;
}
.card-content{
  margin-top: 15px;
  font-size: 14px;
}
</style>
