<template>
  <div class="create-quote">
    <div class="container">
      <!-- <div class="error-msg" :class="{ invisible: !error }">
        <p><span>Error:</span>{{ errMsg }}</p>
      </div> -->
      <div class="quote-info">
        <input
          type="text"
          placeholder="Enter Your Name"
          v-model.trim="authorName"
        />
      </div>
      <div class="editor">
        <textarea
          placeholder="Write something!"
          v-model.trim="quoteText"
        ></textarea>
        <div class="error-msg" :class="{ invisible: quoteIsValid }">
          <p>
            <span>Please insert atleast 6 characters:</span>{{ quoteLength }}
          </p>
        </div>
      </div>
      <div class="quote-actions">
        <button class="router-button" @click="publishQuote">
          Publish Quote
        </button>
        <!-- <router-link class="router-button" :to="{ name: 'QuoteVie' }"
          >Preview Quote</router-link> -->
        
      </div>
    </div>
  </div>
</template>

<script>
// require("dotenv").config();

export default {
  name: "CreateQuote",
  components: {},

  data() {
    return {
      authorName: "",
      quoteText: "",
      quoteIsValid: true,
    };
  },
  computed: {
    quoteLength() {
      let numofChar = this.quoteText.replace(/\s+/g, "").length;
      return numofChar;
    },
  },
  methods: {
    async publishQuote() {
      if (this.quoteLength < 6 || this.authorName === "") {
        this.quoteIsValid = false;
        return;
      }
      this.quoteIsValid = true;

      let quote = this.quoteText.replace(/\s+/g, " ");

      //this.loading=true
      this.$store.dispatch("publishQuote", {
        quoteText: quote,
        authorName: this.authorName,
      });

      this.$router.push("/quotes");
      
    },
  },
};
</script>

<style scoped>
.create-quote {
  position: relative;
  height: 100%;
}
.create-quote .container {
  height: 100%;
  padding: 16px 30px 60px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
}
.quote-info {
  width: 100%;
  text-align: center;
}
.quote-info input {
  min-width: 300px;
  transition: 0.2s ease-in-out all;
  padding: 10px 4px;
  border: none;
  border-bottom: 1px solid #303030;
  background-color: #f1f1f1;
  font-size: 16px;
  box-shadow: 0 1px 0 0 #303030;
}
.quote-info input:focus {
  background-color: #ffffff;
  outline: 0;
  border-radius: 6px 6px 0 0;
}
.editor {
  display: flex;
  flex-direction: column;
}
textarea {
  min-width: 300px;
  height: 40vh;
  background-color: rgba(0, 0, 0, 0.07);
  border-color: -moz-use-text-color #ffffff #ffffff -moz-use-text-color;
  border: none;
  border-radius: 6px;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
    0 2px 4px -1px rgba(0, 0, 0, 0.06);
  color: #303030;
  font-size: 16px;
  line-height: 24px;
  padding: 5px 8px;
  transition: background-color 0.2s ease 0s;
  resize: none;
}

@media (min-width: 720px) {
  .editor {
    min-width: 600px;
  }
}

@media (min-width: 1020px) {
  .editor {
    min-width: 800px;
  }
}
textarea:focus {
  background-color: #ffffff;
  outline: 0;
}

.error-msg {
  width: 100%;
  padding: 8px 2px;
  border-radius: 8px;
  color: #bb1616;
  background-color: #f1f1f1;
  font-size: 14px;
  transition: 0.5s ease all;
}
.error-msg p {
  font-weight: 600;
}

.quote-actions {
  display: flex;
  flex-direction: column;
}
.router-button:hover {
  color: #00afea;
}
@media (min-width: 420px) {
  .quote-actions {
    flex-direction: row;
    gap: 12px;
  }
}

.invisible {
  opacity: 0 !important;
}
</style>