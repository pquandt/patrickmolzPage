<template>
  <section id="contact" class="contact-section">
    <div class="container mx-auto px-6">
      <div class="contact-content">
        <div class="title-wrapper">
          <h2 class="section-title">Kontakt</h2>
          <div class="title-decoration"></div>
        </div>
        
        <div class="contact-text">
          <p class="lead-text">Ich freue mich über Ihre Nachricht</p>
          <p class="sub-text">Ob Sie Fragen haben, ein Projekt besprechen möchten oder einfach nur Hallo sagen wollen - ich bin für Sie da.</p>
        </div>

        <div class="email-wrapper">
          <div class="email-container">
            <a href="mailto:mail@patrickmolz.de" class="email-link">
              <div class="email-icon-wrapper">
                <svg xmlns="http://www.w3.org/2000/svg" class="email-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <span class="email-address">mail@patrickmolz.de</span>
            </a>
          </div>
          <p class="response-note">Ich werde mich so schnell wie möglich bei Ihnen melden.</p>
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
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: '.contact-section',
      start: 'top center',
      toggleActions: 'play none none reverse'
    }
  });

  tl.from('.title-wrapper', {
    y: 30,
    opacity: 0,
    duration: 0.8,
    ease: 'power3.out'
  })
  .from('.contact-text', {
    y: 20,
    opacity: 0,
    duration: 0.6,
    ease: 'power3.out'
  }, '-=0.4')
  .from('.email-wrapper', {
    y: 20,
    opacity: 0,
    duration: 0.6,
    ease: 'power3.out'
  }, '-=0.3');
});
</script>

<style scoped>
.contact-section {
  background-color: white;
  padding: 160px 0;
  min-height: 80vh;
  display: flex;
  align-items: center;
  position: relative;
  overflow: hidden;
}

.contact-section::before {
  display: none;
}

.contact-content {
  max-width: 800px;
  margin: 0 auto;
  text-align: center;
  position: relative;
  z-index: 1;
}

.title-wrapper {
  margin-bottom: 4rem;
  position: relative;
}

.section-title {
  font-size: 4rem;
  font-weight: 800;
  margin-bottom: 2rem;
  letter-spacing: -0.03em;
  background: linear-gradient(135deg, var(--text-primary) 0%, var(--accent-color) 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  position: relative;
  display: inline-block;
}

.title-decoration {
  position: absolute;
  bottom: -1rem;
  left: 50%;
  transform: translateX(-50%);
  width: 100%;
  height: 2px;
  background: linear-gradient(90deg, 
    transparent 0%, 
    rgba(var(--accent-color-rgb), 0.3) 25%,
    rgba(var(--accent-color-rgb), 0.6) 50%,
    rgba(var(--accent-color-rgb), 0.3) 75%,
    transparent 100%
  );
}

.title-decoration::before,
.title-decoration::after {
  display: none;
}

.contact-text {
  margin-bottom: 4rem;
}

.lead-text {
  font-size: 2rem;
  font-weight: 600;
  color: var(--text-primary);
  margin-bottom: 1.5rem;
  line-height: 1.3;
}

.sub-text {
  font-size: 1.25rem;
  line-height: 1.6;
  color: var(--text-secondary);
  max-width: 600px;
  margin: 0 auto;
}

.email-wrapper {
  position: relative;
}

.email-container {
  display: inline-block;
  margin-bottom: 2rem;
}

.email-link {
  display: inline-flex;
  align-items: center;
  gap: 1.5rem;
  padding: 1.5rem 3rem;
  background: var(--background-light);
  border-radius: 1.5rem;
  text-decoration: none;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  overflow: hidden;
}

.email-link::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(135deg, 
    rgba(var(--accent-color-rgb), 0.1) 0%, 
    rgba(var(--primary-color-rgb), 0.1) 100%
  );
  opacity: 0;
  transition: opacity 0.4s ease;
}

.email-link:hover {
  transform: translateY(-3px);
  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
}

.email-link:hover::before {
  opacity: 1;
}

.email-icon-wrapper {
  width: 3.5rem;
  height: 3.5rem;
  border-radius: 1rem;
  background: linear-gradient(135deg, var(--accent-color) 0%, var(--primary-color) 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  transition: transform 0.4s cubic-bezier(0.4, 0, 0.2, 1);
}

.email-link:hover .email-icon-wrapper {
  transform: scale(1.1);
}

.email-icon {
  width: 1.5rem;
  height: 1.5rem;
}

.email-address {
  font-size: 1.75rem;
  font-weight: 600;
  color: var(--accent-color);
  transition: color 0.4s ease;
}

.email-link:hover .email-address {
  color: var(--primary-color);
}

.response-note {
  font-size: 1.125rem;
  color: var(--text-secondary);
  font-style: italic;
  opacity: 0.8;
}

@media (max-width: 768px) {
  .contact-section {
    padding: 120px 0;
  }
  
  .section-title {
    font-size: 3rem;
  }
  
  .lead-text {
    font-size: 1.75rem;
  }
  
  .sub-text {
    font-size: 1.125rem;
  }
  
  .email-link {
    padding: 1.25rem 2rem;
  }
  
  .email-address {
    font-size: 1.5rem;
  }
  
  .email-icon-wrapper {
    width: 3rem;
    height: 3rem;
  }
}
</style>