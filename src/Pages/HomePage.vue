<template>
    <div class="home-page">
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

        <main>
            <!-- Hero Section -->
            <section class="hero">
                <div class="hero-content">
                    <h1>Discover Stylish Eyewear</h1>
                    <p>Find the perfect pair of glasses that complements your style and vision.</p>
                    <a href="#" class="shop-now-btn">Shop Now</a>
                </div>
                <div class="hero-image">
                    <img src="hero-image.jpg" alt="Stylish Eyewear">
                </div>
            </section>

            <!-- Featured Products -->
            <section class="featured-products">
                <h2>Featured Products</h2>
                <div class="product-list">
                    <div v-for="product in featuredProducts" :key="product.id" class="product">
                        <img :src="require('@/assets/' + product.image)" :alt="product.name">
                        <h3>{{ product.name }}</h3>
                        <p class="product-price">{{ product.price }}</p>
                        <button @click="addToCart(product)">Add to Cart</button>
                    </div>
                </div>
            </section>
        </main>

        <footer>
            <p>&copy; 2023 Goggles and Spectacles Store. All rights reserved.</p>
        </footer>
    </div>
</template>

<script>
export default {
    data() {
        return {
            featuredProducts: [
                {
                    id: 1,
                    name: 'AIRPLANE MODE //001',
                    price: '$99.99',
                    image: 'airplane.webp'
                },
                {
                    id: 2,
                    name: 'THE GODFATHER BLUE',
                    price: '$129.99',
                    image: 'godfather.jpg'
                }
                // Add more featured products here
            ]
        };
    },
    methods: {
        addToCart(product) {
            // Implement your cart functionality here
            console.log('Added ' + product.name + ' to cart');
        },
        getImagePath(image) {
            return require(`@/assets/${image}`);
        }
    }
};
</script>

<style scoped>
/* Add your CSS styling for the home page here */
/* Example styles for the template */
.home-page {
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

.hero {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 60px 20px;
    background-color: #f7f7f7;
}

.hero-content {
    max-width: 50%;
}

.hero h1 {
    font-size: 36px;
    margin-bottom: 20px;
}

.shop-now-btn {
    display: inline-block;
    padding: 10px 20px;
    background-color: #000;
    color: #fff;
    text-decoration: none;
    border-radius: 5px;
}

.hero-image img {
    max-width: 100%;
}

.featured-products {
    padding: 40px 20px;
    text-align: center;
}

.product-list {
    display: flex;
    justify-content: center;
}

.product {
    margin: 0 15px;
}

.product img {
    max-width: 100%;
    border-radius: 10px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
}

.product h3 {
    margin-top: 10px;
    font-size: 20px;
    font-weight: bold;
}

.product-price {
    font-weight: bold;
    font-size: 18px;
}

button {
    background-color: #000;
    color: #fff;
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    font-weight: bold;
}

footer {
    background-color: #000;
    color: #fff;
    padding: 20px;
    text-align: center;
    font-size: 14px;
}
</style>
