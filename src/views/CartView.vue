<template>
  <v-container class="py-5">
    <h2 class="mb-4">Your Cart</h2>

    <v-alert v-if="cartStore.items.length === 0" type="info" border="left">
      Your cart is empty.
    </v-alert>

    <v-row v-else>
      <v-col
        cols="12"
        md="6"
        v-for="item in cartStore.items"
        :key="item.id"
      >
        <v-card>
          <v-img :src="item.image" height="200px" />
          <v-card-title>{{ item.name }}</v-card-title>
          <v-card-subtitle>
            ₹{{ item.price }} x {{ item.quantity }} = ₹{{ item.price * item.quantity }}
          </v-card-subtitle>
          <v-card-actions>
            <v-btn color="error" @click="cartStore.removeFromCart(item.id)">Remove</v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>

    <v-divider class="my-4" />

    <div v-if="cartStore.items.length">
      <h3>Total Amount: ₹{{ cartTotal }}</h3>
      <v-btn color="primary" @click="checkout">Checkout</v-btn>
    </div>
  </v-container>
</template>

<script setup>
import { useCartStore } from '@/stores/cartStore';
import { computed } from 'vue';

const cartStore = useCartStore();

const cartTotal = computed(() =>
  cartStore.items.reduce((sum, item) => sum + item.price * item.quantity, 0)
);

function checkout() {
  alert('Checkout successful!');
  cartStore.clearCart();
}
</script>
