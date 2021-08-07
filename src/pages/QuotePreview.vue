<template>
  <div class="post-view">
    <div class="container">
      <!--  -->
      <img :src="photoUrl" alt="Photo" />
      <h2>{{ quoteAuthor }}</h2>
      <p>Photo by {{photoAuthor}} on Unsplash </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "QuotePreview",
  // data() {
  //   return {
  //     url: null,
  //   };
  // },
  methods: {
    async fetchPhotoUrl() {
      await this.$store.dispatch("fetchPhotoData");
    },
  },
  computed: {
    photoUrl() {
      return this.$store.getters.getPhotoUrl;
    },
    photoAuthor() {
      return this.$store.getters.getPhotoAuthor;
    },
  },
  created() {
    this.fetchPhotoUrl();
  },
};
</script>

<style scoped>
.post-view img {
  display: block;
  z-index: 1;
  width: 100%;
  min-height: 405px;
  max-height: 1000px;
  object-fit: cover;
}
</style>