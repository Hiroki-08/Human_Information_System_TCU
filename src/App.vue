<template>
  <div style="width: 390px;">
      <TitleBar></TitleBar>
        <v-app>
          <HomeView style="padding: 10px;"></HomeView>
        </v-app>
      <NaviBar></NaviBar>
    </div>
</template>

<script>
import TitleBar from "@/components/TitleBar.vue";
import NaviBar from '@/components/NaviBar.vue';
import HomeView from "@/views/HomeView.vue"


export default {
  name: 'App',
  components: {
  TitleBar,
  HomeView,
  NaviBar,

},
  data: () => ({
  }),
};
</script>

<style>
  .template{
      font-family:"meiryo" !important;
  }
</style>