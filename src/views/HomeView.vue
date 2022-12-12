<template>
  <v-main class=mx-2>

    <v-toolbar
        height=32
        color="white"
        dense
        flat
        fixed
        width="390px"
        app
      >
        <v-spacer></v-spacer>

        <v-toolbar-title style="color:orange; font-size: small;">
          ホーム
        </v-toolbar-title>

        <v-spacer></v-spacer>

    </v-toolbar>

    <v-divider></v-divider>

    <h4 class=mt-2>日替わりメニュー</h4>

    <v-sheet>
      <v-slide-group
        center-active
      >
        <v-slide-item class=mx-2>
          <v-card
            to="/menu"
            falt
            width="300px"
          >
            <v-img
              height="200px"
              src="@/assets/fried_white_fish_cheese_and_fried_squid.jpg"
            ></v-img>
          </v-card>
        </v-slide-item>

        <v-slide-item class=mx-2>
          <v-card
            to="/menu"
            flat
            width="300px"
          >
            <v-img
              height="200px"
              src="@/assets/japanese-style_beef_egg_binding.jpg"
            ></v-img>
          </v-card>
        </v-slide-item>
        
      </v-slide-group>
    </v-sheet>

    <h4 class=mt-2>混雑状況</h4>
    <v-card
      to="/menu"
      flat
      class=mx-2
    >
      <v-img
        src="@/assets/congestion_situation_1.png"
      ></v-img>
    </v-card>

  </v-main>
</template>

<script>
export default {
name: "HomeView",
components: {

},
data: () => ({ value: 1 }),
}
</script>