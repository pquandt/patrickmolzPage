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
  padding: 120px 0;
  position: relative;
  background: linear-gradient(135deg, #f8f9fa 0%, #ffffff 100%);
  overflow: hidden;
}

.contact-section::before {
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

.contact-section::after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 1px;
  background: linear-gradient(90deg, 
    transparent 0%,
    rgba(45, 183, 209, 0.1) 50%,
    transparent 100%
  );
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
  filter: drop-shadow(0 0 10px rgba(0, 0, 0, 0.1));
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
  background: rgba(255, 255, 255, 0.95);
  border-radius: 1.5rem;
  text-decoration: none;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  overflow: hidden;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(0, 0, 0, 0.05);
}

.email-link::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(135deg, 
    rgba(45, 183, 209, 0.05) 0%, 
    rgba(78, 205, 196, 0.05) 100%
  );
  opacity: 0;
  transition: opacity 0.4s ease;
}

.email-link:hover {
  transform: translateY(-2px);
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
  border-color: rgba(0, 0, 0, 0.1);
}

.email-link:hover::before {
  opacity: 1;
}

.email-icon-wrapper {
  width: 3.5rem;
  height: 3.5rem;
  border-radius: 1rem;
  background: linear-gradient(135deg, #45B7D1 0%, #4ECDC4 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: 0 4px 6px rgba(69, 183, 209, 0.1);
}

.email-link:hover .email-icon-wrapper {
  transform: scale(1.05);
  box-shadow: 0 6px 8px rgba(69, 183, 209, 0.15);
}

.email-icon {
  width: 1.5rem;
  height: 1.5rem;
}

.email-address {
  font-size: 1.75rem;
  font-weight: 600;
  color: #2c3e50;
  transition: all 0.4s ease;
  letter-spacing: -0.02em;
}

.email-link:hover .email-address {
  color: #1a2634;
  opacity: 1;
}

.response-note {
  font-size: 1.125rem;
  color: var(--text-secondary);
  font-style: italic;
  opacity: 0.8;
}

@media (max-width: 768px) {
  .contact-section {
    padding: 120px 30px;
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

.success-message,
.error-message-toast {
  position: fixed;
  bottom: 2rem;
  right: 2rem;
  padding: 1rem 2rem;
  border-radius: 0.5rem;
  color: white;
  font-weight: 500;
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
  z-index: 1000;
  animation: slideIn 0.3s ease-out;
}

.success-message {
  background: linear-gradient(135deg, #4ECDC4 0%, #45B7D1 100%);
}

.error-message-toast {
  background: linear-gradient(135deg, #FF6B6B 0%, #FBC2EB 100%);
}

@keyframes slideIn {
  from {
    transform: translateX(100%);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
}

.submit-button {
  background: linear-gradient(135deg, #45B7D1 0%, #4ECDC4 50%, #96C93D 100%);
  color: white;
  border: none;
  padding: 0.75rem 2rem;
  font-size: 1rem;
  font-weight: 500;
  border-radius: 0.5rem;
  cursor: pointer;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
  opacity: 0.95;
  box-shadow: 0 4px 6px rgba(69, 183, 209, 0.2);
}

.submit-button:hover {
  opacity: 1;
  transform: translateY(-2px);
  box-shadow: 0 8px 15px rgba(69, 183, 209, 0.4);
  background: linear-gradient(135deg, #2D9BB7 0%, #3DB8A8 50%, #7AB82D 100%);
  filter: brightness(1.1);
}

.submit-button:active {
  transform: translateY(0);
  box-shadow: 0 4px 6px rgba(69, 183, 209, 0.2);
}

.submit-button:disabled {
  opacity: 0.6;
  cursor: not-allowed;
  transform: none;
  box-shadow: none;
}

.submit-button::after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.3), transparent);
  transform: translateX(-100%);
  transition: transform 0.5s ease;
}

.submit-button:hover::after {
  transform: translateX(100%);
}

@media (max-width: 768px) {
  .submit-button {
    padding: 0.75rem 1.5rem;
    font-size: 0.875rem;
  }
}
</style>