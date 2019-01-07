<template>
    <v-content>
      <v-container fluid fill-height>
        <v-layout align-center justify-center>
          <v-flex xs12 sm8 md4>
            <v-card class="elevation-12">
              <v-toolbar dark color="primary">
                <v-toolbar-title>Login Pic</v-toolbar-title>
              </v-toolbar>
              <v-card-text>
                <v-form>
                    <v-text-field
                        v-model="user.email"  
                        label="Email"
                        v-validate="'required|email'"
                        :error-messages="errors.collect('user.email')"
                        data-vv-name="user.email"
                        data-vv-as="Email"
                        required>
                    </v-text-field>
                    <v-text-field
                        v-model="user.senha"  
                        label="Senha"
                        type="password"
                        v-validate="'required'"
                        :error-messages="errors.collect('user.senha')"
                        data-vv-name="user.senha"
                        data-vv-as="Senha"
                        required>
                    </v-text-field>
                </v-form>
              </v-card-text>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="primary" @click="login">Login</v-btn>
              </v-card-actions>
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>
    </v-content>
</template>

<script>
import User from '../../domain/user/User'

  export default {
    data() {

        return {
            user : {
              email: 'uds@teste.com',
              senha: 'uds'
            }

        }
    },

    methods : {
        login(){
            this.$validator
                .validateAll()
                .then( success => {
                    if(success) this.$router.push({ name: 'home' });
                 });
        }
    }
  }
</script>

<style>

</style>
