<template>
    <h1>singolo post</h1>
</template>
<script>
import axios from 'axios';
import { store } from '../../store';


export default {
    name: 'SinglePost',
    data() {
        return {
            store
        }
    },
    mounted() {
        const slug = this.$route.params;
        axios.get(`${this.store.baseUrl}/api/projects/${slug}`).then(response => {
          

            this.projects = response.data.results;
   console.log(response)


        });
   
    }
}
</script>