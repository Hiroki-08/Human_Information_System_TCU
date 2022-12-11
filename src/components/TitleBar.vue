<template>
  <v-app>
    <v-app-bar
      color="white"
      dense
      flat
      fixed
      width="390px"
    >
      <v-spacer></v-spacer>

      <v-toolbar-title style="color:orange; font-size:20px;">
        ホーム
      </v-toolbar-title>

      <v-spacer></v-spacer>

    </v-app-bar>

    <v-divider></v-divider>

  </v-app>
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
