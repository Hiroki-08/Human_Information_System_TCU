<template>
  <v-main>
    <v-bottom-navigation
      flat
      color="white"
      background-color="orange"
      min-width=256
      max-width=390px
      height=64px
      fixed
      grow
    >
      <v-btn to="/" value="home" color="orange" x-large height=64px >
        <span style="font-size: 10px">ホーム</span>

        <v-icon>mdi-home</v-icon>
      </v-btn>

      <v-btn to="/menu" value="menu" color="orange" x-large height=64px >
        <span style="font-size: 10px">メニュー</span>

        <v-icon>mdi-silverware-fork-knife</v-icon>
      </v-btn>

      <v-btn to="/book" value="book" color="orange" x-large height=64px >
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
