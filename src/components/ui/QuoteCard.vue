<template>
  <div class="quote-card">
    <div class="icons">
      <div class="icon" @click="editQuote">
        <font-awesome-icon icon="edit" class="edit" ></font-awesome-icon>
      </div>
      <div class="icon" @click="removeQuote">
        <font-awesome-icon icon="trash-alt" class="delete"></font-awesome-icon>
      </div>
    </div>
    <img :src="quoteCoverPhoto" alt="Quote photo" />
    <div class="info">
      <h4>Quote by {{ quoteAuthor }}</h4>
      <h6>Posted on: {{ quoteDate }}</h6>
      <router-link :to="quoteViewLink" class="link">
        View The Quote
        <font-awesome-icon icon="eye" id="ikona"></font-awesome-icon>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "quoteCard",
  props: ["quoteAuthor", "quoteDate", "quoteCoverPhoto", "quoteId"],
  computed: {
    quoteViewLink() {
      return "/quotes/" + this.quoteId;
    },
  },
  methods: {
    removeQuote() {
      this.$store.dispatch("deleteQuote",this.quoteId)
    },
    editQuote() {
      const url="/edit-quote/"+this.quoteId;
      this.$router.push(url)
    },
  },
};
</script>

<style scoped>
.quote-card {
  position: relative;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  border-radius: 10px;
  background-color: white;
  min-height: 420px;
  transition: 0.5s ease all;
}
.quote-card:hover {
  transform: rotateZ(-1deg) scale(1.01);
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
    0 2px 4px -1px rgba(0, 0, 0, 0.06);
}

.icons {
  display: flex;
  position: absolute;
  top: 10px;
  right: 15px;
  gap: 8px;
  z-index: 15;
}

.icons .icon {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 34px;
  height: 34px;
  border-radius: 50%;
  background-color: white;
  transition: 0.5s ease all;
}
.icons .icon:hover {
  background-color: #303030;
  color: white;
}

.delete,
.edit {
  pointer-events: none;
  height: 15px;
  width: auto;
}

.info {
  display: flex;
  flex-direction: column;
  height: 100%;
  padding: 32px 16px;
  z-index: 3;
}

.info h4 {
  padding-bottom: 10px;
  font-size: 22px;
  font-weight: 300;
}

.info h6 {
  font-weight: 400;
  font-size: 14px;
  padding-bottom: 16px;
}

.link {
  display: inline-flex;
  align-items: center;
  margin-top: auto; /*  gura skroz na dno */
  font-weight: 500;
  padding-top: 18px;
  padding-bottom: 4px;
  gap: 8px;
  transition: 0.2s ease-in all;
  text-transform: uppercase;
  font-size: 12px;
  text-decoration: none;
  color: #da3f3f;
}
.link:hover {
  color: #00afea;
}
#ikona {
  width: 14px;
}
.quote-card img {
  display: block;
  z-index: 1;
  width: 100%;
  min-height: 205px;
  object-fit: cover;
  border-radius: 10px 10px 0 0;
}
</style>