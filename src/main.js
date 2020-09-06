import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false

Vue.filter('checkDashes', str=> str.includes('-') ? str.replace(/-/g, ' '): str);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
