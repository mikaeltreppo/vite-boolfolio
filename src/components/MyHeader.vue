
<template>
<ul class="nav nav-tabs">
  <li class="nav-item">
    <a class="nav-link active" aria-current="page" href="#">Active</a>
  </li>
  <li class="nav-item dropdown">
    <a class="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#" role="button" aria-expanded="false">Dropdown</a>
    <ul class="dropdown-menu">
      <li class="nav-item" v-for="item in menuItems"> 
                    <router-link :to="{name: item.routeName}" class="nav-link">{{item.label}}</router-link>
                </li>
    </ul>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="#">Link</a>
  </li>
  <li class="nav-item">
    <a class="nav-link disabled">Disabled</a>
  </li>
</ul>
  </template>



<script>
    export default{
        name: 'MyHeader',
        data(){
          return{  menuItems: [
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