<template>
    <v-container>
        <form>
            <v-text-field
                v-model="foto.titulo"  
                label="Titulo"
                v-validate="'required'"
                :error-messages="errors.collect('foto.titulo')"
                data-vv-name="foto.titulo"
                data-vv-as="Título"
                required
                >
            </v-text-field>

            <v-text-field 
                name="descricao" 
                v-model="foto.descricao" 
                label="Descrição"
                v-validate="'required'"
                :error-messages="errors.collect('foto.descricao')"
                data-vv-name="foto.descricao"
                data-vv-as="Descrição"
                required>
            </v-text-field>

            <v-text-field 
                name="url" 
                v-model="foto.url"  
                label="URL Imagem" 
                v-validate="'required'"
                :error-messages="errors.collect('foto.url')"
                data-vv-name="foto.url"
                data-vv-as="Url"
                required>
            </v-text-field>

            <meu-botao
                colorTexto="primary"
                rotulo="Limpar" 
                @botaoAtivado="limpar"
                flat
                :confirmacao="false"
            />
            <meu-botao
                colorTexto="primary"
                rotulo="Salvar" 
                estilo="success"
                @botaoAtivado="gravar"
                :confirmacao="false"
            />
        </form>
    </v-container>
</template>
<script>
import Botao from '../shared/botao/Botao.vue';
import Foto from '../../domain/foto/Foto'
import FotoService from '../../domain/foto/FotoService';

export default {

    components : {
        'meu-botao' : Botao
    },

    data() {

        return {
            foto : new Foto(),
            id : this.$route.params.id
        }
    },

    created() {
        this.service = new FotoService(this.$resource);
        if(this.id){
            this.service
                .buscaFoto(this.id)
                .then(foto => this.foto = foto );
        }
    },

    methods : {

        gravar(){
            this.$validator
                .validateAll()
                .then( success => {
                    if(success){
                        this.service
                        .cadastraFoto(this.foto)
                        .then(() => { 
                        if(this.id) this.$router.push({ name: 'home' });
                        this.$router.push({ name: 'home' });
                            this.foto = new Foto();
                        },err => {
                            console.log(err)
                        });
                    }
                 });
                
        },

        limpar(){
            this.foto = new Foto()
        }

    }
    
    
}
</script>
<style>


</style>
