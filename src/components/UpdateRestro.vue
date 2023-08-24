<template>
    <Headers />
    <h1>Please Click to Update the Restraunt</h1>
    <form class="update">
        <input type="text" placeholder="Enter Name" v-model="this.restaurant.name" name="name">
        <input type="text" placeholder="Enter Your Address" v-model="this.restaurant.address" name="address">
        <input type="text" placeholder="Enter Your contact" v-model="this.restaurant.contact" name="contact">
        <button class="button" v-on:click="updateRestro">Update Restaurant</button>
    </form>
</template>

<script>
import axios from 'axios';
import Headers from './Headers.vue';
export default {
    name: 'UpdateRestro',
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
        async updateRestro() {
            const result = await axios.put("http://localhost:3000/restaurant/" + this.$route.params.id, {
                name: this.restaurant.name,
                address: this.restaurant.address,
                contact: this.restaurant.contact,
            });
            if (result.status == 200) {
                try {
                    this.$router.push({ name: 'Home' });
                } catch (error) {
                    console.error('Error during navigation:', error);
                }

            }
        }
    },
    async mounted() {
        let user = localStorage.getItem('user-info');
        if (!user) {
            this.$router.push({ name: 'SignUp' })
        }
        const result = await axios.get("http://localhost:3000/restaurant/" + this.$route.params.id);
        this.restaurant = result.data;

    }
}
</script>