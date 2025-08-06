<template>
  <v-container class="py-5">
    <v-row>
      <v-col cols="12" md="6">
        <v-img :src="product?.image" aspect-ratio="1.5" contain></v-img>
      </v-col>
      <v-col cols="12" md="6">
        <h1>{{ product?.name }}</h1>
        <p class="text-subtitle-1">{{ product?.description }}</p>
        <p class="text-h6">₹{{ product?.price }}</p>
        <v-rating :model-value="product?.rating" color="amber" dense readonly></v-rating>
        <v-btn color="primary" class="mt-4" @click="addToCart" :disabled="!product">Add to Cart</v-btn>
      </v-col>
    </v-row>
    <v-row class="mt-8">
      <v-col cols="12">
        <h2>Reviews</h2>
        <v-list v-if="product?.reviews && product.reviews.length">
          <v-list-item v-for="(review, idx) in product.reviews" :key="idx">
            <v-list-item-content>
              <v-list-item-title>{{ review.author }}</v-list-item-title>
              <v-list-item-subtitle>{{ review.comment }}</v-list-item-subtitle>
              <v-rating :model-value="review.rating" dense readonly size="small" />
            </v-list-item-content>
          </v-list-item>
        </v-list>
        <div v-else>No reviews yet.</div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
import { useRoute } from 'vue-router'
import { computed } from 'vue'
import { useProductStore } from '@/stores/productStore'
import { useCartStore } from '@/stores/cartStore'

const route = useRoute()
const productStore = useProductStore()
const cartStore = useCartStore()

const product = computed(() => {
  const id = Number(route.params.id)
  return productStore.products.find(p => p.id === id)
})

function addToCart() {
  if (product.value) {
    cartStore.addToCart(product.value)
  }
}
</script>
