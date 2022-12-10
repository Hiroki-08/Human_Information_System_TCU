<template>
    <div>
        <HomeView></HomeView>
        <NaviBar></NaviBar>

    </div>
</template>

<script>
import NaviBar from '@/components/NaviBar.vue';
import HomeView from "@/views/HomeView.vue"

export default {
    name: 'App',
    components: {
    NaviBar,
    HomeView
},
    data: () => ({
    }),
};
</script>