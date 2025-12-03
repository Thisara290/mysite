<template>
  <div class="blogs">
    <div class="container">
      <header class="page-header">
        <h1>My Blogs</h1>
        <p class="subtitle">Thoughts and insights coming soon</p>
      </header>

      <div class="coming-soon">
        <div class="coming-soon-icon">✍️</div>
        <h2>Blog Posts Coming Soon</h2>
        <p>I'm working on some interesting articles and tutorials that I'll be publishing here soon. Stay tuned!</p>
        <div class="placeholder-blogs">
          <div class="placeholder-blog" v-for="i in 3" :key="i">
            <div class="placeholder-meta">
              <div class="placeholder-date"></div>
              <div class="placeholder-category"></div>
            </div>
            <div class="placeholder-title"></div>
            <div class="placeholder-excerpt"></div>
            <div class="placeholder-excerpt" style="width: 90%"></div>
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
</template>

<script>
export default {
  name: 'Blogs'
}
</script>

<style scoped>
.blogs {
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

.placeholder-blogs {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 30px;
  margin-top: 40px;
}

.placeholder-blog {
  background: white;
  border-radius: 15px;
  padding: 25px;
  box-shadow: 0 5px 15px rgba(0,0,0,0.1);
  text-align: left;
}

.placeholder-meta {
  display: flex;
  justify-content: space-between;
  margin-bottom: 15px;
}

.placeholder-date {
  height: 16px;
  background: #e0e0e0;
  border-radius: 4px;
  width: 100px;
}

.placeholder-category {
  height: 16px;
  background: #e0e0e0;
  border-radius: 4px;
  width: 80px;
}

.placeholder-title {
  height: 24px;
  background: #e0e0e0;
  margin-bottom: 15px;
  border-radius: 4px;
  width: 80%;
}

.placeholder-excerpt {
  height: 16px;
  background: #e0e0e0;
  margin-bottom: 10px;
  border-radius: 4px;
  width: 100%;
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

@media (max-width: 768px) {
  .page-header h1 {
    font-size: 2.5rem;
  }
  
  .coming-soon h2 {
    font-size: 1.8rem;
  }
  
  .placeholder-blogs {
    grid-template-columns: 1fr;
  }
}
</style>