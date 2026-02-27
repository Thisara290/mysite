<template>
  <div class="projects">
    <!-- SECTION 1: SLOGAN HERO -->
    <section class="banner-slogan">
      <div class="banner-content">
        <h1 class="slogan-title">
          <span class="slogan-top">Don't Take Rest After Your First Victory.</span>
          <span class="slogan-bottom">Because If You Fail In Second, More Lips Are Waiting To Say That Your First Victory Was <span class="highlight">Just Luck.</span></span>
        </h1>
      </div>
    </section>

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
                  <span class="tech-name" v-html="tech.name"></span>
                  <p class="tech-reason">{{ tech.reason }}</p>
                </div>
              </div>
            </div>
          </div>

          <div class="analytics-section" v-if="project.analytics">
            <div class="analytics-header">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="analytics-icon">
                <line x1="18" y1="20" x2="18" y2="10"></line>
                <line x1="12" y1="20" x2="12" y2="4"></line>
                <line x1="6" y1="20" x2="6" y2="14"></line>
              </svg>
              <h4 class="analytics-title">Results & Dashboard Integration</h4>
            </div>
            
            <p class="analytics-description" v-html="project.analytics.description"></p>
            
            <div class="analytics-image-container">
              <img :src="project.analytics.image" alt="Analytics Dashboard" class="analytics-image" />
            </div>

            <div class="analytics-benefits">
              <div class="benefit-item" v-for="(benefit, index) in project.analytics.benefits" :key="index">
                <div class="benefit-icon">
                  <svg viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                </div>
                <p class="benefit-text" v-html="benefit"></p>
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
          ],
          analytics: {
            image: "https://res.cloudinary.com/djkw8ijom/image/upload/v1771782903/resultstalalla_kmxxdp.png",
            description: "I connected this website to a custom dashboard named <a href='https://aurbyn.com/dashify' target='_blank' rel='noopener noreferrer' style='color: #667eea; font-weight: 600; text-decoration: none;'>Dashify</a>. From Dashify, the client can easily change the hero banner, add products, and view real-time analytics such as visitor counts and their countries of origin.",
            benefits: [
              "<strong>Proven Results:</strong> Transparent country and visitor demographics demonstrate that I handle SEO, design, and business logic in a truly professional, results-driven way.",
              "<strong>Custom SaaS Integration:</strong> Clients can see how these analytics are gathered by exploring <a href='https://aurbyn.com/dashify' target='_blank' rel='noopener noreferrer' style='color: #667eea; font-weight: 600; text-decoration: none;'>Dashify</a>.",
              "<strong>Powerful Ecosystem:</strong> Dashify is my own SaaS application, specifically built to seamlessly integrate with client websites and provide powerful content management and business insights."
            ]
          }
        },
        {
          id: 2,
          title: "Chaminda Products",
          description: "I pitched a business proposal to the owner of Chaminda Products, a large manufacturing company with multiple distributing outlets in the country. My proposal was to create a modern web presence to publish their company products, enabling them to attract overseas clients, as there is a huge interest in Sri Lankan spices in Europe and other international markets. I successfully designed and developed a comprehensive website showcasing their spice products, making it easy for global consumers and B2B buyers to discover their content and reach out.",
          images: [
            "https://res.cloudinary.com/djkw8ijom/image/upload/v1771782808/herochaminda_j8h4ai.png",
            "https://res.cloudinary.com/djkw8ijom/image/upload/v1771782799/outlets_bz20db.png",
            "https://res.cloudinary.com/djkw8ijom/image/upload/v1771782793/productlist_vime9m.png",
            "https://res.cloudinary.com/djkw8ijom/image/upload/v1771782790/productpagechaminda_ilz0cm.png"
          ],
          link: "https://www.matarachaminda.com",
          techDetails: [
            {
              name: "Next.js",
              reason: "I built the website using Next.js to take advantage of its server-side rendering capabilities, which is essential for SEO optimization. This ensures the product catalog ranks well on international search engines and provides a component-based architecture for clean, maintainable code."
            },
            {
              name: "AWS Amplify",
              reason: "The website is hosted on AWS Amplify using a pay-as-you-go model tied to the client's account. This eliminates the need for large upfront hosting packages, allowing the client to scale costs as their export business grows — a cost-effective and flexible solution."
            },
            {
              name: "Cloudinary",
              reason: "All product and outlet images are stored and served via Cloudinary. This ensures fast, optimized image delivery globally with automatic format conversion and responsive sizing, giving international visitors a smooth browsing experience regardless of their connection speed."
            },
            {
              name: "<a href='https://aurbyn.com/dashify' target='_blank' rel='noopener noreferrer' style='color: #667eea; text-decoration: none; font-weight: 700;'>Dashify</a> (Custom Backend Dashboard)",
              reason: "I integrated the website with my own SaaS application, Dashify. Through the Dashify dashboard, the client can manage product listings, update outlet information, and view real-time visitor analytics — giving them full control over their web presence without needing developer assistance."
            },
            {
              name: "Business Strategy & Consulting",
              reason: "Beyond development, I directly identified this opportunity, pitched the owner on the potential of the European spice market, and executed the strategy to bring a traditional manufacturing business online and make it accessible to global B2B buyers."
            }
          ]
        },
        {
          id: 3,
          title: "PMR Construction",
          description: "I directly contacted the client and pitched the necessity of having a professional digital presence to uplift their construction business. I explained that a .lk domain website ensures business validity and acts as a professional portfolio where potential clients can view their best projects in one click. Furthermore, I emphasized the power of Facebook and TikTok to provide regular updates and run targeted ads to find new customers. After successfully onboarding them, I developed a modern website, established their social media profiles with custom branding (logos and covers), and coordinated with my team to run effective ad campaigns.",
          images: [
            "https://res.cloudinary.com/djkw8ijom/image/upload/v1772216128/pmr_jydmv5.png"
          ],
          link: "https://www.pmrconstruction.lk",
          techDetails: [
            {
              name: "Next.js",
              reason: "I developed the website using Next.js to ensure fast load times and excellent SEO performance, which is crucial for a local construction company looking to be easily found on Google by potential clients."
            },
            {
              name: "AWS Hosting",
              reason: "The application is deployed on AWS, providing a highly reliable and scalable hosting solution that ensures the site remains fast and accessible as the business runs ads and scales its traffic."
            },
            {
              name: "Digital Marketing & Branding",
              reason: "I established their complete digital footprint by creating polished Facebook and TikTok profiles, designing necessary branding assets (logos, covers, business posts), and executing targeted ad campaigns to generate leads."
            },
            {
              name: "Strategic Consulting",
              reason: "I proactively reached out to the business and successfully communicated the value of digital transformation, bridging the gap between traditional construction services and modern digital marketing strategies."
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
  padding: 0 0 80px 0;
  background: #f8f9fa;
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
  margin-bottom: 80px;
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

.analytics-section {
  margin-top: 2.5rem;
  padding-top: 2.5rem;
  border-top: 2px solid #e9ecef;
}

.analytics-header {
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 1rem;
}

.analytics-icon {
  color: #667eea;
}

.analytics-title {
  font-size: 1.5rem;
  color: #333;
  margin: 0;
  font-weight: 700;
}

.analytics-description {
  font-size: 1.1rem;
  line-height: 1.8;
  color: #666;
  margin-bottom: 1.5rem;
}

.analytics-image-container {
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.1);
  margin-bottom: 2rem;
  border: 1px solid #e9ecef;
}

.analytics-image {
  width: 100%;
  height: auto;
  display: block;
}

.analytics-benefits {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  background: #f8f9fa;
  padding: 1.5rem;
  border-radius: 12px;
}

.benefit-item {
  display: flex;
  align-items: flex-start;
  gap: 12px;
}

.benefit-icon {
  color: #28ca42;
  margin-top: 4px;
  flex-shrink: 0;
}

.benefit-text {
  font-size: 1rem;
  line-height: 1.6;
  color: #444;
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
  
  .slogan-top { font-size: 1.5rem; }
  .slogan-bottom { font-size: 1.8rem; }
  
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

  .analytics-title {
    font-size: 1.3rem;
  }
  
  .analytics-description {
    font-size: 1rem;
  }
  
  .analytics-benefits {
    padding: 1.2rem;
  }
  
  .benefit-text {
    font-size: 0.95rem;
  }
}
</style>