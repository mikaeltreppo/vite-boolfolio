<template>
    <div class="mt-5 d-flex justify-content-center">
        <div class="card" style="width: 18rem;">
            <img src="https://picsum.photos/200/300" class="card-img-top" alt="...">
            <div class="card-body">
                <h2 class="card-title" v-if="data && data.project">{{ data.project.title }}</h2>
                <p class="card-text" v-if="data && data.project">{{ data.project.description }}</p>
                <h5 class="card-title" v-if="data && data.project">{{ data.project.author }}</h5>
            </div>
        </div>
    </div>
</template>
<script>
import axios from 'axios';
import { store } from '../../store';


export default {
    name: 'SinglePost',

    data() {
        return {
            store,
            data: null,

        }
    },
    mounted() {
        const id = parseInt(this.$route.params.id);


        axios.get(`http://127.0.0.1:8000/api/projects/${id}`).then(response => {



            this.data = response.data;



        });

    }
}
</script>