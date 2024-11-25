<script setup>
import LayoutNav from './components/LayoutNav.vue'
import LayoutHeader from './components/LayoutHeader.vue'
import LayoutFooter from './components/LayoutFooter.vue'
import LayoutFix from './components/LayoutFix.vue'
import {useCategoryStore} from '@/stores/category'
import {onMounted} from 'vue'
const categoryStore=useCategoryStore()
onMounted(() => {
  categoryStore.getCategory()
})


</script>

<template>
    <link rel="stylesheet" href="//at.alicdn.com/t/font_2143783_iq6z4ey5vu.css">
    <LayoutFix/>
    <LayoutNav />
    <LayoutHeader />
    <RouterView />
    <LayoutFooter />
</template>



<style lang="scss" scoped>

</style>
