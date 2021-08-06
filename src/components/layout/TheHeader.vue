<template>
  <header :class="{ 'scrolled-nav': scrolledNav }">
    <nav class="container">
      <div class="logo">
        <router-link class="header" :to="{ name: 'Home' }"
          ><img src="@/assets/quotation.png" alt="Quote Logo"
        /></router-link>
      </div>
      <ul v-show="!mobile" class="navigation">
        <li>
          <router-link class="link" :to="{ name: 'Home' }">Home</router-link>
        </li>
        <li>
          <router-link class="link" :to="{ name: 'Quotes' }"
            >Quotes</router-link
          >
        </li>
        <li>
          <router-link class="link" :to="{ name: 'Home' }"
            >Create Quote</router-link
          >
        </li>
      </ul>

      <div class="icon" @click="switchMobNav">
        <font-awesome-icon
          id="ikona"
          v-show="mobile"
          icon="bars"
          :class="{ 'icon-active': mobileNav }"
        ></font-awesome-icon>
      </div>
      <transition name="mobile-nav">
        <ul v-show="mobileNav" class="dropdown-nav" @click="switchMobNav">
          <li>
            <router-link class="link" :to="{ name: 'Home' }">Home</router-link>
          </li>
          <li>
            <router-link class="link" :to="{ name: 'Quotes' }"
              >Quotes</router-link
            >
          </li>
          <li>
            <router-link class="link" :to="{ name: 'Home' }"
              >Create Quote</router-link
            >
          </li>
        </ul>
      </transition>
    </nav>
  </header>
</template>

<script>
export default {
  name: "TheHeader",
  data() {
    return {
      mobile: null,
      scrolledNav: null,
      mobileNav: null,
      windowWidth: null,
    };
  },
  methods: {
    switchMobNav() {
      this.mobileNav = !this.mobileNav;
    },
    checkScreen() {
      this.windowWidth = window.innerWidth;
      if (this.windowWidth <= 750) {
        this.mobile = true;
        return;
      }
      this.mobile = false;
      this.mobileNav = false;
      return;
    },
    updateScroll() {
      const scrollPosition = window.scrollY;
      if (scrollPosition > 50) {
        this.scrolledNav = true;
        return;
      }
      this.scrolledNav = false;
    },
  },
  created() {
    window.addEventListener("resize", this.checkScreen);
    this.checkScreen();
  },
  mounted() {
    window.addEventListener("scroll", this.updateScroll);
  },
};
</script>

<style scoped >
header {
  background-color: #303030;
  padding: 0 1rem;
  z-index: 99;
  width: 100%;
  transition: 0.5s ease all;
  position: sticky;
  top: 0;
  color: #fff;
}
header nav {
  display: flex;
  flex-direction: row;
  padding: 12px 0;
  transition: 0.5s ease all;
  margin: 0 auto;
  width: 90%;
  position: relative;
}

@media (min-width: 1140px) {
  header nav {
    max-width: 1140px;
  }
}

header nav ul,
header nav .link {
  font-weight: 500;
  color: #fff;
  list-style: none;
  text-decoration: none;
}
header nav li {
  text-transform: uppercase;
  padding: 16px;
  margin-left: 16px;
}

header nav .link {
  font-size: 14px;
  transition: 0.5s ease all;
  padding-bottom: 4px;
  border-bottom: 1px solid transparent;
}

header nav .link:hover {
  color: #00afea;
  border-color: #00afea;
}
header nav .logo {
  display: flex;
  align-items: center;
}
header nav .logo img {
  width: 50px;
  transition: 0.5s ease all;
}
header .navigation {
  display: flex;
  align-items: center;
  flex: 1;
  justify-content: flex-end;
}
.icon {
  display: flex;
  align-items: center;
  position: absolute;
  top: 0;
  right: 24px;
  height: 100%;
}
#ikona {
  cursor: pointer;
  font-size: 24px;
  transition: 0.8s ease all;
}

.icon-active {
  transform: rotate(180deg);
}

.dropdown-nav {
  display: flex;
  flex-direction: column;
  position: fixed;
  width: 100%;
  max-width: 250px;
  height: 100%;
  background-color: #f1f1f1;
  top: 0;
  left: 0;
  z-index: 100;
}
.dropdown-nav li {
  margin-left: 0;
}
.dropdown-nav li .link {
  color: #303030;
  font-weight: bold;
}

.scrolled-nav {
  background-color: black;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
    0 2px 4px -1px rgba(0, 0, 0, 0.06);
}
.scrolled-nav nav {
  padding: 8px 0;
}
.scrolled-nav nav .logo img {
  width: 40px;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
    0 2px 4px -1px rgba(0, 0, 0, 0.06);
}
.mobile-nav-enter-active,
.mobile-nav-leave-active {
  transition: 1s ease all;
}

.mobile-nav-enter-from,
.mobile-nav-leave-to {
  transform: translateX(-250px);
}
.mobile-nav-enter-to {
  transform: translateX(0);
}
</style>