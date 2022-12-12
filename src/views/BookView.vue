<template>
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
          予約状況
        </v-toolbar-title>

        <v-spacer></v-spacer>

    </v-toolbar>

    <v-divider></v-divider>

  </v-main>
</template>

<script>
export default {
name: "BookView",
components: {

},
data: () => ({ value: 1 }),
}
</script>