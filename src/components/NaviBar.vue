<template>
  <v-app>
    <v-divider></v-divider>
    <v-bottom-navigation
    class="navi"
      :value="value"
      color="orange"
      min-width=256
      max-width=390
      fixed
      grow
      
    >
      <v-btn>
        <span>ホーム</span>

        <v-icon>mdi-home</v-icon>
      </v-btn>

      <v-btn>
        <span>メニュー</span>

        <v-icon>mdi-silverware-fork-knife</v-icon>
      </v-btn>

      <v-btn>
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

<style scoped>
</style>
