<template>
    <div class="header">
        <router-link to="/">Home</router-link>
        <router-link to="add">Add Restaurant</router-link>
        <a v-on:click="logout" href="#">Logout</a>
    </div>
</template>

<script>
    export default{
        name:'Headers',
        methods:{
            logout(){
                localStorage.clear();
                this.$router.push({name:'Login'});
            }
        }
    }
</script>

<style>
.header {
    background-color: #333;
    color: #fff; 
    padding: 4px 10px; 
    position: fixed; 
    top: 0; 
    width: 100%; 
    z-index: 1000; 
    display: flex;
    justify-content: space-around;
}
.header a{
    color: #f2f2f2;
    float: left;
    text-align: center;
    padding: 16px 14px;
    text-decoration: none;
    font-size: 16px;
    margin-right: 4px;
}
.header a:hover{
    background-color: #dddd;
    color:#222;
}
</style>