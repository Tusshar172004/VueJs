<template>
  <v-container class="py-5">
    <!-- Search -->
    <v-text-field
      v-model="search"
      label="Search products"
      append-icon="mdi-magnify"
      class="mb-4"
    />

    <!-- Filters -->
    <v-row dense class="mb-4">
      <v-col cols="12" sm="4">
        <v-select
          v-model="selectedCategory"
          :items="categories"
          label="Category"
          clearable
        />
      </v-col>
      <v-col cols="12" sm="4">
        <v-select
          v-model="selectedRating"
          :items="[1, 2, 3, 4, 5]"
          label="Minimum Rating"
          clearable
        />
      </v-col>
      <v-col cols="12" sm="4">
        <v-select
          v-model="sortOption"
          :items="['Price: Low to High', 'Price: High to Low']"
          label="Sort by"
          clearable
        />
      </v-col>
    </v-row>

    <!-- Product Cards -->
    <v-row>
      <v-col
        cols="12"
        sm="6"
        md="4"
        v-for="product in filteredProducts"
        :key="product.id"
      >
        <v-card>
          <v-img :src="product.image" height="200px" />
          <v-card-title>{{ product.name }}</v-card-title>
          <v-card-subtitle>₹{{ product.price }}</v-card-subtitle>
          <v-card-text>
            <v-rating :model-value="product.rating" readonly dense />
          </v-card-text>
          <v-card-actions>
            <v-btn color="primary" @click="addToCart(product)">Add to Cart</v-btn>
            <RouterLink :to="`/product/${product.id}`">
              <v-btn text>View</v-btn>
            </RouterLink>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useProductStore } from '@/stores/productStore'
import { useCartStore } from '@/stores/cartStore'
import { RouterLink } from 'vue-router'

// ✅ Ensure you are calling the Pinia store function
const productStore = useProductStore()
const cartStore = useCartStore()

const search = ref('')
const selectedCategory = ref(null)
const selectedRating = ref(null)
const sortOption = ref(null)

const categories = [...new Set(productStore.products.map(p => p.category))]

const filteredProducts = computed(() => {
  let result = productStore.products

  if (search.value) {
    result = result.filter(p =>
      p.name.toLowerCase().includes(search.value.toLowerCase())
    )
  }

  if (selectedCategory.value) {
    result = result.filter(p => p.category === selectedCategory.value)
  }

  if (selectedRating.value) {
    result = result.filter(p => p.rating >= selectedRating.value)
  }

  if (sortOption.value === 'Price: Low to High') {
    result = [...result].sort((a, b) => a.price - b.price)
  } else if (sortOption.value === 'Price: High to Low') {
    result = [...result].sort((a, b) => b.price - a.price)
  }

  return result
})

function addToCart(product) {
  cartStore.addToCart(product)
}
</script>
