import Vue from 'vue'
import App from './App.vue'


import VueMaterial from 'vue-material'
import 'vue-material/dist/vue-material.min.css'
import 'vue-material/dist/theme/default.css'
Vue.use(VueMaterial)

import MenuIcon from 'vue-material-design-icons/Menu.vue';
Vue.component('menu-icon', MenuIcon);

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
