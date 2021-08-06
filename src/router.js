import { createRouter, createWebHistory } from "vue-router";
import Home from "./pages/Home.vue"
import Quotes from "./pages/Quotes.vue"
import NotFound from "./pages/NotFound.vue"




const router = createRouter({
    history: createWebHistory(),
    routes:[
         {path: "/", redirect: "/home"},
         { path: "/home", component: Home, name:"Home",meta:{title:"Home"} },
         { path: "/quotes", component: Quotes,name:"Quotes",meta:{title:"Quotes"} },

         { path: "/:notFound(.*)", component: NotFound,meta:{title:"Not Found"} },
    ]
});

router.beforeEach((to,_,next)=>{
    document.title=`${to.meta.title} | Quotex`;
    next();
})

export default router