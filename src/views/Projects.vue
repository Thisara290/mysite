<template>
  <div class="projects">
    <div class="container">
      <header class="page-header">
        <h1>My Projects</h1>
        <p class="subtitle">Check back soon for my latest work</p>
      </header>

      <div class="coming-soon">
        <div class="coming-soon-icon">🚧</div>
        <h2>Projects Coming Soon</h2>
        <p>I'm currently working on some exciting projects that I'll be showcasing here soon. Stay tuned!</p>
        <div class="placeholder-projects">
          <div class="placeholder-project" v-for="i in 3" :key="i">
            <div class="placeholder-image"></div>
            <div class="placeholder-content">
              <div class="placeholder-title"></div>
              <div class="placeholder-description"></div>
              <div class="placeholder-tags">
                <div class="placeholder-tag"></div>
                <div class="placeholder-tag"></div>
                <div class="placeholder-tag"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Projects'
}
</script>

<style scoped>
.projects {
  min-height: 100vh;
  padding: 80px 0;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

.page-header {
  text-align: center;
  margin-bottom: 60px;
}

.page-header h1 {
  font-size: 3rem;
  color: #333;
  margin-bottom: 1rem;
}

.subtitle {
  font-size: 1.3rem;
  color: #666;
}

.coming-soon {
  text-align: center;
  padding: 60px 20px;
  background: #f8f9fa;
  border-radius: 20px;
  max-width: 800px;
  margin: 0 auto;
}

.coming-soon-icon {
  font-size: 4rem;
  margin-bottom: 20px;
}

.coming-soon h2 {
  font-size: 2rem;
  color: #333;
  margin-bottom: 20px;
}

.coming-soon p {
  font-size: 1.2rem;
  color: #666;
  margin-bottom: 40px;
  line-height: 1.6;
}

.placeholder-projects {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 30px;
  margin-top: 40px;
}

.placeholder-project {
  background: white;
  border-radius: 15px;
  overflow: hidden;
  box-shadow: 0 5px 15px rgba(0,0,0,0.1);
  text-align: left;
}

.placeholder-image {
  height: 150px;
  background: linear-gradient(90deg, #e0e0e0 25%, #f0f0f0 50%, #e0e0e0 75%);
  background-size: 200% 100%;
  animation: loading 1.5s infinite;
}

.placeholder-content {
  padding: 20px;
}

.placeholder-title {
  height: 24px;
  background: #e0e0e0;
  margin-bottom: 15px;
  border-radius: 4px;
  width: 80%;
}

.placeholder-description {
  height: 16px;
  background: #e0e0e0;
  margin-bottom: 10px;
  border-radius: 4px;
  width: 100%;
}

.placeholder-description:nth-child(2) {
  width: 90%;
}

.placeholder-tags {
  display: flex;
  gap: 10px;
  margin-top: 20px;
}

.placeholder-tag {
  height: 20px;
  background: #e0e0e0;
  border-radius: 10px;
  width: 60px;
}

@keyframes loading {
  0% {
    background-position: 200% 0;
  }
  100% {
    background-position: -200% 0;
  }
}

@media (max-width: 768px) {
  .page-header h1 {
    font-size: 2.5rem;
  }
  
  .coming-soon h2 {
    font-size: 1.8rem;
  }
  
  .placeholder-projects {
    grid-template-columns: 1fr;
  }
}
</style>