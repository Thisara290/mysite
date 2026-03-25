<template>
  <div class="blogs">

    <!-- SECTION 1: HERO SLOGAN BANNER -->
    <section class="banner-slogan">
      <div class="banner-content">
        <h1 class="slogan-title">
          <span class="slogan-top">Knowledge shared is knowledge multiplied.</span>
          <span class="slogan-bottom">Great marketing isn't about <span class="highlight">selling</span> — it's about <span class="highlight">connecting.</span></span>
        </h1>
      </div>
    </section>

    <div class="container">

      <div class="blogs-list">
        <article class="blog-card" v-for="blog in blogs" :key="blog.id">

          <!-- Blog Header -->
          <div class="blog-header-section">
            <div class="blog-meta-top">
              <span class="blog-category">{{ blog.category }}</span>
              <span class="blog-date">{{ blog.date }}</span>
            </div>
            <h2 class="blog-title">{{ blog.title }}</h2>
            <p class="blog-intro">{{ blog.intro }}</p>
          </div>

          <!-- What is SoLoMo Section -->
          <div class="content-block">
            <h3 class="section-heading">What is SoLoMo?</h3>
            <p class="content-text">{{ blog.definition }}</p>
          </div>

          <!-- Case Study Block -->
          <div class="case-study-section">
            <div class="case-study-header">
              <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
              <h3>Real-World Case Study: <a :href="blog.caseStudy.url" target="_blank" rel="noopener noreferrer" class="inline-link">{{ blog.caseStudy.name }}</a></h3>
            </div>
            <p class="content-text">{{ blog.caseStudy.context }}</p>
            <p class="content-text">
              You can also view their
              <a :href="blog.caseStudy.fbUrl" target="_blank" rel="noopener noreferrer" class="inline-link">redesigned Facebook page here</a>.
            </p>
          </div>

          <!-- The Three Pillars -->
          <div class="pillars-section">
            <h3 class="section-heading">Breaking Down the Three Pillars</h3>
            <div class="pillars-list">
              <div class="pillar-item" v-for="pillar in blog.pillars" :key="pillar.title">
                <div class="pillar-label">
                  <span class="pillar-icon">{{ pillar.icon }}</span>
                  <strong class="pillar-title">{{ pillar.title }}</strong>
                </div>
                <div class="pillar-points">
                  <div class="point-item" v-for="(point, i) in pillar.points" :key="i">
                    <div class="point-icon">
                      <svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" stroke-width="2.5" fill="none" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                    </div>
                    <p class="point-text" v-html="point"></p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Project Manager Takeaway -->
          <div class="takeaway-section">
            <div class="takeaway-header">
              <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
              <h3>Project Manager's Key Takeaway</h3>
            </div>
            <div class="takeaway-card">
              <span class="takeaway-quote">❝</span>
              <p class="takeaway-text">{{ blog.takeaway }}</p>
            </div>
          </div>

          <!-- Blog Footer -->
          <div class="blog-footer">
            <div class="author-block">
              <div class="author-avatar">T</div>
              <div>
                <p class="author-label">Written by</p>
                <strong class="author-name">Thisara Gunasekara</strong>
              </div>
            </div>
            <router-link to="/contact" class="contact-cta">
              Let's Talk Strategy
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
            </router-link>
          </div>

        </article>
      </div>

      <div class="more-coming">
        <div class="more-coming-icon">✍️</div>
        <h3>More articles on the way</h3>
        <p>I write about marketing, projects, travel, and lessons learned. <router-link to="/contact" class="inline-link">Get in touch</router-link> to suggest a topic.</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Blogs',
  data() {
    return {
      blogs: [
        {
          id: 1,
          title: 'SoLoMo: The Smart Way to Plan a Digital Marketing Project',
          category: 'Digital Marketing Strategy',
          date: 'March 20, 2026',
          intro: 'Before a single line of code is written or a single post goes live, a good digital marketer needs a framework. SoLoMo — short for Social, Local, and Mobile — is that framework. It ensures your efforts are connected, purposeful, and built to convert.',
          definition: 'SoLoMo blends three powerful digital marketing pillars into one cohesive strategy. The Social side builds credibility through community — real people sharing real stories about your brand. Local uses geolocation and regional context to position your business at exactly the right time and place. Mobile ties it all together by ensuring every experience works smoothly on a phone, turning a quick scroll into a real-world action. When these three forces combine, you reach customers with the right message, at the right moment, in the right place.',
          caseStudy: {
            name: 'Project Talalla Freedom',
            url: 'https://www.talallafreedom.com',
            fbUrl: 'https://www.facebook.com/share/1AG6syvcnF/',
            context: 'Talalla Freedom is a premium beach villa in southern Sri Lanka that primarily attracts international tourists. When we took on this project, the goal was clear: translate the beauty and experience of this location into a digital presence that converts visitors into bookings — without relying on expensive third-party platforms. Here is how SoLoMo guided every decision.'
          },
          pillars: [
            {
              title: 'Social — Building Trust Before the Booking',
              icon: '🤝',
              points: [
                'We redesigned the <strong>Facebook page</strong>, created a consistent logo, cover image, and a library of posts that matched the villa\'s premium, nature-first identity.',
                'The website was built around <strong>authentic guest experiences</strong> rather than traditional advertising. This approach builds immediate credibility.',
                'The <strong>"Hearts Full of Memories"</strong> section features real guest feedback. Seeing honest reviews from past travellers makes new visitors feel secure. It turns a stranger into a trusted lead.'
              ]
            },
            {
              title: 'Local — Being Found at the Right Moment',
              icon: '📍',
              points: [
                '<strong>Search Visibility:</strong> The content references Talalla Beach and the Tangalle Main Road, helping the site appear when people search for things to do in Southern Sri Lanka.',
                '<strong>Regional Context:</strong> By mentioning landmarks like the Dondra Lighthouse and the Matara Dutch Fort, the site acts as a local guide — making it more valuable to travellers exploring beyond their villa.',
                'We also took advantage of the stunning natural environment. The <strong>photos and videos taken on location</strong> served as both marketing content and local SEO signals, connecting the brand to the geography.'
              ]
            },
            {
              title: 'Mobile — Making Action Effortless',
              icon: '📱',
              points: [
                'Most international travellers plan their trips on their phones. The entire website was built with this in mind from day one.',
                '<strong>Clean Navigation:</strong> The layout is minimalist and fast — essential for users with limited data or slow connections in remote areas.',
                '<strong>Easy Booking:</strong> "Book Now" buttons are prominent and contact details are always within one tap. This reduces the friction between a visitor being interested and making a reservation.'
              ]
            }
          ],
          takeaway: 'When managing a digital marketing project, SoLoMo is not just a concept to mention in a presentation — it is a planning tool. Before the project begins, a project manager must ensure that Social, Local, and Mobile channels are each addressed in the brief. This keeps designers and developers moving in the same direction, from start to finish. It also protects the budget: when everyone understands the goal, there is far less rework. The specific approach may differ from business to business, but the concept remains the same. If you would like to discuss how SoLoMo can apply to your project, feel free to get in touch.'
        }
      ]
    }
  }
}
</script>

