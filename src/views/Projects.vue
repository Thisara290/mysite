<template>
  <div class="projects">
    <div class="container">
      <header class="page-header">
        <h1>My Projects</h1>
        <p class="subtitle">Showcasing my digital marketing and web development work</p>
      </header>

      <div class="projects-list" v-if="projects.length > 0">
        <div class="project-card" v-for="project in projects" :key="project.id">
          <div class="project-header">
            <h3 class="project-title">{{ project.title }}</h3>
            <p class="project-description">{{ project.description }}</p>
          </div>

          <div class="project-images-section" v-if="project.images && project.images.length > 0">
            <div class="project-images-grid">
              <div 
                class="project-image-wrapper" 
                v-for="(image, index) in project.images" 
                :key="index"
              >
                <img 
                  :src="image" 
                  :alt="`${project.title} - Image ${index + 1}`"
                  class="project-image"
                />
              </div>
            </div>
          </div>

          <div class="website-preview-section" v-if="project.link">
            <h4 class="website-preview-title">Live Website</h4>
            <a 
              :href="project.link" 
              target="_blank" 
              rel="noopener noreferrer"
              class="website-preview-card"
            >
              <div class="browser-frame">
                <div class="browser-header">
                  <div class="browser-dots">
                    <span class="dot dot-red"></span>
                    <span class="dot dot-yellow"></span>
                    <span class="dot dot-green"></span>
                  </div>
                  <div class="browser-url-bar">{{ project.link.replace(/^https?:\/\//, '') }}</div>
                </div>
                <div class="website-preview-image" v-if="project.images && project.images.length > 0">
                  <img :src="project.images[0]" :alt="project.title" />
                </div>
                <div class="click-overlay">
                  <span class="click-here-text">Click here to visit →</span>
                </div>
              </div>
            </a>
          </div>

          <div class="project-meta">
            <div class="project-duration-section" v-if="project.duration || project.durationReason">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <circle cx="12" cy="12" r="10"></circle>
                <polyline points="12 6 12 12 16 14"></polyline>
              </svg>
              <div class="duration-content">
                <span class="project-duration-text">Project duration was {{ project.duration }}</span>
                <p class="duration-reason" v-if="project.durationReason">{{ project.durationReason }}</p>
              </div>
            </div>
            <div class="technologies-section" v-if="project.techDetails && project.techDetails.length > 0">
              <h4 class="technologies-title">Technologies Used</h4>
              <div class="tech-details-list">
                <div class="tech-detail-item" v-for="(tech, index) in project.techDetails" :key="index">
                  <span class="tech-name">{{ tech.name }}</span>
                  <p class="tech-reason">{{ tech.reason }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="empty-state" v-else>
        <p>Projects will appear here soon. Check back later!</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Projects',
  data() {
    return {
      projects: [
        {
          id: 1,
          title: "Talalla Freedom Resort",
          description: "A complete digital marketing rebranding project where I created an SEO-friendly, modern tourism website that helps the resort rank in searches for Talalla area in Sri Lanka. I strategically integrated WhatsApp Business for direct customer communication, eliminating third-party booking platform fees. The solution connects potential guests directly through WhatsApp while offering exclusive villa discounts, resulting in cost savings and improved customer engagement.",
          images: [
            "https://res.cloudinary.com/djkw8ijom/image/upload/v1768559878/talallafreedomimg1_srxcrt.png",
            "https://res.cloudinary.com/djkw8ijom/image/upload/v1768560228/tallafreedomimg2_zukvzi.png"
          ],
          link: "https://www.talallafreedom.com/",
          duration: "two weeks",
          durationReason: "I completed this within two weeks because the tourism season in down south had already begun and the client needed it urgently. Despite the tight timeline, I delivered a fully functional, SEO-optimized website that met all their business requirements.",
          techDetails: [
            {
              name: "Next.js",
              reason: "I chose Next.js because of its server-side rendering capabilities, which is best for SEO optimization. This ensures the website ranks well on search engines and provides organized, component-based architecture for better maintainability."
            },
            {
              name: "AWS Amplify",
              reason: "AWS was selected to host the website on Amplify with a pay-as-you-go model using the client's visa card. Instead of buying a big hosting package upfront, the client can pay as per usage. This allows the client to scale costs as their business grows, making it a cost-effective solution that aligns with business expansion."
            }
          ]
        }
      ]
    }
  },
  methods: {
  }
}
</script>

<style scoped>
.projects {
  min-height: 100vh;
  padding: 80px 0;
  background: #f8f9fa;
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
  font-weight: 700;
}

.subtitle {
  font-size: 1.3rem;
  color: #666;
}

.projects-list {
  display: flex;
  flex-direction: column;
  gap: 3rem;
  margin-top: 3rem;
}

.project-card {
  background: white;
  border-radius: 20px;
  padding: 2.5rem;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
}

.project-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 15px 40px rgba(0, 0, 0, 0.15);
}

.project-header {
  margin-bottom: 2rem;
}

.project-title {
  font-size: 2rem;
  color: #333;
  margin-bottom: 1rem;
  font-weight: 700;
}

.project-description {
  font-size: 1.1rem;
  line-height: 1.8;
  color: #666;
}

.project-images-section {
  margin: 2rem 0;
}

.project-images-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1.5rem;
}

.project-image-wrapper {
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
  background: #f8f9fa;
}

.project-image-wrapper:hover {
  transform: scale(1.02);
}

.project-image {
  width: 100%;
  height: auto;
  display: block;
  object-fit: cover;
}

.website-preview-section {
  margin: 2.5rem 0;
  padding: 1.5rem 0;
  border-top: 2px solid #e9ecef;
  border-bottom: 2px solid #e9ecef;
}

.website-preview-title {
  font-size: 1.3rem;
  color: #333;
  margin-bottom: 1rem;
  font-weight: 700;
}

.website-preview-card {
  display: block;
  text-decoration: none;
  transition: all 0.3s ease;
  cursor: pointer;
}

.website-preview-card:hover {
  transform: translateY(-3px);
}

.website-preview-card:hover .browser-frame {
  box-shadow: 0 15px 40px rgba(0, 0, 0, 0.2);
}

.website-preview-card:hover .click-overlay {
  opacity: 1;
}

.browser-frame {
  background: white;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
  transition: all 0.3s ease;
  border: 1px solid #e9ecef;
}

.browser-header {
  background: #f8f9fa;
  padding: 12px 16px;
  display: flex;
  align-items: center;
  gap: 12px;
  border-bottom: 1px solid #e9ecef;
}

.browser-dots {
  display: flex;
  gap: 6px;
}

.dot {
  width: 12px;
  height: 12px;
  border-radius: 50%;
}

.dot-red {
  background: #ff5f57;
}

.dot-yellow {
  background: #ffbd2e;
}

.dot-green {
  background: #28ca42;
}

.browser-url-bar {
  flex: 1;
  background: white;
  padding: 6px 12px;
  border-radius: 6px;
  font-size: 0.85rem;
  color: #666;
  border: 1px solid #e9ecef;
  font-family: 'Monaco', 'Menlo', monospace;
}

.website-preview-image {
  position: relative;
  width: 100%;
  height: 300px;
  overflow: hidden;
  background: #f8f9fa;
}

.website-preview-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  transition: transform 0.3s ease;
}

