<template>
  <v-main class=mx-4>
    <v-app-bar
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

      <v-container>
      <v-toolbar-title style="color:orange; font-size: small;">
        <b>席選択</b>
      </v-toolbar-title>
    </v-container>

      <v-spacer></v-spacer>

    </v-app-bar>

    <v-divider></v-divider>


    <h4 class=mt-2>予約可能座席</h4>
    <v-container>



    </v-container>
  </v-main>
</template>

<script>
export default {
name: "BookSeat",
components: {

},
data: () => ({ value: 1 }),
}
</script>