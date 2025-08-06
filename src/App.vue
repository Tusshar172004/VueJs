<template>
  <v-app>
    <!-- App Bar -->
    <v-app-bar :color="isDark ? 'grey-darken-4' : 'primary'" dark app>
      <v-toolbar-title>My Shop</v-toolbar-title>
      <v-spacer></v-spacer>

      <!-- Navigation Buttons -->
      <v-btn to="/" text>Home</v-btn>
      <v-btn to="/cart" text>Cart</v-btn>

      <!-- Theme Toggle (Icon only) -->
      <v-btn icon @click="toggleTheme">
        <v-icon>{{ isDark ? 'mdi-weather-night' : 'mdi-white-balance-sunny' }}</v-icon>
      </v-btn>
    </v-app-bar>

    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script setup>
import { ref, watch } from 'vue'
import { useTheme } from 'vuetify'

const theme = useTheme()
const isDark = ref(theme.global.name.value === 'dark')

const toggleTheme = () => {
  isDark.value = !isDark.value
  theme.global.name.value = isDark.value ? 'dark' : 'light'
}

// Sync theme toggle on change
watch(() => theme.global.name.value, (val) => {
  isDark.value = val === 'dark'
})
</script>
