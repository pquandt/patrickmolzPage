<template>
  <nav class="navbar">
    <div class="container">
      <div class="navbar-brand">
        <a href="#hero" class="brand-link">Patrick Molz</a>
      </div>

      <div class="navbar-links">
        <a href="#about" class="nav-link">Über mich</a>
        <a href="#contact" class="nav-link">Kontakt</a>
      </div>

      <button class="mobile-menu-button" @click="toggleMobileMenu">
        <svg
          class="hamburger-icon"
          :class="{ 'is-active': isMobileMenuOpen }"
          viewBox="0 0 100 100"
          width="30"
          height="30"
        >
          <path class="line line1" d="M 20,25 H 80" />
          <path class="line line2" d="M 20,50 H 80" />
          <path class="line line3" d="M 20,75 H 80" />
        </svg>
      </button>
    </div>

    <Transition name="slide">
      <div v-if="isMobileMenuOpen" class="mobile-menu">
        <div class="mobile-menu-header">
          <button class="close-button" @click="toggleMobileMenu">
            <svg viewBox="0 0 24 24" width="24" height="24">
              <path
                d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"
                fill="currentColor"
              />
            </svg>
          </button>
        </div>
        <div class="mobile-menu-content">
          <a
            href="#about"
            class="mobile-nav-link"
            @click="toggleMobileMenu"
          >Über mich</a
          >
          <a
            href="#contact"
            class="mobile-nav-link"
            @click="toggleMobileMenu"
          >Kontakt</a
          >
        </div>
      </div>
    </Transition>
  </nav>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const isMobileMenuOpen = ref(false);

const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value;
};
</script>

<style scoped>
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  padding: 24px 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: rgba(255, 255, 255, 0.8);
  backdrop-filter: blur(10px);
  border-bottom: 1px solid rgba(0, 0, 0, 0.05);
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding-left: 24px;
  padding-right: 24px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.navbar-brand {
  font-size: 1.5rem;
  font-weight: 400;
  letter-spacing: 0.03em;
  text-transform: uppercase;
}

.brand-link {
  background: linear-gradient(90deg, #6a7b8a, #4a5b6a);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  text-decoration: none;
  position: relative;
  padding: 0.5rem 0;
  transition: all 0.3s ease;
  opacity: 0.8;
}

.brand-link:hover {
  opacity: 1;
  letter-spacing: 0.04em;
  background: linear-gradient(90deg, #5a6b7a, #3a4b5a);
  -webkit-background-clip: text;
  background-clip: text;
}

.brand-link::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 1px;
  background: linear-gradient(90deg, #6a7b8a, #4a5b6a);
  transform: scaleX(0);
  transform-origin: right;
  transition: transform 0.3s ease;
  opacity: 0.2;
}

.navbar-links {
  display: flex;
  gap: 2rem;
}

.nav-link {
  color: #555;
  text-decoration: none;
  font-weight: 500;
  font-size: 1rem;
  padding: 0.5rem 0;
  position: relative;
  transition: color 0.3s ease;
}

.nav-link::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 1px;
  background: #555;
  transform: scaleX(0);
  transform-origin: right;
  transition: transform 0.3s ease;
}

.nav-link:hover {
  color: #222;
}

.nav-link:hover::after {
  transform: scaleX(1);
  transform-origin: left;
}

.mobile-menu-button {
  display: none;
  background: none;
  border: none;
  cursor: pointer;
  padding: 0.5rem;
}

.hamburger-icon {
  width: 30px;
  height: 30px;
  position: relative;
  transform: rotate(0deg);
  transition: 0.5s ease-in-out;
  cursor: pointer;
}

.hamburger-icon .line {
  stroke: #333;
  stroke-width: 6;
  stroke-linecap: round;
  stroke-linejoin: round;
  fill: none;
  transition: 0.5s ease-in-out;
}

.hamburger-icon.is-active .line1 {
  transform: rotate(45deg) translate(25px, 25px);
}

.hamburger-icon.is-active .line2 {
  opacity: 0;
}

.hamburger-icon.is-active .line3 {
  transform: rotate(-45deg) translate(25px, -25px);
}

.mobile-menu {
  position: fixed;
  top: 0;
  right: 0;
  width: 100%;
  height: 100vh;
  background-color: white;
  z-index: 1001;
}

.mobile-menu-header {
  display: flex;
  justify-content: flex-end;
  padding: 1rem;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
}

.close-button {
  background: none;
  border: none;
  cursor: pointer;
  padding: 0.5rem;
  color: #333;
}

.mobile-menu-content {
  display: flex;
  flex-direction: column;
  padding: 2rem;
  gap: 1.5rem;
}

.mobile-nav-link {
  color: #333;
  text-decoration: none;
  font-size: 1.25rem;
  font-weight: 500;
  padding: 0.5rem 0;
  transition: color 0.3s ease;
}

.mobile-nav-link:hover {
  color: #007bff;
}

@media (max-width: 768px) {
  .navbar {
    padding: 1rem 0;
  }

  .navbar-brand {
    font-size: 1.5rem;
    letter-spacing: 0.04em;
  }

  .navbar-links {
    gap: 1.5rem;
  }

  .nav-link {
    font-size: 0.875rem;
  }

  .navbar-links {
    display: none;
  }

  .mobile-menu-button {
    display: block;
  }
}
</style>
