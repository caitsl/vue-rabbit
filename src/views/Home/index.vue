<script setup>
import HomeBanner from './components/HomeBanner.vue';
import HomeCategory from './components/HomeCategory.vue';
import HomeHot from './components/HomeHot.vue';
import HomeNew from './components/HomeNew.vue';
import HomeProduct from './components/HomeProduct.vue';
import HomePanel from './components/HomePanel.vue';
</script>

<template>
     <div class="container">
        <HomeCategory/>
        <HomeBanner/>
     </div>
     <HomeNew/>
     <HomeHot/>
     <HomeProduct/>
     <HomePanel title="新鲜好物" subTitle="新鲜出炉 品质靠谱">
        我是新鲜好物的内容
     </HomePanel>
     <HomePanel title="人气推荐" subTitle="人气爆款 不容错过谱">
       我是人气推荐的内容
     </HomePanel>
</template>

<style lang="scss" scoped>
</style>
