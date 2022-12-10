<template>
  <v-bottom-navigation
    :value="value"
    color="orange"
    grow
  >
    <v-btn>
      <span>ホーム</span>

      <v-icon>mdi-history</v-icon>
    </v-btn>

    <v-btn>
      <span>メニュー</span>

      <v-icon>mdi-heart</v-icon>
    </v-btn>

    <v-btn>
      <span>予約</span>

      <v-icon>mdi-map-marker</v-icon>
    </v-btn>

  </v-bottom-navigation>
</template>

<script>
export default {
  name: "NavBar",
  components: {

  },
  data: () => ({ value: 1 }),
}
</script>

<!-- <style scoped>
</style> -->
