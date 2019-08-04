import Vue from 'vue';
// @ts-ignore
import App from '#PagePath';

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
}).$mount('#app');
