<template>
  <div class="blog-post">
    <!-- Loading State -->
    <div v-if="loading" class="loading-container">
      <div class="loading-spinner"></div>
      <p>Loading blog post...</p>
    </div>

    <!-- Error State -->
    <div v-else-if="error" class="error-container">
      <div class="error-icon">⚠️</div>
      <h2>Post Not Found</h2>
      <p>{{ error }}</p>
      <router-link to="/blogs" class="back-button">← Back to Blogs</router-link>
    </div>

    <!-- Blog Content -->
    <article v-else class="post-container">
      <!-- Hero Section -->
      <header class="post-header">
        <div class="breadcrumb">
          <router-link to="/blogs" class="breadcrumb-link">← Back to Blogs</router-link>
        </div>
        
        <h1 class="post-title">{{ blog.title }}</h1>
        
        <div class="post-meta">
          <div class="meta-item">
            <span class="meta-icon">📅</span>
            <span class="meta-text">{{ formatDate(blog.created_at) }}</span>
          </div>
          
          <div v-if="blog.author" class="meta-item">
            <span class="meta-icon">👤</span>
            <span class="meta-text">by {{ blog.author }}</span>
          </div>
          
          <div v-if="readingTime" class="meta-item">
            <span class="meta-icon">⏱️</span>
            <span class="meta-text">{{ readingTime }} min read</span>
          </div>
        </div>

        <div v-if="blog.tags && blog.tags.length" class="post-tags">
          <span 
            v-for="tag in blog.tags" 
            :key="tag" 
            class="tag"
          >
            {{ tag }}
          </span>
        </div>
      </header>

      <!-- Featured Image -->
      <div v-if="blog.image" class="featured-image">
        <img :src="blog.image" :alt="blog.title" loading="lazy">
      </div>

      <!-- Table of Contents (for longer posts) -->
      <aside v-if="headings.length > 3" class="table-of-contents">
        <h3>Table of Contents</h3>
        <nav>
          <ul>
            <li v-for="(heading, index) in headings" :key="index">
              <a 
                :href="`#${heading.id}`" 
                :class="`toc-${heading.level}`"
                @click.prevent="scrollToSection(heading.id)"
              >
                {{ heading.text }}
              </a>
            </li>
          </ul>
        </nav>
      </aside>

      <!-- Main Content -->
      <div class="post-content">
        <div class="content-wrapper" v-html="processedContent"></div>
      </div>

      <!-- Share Section -->
      <footer class="post-footer">
        <div class="share-section">
          <h3>Share this post</h3>
          <div class="social-share">
            <button @click="shareToTwitter" class="share-button twitter">
              <span class="share-icon">🐦</span>
              Twitter
            </button>
            <button @click="shareToLinkedIn" class="share-button linkedin">
              <span class="share-icon">💼</span>
              LinkedIn
            </button>
            <button @click="copyLink" class="share-button copy">
              <span class="share-icon">🔗</span>
              Copy Link
            </button>
          </div>
        </div>

        <!-- Related Posts -->
        <div v-if="relatedPosts.length" class="related-posts">
          <h3>Related Posts</h3>
          <div class="related-grid">
            <div 
              v-for="post in relatedPosts.slice(0, 3)" 
              :key="post.id"
              class="related-card"
              @click="navigateToPost(post.id)"
            >
              <div v-if="post.image" class="related-image">
                <img :src="post.image" :alt="post.title">
              </div>
              <div class="related-content">
                <h4>{{ post.title }}</h4>
                <p>{{ truncateText(post.content, 100) }}</p>
                <span class="related-date">{{ formatDate(post.created_at) }}</span>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </article>
  </div>
</template>

