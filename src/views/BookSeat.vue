<template>
  <v-main class=mx-4>
    <v-toolbar
      height=32
      color="white"
      dense
      flat
      fixed
      max-width="390px"
      app
    >
    <v-btn
      icon
      to="/book/booktime"
    >
      <v-icon>mdi-arrow-left</v-icon>
    </v-btn>
      <v-spacer></v-spacer>

      <v-continer>
      <v-toolbar-title style="color:orange; font-size: small;">
        <b>席選択</b>
      </v-toolbar-title>
    </v-continer>

      <v-spacer></v-spacer>

    </v-toolbar>

    <v-divider></v-divider>

    <h4 class=mt-2>予約可能座席</h4>

    <v-continer>
    <v-img src="@/assets/seat_reservation.png"></v-img>

    <v-select
          :items="items"
          label="席番号"
          dense
          outlined
          class="mt-4"
        ></v-select>

    <v-btn
      to=""
      block
      color="orange"
      class="white--text"
      large
    >
      <v-icon>mdi-check</v-icon>
      <b>予約確定</b>
    </v-btn>

    </v-continer>

    <v-col class="pb-0">
          <v-card 
          height="70px"
          flat
          ></v-card>
        </v-col>

  </v-main>
</template>

<script>
export default {
name: "BookSeat",
components: {

},
data: () => ({
      items: [ "6" ],
    }),
}
</script>