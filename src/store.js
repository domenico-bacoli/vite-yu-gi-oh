import { reactive } from 'vue';

export const store = reactive({
    cards: [],

    apiCall: 'https://db.ygoprodeck.com/api/v7/cardinfo.php?num=50&offset=0',
    apiQuery: '&fname=',

    apiCount: 0,

    isLoading: true,

    cardName: "",
});

