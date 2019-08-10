import Vue from 'vue';
// @ts-ignore
import Page from '#PagePath';

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(Page),
}).$mount('#app');
