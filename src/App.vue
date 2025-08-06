<template>
  <v-app>
    <!-- Navigation Bar -->
    <v-app-bar app color="primary" dark>
      <v-toolbar-title>Vue Shop</v-toolbar-title>
      <v-spacer />
      <v-btn to="/" text>Products</v-btn>
      <v-btn to="/cart" text>Cart</v-btn>
      <!-- Optional Theme Toggle -->
      <v-switch
        v-model="isDark"
        inset
        hide-details
        :label="`Theme: ${isDark ? 'Dark' : 'Light'}`"
        @change="toggleTheme"
        class="ml-4"
      />
    </v-app-bar>

    <!-- Main Content -->
    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script setup>
import { ref } from 'vue'
import { useTheme } from 'vuetify'

const isDark = ref(false)
const theme = useTheme()

function toggleTheme() {
  theme.global.name.value = isDark.value ? 'dark' : 'light'
}
</script>
