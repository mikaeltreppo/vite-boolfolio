
<template>
<ul class="nav nav-tabs">


  <li class="nav-item dropdown">
    <a class="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#" role="button" aria-expanded="false">Scegli</a>
    <ul class="dropdown-menu">
      <li class="nav-item" v-for="item in menuItems"> 
                    <router-link :to="{name: item.routeName}" class="nav-link">{{item.label}}</router-link>
                </li>
    </ul>
  </li>

</ul>
  </template>



<script>
    export default{
        name: 'MyHeader',
        data(){
          return{
              menuItems: [
                    {
                        label: 'Home',
                        routeName: 'home'
                    },
              
                    {
                        label: 'Contattami',
                        routeName: 'contact'
                    },
                ]}
        }
    }

</script>