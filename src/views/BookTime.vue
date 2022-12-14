<template>
  <v-main class=mx-4>
    <v-app-bar height=32 color="white" dense flat fixed max-width="390px" app>
      <v-btn icon to="/book">
        <v-icon>mdi-arrow-left</v-icon>
      </v-btn>
      <v-spacer></v-spacer>

      <v-container>
        <v-toolbar-title style="color:orange; font-size: small;">
          <b>時刻選択</b>
        </v-toolbar-title>
      </v-container>

      <v-spacer></v-spacer>

    </v-app-bar>

    <v-divider></v-divider>

    <h4 class=mt-2>予約可能時間</h4>

    <v-container>
      <div v-for="(time) in timeLists" :key="time">
        <v-btn text block to="/book/booktime/bookseat" class="pt-6 pb-4">
          {{ time }}
          <v-spacer></v-spacer>
          <v-icon>mdi-chevron-right</v-icon>
        </v-btn>
        <v-divider></v-divider>
      </div>
    </v-container>

  </v-main>
</template>

<script>
export default {
  name: "BookTime",
  components: {},
  data: () => ({
    timeLists: [
      "12:15~12:50",
      "12:50~13:15",
      "13:15~13:40"
    ]
  }),
}
</script>