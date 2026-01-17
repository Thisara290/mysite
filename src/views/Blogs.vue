<template>
  <div class="blogs">
    <div class="container">
      <header class="page-header">
        <h1>My Blogs</h1>
        <p class="subtitle">Latest thoughts and insights</p>
      </header>

      <!-- Loading State -->
      <div v-if="loading" class="loading-container">
        <div class="loading-spinner"></div>
        <p>Loading blog posts...</p>
      </div>

      <!-- Error State - Show only if we have no blogs -->
      <div v-if="error && blogs.length === 0 && !loading" class="error-container">
        <div class="error-icon">⚠️</div>
        <h2>Unable to Load Blog Posts</h2>
        <p>{{ error }}</p>
        <button @click="fetchBlogs" class="retry-button">Try Again</button>
      </div>

      <!-- Blog Content -->
      <div v-else>
        <!-- Search and Filter Section -->
        <div class="blog-controls">
          <div class="search-box">
            <input 
              v-model="searchQuery" 
              @input="handleSearch"
              type="text" 
              placeholder="Search blog posts..."
              class="search-input"
            >
            <span class="search-icon">🔍</span>
          </div>
          
          <div class="filters">
            <select v-model="selectedTag" @change="filterByTag" class="tag-filter">
              <option value="">All Categories</option>
              <option v-for="tag in availableTags" :key="tag" :value="tag">
                {{ tag }}
              </option>
            </select>
          </div>
        </div>

        <!-- Blog Posts Grid -->
        <div class="blog-grid">
          <div 
            v-for="blog in filteredBlogs" 
            :key="blog.id" 
            class="blog-card"
          >
            <div class="blog-image" v-if="blog.image">
              <img :src="blog.image" :alt="blog.title" @error="handleImageError">
            </div>
            <div class="blog-image-placeholder" v-else>
              <div class="placeholder-content">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
                  <circle cx="8.5" cy="8.5" r="1.5"></circle>
                  <polyline points="21 15 16 10 5 21"></polyline>
                </svg>
                <span>No Image</span>
              </div>
            </div>
            <router-link :to="`/blog/${blog.id}`" class="blog-link">
              <div class="blog-content">
                <div class="blog-meta">
                  <span class="blog-date">{{ formatDate(blog.created_at) }}</span>
                  <span class="blog-author" v-if="blog.author">by {{ blog.author }}</span>
                </div>
                <h3 class="blog-title">{{ blog.title }}</h3>
              <p class="blog-excerpt">{{ truncateText(blog.content, 150) }}</p>
              <div class="blog-tags" v-if="blog.tags && blog.tags.length">
                <span 
                  v-for="tag in blog.tags.slice(0, 3)" 
                  :key="tag" 
                  class="tag"
                >
                  {{ tag }}
                </span>
              </div>
                <div class="blog-read-more">
                  Read More →
                </div>
              </div>
            </router-link>
          </div>
        </div>

        <!-- Pagination -->
        <div v-if="pagination.totalPages > 1" class="pagination">
          <button 
            @click="changePage(currentPage - 1)" 
            :disabled="currentPage === 1"
            class="pagination-btn"
          >
            ← Previous
          </button>
          
          <span class="pagination-info">
            Page {{ currentPage }} of {{ pagination.totalPages }}
          </span>
          
          <button 
            @click="changePage(currentPage + 1)" 
            :disabled="currentPage === pagination.totalPages"
            class="pagination-btn"
          >
            Next →
          </button>
        </div>

        <!-- No Results -->
        <div v-if="filteredBlogs.length === 0 && !loading && !error" class="no-results">
          <div class="no-results-icon">📭</div>
          <h3>No blog posts found</h3>
          <p v-if="searchQuery || selectedTag">Try adjusting your search or filter criteria</p>
          <p v-else>Check back soon for new blog posts!</p>
        </div>
        
        <!-- Show error message if we have blogs but there was an error loading more -->
        <div v-if="error && blogs.length > 0" class="error-banner">
          <div class="error-banner-content">
            <span class="error-banner-icon">⚠️</span>
            <span class="error-banner-text">{{ error }}</span>
            <button @click="fetchBlogs" class="error-banner-button">Retry</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Blogs',
  data() {
    return {
      blogs: [],
      loading: true,
      error: null,
      searchQuery: '',
      selectedTag: '',
      currentPage: 1,
      pagination: {
        page: 1,
        totalPages: 1,
        totalItems: 0,
        limit: 6
      },
      debounceTimer: null
    }
  },
  computed: {
    filteredBlogs() {
      let filtered = this.blogs
      
      // Apply search filter
      if (this.searchQuery) {
        const query = this.searchQuery.toLowerCase()
        filtered = filtered.filter(blog => 
          blog.title.toLowerCase().includes(query) ||
          blog.content.toLowerCase().includes(query) ||
          (blog.tags && blog.tags.some(tag => tag.toLowerCase().includes(query)))
        )
      }
      
      // Apply tag filter
      if (this.selectedTag) {
        filtered = filtered.filter(blog => 
          blog.tags && blog.tags.includes(this.selectedTag)
        )
      }
      
      return filtered
    },
    availableTags() {
      const tags = new Set()
      this.blogs.forEach(blog => {
        if (blog.tags) {
          blog.tags.forEach(tag => tags.add(tag))
        }
      })
      return Array.from(tags).sort()
    }
  },
  async mounted() {
    await this.fetchBlogs()
  },
  methods: {
    handleImageError(event) {
      // Hide broken image and show placeholder
      event.target.style.display = 'none'
      const placeholder = event.target.parentElement.querySelector('.blog-image-placeholder')
      if (placeholder) {
        placeholder.style.display = 'block'
      }
    },
    
    async fetchBlogs(page = 1) {
      this.loading = true
      this.error = null
      
      try {
        const response = await fetch(
          `https://www.api.dashify.aurbyn.com/api/v1/blogs?page=${page}&limit=${this.pagination.limit}`,
          {
            headers: {
              'x-api-key': 'dfy_0fb730d3cfb489df6af421eed958df3b6a673e145a429c4a60bd26ccbc9718e8',
              'Content-Type': 'application/json'
            }
          }
        )
        
        if (!response.ok) {
          const errorText = await response.text()
          let errorMessage = `HTTP error! status: ${response.status}`
          try {
            const errorData = JSON.parse(errorText)
            errorMessage = errorData.message || errorData.error || errorMessage
          } catch (e) {
            // If error response is not JSON, use the text or default message
            errorMessage = errorText || errorMessage
          }
          throw new Error(errorMessage)
        }
        
        const data = await response.json()
        
        // Handle different response formats
        let blogsData = []
        let paginationData = {}
        
        if (data.success && data.data) {
          // Format: { success: true, data: [...], pagination: {...} }
          blogsData = data.data
          paginationData = data.pagination || {}
        } else if (Array.isArray(data)) {
          // Format: [...] (direct array)
          blogsData = data
        } else if (data.data && Array.isArray(data.data)) {
          // Format: { data: [...] }
          blogsData = data.data
          paginationData = data.pagination || {}
        } else if (data.blogs && Array.isArray(data.blogs)) {
          // Format: { blogs: [...] }
          blogsData = data.blogs
          paginationData = data.pagination || {}
        } else {
          throw new Error('Unexpected API response format')
        }
        
        // Process blogs
        this.blogs = blogsData.map(blog => {
          // Extract image URL from various possible sources
          let imageUrl = null
          if (blog.featured_image) {
            imageUrl = blog.featured_image
          } else if (blog.images && blog.images.length > 0) {
            imageUrl = Array.isArray(blog.images) ? blog.images[0] : blog.images
          } else if (blog.image) {
            imageUrl = blog.image
          } else if (blog.thumbnail) {
            imageUrl = blog.thumbnail
          }
          
          // Ensure image URL is a string and not empty
          if (imageUrl && typeof imageUrl === 'string' && imageUrl.trim() !== '') {
            // If it's a relative URL, make it absolute
            if (!imageUrl.startsWith('http') && !imageUrl.startsWith('//')) {
              imageUrl = imageUrl.startsWith('/') ? imageUrl : '/' + imageUrl
            }
          } else {
            imageUrl = null
          }
          
          // Extract date from multiple possible fields
          let dateField = blog.created_at || blog.createdAt || blog.date || 
                         blog.published_at || blog.publishedAt || 
                         blog.updated_at || blog.updatedAt || 
                         blog.publish_date || blog.publishDate ||
                         null
          
          // If no date found, use current date as fallback
          if (!dateField) {
            dateField = new Date().toISOString()
          }
          
          return {
            ...blog,
            id: blog._id || blog.id,
            author: blog.author?.name || blog.author || 'Unknown Author',
            image: imageUrl,
            created_at: dateField
          }
        })
        
        // Set pagination
        this.pagination = {
          ...this.pagination,
          page: paginationData.page || page,
          totalPages: paginationData.totalPages || Math.ceil((paginationData.total || blogsData.length) / this.pagination.limit),
          totalItems: paginationData.total || blogsData.length
        }
        
        this.currentPage = page
        
        // If no blogs found, don't show error, just show empty state
        if (this.blogs.length === 0) {
          console.log('No blogs found')
        }
        
      } catch (err) {
        console.error('Error fetching blogs:', err)
        // More user-friendly error messages
        if (err.message.includes('Failed to fetch') || err.message.includes('NetworkError')) {
          this.error = 'Network error: Unable to connect to the blog server. Please check your internet connection and try again.'
        } else if (err.message.includes('CORS')) {
          this.error = 'CORS error: The blog server is blocking requests from this domain. Please contact the administrator.'
        } else if (err.message.includes('401') || err.message.includes('403')) {
          this.error = 'Authentication error: Invalid API key or insufficient permissions.'
        } else {
          this.error = err.message || 'Failed to load blog posts. Please try again later.'
        }
        
        // Set empty blogs array on error so we can still show the page structure
        this.blogs = []
      } finally {
        this.loading = false
      }
    },
    
    handleSearch() {
      clearTimeout(this.debounceTimer)
      this.debounceTimer = setTimeout(() => {
        // Reset to first page when searching
        this.currentPage = 1
      }, 300)
    },
    
    filterByTag() {
      // Reset to first page when filtering
      this.currentPage = 1
    },
    
    async changePage(newPage) {
      if (newPage >= 1 && newPage <= this.pagination.totalPages) {
        await this.fetchBlogs(newPage)
        window.scrollTo({ top: 0, behavior: 'smooth' })
      }
    },
    

    
    formatDate(dateString) {
      if (!dateString) {
        // Return current date as fallback
        return new Date().toLocaleDateString('en-US', { 
          year: 'numeric', 
          month: 'long', 
          day: 'numeric' 
        })
      }
      
      const date = new Date(dateString)
      
      // Check if date is valid
      if (isNaN(date.getTime())) {
        // Return current date as fallback if invalid
        return new Date().toLocaleDateString('en-US', { 
          year: 'numeric', 
          month: 'long', 
          day: 'numeric' 
        })
      }
      
      try {
        return date.toLocaleDateString('en-US', { 
          year: 'numeric', 
          month: 'long', 
          day: 'numeric' 
        })
      } catch (error) {
        console.error('Error formatting date:', error)
        // Return current date as fallback on error
        return new Date().toLocaleDateString('en-US', { 
          year: 'numeric', 
          month: 'long', 
          day: 'numeric' 
        })
      }
    },
    
    truncateText(text, maxLength) {
      if (!text) return ''
      
      // Strip HTML tags from the content
      const strippedText = text.replace(/<[^>]*>/g, '').replace(/&nbsp;/g, ' ').trim()
      
      if (strippedText.length <= maxLength) return strippedText
      return strippedText.substr(0, maxLength) + '...'
    }
  }
}
</script>

