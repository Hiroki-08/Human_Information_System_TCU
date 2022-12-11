<template>
  <v-card flat>
    <v-toolbar
      dense
      flat
      tile
      fixed
    >
      <v-spacer></v-spacer>

      <v-toolbar-title class="gray--text">
        Title
      </v-toolbar-title>

      <v-spacer></v-spacer>

    </v-toolbar>
    
    <v-divider></v-divider>
  </v-card>
</template>

<script>
export default {
  name: "TitleBar",
  components: {

  },
  data: () => ({ value: 1 }),
}
</script>

<style scoped>
</style>
