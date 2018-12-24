import Vue from 'vue'
import Main from '@/Main.vue'
import router from '@/router.js'
import store from '@/store.js'
import BootstrapVue from 'bootstrap-vue'
import VueSlideoutPanel from 'vue2-slideout-panel';

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import '@/assets/css/theme.css'

Vue.config.productionTip = false
Vue.use(BootstrapVue);
Vue.use(VueSlideoutPanel);

new Vue({
  router,
  store,
  render: h => h(Main)
}).$mount('#app')
