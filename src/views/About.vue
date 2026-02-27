<template>
  <div class="about">
    <!-- SECTION 1: SLOGAN HERO -->
    <section class="banner-slogan">
      <div class="banner-content">
        <h1 class="slogan-title">
          <span class="slogan-top">Skills can be Learned.</span>
          <span class="slogan-bottom">Attitude is <span class="highlight">Who You are.</span></span>
        </h1>
      </div>
    </section>

    <!-- SECTION 2: ABOUT PROFILE -->
    <section class="posh-profile">
      <div class="container posh-container">
        <div class="posh-image-box">
          <div class="decorative-blob"></div>
          <img 
            src="https://res.cloudinary.com/djkw8ijom/image/upload/v1757067381/1690439739605_hznc1k.jpg" 
            alt="Thisara Gunasekara" 
            class="posh-profile-img"
          />
          <div class="glass-badge">
            <span class="badge-icon">💡</span>
            <span class="badge-text">Innovative Mind</span>
          </div>
        </div>
        <div class="posh-text-box">
          <div class="greeting-tag">About Me</div>
          <h2 class="posh-name">Hello! I'm Thisara Gunasekara</h2>
          <p class="posh-desc">
            I am a versatile tech professional bridging the gap between development, product management, and digital strategy. 
            My journey in the industry has been an exciting adventure of continuous learning, allowing me to build and 
            manage solutions that drive real business impact and deliver beautiful user experiences.
          </p>
          <p class="posh-desc">
            While my foundation lies in full-stack development, my expertise extends deeply into Project Management and 
            SaaS Product Management. I thrive on overseeing projects from conception to launch, ensuring that 
            cross-functional teams deliver innovative, scalable, and user-centric products that solve complex problems.
          </p>
          <p class="posh-desc">
            Furthermore, my background in Digital Marketing empowers me to not only build great applications but also 
            position them effectively in the market. I believe in a holistic approach—combining writing clean code, 
            leading agile projects, and executing data-driven strategies to achieve meaningful and lasting success.
          </p>
          <div class="posh-buttons">
            <a href="https://res.cloudinary.com/djkw8ijom/image/upload/v1772044318/Thisara_Gunasekara_-_Digital_Project_Manager_w057so.pdf" 
               class="posh-btn primary" 
               target="_blank" 
               download="Thisara-Gunasekara-Resume.pdf">
              Download Resume
            </a>
          </div>
        </div>
      </div>
    </section>

    <!-- SECTION 3: SKILLS -->
    <section class="services">
      <div class="container">
        <h2 class="section-title">Skills & Technologies</h2>
        <p class="section-subtitle">What I bring to the table</p>
        
        <div class="services-grid">
          <div class="service-card modern-card">
            <div class="service-icon-wrapper">
              <i class="service-icon">💻</i>
            </div>
            <div class="service-content">
              <h3>Frontend Development</h3>
              <ul>
                <li>Vue.js & React</li>
                <li>JavaScript/TypeScript</li>
                <li>HTML5 & CSS3</li>
                <li>Responsive Design</li>
                <li>Modern CSS (Flexbox, Grid)</li>
              </ul>
            </div>
            <div class="card-glow"></div>
          </div>
          
          <div class="service-card modern-card">
            <div class="service-icon-wrapper">
              <i class="service-icon">⚙️</i>
            </div>
            <div class="service-content">
              <h3>Backend Development</h3>
              <ul>
                <li>Node.js & Express</li>
                <li>Python & Django</li>
                <li>RESTful APIs</li>
                <li>Database Design</li>
                <li>Authentication & Security</li>
              </ul>
            </div>
            <div class="card-glow"></div>
          </div>
          
          <div class="service-card modern-card">
            <div class="service-icon-wrapper">
              <i class="service-icon">🛠️</i>
            </div>
            <div class="service-content">
              <h3>Tools & Technologies</h3>
              <ul>
                <li>Git & GitHub</li>
                <li>Docker & Deployment</li>
                <li>Cloud Services (AWS)</li>
                <li>Agile Development</li>
                <li>Testing & Debugging</li>
              </ul>
            </div>
            <div class="card-glow"></div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'About'
}
</script>

<style scoped>
.about {
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
  max-width: 1200px;
  margin: 0 auto;
}

.slogan-title {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.slogan-top {
  font-size: 2.5rem;
  font-weight: 800;
  color: #1a1a1a;
  letter-spacing: -1px;
  animation: slideUp 1s cubic-bezier(0.165, 0.84, 0.44, 1) forwards;
  opacity: 0;
  transform: translateY(30px);
}

.slogan-bottom {
  font-size: 3rem;
  font-weight: 900;
  color: #1a1a1a;
  letter-spacing: -2px;
  line-height: 1.2;
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

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

.posh-container {
  display: flex;
  align-items: center;
  gap: 80px;
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
  font-size: 3rem;
  font-weight: 800;
  color: #1a1a1a;
  line-height: 1.1;
  margin-bottom: 25px;
  letter-spacing: -1px;
}

.posh-desc {
  font-size: 1.1rem;
  line-height: 1.8;
  color: #666;
  margin-bottom: 20px;
  max-width: 95%;
}

.posh-buttons {
  display: flex;
  gap: 20px;
  margin-top: 30px;
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

/* Services / Skills Section */
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
}

.services-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2.5rem;
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
  font-size: 1.4rem;
  margin-bottom: 1.2rem;
  color: #1a1a1a;
  font-weight: 700;
  letter-spacing: -0.5px;
}

.service-content ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.service-content li {
  font-size: 1rem;
  color: #666;
  margin-bottom: 0.8rem;
  display: flex;
  align-items: center;
}

.service-content li::before {
  content: '→';
  color: #667eea;
  margin-right: 10px;
  font-weight: bold;
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
  
  .slogan-top { font-size: 2rem; }
  .slogan-bottom { font-size: 2.2rem; }
  .posh-name { font-size: 2.5rem; }
  .posh-desc { max-width: 100%; text-align: center; }
  .posh-buttons { justify-content: center; }
  .decorative-blob { width: 350px; height: 350px; }
  .posh-profile-img { width: 320px; height: 420px; }
}

@media (max-width: 768px) {
  .slogan-top { font-size: 1.5rem; }
  .slogan-bottom { font-size: 1.8rem; }
  
  .posh-name { font-size: 2.2rem; }
  .posh-desc { font-size: 1rem; line-height: 1.6; }
  
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
}
</style>