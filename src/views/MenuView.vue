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
        <v-spacer></v-spacer>

        <v-toolbar-title style="color:orange; font-size: small;">
          <b>メニュー</b>
        </v-toolbar-title>

        <v-spacer></v-spacer>

    </v-toolbar>

    <v-divider></v-divider>

    <v-container fluid>
      <v-row>
        <v-col class="pb-0">
          <v-card
            to="/menu"
          >
            <v-img
              class="white--text align-end"
              gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
              height="100px"
              src="@/assets/curry.jpg"
            >
              <v-card-title>カレーライス</v-card-title>
            </v-img>
          </v-card>
        </v-col>

        <v-col class="pb-0">
          <v-card
            to="/menu"
          >
            <v-img
              class="white--text align-end"
              gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
              height="100px"
              src="@/assets/karaage.jpg"
            >
              <v-card-title>からあげ丼/弁当</v-card-title>
            </v-img>
          </v-card>
        </v-col>

        <v-col class="pb-0">
          <v-card
            to="/menu"
          >
            <v-img
              class="white--text align-end"
              gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
              height="100px"
              src="@/assets/japanese-style_beef_egg_binding.jpg"
            >
              <v-card-title>和風牛玉子とじ丼（味噌汁付）</v-card-title>
            </v-img>
          </v-card>
        </v-col>

        <v-col class="pb-0">
          <v-card
            to="/menu"
          >
            <v-img
              class="white--text align-end"
              gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
              height="100px"
              src="@/assets/fried_white_fish_cheese_and_fried_squid.jpg"
            >
              <v-card-title>白身魚チーズフライ&イカフライ</v-card-title>
            </v-img>
          </v-card>
        </v-col>

        <v-col class="pb-0">
          <v-card
            to="/menu"
          >
            <v-img
              class="white--text align-end"
              gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
              height="100px"
              src="@/assets/soy-sauce_ramen.jpg"
            >
              <v-card-title>醤油ラーメン</v-card-title>
            </v-img>
          </v-card>
        </v-col>

        <v-col class="pb-0">
          <v-card
            to="/menu"
          >
            <v-img
              class="white--text align-end"
              gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
              height="100px"
              src="@/assets/miso_soup.jpg"
            >
              <v-card-title>味噌汁</v-card-title>
            </v-img>
          </v-card>
        </v-col>


        <v-col class="pb-0">
          <v-card 
          height="70px"
          flat
          ></v-card>
        </v-col>

      </v-row>
    </v-container>


  </v-main>
</template>

<script>
export default {
name: "MenuView",
components: {

},
data: () => ({ value: 1 }),
}
</script>