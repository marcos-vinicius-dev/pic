<template>
    <v-btn  @click="disparaAcao()" :class="estilo" :small="small" :large="large"  :color="colorTexto" :flat="flat">{{ rotulo }}<confirm ref="confirm"></confirm></v-btn>
</template>
<script>
import Confirm from '../confirm/Confirm.vue';

export default {
    data () {
      return {
        dialog: true
      }
    },
    components: {
        'confirm' : Confirm
    },

    props: {

        rotulo: {
            required: true,
            type: String
        },
        tituloConfirmacao: {
            type: String
        },
        confirmacao: Boolean,
        estilo: String,
        flat: Boolean,
        colorTexto: String,
        small: Boolean,
        large: Boolean
        
    },
    data () {
      return {
        dialog: false
      }
    },
    

    methods: {
        disparaAcao(){
            if(this.confirmacao){
                this.$refs.confirm.open(this.tituloConfirmacao, 'Confirma Operação?', { color: 'red' }).then((confirm) => {
                    if(confirm){
                        this.$emit('botaoAtivado');
                    }
                })
                return;
            }
            this.$emit('botaoAtivado');
            
        }
    },

    computed:{
        estiloDoBotao(){
            if(this.estilo == 'success' || !this.estilo) return 'success';
            if(this.estilo == 'error') return 'error';
        }
    }
    
}
</script>
<style scoped>


</style>
