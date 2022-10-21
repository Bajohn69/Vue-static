<script setup>
import { ref } from 'vue';

const msg = ref('')
// ref 打了之後直接按 tab 會幫你生成 import { ref } from 'vue';
</script>

<template>
    <input type="text" v-model="msg">
    <h3>Hello {{ msg }} !</h3>
</template>

<style scoped>
    h3{
        color: lightcoral;
    }
</style>