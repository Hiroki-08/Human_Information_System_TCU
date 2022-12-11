<template>
  <div style="width: 390px;">
    <div>
      <TitleBar></TitleBar>
      <HomeView></HomeView>
      <NaviBar></NaviBar>

    </div>
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
  NaviBar,
  HomeView
},
  data: () => ({
  }),
};
</script>