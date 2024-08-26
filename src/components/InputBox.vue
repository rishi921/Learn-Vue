<script setup>
    import { ref } from 'vue';
    let userName = ref('');
    let password = ref('');
    let message = ref('');

    const checkPassword=(e)=>{
        e.preventDefault();
        if(password.value === 'Admin'){
            message.value = 'Welcome ' + userName.value;
        }
        else{
            message.value = 'Incorrect Password';
        }
    }
</script>
<template>
    <div>
        <form @submit.prevent="checkPassword">
            <label for="name">Name</label>
            <!-- v-bind : Binds the value to the name variable -->
            <input type="text" id="name" v-model="userName">
            <br>
            <label for="password">Password</label>
            <input type="password" id="password" v-model="password">
            <br>
            <label for="message">Message</label>
            <input type="text" id="message" v-model="message">
            <br>
            <button type="submit">Submit</button>
        </form>
        <p>{{ message }}</p>
        
    </div>
</template>