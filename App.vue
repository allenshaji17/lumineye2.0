<template>
  <div id="app">
    <header>
      <nav>
        <ul>
          <router-link to="/home">Home</router-link>
          <router-link to="/products">Products</router-link>
          <router-link to="/cart">Cart</router-link>
          <router-link to="/login">Login</router-link>
        </ul>
      </nav>
    </header>
    <main>
      <router-view></router-view>
    </main>
    <footer>
      <p>&copy; 2023 Eyewear Emporium. All rights reserved.</p>
    </footer>
  </div>
</template>

<script>
export default {
  name: "App",
  // ...other options
};
</script>

<style>
/* Add your global styles here */
body {
  font-family: Arial, sans-serif;
  margin: 0;
  padding: 0;
  background-color: #f5f5f5;
}

#app {
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
  background-color: #fff;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

header {
  background-color: #333;
  color: #fff;
  padding: 10px 0;
}

nav ul {
  list-style: none;
  display: flex;
}

nav ul li {
  margin-right: 20px;
}

nav ul li a {
  text-decoration: none;
  color: #fff;
  font-weight: bold;
}

main {
  padding: 20px 0;
}

footer {
  background-color: #333;
  color: #fff;
  padding: 10px 0;
  text-align: center;
}
</style>