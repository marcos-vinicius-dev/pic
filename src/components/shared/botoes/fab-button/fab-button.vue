<template>
    <v-btn
      fab
      bottom
      right
      :color="color"
      dark
      fixed
      @click="dialog = !dialog">
      <v-icon>{{icon}}</v-icon>
    </v-btn>
</template>
<script>
export default {
        props: {
        tipo: {
            required: true,
            type: String
        },
        color: {
            required: true,
            type: String
        }
    }
    
}
</script>
<style>

</style>
