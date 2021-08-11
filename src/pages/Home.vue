<template>
  <div class="home">
    <quote-post></quote-post>
    <div class="quote-card-wrap" v-if="quotes.length>0">
      <div class="container">
        <h3>View More Recent Quotes</h3>
        <div class="quote-cards">
          <quote-card
            v-for="(quote, index) in quotePosts"
            :key="index"
            :quote="quote"
            :quoteCoverPhoto="quote.photoURL"
            :quoteDate="quote.quoteDate"
            :quoteTitle="quote.quoteTitle"
            :quoteId="quote.id"
            :quoteAuthor="quote.quoteAuthor"
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
import QuotePost from "../components/quotes/QuotePost.vue";
import QuoteCard from "../components/ui/QuoteCard.vue";
export default {
  name: "Home",
  components: {
    QuotePost,
    QuoteCard,
  },
  computed: {
    quotePosts() {
      // return this.$store.getters.getQuotes;
      return this.quotes;
    },
  },
  data(){
    return{
      quotes:[]
    }
  },
  mounted(){
    this.quotes=this.$store.getters.getQuotes;
    // console.log("usao",this.quotes);
  }
};
</script>

<style scoped>
.quote-card-wrap h3 {
  font-size: 28px;
  font-weight: 300;
  margin-bottom: 32px;
}
</style>