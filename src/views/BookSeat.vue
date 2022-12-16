<template>
  <v-main class=mx-4>
    <v-app-bar height=32 max-width=390px color="white" dense flat fixed app>
      <!-- <v-btn icon to="/book/booktime">
        <v-icon>mdi-arrow-left</v-icon>
      </v-btn> -->
      <v-spacer></v-spacer>

      <v-toolbar-title style="color:orange; font-size: small;">
        <b>座席選択</b>
      </v-toolbar-title>

      <v-spacer></v-spacer>

    </v-app-bar>

    <v-divider></v-divider>

    <h4 class=mt-2>予約可能座席</h4>

    <v-container>
      <v-img src="@/assets/seat_reservation.png"></v-img>

      <v-select v-model="selected" :items="items" label="席番号" dense outlined class="mt-4">

        <template #search="{ attributes, events }">
          <input class="vs__search" :required="!selected" v-bind="attributes" v-on="events" />
        </template>

      </v-select>

      <v-btn v-if="selected" to="/book/booktime/bookseat/bookcheck" block color="orange" class="white--text" large>
        <v-icon>mdi-check</v-icon>
        <b>予約確定</b>
      </v-btn>

      <v-col class="pb-0">
        <v-card height="70px" flat></v-card>
      </v-col>

    </v-container>
  </v-main>
</template>

<script>
export default {
  name: "BookSeat",
  components: {

  },
  data: () => ({
    items: ["6"],
    selected: "",
  }),
}
</script>