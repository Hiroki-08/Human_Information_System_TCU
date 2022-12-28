<template>
  <v-main class=mx-4>
    <v-app-bar flat height=32 max-width=390px color="orange" dense fixed app>
      <v-spacer></v-spacer>

      <v-app-bar-title style="color:white; font-size: small;">
        <b>からあげ丼/弁当</b>
      </v-app-bar-title>

      <v-spacer></v-spacer>

    </v-app-bar>

    <v-divider></v-divider>

    <v-container class="px-0">
      <v-img src="@/assets/karaage.jpg" class="mb-4"></v-img>

      <v-app-bar flat color="white" dense>
        カテゴリー
        <v-spacer></v-spacer>
        都市大からあげ専門店
      </v-app-bar>
      <v-divider></v-divider>

      <v-app-bar flat color="white" dense>
        メニュー
        <v-spacer></v-spacer>
        からあげ丼/弁当
      </v-app-bar>
      <v-divider></v-divider>

      <v-app-bar flat color="white" dense>
        値段
        <v-spacer></v-spacer>
        ¥500
      </v-app-bar>
      <v-divider></v-divider>

      <v-app-bar flat color="white" dense>
        カロリー
        <v-spacer></v-spacer>
        1064kcal
      </v-app-bar>
      <v-divider></v-divider>

      <v-app-bar flat color="white" dense class="my-2">
        アレルゲン
        <v-spacer></v-spacer>
        <v-card flat>
          ⼩⻨・鶏⾁
        </v-card>
      </v-app-bar>


      <v-col class="pb-0">
        <v-card height="70px" flat></v-card>
      </v-col>

    </v-container>
  </v-main>
</template>

<script>
export default {
  name: "MenuCurry",
  components: {

  },
  data: () => ({
  }),
}
</script>