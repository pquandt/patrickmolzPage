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
  justify-content: center;
  position: relative;
  overflow: hidden;
  background: linear-gradient(135deg, #f8f9fa 0%, #ffffff 100%);
}

.hero-section::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: 
    radial-gradient(circle at 20% 20%, rgba(45, 183, 209, 0.08) 0%, transparent 70%),
    radial-gradient(circle at 80% 80%, rgba(78, 205, 196, 0.08) 0%, transparent 70%);
  z-index: 1;
}

.hero-section::after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(45deg,
    rgba(255, 255, 255, 0.2) 0%,
    transparent 50%,
    rgba(255, 255, 255, 0.2) 100%
  );
  z-index: 2;
  opacity: 0.5;
}

.hero-content {
  position: relative;
  z-index: 3;
  text-align: center;
  color: var(--text-primary);
  padding: 2rem;
  max-width: 800px;
  margin: 0 auto;
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
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.hero-subtitle {
  font-size: 2rem;
  font-weight: 600;
  color: var(--text-secondary);
  opacity: 0.9;
}

.hero-description {
  font-size: 1.25rem;
  line-height: 1.6;
  color: var(--text-secondary);
  margin-bottom: 3rem;
  opacity: 0.8;
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

@keyframes pulse {
  0% {
    transform: scale(1);
    opacity: 0.5;
  }
  50% {
    transform: scale(1.1);
    opacity: 0.7;
  }
  100% {
    transform: scale(1);
    opacity: 0.5;
  }
}
</style>