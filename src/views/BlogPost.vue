<template>
  <div class="blog-post-page">

    <!-- Not Found -->
    <div v-if="!blog" class="not-found">
      <h2>Blog post not found.</h2>
      <router-link to="/blogs" class="back-link">← Back to Blogs</router-link>
    </div>

    <template v-else>
      <!-- Hero -->
      <section class="post-hero">
        <div class="post-hero-content">
          <div class="post-meta-top">
            <span class="post-category">{{ blog.category }}</span>
            <span class="post-date">{{ blog.date }}</span>
            <span class="post-lang-badge" :class="blog.language || 'en'">
              {{ (blog.language === 'si') ? 'සිංහල' : 'English' }}
            </span>
          </div>
          <h1 class="post-title">{{ blog.title }}</h1>
          <p class="post-intro" v-html="blog.intro"></p>
        </div>
      </section>

      <!-- Article Body -->
      <div class="post-container">
        <article class="post-article" :class="{ 'si-content': blog.language === 'si' }">

          <template v-for="(section, index) in blog.sections" :key="index">

            <!-- Heading -->
            <div class="content-block" v-if="section.type === 'heading'">
              <h2 class="section-heading">{{ section.value }}</h2>
            </div>

            <!-- Text -->
            <div class="content-block" v-if="section.type === 'text'">
              <p class="content-text" v-html="section.value"></p>
            </div>

            <!-- List -->
            <div class="content-block" v-if="section.type === 'list'">
              <p class="content-text list-lead" v-if="section.value" v-html="section.value"></p>
              <ul class="content-list">
                <li v-for="(item, i) in section.items" :key="i" v-html="item"></li>
              </ul>
            </div>

            <!-- Case Study -->
            <div class="case-study-section" v-if="section.type === 'case-study'">
              <div class="case-study-header">
                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
                <h3>Real-World Case Study: <a :href="section.url" target="_blank" rel="noopener noreferrer" class="inline-link">{{ section.name }}</a></h3>
              </div>
              <p class="content-text">{{ section.context }}</p>
              <p class="content-text" v-if="section.fbUrl">
                You can also view their
                <a :href="section.fbUrl" target="_blank" rel="noopener noreferrer" class="inline-link">redesigned Facebook page here</a>.
              </p>
            </div>

            <!-- Pillars -->
            <div class="pillars-section" v-if="section.type === 'pillars'">
              <h2 class="section-heading">{{ section.value }}</h2>
              <div class="pillars-list">
                <div class="pillar-item" v-for="pillar in section.items" :key="pillar.title">
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

            <!-- Takeaway -->
            <div class="takeaway-section" v-if="section.type === 'takeaway'">
              <div class="takeaway-header">
                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
                <h3>Key Takeaway</h3>
              </div>
              <div class="takeaway-card">
                <span class="takeaway-quote">❝</span>
                <p class="takeaway-text">{{ section.value }}</p>
              </div>
            </div>

          </template>

          <!-- Footer -->
          <div class="post-footer">
            <div class="author-block">
              <div class="author-avatar">T</div>
              <div>
                <p class="author-label">Written by</p>
                <strong class="author-name">Thisara Gunasekara</strong>
              </div>
            </div>
            <div class="post-actions">
              <button class="share-btn" @click="copyLink">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="18" cy="5" r="3"></circle><circle cx="6" cy="12" r="3"></circle><circle cx="18" cy="19" r="3"></circle><line x1="8.59" y1="13.51" x2="15.42" y2="17.49"></line><line x1="15.41" y1="6.51" x2="8.59" y2="10.49"></line></svg>
                {{ copied ? 'Link Copied!' : 'Share this post' }}
              </button>
              <router-link to="/blogs" class="back-link-btn">
                ← All Posts
              </router-link>
            </div>
          </div>

        </article>
      </div>
    </template>
  </div>
</template>

<script>
import { blogs } from '../blogData.js'

export default {
  name: 'BlogPost',
  data() {
    return {
      copied: false
    }
  },
  computed: {
    blog() {
      const slug = this.$route.params.slug
      return blogs.find(b => b.slug === slug) || null
    }
  },
  methods: {
    copyLink() {
      navigator.clipboard.writeText(window.location.href).then(() => {
        this.copied = true
        setTimeout(() => { this.copied = false }, 2500)
      })
    }
  }
}
</script>

