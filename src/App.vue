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

        <div class="nav-actions">
          <ThemeToggle :isDark="isDark" @toggle="toggleTheme" />
          
          <div class="nav-toggle" :class="{ active: isMenuOpen }" @click="toggleMenu">
            <span class="bar"></span>
            <span class="bar"></span>
            <span class="bar"></span>
          </div>
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
import ThemeToggle from './components/ThemeToggle.vue';

export default {
  name: 'App',
  components: {
    Footer,
    ThemeToggle
  },
  data() {
    return {
      isMenuOpen: false,
      isScrolled: false,
      isDark: false
    }
  },
  created() {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      this.isDark = savedTheme === 'dark';
    } else {
      this.isDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    }
    this.applyTheme();
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
    },
    toggleTheme() {
      this.isDark = !this.isDark;
      localStorage.setItem('theme', this.isDark ? 'dark' : 'light');
      this.applyTheme();
    },
    applyTheme() {
      document.documentElement.setAttribute('data-theme', this.isDark ? 'dark' : 'light');
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
  background: var(--nav-bg);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border: 1px solid var(--nav-border);
  box-shadow: 0 10px 40px var(--card-shadow);
  border-radius: 100px;
  z-index: 1000;
  transition: all 0.4s cubic-bezier(0.165, 0.84, 0.44, 1);
}

.navbar.scrolled {
  top: 10px;
  width: 95%;
  background: var(--nav-bg);
  box-shadow: 0 15px 40px var(--card-shadow);
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
  color: var(--text-primary);
  font-weight: 800;
  font-size: 1.4rem;
  letter-spacing: -0.5px;
}

.nav-brand .dot {
  color: var(--accent-primary);
}

.nav-menu {
  display: flex;
  gap: 2.5rem;
  list-style: none;
}

.nav-link {
  text-decoration: none;
  color: var(--text-secondary);
  font-weight: 600;
  font-size: 0.95rem;
  transition: color 0.3s ease;
  position: relative;
  padding: 5px 0;
}

.nav-link:hover {
  color: var(--accent-primary);
}

.nav-link.router-link-active {
  color: var(--accent-primary);
}

.nav-link::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 0;
  height: 2px;
  background: linear-gradient(90deg, var(--accent-primary), var(--accent-secondary));
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
  background: var(--text-primary);
  transition: all 0.3s ease;
  transform-origin: left center;
}

.nav-actions {
  display: flex;
  align-items: center;
  gap: 20px;
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
    background: var(--bg-primary);
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