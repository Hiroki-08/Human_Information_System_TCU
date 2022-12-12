<template>
  <div>
    <v-main>
      <v-toolbar
        height=32
        color="white"
        dense
        flat
        fixed
        width="390px"
        app
      >
        <v-spacer></v-spacer>

        <v-toolbar-title style="color:orange; font-size: small;">
          {{ title }}
        </v-toolbar-title>
        <NaviBar v-on:textForParent="title = $event"></NaviBar>

        <v-spacer></v-spacer>

      </v-toolbar>

      <v-divider></v-divider>

    </v-main>
    </div>
</template>

<script>
import NaviBar from './NaviBar.vue';

export default {
  name: "TitleBar",
  components: {
    NaviBar,
  },
  data(){
    return {
      title: "" 
    }
  },
}
</script>

<style scoped>
</style>