<style scoped>
.blog-post-page {
  min-height: 100vh;
  background: var(--bg-primary);
  padding-bottom: 80px;
}

/* ── NOT FOUND ─────────────────────────── */
.not-found {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 60vh;
  gap: 20px;
  color: var(--text-primary);
}

/* ── HERO ─────────────────────────── */
.post-hero {
  background: var(--bg-primary);
  border-bottom: 1px solid var(--border-color);
  padding: 150px 24px 60px;
  position: relative;
  overflow: hidden;
}

.post-hero::before {
  content: '';
  position: absolute;
  top: -60%;
  left: -20%;
  width: 140%;
  height: 200%;
  background: radial-gradient(ellipse at 30% 50%, var(--accent-primary) 0%, transparent 60%);
  opacity: 0.05;
  pointer-events: none;
}

.post-hero-content {
  max-width: 780px;
  margin: 0 auto;
  position: relative;
  z-index: 1;
}

.post-meta-top {
  display: flex;
  align-items: center;
  gap: 16px;
  margin-bottom: 20px;
}

.post-category {
  background: var(--accent-primary);
  color: #fff;
  font-size: 0.75rem;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  padding: 5px 14px;
  border-radius: 20px;
}

.post-date {
  font-size: 0.9rem;
  color: var(--text-secondary);
}

.post-lang-badge {
  font-size: 0.7rem;
  font-weight: 700;
  padding: 3px 10px;
  border-radius: 6px;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid var(--border-color);
  color: var(--text-muted);
}

.post-lang-badge.si {
  border-color: #ffbe0b;
  color: #ffbe0b;
}

.post-lang-badge.en {
  border-color: #3a86ff;
  color: #3a86ff;
}

.post-title {
  font-size: clamp(2rem, 5vw, 3.2rem);
  font-weight: 800;
  color: var(--text-primary);
  line-height: 1.15;
  margin-bottom: 24px;
}

.post-intro {
  font-size: 1.15rem;
  color: var(--text-secondary);
  line-height: 1.7;
}

/* ── ARTICLE ─────────────────────────── */
.post-container {
  max-width: 780px;
  margin: 0 auto;
  padding: 60px 24px 0;
}

