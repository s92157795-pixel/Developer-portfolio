# 🚀 Developer Portfolio Website Template

A modern, high-performance, and visually captivating **Developer Portfolio Website Template** designed for software engineers, full-stack developers, and creative technologists. Built with **Vite**, **Semantic HTML5**, **Custom Modern CSS3**, and **Modular ES6+ JavaScript**.

---

## ✨ Features & Highlights

- **⚡ Lightning Fast & Lightweight:** Built on Vite with near-instant hot module replacement and lightweight production bundles (zero heavy framework overhead).
- **🎨 Glassmorphic Dark UI:** Ultra-modern dark theme with subtle gradients, ambient glows, and clean typography (*Outfit*, *Plus Jakarta Sans*, *JetBrains Mono*).
- **🌌 Interactive Particle Canvas:** Responsive, hardware-accelerated ambient particle grid with gentle mouse magnetism.
- **🧊 3D Tilt Card Physics:** Realistic perspective tilting on the interactive hero code card, bento cards, and project showcase.
- **📱 100% Mobile Responsive:** Fluid layouts engineered and tested across ultra-wide monitors, laptops, tablets, and mobile devices without horizontal overflow.
- **🎯 ScrollSpy Navigation:** Dynamic sticky navbar with blur backdrop and automatic active section tracking.
- **⚙️ 100% Centralized Configuration (`js/portfolio-config.js`):** Customize your entire portfolio—identity, theme colors, skills, projects, services, social links, and contact options—from a single file.
- **🎨 Configurable Theme Palette:** Change your entire site's primary and secondary accent colors with one line in `portfolio-config.js` or via CSS variables.
- **📬 Multi-Provider Contact Form:**
  - **Demo Mode (Default):** Built-in client-side validation and toast notification with transparent demo indicator.
  - **Formspree Integration:** Easily connect your free Formspree endpoint to receive real email submissions.
  - **Web3Forms Integration:** Optional instant email delivery without any server backend.
- **📋 Click-to-Copy Placeholders:** Smart clipboard interaction for email address and social handles with toast feedback.
- **🔒 Zero Secrets Stored:** Safe for public GitHub repositories and client-side deployments.

---

## 📁 Project Structure

```text
developer-portfolio/
├── assets/
│   └── images/
│       └── project-preview.jpg    # Flagship project preview mockup (replace with your own)
├── css/
│   └── style.css                 # Modular CSS design system, variables & responsive styling
├── js/
│   ├── main.js                   # Interactive logic, animations, renderers, and form handler
│   └── portfolio-config.js       # 🌟 Centralized customization configuration
├── index.html                    # Semantic HTML5 base layout & SEO metadata
├── package.json                  # Scripts and Vite dev dependency
├── CUSTOMIZATION.md              # Fast-track 5-minute customization guide
├── .gitignore                    # Standard git exclusions (node_modules, dist, etc.)
└── README.md                     # Complete product manual & setup guide
```

---

## 🛠️ Prerequisites

Ensure you have the following installed on your machine:
- **Node.js:** v18.0.0 or later (Recommended: LTS v20+)
- **npm:** v9.0.0 or later (included with Node.js)

Verify your installation:
```bash
node -v
npm -v
```

---

## 🚀 Quick Start (Running Locally)

1. **Extract or Open the Folder:**
   ```bash
   cd "developer-portfolio"
   ```

2. **Install Dependencies:**
   ```bash
   npm install
   ```

3. **Start the Development Server:**
   ```bash
   npm run dev
   ```
   Open your browser at the local URL shown in your terminal (typically `http://localhost:5173`).

