<template>
  <v-main class=mx-4>
    <v-app-bar height=32 max-width=390px color="white" dense flat fixed app>
      <v-spacer></v-spacer>

      <v-toolbar-title style="color:orange; font-size: small;">
        <b>予約状況</b>
      </v-toolbar-title>

      <v-spacer></v-spacer>

    </v-app-bar>

    <v-divider></v-divider>

    <h4 class=mt-2>予約状況</h4>
    <v-card class="mb-8">
      <v-card-title>12:15~12:50<br>6番席</v-card-title>
      <v-card-subtitle>に予約されています。</v-card-subtitle>
    </v-card>

    <v-card height="200px" flat></v-card>

    <v-container width="390px">
    <v-row justify="center">
        <v-dialog v-model="dialog" persistent max-width="290">
          <template v-slot:activator="{ on, attrs }">
            <v-btn color="error" v-bind="attrs" v-on="on" large>
              <b>予約をキャンセル</b>
            </v-btn>
          </template>
          <v-card>
            <v-card-title class="text-h7">
              以下の予約を取り消しますか？
            </v-card-title>

            <v-card-title>12:15~12:50<br>6番席</v-card-title>

            
            <v-card-actions>
              <!-- <v-spacer></v-spacer> -->
              <v-btn color="green darken-1" text @click="dialog = false">
                いいえ
              </v-btn>

              <v-spacer></v-spacer>

              <v-btn color="red darken-1" text to="/book">
                はい
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
    </v-row>
    </v-container>



  </v-main>
</template>
<script>
export default {
  name: "BookCancel",
  components: {

  },
  data() {
    return {
      dialog: false,
    }
  },
}
</script>