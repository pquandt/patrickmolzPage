<template>
  <section id="about" class="about-section">
    <div class="container mx-auto px-6">
      <div class="about-grid">
        <div class="about-image">
          <div class="image-container">
            <div class="image-gradient"></div>
            <img src="/images/profile.jpg" alt="Patrick Molz" class="profile-image" />
          </div>
          <div class="image-decoration"></div>
        </div>
        
        <div class="about-content">
          <div class="content-header">
            <h2 class="section-title">
              <span class="title-text">Über mich</span>
              <span class="title-decoration"></span>
            </h2>
          </div>
          
          <div class="text-content">
            <div class="text-card">
              <div class="card-decoration"></div>
              <p class="text-lg">
                Als Frontend Engineer mit mehr als 5 Jahren Erfahrung entwickle ich moderne, performante und benutzerfreundliche Webanwendungen.
              </p>
            </div>
            
            <div class="text-card">
              <div class="card-decoration"></div>
              <p class="text-lg">
                Meine Expertise liegt in der Entwicklung von skalierbaren Frontend-Architekturen mit Next.js, Vue.js, und TypeScript, wobei ich besonderen Wert auf Code-Qualität, Performance und Benutzererfahrung lege.
              </p>
            </div>
          </div>
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
  gsap.from('.about-image', {
    x: -50,
    opacity: 0,
    duration: 1,
    scrollTrigger: {
      trigger: '.about-image',
      start: 'top 80%',
    }
  });

  gsap.from('.about-content', {
    x: 50,
    opacity: 0,
    duration: 1,
    scrollTrigger: {
      trigger: '.about-content',
      start: 'top 80%',
    }
  });

  gsap.from('.text-card', {
    y: 20,
    opacity: 0,
    duration: 0.8,
    stagger: 0.2,
    scrollTrigger: {
      trigger: '.text-content',
      start: 'top 80%',
    }
  });
});
</script>

<style scoped>
.about-section {
  padding: 120px 0;
  position: relative;
  background-color: white;
  overflow: hidden;
}

.about-section::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: 
    radial-gradient(circle at 20% 20%, rgba(78, 205, 196, 0.15) 0%, transparent 50%),
    radial-gradient(circle at 80% 80%, rgba(45, 183, 209, 0.15) 0%, transparent 50%),
    radial-gradient(circle at 50% 50%, rgba(150, 201, 61, 0.15) 0%, transparent 50%);
  z-index: 1;
}

.about-section::after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 2px;
  background: linear-gradient(90deg, 
    transparent 0%,
    rgba(78, 205, 196, 0.2) 25%,
    rgba(45, 183, 209, 0.2) 50%,
    rgba(150, 201, 61, 0.2) 75%,
    transparent 100%
  );
  filter: drop-shadow(0 0 10px rgba(0, 0, 0, 0.1));
}

.about-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;
  position: relative;
  z-index: 1;
}

.about-image {
  position: relative;
  aspect-ratio: 3/4;
  max-width: 400px;
  margin: 0 auto;
}

.image-container {
  position: relative;
  width: 100%;
  height: 100%;
  border-radius: 2rem;
  overflow: hidden;
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.1);
}

.image-gradient {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(135deg, 
    rgba(var(--primary-color-rgb), 0.1) 0%,
    rgba(var(--accent-color-rgb), 0.1) 100%
  );
  z-index: 1;
}

.profile-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.6s ease;
  position: relative;
  z-index: 2;
}

.image-container:hover .profile-image {
  transform: scale(1.05);
}

.image-decoration {
  position: absolute;
  top: -20px;
  right: -20px;
  width: 100px;
  height: 100px;
  background: linear-gradient(135deg, #4ECDC4 0%, #45B7D1 100%);
  border-radius: 50%;
  opacity: 0.1;
  z-index: 0;
}

.about-content {
  display: flex;
  flex-direction: column;
  gap: 2.5rem;
}

.content-header {
  position: relative;
  margin-bottom: 1rem;
}

.section-title {
  font-size: 2.5rem;
  font-weight: 700;
  letter-spacing: -0.03em;
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.title-text {
  background: linear-gradient(135deg, var(--text-primary) 0%, var(--accent-color) 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  position: relative;
  display: inline-block;
}

.title-decoration {
  position: absolute;
  bottom: -0.5rem;
  left: 0;
  width: 100%;
  height: 2px;
  background: linear-gradient(90deg, 
    #4ECDC4 0%,
    #45B7D1 50%,
    #4ECDC4 100%
  );
  border-radius: 1px;
  opacity: 0.5;
  transform: scaleX(0.8);
  transform-origin: left;
}

.text-content {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.text-card {
  position: relative;
  padding: 2rem;
  background: white;
  border-radius: 1.5rem;
  box-shadow: 0 10px 30px -10px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
}

.text-card:hover {
  transform: translateY(-5px);
}

.card-decoration {
  position: absolute;
  top: 0;
  left: 0;
  width: 4px;
  height: 100%;
  background: linear-gradient(180deg, var(--primary-color) 0%, var(--accent-color) 100%);
  border-radius: 2px;
}

.text-lg {
  color: var(--text-secondary);
  line-height: 1.6;
  font-size: 1.125rem;
  position: relative;
  z-index: 1;
}

@media (max-width: 768px) {
  .about-section {
    padding: 120px 30px;
  }
  
  .about-grid {
    grid-template-columns: 1fr;
    gap: 3rem;
  }
  
  .about-image {
    max-width: 300px;
  }
  
  .text-lg {
    font-size: 1rem;
  }
  
  .section-title {
    font-size: 2rem;
  }
}

@keyframes float {
  0% {
    transform: translate(0, 0) rotate(0deg);
  }
  25% {
    transform: translate(5px, 5px) rotate(0.5deg);
  }
  50% {
    transform: translate(0, 10px) rotate(0deg);
  }
  75% {
    transform: translate(-5px, 5px) rotate(-0.5deg);
  }
  100% {
    transform: translate(0, 0) rotate(0deg);
  }
}
</style>
