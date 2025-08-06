<template>
  <v-container class="text-center">
    <h1>Welcome to My E-Commerce Store</h1>
    <p>Browse our awesome products by visiting the Products page.</p>
    <v-btn color="primary" to="/products" class="mt-4" router>
      Go to Products
    </v-btn>
  </v-container>
</template>

<script>
export default {
  name: 'HomeView'
}
</script>
