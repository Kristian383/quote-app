<template>
  <div class="app" v-if="this.$store.state.quotePosts">
    <the-header></the-header>
    <router-view></router-view>
    <the-footer></the-footer>
  </div>
</template>
//
<script>
import TheHeader from "./components/layout/TheHeader.vue";
import TheFooter from "./components/layout/TheFooter.vue";

export default {
  name: "App",
  components: {
    TheHeader,
    TheFooter,
  },
};
</script>

<style>
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  font-family: "Raleway", sans-serif;
  font-weight: 400;
}
.app {
  min-height: 100vh;
  position: relative;
  background-color: #f1f1f1;
  display: flex; /*izbor */
  flex-direction: column; /*izbor */
  color: #333333;
}

/* kartice */
.quote-card-wrap {
  position: relative;
  padding: 40px 16px;
  background-color: #f1f1f1;
}
@media (min-width: 510px) {
  .quote-card-wrap {
    padding: 70px 16px;
  }
}

.quote-card-wrap .quote-cards {
  display: grid;
  grid: 32px;
  grid-template-columns: 1fr;
  gap: 24px; /*izbor */
}

@media (min-width: 500px) {
  .quote-card-wrap .quote-cards {
    grid-template-columns: repeat(2, 1fr);
  }
}
@media (min-width: 900px) {
  .quote-card-wrap .quote-cards {
    grid-template-columns: repeat(3, 1fr);
  }
}
@media (min-width: 1200px) {
  .quote-card-wrap .quote-cards {
    grid-template-columns: repeat(4, 1fr);
  }
}
.container {
  /* padding: 0 20px; */
  max-width: 1140px;
  margin: 0 auto;
}
.router-button {
  display: inline-flex;
  align-items: center;
  gap: 16px;
  font-size: 20px;
  text-decoration: none;

  cursor: pointer;
  margin-top: 24px;
  padding: 10px 20px;
  background-color: #303030;
  color: white;
  border-radius: 20px;
  border: none;

  transition: 0.2s ease-in all;
  /* text-transform: uppercase; */
}
</style>
