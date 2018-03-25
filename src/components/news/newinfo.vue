<template>
<div>
 <div class="title">
   <h4>{{newsInfo.title}}</h4>
   <p>{{newsInfo.add_time | fmtData}} &nbsp;{{newsInfo.click}} 次浏览&nbsp;</p>
 </div>
 <div class="content">
   <span v-html ="newsInfo.content"></span>
 </div>
 <!-- 评论子组件 -->
 <subcomment :commetid="$route.params.newId"></subcomment>
</div>
</template>

<style scoped>
.title{
  padding: 6px;
}
h4{
  color: yellowgreen;
  font-size: 16px;


}
</style>



<script>
import common from'../../common/common'

import subcomment from'../childcomponents/subcomment'

export default{
 data(){
   return{
     newsInfo:{}
   }
 },
 created(){
   this.getnewsInfo();
 },
 methods:{
getnewsInfo(){
  const url=`${common.apihost}api/getnew/${this.$route.params.newId}`
  this.$http.get(url).then(Response=>{
this.newsInfo=Response.body.message[0]
  },err=>{

  })
  
}

 },
 components:{
subcomment
 }

}
</script>
