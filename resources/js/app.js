require('./bootstrap');

import Vue from 'vue'


Vue.component('menu-container', require('./components/modules/menu/MenuContainer').default);

const app = new Vue({
  el: '#app',
});
