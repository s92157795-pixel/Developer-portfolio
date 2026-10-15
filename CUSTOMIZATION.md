# 🎨 Fast-Track Customization Guide (5 Minutes)

Welcome! This template is designed so you can launch your personal developer portfolio in under 5 minutes without writing complex code.

---

## ⚡ 5-Minute Checklist

### Step 1: Open `js/portfolio-config.js`
This single file controls your entire website. Edit the following sections:
- **`theme`**: Change `accentBlue`, `accentCyan`, etc., to match your favorite color scheme.
- **`meta` & `brand`**: Put your name, title, and bio keywords.
- **`hero`**: Update your headline, subtitle, and the interactive code window on the right.
- **`about`**: Add your personal story and 4 bento cards.
- **`skills`**: Add your languages, frameworks, and tools.
- **`projects`**: Add your flagship project title, live demo URL, and GitHub repository link.
- **`contact.socialLinks`**: Paste your LinkedIn, GitHub, WhatsApp, and email address.

### Step 2: Replace the Project Preview Image
1. Take a screenshot of your project (e.g. `1280x720` or `1920x1080`).
2. Save it to `assets/images/my-project.jpg` (or `.png`, `.webp`).
3. In `js/portfolio-config.js`, update:
   ```javascript
   projects: {
     featured: {
       image: "assets/images/my-project.jpg",
       imageAlt: "Preview of My Project"
     }
   }
   ```

### Step 3: Connect Your Contact Form (Optional)
By default, the contact form operates in **Demo Mode** with interactive feedback. To receive real emails:
- Sign up for free at [Formspree](https://formspree.io) or [Web3Forms](https://web3forms.com).
- In `js/portfolio-config.js`, change:
  ```javascript
  contact: {
    formProvider: "formspree",
    formspreeEndpoint: "https://formspree.io/f/YOUR_FORM_ID"
  }
  ```
  *(The template will automatically hide the demo banner when a real provider is set!)*

### Step 4: Preview & Build
```bash
npm run dev      # Test locally on http://localhost:5173
npm run build    # Compile production bundle into dist/
```

---

## 📁 Summary of Files to Edit

| What you want to change | File to edit | Notes |
| :--- | :--- | :--- |
| **All Content & Info** (Name, role, bio, skills, services, projects, links) | `js/portfolio-config.js` | 🌟 **Main file.** Everything syncs automatically. |
| **Theme Colors** (Primary accent, gradients, glows) | `js/portfolio-config.js` (`theme` section) OR `css/style.css` (`:root`) | Fast color changes via hex codes. |
| **Images** (Project screenshot, social preview) | `assets/images/` | Place images here and reference in `portfolio-config.js`. |
| **Direct HTML Layout** (Advanced structural modifications) | `index.html` | Semantic HTML5 structure with SEO meta tags. |
| **Custom CSS & Animations** | `css/style.css` | Glassmorphic design tokens, media queries, keyframe animations. |

---

## 🎨 Theme Colors Quick Reference

In `js/portfolio-config.js`:
```javascript
theme: {
  accentBlue: "#38bdf8",     // Main highlight & primary buttons
  accentCyan: "#00f2fe",     // Secondary gradient color
  accentIndigo: "#6366f1",   // Subtle ambient glow & canvas lines
  accentPurple: "#a855f7",   // Secondary highlights & text gradient
  accentEmerald: "#10b981",  // Availability status badge
  bgPrimary: "#08090d",      // Deep background canvas
  bgSecondary: "#0d1017",    // Secondary section containers
  bgCard: "rgba(16, 21, 31, 0.72)" // Glassmorphism cards
}
```
All buttons, glowing blobs, background canvas particles, and borders will instantly adopt your chosen colors!
