<template>
  <footer class="footer-section">
    <div class="container">
      <div class="footer-content">
  
        <div class="footer-copyright">
          <p>&copy; {{ currentYear }} Patrick Molz. Alle Rechte vorbehalten.</p>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
import { computed } from 'vue';

const currentYear = computed(() => new Date().getFullYear());
</script>

<style scoped>
.footer-section {
  padding: 2rem 0;
  background-color: var(--background-light);
  border-top: 1px solid rgba(0, 0, 0, 0.05);
}

.footer-content {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
  text-align: center;
}

.footer-copyright {
  color: var(--text-secondary);
  font-size: 0.875rem;
}
</style>
