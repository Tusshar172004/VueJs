<template>
  <v-app :theme="currentTheme">
    <v-app-bar app>
      <RouterLink to="/" style="text-decoration: none; color: inherit;">
        <v-btn icon>
          <v-icon>mdi-home</v-icon>
        </v-btn>
      </RouterLink>

      <v-toolbar-title>My Store</v-toolbar-title>
      <v-spacer />

      <RouterLink to="/cart">
        <v-btn icon>
          <v-icon>mdi-cart</v-icon>
        </v-btn>
      </RouterLink>

      <v-btn icon @click="toggleTheme">
        <v-icon>{{ currentTheme === 'light' ? 'mdi-weather-night' : 'mdi-white-balance-sunny' }}</v-icon>
      </v-btn>
    </v-app-bar>

    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script setup>
import { ref, watch } from 'vue';
import { RouterLink } from 'vue-router';
import { useTheme } from 'vuetify';

const currentTheme = ref('light');
const theme = useTheme();

watch(currentTheme, (val) => {
  theme.global.name.value = val;
});

theme.global.name.value = currentTheme.value;

function toggleTheme() {
  currentTheme.value = currentTheme.value === 'light' ? 'dark' : 'light';
}
</script>

<style>
body {
  margin: 0;
}
</style>
