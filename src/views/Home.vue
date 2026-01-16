<template>
  <div class="home">
    <header class="hero">
      <div class="hero-content">
        <div class="profile-container">
          <img 
            src="https://res.cloudinary.com/djkw8ijom/image/upload/v1759600660/1000643852_wupbsz.jpg" 
            alt="Thisara Gunasekara - Digital Marketing Coordinator" 
            class="profile-image"
          />
        </div>
        <h1 class="hero-title">Thisara Gunasekara</h1>
        <p class="hero-subtitle">Digital Marketing Coordinator</p>
        <p class="hero-description">
          If your business image needs to improve in the digital space, you've come to the right place. 
          I specialize in creating modern, SEO-friendly websites and coordinating comprehensive social media strategies 
          that elevate your brand's online presence and drive real results.
        </p>
        <div class="hero-buttons">
          <router-link to="/contact" class="btn btn-primary">Get In Touch</router-link>
          <router-link to="/projects" class="btn btn-secondary">My Projects</router-link>
        </div>
      </div>
    </header>
    
    <section class="services">
      <div class="container">
        <h2 class="section-title">What I Do</h2>
        <p class="section-subtitle">Comprehensive Digital Marketing Solutions for Your Business</p>
        
        <div class="services-grid">
          <div class="service-card">
            <div class="service-icon">🌐</div>
            <h3>Modern SEO-Friendly Websites</h3>
            <p>I create business-related, modern websites that are optimized for search engines. Your website will not only look professional but also rank well on Google, helping potential customers find you easily.</p>
          </div>
          
          <div class="service-card">
            <div class="service-icon">📱</div>
            <h3>Social Media Coordination</h3>
            <p>I develop and execute comprehensive social media plans tailored to your business goals. From strategy to execution, I ensure your brand maintains a consistent and engaging presence across all platforms.</p>
          </div>
          
          <div class="service-card">
            <div class="service-icon">🎯</div>
            <h3>Multi-Platform Expertise</h3>
            <p>I have in-depth knowledge and experience with major social media platforms including Facebook, TikTok, Instagram, and LinkedIn. Each platform requires a unique approach, and I know how to maximize your reach on each one.</p>
          </div>
          
          <div class="service-card">
            <div class="service-icon">🎬</div>
            <h3>Content Creation</h3>
            <p>I create engaging reels, images, and videos that capture attention and drive engagement. Whether it's short-form video content for TikTok and Instagram Reels or professional images for LinkedIn, I produce content that resonates with your audience.</p>
          </div>
          
          <div class="service-card">
            <div class="service-icon">📊</div>
            <h3>Ad Campaign Management</h3>
            <p>I know how to run effective ad campaigns across different platforms. From setting up campaigns and targeting the right audience to optimizing ad performance and managing budgets, I ensure your advertising dollars deliver maximum ROI.</p>
          </div>
          
          <div class="service-card">
            <div class="service-icon">🚀</div>
            <h3>Digital Brand Enhancement</h3>
            <p>I help improve your business image in the digital space by creating cohesive branding, developing your online voice, and ensuring all your digital touchpoints work together to build trust and credibility.</p>
          </div>
        </div>
      </div>
    </section>
    
    <section class="platforms">
      <div class="container">
        <h2 class="section-title">Platform Expertise</h2>
        <div class="platforms-list">
          <div class="platform-item">
            <span class="platform-name">Facebook</span>
            <p>Page management, content strategy, community engagement, and targeted advertising</p>
          </div>
          <div class="platform-item">
            <span class="platform-name">TikTok</span>
            <p>Trending content creation, viral video strategies, and influencer collaboration</p>
          </div>
          <div class="platform-item">
            <span class="platform-name">Instagram</span>
            <p>Reels, Stories, feed optimization, hashtag strategy, and visual branding</p>
          </div>
          <div class="platform-item">
            <span class="platform-name">LinkedIn</span>
            <p>Professional content, B2B marketing, thought leadership, and network building</p>
          </div>
        </div>
      </div>
    </section>
    
    <section class="cta">
      <div class="container">
        <h2>Ready to Transform Your Digital Presence?</h2>
        <p>Let's work together to improve your business image in the digital space and reach your target audience effectively.</p>
        <router-link to="/contact" class="btn btn-cta">Contact Me Today</router-link>
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
  padding: 80px 0 100px;
  text-align: center;
}

.hero-content {
  max-width: 900px;
  margin: 0 auto;
  padding: 0 20px;
}

.profile-container {
  width: 180px;
  height: 180px;
  margin: 0 auto 35px;
  border-radius: 50%;
  overflow: hidden;
  border: 5px solid rgba(255, 255, 255, 0.3);
  box-shadow: 0 15px 40px rgba(0, 0, 0, 0.3);
  transition: transform 0.3s ease;
}

