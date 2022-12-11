<template>
  <v-app>
    <v-bottom-navigation
      :value="value"
      color="orange"
      background-color="blue"
      min-width=256
      max-width=390
      fixed
      grow
    >
      <v-divider></v-divider>

      <v-btn value="home" color="white">
        <span>ホーム</span>

        <v-icon>mdi-home</v-icon>
      </v-btn>

      <v-btn value="menu" color="white">
        <span>メニュー</span>

        <v-icon>mdi-silverware-fork-knife</v-icon>
      </v-btn>

      <v-btn value="book" color="white">
        <span>予約</span>

        <v-icon>mdi-checkbox-marked-circle-outline</v-icon>
      </v-btn>

    </v-bottom-navigation>
  </v-app>
</template>

<script>
export default {
  name: "NavBar",
  components: {

  },
  data: () => ({ value: 1 }),
}
</script>
