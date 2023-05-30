<template>
    <div class="container d-flex flex-wrap justify-content-center">

        <!--cards-->
        <MyCard></MyCard>

    </div>
</template>
<script>

import MyCard from './MyCard.vue';

export default {
    components: { MyCard },
    name: "MyMain",
    data() {
        return {};
    }
  

}
</script>