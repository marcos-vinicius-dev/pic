<template>
   <div>
      <v-layout row>
         <v-flex xs12>
            <v-card flat color="transparent">
               <v-container fluid grid-list-lg>
                  <v-layout row wrap>
                     <v-flex xs12>
                        <v-text-field
                           label="Filtro"
                           box
                           v-on:keyup.native="filtro = $event.target.value"
                           append-icon="search"
                           placeholder="Pesquise por titulo"
                           ></v-text-field>
                     </v-flex>
                  </v-layout>
                  <v-layout row wrap>
                     <v-flex xs12>
                        <h2 class="black--text ">Fotos</h2>
                     </v-flex>
                  </v-layout>
                  <v-layout row wrap>
                     <v-flex xs12 sm6 md6 lg4 :key="foto" v-for="foto of fotosComFiltro">
                        <meu-painel :titulo="foto.titulo" :url="foto.url" :descricao="foto.descricao">
                           <imagem-responsiva  slot="imagem" aspect-ratio="2.75" height="210px" :url="foto.url" :titulo="foto.titulo"></imagem-responsiva>
                           <router-link slot="actions" :to="{ name : 'cadastro', params : { id: foto.id } }">
                              <meu-botao 
                                 flat="true"
                                 colorTexto="primary"
                                 rotulo="Alterar" 
                                 :confirmacao="false"
                                 />
                           </router-link>
                           <v-spacer slot="actions"></v-spacer>
                           <meu-botao  slot="actions"
                              flat="false" 
                              colorTexto="white"
                              rotulo="Remover" 
                              @botaoAtivado="remove(foto)"
                              :confirmacao="true"
                              tituloConfirmacao="Apagar"
                              estilo="error"/>
                        </meu-painel>
                     </v-flex>
                  </v-layout>
               </v-container>
            </v-card>
         </v-flex>
      </v-layout>
   </div>
</template>
<script>
   import Painel from '../shared/painel/Painel.vue';
   import ImagemResponsiva from '../shared/imagem-responsiva/ImagemResponsiva.vue';
   import Botao from '../shared/botao/Botao.vue';
   import FotoService from '../../domain/foto/FotoService';
   
   export default {
   
     components: {
       'meu-painel' : Painel,
       'imagem-responsiva' : ImagemResponsiva,
       'meu-botao' : Botao
     },
   
     data() {
   
       return {
         fotos: [],
         filtro : ''
       }
     },
     //ciclo inicial
     created() {
   
       this.service = new FotoService(this.$resource);
       this.service
         .listaFotos()
         .then(fotos => this.fotos = fotos, err => {
           console.log(err.message)
   
         });
     
     },
     methods : {
       remove(foto){
         this.service
         .apagaFoto(foto.id)
         .then(() => {
           let indice = this.fotos.indexOf(foto);
           this.fotos.splice(indice, 1)
           this.foto = new Foto()
         },
         err => {
           console.log(err)
         });
       }
     },
     computed: {
       fotosComFiltro(){
         if(this.filtro){
           let exp = new RegExp(this.filtro.trim(), 'i');
           return this.fotos.filter(foto => exp.test(foto.titulo) || exp.test(foto.descricao));
         }else{
           return this.fotos;
         }
       }
   
     }
   }
   
</script>
<style>
</style>