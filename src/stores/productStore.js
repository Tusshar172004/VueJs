// src/stores/productStore.js
import { defineStore } from 'pinia';
import products from '@/data/products';

export const useProductStore = defineStore('productStore', {
  state: () => ({
    products,
  }),
});
