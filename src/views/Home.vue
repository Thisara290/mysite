<template>
  <div class="home">
    <header class="hero">
      <div class="hero-content">
        <div class="profile-container">
          <img 
            src="https://res.cloudinary.com/djkw8ijom/image/upload/v1759600660/1000643852_wupbsz.jpg" 
            alt="Thisara Gunasekara" 
            class="profile-image"
          />
        </div>
        <h1 class="hero-title">Hello, I'm Thisara Gunasekara</h1>
        <p class="hero-subtitle">Developer | Creator | Problem Solver</p>
        <p class="hero-description">
          I'm passionate about creating amazing web experiences and solving complex problems through code. 
          Welcome to my digital space where I share my journey, projects, and thoughts.
        </p>
        <div class="hero-buttons">
          <router-link to="/about" class="btn btn-primary">About Me</router-link>
          <router-link to="/projects" class="btn btn-secondary">View Projects</router-link>
          <a href="https://res.cloudinary.com/djkw8ijom/image/upload/v1759600731/Thisara-SE_tq8xtr.pdf" 
             class="btn btn-resume" 
             target="_blank" 
             download="Thisara-Gunasekara-Resume.pdf">
            Download Resume
          </a>
        </div>
      </div>
    </header>
    
    <section class="intro">
      <div class="container">
        <h2>Welcome to My Personal Website</h2>
        <p class="intro-text">
          Explore my work, learn about my skills, and get in touch if you'd like to collaborate on something amazing.
        </p>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'Home'
}
</script>

<style scoped>
.home {
  min-height: 100vh;
}

.hero {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  padding: 60px 0 100px;
  text-align: center;
}

.hero-content {
  max-width: 800px;
  margin: 0 auto;
  padding: 0 20px;
}

.profile-container {
  width: 150px;
  height: 150px;
  margin: 0 auto 30px;
  border-radius: 50%;
  overflow: hidden;
  border: 4px solid rgba(255, 255, 255, 0.3);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
}

.profile-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}

.hero-title {
  font-size: 2.8rem;
  margin-bottom: 1rem;
  font-weight: 700;
}

.hero-subtitle {
  font-size: 1.5rem;
  margin-bottom: 1.5rem;
  opacity: 0.9;
}

.hero-description {
  font-size: 1.2rem;
  margin-bottom: 2.5rem;
  opacity: 0.9;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
  line-height: 1.7;
}

.hero-buttons {
  display: flex;
  gap: 1rem;
  justify-content: center;
  flex-wrap: wrap;
}

.btn {
  padding: 12px 30px;
  text-decoration: none;
  border-radius: 25px;
  font-weight: 600;
  transition: all 0.3s ease;
  display: inline-flex;
  align-items: center;
  justify-content: center;
}

.btn-primary {
  background: white;
  color: #667eea;
}

.btn-primary:hover {
  transform: translateY(-2px);
  box-shadow: 0 10px 25px rgba(0,0,0,0.2);
}

.btn-secondary {
  background: transparent;
  color: white;
  border: 2px solid white;
}

.btn-secondary:hover {
  background: white;
  color: #667eea;
}

.btn-resume {
  background: #4CAF50;
  color: white;
  border: 2px solid #4CAF50;
}

.btn-resume:hover {
  background: transparent;
  color: white;
  transform: translateY(-2px);
  box-shadow: 0 10px 25px rgba(0,0,0,0.2);
}

.intro {
  padding: 80px 0;
  background: #f8f9fa;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
  text-align: center;
}

.intro h2 {
  font-size: 2.5rem;
  margin-bottom: 1.5rem;
  color: #333;
}

.intro-text {
  font-size: 1.2rem;
  line-height: 1.8;
  color: #666;
  max-width: 600px;
  margin: 0 auto;
}

@media (max-width: 768px) {
  .hero-title {
    font-size: 2.2rem;
  }
  
  .hero-subtitle {
    font-size: 1.2rem;
  }
  
  .hero-description {
    font-size: 1rem;
  }
  
  .hero-buttons {
    flex-direction: column;
    align-items: center;
  }
  
  .profile-container {
    width: 120px;
    height: 120px;
  }
}
</style>