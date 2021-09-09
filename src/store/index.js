import { createStore } from "vuex";

const store = createStore({
    state() {
        return {
            quotePosts: [
                // {

                //     quoteTitle: "Quote Card #1",
                //     photoURL: "../assets/quoteCards/stock-1.jpg",
                //     quoteDate: "Aug 6, 2021",
                //     photoAuthor: "Steve Vai",
                //     quoteText: "Creativity is just connecting things. When you ask creative people how they did something, they feel a little guilty because they didn't really do it,",
                //     quoteAuthor: "Steve Jobs",
                // },
                // {

                //     quoteTitle: "Quote Card #2",
                //     photoURL: "../assets/quoteCards/stock-2.jpg",
                //     quoteDate: "Aug 6, 2021",
                //     photoAuthor: "",
                //     quoteText: "",
                //     quoteAuthor: "",
                // },
                // {

                //     quoteTitle: "Quote Card #3",
                //     photoURL: "../assets/quoteCards/stock-3.jpg",
                //     quoteDate: "Aug 6, 2021",
                //     photoAuthor: "",
                //     quoteText: "",
                //     quoteAuthor: "",
                // },
            ],

        }
    },
    actions: {

        publishEditedQuote(context, payload) {

            context.commit("editQuote", payload)

        },

        async publishQuote(context, payload) {

            //fetch photo data
            // const response = await fetch(`https://api.unsplash.com/photos/random?orientation=landscape&client_id=${process.env.VUE_APP_KEY}`);
            // const responseData = await response.json();
            // if (!response.ok) {
            //     const error = new Error(responseData.message || "failed to fetch request")
            //     throw error;
            // }
            // console.log("responseData", responseData);

            // const photoUrl = responseData["urls"].regular;
            // const photoAuthor = responseData["user"].name;

            const photoUrl = require("../assets/trees.jpg");
            const photoAuthor = "Kristian";
            const quoteAuthor = payload.authorName;
            const quoteText = payload.quoteText;

            var today = new Date();

            var date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();

            const newSampleQuote = {
                photoURL: photoUrl,
                quoteDate: date,
                photoAuthor: photoAuthor,
                quoteText: quoteText,
                quoteAuthor: quoteAuthor,
                id: Date.now()

            };
            context.commit("addQuote", newSampleQuote);
        },
        deleteQuote(context, payload) {
            context.commit("removeQuote", payload);
        },
    },
    mutations: {

        addQuote(state, payload) {

            state.quotePosts.unshift(payload);
        },
        removeQuote(state, payload) {
            const index = state.quotePosts.map(el => el.id).indexOf(payload);
            state.quotePosts.splice(index, 1);
        },
        editQuote(state, payload) {
            const quoteAuthor = payload.authorName;
            const quoteText = payload.quoteText;
            const quoteId = payload.quoteId;

            //find quote from quotePosts
            const quote = state.quotePosts.find((quote) => quote.id == quoteId)
            var today = new Date();
            var date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();

            quote.quoteText = quoteText;
            quote.quoteAuthor = quoteAuthor;
            quote.date = date;
        }
    },
    getters: {
        getQuotes(state) {
            return state.quotePosts;
        },

    }

})

export default store;