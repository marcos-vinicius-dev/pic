import Vue from 'vue';
import App from './App.vue';
import VeeValidate, { Validator } from 'vee-validate'
import ptLocale from 'vee-validate/dist/locale/pt_BR'

import VueResource from 'vue-resource';
import VueRouter from 'vue-router';
import { routes } from './routes';
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'


Vue.use(VueResource);
Vue.use(Vuetify)
Vue.use(VueRouter);
Vue.http.options.root = 'http://5c3033648b95c100141e745b.mockapi.io/';


const router = new VueRouter({ 
  routes : routes, 
  mode: 'history'
});

Validator.localize('pt', ptLocale)
Vue.use(VeeValidate, {
  locale: 'pt'
});

new Vue({
  el: '#app',
  router : router,
  render: h => h(App)
})

