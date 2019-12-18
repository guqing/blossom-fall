<template>
  <div class="card-body">
    <a
      :href="item.url"
      class="card-wrapper"
      v-for="(item, index) in dataSource"
      :key="index"
    >
      <div class="post-module">
        <!--缩略图-->
        <div class="thumbnail">
          <img :src="getThumbnail(item.thumbnail)" />
        </div>
        <div class="post-content">
          <div class="category">{{ index + 1 }}</div>
          <h1 class="title">{{ item.title }}</h1>
          <h2 class="sub_title">{{ item.content }}</h2>
        </div>
      </div>
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
  },
  methods: {
    getThumbnail (src) {
      if (src === '' || src === null || src === undefined) {
        src = 'http://www.bluestep.cc/demos/html5css3/p3892/img/demo.jpg'
      }
      return src
    }
  }
}
</script>

<style scoped>
/* 在鼠标滑过卡片的时候，卡片容器的阴影会发生动画效果，阴影被放大，就像卡片要脱离出屏幕一样 */
.card-body:after {
  content: "";
  display: block;
  clear: both;
}
.card-wrapper {
  max-width: 270px;
  overflow: hidden;
  float: left;
  margin-right: 10px;
  margin-left: 10px;
  margin-bottom: 15px;
  transition: all 0.3s linear 0s;
}
.card-wrapper:hover {
  text-decoration: none;
  -webkit-box-shadow: 0px 1px 35px 0px rgba(0, 0, 0, 0.3);
  -moz-box-shadow: 0px 1px 35px 0px rgba(0, 0, 0, 0.3);
  box-shadow: 0px 1px 35px 0px rgba(0, 0, 0, 0.3);
}
.post-module {
  position: relative;
  z-index: 1;
  display: block;
  background: #ffffff;
  max-width: 270px;
  height: 340px;
  -webkit-box-shadow: 0px 1px 2px 0px rgba(0, 0, 0, 0.15);
  -moz-box-shadow: 0px 1px 2px 0px rgba(0, 0, 0, 0.15);
  box-shadow: 0px 1px 2px 0px rgba(0, 0, 0, 0.15);
  -webkit-transition: all 0.3s linear 0s;
  -moz-transition: all 0.3s linear 0s;
  -ms-transition: all 0.3s linear 0s;
  -o-transition: all 0.3s linear 0s;
  transition: all 0.3s linear 0s;
}
.post-module:hover,
.hover {
  -webkit-box-shadow: 0px 1px 35px 0px rgba(0, 0, 0, 0.3);
  -moz-box-shadow: 0px 1px 35px 0px rgba(0, 0, 0, 0.3);
  box-shadow: 0px 1px 35px 0px rgba(0, 0, 0, 0.3);
}
.post-module:hover .thumbnail img,
.hover .thumbnail img {
  -webkit-transform: scale(1.1);
  -moz-transform: scale(1.1);
  transform: scale(1.1);
  opacity: 0.6;
}
.post-module .thumbnail {
  background: #000000;
  width: 100%;
  height: 150px;
  overflow: hidden;
}

.post-module .thumbnail img {
  display: block;
  width: 100%;
  height: 100%;
  -webkit-transition: all 0.3s linear 0s;
  -moz-transition: all 0.3s linear 0s;
  -ms-transition: all 0.3s linear 0s;
  -o-transition: all 0.3s linear 0s;
  transition: all 0.3s linear 0s;
}
.post-module .post-content {
  position: absolute;
  bottom: 0;
  background: #ffffff;
  width: 100%;
  padding: 30px;
  -webkti-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
  -webkit-transition: all 0.3s cubic-bezier(0.37, 0.75, 0.61, 1.05) 0s;
  -moz-transition: all 0.3s cubic-bezier(0.37, 0.75, 0.61, 1.05) 0s;
  -ms-transition: all 0.3s cubic-bezier(0.37, 0.75, 0.61, 1.05) 0s;
  -o-transition: all 0.3s cubic-bezier(0.37, 0.75, 0.61, 1.05) 0s;
  transition: all 0.3s cubic-bezier(0.37, 0.75, 0.61, 1.05) 0s;
}
.post-module .post-content .category {
  position: absolute;
  top: -10px;
  left: 40%;
  background: #fa759e; /*#e74c3c;*/
  color: #ffffff;
  font-size: 12px;
  font-weight: 600;
  text-transform: uppercase;
}
.category {
  width: 28px;
  height: 28px;
  text-align: center;
  border-radius: 50%;
  align-items: center;
  display: flex;
  justify-content: center;
}
.post-module .post-content .title {
  margin: 0;
  padding: 0 0 10px;
  color: #333333;
  font-size: 18px;
  font-weight: 700;
}
.post-module .post-content .sub_title {
  margin: 0;
  padding: 0 0 20px;
  color: #444;
  font-size: 16px;
  font-weight: 400;
}
h2 {
  border-bottom: none;
}
.post-module .post-content .description {
  display: none;
  color: #666666;
  font-size: 14px;
  line-height: 1.8em;
}
</style>
