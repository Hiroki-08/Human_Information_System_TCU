<template>
  <v-card flat>
    <v-app-bar
      color="white"
      dense
      flat
      fixed
      width="390px"
    >
      <v-spacer></v-spacer>

      <v-toolbar-title style="color:orange; font-size:100;">
        Title
      </v-toolbar-title>

      <v-spacer></v-spacer>

    </v-app-bar>

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
