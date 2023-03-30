<script>
//importo lo store indicando il path corretto
import { store } from "../store.js";
//importo il componente
import CardSearch from "./CardSearch.vue";
import CardItem from "./CardItem.vue";
import CardSearchNumber from "./CardSearchNumber.vue";
//importo axios
import axios from "axios";

export default {
    data() {
        return {
            store,
        };
    },

    created() {
        //richiesta API che avverrà al caricamento della pagina 
        axios.get('https://db.ygoprodeck.com/api/v7/cardinfo.php?num=50&offset=0').then((res) => {
            this.store.cards = res.data.data;
            this.store.isLoading = false;
        });
    },

    components: {
        CardItem,
        CardSearch,
        CardSearchNumber,
    },

    methods: {
        search() {
            let apiNewString = this.store.apiCall + this.store.apiQuery + this.store.cardName;
            axios.get(apiNewString).then((res) => {
                this.store.cards = res.data.data;
                this.store.apiCount = res.data.data.length;
            })
                .catch((error) => {
                    console.log(error);
                    if (error.response.status == 400) {
                        this.store.cards = [];

                    } else {
                        alert("Errore: " + error.response.statusText);
                    }
                });
        },
    },
}
</script>

<template>
    <div v-if="store.isLoading" class="loader">Loading...</div>
    <CardSearch @searchCard="search()"></CardSearch>

    <CardSearchNumber></CardSearchNumber>

    <div v-if="store.cards.length == 0" class="unknown-card">Non è stata trovata nessuna carta!</div>

    <div v-else class="main-container container-centered">
        <CardItem v-for="card in store.cards" :card="card"></CardItem>
    </div>
</template>

<style lang="scss" scoped>
.loader {
    font-size: 40px;
    text-align: center;
}

.unknown-card {
    text-align: center;
    font-style: italic;
    font-size: 30px;
    padding-top: 30px;
}

.main-container {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    padding: 40px 0;
}
</style>