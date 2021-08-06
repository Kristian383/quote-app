<template>
  <div class="quote-card-wrap">
    <div class="container">
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
</template>
      
<script>
import QuoteCard from "../components/ui/QuoteCard.vue";
export default {
  name: "Quotes",
  components: { QuoteCard },
  computed: {
    sampleQuoteCards() {
      return this.$store.getters.getQuotes;
    },
  },
};
</script>

<style scoped>
</style>