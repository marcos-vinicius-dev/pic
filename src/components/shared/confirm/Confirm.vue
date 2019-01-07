<template>
  <v-dialog v-model="dialog" :max-width="options.width" @keydown.esc="cancel" v-bind:style="{ zIndex: options.zIndex }">
    <v-card>
      <v-toolbar dark :color="options.color" dense flat>
        <v-toolbar-title class="white--text">{{ titulo }}</v-toolbar-title>
      </v-toolbar>
      <v-card-text v-show="!!mensagem">{{ mensagem }}</v-card-text>
      <v-card-actions class="pt-0">
        <v-spacer></v-spacer>
        <v-btn color="primary darken-1" flat="flat" @click.native="aceitar">Sim</v-btn>
        <v-btn color="grey" flat="flat" @click.native="cancelar">Não</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
  export default {
    data: () => ({
      dialog: false,
      resolve: null,
      reject: null,
      mensagem: null,
      titulo: null,
      options: {
        color: 'primary',
        width: 290,
        zIndex: 200
      }
    }),
    methods: {
      open(titulo, mensagem, options) {
        this.dialog = true
        this.titulo = titulo
        this.mensagem = mensagem
        this.options = Object.assign(this.options, options)
        return new Promise((resolve, reject) => {
          this.resolve = resolve
          this.reject = reject
        })
      },
      aceitar() {
        this.resolve(true)
        this.dialog = false
      },
      cancelar() {
        this.resolve(false)
        this.dialog = false
      }
    }
  }
</script>
<style>

</style>

  /**
   *
   * Inserir na view
   * <confirm ref="confirm"></confirm>
   *
   * colocar no metodo
   * this.$refs.confirm.open('Delete', 'Are you sure?', { color: 'red' }).then((confirm) => {
   *    if(confirm){
   *    }
   *    else{
   *    }
   * })
   *
   * ou
   * 
   * this.$refs.confirm.open('Delete', 'Are you sure?', { color: 'red' }).then((confirm) => {})
   */