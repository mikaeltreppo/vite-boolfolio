<template>
    <div class="card m-3" v-for="proj in projects" style="width: 18rem;">
        <div class="card-body">
            <h5 class="card-title">{{ proj.title }}</h5>
            <h6 class="card-subtitle mb-2 text-body-secondary">{{ proj.author }}</h6>
            <p class="card-text">{{ proj.description }}</p>

        </div>
    </div>
</template>
<script>
import axios from 'axios';
export default {
    name: 'MyCard',
    data() {
        return {
            projects: [],
        }
    },
    methods: {
        getCard() {
            axios.get("http://127.0.0.1:8000/api/projects").then(response => {
                this.projects = response.data.results;
            });
        }
    },
    mounted() {
        if(this.projects.length==0){
        this.getCard()};
    }
}


</script>