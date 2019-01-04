import Vue from 'vue'; //global view object
import App from './App.vue';


import VueRouter from 'vue-router';
import { routes } from './routes'; //export default


import Vuetify from 'vuetify'

import 'vuetify/dist/vuetify.min.css' // Ensure you are using css-loader


//usar vueResourece globalmente
Vue.use(Vuetify)
Vue.use(VueRouter);
// é preciso unir a rota com o vuerouter, para que essa rota seja enxergada por ele

const router = new VueRouter({ 
    routes : routes, 
    mode: 'history'
  });//criar um roteador com auxilio do vuerouter

  

//Vue = global view object
//view instance
new Vue({
  el: '#app',//selector de id
  router : router,
  render: h => h(App)
})

