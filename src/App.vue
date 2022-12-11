<template>
  <v-app style="width: 390px;">
    <TitleBar></TitleBar>
    <RouterView/>
    <NaviBar></NaviBar>
  </v-app>
</template>

<script>
import TitleBar from "@/components/TitleBar.vue";
import NaviBar from '@/components/NaviBar.vue';
import { RouterView } from "vue-router";

export default {
  name: 'App',
  components: {
    TitleBar,
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