.profile-container:hover {
  transform: scale(1.05);
}

.profile-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}

.hero-title {
  font-size: 3rem;
  margin-bottom: 1rem;
  font-weight: 700;
}

.hero-subtitle {
  font-size: 1.8rem;
  margin-bottom: 1.5rem;
  opacity: 0.95;
  font-weight: 600;
}

.hero-description {
  font-size: 1.2rem;
  margin-bottom: 2.5rem;
  opacity: 0.95;
  max-width: 700px;
  margin-left: auto;
  margin-right: auto;
  line-height: 1.8;
}

.hero-buttons {
  display: flex;
  gap: 1rem;
  justify-content: center;
  flex-wrap: wrap;
}

.btn {
  padding: 14px 35px;
  text-decoration: none;
  border-radius: 30px;
  font-weight: 600;
  font-size: 1rem;
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
  transform: translateY(-3px);
  box-shadow: 0 12px 30px rgba(0,0,0,0.25);
}

.btn-secondary {
  background: transparent;
  color: white;
  border: 2px solid white;
}

.btn-secondary:hover {
  background: white;
  color: #667eea;
  transform: translateY(-3px);
}

.services {
  padding: 100px 0;
  background: #ffffff;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

.section-title {
  font-size: 2.8rem;
  margin-bottom: 1rem;
  color: #333;
  text-align: center;
  font-weight: 700;
}

.section-subtitle {
  font-size: 1.3rem;
  color: #666;
  text-align: center;
  margin-bottom: 4rem;
  max-width: 700px;
  margin-left: auto;
  margin-right: auto;
}

.services-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 2.5rem;
  margin-top: 3rem;
}

.service-card {
  background: #f8f9fa;
  padding: 2.5rem;
  border-radius: 15px;
  text-align: center;
  transition: all 0.3s ease;
  border: 2px solid transparent;
}

.service-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 15px 40px rgba(102, 126, 234, 0.15);
  border-color: #667eea;
  background: white;
}

.service-icon {
  font-size: 3.5rem;
  margin-bottom: 1.5rem;
}

.service-card h3 {
  font-size: 1.5rem;
  margin-bottom: 1rem;
  color: #333;
  font-weight: 700;
}

.service-card p {
  font-size: 1rem;
  line-height: 1.7;
  color: #666;
}

.platforms {
  padding: 100px 0;
  background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
}

.platforms-list {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  margin-top: 3rem;
}

.platform-item {
  background: white;
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 5px 15px rgba(0,0,0,0.08);
  transition: all 0.3s ease;
}

.platform-item:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 25px rgba(0,0,0,0.12);
}

.platform-name {
  display: block;
  font-size: 1.5rem;
  font-weight: 700;
  color: #667eea;
  margin-bottom: 0.8rem;
}

.platform-item p {
  font-size: 1rem;
  line-height: 1.6;
  color: #666;
}

.cta {
  padding: 100px 0;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  text-align: center;
}

.cta h2 {
  font-size: 2.5rem;
  margin-bottom: 1.5rem;
  font-weight: 700;
}

.cta p {
  font-size: 1.3rem;
  margin-bottom: 2.5rem;
  opacity: 0.95;
  max-width: 700px;
  margin-left: auto;
  margin-right: auto;
  line-height: 1.8;
}

.btn-cta {
  background: white;
  color: #667eea;
  padding: 16px 40px;
  font-size: 1.1rem;
  border-radius: 30px;
  font-weight: 700;
  text-decoration: none;
  display: inline-block;
  transition: all 0.3s ease;
}

.btn-cta:hover {
  transform: translateY(-3px);
  box-shadow: 0 15px 35px rgba(0,0,0,0.3);
}

@media (max-width: 768px) {
  .hero-title {
    font-size: 2.2rem;
  }
  
  .hero-subtitle {
    font-size: 1.4rem;
  }
  
  .hero-description {
    font-size: 1rem;
  }
  
  .hero-buttons {
    flex-direction: column;
    align-items: center;
  }
  
  .btn {
    width: 100%;
    max-width: 280px;
  }
  
  .profile-container {
    width: 150px;
    height: 150px;
  }
  
  .section-title {
    font-size: 2.2rem;
  }
  
  .section-subtitle {
    font-size: 1.1rem;
  }
  
  .services-grid {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
  
  .platforms-list {
    grid-template-columns: 1fr;
  }
  
  .cta h2 {
    font-size: 2rem;
  }
  
  .cta p {
    font-size: 1.1rem;
  }
}
</style>