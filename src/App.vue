<template>
    <div>
        <Homeview></Homeview>
    </div>
</template>

<script>
import Homeview from './views/HomeView.vue';

export default {
    name: 'App',
    components: { // App.vue（ここ）のtemplateタグ内で使うコンポーネントを指定する
        Homeview
    },
    data: () => ({
      //
    }),
};
</script>