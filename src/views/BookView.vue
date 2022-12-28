<template>
  <v-main class=mx-4>
    <v-app-bar height=32 max-width=390px color="orange" dense flat fixed app>
      <v-spacer></v-spacer>

      <v-toolbar-title style="color:white; font-size: small;">
        <b>予約状況</b>
      </v-toolbar-title>

      <v-spacer></v-spacer>

    </v-app-bar>

    <v-divider></v-divider>

    <h4 class=mt-2>予約状況</h4>
    <v-card>
      <v-card-text>予約はありません</v-card-text>
    </v-card>
    <v-btn to="/book/booktime" block class="my-8 white--text" color="orange">
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