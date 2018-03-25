<template>
  <div>
    <!-- 提交评论区 -->
    <div class="postComment">
      <h4>提交评论</h4>
      <textarea ref="textareaRef" cols="30" rows="10" placeholder="请输入评论内容"></textarea>
      <mt-button @click="postconcnet" size="large" type="primary">提交评论</mt-button>
    </div>
    <!-- 评论列表 -->
    <div class="commetList">
      <h4>评论列表</h4>
      <div v-for="(item,index) in commentlist" :key="index">
        <p class="usetime">
          <span>{{item.user_name}}</span>
          <span>{{item.add_time | fmtData}}</span>
        </p>
        <p class="commetitem">{{item.content}}</p>

      </div>
      <mt-button class="load" size="large" plain type="danger">加载更多 </mt-button>
    </div>
  </div>

</template>

<script>
 import common from '../../common/common'
import { Toast } from "mint-ui";
export default {
  data() {
    return {
      pageindex: 1,
      commentlist: []
    };
  },
  created() {
    this.commentlistData();
  },

  props: ["commetid"],

  methods: {
    commentlistData() {
      // const url = `${common.apihost}api/getcomments/${this.commentId}?pageindex=${this.pageIndex}`
      const url = "http://localhost:3000/db";
      this.$http
        .get(url)
        .then(response => {
          this.commentlist = response.body.message;
          console.log(this.commentlist);
        })
        .catch(err => {});
    },
    postconcnet() {
      // 提交评论
      const textareaDom = this.$refs.textareaRef;
      const content = textareaDom.value;
      if (content.trim().length == 0) {
        Toast({
          message: "评论内容不能为空",
          position: "middle",
          duration: 2000
        });
        return;
      }
      //发送网络请求
      const url = `${common.apihost}api/postcomment/${this.commentId}`;
      this.$http
        .post(url, { content }, { emulateJSON: true })
        .then(response => {
          //1.弹出提示信息，评论成功
          Toast({
            message: response.body.message,
            position: "middle",
            duration: 2000
          });

          //2.清空评论内容
          textareaDom.value = "";
          this.pageIndex = 1
          //3.重新加载第一页的评论数据
         this.commentlistData();
        })
        .catch(err => {});
    }
  }
};
</script>

<style scoped>
.postComment,
.commetList {
  padding: 6px;
}
h4 {
  padding-bottom: 10px;
  border-bottom: 1px solid rgba(92, 92, 92, 0.3);
}
.commetitem {
  height: 50px;
  overflow-y: auto;
}
.usetime {
  color: blue;
  display: flex;
  justify-content: space-between;
  margin-top: 50px;
}
.load {
  margin-top: 10px;
}
</style>

