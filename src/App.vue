<template>
  <v-app style="width: 390px;height: 500px;">
    <TitleBar></TitleBar>
    <v-divider></v-divider>
    <HomeView></HomeView>
    <NaviBar></NaviBar>
  </v-app>
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
    font-family: "meiryo" !important;
  }
  .v-application--wrap{
    height: 0 !important;
  }
</style>