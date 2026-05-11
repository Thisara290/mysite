<template>
  <div class="floating-container" :class="{ 'visible': isVisible }">
    <a 
      href="https://mail.google.com/mail/?view=cm&fs=1&to=thisarainfo99@gmail.com" 
      target="_blank"
      class="floating-mail-btn"
      aria-label="Send me an email via Gmail"
      title="Contact me via Gmail"
    >
      <div class="btn-content">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="mail-icon">
          <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
          <polyline points="22,6 12,13 2,6"></polyline>
        </svg>
        <span class="btn-text">Email Me</span>
      </div>
      <div class="pulse-ring"></div>
    </a>
  </div>
</template>

<script>
export default {
  name: 'FloatingMailButton',
  data() {
    return {
      isVisible: false
    }
  },
  mounted() {
    // Show the button after a small delay for a nice entry effect
    setTimeout(() => {
      this.isVisible = true;
    }, 1000);
  }
}
</script>

<style scoped>
.floating-container {
  position: fixed;
  bottom: 40px;
  right: 40px;
  z-index: 1000;
  opacity: 0;
  transform: translateY(20px) scale(0.8);
  transition: all 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  pointer-events: none;
}

.floating-container.visible {
  opacity: 1;
  transform: translateY(0) scale(1);
  pointer-events: auto;
}

.floating-mail-btn {
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, var(--accent-primary, #667eea) 0%, var(--accent-secondary, #764ba2) 100%);
  color: white;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  text-decoration: none;
  box-shadow: 0 10px 30px rgba(102, 126, 234, 0.4);
  position: relative;
  overflow: hidden;
  transition: all 0.3s cubic-bezier(0.165, 0.84, 0.44, 1);
}

.btn-content {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 0 20px;
  white-space: nowrap;
}

.mail-icon {
  flex-shrink: 0;
  transition: transform 0.3s ease;
}

.btn-text {
  font-weight: 700;
  font-size: 1rem;
  opacity: 0;
  max-width: 0;
  overflow: hidden;
  transition: all 0.4s cubic-bezier(0.165, 0.84, 0.44, 1);
}

/* Hover Effects */
.floating-mail-btn:hover {
  width: 160px;
  border-radius: 35px;
  transform: translateY(-5px);
  box-shadow: 0 15px 40px rgba(102, 126, 234, 0.6);
}

.floating-mail-btn:hover .btn-text {
  opacity: 1;
  max-width: 100px;
}

.floating-mail-btn:hover .mail-icon {
  transform: rotate(-10deg);
}

/* Pulse Animation */
.pulse-ring {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border-radius: 50%;
  background: var(--accent-primary, #667eea);
  opacity: 0.3;
  z-index: -1;
  animation: pulse 2s infinite;
}

@keyframes pulse {
  0% {
    transform: scale(1);
    opacity: 0.5;
  }
  100% {
    transform: scale(1.6);
    opacity: 0;
  }
}

/* Responsive */
@media (max-width: 768px) {
  .floating-container {
    bottom: 30px;
    right: 30px;
  }
  
  .floating-mail-btn {
    width: 55px;
    height: 55px;
  }
  
  .floating-mail-btn:hover {
    width: 55px; /* Keep it round on mobile to save space */
    border-radius: 50%;
  }
  
  .btn-text {
    display: none; /* Hide text on mobile hover */
  }
}
</style>
