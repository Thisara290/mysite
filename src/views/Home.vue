<template>
  <div class="home">
    <!-- SECTION 1: SLOGAN HERO -->
    <section class="banner-slogan">
      <div class="banner-content">
        <h1 class="slogan-title">
          <span class="slogan-top">The story will start again,</span>
          <span class="slogan-bottom">But with a different <span class="highlight">character.</span></span>
        </h1>
      </div>
    </section>

    <!-- SECTION 2: POSH PROFILE SECTION -->
    <section class="posh-profile">
      <div class="container posh-container">
        <div class="posh-image-box">
          <div class="decorative-blob"></div>
          <img 
            src="https://res.cloudinary.com/djkw8ijom/image/upload/v1759600660/1000643852_wupbsz.jpg" 
            alt="Thisara Gunasekara - Digital Marketing Coordinator" 
            class="posh-profile-img"
          />
          <div class="glass-badge">
            <span class="badge-icon">🚀</span>
            <span class="badge-text">Result Driven</span>
          </div>
        </div>
        <div class="posh-text-box">
          <div class="greeting-tag">Hello, I am</div>
          <h2 class="posh-name">Thisara Gunasekara</h2>
          <h3 class="posh-role">Digital Marketing Coordinator & Manager</h3>
          <p class="posh-desc">
            If your company's image needs to improve in the digital space, you've come to the right place. 
            I specialize in creating modern, SEO-friendly websites and coordinating comprehensive digital strategies 
            that elevate your brand's online presence and drive real, measurable results. Let's rewrite your digital story together.
          </p>
          <div class="posh-buttons">
            <router-link to="/contact" class="posh-btn primary">Get In Touch</router-link>
            <router-link to="/projects" class="posh-btn outline">View My Work</router-link>
          </div>
        </div>
      </div>
    </section>
    
    <section class="services">
      <div class="container">
        <h2 class="section-title">What I Do</h2>
        <p class="section-subtitle">Comprehensive Digital Marketing Solutions for Your Business</p>
        
        <div class="services-grid">
          <div class="service-card modern-card">
            <div class="service-icon-wrapper">
              <i class="service-icon">🌐</i>
            </div>
            <div class="service-content">
              <h3>Modern SEO-Friendly Websites</h3>
              <p>I create business-related, modern websites that are optimized for search engines. Your website will not only look professional but also rank well on Google, driving organic traffic.</p>
            </div>
            <div class="card-glow"></div>
          </div>
          
          <div class="service-card modern-card">
            <div class="service-icon-wrapper">
              <i class="service-icon">📱</i>
            </div>
            <div class="service-content">
              <h3>Social Media Coordination</h3>
              <p>I develop and execute comprehensive social media plans tailored to your business goals. From strategy to execution, ensuring your brand maintains a consistent presence.</p>
            </div>
            <div class="card-glow"></div>
          </div>
          
          <div class="service-card modern-card">
            <div class="service-icon-wrapper">
              <i class="service-icon">🎬</i>
            </div>
            <div class="service-content">
              <h3>Content Creation</h3>
              <p>I create engaging reels, images, and videos that capture attention. From short-form TikToks to professional LinkedIn posts, I produce content that resonates.</p>
            </div>
            <div class="card-glow"></div>
          </div>
          
          <div class="service-card modern-card">
            <div class="service-icon-wrapper">
              <i class="service-icon">📊</i>
            </div>
            <div class="service-content">
              <h3>Ad Campaign Management</h3>
              <p>I know how to run effective ad campaigns. From targeting the right audience to optimizing performance, I ensure your advertising dollars deliver maximum ROI.</p>
            </div>
            <div class="card-glow"></div>
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

/* Banner Slogan Section */
.banner-slogan {
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: white; 
  position: relative;
  text-align: center;
  overflow: hidden;
}

.banner-slogan::before {
  content: '';
  position: absolute;
  top: -50%;
  left: -50%;
  width: 200%;
  height: 200%;
  background: radial-gradient(circle, rgba(102, 126, 234, 0.05) 0%, rgba(255,255,255,0) 70%);
  animation: rotate 20s linear infinite;
  z-index: 0;
}

