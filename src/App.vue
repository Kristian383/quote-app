<template>
  <div class="app">
    <the-header></the-header>
    <!-- <home></home> -->
    <router-view></router-view>
    <!-- <quotes></quotes> -->
    <the-footer></the-footer>
  </div>
</template>
//
<script>
import TheHeader from "./components/layout/TheHeader.vue";
import TheFooter from "./components/layout/TheFooter.vue";
// import Home from "./pages/Home.vue";
// import Quotes from "./pages/Quotes.vue";

export default {
  name: "App",
  components: {
    TheHeader,
    
    TheFooter,
    // Home,
    // Quotes,
  },
  created() {
    // console.log(this.$route);
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
  /* text-transform: uppercase; */
}
</style>
