<template>
  <v-card style="width: 375px; height: 667px;">
    <v-bottom-navigation color="primary" v-model="isActive" absolute="true">
      <v-btn value="menu01">
        <span>menu01</span>
        <v-icon>mdi-history</v-icon>
      </v-btn>

      <v-btn value="menu02">
        <span>menu02</span>
        <v-icon>mdi-heart</v-icon>
      </v-btn>
      
      <v-btn value="menu03">
        <span>menu03</span>
        <v-icon>mdi-map-marker</v-icon>
      </v-btn>
    </v-bottom-navigation>
  </v-card>
</template>

<script src="https://cdn.jsdelivr.net/npm/vue@2.x/dist/vue.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/vuetify@2.x/dist/vuetify.js"></script>

<script>
    new Vue({
        el: '#app',
        vuetify: new Vuetify(),
        data: {
            isActive: 'menu01',
            toggle: true
        }
    });
</script>
