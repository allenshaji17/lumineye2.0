<template>
    <div>
            <navbar></navbar> <!-- Add the Navbar component here -->
    <section id="cart-page">
        <h2>Shopping Cart</h2>
        <table>
            <thead>
                <tr>
                    <th>Product</th>
                    <th>Price</th>
                    <th>Quantity</th>
                    <th>Total</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(item, index) in cart" :key="index">
                    <td>{{ item.product.name }}</td>
                    <td>{{ item.product.price }}</td>
                    <td>
                        <button @click="decreaseQuantity(index)" :disabled="item.quantity === 1">-</button>
                        {{ item.quantity }}
                        <button @click="increaseQuantity(index)">+</button>
                    </td>
                    <td>{{ calculateTotal(item) }}</td>
                    <td>
                        <button @click="removeFromCart(index)">Remove</button>
                    </td>
                </tr>
            </tbody>
        </table>
        <p>Total: {{ calculateCartTotal() }}</p>
        <button @click="checkout">Checkout</button>
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
            cart: [], // Cart items will be stored here
        };
    },
    methods: {
        addToCart(product) {
            const existingItem = this.cartItems.find(item => item.product.id === product.id);
            if (existingItem) {
                existingItem.quantity++;
            } else {
                this.cartItems.push({ product, quantity: 1 });
            }
        },
        decreaseQuantity(index) {
            if (this.cart[index].quantity > 1) {
                this.cart[index].quantity--;
            }
        },
        increaseQuantity(index) {
            this.cart[index].quantity++;
        },
        calculateTotal(item) {
            return (parseFloat(item.product.price.slice(1)) * item.quantity).toFixed(2);
        },
        removeFromCart(index) {
            this.cart.splice(index, 1);
        },
        calculateSubtotal(item) {
            return (item.product.price.replace('$', '') * item.quantity).toFixed(2);
        },
        calculateCartTotal() {
            let total = 0;
            for (const item of this.cart) {
                total += parseFloat(this.calculateTotal(item));
            }
            return total.toFixed(2);
        },
        checkout() {
            // Implement your checkout logic here
            alert('Checkout clicked!');
        },
    },
};
</script>

<style scoped>
/* Add component-specific styles here */
.cart-table {
    width: 100%;
    border-collapse: collapse;
    margin-top: 20px;
}

.cart-table th,
.cart-table td {
    padding: 10px;
    border: 1px solid #ccc;
    text-align: center;
}

.checkout {
    margin-top: 20px;
    text-align: right;
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
