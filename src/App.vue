// src/App.vue
<template>
  <div class="app">
    <NavBar />
    <main>
      <HeroSection />
      <AboutSection />
      <ContactSection />
    </main>
    <FooterSection />
  </div>
</template>

<script setup lang="ts">
import NavBar from './components/NavBar.vue';
import HeroSection from './components/HeroSection.vue';
import AboutSection from './components/AboutSection.vue';
import ContactSection from './components/ContactSection.vue';
import FooterSection from './components/FooterSection.vue';
</script>

<style>
:root {
  --primary-color: #0066cc;
  --primary-color-rgb: 0, 102, 204;
  --accent-color: #00cc66;
  --accent-color-rgb: 0, 204, 102;
  --text-primary: #1a1a1a;
  --text-secondary: #666666;
  --background-light: #f8f9fa;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html {
  scroll-behavior: smooth;
}

body {
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  line-height: 1.5;
  color: var(--text-primary);
  background-color: white;
}

.app {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

main {
  flex: 1;
}
</style>