<script>
import { store } from "../store.js";

export default {
    data() {
        return {
            store,
        };
    },
}
</script>

<template>
    <div id="card-search">
        <input v-model="store.cardName" type="text" placeholder="Scrivi il nome di una carta"
            @keyup.enter="$emit('searchCard')">
        <div id="button-search">
            <button @click="$emit('searchCard')">CERCA</button>
        </div>
    </div>
</template>

<style lang="scss" scoped>
#card-search {
    padding-top: 40px;
    text-align: center;
    width: 100%;

    input {
        padding: 20px 80px;
        border-radius: 20px;
    }

    #button-search {
        padding-top: 20px;

        button {
            padding: 6px 18px;
            border: none;
            border-radius: 8px;
            cursor: pointer;
        }
    }
}
</style>