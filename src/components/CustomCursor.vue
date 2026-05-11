<template>
  <div class="custom-cursor-container" v-if="!isTouch">
    <div 
      class="cursor-dot" 
      :style="{ transform: `translate3d(${dotPos.x}px, ${dotPos.y}px, 0)` }"
    ></div>
    <div 
      class="cursor-ring" 
      :class="{ 'hovering': isHovering }"
      :style="{ transform: `translate3d(${ringPos.x}px, ${ringPos.y}px, 0)` }"
    ></div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

const dotPos = ref({ x: 0, y: 0 });
const ringPos = ref({ x: 0, y: 0 });
const isHovering = ref(false);
const isTouch = ref(false);

let rafId = null;
let mouseX = 0;
let mouseY = 0;

const updatePosition = (e) => {
  mouseX = e.clientX;
  mouseY = e.clientY;
  
  // Instant update for dot
  dotPos.value = { x: mouseX, y: mouseY };
};

const animate = () => {
  // Smooth follow for ring
  const ease = 0.15;
  ringPos.value.x += (mouseX - ringPos.value.x) * ease;
  ringPos.value.y += (mouseY - ringPos.value.y) * ease;
  
  rafId = requestAnimationFrame(animate);
};

const checkHover = (e) => {
  const target = e.target;
  const isClickable = target.closest('a, button, .interactive, input, textarea');
  isHovering.value = !!isClickable;
};

onMounted(() => {
  isTouch.value = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
  
  if (!isTouch.value) {
    window.addEventListener('mousemove', updatePosition);
    window.addEventListener('mouseover', checkHover);
    animate();
    
    // Hide default cursor
    document.documentElement.classList.add('hide-cursor');
  }
});

onUnmounted(() => {
  window.removeEventListener('mousemove', updatePosition);
  window.removeEventListener('mouseover', checkHover);
  cancelAnimationFrame(rafId);
  document.documentElement.classList.remove('hide-cursor');
});
</script>

<style scoped>
.custom-cursor-container {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 9999;
}

.cursor-dot {
  position: absolute;
  width: 6px;
  height: 6px;
  background-color: var(--accent-primary);
  border-radius: 50%;
  margin-left: -3px;
  margin-top: -3px;
  transition: transform 0.1s ease-out;
}

.cursor-ring {
  position: absolute;
  width: 30px;
  height: 30px;
  border: 1.5px solid var(--accent-primary);
  border-radius: 50%;
  margin-left: -15px;
  margin-top: -15px;
  transition: width 0.3s ease, height 0.3s ease, background-color 0.3s ease, border-color 0.3s ease;
  opacity: 0.6;
}

.cursor-ring.hovering {
  width: 60px;
  height: 60px;
  margin-left: -30px;
  margin-top: -30px;
  background-color: rgba(102, 126, 234, 0.1);
  border-color: var(--accent-secondary);
  border-width: 1px;
}

@media (max-width: 1024px) {
  .custom-cursor-container {
    display: none;
  }
}
</style>
