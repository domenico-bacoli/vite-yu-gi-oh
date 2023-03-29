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
    <div class="card-number">
        <p>Il numero di carte visualizzate è: <span>{{ this.store.cards.length }}</span></p>
    </div>
</template>

<style lang="scss" scoped>
.card-number {
    text-align: center;
    font-weight: bold;
    font-size: 20px;
    padding-top: 20px;

    span {
        font-size: 30px;
        padding: 0 6px;
    }
}
</style>