<script>
export default {
  name: 'BlogPost',
  data() {
    return {
      blog: {},
      relatedPosts: [],
      loading: true,
      error: null,
      headings: []
    }
  },
  computed: {
    readingTime() {
      if (!this.blog.content) return 0
      const wordsPerMinute = 200
      const wordCount = this.blog.content.split(/\s+/).length
      return Math.ceil(wordCount / wordsPerMinute)
    },
    processedContent() {
      if (!this.blog.content) return ''
      
      // Process content for better display
      let content = this.blog.content
      
      // Convert markdown-style headers to HTML with IDs for TOC
      content = content.replace(/^(#{1,6})\s+(.+)$/gm, (match, hashes, title) => {
        const level = hashes.length
        const id = this.slugify(title)
        this.headings.push({ id, text: title, level })
        return `<h${level} id="${id}">${title}</h${level}>`
      })
      
      // Convert markdown-style bold and italic
      content = content.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
      content = content.replace(/\*(.*?)\*/g, '<em>$1</em>')
      
      // Convert line breaks
      content = content.replace(/\n/g, '<br>')
      
      return content
    }
  },
  async mounted() {
    const postId = this.$route.params.id
    await this.fetchBlogPost(postId)
    await this.fetchRelatedPosts()
  },
  methods: {
    async fetchBlogPost(postId) {
      this.loading = true
      this.error = null
      
      try {
        const response = await fetch(
          `https://www.api.dashify.aurbyn.com/api/v1/blogs/${postId}`,
          {
            headers: {
              'x-api-key': 'dfy_0fb730d3cfb489df6af421eed958df3b6a673e145a429c4a60bd26ccbc9718e8'
            }
          }
        )
        
        if (!response.ok) {
          if (response.status === 404) {
            throw new Error('Blog post not found')
          }
          throw new Error(`HTTP error! status: ${response.status}`)
        }
        
        const data = await response.json()
        
        if (data.success) {
          this.blog = {
            ...data.data,
            id: data.data._id || data.data.id,
            author: data.data.author?.name || 'Unknown Author',
            image: data.data.featured_image || (data.data.images && data.data.images[0]) || null
          }
        } else {
          throw new Error(data.message || 'Failed to fetch blog post')
        }
      } catch (err) {
        console.error('Error fetching blog post:', err)
        this.error = err.message
      } finally {
        this.loading = false
      }
    },
    
    async fetchRelatedPosts() {
      try {
        // Fetch a few more posts for related content
        const response = await fetch(
          `https://www.api.dashify.aurbyn.com/api/v1/blogs?limit=6`,
          {
            headers: {
              'x-api-key': 'dfy_0fb730d3cfb489df6af421eed958df3b6a673e145a429c4a60bd26ccbc9718e8'
            }
          }
        )
        
        if (response.ok) {
          const data = await response.json()
          if (data.success) {
            this.relatedPosts = data.data
              .filter(post => post._id !== this.blog.id)
              .map(post => ({
                ...post,
                id: post._id || post.id,
                author: post.author?.name || 'Unknown Author',
                image: post.featured_image || (post.images && post.images[0]) || null
              }))
          }
        }
      } catch (err) {
        console.error('Error fetching related posts:', err)
      }
    },
    
    formatDate(dateString) {
      const date = new Date(dateString)
      return date.toLocaleDateString('en-US', { 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric' 
      })
    },
    
    slugify(text) {
      return text
        .toLowerCase()
        .replace(/[^\w\s-]/g, '')
        .replace(/[\s_-]+/g, '-')
        .replace(/^-+|-+$/g, '')
    },
    
    scrollToSection(id) {
      const element = document.getElementById(id)
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
      }
    },
    
    shareToTwitter() {
      const url = encodeURIComponent(window.location.href)
      const title = encodeURIComponent(this.blog.title)
      window.open(`https://twitter.com/intent/tweet?text=${title}&url=${url}`, '_blank')
    },
    
    shareToLinkedIn() {
      const url = encodeURIComponent(window.location.href)
      window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${url}`, '_blank')
    },
    
    copyLink() {
      navigator.clipboard.writeText(window.location.href)
        .then(() => {
          // Show success feedback
          const button = event.target.closest('.share-button')
          const originalText = button.innerHTML
          button.innerHTML = '<span class="share-icon">✓</span> Copied!'
          setTimeout(() => {
            button.innerHTML = originalText
          }, 2000)
        })
        .catch(err => {
          console.error('Failed to copy link:', err)
        })
    },
    
    navigateToPost(postId) {
      this.$router.push(`/blog/${postId}`)
      // Reload the component with new data
      this.fetchBlogPost(postId)
      window.scrollTo({ top: 0, behavior: 'smooth' })
    },
    
    truncateText(text, maxLength) {
      if (!text) return ''
      if (text.length <= maxLength) return text
      return text.substr(0, maxLength) + '...'
    }
  }
}
</script>

<style scoped>
.blog-post {
  min-height: 100vh;
  padding: 40px 0;
  background-color: #fafafa;
}

/* Loading State */
.loading-container {
  text-align: center;
  padding: 100px 20px;
}

.loading-spinner {
  width: 50px;
  height: 50px;
  border: 4px solid #f3f3f3;
  border-top: 4px solid #3498db;
  border-radius: 50%;
  animation: spin 1s linear infinite;
  margin: 0 auto 20px;
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}

/* Error State */
.error-container {
  text-align: center;
  padding: 80px 20px;
  max-width: 600px;
  margin: 0 auto;
}

.error-icon {
  font-size: 4rem;
  margin-bottom: 20px;
}

.back-button {
  display: inline-block;
  background: #3498db;
  color: white;
  padding: 12px 24px;
  border-radius: 8px;
  text-decoration: none;
  font-weight: 500;
  transition: background 0.3s ease;
  margin-top: 20px;
}

.back-button:hover {
  background: #2980b9;
}

/* Post Container */
.post-container {
  max-width: 800px;
  margin: 0 auto;
  background: white;
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 10px 30px rgba(0,0,0,0.1);
}

/* Header */
.post-header {
  padding: 40px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
}

.breadcrumb {
  margin-bottom: 20px;
}

.breadcrumb-link {
  color: rgba(255,255,255,0.8);
  text-decoration: none;
  font-size: 0.9rem;
  transition: color 0.3s ease;
}

.breadcrumb-link:hover {
  color: white;
}

.post-title {
  font-size: 2.8rem;
  font-weight: 800;
  margin: 20px 0 30px;
  line-height: 1.2;
}

.post-meta {
  display: flex;
  flex-wrap: wrap;
  gap: 25px;
  margin-bottom: 25px;
  font-size: 1rem;
}

.meta-item {
  display: flex;
  align-items: center;
  gap: 8px;
}

.meta-icon {
  font-size: 1.2rem;
}

.post-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
}

.tag {
  background: rgba(255,255,255,0.2);
  padding: 6px 16px;
  border-radius: 20px;
  font-size: 0.9rem;
  backdrop-filter: blur(10px);
}

/* Featured Image */
.featured-image {
  width: 100%;
  height: 400px;
  overflow: hidden;
}

.featured-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

/* Table of Contents */
.table-of-contents {
  padding: 30px 40px;
  background: #f8f9fa;
  border-left: 4px solid #3498db;
}

.table-of-contents h3 {
  margin-top: 0;
  color: #333;
  font-size: 1.4rem;
}

.table-of-contents ul {
  list-style: none;
  padding: 0;
}

.table-of-contents li {
  margin: 12px 0;
}

.toc-1 { font-weight: 600; font-size: 1.1rem; }
.toc-2 { font-weight: 500; margin-left: 20px; }
.toc-3 { margin-left: 40px; color: #666; }

.table-of-contents a {
  text-decoration: none;
  color: #3498db;
  transition: color 0.3s ease;
}

.table-of-contents a:hover {
  color: #2980b9;
  text-decoration: underline;
}

/* Content */
.post-content {
  padding: 40px;
  line-height: 1.8;
  font-size: 1.1rem;
  color: #333;
}

.content-wrapper :deep(h1) {
  font-size: 2.2rem;
  margin: 30px 0 20px;
  color: #2c3e50;
  font-weight: 700;
}

.content-wrapper :deep(h2) {
  font-size: 1.8rem;
  margin: 25px 0 15px;
  color: #34495e;
  font-weight: 600;
}

.content-wrapper :deep(h3) {
  font-size: 1.5rem;
  margin: 20px 0 12px;
  color: #34495e;
  font-weight: 600;
}

.content-wrapper :deep(p) {
  margin: 15px 0;
  line-height: 1.8;
}

.content-wrapper :deep(strong) {
  font-weight: 600;
  color: #2c3e50;
}

.content-wrapper :deep(em) {
  font-style: italic;
  color: #7f8c8d;
}

/* Footer */
.post-footer {
  padding: 40px;
  border-top: 1px solid #eee;
  background: #f8f9fa;
}

.share-section {
  margin-bottom: 40px;
}

.share-section h3 {
  margin-top: 0;
  color: #333;
  font-size: 1.4rem;
}

.social-share {
  display: flex;
  gap: 15px;
  flex-wrap: wrap;
}

.share-button {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 12px 20px;
  border: none;
  border-radius: 8px;
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
}

.twitter {
  background: #1da1f2;
  color: white;
}

.linkedin {
  background: #0077b5;
  color: white;
}

.copy {
  background: #34495e;
  color: white;
}

.share-button:hover {
  transform: translateY(-2px);
  box-shadow: 0 5px 15px rgba(0,0,0,0.2);
}

.share-icon {
  font-size: 1.2rem;
}

/* Related Posts */
.related-posts h3 {
  color: #333;
  font-size: 1.4rem;
  margin-bottom: 25px;
}

.related-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 25px;
}

.related-card {
  background: white;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 5px 15px rgba(0,0,0,0.1);
  transition: transform 0.3s ease;
  cursor: pointer;
}

.related-card:hover {
  transform: translateY(-5px);
}

.related-image {
  height: 150px;
  overflow: hidden;
}

.related-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;
}

.related-card:hover .related-image img {
  transform: scale(1.05);
}

.related-content {
  padding: 20px;
}

.related-content h4 {
  margin: 0 0 10px;
  color: #2c3e50;
  font-size: 1.1rem;
  line-height: 1.3;
}

.related-content p {
  color: #7f8c8d;
  font-size: 0.9rem;
  margin: 0 0 15px;
  line-height: 1.5;
}

.related-date {
  color: #95a5a6;
  font-size: 0.85rem;
}

/* Responsive Design */
@media (max-width: 768px) {
  .blog-post {
    padding: 20px 0;
  }
  
  .post-header {
    padding: 30px 20px;
  }
  
  .post-title {
    font-size: 2.2rem;
  }
  
  .post-meta {
    flex-direction: column;
    gap: 15px;
  }
  
  .post-content, .post-footer {
    padding: 30px 20px;
  }
  
  .featured-image {
    height: 250px;
  }
  
  .social-share {
    flex-direction: column;
  }
  
  .share-button {
    justify-content: center;
  }
  
  .related-grid {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 480px) {
  .post-title {
    font-size: 1.8rem;
  }
  
  .content-wrapper :deep(h1) {
    font-size: 1.8rem;
  }
  
  .content-wrapper :deep(h2) {
    font-size: 1.5rem;
  }
  
  .content-wrapper :deep(h3) {
    font-size: 1.3rem;
  }
}
</style>