<style scoped>
.blogs {
  min-height: 100vh;
  padding: 0 0 80px 0;
  background: var(--bg-primary);
}

/* ── HERO BANNER ─────────────────────────── */
.banner-slogan {
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--bg-primary);
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
  background: radial-gradient(circle, var(--accent-primary) 0%, transparent 70%);
  opacity: 0.05;
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
  color: var(--text-primary);
  letter-spacing: -1px;
  animation: slideUp 1s cubic-bezier(0.165, 0.84, 0.44, 1) forwards;
  opacity: 0;
  transform: translateY(30px);
}

.slogan-bottom {
  font-size: 3rem;
  font-weight: 900;
  color: var(--text-primary);
  letter-spacing: -2px;
  line-height: 1.2;
  animation: slideUp 1s cubic-bezier(0.165, 0.84, 0.44, 1) 0.3s forwards;
  opacity: 0;
  transform: translateY(30px);
}

.highlight {
  background: linear-gradient(135deg, var(--accent-primary) 0%, var(--accent-secondary) 100%);
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

/* ── CONTAINER ────────────────────────────── */
.container {
  max-width: 1000px;
  margin: 0 auto;
  padding: 0 20px;
}


/* ── BLOG CARD ────────────────────────────── */
.blogs-list {
  display: flex;
  flex-direction: column;
  gap: 3rem;
}

.blog-card {
  background: var(--card-bg);
  border-radius: 20px;
  padding: 2.5rem;
  box-shadow: 0 5px 20px var(--card-shadow);
  border: 1px solid var(--card-border);
  transition: all 0.3s ease;
}

.blog-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 15px 40px rgba(0, 0, 0, 0.12);
}