@keyframes rotate {
  100% { transform: rotate(360deg); }
}

.banner-content {
  position: relative;
  z-index: 1;
  padding: 0 20px;
}

.slogan-title {
  display: flex;
  flex-direction: column;
  gap: 15px;
}

.slogan-top {
  font-size: 3rem;
  font-weight: 800;
  color: #1a1a1a;
  letter-spacing: -1px;
  animation: slideUp 1s cubic-bezier(0.165, 0.84, 0.44, 1) forwards;
  opacity: 0;
  transform: translateY(30px);
}

.slogan-bottom {
  font-size: 4rem;
  font-weight: 900;
  color: #1a1a1a;
  letter-spacing: -2px;
  line-height: 1.1;
  animation: slideUp 1s cubic-bezier(0.165, 0.84, 0.44, 1) 0.3s forwards;
  opacity: 0;
  transform: translateY(30px);
}

.highlight {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  display: inline-block;
}

@keyframes slideUp {
  to {
    opacity: 1;
    transform: translateY(0);
  }
}


/* Posh Profile Section */
.posh-profile {
  padding: 120px 0;
  background: #fafafa;
}

.posh-container {
  display: flex;
  align-items: center;
  gap: 60px;
}

.posh-image-box {
  flex: 1;
  position: relative;
  display: flex;
  justify-content: center;
}

.decorative-blob {
  position: absolute;
  width: 450px;
  height: 450px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  border-radius: 40% 60% 70% 30% / 40% 50% 60% 50%;
  animation: morph 8s ease-in-out infinite alternate;
  z-index: 0;
  opacity: 0.15;
}

@keyframes morph {
  0% { border-radius: 40% 60% 70% 30% / 40% 50% 60% 50%; }
  100% { border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%; }
}

.posh-profile-img {
  width: 380px;
  height: 480px;
  object-fit: cover;
  border-radius: 20px;
  position: relative;
  z-index: 1;
  box-shadow: 0 20px 40px rgba(0,0,0,0.1);
  transition: transform 0.4s ease;
}

.posh-image-box:hover .posh-profile-img {
  transform: translateY(-10px);
}

.glass-badge {
  position: absolute;
  bottom: 50px;
  right: -10px;
  background: rgba(255, 255, 255, 0.9);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  padding: 15px 25px;
  border-radius: 30px;
  display: flex;
  align-items: center;
  gap: 12px;
  box-shadow: 0 15px 35px rgba(0,0,0,0.1);
  border: 1px solid rgba(255,255,255,0.7);
  z-index: 2;
  animation: float 4s ease-in-out infinite;
}

@keyframes float {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-12px); }
}

.badge-icon {
  font-size: 1.5rem;
}

.badge-text {
  font-weight: 700;
  color: #1a1a1a;
  letter-spacing: -0.5px;
}

.posh-text-box {
  flex: 1.2;
}

.greeting-tag {
  display: inline-block;
  padding: 8px 16px;
  background: rgba(102, 126, 234, 0.1);
  color: #667eea;
  border-radius: 30px;
  font-weight: 700;
  font-size: 0.9rem;
  margin-bottom: 25px;
  letter-spacing: 0.5px;
}

.posh-name {
  font-size: 3.5rem;
  font-weight: 800;
  color: #1a1a1a;
  line-height: 1.1;
  margin-bottom: 15px;
  letter-spacing: -1px;
}

.posh-role {
  font-size: 1.6rem;
  font-weight: 600;
  color: #764ba2;
  margin-bottom: 30px;
}

.posh-desc {
  font-size: 1.15rem;
  line-height: 1.8;
  color: #666;
  margin-bottom: 40px;
  max-width: 90%;
}

.posh-buttons {
  display: flex;
  gap: 20px;
}

.posh-btn {
  padding: 16px 35px;
  border-radius: 30px;
  font-weight: 600;
  font-size: 1.05rem;
  text-decoration: none;
  transition: all 0.3s cubic-bezier(0.165, 0.84, 0.44, 1);
  display: inline-flex;
  align-items: center;
  justify-content: center;
}

.posh-btn.primary {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  box-shadow: 0 10px 25px rgba(102, 126, 234, 0.3);
}