<style scoped>
.blogs {
  min-height: 100vh;
  padding: 80px 0;
  background-color: #fafafa;
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
  font-weight: 300;
}

/* Loading State */
.loading-container {
  text-align: center;
  padding: 80px 20px;
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
  padding: 60px 20px;
  background: #fff5f5;
  border-radius: 15px;
  max-width: 600px;
  margin: 0 auto 40px;
  border: 1px solid #fed7d7;
}

.error-banner {
  background: #fff5f5;
  border: 1px solid #fed7d7;
  border-radius: 10px;
  padding: 15px 20px;
  margin-top: 30px;
}

.error-banner-content {
  display: flex;
  align-items: center;
  gap: 12px;
  flex-wrap: wrap;
}

.error-banner-icon {
  font-size: 1.2rem;
}

.error-banner-text {
  flex: 1;
  color: #c53030;
  font-size: 0.95rem;
}

.error-banner-button {
  background: #c53030;
  color: white;
  border: none;
  padding: 8px 16px;
  border-radius: 6px;
  cursor: pointer;
  font-size: 0.9rem;
  transition: background 0.3s ease;
}

.error-banner-button:hover {
  background: #9b2c2c;
}

.error-icon {
  font-size: 3rem;
  margin-bottom: 20px;
}

.error-container h2 {
  color: #c53030;
  margin-bottom: 15px;
}

