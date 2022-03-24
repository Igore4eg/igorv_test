<template v-for="item in [list]">
  <v-app id="inspire" class="mt-16">
    <v-data-table
        :headers="headers"
        :items="list"
        :items-per-page="10"
        class="elevation-1"
    ></v-data-table>
  </v-app>
</template>

<script>
import axios from 'axios'
export default {
    data () {
        return {
            headers: [
                {
                    text: 'List jsDelivr API:',
                    align: 'center',
                    sortable: false,
                    value: 'name',
                },
            ],
            list: [],
        }
    },
    mounted() {
        this.fetchToDo();
    },
    methods: {
        fetchToDo () {
            axios
                .get('https://data.jsdelivr.com/v1/package/npm/jquery')
                .then(response => { 
                    this.list = response.data.versions; 
                    this.list = this.list.map((item) => ({ "name": item }))
                })
                .catch(error => console.log(error));
        }
    }
}
</script>

<style>

</style>