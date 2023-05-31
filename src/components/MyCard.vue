<template>
    <div class="card m-3" v-for="proj in projects" style="width: 18rem;">
        <div class="card-body">
            <h5 class="card-title">{{ proj.title}}</h5>
            <h6 class="card-subtitle mb-2 text-body-secondary">{{ proj.author }}</h6>
            <p class="card-text">{{ proj.description }}</p>
            <router-link :to="{name: 'singleproject', params: {slug: proj.id}}" class="btn btn-primary">
                Vedi post completo
            </router-link>

        </div>
    </div>
</template>
<script>
import axios from 'axios';
import { store } from '../../store';
export default {
    name: 'MyCard',
    data() {
        return {
            projects: [],
            store
        }
    },
    methods: {
        getCard() {
            axios.get(`${this.store.baseUrl}/api/projects`).then(response => {    console.log(response)

                this.projects = response.data.results.data;
            

            });
        }
    },
    mounted() {
        if(this.projects.length==0){
        this.getCard()};
    }
}


</script>