.post-article {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

/* ── CONTENT BLOCKS ─────────────────────────── */
.content-block {
  padding: 6px 0;
}

.section-heading {
  font-size: 1.5rem;
  font-weight: 700;
  color: var(--text-primary);
  margin: 28px 0 12px;
  padding-left: 16px;
  border-left: 3px solid var(--accent-primary);
}

.content-text {
  font-size: 1.05rem;
  color: var(--text-secondary);
  line-height: 1.8;
  margin: 0;
}

.list-lead {
  margin-bottom: 12px;
  font-weight: 500;
  color: var(--text-primary);
}

.content-list {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.content-list li {
  position: relative;
  padding-left: 24px;
  color: var(--text-secondary);
  font-size: 1rem;
  line-height: 1.7;
}

.content-list li::before {
  content: '→';
  position: absolute;
  left: 0;
  color: var(--accent-primary);
  font-weight: 700;
}

/* ── SINHALA CONTENT STYLING ──────────────── */
.si-content {
  font-family: 'Noto Sans Sinhala', 'Abhaya Libre', -apple-system, BlinkMacSystemFont, sans-serif;
}

.si-content .content-text {
  font-size: 1.15rem;
  line-height: 2;
  letter-spacing: 0.02em;
}

.si-content .content-list li {
  font-size: 1.1rem;
  line-height: 1.9;
  margin-bottom: 8px;
}

.si-content .content-list li::before {
  content: '•';
  font-size: 1.5rem;
  top: -4px;
}

.si-content .post-title {
  font-family: 'Noto Sans Sinhala', 'Abhaya Libre', sans-serif;
  line-height: 1.3;
}

/* ── CASE STUDY ─────────────────────────── */
.case-study-section {
  background: var(--bg-card);
  border: 1px solid var(--border-color);
  border-left: 4px solid var(--accent-secondary, #7c3aed);
  border-radius: 12px;
  padding: 28px 32px;
  margin: 16px 0;
}

.case-study-header {
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 16px;
  color: var(--accent-secondary, #7c3aed);
}

.case-study-header h3 {
  font-size: 1.1rem;
  font-weight: 700;
  color: var(--text-primary);
  margin: 0;
}

/* ── PILLARS ─────────────────────────── */
.pillars-section {
  margin: 16px 0;
}

.pillars-list {
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-top: 16px;
}

.pillar-item {
  background: var(--bg-card);
  border: 1px solid var(--border-color);
  border-radius: 12px;
  padding: 24px 28px;
  transition: background 0.2s;
}

.pillar-item:hover {
  background: var(--hover-bg);
}

.pillar-label {
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 16px;
}

.pillar-icon {
  font-size: 1.6rem;
}

.pillar-title {
  font-size: 1.1rem;
  color: var(--text-primary);
}

.pillar-points {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.point-item {
  display: flex;
  gap: 10px;
  align-items: flex-start;
}

.point-icon {
  color: var(--accent-primary);
  margin-top: 3px;
  flex-shrink: 0;
}

.point-text {
  font-size: 0.97rem;
  color: var(--text-secondary);
  line-height: 1.65;
  margin: 0;
}

/* ── TAKEAWAY ─────────────────────────── */
.takeaway-section {
  background: var(--bg-dark, #0f172a);
  border-radius: 16px;
  padding: 32px 36px;
  margin: 24px 0;
}

.takeaway-header {
  display: flex;
  align-items: center;
  gap: 12px;
  color: var(--accent-primary);
  margin-bottom: 20px;
}

.takeaway-header h3 {
  font-size: 1rem;
  font-weight: 700;
  color: #fff;
  margin: 0;
  letter-spacing: 0.04em;
  text-transform: uppercase;
}

.takeaway-card {
  position: relative;
  padding-left: 28px;
}

.takeaway-quote {
  position: absolute;
  left: 0;
  top: -4px;
  font-size: 2rem;
  color: var(--accent-primary);
  line-height: 1;
}

.takeaway-text {
  font-size: 1.05rem;
  color: rgba(255,255,255,0.85);
  line-height: 1.75;
  margin: 0;
}

/* ── POST FOOTER ─────────────────────────── */
.post-footer {
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 20px;
  margin-top: 48px;
  padding-top: 32px;
  border-top: 1px solid var(--border-color);
}

.author-block {
  display: flex;
  align-items: center;
  gap: 14px;
}

.author-avatar {
  width: 46px;
  height: 46px;
  border-radius: 50%;
  background: var(--accent-primary);
  color: #fff;
  font-weight: 700;
  font-size: 1.1rem;
  display: flex;
  align-items: center;
  justify-content: center;
}

.author-label {
  font-size: 0.8rem;
  color: var(--text-secondary);
  margin: 0;
}

.author-name {
  font-size: 1rem;
  color: var(--text-primary);
}

.post-actions {
  display: flex;
  align-items: center;
  gap: 12px;
  flex-wrap: wrap;
}

.share-btn {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 10px 20px;
  border: 1px solid var(--border-color);
  border-radius: 8px;
  background: transparent;
  color: var(--text-primary);
  font-size: 0.9rem;
  cursor: pointer;
  transition: all 0.2s;
}

.share-btn:hover {
  border-color: var(--accent-primary);
  color: var(--accent-primary);
}

.back-link-btn {
  display: inline-flex;
  align-items: center;
  padding: 10px 20px;
  background: var(--accent-primary);
  color: #fff;
  border-radius: 8px;
  text-decoration: none;
  font-size: 0.9rem;
  font-weight: 600;
  transition: opacity 0.2s;
}

.back-link-btn:hover {
  opacity: 0.85;
}

.inline-link {
  color: var(--accent-primary);
  text-decoration: none;
  font-weight: 600;
}

.inline-link:hover {
  text-decoration: underline;
}

@media (max-width: 640px) {
  .post-footer {
    flex-direction: column;
    align-items: flex-start;
  }
}
</style>
