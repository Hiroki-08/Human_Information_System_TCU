<template>
  <v-main>
    <h4>日替わりメニュー</h4>
    <v-card 
      :loading="loading"
      width="374px"
    >
      <v-img
      height="230px"
      src='@/assets/fried_white_fish_cheese_and_fried_squid.jpg'
      ></v-img>
    </v-card>
  </v-main>
</template>

<script>
export default {
name: "HomeView",
components: {

},
data: () => ({ value: 1 }),
}
</script>