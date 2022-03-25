<template v-for="item in [list]">
  <v-app id="inspire" class="mt-16">
    <v-data-table
        :headers="headers"
        :items="$store.getters.getTextField"
        :items-per-page="10"
        class="elevation-1"
    ></v-data-table>
  </v-app>
</template>

<script>
export default {
    data () {
        return {
            headers: [
                {
                    text: 'List package versions:',
                    align: 'center',
                    sortable: false,
                    value: 'name',
                },
            ],
        }
    },
    mounted() {
        this.$store.dispatch("fetchList", this.$store.getters.getQuery)
    },
    methods: {
        
    }
}
</script>

<style>

</style>