.posh-btn.primary:hover {
  transform: translateY(-4px);
  box-shadow: 0 15px 35px rgba(102, 126, 234, 0.4);
}

.posh-btn.outline {
  background: transparent;
  color: #1a1a1a;
  border: 2px solid #e2e8f0;
}

.posh-btn.outline:hover {
  border-color: #667eea;
  color: #667eea;
  transform: translateY(-4px);
  box-shadow: 0 10px 25px rgba(102, 126, 234, 0.1);
}

.services {
  padding: 120px 0;
  background: #ffffff;
  position: relative;
}

.section-title {
  font-size: 3rem;
  margin-bottom: 1rem;
  color: #1a1a1a;
  text-align: center;
  font-weight: 800;
  letter-spacing: -1px;
}

.section-subtitle {
  font-size: 1.2rem;
  color: #666;
  text-align: center;
  margin-bottom: 4rem;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
}

.services-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
  margin-top: 2rem;
}

.modern-card {
  background: #ffffff;
  padding: 2.5rem;
  border-radius: 20px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.04);
  border: 1px solid rgba(0, 0, 0, 0.05);
  position: relative;
  overflow: hidden;
  transition: all 0.4s cubic-bezier(0.165, 0.84, 0.44, 1);
  display: flex;
  flex-direction: column;
  z-index: 1;
}

.modern-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 20px 40px rgba(102, 126, 234, 0.12);
  border-color: rgba(102, 126, 234, 0.3);
}

.card-glow {
  position: absolute;
  top: -50px;
  right: -50px;
  width: 150px;
  height: 150px;
  background: radial-gradient(circle, rgba(102, 126, 234, 0.15) 0%, rgba(255,255,255,0) 70%);
  border-radius: 50%;
  z-index: -1;
  transition: transform 0.6s ease;
}

.modern-card:hover .card-glow {
  transform: scale(2);
}

.service-icon-wrapper {
  width: 60px;
  height: 60px;
  background: linear-gradient(135deg, rgba(102, 126, 234, 0.1) 0%, rgba(118, 75, 162, 0.1) 100%);
  border-radius: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1.5rem;
  transition: all 0.3s ease;
}

.modern-card:hover .service-icon-wrapper {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
}

.service-icon {
  font-size: 1.8rem;
  font-style: normal;
  transition: transform 0.3s ease;
}

.modern-card:hover .service-icon {
  transform: scale(1.1);
  filter: brightness(0) invert(1);
}

.service-content h3 {
  font-size: 1.3rem;
  margin-bottom: 1rem;
  color: #1a1a1a;
  font-weight: 700;
  letter-spacing: -0.5px;
}

.service-content p {
  font-size: 1rem;
  line-height: 1.7;
  color: #666;
  margin: 0;
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

@media (max-width: 992px) {
  .posh-container {
    flex-direction: column;
    text-align: center;
    gap: 50px;
  }
  
  .posh-text-box {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  
  .slogan-top { font-size: 2.2rem; }
  .slogan-bottom { font-size: 2.8rem; }
  .posh-name { font-size: 2.8rem; }
  .posh-desc { max-width: 100%; }
  .posh-buttons { justify-content: center; }
  .decorative-blob { width: 350px; height: 350px; }
  .posh-profile-img { width: 320px; height: 420px; }
}

@media (max-width: 768px) {
  .slogan-top { font-size: 1.8rem; }
  .slogan-bottom { font-size: 2.2rem; }
  
  .posh-name { font-size: 2.2rem; }
  .posh-role { font-size: 1.2rem; }
  .posh-desc { font-size: 1rem; }
  
  .posh-profile-img { width: 280px; height: 380px; }
  .decorative-blob { width: 300px; height: 300px; }
  
  .posh-buttons { flex-direction: column; width: 100%; }
  .posh-btn { width: 100%; }
  
  .glass-badge { right: -10px; padding: 10px 15px; }
  
  .section-title {
    font-size: 2.4rem;
  }
  
  .services-grid {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
  
  .cta h2 {
    font-size: 2rem;
  }
  
  .cta p {
    font-size: 1.1rem;
  }
}
</style>