.website-preview-card:hover .website-preview-image img {
  transform: scale(1.05);
}

.click-overlay {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background: linear-gradient(to top, rgba(102, 126, 234, 0.95), rgba(102, 126, 234, 0.7), transparent);
  padding: 20px;
  text-align: center;
  opacity: 0;
  transition: opacity 0.3s ease;
  pointer-events: none;
}

.click-here-text {
  color: white;
  font-size: 0.95rem;
  font-weight: 600;
}

.project-meta {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  margin-top: 1rem;
  padding-top: 1rem;
  border-top: 2px solid #e9ecef;
}

.project-duration-section {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 1rem;
  color: #667eea;
  font-weight: 600;
}

.duration-content {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.project-duration-text {
  font-size: 1rem;
  line-height: 1.5;
}

.duration-reason {
  font-size: 0.95rem;
  line-height: 1.7;
  color: #666;
  margin: 0;
  font-style: italic;
}

.technologies-section {
  margin-top: 0.5rem;
}

.technologies-title {
  font-size: 1.2rem;
  color: #333;
  margin-bottom: 1rem;
  font-weight: 700;
}

.tech-details-list {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.tech-detail-item {
  background: #f8f9fa;
  padding: 1.2rem;
  border-radius: 12px;
  border-left: 4px solid #667eea;
  transition: all 0.3s ease;
}

.tech-detail-item:hover {
  background: #f0f2f5;
  transform: translateX(5px);
}

.tech-name {
  display: block;
  font-size: 1.1rem;
  color: #667eea;
  font-weight: 700;
  margin-bottom: 0.5rem;
}

.tech-reason {
  font-size: 0.95rem;
  line-height: 1.7;
  color: #666;
  margin: 0;
}

.empty-state {
  text-align: center;
  padding: 80px 20px;
  color: #666;
  font-size: 1.2rem;
}

@media (max-width: 768px) {
  .page-header h1 {
    font-size: 2.5rem;
  }
  
  .subtitle {
    font-size: 1.1rem;
  }
  
  .project-card {
    padding: 1.5rem;
  }
  
  .project-title {
    font-size: 1.6rem;
  }
  
  .project-description {
    font-size: 1rem;
  }
  
  .project-images-grid {
    grid-template-columns: 1fr;
    gap: 1rem;
  }
  
  .website-preview-image {
    height: 220px;
  }
  
  .tech-detail-item {
    padding: 1rem;
  }
  
  .tech-name {
    font-size: 1rem;
  }
  
  .tech-reason {
    font-size: 0.9rem;
  }
}
</style>