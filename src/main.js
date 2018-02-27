// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import vueResource from 'vue-resource'
import App from './App'
import store  from './vuex/index'
import VueSVGIcon from 'vue-svgicon'

Vue.use(vueResource);
Vue.use(VueSVGIcon);

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  store,
  el: '#app',
  components: { App, store },
  template: '<App/>'
});


