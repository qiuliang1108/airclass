// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import router from './router';
import vuex from 'vuex';
import store from './store';
import axios from '@common/axios';
import VueLazyload from 'vue-lazyload';
import VuePreview from 'vue-preview';
import GoTopMixin from '@components/go-top/go-top-mixin';
import fastclick from 'fastclick';

Vue.use(vuex);
Vue.use(axios);
Vue.use(VueLazyload);
Vue.use(GoTopMixin);
Vue.use(VuePreview, {
  fullscreenEl: false,
  mainClass:'preview-wrap'
});

fastclick.attach(document.body);
Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  components: { App },
  template: '<App/>'
});