/* ── BLOG HEADER ──────────────────────────── */
.blog-header-section {
  margin-bottom: 2.5rem;
  padding-bottom: 2rem;
  border-bottom: 2px solid var(--card-border);
}

.blog-meta-top {
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1rem;
}

.blog-category {
  background: rgba(102, 126, 234, 0.1);
  color: var(--accent-primary);
  padding: 4px 14px;
  border-radius: 100px;
  font-size: 0.82rem;
  font-weight: 700;
  letter-spacing: 0.5px;
  text-transform: uppercase;
}

.blog-date {
  font-size: 0.9rem;
  color: var(--text-muted);
  font-weight: 500;
}

.blog-title {
  font-size: 2rem;
  color: var(--text-primary);
  font-weight: 800;
  letter-spacing: -0.5px;
  line-height: 1.25;
  margin-bottom: 1rem;
}

.blog-intro {
  font-size: 1.15rem;
  color: var(--text-secondary);
  line-height: 1.8;
  border-left: 4px solid var(--accent-primary);
  padding-left: 1.2rem;
  margin: 0;
}

/* ── CONTENT BLOCKS ───────────────────────── */
.content-block {
  margin: 2rem 0;
}

.section-heading {
  font-size: 1.3rem;
  color: var(--text-primary);
  font-weight: 700;
  margin-bottom: 1rem;
}

.content-text {
  font-size: 1.05rem;
  line-height: 1.8;
  color: var(--text-secondary);
  margin-bottom: 0.8rem;
}

.content-text:last-child {
  margin-bottom: 0;
}

.inline-link {
  color: var(--accent-primary);
  font-weight: 600;
  text-decoration: none;
  border-bottom: 2px solid rgba(102, 126, 234, 0.3);
  transition: border-color 0.2s ease;
}

.inline-link:hover {
  border-color: var(--accent-primary);
}

/* ── CASE STUDY ───────────────────────────── */
.case-study-section {
  background: var(--bg-secondary);
  border-radius: 14px;
  padding: 2rem;
  margin: 2rem 0;
  border-left: 4px solid var(--accent-primary);
}

.case-study-header {
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 1rem;
  color: var(--accent-primary);
}

.case-study-header h3 {
  font-size: 1.2rem;
  font-weight: 700;
  color: var(--text-primary);
  margin: 0;
}

/* ── PILLARS SECTION ──────────────────────── */
.pillars-section {
  margin: 2.5rem 0;
  padding-top: 2rem;
  border-top: 2px solid var(--card-border);
}

.pillars-list {
  display: flex;
  flex-direction: column;
  gap: 2rem;
  margin-top: 1.5rem;
}

.pillar-item {
  background: var(--bg-secondary);
  border-radius: 14px;
  padding: 2rem;
  transition: all 0.3s ease;
}

.pillar-item:hover {
  background: #f0f2f5;
  transform: translateX(5px);
}

.pillar-label {
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 1.5rem;
}

.pillar-icon {
  font-size: 1.5rem;
}

.pillar-title {
  font-size: 1.15rem;
  color: var(--text-primary);
  font-weight: 700;
}

