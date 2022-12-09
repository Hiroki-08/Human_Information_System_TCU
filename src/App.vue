
<template>
  <v-app>
    <v-main>
      <!-- 基本は v-main の中に記述するはず     -->
      <!-- コンポーネントは htmlタグみたいに入れられる -->

      <Homeview/>
      <v-container>
        <router-view/>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import Homeview from './views/Homeview.vue';

export default {
    name: 'App',
    components: { // App.vue（ここ）のtemplateタグ内で使うコンポーネントを指定する
        Homeview
    },
    data: () => ({
      //
    }),
};
</script>