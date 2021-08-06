<template>
  <div class="home">
    <quote-post></quote-post>
    <div class="quote-card-wrap">
      <div class="container">
        <h3>View More Recent Quotes</h3>
        <div class="quote-cards">
          <quote-card
            v-for="(quote, index) in sampleQuoteCards"
            :key="index"
            :quote="quote"
            :quoteCoverPhoto="quote.quoteCoverPhoto"
            :quoteDate="quote.quoteDate"
            :quoteTitle="quote.quoteTitle"
          ></quote-card>
        </div>
      </div>
    </div>
    <!-- <div class="reg">
      <h2>Never miss a post. Register for your free account today!</h2>
      <router-link class="router-button" :to="{ name: 'Home' }">Register for fireblog</router-link>
    </div> -->
  </div>
</template>

<script>
import QuotePost from "../components/blogs/QuotePost.vue";
import QuoteCard from "../components/ui/QuoteCard.vue";
export default {
  name:"Home",
  components: {
    QuotePost,
    QuoteCard,
  },
  computed:{
    sampleQuoteCards(){
      return this.$store.getters.getQuotes
    }
  }
};
</script>

<style scoped>
.quote-card-wrap h3 {
  font-size: 28px;
  font-weight: 300;
  margin-bottom: 32px;
}

 /* .home .reg{
  padding: 100px 25px;
  display: flex;
  flex-direction: column;
  gap: 22px;
  align-items: center;
}

@media (min-width:500px) {
  .home .reg{
    flex-direction: row;
    gap: 0;
  }
  
  
}
.home .reg h2{
  font-size: 48px;
  max-width: 425px;
  width: 100%;
}


@media (min-width:500px){
  .router-button{
    margin-left: auto;
  }
} */
/* #ikona {
  font-size: 42px;
  color: #ff5d5d;
}
#ikona:hover {
  color: #da3f3f;
}
.link {
  text-decoration: none;
  color: inherit;
}
.link:hover {
  color: #000;
}
.hero {
  background-image: url("../assets/trees.jpg");
  background-attachment: fixed;
  position: relative;
  height: 100vh;
}
.hero .hero-text {
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: rgb(43, 41, 41);
  padding-bottom: 350px;
}

.hero .hero-text h4 {
  font-size: 24px;
  padding-bottom: 4px;
}
.hero .hero-text h2 {
  font-size: 50px;
  text-align: center;
}

@media (min-width: 720px) {
  .hero .hero-text h2 {
    font-size: 80px;
    text-align: inherit; 
  }
}

.hero .hero-text hr:nth-child(2) {
  max-width: 185px;
  margin-bottom: 16px;
}
.hero .hero-text hr:nth-child(4) {
  height: 6px;
  background-color: rgb(43, 41, 41);
  border: none;
  max-width: 385px;
  margin-top: 16px;
}
@media (max-width: 720px) {
  .hero .hero-text hr:nth-child(4) {
    max-width: 785px;
  }
} */
</style>