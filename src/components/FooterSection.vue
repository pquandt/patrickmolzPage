<template>
  <footer class="footer-section">
    <div class="container mx-auto px-6">
      <div class="footer-content">
        <div class="footer-links">
          <a href="#about" class="footer-link">Über mich</a>
          <a href="#contact" class="footer-link">Kontakt</a>
        </div>
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
  background-color: white;
  padding: 2rem 0;
  border-top: 1px solid rgba(0, 0, 0, 0.1);
}

.footer-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
}

.footer-links {
  display: flex;
  gap: 2rem;
}

.footer-link {
  color: var(--text-secondary);
  text-decoration: none;
  transition: color 0.3s ease;
}

.footer-link:hover {
  color: var(--accent-color);
}

.footer-copyright {
  color: var(--text-secondary);
  font-size: 0.875rem;
}

@media (max-width: 768px) {
  .footer-links {
    gap: 1.5rem;
  }
}
</style>
