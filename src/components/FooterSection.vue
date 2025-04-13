<template>
  <footer class="footer">
    <div class="container mx-auto px-6">
      <div class="footer-content">
        <div class="footer-brand">
          <div class="logo-circle">
            <span class="logo-text">PM</span>
          </div>
          <div class="brand-info">
            <h3 class="brand-name">Patrick Molz</h3>
            <p class="brand-title">Frontend Engineer</p>
          </div>
        </div>
        
        <div class="footer-contact">
          <a href="mailto:mail@patrickmolz.de" class="email-button">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            <span>mail@patrickmolz.de</span>
          </a>
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
.footer {
  background: linear-gradient(135deg, var(--background-light) 0%, white 100%);
  padding: 80px 0 40px;
  position: relative;
  overflow: hidden;
}

.footer::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 1px;
  background: linear-gradient(90deg, transparent 0%, var(--accent-color) 50%, transparent 100%);
}

.footer-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 3rem;
}

.footer-brand {
  display: flex;
  align-items: center;
  gap: 1.5rem;
}

.logo-circle {
  width: 4rem;
  height: 4rem;
  border-radius: 50%;
  background: linear-gradient(135deg, var(--accent-color) 0%, var(--primary-color) 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  animation: float 3s ease-in-out infinite;
}

@keyframes float {
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-10px);
  }
}

.logo-text {
  font-size: 1.5rem;
  font-weight: 700;
  color: white;
  letter-spacing: -0.03em;
}

.brand-info {
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
}

.brand-name {
  font-size: 1.5rem;
  font-weight: 700;
  color: var(--text-primary);
  letter-spacing: -0.03em;
}

.brand-title {
  font-size: 1rem;
  color: var(--text-secondary);
}

.footer-contact {
  display: flex;
  justify-content: center;
}

.email-button {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 0.75rem 1.5rem;
  background: white;
  border-radius: 2rem;
  color: var(--text-primary);
  text-decoration: none;
  font-weight: 500;
  transition: all 0.3s ease;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
}

.email-button:hover {
  transform: translateY(-2px);
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
  color: var(--accent-color);
}

.footer-copyright {
  text-align: center;
  color: var(--text-secondary);
  font-size: 0.875rem;
}

@media (max-width: 768px) {
  .footer {
    padding: 60px 0 30px;
  }
  
  .footer-content {
    gap: 2rem;
  }
  
  .logo-circle {
    width: 3rem;
    height: 3rem;
  }
  
  .logo-text {
    font-size: 1.25rem;
  }
  
  .brand-name {
    font-size: 1.25rem;
  }
  
  .email-button {
    padding: 0.5rem 1rem;
    font-size: 0.875rem;
  }
}
</style>

// tailwind.config.js
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#eff6ff',
          100: '#dbeafe',
          200: '#bfdbfe',
          300: '#93c5fd',
          400: '#60a5fa',
          500: '#3b82f6',
          600: '#2563eb',
          700: '#1d4ed8',
          800: '#1e40af',
          900: '#1e3a8a',
        }
      },
      animation: {
        'float': 'float 3s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
    },
  },
  plugins: [],
}
