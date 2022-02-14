import Vue from 'vue'
import App from './App.vue'
import router from './router'
import '@/assets/css/normalize.css'
import '@/assets/css/base.css'
import '@/assets/js/index.js'

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
  beforeCreate(){
    Vue.prototype.$bus = this
  },
}).$mount('#app')
