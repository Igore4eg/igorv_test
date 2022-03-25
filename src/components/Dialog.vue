<template>
    <v-dialog
        v-model="dialog"
        persistent
        max-width="450"
      >
        <v-card>
            <v-card-title>Hello</v-card-title>
            <v-card-text>World</v-card-text>
        </v-card>
      </v-dialog>
</template>

<script>
export default {
    data: () => {
        dialog: false
    }
}
</script>

<style>

</style>