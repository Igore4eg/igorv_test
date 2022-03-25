<template>
    <v-app-bar
        color="light-blue lighten-3"
        app
      >
        <v-spacer/>
        <v-text-field 
          v-model="query"
          type="text"
          clearable
          clear-icon="mdi-close-circle"
          append-outer-icon="mdi-search-web"
          @click:append-outer="submit"
          @click:clear="clearMessage"
          @keydown.enter="submit"
        ></v-text-field>
        <v-spacer/>
      </v-app-bar>
</template>

<script>

export default {
  data() {
    return {
        query: this.$store.getters.getQuery, 
      };
  },
  methods: {
    submit (event) {
      event.preventDefault()
      this.$store.commit("setQuery", this.query)
      this.$store.dispatch("fetchList", this.$store.getters.getQuery)
    },
    clearMessage () {
      this.query = ''
    },
  },
}
</script>

<style>

</style>