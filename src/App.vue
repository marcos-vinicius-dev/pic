<template>
  <v-app id="inspire">
    <template v-if="!$route.meta.public">
      <meu-menu :rotas="routes"></meu-menu>
      <v-content transition="slide-x-transition">
        <router-view></router-view>
      </v-content>
    </template>
    <template v-else>
        <router-view></router-view>
    </template>
   </v-app>
</template>
<script>

import { routes }  from './routes';
import Menu from './components/shared/menu/Menu.vue';

export default {

  components: {
    'meu-menu' : Menu
  },

  data() {

    return {
      fotos:[
        {
          url:'https://t1.ea.ltmcdn.com/pt/images/0/0/1/cao_agressivo_causas_e_tratamento_6100_600.jpg',
          titulo:'cachorro'
        }
      ],

      routes : routes.filter(route => route.menu)
    }

  }

}
</script>
<style>

</style>