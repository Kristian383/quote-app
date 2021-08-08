<template>
  <div>
    <div
    class="quote-wrapper"
    v-bind:style="{
      backgroundImage: 'url(' + photoUrl + ')',
      'background-size': 'cover',
    }"
  >
    <blockquote class="otro-blockquote">
      <!-- Creativity is just connecting things. When you ask creative people how
      they did something, they feel a little guilty because they didn't really
      do it, they just saw something. It seemed obvious to them after a while.
      That's because they were able to connect experiences they've had and
      synthesize new things.  -->
      {{ quoteText }}
      <span>~ {{ quoteAuthor }} </span>
    </blockquote>
  </div>

  <div>
    <p class="attribution">Photo by {{ photoAuthor }} on Unsplash</p>
  </div>
  </div>
</template>

<script>
export default {
  name: "QuoteView",
  data() {
    return {
      quoteData:null,
      id:null
    };
  },
  computed: {
    photoUrl() {
      return this.quoteData.photoURL;
      //return require(`../assets/quoteCards/stock-3.jpg`);
    },
    photoAuthor() {
      return this.quoteData.photoAuthor;
    },
    quoteText() {
      return this.quoteData.quoteText;
    },
    quoteAuthor() {
      return this.quoteData.quoteAuthor;
    },
  },
  created() {
     this.id=this.$route.params.quoteId;
    
    const quoteData = this.$store.getters.getQuotes.find(
      (quote) => quote.id == this.id
    );
    console.log(quoteData);
    this.quoteData=quoteData;
  },
};
</script>

<style scoped>
.quote-wrapper {
  display: flex;
  flex-direction: column;
  justify-content: center;
  /* margin: auto; */
  align-items: center;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
    0 2px 4px -1px rgba(0, 0, 0, 0.06);
}
@media (min-width: 700px) {
  .quote-wrapper {
    min-height: 655px;
    flex-direction: row;
    justify-content: center;
    align-items: center;
  }
}

.quote-content {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex: 4;
  background-color: #fff;
}

/* CITAT */
@import url(https://fonts.googleapis.com/css?family=Open+Sans:400italic);
.otro-blockquote {
  font-size: 1.4em;
  /* width: 100%; */
  max-width: 975px;
  font-family: Open Sans;
  font-style: italic;
  color: #303030;
  padding: 50px 30px 1.2em 30px;
  /* padding: 1.2em 30px 1.2em 75px; */
  border-top: 8px solid #00afea; /* #ff5d5d; */
  line-height: 1.6;
  position: relative;
  background: #ededed;
}
@media (min-width: 700px) {
  .otro-blockquote {
    width: 80%;
    border-left: 8px solid #00afea;
    border-top: none;
    padding: 1.2em 30px 1.2em 75px;
  }
}
@media (min-width: 900px) {
  .otro-blockquote {
    width: 60%;
  }
}

.otro-blockquote::before {
  font-family: Arial;
  content: "\201C";
  color: #00afea;
  font-size: 4em;
  position: absolute;
  left: 10px;
  top: -10px;
}

.otro-blockquote::after {
  content: "";
}

.otro-blockquote span {
  display: block;
  color: #333333;
  font-style: normal;
  font-weight: bold;
  margin-top: 1em;
}
/* author photo */
.attribution {
  display: block;
  background-color: white;
  padding: 6px 4px;
  border-radius: 0 0 7px 7px;
  color: #303030;
}
</style>