.retry-button {
  background: #c53030;
  color: white;
  border: none;
  padding: 12px 24px;
  border-radius: 8px;
  cursor: pointer;
  font-size: 1rem;
  transition: background 0.3s ease;
}

.retry-button:hover {
  background: #9b2c2c;
}

/* Controls */
.blog-controls {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 40px;
  flex-wrap: wrap;
  gap: 20px;
}

.search-box {
  position: relative;
  flex: 1;
  max-width: 400px;
}

.search-input {
  width: 100%;
  padding: 12px 20px 12px 45px;
  border: 2px solid #e2e8f0;
  border-radius: 30px;
  font-size: 1rem;
  outline: none;
  transition: border-color 0.3s ease;
}

.search-input:focus {
  border-color: #3498db;
}

.search-icon {
  position: absolute;
  left: 15px;
  top: 50%;
  transform: translateY(-50%);
  font-size: 1.2rem;
}

.tag-filter {
  padding: 10px 20px;
  border: 2px solid #e2e8f0;
  border-radius: 25px;
  background: white;
  font-size: 1rem;
  outline: none;
  cursor: pointer;
  transition: border-color 0.3s ease;
}

.tag-filter:focus {
  border-color: #3498db;
}

/* Blog Grid */
.blog-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  gap: 30px;
  margin-bottom: 50px;
}

