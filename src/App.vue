<script>
import MyHeader from './components/MyHeader.vue';
import MyMain from './pages/MyMain.vue';


export default {
  components: {
    MyHeader,
    MyMain
  }
};
</script>

<template>
  <MyHeader>
  </MyHeader>
  
<router-view></router-view>
</template>

<style lang="scss">
@use './style/general.scss';
</style>
