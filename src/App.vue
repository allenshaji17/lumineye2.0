<template>
  <div id="app">
      <!-- Navigation -->


    <main>
      <router-view @add-to-cart="addToCart"></router-view>
    </main>

    <footer>
      <!-- Footer content goes here -->
    </footer>
  </div>
</template>

<script>
export default {
  name: 'App',
  methods: {
      addToCart(product) {
        console.log('Added to cart:', product);
      }
  }
};
</script>

<style>
/* Add global styles here */
</style>
