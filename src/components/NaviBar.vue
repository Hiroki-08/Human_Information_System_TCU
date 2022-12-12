<template>
  <v-main>
    <h2>value: {{ value }}</h2>
    <v-bottom-navigation
      v-model="value1"
      flat
      color="orange"
      background-color="blue"
      min-width=256
      max-width=390
      fixed
      grow
    >
      <v-btn to="/" value="home" color="white">
        <span style="font-size: 10px">ホーム</span>

        <v-icon>mdi-home</v-icon>
      </v-btn>

      <v-btn to="/menu" value="menu" color="white">
        <span style="font-size: 10px">メニュー</span>

        <v-icon>mdi-silverware-fork-knife</v-icon>
      </v-btn>

      <v-btn to="/book" value="book" color="white">
        <span style="font-size: 10px">予約</span>

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
  data: () => ({ value: 1 }),
  methods: {
    sendToParent() {
      this.$emit("textForParent", this.value1);
    }
  },
}
</script>
