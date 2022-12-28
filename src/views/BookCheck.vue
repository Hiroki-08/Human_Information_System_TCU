<template>
  <v-main class=mx-4>
    <v-app-bar height=32 max-width=390px color="orange" dense flat fixed app>
      <v-spacer></v-spacer>

      <v-toolbar-title style="color:white; font-size: small;">
        <b>予約完了</b>
      </v-toolbar-title>

      <v-spacer></v-spacer>

    </v-app-bar>

    <v-divider></v-divider>

    <h4 class=mt-2>予約完了</h4>
    <v-card>
      <v-card-title>12:15~12:50<br>6番席</v-card-title>
      <v-card-subtitle>を予約しました。</v-card-subtitle>
    </v-card>
    <v-btn to="/book/bookcancel" block class="my-8 white--text" color="orange">
      <b>予約状況に戻る</b>
    </v-btn>


  </v-main>
</template>

<script>
export default {
  name: "BookCheck",
  components: {

  },
  data: () => ({ value: 1 }),
}
</script>