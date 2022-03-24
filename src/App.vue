<template>
  <v-app>
      <Topbar/>
      <Body/>
  </v-app>
</template>

<script>
import Topbar from "@/components/Topbar"
import Body from "@/components/Body"
export default {
  name: 'App',
  components: {
    Topbar,
    Body,
  }
};
</script>
