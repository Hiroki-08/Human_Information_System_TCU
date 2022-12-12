<template>
  <div>
    <v-main>
      <v-toolbar
        height=32
        color="white"
        dense
        flat
        fixed
        width="390px"
        app
      >
        <v-spacer></v-spacer>

        <v-toolbar-title style="color:orange; font-size: small;">
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
