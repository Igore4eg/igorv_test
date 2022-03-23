<template>
  <v-app>
      <v-app-bar
        absolute
        color="light-blue lighten-3"
        elevate-on-scroll
        scroll-target="#scrolling-techniques-7"
      >
        <v-text-field :rules="rules"></v-text-field>
        <v-btn icon>
          <v-icon>mdi-magnify</v-icon>
        </v-btn>
  
      </v-app-bar>
  </v-app>
</template>

<script>

export default {
  name: 'App',

};
</script>
