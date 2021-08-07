<template>
  <footer>
    <div class="container">
      <div class="left">
        <div class="col-1">
          <router-link class="header" :to="{ name: 'Home' }"
            ><h2>Quotex</h2></router-link
          >
          <ul>
            <li><img src="@/assets/quotation.png" alt="Quote Logo" /></li>
          </ul>
        </div>
        <div class="col-2">
          <ul>
            <li>
              <router-link class="link" :to="{ name: 'Home' }"
                >Home</router-link
              >
            </li>
            <li>
              <router-link class="link" :to="{ name: 'Quotes' }"
                >Quotes</router-link
              >
            </li>
            <li>
              <router-link class="link" :to="{ name: 'CreateQuote' }"
                >Create Quote</router-link
              >
            </li>
          </ul>
        </div>
      </div>
      <div class="right">
        <p>Copyright 2021 Kristian Nenadovic</p>
      </div>
    </div>
  </footer>
</template>

<script>
export default {};
</script>

<style scoped>
footer {
  margin-top: auto;
  padding: 50px 25px;
  background-color: rgba(0, 0, 0, 0.849);
}

.container {
  display: flex;
  flex-direction: column;
  gap: 32px;
  
  padding: 0 20px;
  max-width: 1140px;
  margin: 0 auto;
}
@media (min-width: 800px) {
  .container {
    flex-direction: row;
    gap: 0px;
  }
}
.container > div {
  display: flex;
  flex: 1;
}

.container .left {
  gap: 32px;
  color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
}
@media (min-width: 800px) {
  .container .left {
    flex-direction: row;
    align-items: initial;
    gap: 0;
  }
}
.header {
  font-size: 24px;
  color: #fff;
  text-decoration: none;
  font-weight: 600;
  text-align: center;
}

.container ul {
  gap: 16px;
  list-style: none;
  display: flex;
}

.container .col-1,
.container .col-2 {
  gap: 32px;
  display: flex;
  flex: 1;
}
@media (min-width: 800px) {
  .container .col-1,
  .container .col-2 {
    gap: 0;
  }
}

.col-1 {
  flex-direction: column;
}
.col-1 h2 {
  text-align: center;
}
@media (min-width: 800px) {
  .col-1 h2 {
    text-align: initial;
  }
}
.col-1 ul {
  margin-top: auto;
}

.col-1 ul li {
  display: flex;
  align-items: center;
}
.col-2 ul {
  height: 100%;
  justify-content: center;
  flex-direction: column;
  flex-wrap: wrap;
}
/* @media (min-width: 800px) {
  .col-2 {
    flex-direction: column;
  }
} */
.col-2 ul .link {
  font-size: 16px;
  font-weight: 500;
  color: #fff;
  text-decoration: none;
}

.right {
  gap: 32px;
  color: #fff;
  align-items: center;
  flex-direction: column;
}
@media (min-width: 800px) {
  .right {
    align-items: flex-end;
    gap: 0;
  }
}
p {
  margin-top: auto;
}
</style>