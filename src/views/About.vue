<template>
  <div class="about">
    <div class="container">
      <header class="page-header">
        <h1>About Me</h1>
        <p class="subtitle">Get to know me better</p>
      </header>

      <div class="about-content">
        <div class="about-grid">
          <div class="about-text">
            <h2>Hello! I'm Thisara Gunasekara</h2>
            <p>
              I'm a passionate developer with a love for creating innovative solutions and beautiful user experiences. 
              My journey in technology has been an exciting adventure of continuous learning and growth, focusing on 
              building applications that make a real difference.
            </p>
            <p>
              I specialize in full-stack development and enjoy working on projects that challenge me to think 
              creatively and solve complex problems. I'm particularly interested in modern web technologies, 
              user experience design, and creating scalable solutions.
            </p>
            <p>
              I believe in the power of technology to make a positive impact on people's lives, and I'm always 
              looking for opportunities to contribute to meaningful projects and collaborate with like-minded individuals.
            </p>
          </div>
          
          <div class="about-image">
            <div class="profile-image">
              <img 
                src="https://res.cloudinary.com/djkw8ijom/image/upload/v1757067381/1690439739605_hznc1k.jpg" 
                alt="Thisara Gunasekara" 
                class="profile-photo"
              />
            </div>
          </div>
        </div>

        <div class="skills-section">
          <h3>Skills & Technologies</h3>
          <div class="skills-grid">
            <div class="skill-item">
              <h4>Frontend Development</h4>
              <ul>
                <li>Vue.js & React</li>
                <li>JavaScript/TypeScript</li>
                <li>HTML5 & CSS3</li>
                <li>Responsive Design</li>
                <li>Modern CSS (Flexbox, Grid)</li>
              </ul>
            </div>
            <div class="skill-item">
              <h4>Backend Development</h4>
              <ul>
                <li>Node.js & Express</li>
                <li>Python & Django</li>
                <li>RESTful APIs</li>
                <li>Database Design</li>
                <li>Authentication & Security</li>
              </ul>
            </div>
            <div class="skill-item">
              <h4>Tools & Technologies</h4>
              <ul>
                <li>Git & GitHub</li>
                <li>Docker & Deployment</li>
                <li>Cloud Services (AWS)</li>
                <li>Agile Development</li>
                <li>Testing & Debugging</li>
              </ul>
            </div>
          </div>
        </div>

        <div class="resume-section">
          <a href="https://res.cloudinary.com/djkw8ijom/image/upload/v1759600731/Thisara-SE_tq8xtr.pdf" 
             class="btn-resume" 
             target="_blank" 
             download="Thisara-Gunasekara-Resume.pdf">
            Download Resume
          </a>
        </div>
      </div>
    </div>
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

.about-grid {
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 60px;
  align-items: center;
  margin-bottom: 80px;
}

.about-text h2 {
  font-size: 2rem;
  color: #333;
  margin-bottom: 1.5rem;
}

.about-text p {
  font-size: 1.1rem;
  line-height: 1.8;
  color: #666;
  margin-bottom: 1.5rem;
}

.profile-image {
  width: 300px;
  height: 300px;
  margin: 0 auto;
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
}

.profile-image:hover {
  transform: translateY(-5px);
}

.profile-photo {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}

.skills-section {
  background: #f8f9fa;
  padding: 60px 40px;
  border-radius: 20px;
}

.skills-section h3 {
  font-size: 2.2rem;
  text-align: center;
  color: #333;
  margin-bottom: 40px;
}

.skills-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 40px;
}

.skill-item {
  text-align: center;
}

.skill-item h4 {
  font-size: 1.3rem;
  color: #667eea;
  margin-bottom: 1rem;
}

.skill-item ul {
  list-style: none;
  padding: 0;
}

.skill-item li {
  padding: 8px 0;
  color: #666;
  font-size: 1rem;
}

@media (max-width: 768px) {
  .about-grid {
    grid-template-columns: 1fr;
    gap: 40px;
    text-align: center;
  }
  
  .profile-image {
    width: 250px;
    height: 250px;
  }
  
  .page-header h1 {
    font-size: 2.5rem;
  }
  
  .about-text h2 {
    font-size: 1.8rem;
  }
  
  .about-text p {
    font-size: 1rem;
  }
  
  .skills-grid {
    grid-template-columns: 1fr;
    gap: 30px;
  }
  
  .skills-section {
    padding: 40px 20px;
  }
  
  .skills-section h3 {
    font-size: 2rem;
  }
}

.resume-section {
  text-align: center;
  margin-top: 60px;
  padding-top: 40px;
}

.btn-resume {
  display: inline-block;
  padding: 16px 40px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  text-decoration: none;
  border-radius: 30px;
  font-weight: 700;
  font-size: 1.1rem;
  transition: all 0.3s ease;
  box-shadow: 0 5px 15px rgba(102, 126, 234, 0.3);
}

.btn-resume:hover {
  transform: translateY(-3px);
  box-shadow: 0 10px 25px rgba(102, 126, 234, 0.4);
}
</style>