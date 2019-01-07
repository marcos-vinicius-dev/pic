<template>
   <div>
      <v-hover>
         <v-card  height="400" slot-scope="{ hover }" :class="`elevation-${hover ? 12 : 2}`" @dblclick="visivel =! visivel">
            <slot name="imagem">
            </slot>
            <v-card-title primary-title>
               <div>
                  <h3 class="headline mb-0">{{titulo}}</h3>
                  <div>
                     {{descricao}}
                  </div>
               </div>
            </v-card-title>
            <v-card-actions>
               <slot name="actions"></slot>
            </v-card-actions>
         </v-card>
      </v-hover>
   </div>
</template>
<script>
   export default {
       props : ['titulo', 'url', 'descricao'],
   
       data(){
           return {
               visivel : false
           }
       }
   
   }
   
</script>
<style scoped>
</style>