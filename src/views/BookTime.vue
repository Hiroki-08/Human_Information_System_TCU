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
      to="/book"
    >
      <v-icon>mdi-arrow-left</v-icon>
    </v-btn>
      <v-spacer></v-spacer>

      <v-continer>
      <v-toolbar-title style="color:orange; font-size: small;">
        <b>時刻選択</b>
      </v-toolbar-title>
    </v-continer>

      <v-spacer></v-spacer>

    </v-toolbar>

    <v-divider></v-divider>

    <h4 class=mt-2>予約可能時間</h4>
    <v-continer>
      <v-row>
        <v-col>
          <v-btn text block to="/book/booktime/bookseat" class="pt-6 pb-4">
            12:15~12:50
            <v-spacer></v-spacer>
            <v-icon>mdi-chevron-right</v-icon>
          </v-btn>
          <v-divider></v-divider>

          <v-btn text block class="pt-6 pb-4">
            12:50~13:15
            <v-spacer></v-spacer>
            <v-icon>mdi-chevron-right</v-icon>
          </v-btn>
          <v-divider></v-divider>

          <v-btn text block class="pt-6 pb-4">
            13:15~13:40
            <v-spacer></v-spacer>
            <v-icon>mdi-chevron-right</v-icon>
          </v-btn>
          <v-divider></v-divider>
        </v-col>
      </v-row>

    </v-continer>
  </v-main>
</template>

<script>
export default {
name: "BookTime",
components: {

},
data: () => ({ value: 1 }),
}
</script>