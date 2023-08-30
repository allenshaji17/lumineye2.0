<template>
  <div id="app">
    <header>
      <!-- Navigation -->
      <nav>
        <ul>
          <li><router-link to="/home">Home</router-link></li>
          <li><router-link to="/product">Products</router-link></li>
          <li><router-link to="/cart">Cart</router-link></li>
          <!-- Add other navigation links here -->
        </ul>
      </nav>
    </header>

    <main>
      <router-view></router-view>
    </main>

    <footer>
      <!-- Footer content goes here -->
    </footer>
  </div>
</template>

<script>
export default {
  name: 'App'
};
</script>

<style>
/* Add global styles here */
</style>
