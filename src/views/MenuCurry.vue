<template>
  <v-main class=mx-4>
    <v-app-bar flat height=32 max-width=390px color="white" dense fixed app>
      <v-spacer></v-spacer>

      <v-app-bar-title style="color:orange; font-size: small;">
        <b>カレーライス</b>
      </v-app-bar-title>

      <v-spacer></v-spacer>

    </v-app-bar>

    <v-divider></v-divider>

    <v-container class="px-0">
      <v-img src="@/assets/curry.jpg" class="mb-4"></v-img>

      <v-app-bar flat color="white" dense>
        メニュー
        <v-spacer></v-spacer>
        カレーライス
      </v-app-bar>
      <v-divider></v-divider>

      <v-app-bar flat color="white" dense>
        値段
        <v-spacer></v-spacer>
        ¥310
      </v-app-bar>
      <v-divider></v-divider>

      <v-app-bar flat color="white" dense>
        カロリー
        <v-spacer></v-spacer>
        760kcal
      </v-app-bar>
      <v-divider></v-divider>

      <v-app-bar flat color="white" dense class="my-2">
        アレルゲン
        <v-spacer></v-spacer>
        <v-card flat>
          乳・⼩⻨・⽜⾁・⼤⾖・鶏⾁<br>
          ・豚⾁・やまいも・りんご
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