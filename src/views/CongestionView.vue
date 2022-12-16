<template>
  <v-main class=mx-4>
    <v-app-bar height=32 color="white" dense flat fixed app>
      <v-spacer></v-spacer>

      <v-toolbar-title style="color:orange; font-size: small;">
        <b>混雑状況</b>
      </v-toolbar-title>

      <v-spacer></v-spacer>

    </v-app-bar>

    <v-divider></v-divider>

    <h4 class=mt-2>各座席の混雑状況</h4>

    <v-container>
      <v-img src="@/assets/congestion_situation_2.png"></v-img>
    </v-container>

    <v-btn to="/" block class="my-8 white--text" color="orange">
      <b>ホーム</b>
    </v-btn>

  </v-main>
</template>
  
<script>
export default {
  name: "CongestionView",
  components: {

  },
  data: () => ({}),
}
</script>