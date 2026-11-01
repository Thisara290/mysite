# Project Deployment & Infrastructure Details

> [!NOTE]
> This file contains administrative records for the domain, hosting, and third-party services powering this website.

---

## 🌐 Domain Configuration
* **Domain Name:** `thisaragunasekara.com`
* **Registrar:** [Namecheap](https://www.namecheap.com/)
* **Account / Login Email:** `thisaragunasekara69@gmail.com`
* **DNS Settings:** Points to Render's custom domain DNS targets.

---

## 🚀 Web Hosting
* **Hosting Provider:** [Render](https://render.com/)
* **Service Type:** Static Site
* **Account / Login Email:** `thisaragunasekara69@gmail.com`
* **Connected Repository:** `https://github.com/Thisara290/mysite` (Branch: `main`)
* **Build Command:** `npm run build`
* **Publish Directory:** `dist`

### Render SPA Routing Rule
To prevent 404 errors when refreshing Vue Router pages (like `/about`, `/projects`, `/blogs`):
* In **Render Dashboard** → **Redirects/Rewrites**:
  * **Type:** `Rewrite`
  * **Source:** `/*`
  * **Destination:** `/index.html`

---

## 📊 Analytics & Services
* **Google Analytics:** `G-6K32310PC7`
* **Dashify Analytics:** Configured in `index.html` (Website ID: `site_b838c6bc7df84597`)
* **Media / Images:** Cloudinary

