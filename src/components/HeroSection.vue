<template>
  <section id="hero" class="hero-section">
    <div class="container mx-auto px-6">
      <div class="hero-content">
        <h1 class="hero-title">
          <span class="gradient-text">Patrick Molz</span>
          <span class="hero-subtitle">Frontend Engineer</span>
        </h1>
        <p class="hero-description">
          Ich entwickle moderne, performante und benutzerfreundliche Webanwendungen mit Vue.js, React und TypeScript.
        </p>
        <div class="hero-cta">
          <a href="#contact" class="cta-button">Kontakt aufnehmen</a>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { onMounted } from 'vue';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

onMounted(() => {
  gsap.from('.hero-title', {
    y: 50,
    opacity: 0,
    duration: 1,
    ease: 'power3.out'
  });

  gsap.from('.hero-description', {
    y: 30,
    opacity: 0,
    duration: 1,
    delay: 0.3,
    ease: 'power3.out'
  });

  gsap.from('.hero-cta', {
    y: 20,
    opacity: 0,
    duration: 1,
    delay: 0.6,
    ease: 'power3.out'
  });
});
</script>

<style scoped>
.hero-section {
  min-height: 100vh;
  display: flex;
  align-items: center;
  padding: 120px 0;
  background: linear-gradient(135deg, var(--background-light) 0%, white 100%);
  position: relative;
  overflow: hidden;
}

.hero-content {
  max-width: 800px;
  margin: 0 auto;
  text-align: center;
}

.hero-title {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-bottom: 2rem;
}

.gradient-text {
  font-size: 4rem;
  font-weight: 800;
  letter-spacing: -0.03em;
  background: linear-gradient(135deg, var(--primary-color) 0%, var(--accent-color) 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.hero-subtitle {
  font-size: 2rem;
  font-weight: 600;
  color: var(--text-secondary);
}

.hero-description {
  font-size: 1.25rem;
  line-height: 1.6;
  color: var(--text-secondary);
  margin-bottom: 3rem;
}

.hero-cta {
  display: flex;
  justify-content: center;
}

.cta-button {
  display: inline-flex;
  align-items: center;
  padding: 1rem 2rem;
  background: linear-gradient(135deg, var(--accent-color) 0%, var(--primary-color) 100%);
  color: white;
  font-weight: 600;
  text-decoration: none;
  border-radius: 2rem;
  transition: all 0.3s ease;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
}

.cta-button:hover {
  transform: translateY(-2px);
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
}

@media (max-width: 768px) {
  .hero-section {
    padding: 80px 0;
  }
  
  .gradient-text {
    font-size: 3rem;
  }
  
  .hero-subtitle {
    font-size: 1.5rem;
  }
  
  .hero-description {
    font-size: 1.125rem;
  }
}
</style>