<template>
    <div>
        <Header></Header>
        <Body></Body>
        <Body></Body>
    </div>
</template>

<script>
import Homeview from './views/Homeview.vue';

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