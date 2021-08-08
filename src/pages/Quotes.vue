<template>
  <div class="quote-card-wrap">
    <div class="container">
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
      return this.$store.getters.getQuotes;
    },
  },
};
</script>

<style scoped>
</style>