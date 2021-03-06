// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.page.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import axios from 'axios'
import VueAxios from 'vue-axios'
import BaseConfig from './core/config/BaseConfig'

import Labeler from './core/Labeler'
import i18n from './i18n'
import './components/core'

Vue.prototype.Labeler = Labeler
Vue.config.productionTip = false
Vue.use(ElementUI)
Vue.use(VueAxios, axios)
Vue.use(BaseConfig)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  i18n,
  components: {App},
  template: '<App/>'
})
