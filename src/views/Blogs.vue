<template>
  <div class="blogs">

    <!-- HERO BANNER -->
    <section class="banner-slogan">
      <div class="banner-content">
        <h1 class="slogan-title">
          <span class="slogan-top">Knowledge shared is knowledge multiplied.</span>
          <span class="slogan-bottom">Great marketing isn't about <span class="highlight">selling</span> — it's about <span class="highlight">connecting.</span></span>
        </h1>
      </div>
    </section>

    <!-- BLOG PREVIEW CARDS -->
    <div class="container">

      <!-- LANGUAGE TOGGLE -->
      <div class="lang-toggle-wrapper">
        <div class="lang-toggle">
          <button
            class="lang-btn"
            :class="{ active: activeLang === 'en' }"
            @click="activeLang = 'en'"
          >
            English
          </button>
          <button
            class="lang-btn"
            :class="{ active: activeLang === 'si' }"
            @click="activeLang = 'si'"
          >
            සිංහල
          </button>
        </div>
      </div>

      <div class="blogs-list">
        <article class="blog-card" v-for="blog in displayBlogs" :key="blog.id">
          <div class="blog-meta-top">
            <span class="blog-category">{{ blog.category }}</span>
            <span class="blog-date">{{ blog.date }}</span>
          </div>
          <h2 class="blog-title">{{ blog.title }}</h2>
          <p class="blog-excerpt">{{ blog.excerpt }}</p>
          <router-link :to="`/blogs/${blog.slug}`" class="read-more-btn">
            Read Full Post
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
          </router-link>
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
import { blogs } from '../blogData.js'

export default {
  name: 'Blogs',
  data() {
    return {
      activeLang: 'en'
    }
  },
  computed: {
    displayBlogs() {
      return [...blogs]
        .filter(b => (b.language || 'en') === this.activeLang)
        .reverse()
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
  max-width: 800px;
  margin: 0 auto;
  padding: 0 20px;
}

/* ── BLOG PREVIEW CARDS ───────────────────── */
.blogs-list {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.blog-card {
  background: var(--card-bg);
  border-radius: 20px;
  padding: 2.5rem;
  box-shadow: 0 5px 20px var(--card-shadow);
  border: 1px solid var(--card-border);
  transition: all 0.3s ease;
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.blog-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 15px 40px rgba(0, 0, 0, 0.12);
  border-color: var(--accent-primary);
}

.blog-meta-top {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.blog-category {
  background: rgba(102, 126, 234, 0.1);
  color: var(--accent-primary);
  padding: 4px 14px;
  border-radius: 100px;
  font-size: 0.8rem;
  font-weight: 700;
  letter-spacing: 0.5px;
  text-transform: uppercase;
}

.blog-date {
  font-size: 0.9rem;
  color: var(--text-muted);
}

.blog-title {
  font-size: 1.7rem;
  color: var(--text-primary);
  font-weight: 800;
  letter-spacing: -0.5px;
  line-height: 1.25;
  margin: 0;
}

.blog-excerpt {
  font-size: 1.05rem;
  color: var(--text-secondary);
  line-height: 1.75;
  margin: 0;
}

.read-more-btn {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  align-self: flex-start;
  margin-top: 8px;
  padding: 10px 22px;
  background: var(--accent-primary);
  color: #fff;
  border-radius: 100px;
  text-decoration: none;
  font-weight: 600;
  font-size: 0.9rem;
  transition: all 0.25s ease;
}

.read-more-btn:hover {
  background: var(--accent-secondary, #7c3aed);
  transform: translateX(3px);
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

.inline-link {
  color: var(--accent-primary);
  font-weight: 600;
  text-decoration: none;
}

.inline-link:hover {
  text-decoration: underline;
}

/* ── LANGUAGE TOGGLE ─────────────────────── */
.lang-toggle-wrapper {
  display: flex;
  justify-content: center;
  margin-bottom: 2.5rem;
}

.lang-toggle {
  display: inline-flex;
  background: var(--card-bg);
  border: 1px solid var(--card-border);
  border-radius: 100px;
  padding: 5px;
  gap: 4px;
  box-shadow: 0 4px 16px var(--card-shadow);
}

.lang-btn {
  padding: 10px 24px;
  border-radius: 100px;
  border: none;
  background: transparent;
  color: var(--text-secondary);
  font-size: 0.9rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.25s ease;
  letter-spacing: 0.02em;
}

.lang-btn.active {
  background: var(--accent-primary);
  color: #fff;
  box-shadow: 0 4px 14px rgba(102, 126, 234, 0.35);
}

.lang-btn:not(.active):hover {
  background: rgba(102, 126, 234, 0.08);
  color: var(--accent-primary);
}

/* ── RESPONSIVE ───────────────────────────── */
@media (max-width: 768px) {
  .slogan-top { font-size: 1.5rem; }
  .slogan-bottom { font-size: 1.8rem; letter-spacing: -1px; }
  .blog-card { padding: 1.5rem; }
  .blog-title { font-size: 1.4rem; }
  .lang-btn { padding: 8px 16px; font-size: 0.8rem; }
}
</style>