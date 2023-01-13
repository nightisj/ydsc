import Vue from 'vue'
import App from './App.vue'
import router from './router'

Vue.config.productionTip = false


// 引入第三方组件库
import { Button,Tabbar, Grid, GridItem ,TabbarItem ,NavBar,Search,Swipe, SwipeItem,Toast,SubmitBar } from 'vant';
// 使用第三方组件库
Vue.use(Button).use(Tabbar).use(TabbarItem).use(NavBar).use(Search).use(Swipe).use(SwipeItem).use(Toast).use(SubmitBar);
Vue.use(Grid);
Vue.use(GridItem);
// 引入axios
import axios from 'axios'
Vue.prototype.axios=axios


new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
