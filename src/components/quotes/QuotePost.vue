<template>
  <div class="quote-wrapper">
    <div class="quote-content">
      <div>
        <h2>Welcome!</h2>
        <p class="content-preview">
          Feeling inspired?
        </p>
        <router-link class="link router-button" :to="{ name: 'CreateQuote' }">
          Create A Quote
          <font-awesome-icon icon="pen-square" id="ikona"></font-awesome-icon>
        </router-link>
      </div>
    </div>
    <div class="quote-photo">
      <img src="../../assets/trees.jpg" alt="" />
    </div>
  </div>
</template>

<script>
export default {
  name: "quotePost",
};
</script>

<style scoped>
.quote-wrapper {
  display: flex;
  flex-direction: column;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
    0 2px 4px -1px rgba(0, 0, 0, 0.06);
}
@media (min-width: 700px) {
  .quote-wrapper {
    min-height: 655px;
    max-height: 655px;
    flex-direction: row;
  }
}

/* .quote-wrapper:nth-child(even) .quote-content {
  order: 2;
}
.quote-wrapper:nth-child(even) .quote-photo {
  order: 1;
} */

.quote-content {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex: 4;
  order: 2;
  background-color: #fff;
}
@media (min-width: 700px) {
  .quote-content {
    order: 1;
  }
}
@media (min-width: 800px) {
  .quote-content {
    flex: 3;
  }
}

.quote-content div {
  max-width: 375px;
  padding: 72px 24px;
}

@media (min-width: 700px) {
  .quote-content div {
    padding: 0 24px;
  }
}
.quote-content div h2 {
  font-size: 32px;
  font-weight: 300;
  text-transform: uppercase;
  margin-bottom: 24px;
}

@media (min-width: 700px) {
  .quote-content div {
    font-size: 40px;
  }
}
.quote-content div p {
  font-size: 15px;
  font-weight: 300;
  line-height: 1.7;
}

.content-preview {
  font-size: 13px;
  max-height: 24px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  width: 250px;
}

/* .link {
  display: inline-flex;
  align-items: center;
  margin-top: 32px;
  padding-bottom: 4px;
  gap: 16px;
  text-decoration: none;
  border-bottom: 1px solid;
  transition: 0.5s ease-in all;
  font-size: 20px;
  color: inherit;
} */
#ikona {
  font-size: 42px;
  color: #ff5d5d;
}
#ikona:hover {
  color: #da3f3f;
}
.link:hover #ikona, .link:hover{
  color: #da3f3f;
  border-color: #da3f3f;
  transition: .5s ease all;
}

.quote-photo {
  order: 1;
  flex: 3;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
    0 2px 4px -1px rgba(0, 0, 0, 0.06);
}

.quote-photo img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
}
@media (min-width: 700px) {
  .quote-photo {
    order: 2;
  }
}
@media (min-width: 800px) {
  .quote-photo {
    flex: 4;
  }
}
</style>