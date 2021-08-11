<template>
  <div class="quote-card-wrap">
    <div class="container">
      <div class="empty" v-if="!quotes.length>0"><h2>The are currently no quotes :(</h2></div>
      <div class="quote-cards">
        <quote-card
          v-for="(quote, index) in quotePosts"
          :key="index"
          :quote="quote"
          :quoteCoverPhoto="quote.photoURL"
          :quoteDate="quote.quoteDate"
          :quoteAuthor="quote.quoteAuthor"
          :quoteId="quote.id"
        ></quote-card>
      </div>
    </div>
  </div>
</template>
      
<script>
import QuoteCard from "../components/ui/QuoteCard.vue";
export default {
  name: "Quotes",
  components: { QuoteCard },
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
.empty{
  text-align: center;
}
</style>