4. **Build for Production:**
   ```bash
   npm run build
   ```
   The production-ready bundle will be created in the [`dist/`](file:///c:/Users/shiv/Downloads/Developer-portfolio-Template.zip/Developer-portfolio/dist) directory.

---

## 🎨 Complete Customization Guide

You can customize this entire portfolio from **`js/portfolio-config.js`**. Every section on the page is automatically rendered and hydrated from this single configuration file.

### 1. Theme Colors & Accents (`theme`)
Change the color palette of the entire portfolio by modifying hex codes in `theme`:
```javascript
theme: {
  accentBlue: "#38bdf8",     // Primary highlight, buttons, links
  accentCyan: "#00f2fe",     // Secondary gradient color, tech badges
  accentIndigo: "#6366f1",   // Subtle ambient canvas glow
  accentPurple: "#a855f7",   // Secondary highlights, gradient text
  accentEmerald: "#10b981",  // Status pill & WhatsApp badge
  bgPrimary: "#08090d",      // Deep background canvas
  bgSecondary: "#0d1017",    // Secondary section containers
  bgCard: "rgba(16, 21, 31, 0.72)" // Glassmorphism cards
}
```
> [!TIP]
> Changing these values automatically updates buttons, gradients, glowing effects, and background canvas particle colors. You can also edit CSS variables directly in [`css/style.css`](file:///c:/Users/shiv/Downloads/Developer-portfolio-Template.zip/Developer-portfolio/css/style.css).

### 2. Personal Details, SEO & Branding (`meta` & `brand`)
```javascript
meta: {
  siteTitle: "Your Name | Full Stack Web Developer",
  description: "Portfolio of Your Name, building modern web experiences.",
  keywords: "Your Name, Full Stack Developer, React, Portfolio",
  author: "Your Name",
  previewImage: "assets/images/project-preview.jpg"
},
brand: {
  name: "Your Name",
  logoPrefix: "<",
  logoSuffix: "/>",
  ctaText: "Contact Me"
}
```

### 3. Hero Section & Interactive Code Card (`hero`)
Customize your headline, roles, and the 3D code window on the right:
```javascript
hero: {
  statusBadge: "Available for Web Development Projects",
  name: "Your Name",
  role: "Full Stack Web Developer",
  description: "I build modern, responsive and interactive websites...",
  primaryCta: { text: "View My Projects", href: "#projects" },
  secondaryCta: { text: "Contact Me", href: "#contact" },
  highlights: [
    { value: "3+ Years", label: "Dev & Engineering Foundations" },
    { value: "MERN Stack", label: "Full Stack Architecture" },
    { value: "100%", label: "Responsive & Device Adaptive" }
  ],
  codeCard: {
    fileName: "developer.ts",
    language: "TypeScript",
    codeLines: {
      name: "Your Name",
      role: "Full Stack Web Developer",
      education: "B.S. in Computer Science",
      coreStack: ["React", "Node.js", "Express", "MongoDB", "JavaScript"]
    }
  }
}
```

### 4. About Me & Bento Cards (`about`)
Update your biography narrative paragraphs and the 4 highlight bento cards:
```javascript
about: {
  tag: "Identity & Background",
  title: "About Me",
  subtitle: "A genuine look at my development journey...",
  badgeHeader: "Your Name — Full Stack Web Developer & Software Engineer",
  narrative: [
    "Your background story, philosophy, and experience...",
    "Your technical focus and working style..."
  ],
  bentoCards: [
    { icon: "🎓", title: "Education", value: "B.S. in Computer Science", description: "Your degree or bootcamp..." },
    { icon: "💻", title: "Focus", value: "Web Development", description: "Your core specialty..." },
    { icon: "🤖", title: "Workflow", value: "Modern Dev Tooling", description: "How you build and ship..." },
    { icon: "📱", title: "Design", value: "Mobile First & Responsive", description: "Your UI approach..." }
  ]
}
```

### 5. Technical Skills (`skills`)
Add, edit, or remove categories and skills. Each skill accepts a name, badge, and accent color:
```javascript
skills: {
  categories: [
    {
      title: "Frontend",
      subtitle: "Client-Side Architecture",
      icon: "🎨",
      items: [
        { name: "HTML", badge: "Semantic Web", color: "#E34F26" },
        { name: "CSS", badge: "Flex, Grid, Modern UI", color: "#1572B6" },
        { name: "JavaScript", badge: "ES6+, DOM & Events", color: "#F7DF1E" },
        { name: "React", badge: "Components & State", color: "#61DAFB" },
        { name: "TypeScript", badge: "Type Safety", color: "#3178C6" }
      ]
    }
  ]
}
```

### 6. Featured Project Showcase (`projects`)
Showcase your flagship project with live demo and GitHub source code buttons:
```javascript
projects: {
  featured: {
    badgeTag: "Featured Project • Live Deployment",
    name: "Your Project Name",
    description: "Detailed summary of what the project does...",
    browserUrl: "https://your-project.example.com",
    liveDemoUrl: "https://your-project.example.com",
    sourceCodeUrl: "https://github.com/yourusername/project", // Set to "" to hide
    image: "assets/images/project-preview.jpg",
    features: [
      "Fully responsive design",
      "Authentication & protected routes",
      "RESTful API integration"
    ],
    techTags: ["React", "Node.js", "Express", "MongoDB", "Tailwind CSS"]
  }
}
```

### 7. Services / What I Can Build (`services`)
Edit the cards describing your capabilities:
```javascript
services: {
  items: [
    {
      icon: "🌐",
      title: "Responsive Websites",
      description: "Modern websites that work seamlessly across desktop, tablet, and mobile."
    },
    {
      icon: "⚡",
      title: "Interactive Web Experiences",
      description: "Smooth animations, micro-interactions, dynamic states, and modern UI."
    }
  ]
}
```

### 8. Development Approach (`approach`)
Customize your 6-step workflow and AI integration card:
```javascript
approach: {
  steps: [
    { number: "01", title: "Understand the Idea", description: "Clarify project goals and user flows." },
    { number: "02", title: "Design the UI", description: "Plan user interface and components." },
    { number: "03", title: "Develop the Website", description: "Write clean, semantic code." }
  ],
  aiCard: {
    icon: "🤖",
    title: "Development Workflow & AI Integration",
    description: "How you leverage modern developer tools..."
  }
}
```

---

## 🖼️ How to Replace Images

1. **Project Preview Mockup:**
   - Take a screenshot or mockup of your website/app (recommended aspect ratio: `16:9` or `16:10`, approx. `1280x720` or `1920x1080`).
   - Save your image inside `assets/images/` (e.g., `assets/images/my-project.jpg` or `.png`, `.webp`).
   - Open `js/portfolio-config.js` and set:
     ```javascript
     projects: {
       featured: {
         image: "assets/images/my-project.jpg",
         imageAlt: "Preview of My Project"
       }
     }
     ```
2. **Social Media Preview Image (Open Graph):**
   - In `js/portfolio-config.js`, set `meta.previewImage` to your image path (e.g. `assets/images/my-project.jpg`).

---

## 🔗 How to Update Links & Social Handles

In `js/portfolio-config.js`, locate `contact.socialLinks`:
```javascript
socialLinks: {
  whatsapp: {
    url: "https://wa.me/1234567890?text=Hi%2C%20I%20saw%20your%20portfolio!",
    badge: "Chat on WhatsApp ↗"
  },
  linkedin: {
    url: "https://www.linkedin.com/in/yourusername",
    badge: "Connect ↗"
  },
  email: {
    address: "your.email@example.com",
    badge: "Copy Email"
  },
  github: {
    url: "https://github.com/yourusername",
    badge: "Follow ↗"
  },
  instagram: {
    url: "https://instagram.com/yourusername",
    badge: "Follow ↗"
  }
}
```
- **Unconfigured Links:** If a link is left as `"#"`, clicking it will display a helpful toast notification without triggering broken page errors.
- **Floating WhatsApp Button:** Set `contact.floatingWhatsApp.enabled = true` and add your WhatsApp link to display a sticky floating button at the bottom-right of the screen.

---

## 📬 Contact Form Configuration (Demo vs Real Email)

The template comes pre-configured with a **Demo Mode** that validates input and shows feedback without sending emails. When you are ready to receive real messages:

### Option A: Formspree (Recommended, Free)
1. Go to [https://formspree.io](https://formspree.io) and register for a free account.
2. Create a new form and copy your Form ID (e.g., `xpzbgwqe`).
3. In `js/portfolio-config.js`:
   ```javascript
   contact: {
     formProvider: "formspree",
     formspreeEndpoint: "https://formspree.io/f/YOUR_FORM_ID"
   }
   ```
4. The template will automatically hide the demo banner and route all submissions directly to your email.

### Option B: Web3Forms (Instant, No Backend)
1. Go to [https://web3forms.com](https://web3forms.com) and generate a free access key.
2. In `js/portfolio-config.js`:
   ```javascript
   contact: {
     formProvider: "web3forms",
     web3formsAccessKey: "YOUR_ACCESS_KEY"
   }
   ```

---

## 🚀 Deployment Guide

### Deploying to Vercel (Recommended)
1. Push your project to a GitHub repository.
2. Log into [Vercel](https://vercel.com) and click **"Add New Project"**.
3. Import your repository. Vercel automatically detects Vite:
   - **Framework Preset:** Vite
   - **Build Command:** `npm run build`
   - **Output Directory:** `dist`
4. Click **Deploy**. Your portfolio is live with free SSL!

### Deploying to Netlify
1. Connect your repository on [Netlify](https://netlify.com).
2. Set **Build command** to `npm run build` and **Publish directory** to `dist`.
3. Click **Deploy Site**.

### Deploying to GitHub Pages
1. In `package.json`, add `"homepage": "https://<username>.github.io/<repo-name>"` if needed.
2. Run `npm run build` and publish the `dist` directory to the `gh-pages` branch.

---

## 🔒 Security Best Practices
- **Zero Exposed Secrets:** Never put database passwords or private API keys in client-side code.
- Public client form endpoints (Formspree / Web3Forms) are designed for frontend static sites and do not expose private credentials.

---

## 📄 License & Credits
- Design System: Custom Glassmorphic Dark UI
- Fonts: [Google Fonts](https://fonts.google.com/) (Outfit, Plus Jakarta Sans, JetBrains Mono)
- Icons: Semantic SVG Vector Icons
