<template>
    <div>
        <navbar></navbar> <!-- Add the Navbar component here -->
    
    <section id="product-listings">
        <div class="product" v-for="product in products" :key="product.id">
            <div class="product-image">
                <img :src="require('@/assets/' + product.image)" :alt="product.name">
            </div>
            <h3>{{ product.name }}</h3>
            <p class="product-description">{{ product.description }}</p>
            <span class="product-price">{{ product.price }}</span>
            <button @click="addToCart(product)">Add to Cart</button>
        </div>
    </section>
    </div>
</template>

<script>
import Navbar from '@/Pages/NavBar.vue';
export default {
    components: {
        Navbar
    },
    data() {
        return {
            products: [
                {
                    id: 1,
                    name: 'AIRPLANE MODE //001',
                    description: 'Semi round frame with golden accents',
                    price: '$99.99',
                    image: 'airplane.webp'
                },
                {
                    id: 2,
                    name: 'THE GODFATHER BLUE',
                    description: 'Normal blue shades',
                    price: '$129.99',
                    image: 'godfather.jpg'
                }
                // Add more products here
            ]
        };
    },
    methods: {
        addToCart(product) {
            this.$emit('add-to-cart', product);
            // Implement addToCart logic here
            methods: {
                async addToCart(product) {
                    const userId = 'user123'; // Replace with actual user ID (if applicable)
                    const cartRef = db.collection('carts').doc(userId);

                    try {
                    const cartDoc = await cartRef.get();
                    const cartData = cartDoc.data();

                    if (!cartDoc.exists || !cartData.products) {
                        // If the user's cart doesn't exist or is empty, create a new one
                        await cartRef.set({ products: [product] });
                    } else {
                        // If the user's cart already exists, add the product to it
                        const updatedCart = { products: [...cartData.products, product] };
                        await cartRef.update(updatedCart);
                    }

                    console.log('Added to cart:', product);
                    } catch (error) {
                    console.error('Error adding to cart:', error);
                    }
                },
            }

            // For now, let's just log the selected product
            console.log('Added to cart:', product);
        },
        getImagePath(image) {
            return require(`@/assets/${image}`);
        }
    }
};
</script>

<style scoped>
/* Add component-specific styles here */
/* ignore these they dont even matter its just for a video
/* lmao they dont even matter 
/

.product {
    border: 1px solid #ccc;
    padding: 20px;
    margin-bottom: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
}

.product-image img {
    max-width: 100%;
}

.product h3 {
    margin-top: 10px;
}

.product-description {
    margin: 10px 0;
}

.product-price {
    font-weight: bold;
}

button {
    background-color: #000;
    color: #fff;
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
}
</style>
