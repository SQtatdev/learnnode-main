<script setup>
import {ref} from 'vue';

let items = ref(['milk', 'vodka', 'juice', 'snacks', 'chips']);
let newItem = ref('');

function add(){ 
    if(newItem.value.trim() !== ''){ // Trim deletes spaces
        items.value.push(newItem.value.trim());
    }

    newItem.value = '';
}
</script>

<template>
    <div class="conteiner mt-3">
        <div class="content">

            <div class="field has-addons">
                <div class="control is-expanded">
                    <input class="input" type="text" placeholder="Wishlist" v-model="newItem" @keypress.enter="add">
            </div>
            <div class="control">
                <button class="button is-primary" @click="add">
                    Add
                </button>
            </div>
            </div>

        <h1> List </h1>
        <ul>
            <li v-for="item in items">{{ item }}</li>
        </ul>



        </div>
    </div>
</template>
<style>

</style>
