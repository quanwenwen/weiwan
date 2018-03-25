  <template>
    <div>
      <ul class="mui-table-view">
				<li v-for="(item,id) in newsList" :key="id" class="mui-table-view-cell mui-media">
    		<router-link :to="'/news/newinfo'+item.id">
						<img class="mui-media-object mui-pull-left" :src="item.img_url">
						<div class="mui-media-body">
							<p class="titleStyle">{{item.title}}</p>
							<p class='mui-ellipsis'>
                <span>{{item.add_time | fmtData}}</span>
                <span>点击了{{item.click}}次</span>
              </p>
						</div>
				</router-link>
				</li>
			</ul>
    </div>
  </template>
  
<style scoped>
  .mui-table-view-cell.mui-media{
    height: 80px;
  }

  .mui-table-view .mui-media-object.mui-pull-left{
    height: 65px;
    max-width:65px;
  }

  .titleStyle{
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .mui-ellipsis{
    display: flex;
    justify-content: space-between;
    margin-top: 20px;
    color: yellowgreen;
  }
  
</style>

  <script>
  import common from "../../common/common"

  export default {
    data() {
      return {
        newsList: []
      };
    },
    created() {
      this.getnew();
    },
    methods: {
      getnew() {
      const url = `${common.apihost}api/getnewslist`;
     

        this.$http.get(url).then(response=>{
          this.newsList = response.body.message
        },err=>{

        })
      }
    }
  };
  
  </script>

  