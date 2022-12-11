<template>
  <div>
    <v-main style="padding: 0px 0px 0px 0px">
      <v-toolbar
        height=36
        color="white"
        dense
        flat
        fixed
        width="390px"
        app
      >
        <v-spacer></v-spacer>

        <v-toolbar-title style="color:orange; font-size:20px;" app>
          ホーム
        </v-toolbar-title>

        <v-spacer></v-spacer>

      </v-toolbar>

      <v-divider></v-divider>

    </v-main>
    </div>
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
