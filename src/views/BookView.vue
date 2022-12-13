<template>
  <v-main class=mx-4>
    <v-toolbar
      height=32
      color="white"
      dense
      flat
      fixed
      max-width="390px"
      app
    >
      <v-spacer></v-spacer>

      <v-toolbar-title style="color:orange; font-size: small;">
        <b>予約状況</b>
      </v-toolbar-title>

      <v-spacer></v-spacer>

    </v-toolbar>

    <v-divider></v-divider>

    <h4 class=mt-2>予約状況</h4>
    <v-card>
      <v-card-text>予約はありません</v-card-text>
    </v-card>
    <v-btn
      to="/menu"
      block
      class="my-8 white--text"
      color="orange"
    >
      <b>席を予約する</b>
    </v-btn>


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