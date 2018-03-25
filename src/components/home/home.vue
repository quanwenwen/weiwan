<template>
  <div>
    <!-- 轮播图 -->
    <mt-swipe>
      <mt-swipe-item v-for="(item,id) in lunboArray" :key="id">
        <a href="#"> <img :src="item.small" alt=""></a>
      </mt-swipe-item>
    </mt-swipe>
    <!-- 九宫格 -->
    <div class="mui-content">
      <ul class="mui-table-view mui-grid-view mui-grid-9">
        <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-4">
          <router-link to="../news/newslist">
            <span class="mui-icon mui-icon-home"></span>
            <div  class="mui-media-body">新闻资讯</div>
          </router-link>
        </li>
        <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-4">
               <router-link to="../photo/photolist">
            <span class="mui-icon mui-icon-email">
              <span class="mui-badge">5</span>
            </span>
            <div class="mui-media-body">图片分享</div>
       </router-link>
        </li>
        <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-4">
          <a href="#">
            <span class="mui-icon mui-icon-chatbubble"></span>
            <div class="mui-media-body">商品购买</div>
          </a>
        </li>
        <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-4">
          <a href="#">
            <span class="mui-icon mui-icon-location"></span>
            <div class="mui-media-body">视频专区</div>
          </a>
        </li>
        <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-4">
          <a href="#">
            <span class="mui-icon mui-icon-search"></span>
            <div class="mui-media-body">留言反馈</div>
          </a>
        </li>
        <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-4">
          <a href="#">
            <span class="mui-icon mui-icon-phone"></span>
            <div class="mui-media-body">联系我们</div>
          </a>
        </li>
      </ul>
    </div>
  </div>

</template>

<style scoped>
/* 轮播图样式 */
.mint-swipe {
  height: 250px;
  width: 100%;
}
img {
  width: 100%;
  height: 100%;
}
/* 九宫格样式 */

.mui-icon::before {
  content: "";
}
.mui-icon{
  width: 50px;
  height: 50px;
  background-color: yellow;
}

.mui-icon-home{
  background-image: url("../../static/images/menu1");
  background-size: cover;
} 
.mui-icon-email{
    background-image: url("../../static/images/menu2");
  background-size: cover;
}
.mui-icon-chatbubble{
  background-image: url("../../static/images/menu3");
  background-size: cover;
}
.mui-icon-location{
  background-image: url("../../static/images/menu4");
  background-size: cover;
}
.mui-icon-search{
    background-image: url("../../static/images/menu5");
  background-size: cover;
}
.mui-icon-phone{
      background-image: url("../../static/images/menu6");
  background-size: cover;
}
.mui-grid-view.mui-grid-9{
  background-color: #ffff;
  border: none;
}
.mui-grid-view.mui-grid-9 .mui-table-view-cell{
  border: none;
}
</style>


<script>
export default {
  data() {
    return {
      lunboArray: []
    };
  },
  created() {
    // vue底层提供的生命周期函数
    // 组件创建的时候调用它
    this.getlunboData();
  },
  methods: {
    // 获取轮播数据
    getlunboData() {
      const url = "https://api.douban.com/v2/movie/in_theaters";

      this.$http.jsonp(url).then(
        Response => {
          console.log(Response);

          var tal = Response.body.subjects;

          var talimg = tal.map(function(v) {
            return v.images;
          });
          var newtalimg = talimg.slice(0, 5);
          console.log(newtalimg);

          this.lunboArray = newtalimg;
        },
        err => {}
      );
    },
    
  }
};
</script>