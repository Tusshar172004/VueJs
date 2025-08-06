// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router';
import ProductListView from '../views/ProductListView.vue';
import ProductDetailsView from '../views/ProductDetailsView.vue';
import CartView from '../views/CartView.vue';

const routes = [
  {
    path: '/',
    name: 'Products',
    component: ProductListView,
  },
  {
    path: '/product/:id',
    name: 'ProductDetails',
    component: ProductDetailsView,
    props: true
  },
  {
    path: '/cart',
    name: 'Cart',
    component: CartView
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
