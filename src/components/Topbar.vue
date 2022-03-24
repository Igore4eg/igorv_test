<template>
    <v-app-bar
        color="light-blue lighten-3"
        app
      >
        <v-spacer/>
        <v-text-field 
          v-model="message"
          type="text"
          clearable
          clear-icon="mdi-close-circle"
          append-outer-icon="mdi-search-web"
          @click:append-outer="sendMessage"
          @click:clear="clearMessage"
        ></v-text-field>
        <v-spacer/>
      </v-app-bar>
</template>

<script>
export default {
  data: () => ({
    message: 'jquery',
  }),
  methods: {
    sendMessage () {
      this.clearMessage()
    },
    clearMessage () {
      this.message = ''
    },
  },
}
</script>

<style>

</style>