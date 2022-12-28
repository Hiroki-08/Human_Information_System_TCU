<template>
  <v-main class=mx-4>
    <v-app-bar height=32 color="orange" dense flat fixed max-width="390px" app>
      <!-- <v-btn icon to="/book">
        <v-icon>mdi-arrow-left</v-icon>
      </v-btn> -->
      <v-spacer></v-spacer>

      <v-toolbar-title style="color:white; font-size: small;">
        <b>時刻選択</b>
      </v-toolbar-title>


      <v-spacer></v-spacer>

    </v-app-bar>

    <v-divider></v-divider>

    <h4 class=mt-2>予約可能時間</h4>

    <v-container class="pa-0">

      <v-btn text block to="/book/booktime/bookseat" class="pt-6 pb-4 mt-1" height="54px">
        12:15~12:50
        <v-spacer></v-spacer>
        <v-icon>mdi-chevron-right</v-icon>
      </v-btn>
      <v-divider></v-divider>

      <v-btn text block to="" class="pt-6 pb-4 mt-1" height="54px">
        12:50~13:15
        <v-spacer></v-spacer>
        <v-icon>mdi-chevron-right</v-icon>
      </v-btn>
      <v-divider></v-divider>

      <v-btn text block to="" class="pt-6 pb-4 mt-1" height="54px">
        13:15~13:40
        <v-spacer></v-spacer>
        <v-icon>mdi-chevron-right</v-icon>
      </v-btn>
      <v-divider></v-divider>

    </v-container>
  </v-main>
</template>

<script>
export default {
  name: "BookTime",
  components: {

},
  data: () => ({ value: 1 }),
  }
