import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import axios from 'axios'


Vue.use(ElementUI);
Vue.prototype.axios = axios;
Vue.config.productionTip = false


axios.defaults.baseURL = 'api/';
axios.defaults.timeout = 15000;

//全局过滤器(秒数转化为分钟)
Vue.filter('timeFormat', function (time) {

  //分钟
  const minute = time / 60;
  let minutes = parseInt(minute);

  if (minutes < 10) {
    minutes = "0" + minutes;
  }

  //秒
  const second = time % 60;
  let seconds = Math.round(second);
  if (seconds < 10) {
    seconds = "0" + seconds;
  }
  return `${minutes}:${seconds}`;
})

Vue.filter('timeToDate', function (time) {
  const date = new Date(time);
  const Y = date.getFullYear();
  const M = (date.getMonth() + 1 + '').padStart(2, '0');
  const D = (date.getDay() + '').padStart(2, '0');

  const h = (date.getHours() + '').padStart(2, '0');
  const m = (date.getMinutes() + '').padStart(2, '0');
  const s = (date.getSeconds() + '').padStart(2, '0');

  return `${Y}-${M}-${D} ${h}:${m}:${s}`
})

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')