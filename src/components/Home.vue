<template>
    <Headers />
    <h1>Hola {{ name }}! Welcome Abroad</h1>
    <table border="1">
        <tr>
            <td>ID</td>
            <td>Name</td>
            <td>Address</td>
            <td>Contact</td>
            <td>Actions</td>
        </tr>
        <tr v-for="item in restaurant" :key="item.id">
            <td>{{ item.id }}</td>
            <td>{{ item.name }}</td>
            <td>{{ item.address }}</td>
            <td>{{ item.contact }}</td>
            <td>
               <button><router-link :to="'/update/' + item.id">Update</router-link></button> 
                <button v-on:click="deleteRestro(item.id)">Delete</button>
            </td>

        </tr>
    </table>
</template>

<script>
import axios from 'axios';
import Headers from './Headers.vue';
export default {
    name: 'Home',
    data() {
        return {
            name: '',
            restaurant: [],
        }
    },
    components: {
        Headers
    },
    methods: {
        async deleteRestro(id) {
            let result = await axios.delete("http://localhost:3000/restaurant/" + id);
            console.warn(result);
            if (result.status == 200) {
                this.loadData();
            }
        },
        async loadData() {
            let user = localStorage.getItem('user-info');
            this.name = JSON.parse(user).name
            if (!user) {
                this.$router.push({ name: 'SignUp' })
            }
            let result = await axios.get("http://localhost:3000/restaurant");
            console.log(`result`, result);
            this.restaurant = result.data;
        }
    },
    async mounted() {
        this.loadData();
    }
}
</script>

<style>
td {
    width: 160px;
    height: 35px;
}
</style>