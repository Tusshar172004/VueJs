// store/index.js
import { createStore } from "vuex";

export default createStore({
  state: {
    products: [], // populated in main App.vue or fetched later
    cart: [],
  },
  mutations: {
    setProducts(state, products) {
      state.products = products;
    },
    addToCart(state, product) {
      state.cart.push(product);
    },
    removeFromCart(state, product) {
      state.cart = state.cart.filter((p) => p.id !== product.id);
    },
  },
});
