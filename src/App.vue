<template>
  <v-app style="max-width: 690px; max-height: 690px;">
    <RouterView />
    <NaviBar></NaviBar>
  </v-app>
</template>

<script>
import NaviBar from '@/components/NaviBar.vue';
import { RouterView } from "vue-router";

export default {
  name: 'App',
  components: {
    NaviBar,
    RouterView
  },
  data: () => ({
  }),
};
</script>

<style>
.template {
  font-family: "meiryo" !important;
}
</style>