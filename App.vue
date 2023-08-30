<template>
  <div>
          <navbar></navbar> <!-- Add the Navbar component here -->
    <section id="app">
      <main>
        <router-view></router-view>
      </main>
      <footer>
        <p>&copy; 2023 Eyewear Emporium. All rights reserved.</p>
      </footer>
    </section>
  </div>
</template>

<script>
import Navbar from '@/Pages/NavBar.vue';
export default {
  components: {
    Navbar
  },
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