import { createStore } from "vuex";

const store = createStore({
    state() {
        return {
            quoteText: "",
            quoteAuthor: "",
            photoURL:"",
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
    // actions: {
    //     async fetchPhoto(context) {
            
    //         const response = await fetch(`https://api.unsplash.com/photos/random?landscape&user_id=${ACCESS_KEY}`);

    //         const responseData = await response.json();
    //         if (!response.ok) {
    //             const error = new Error(responseData.message || "failed to fetch request")
    //             throw error;
    //         }
    //         console.log(responseData);
    //         const photoUrl=responseData["urls"];
    //         console.log(photoUrl);
    //         context.commit("setPhotoUrl","moj-url")
    //     }
    // },
    // mutations: {
    //     setPhotoUrl(state,payload){
    //         state.photoURL=payload;
    //     }
    // },
    getters: {
        getQuotes(state) {
            return state.sampleQuoteCards;
        }
    }

})

export default store;