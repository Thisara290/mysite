<template>
  <div
    ref="revealEl"
    class="reveal-wrapper"
    :class="[
      `reveal--${animation}`,
      { 'reveal--visible': isVisible }
    ]"
    :style="delayStyle"
  >
    <slot />
  </div>
</template>

<script>
export default {
  name: 'RevealOnScroll',
  props: {
    // Animation type: 'fade-up', 'fade-left', 'fade-right', 'scale', 'fade'
    animation: {
      type: String,
      default: 'fade-up'
    },
    // Delay in ms before animation starts (useful for stagger)
    delay: {
      type: Number,
      default: 0
    },
    // How much of the element must be visible to trigger (0–1)
    threshold: {
      type: Number,
      default: 0.15
    },
    // Trigger animation only once
    once: {
      type: Boolean,
      default: true
    },
    // Duration in ms
    duration: {
      type: Number,
      default: 800
    }
  },
  data() {
    return {
      isVisible: false,
      observer: null
    }
  },
  computed: {
    delayStyle() {
      return {
        '--reveal-delay': `${this.delay}ms`,
        '--reveal-duration': `${this.duration}ms`
      }
    }
  },
  mounted() {
    // Respect reduced motion preference
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
      this.isVisible = true;
      return;
    }

    this.observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            this.isVisible = true;
            if (this.once) {
              this.observer.unobserve(entry.target);
            }
          } else if (!this.once) {
            this.isVisible = false;
          }
        });
      },
      { threshold: this.threshold, rootMargin: '0px 0px -40px 0px' }
    );

    this.observer.observe(this.$refs.revealEl);
  },
  beforeUnmount() {
    if (this.observer) {
      this.observer.disconnect();
    }
  }
}
</script>

<style>
/* ── REVEAL BASE ─────────────────────────────── */
.reveal-wrapper {
  will-change: transform, opacity;
  transition-property: transform, opacity;
  transition-duration: var(--reveal-duration, 800ms);
  transition-delay: var(--reveal-delay, 0ms);
  transition-timing-function: cubic-bezier(0.16, 1, 0.3, 1);
}

/* ── FADE UP ─────────────────────────────────── */
.reveal--fade-up {
  opacity: 0;
  transform: translateY(40px);
}
.reveal--fade-up.reveal--visible {
  opacity: 1;
  transform: translateY(0);
}

/* ── FADE LEFT ────────────────────────────────── */
.reveal--fade-left {
  opacity: 0;
  transform: translateX(-40px);
}
.reveal--fade-left.reveal--visible {
  opacity: 1;
  transform: translateX(0);
}

/* ── FADE RIGHT ───────────────────────────────── */
.reveal--fade-right {
  opacity: 0;
  transform: translateX(40px);
}
.reveal--fade-right.reveal--visible {
  opacity: 1;
  transform: translateX(0);
}

/* ── SCALE REVEAL ─────────────────────────────── */
.reveal--scale {
  opacity: 0;
  transform: scale(0.92);
}
.reveal--scale.reveal--visible {
  opacity: 1;
  transform: scale(1);
}

/* ── SIMPLE FADE ──────────────────────────────── */
.reveal--fade {
  opacity: 0;
}
.reveal--fade.reveal--visible {
  opacity: 1;
}
</style>
