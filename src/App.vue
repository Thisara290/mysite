<template>
  <div id="app">
    <nav class="navbar">
      <div class="nav-container">
        <router-link to="/" class="nav-brand">
          <h2>Thisara Gunasekara</h2>
        </router-link>
        
        <div class="nav-menu" :class="{ active: isMenuOpen }">
          <router-link to="/" class="nav-link" @click="closeMenu">Home</router-link>
          <router-link to="/about" class="nav-link" @click="closeMenu">About Me</router-link>
          <router-link to="/projects" class="nav-link" @click="closeMenu">Projects</router-link>
          <router-link to="/blogs" class="nav-link" @click="closeMenu">Blogs</router-link>
          <router-link to="/contact" class="nav-link" @click="closeMenu">Contact</router-link>
        </div>
        
        <div class="nav-toggle" @click="toggleMenu">
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
      isMenuOpen: false
    }
  },
  methods: {
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen;
    },
    closeMenu() {
      this.isMenuOpen = false;
    }
  }
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  line-height: 1.6;
  color: #333;
}

#app {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

.navbar {
  background: white;
  box-shadow: 0 2px 10px rgba(0,0,0,0.1);
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 1000;
}

.nav-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 70px;
}

.nav-brand {
  text-decoration: none;
  color: #333;
}

.nav-brand h2 {
  color: #667eea;
  font-weight: 700;
}

.nav-menu {
  display: flex;
  gap: 2rem;
  list-style: none;
}

.nav-link {
  text-decoration: none;
  color: #333;
  font-weight: 500;
  transition: color 0.3s ease;
  position: relative;
}

.nav-link:hover {
  color: #667eea;
}

.nav-link.router-link-active {
  color: #667eea;
}

.nav-link.router-link-active::after {
  content: '';
  position: absolute;
  bottom: -5px;
  left: 0;
  width: 100%;
  height: 2px;
  background: #667eea;
}

.nav-toggle {
  display: none;
  flex-direction: column;
  cursor: pointer;
}

.bar {
  width: 25px;
  height: 3px;
  background: #333;
  margin: 3px 0;
  transition: 0.3s;
}

.main-content {
  flex: 1;
  margin-top: 70px;
}

@media (max-width: 768px) {
  .nav-menu {
    position: fixed;
    left: -100%;
    top: 70px;
    flex-direction: column;
    background: white;
    width: 100%;
    text-align: center;
    transition: 0.3s;
    box-shadow: 0 10px 27px rgba(0,0,0,0.05);
    padding: 2rem 0;
  }
  
  .nav-menu.active {
    left: 0;
  }
  
  .nav-toggle {
    display: flex;
  }
}
</style>