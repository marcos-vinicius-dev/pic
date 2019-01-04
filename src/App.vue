<template>
  <v-app id="inspire">

    <meu-menu :rotas="routes"/>
    <minha-toolbar></minha-toolbar>
    <v-content transition="slide-x-transition">
      <router-view></router-view>
    </v-content>

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

      routes
    }

  }

}
</script>
<style>

  .pagina-enter-active, .pagina-leave-active {
    transition: opacity .3s
  }
  .pagina-enter, .pagina-leave-active {
    opacity: 0
  }
</style>