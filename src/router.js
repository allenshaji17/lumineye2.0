import Vue from 'vue';
import VueRouter from 'vue-router';
import HomePage from './Pages/HomePage.vue';
import ProductListings from './Pages/ProductListings.vue';
import CartPage from './Pages/CartPage.vue';
import LoginPage from './Pages/LoginPage.vue';

Vue.use(VueRouter);

const routes = [
    { path: '/home', component: HomePage },
    { path: '/products', component: ProductListings },
    { path: '/cart', component: CartPage },
    { path: '/login', component: LoginPage }
];

const router = new VueRouter({
    routes
});

export default router;
