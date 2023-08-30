<template>
    <section class="nav-bar">
        <header>
            <!-- Navigation Bar -->
            <nav>
                <ul>
                    <li><router-link to="/home">Home</router-link></li>
                    <li><router-link to="/products">Products</router-link></li>
                    <li><router-link to="/cart">Cart</router-link></li>
                    <li><router-link to="/login">Login</router-link></li>
                </ul>
            </nav>
        </header>
    </section>
</template>

<script>
export default {
    name: 'NavBar'
};
</script>

<style scoped>
/* Add your navigation styles here */
.nav-bar {
    font-family: Arial, sans-serif;
}
header {
    background-color: #000;
    color: #fff;
    padding: 20px;
}
nav ul {
    list-style-type: none;
    
}
nav ul li {
    display: inline-block;
    margin-right: 20px;
}
nav ul li a {
    text-decoration: none;
    color: #fff;
    font-weight: bold;
}
</style>