.pillar-points {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  border-left: 4px solid var(--accent-primary);
  padding-left: 1.5rem;
}

.point-item {
  display: flex;
  align-items: flex-start;
  gap: 10px;
}

.point-icon {
  color: var(--accent-primary);
  margin-top: 3px;
  flex-shrink: 0;
}

.point-text {
  font-size: 1rem;
  line-height: 1.7;
  color: var(--text-secondary);
  margin: 0;
}

/* ── TAKEAWAY SECTION ─────────────────────── */
.takeaway-section {
  margin: 2.5rem 0 0;
  padding-top: 2rem;
  border-top: 2px solid var(--card-border);
}

.takeaway-header {
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 1rem;
  color: var(--accent-primary);
}

.takeaway-header h3 {
  font-size: 1.3rem;
  font-weight: 700;
  color: var(--text-primary);
  margin: 0;
}

.takeaway-card {
  position: relative;
  background: linear-gradient(135deg, var(--accent-primary) 0%, var(--accent-secondary) 100%);
  border-radius: 18px;
  padding: 2.5rem 2.5rem 2rem;
  overflow: hidden;
}

.takeaway-quote {
  position: absolute;
  top: -10px;
  left: 20px;
  font-size: 7rem;
  color: rgba(255, 255, 255, 0.12);
  font-family: Georgia, serif;
  line-height: 1;
  pointer-events: none;
  user-select: none;
}

.takeaway-text {
  position: relative;
  color: rgba(255, 255, 255, 0.95);
  font-size: 1.1rem;
  line-height: 1.9;
  font-style: italic;
  margin: 0;
}

/* ── BLOG FOOTER ──────────────────────────── */
.blog-footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 2.5rem;
  padding-top: 2rem;
  border-top: 2px solid var(--card-border);
}

.author-block {
  display: flex;
  align-items: center;
  gap: 14px;
}

.author-avatar {
  width: 48px;
  height: 48px;
  border-radius: 50%;
  background: linear-gradient(135deg, var(--accent-primary) 0%, var(--accent-secondary) 100%);
  color: white;
  font-weight: 800;
  font-size: 1.1rem;
  display: flex;
  align-items: center;
  justify-content: center;
}

.author-label {
  font-size: 0.8rem;
  color: var(--text-muted);
  margin: 0 0 2px;
}

.author-name {
  font-size: 0.95rem;
  color: var(--text-primary);
}

.contact-cta {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  background: var(--text-primary);
  color: var(--bg-primary);
  padding: 12px 24px;
  border-radius: 100px;
  text-decoration: none;
  font-weight: 600;
  font-size: 0.9rem;
  transition: all 0.3s ease;
}

.contact-cta:hover {
  background: #667eea;
  transform: translateY(-2px);
}

/* ── MORE COMING ──────────────────────────── */
.more-coming {
  text-align: center;
  margin-top: 60px;
  padding: 50px 30px;
  background: var(--card-bg);
  border-radius: 20px;
  box-shadow: 0 5px 20px var(--card-shadow);
  border: 1px solid var(--card-border);
}

.more-coming-icon {
  font-size: 2.5rem;
  margin-bottom: 16px;
}

.more-coming h3 {
  font-size: 1.3rem;
  color: var(--text-primary);
  font-weight: 700;
  margin-bottom: 10px;
}

.more-coming p {
  font-size: 1rem;
  color: var(--text-muted);
}

/* ── RESPONSIVE ───────────────────────────── */
@media (max-width: 768px) {
  .slogan-top { font-size: 1.5rem; }
  .slogan-bottom { font-size: 1.8rem; letter-spacing: -1px; }


  .blog-card { padding: 1.5rem; }
  .blog-title { font-size: 1.6rem; }
  .blog-intro { font-size: 1rem; }

  .blog-footer {
    flex-direction: column;
    gap: 1.5rem;
    align-items: flex-start;
  }

  .contact-cta {
    width: 100%;
    justify-content: center;
  }

  .pillar-item { padding: 1.5rem; }
  .takeaway-text { padding: 1.5rem; }
}
</style>