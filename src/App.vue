<script setup>
import {ref} from 'vue';
let message = ref('Hello Vue!');
let isReversed = ref(true)
</script>

<template>
    <div class="conteiner mt-3">
        <div class="content">
            <h1 v-if="isReversed">{{ message.split('').reverse().join('') }}</h1>
            <h1 v-else>{{ message }}</h1>
           
             <input class="input my-1" v-model="message" > <!-- v-bind:value="message" @input="message=$event.target.value -->
            <button class="button is-primary" @click="message='Hello Ta23B'" > Click me </button>
            <button class="button is-primary mx-4" @click="isReversed=!isReversed" > reversse again </button>
        </div>
    </div>
</template>
<style>

</style>
