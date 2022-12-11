<template>
  <v-app style="width: 390px;">
    <TitleBar></TitleBar>
    <HomeView></HomeView>
    <RouterView/>
    <NaviBar></NaviBar>
  </v-app>
</template>

<script>
import TitleBar from "@/components/TitleBar.vue";
import NaviBar from '@/components/NaviBar.vue';
import HomeView from "@/views/HomeView.vue"
import { RouterView } from "vue-router";

export default {
  name: 'App',
  components: {
    TitleBar,
    HomeView,
    NaviBar,
    RouterView
},
  data: () => ({
  }),
};
</script>

<style>
  .template{
    font-family: "meiryo" !important;
  }
</style>