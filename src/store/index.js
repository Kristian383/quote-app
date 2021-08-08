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
        //napraviti akciju koja ce prvotno ucitati ~3 slike i quota

        async publishQuote(context, payload) {

            //fetch photo data
            const response = await fetch(`https://api.unsplash.com/photos/random?orientation=landscape&client_id=${process.env.VUE_APP_KEY}`);
            // const response = {};
            const responseData = await response.json();
            // console.log(responseData);
            if (!response.ok) {
                const error = new Error(responseData.message || "failed to fetch request")
                throw error;
            }
            console.log("responseData", responseData);

            const photoUrl = responseData["urls"].regular;
            const photoAuthor = responseData["user"].name;

            const quoteAuthor = payload.authorName;
            const quoteText = payload.quoteText;

            var today = new Date();

            var date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();

            const newSampleQuote = {
                photoURL: photoUrl, //quote author  and quote text
                quoteDate: date,
                photoAuthor: photoAuthor,
                quoteText: quoteText,
                quoteAuthor: quoteAuthor,
                id: Date.now()

            };
            // console.log("novi quote", newSampleQuote);
            context.commit("addQuote", newSampleQuote);
        }
    },
    mutations: {
        // setPhotoUrl(state, payload) {
        //     const imgUrlSize = payload.regular;
        //     state.quotePosts.photoURL = imgUrlSize;

        // },
        // setPhotoAuthor(state, payload) {
        //     const author = payload.name;
        //     state.quotePosts.photoAuthor = author;
        // },
        addQuote(state, payload) {

            state.quotePosts.unshift(payload);
            console.log(state.quotePosts);
        }
    },
    getters: {
        getQuotes(state) {
            // console.log(state.quotePosts[0].photoURL);
            return state.quotePosts;
        },
        // getPhotoUrl(state, getters) {
        //     const quoteId = getters.postId;
        //     return state.quotePosts.filter(post => post.id === quoteId).photoURL;

        // },
        // getPhotoAuthor(state) {
        //     return state.quotePosts[0].photoAuthor;
        // }

    }

})

export default store;