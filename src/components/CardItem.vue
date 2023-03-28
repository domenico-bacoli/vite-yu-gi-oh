<script>
export default {
    data() {
        return {

        };
    },

    props: {
        card: Object,
    },
}
</script>

<template>
    <div class="card">
        <div class="card-image">
            <img :src="card.card_images[0].image_url" alt="card image">
        </div>
        <div class="card-details">
            <strong>{{ card.name }}</strong>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.card {
    width: calc(100% / 5 - (20px / 5 * 4));

    img {
        width: 100%;
    }

    .card-details {
        text-align: center;
        text-transform: uppercase;
        padding-top: 10px;
    }
}
</style>