.blog-card {
  background: white;
  border-radius: 15px;
  overflow: hidden;
  box-shadow: 0 5px 20px rgba(0,0,0,0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.blog-link {
  text-decoration: none;
  color: inherit;
  display: block;
  cursor: pointer;
}

.blog-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 30px rgba(0,0,0,0.15);
}

.blog-link:hover {
  text-decoration: none;
}

.blog-image {
  height: 200px;
  overflow: hidden;
  position: relative;
  background: #f8f9fa;
}

.blog-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;
  display: block;
}

.blog-card:hover .blog-image img {
  transform: scale(1.05);
}

.blog-image-placeholder {
  height: 200px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
}

.placeholder-content {
  text-align: center;
  color: #adb5bd;
}

.placeholder-content svg {
  margin-bottom: 10px;
}

.placeholder-content span {
  display: block;
  font-size: 0.9rem;
  font-weight: 500;
}

.blog-content {
  padding: 25px;
}

.blog-meta {
  display: flex;
  justify-content: space-between;
  margin-bottom: 15px;
  font-size: 0.9rem;
  color: #718096;
}

.blog-date, .blog-author {
  font-weight: 500;
}

.blog-title {
  font-size: 1.5rem;
  font-weight: 700;
  color: #2d3748;
  margin-bottom: 15px;
  line-height: 1.3;
}

.blog-excerpt {
  color: #4a5568;
  line-height: 1.6;
  margin-bottom: 20px;
}

.blog-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-bottom: 20px;
}

.tag {
  background: #ebf8ff;
  color: #3182ce;
  padding: 5px 12px;
  border-radius: 20px;
  font-size: 0.85rem;
  font-weight: 500;
}

.blog-read-more {
  color: #3498db;
  font-weight: 600;
  font-size: 1rem;
  transition: color 0.3s ease;
}

.blog-card:hover .blog-read-more {
  color: #2980b9;
}

/* Pagination */
.pagination {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  margin-top: 40px;
}

.pagination-btn {
  background: #3498db;
  color: white;
  border: none;
  padding: 12px 24px;
  border-radius: 8px;
  cursor: pointer;
  font-size: 1rem;
  transition: background 0.3s ease;
}

.pagination-btn:hover:not(:disabled) {
  background: #2980b9;
}

.pagination-btn:disabled {
  background: #cbd5e0;
  cursor: not-allowed;
}

.pagination-info {
  font-size: 1.1rem;
  color: #4a5568;
  font-weight: 500;
}

/* No Results */
.no-results {
  text-align: center;
  padding: 80px 20px;
}

.no-results-icon {
  font-size: 4rem;
  margin-bottom: 20px;
}

.no-results h3 {
  color: #4a5568;
  margin-bottom: 15px;
}

.no-results p {
  color: #718096;
  font-size: 1.1rem;
}

/* Responsive Design */
@media (max-width: 768px) {
  .page-header h1 {
    font-size: 2.5rem;
  }
  
  .blog-controls {
    flex-direction: column;
    align-items: stretch;
  }
  
  .search-box {
    max-width: 100%;
  }
  
  .blog-grid {
    grid-template-columns: 1fr;
    gap: 25px;
  }
  
  .pagination {
    flex-direction: column;
    gap: 15px;
  }
  
  .blog-meta {
    flex-direction: column;
    gap: 5px;
  }
}

@media (max-width: 480px) {
  .blogs {
    padding: 60px 0;
  }
  
  .container {
    padding: 0 15px;
  }
  
  .page-header h1 {
    font-size: 2rem;
  }
  
  .subtitle {
    font-size: 1.1rem;
  }
  
  .blog-content {
    padding: 20px;
  }
  
  .blog-title {
    font-size: 1.3rem;
  }
}
</style>