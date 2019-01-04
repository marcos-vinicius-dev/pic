<template>
  <div>
    <v-navigation-drawer
      :clipped="$vuetify.breakpoint.lgAndUp"
      v-model="drawer"
      fixed
      app
    >
      <v-list dense>
        <template  v-for="rota in rotas">
          <router-link  class="v-list__tile" :key="rota" :to="rota.path ? rota.path : '/'">
          <v-list-tile >
            <v-list-tile-action>
              <v-icon>{{ rota.icon }}</v-icon>
            </v-list-tile-action>
            <v-list-tile-content>
                {{rota.titulo}}
            </v-list-tile-content>
          </v-list-tile>
          </router-link>
        </template>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar :clipped-left="$vuetify.breakpoint.lgAndUp" color="blue darken-3" dark app fixed>
    <v-toolbar-title style="width: 300px" class="ml-0 pl-3">
        <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
        <span class="hidden-sm-and-down">Recruit</span>
      </v-toolbar-title>

      <v-spacer></v-spacer>

      <v-btn icon large>
        <v-avatar size="32px" tile>
          <img src="https://cdn.vuetifyjs.com/images/logos/logo.svg" alt="Vuetify">
        </v-avatar>
      </v-btn>
    </v-toolbar>
  </div>
</template>

<script>
  export default {
    data: () => ({
      dialog: false,
      drawer: null,
    }),
    props: {
        rotas: {
            type: Array, 
            required: true
        }
    }
  }
</script>