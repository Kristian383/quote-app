import { createStore } from "vuex";

const store = createStore({
    state() {
        return {
            quoteText: "",
            quoteAuthor: "",
            photoURL: "",
            photoAuthor: "",
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
            ],

        }
    },
    actions: {
        async fetchPhotoData(context) {
            const response = await fetch(`https://api.unsplash.com/photos/random?squarish&client_id=${process.env.VUE_APP_KEY}`);

            const responseData = await response.json();
            if (!response.ok) {
                const error = new Error(responseData.message || "failed to fetch request")
                throw error;
            }
            // console.log("responseData", responseData);
            const photoUrl = responseData["urls"];
            const author = responseData["user"];
            context.commit("setPhotoUrl", photoUrl);
            context.commit("setPhotoAuthor", author);

        }
    },
    mutations: {
        setPhotoUrl(state, payload) {
            const imgUrlSize = payload.regular;
            state.photoURL = imgUrlSize;

        },
        setPhotoAuthor(state, payload) {
            const author = payload.name;
            state.photoAuthor = author;
        }
    },
    getters: {
        getQuotes(state) {
            return state.sampleQuoteCards;
        },
        getPhotoUrl(state) {
            return state.photoURL;
        },
        getPhotoAuthor(state) {
            return state.photoAuthor;
        }
    }

})

export default store;