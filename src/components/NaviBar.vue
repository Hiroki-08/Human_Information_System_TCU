<template>
  <v-main>
    <v-bottom-navigation
      flat
      color="orange"
      background-color=""
      min-width=256
      max-width=690
      fixed
      grow
    >
      <v-btn to="/" value="home" color="white" x-large>
        <span style="font-size: 10px">ホーム</span>

        <v-icon>mdi-home</v-icon>
      </v-btn>

      <v-btn to="/menu" value="menu" color="white" x-large>
        <span style="font-size: 10px">メニュー</span>

        <v-icon>mdi-silverware-fork-knife</v-icon>
      </v-btn>

      <v-btn to="/book" value="book" color="white" x-large>
        <span style="font-size: 10px">予約状況</span>

        <v-icon>mdi-checkbox-marked-circle-outline</v-icon>
      </v-btn>

    </v-bottom-navigation>
  </v-main>
</template>

<script>
export default {
  name: "NavBar",
  components: {

  },
}
</script>
