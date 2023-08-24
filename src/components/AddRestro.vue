<template>
    <Headers />
    <h1>Hola user ! Please Click to Add the Restraunt</h1>
    <form class="add">
        <input type="text" placeholder="Enter Name" v-model="this.restaurant.name" name="name">
        <input type="text" placeholder="Enter Your Address" v-model="this.restaurant.address" name="address">
        <input type="text" placeholder="Enter Your contact" v-model="this.restaurant.contact" name="contact">
        <button class="button" v-on:click="addRestro">Add New Restaurant</button>
    </form>
</template>

<script>
import axios from 'axios';
import Headers from './Headers.vue';
export default {
    name: 'AddRestro',
    components: {
        Headers,
    },
    data() {
        return {
            restaurant: {
                name: '',
                address: '',
                contact: ''
            }
        }
    },
    methods: {
        async addRestro() {
            let result = await axios.post('http://localhost:3000/restaurant', {
                name: this.restaurant.name,
                address: this.restaurant.address,
                contact: this.restaurant.contact,
            });
            if (result.status == 200 || result.status == 201) {
                try {
                    this.$router.push({ name: 'Home' });
                } catch (error) {
                    console.error('Error during navigation:', error);
                }

            }
            console.log(result.data);
        }

    },
    mounted() {
        let user = localStorage.getItem('user-info');
        if (!user) {
            this.$router.push({ name: 'SignUp' })
        }
    }
}
</script>