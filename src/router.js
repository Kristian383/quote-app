import { createRouter, createWebHistory } from "vue-router";
import Home from "./pages/Home.vue"
import Quotes from "./pages/Quotes.vue"
import CreateQuote from "./pages/CreateQuote.vue"
import QuotePreview from "./pages/QuotePreview.vue"
import NotFound from "./pages/NotFound.vue"




const router = createRouter({
    history: createWebHistory(),
    routes:[
         {path: "/", redirect: "/home"},
         { path: "/home", component: Home, name:"Home",meta:{title:"Home"} },
         { path: "/quotes", component: Quotes,name:"Quotes",meta:{title:"Quotes"} },
         { path: "/create-quote", component: CreateQuote,name:"CreateQuote",meta:{title:"Create Quote"} },
         { path: "/quote-preview", component: QuotePreview,name:"QuotePreview",meta:{title:"Quote Preview"} },

         { path: "/:notFound(.*)", component: NotFound,meta:{title:"Not Found"} },
    ]
});

router.beforeEach((to,_,next)=>{
    document.title=`${to.meta.title} | Quotex`;
    next();
})

export default router