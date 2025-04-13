<template>
  <section id="contact" class="contact-section">
    <div class="container mx-auto px-6">
      <div class="contact-grid">
        <div class="contact-info">
          <h2 class="section-title">Kontakt</h2>
          <p class="section-subtitle">Lassen Sie uns in Kontakt treten</p>
          
          <div class="info-card">
            <div class="info-icon">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <div class="info-content">
              <h3 class="info-title">E-Mail</h3>
              <a href="mailto:mail@patrickmolz.de" class="info-link">mail@patrickmolz.de</a>
            </div>
          </div>
        </div>

        <div class="contact-form">
          <form @submit.prevent="handleSubmit" class="form">
            <div class="form-group">
              <label for="name" class="form-label">Name</label>
              <input
                type="text"
                id="name"
                v-model="form.name"
                class="form-input"
                required
              />
            </div>
            
            <div class="form-group">
              <label for="email" class="form-label">E-Mail</label>
              <input
                type="email"
                id="email"
                v-model="form.email"
                class="form-input"
                required
              />
            </div>
            
            <div class="form-group">
              <label for="message" class="form-label">Nachricht</label>
              <textarea
                id="message"
                v-model="form.message"
                class="form-textarea"
                rows="5"
                required
              ></textarea>
            </div>
            
            <button type="submit" class="submit-button" :disabled="isSubmitting">
              <span v-if="!isSubmitting">Nachricht senden</span>
              <span v-else class="loading">Wird gesendet...</span>
            </button>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface FormData {
  name: string;
  email: string;
  message: string;
}

const form = ref<FormData>({
  name: '',
  email: '',
  message: ''
});

const isSubmitting = ref(false);

const handleSubmit = async () => {
  isSubmitting.value = true;
  try {
    // Hier würde die tatsächliche Formularübermittlung stattfinden
    await new Promise(resolve => setTimeout(resolve, 1500));
    form.value = { name: '', email: '', message: '' };
    alert('Nachricht wurde erfolgreich gesendet!');
  } catch (error) {
    console.error('Fehler beim Senden:', error);
    alert('Es ist ein Fehler aufgetreten. Bitte versuchen Sie es später erneut.');
  } finally {
    isSubmitting.value = false;
  }
};
</script>

<style scoped>
.contact-section {
  background-color: white;
  padding: 120px 0;
}

.contact-grid {
  display: grid;
  grid-template-columns: 1fr 2fr;
  gap: 4rem;
  align-items: start;
}

.contact-info {
  position: sticky;
  top: 2rem;
}

.section-title {
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 1rem;
  letter-spacing: -0.03em;
  background: linear-gradient(135deg, var(--text-primary) 0%, var(--accent-color) 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.section-subtitle {
  font-size: 1.25rem;
  color: var(--text-secondary);
  margin-bottom: 3rem;
}

.info-card {
  background: var(--background-light);
  padding: 2rem;
  border-radius: 1rem;
  display: flex;
  align-items: center;
  gap: 1.5rem;
  transition: all 0.3s ease;
}

.info-card:hover {
  transform: translateY(-2px);
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
}

.info-icon {
  width: 3rem;
  height: 3rem;
  border-radius: 0.75rem;
  background: linear-gradient(135deg, var(--accent-color) 0%, var(--primary-color) 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  flex-shrink: 0;
}

.info-content {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.info-title {
  font-size: 1.125rem;
  font-weight: 600;
  color: var(--text-primary);
}

.info-link {
  color: var(--accent-color);
  text-decoration: none;
  transition: color 0.3s ease;
}

.info-link:hover {
  color: var(--primary-color);
}

.form {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.form-group {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.form-label {
  font-weight: 500;
  color: var(--text-primary);
}

.form-input,
.form-textarea {
  padding: 0.75rem 1rem;
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 0.5rem;
  background: var(--background-light);
  transition: all 0.3s ease;
}

.form-input:focus,
.form-textarea:focus {
  outline: none;
  border-color: var(--accent-color);
  box-shadow: 0 0 0 2px rgba(var(--accent-color-rgb), 0.1);
}

.submit-button {
  padding: 1rem 2rem;
  background: linear-gradient(135deg, var(--accent-color) 0%, var(--primary-color) 100%);
  color: white;
  border: none;
  border-radius: 0.5rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  margin-top: 1rem;
}

.submit-button:hover:not(:disabled) {
  transform: translateY(-2px);
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
}

.submit-button:disabled {
  opacity: 0.7;
  cursor: not-allowed;
}

.loading {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
}

@media (max-width: 768px) {
  .contact-section {
    padding: 80px 0;
  }
  
  .contact-grid {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
  
  .contact-info {
    position: static;
  }
  
  .section-title {
    font-size: 2rem;
  }
  
  .info-card {
    padding: 1.5rem;
  }
}
</style>