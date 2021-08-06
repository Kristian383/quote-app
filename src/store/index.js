import { createStore } from "vuex";

const store = createStore({
    state() {
        return {
            sampleQuoteCards: [
                {
                    id: 1,
                    quoteTitle: "Quote Card #1",
                    quoteCoverPhoto: "stock-1",
                    quoteDate: "Aug 6, 2021",
                },
                {
                    id: 2,
                    quoteTitle: "Quote Card #2",
                    quoteCoverPhoto: "stock-2",
                    quoteDate: "Aug 6, 2021",
                },
                {
                    id: 3,
                    quoteTitle: "Quote Card #3",
                    quoteCoverPhoto: "stock-3",
                    quoteDate: "Aug 6, 2021",
                },
                // {
                //   id: 4,
                //   quoteTitle: "Quote Card #4",
                //   quoteCoverPhoto: "stock-4",
                //   quoteDate: "Aug 6, 2021",
                // },
            ],
        }
    },
    actions: {

    },
    mutations: {},
    getters: {
        getQuotes(state) {
            return state.sampleQuoteCards;
        }
    }

})

export default store;