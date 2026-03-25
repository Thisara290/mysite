<template>
  <button 
    class="theme-toggle" 
    @click="$emit('toggle')" 
    :aria-label="isDark ? 'Switch to light theme' : 'Switch to dark theme'"
    :class="{ 'is-dark': isDark }"
  >
    <div class="toggle-container">
      <div class="glow-bg"></div>
      <div class="prism-wrapper">
        <div class="morph-shape"></div>
      </div>
      <div class="energy-particles">
        <span v-for="n in 4" :key="n" :class="'particle-' + n"></span>
      </div>
    </div>
  </button>
</template>

<script>
export default {
  name: 'ThemeToggle',
  props: {
    isDark: {
      type: Boolean,
      required: true
    }
  }
}
</script>

<style scoped>
.theme-toggle {
  background: none;
  border: none;
  padding: 0;
  cursor: pointer;
  outline: none;
  position: relative;
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: transform 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
}

.theme-toggle:hover {
  transform: scale(1.1) rotate(5deg);
}

.theme-toggle:active {
  transform: scale(0.9);
}

.toggle-container {
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.glow-bg {
  position: absolute;
  width: 120%;
  height: 120%;
  background: radial-gradient(circle, var(--accent-primary) 0%, transparent 70%);
  opacity: 0.15;
  filter: blur(8px);
  transition: all 0.6s ease;
}

.theme-toggle.is-dark .glow-bg {
  background: radial-gradient(circle, var(--accent-secondary) 0%, transparent 70%);
  opacity: 0.25;
}

.prism-wrapper {
  position: relative;
  z-index: 2;
  width: 24px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: transform 0.7s cubic-bezier(0.4, 0, 0.2, 1);
}

.morph-shape {
  width: 100%;
  height: 100%;
  background: var(--text-primary);
  border-radius: 50%; /* Circle in Light Mode */
  transition: all 0.6s cubic-bezier(0.165, 0.84, 0.44, 1);
  box-shadow: 0 0 15px rgba(102, 126, 234, 0.3);
}

.theme-toggle.is-dark .morph-shape {
  border-radius: 4px; /* Diamond/Square in Dark Mode */
  transform: rotate(45deg);
  background: white;
  box-shadow: 0 0 20px rgba(118, 75, 162, 0.6);
}

.theme-toggle.is-dark .prism-wrapper {
  transform: rotate(180deg);
}

/* Abstract Particles */
.energy-particles {
  position: absolute;
  width: 100%;
  height: 100%;
  pointer-events: none;
}

.energy-particles span {
  position: absolute;
  width: 4px;
  height: 4px;
  background: var(--accent-primary);
  border-radius: 50%;
  opacity: 0;
  transition: all 0.5s ease;
}

.theme-toggle:hover .energy-particles span {
  opacity: 0.6;
}

.particle-1 { top: 0; left: 50%; transform: translateX(-50%); }
.particle-2 { bottom: 0; left: 50%; transform: translateX(-50%); }
.particle-3 { left: 0; top: 50%; transform: translateY(-50%); }
.particle-4 { right: 0; top: 50%; transform: translateY(-50%); }

.theme-toggle:hover .particle-1 { transform: translate(-50%, -10px); }
.theme-toggle:hover .particle-2 { transform: translate(-50%, 10px); }
.theme-toggle:hover .particle-3 { transform: translate(-10px, -50%); }
.theme-toggle:hover .particle-4 { transform: translate(10px, -50%); }

.theme-toggle.is-dark .energy-particles span {
  background: var(--accent-secondary);
}
</style>
