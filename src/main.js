// 安装引入的包
import Vue from "vue";
import Mint from "mint-ui";
import VueRouter from "vue-router";
import VueResource from "vue-resource";
import moment from "moment"
// 引入App.Vue
import App from "./App.vue"
// 导入 CSS

import 'mint-ui/lib/style.css';
import '../src/static/mui/css/mui.css';
import "../src/static/css/site.css";
// 基于VUe的包需要设置
Vue.use(Mint);
Vue.use(VueRouter);
Vue.use(VueResource);


// 全局过滤器定义
Vue.filter('fmtData', (input, formatString = "YYYY-MM-DD HH:mm:ss") => moment(input).format(formatString))




// 路由相关
// 导入组件
import home from "./components/home/home.vue";
import category from "./components/category/category.vue";
import newslist from "./components/news/newslist.vue";
import newinfo from "../src/components/news/newinfo.vue"
import photolist from "../src/components/photo/photolist.vue"
const router = new VueRouter({
    routes: [{
       
            path: "/",
            redirect: '/home'
        },
        {
         
            path: "/home",
            component: home
        },
        {
            name: "category1",
            path: "/category",
            component: category
        },
        {
            path: "/news/newslist",
            component: newslist
        },
        {
            path: "/news/newinfo:newId",
            component: newinfo
        },
        {
            path: "/photo/photolist",
            component: photolist
        },
    ]
})


new Vue({
    router,
    render: APP => APP(App)
}).$mount("#app")