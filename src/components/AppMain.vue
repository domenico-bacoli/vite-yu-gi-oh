<script>
//importo lo store indicando il path corretto
import { store } from "../store.js";
//importo il componente
import CardItem from "./CardItem.vue";
//importo axios
import axios from "axios";

export default {
    data() {
        return {
            store,
        };
    },

    components: {
        CardItem,
    },

    created() {
        //richiesta API che avverrà al caricamento della pagina 
        axios.get('https://db.ygoprodeck.com/api/v7/cardinfo.php?num=50&offset=0').then((res) => {
            this.store.cards = res.data.data;
        });
    },

}
</script>

<template>
    <div class="main-container container-centered">
        <CardItem v-for="card in store.cards" :card="card"></CardItem>
    </div>
</template>

<style lang="scss" scoped>
.main-container {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    padding: 60px 0;
}
</style>