<template>
  <div>
    <!-- 1.头部 -->

    <header class="mint-header is-fixed">
      <div class="mint-header-button is-left">
        <a href="#/" class="router-link-active">
          <button class="mint-button mint-button--default mint-button--normal">
            <span class="mint-button-icon">
              <i @click="goBack" v-show="isShowBack" class="mintui mintui-back"></i>
            </span>
            <label class="mint-button-text"></label>
          </button>
        </a>
      </div>
      <h1 ref="concent" class="mint-header-title">{{this.$route.query.name}}</h1>
      <div class="mint-header-button is-right">
        <button class="mint-button mint-button--default mint-button--normal">
          <span class="mint-button-icon">
            <i class="mintui mintui-more"></i>
          </span>
          <label class="mint-button-text"></label>
        </button>
      </div>
    </header>

    <!-- 2.中间部分 -->
    <router-view></router-view>
    <!-- 3.底部 -->
    <mt-tabbar v-show="isShowTabBar" fixed>
      <mt-tab-item id="">
        <router-link :to="{path:'/',query:{name:'首页'}}">
          <img src="https://img08.jiuxian.com/bill/2016/0224/cccd8df26a754c139de800406af82178.png">
        </router-link>
      </mt-tab-item>

      <mt-tab-item id="">
        <router-link :to="{path:'category',query:{name:'分类'}}">
          <img src="https://img07.jiuxian.com/bill/2016/0224/36a49b28ec5e4cdf9dbe37988199487d.png">
        </router-link>
      </mt-tab-item>
      <mt-tab-item id="">
        <img src="https://img08.jiuxian.com/bill/2016/0224/42baf46987b6460bb43b3396e9941653.png">

      </mt-tab-item>
      <mt-tab-item id="">
        <img src="https://img09.jiuxian.com/bill/2016/0224/cba9029a8f4444a989a2ab5aa84c6538.png">

      </mt-tab-item>
    </mt-tabbar>
  </div>
</template>
<style scoped>
.mint-header {
  background-color: brown;
}
.mint-tab-item-label img {
  width: 42px;
  height: 35px;
}
</style>

<script>
export default {
     data(){
      return {
        isShowBack : false,
        isShowTabBar : true,
    
      }
    },
   
    created(){
      this.isShowOrHidden(this.$route.path)
      
    },
    methods:{
    
      goBack(){
    
        this.$router.go(-1)
      },
    
   
      isShowOrHidden(path){
        if(path!='/home'){ //非首页
          this.isShowBack = true
          this.isShowTabBar = false
          

        }else{ //首页
          this.isShowBack = false
          this.isShowTabBar = true
        }
      }
      
    },
    watch:{
      

      $route(newValue,oldValue){
        this.isShowOrHidden(newValue.path)

      }
    }
};
</script>


   
