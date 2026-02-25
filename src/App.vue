<template>
  <div id="app">
    <nav class="navbar" :class="{ 'scrolled': isScrolled }">
      <div class="nav-container">
        <router-link to="/" class="nav-brand">
          <h2>Thisara<span class="dot">.</span></h2>
        </router-link>
        
        <div class="nav-menu" :class="{ active: isMenuOpen }">
          <router-link to="/" class="nav-link" @click="closeMenu">Home</router-link>
          <router-link to="/about" class="nav-link" @click="closeMenu">About Me</router-link>
          <router-link to="/projects" class="nav-link" @click="closeMenu">Projects</router-link>
          <router-link to="/blogs" class="nav-link" @click="closeMenu">Blogs</router-link>
          <router-link to="/contact" class="nav-link" @click="closeMenu">Contact</router-link>
        </div>
        
        <div class="nav-toggle" :class="{ active: isMenuOpen }" @click="toggleMenu">
          <span class="bar"></span>
          <span class="bar"></span>
          <span class="bar"></span>
        </div>
      </div>
    </nav>
    
    <main class="main-content">
      <router-view />
    </main>
    
    <Footer />
  </div>
</template>

<script>
import Footer from './components/Footer.vue';

export default {
  name: 'App',
  components: {
    Footer
  },
  data() {
    return {
      isMenuOpen: false,
      isScrolled: false
    }
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll);
  },
  beforeUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  },
  methods: {
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen;
    },
    closeMenu() {
      this.isMenuOpen = false;
    },
    handleScroll() {
      this.isScrolled = window.scrollY > 50;
    }
  }
}
</script>

<style>
/* Reset and Base */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  line-height: 1.6;
  color: #1a1a1a;
  background-color: #fafafa;
  overflow-x: hidden;
}

#app {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

/* Floating Glassmorphism Navbar */
.navbar {
  position: fixed;
  top: 20px;
  left: 50%;
  transform: translateX(-50%);
  width: 90%;
  max-width: 1200px;
  background: rgba(255, 255, 255, 0.6);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.4);
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.05);
  border-radius: 100px;
  z-index: 1000;
  transition: all 0.4s cubic-bezier(0.165, 0.84, 0.44, 1);
}

.navbar.scrolled {
  top: 10px;
  width: 95%;
  background: rgba(255, 255, 255, 0.85);
  box-shadow: 0 15px 40px rgba(0, 0, 0, 0.08);
}

.nav-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 70px;
  padding: 0 30px;
}

.nav-brand {
  text-decoration: none;
  position: relative;
  z-index: 1001;
}

.nav-brand h2 {
  color: #1a1a1a;
  font-weight: 800;
  font-size: 1.4rem;
  letter-spacing: -0.5px;
}

.nav-brand .dot {
  color: #667eea;
}

.nav-menu {
  display: flex;
  gap: 2.5rem;
  list-style: none;
}

.nav-link {
  text-decoration: none;
  color: #4a4a4a;
  font-weight: 600;
  font-size: 0.95rem;
  transition: color 0.3s ease;
  position: relative;
  padding: 5px 0;
}

.nav-link:hover {
  color: #667eea;
}

.nav-link.router-link-active {
  color: #667eea;
}

.nav-link::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 0;
  height: 2px;
  background: linear-gradient(90deg, #667eea, #764ba2);
  transition: width 0.3s cubic-bezier(0.165, 0.84, 0.44, 1);
  border-radius: 2px;
}

.nav-link:hover::after, 
.nav-link.router-link-active::after {
  width: 100%;
}

.nav-toggle {
  display: none;
  flex-direction: column;
  justify-content: center;
  gap: 6px;
  cursor: pointer;
  z-index: 1001;
  width: 30px;
  height: 30px;
}

.bar {
  width: 100%;
  height: 2px;
  background: #1a1a1a;
  transition: all 0.3s ease;
  transform-origin: left center;
}

.nav-toggle.active .bar:nth-child(1) {
  transform: rotate(45deg);
  width: 28px;
  margin-top: 10px;
}

.nav-toggle.active .bar:nth-child(2) {
  opacity: 0;
}

.nav-toggle.active .bar:nth-child(3) {
  transform: rotate(-45deg);
  width: 28px;
  margin-top: -16px;
}

.main-content {
  flex: 1;
}

@media (max-width: 768px) {
  .navbar {
    border-radius: 0;
    width: 100%;
    top: 0;
    border: none;
    border-bottom: 1px solid rgba(255, 255, 255, 0.4);
  }
  
  .navbar.scrolled {
    width: 100%;
    top: 0;
    border-radius: 0;
  }

  .nav-menu {
    position: fixed;
    top: 0;
    right: -100%;
    width: 100%;
    height: 100vh;
    background: rgba(255, 255, 255, 0.98);
    backdrop-filter: blur(20px);
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 2rem;
    transition: right 0.4s cubic-bezier(0.165, 0.84, 0.44, 1);
    z-index: 1000;
  }
  
  .nav-menu.active {
    right: 0;
  }
  
  .nav-link {
    font-size: 1.5rem;
  }
  
  .nav-toggle {
    display: flex;
  }
}
</style>