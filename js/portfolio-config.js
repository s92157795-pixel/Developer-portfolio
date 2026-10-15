/**
 * ==============================================================================
 * DEVELOPER PORTFOLIO TEMPLATE — CENTRAL CONFIGURATION
 * ==============================================================================
 * Customize your entire portfolio from this single configuration file!
 *
 * Simply edit the values below with your own details, colors, and links.
 * The template will automatically populate and render them across the website.
 * ==============================================================================
 */

export const portfolioConfig = {
  // ============================================================================
  // 1. THEME COLORS & ACCENTS
  // ============================================================================
  // Customize the website's color theme directly from here!
  // Any color changes here automatically update the site's CSS variables,
  // gradients, glows, and interactive canvas particles.
  theme: {
    accentBlue: "#38bdf8",     // Primary brand highlight, button glow, links
    accentCyan: "#00f2fe",     // Secondary gradient color, tech badges
    accentIndigo: "#6366f1",   // Ambient canvas glow, card borders
    accentPurple: "#a855f7",   // Secondary highlights, gradient text finish
    accentEmerald: "#10b981",  // Availability status badge, WhatsApp accent
    bgPrimary: "#08090d",      // Deep background canvas
    bgSecondary: "#0d1017",    // Secondary section containers
    bgCard: "rgba(16, 21, 31, 0.72)" // Glassmorphism cards surface
  },

  // ============================================================================
  // 2. GENERAL & SEO METADATA
  // ============================================================================
  // These tags control search engine indexing and social media preview cards.
  meta: {
    siteTitle: "Alex Morgan | Full Stack Web Developer & UI Engineer",
    description: "Portfolio of Alex Morgan, a Full Stack Web Developer specializing in modern, responsive, and interactive web applications.",
    keywords: "Alex Morgan, Full Stack Developer, Web Developer Portfolio, React, Node.js, Express, JavaScript, Modern UI",
    author: "Alex Morgan",
    previewImage: "assets/images/project-preview.jpg"
  },

  // ============================================================================
  // 3. BRAND & NAVIGATION BAR
  // ============================================================================
  brand: {
    name: "Alex Morgan",
    logoPrefix: "<",
    logoSuffix: "/>",
    ctaText: "Contact Me"
  },

  // ============================================================================
  // 4. HERO SECTION
  // ============================================================================
  hero: {
    statusBadge: "Available for Web Development Projects",
    greeting: "Hi, I'm",
    name: "Alex Morgan",
    role: "Full Stack Web Developer",
    description: "I build modern, responsive and interactive websites with clean design and powerful functionality.",
    primaryCta: {
      text: "View My Projects",
      href: "#projects"
    },
    secondaryCta: {
      text: "Contact Me",
      href: "#contact"
    },
    highlights: [
      { value: "3+ Years", label: "Dev & Engineering Foundations" },
      { value: "MERN Stack", label: "Full Stack Architecture" },
      { value: "100%", label: "Responsive & Device Adaptive" }
    ],
    // Interactive 3D Code Window Card (Right column in Hero)
    codeCard: {
      fileName: "developer.ts",
      language: "TypeScript",
      codeLines: {
        name: "Alex Morgan",
        role: "Full Stack Web Developer",
        education: "B.S. in Computer Science",
        coreStack: ["React", "Node.js", "Express", "MongoDB", "JavaScript"],
        focus: "Responsive, Modern & Interactive",
        aiAssistedWorkflow: true,
        passion: "Building impactful web experiences"
      }
    }
  },

  // ============================================================================
  // 5. ABOUT SECTION & BENTO CARDS
  // ============================================================================
  about: {
    tag: "Identity & Background",
    title: "About Me",
    subtitle: "A genuine look at my development journey, academic path, and core philosophy.",
    badgeHeader: "Alex Morgan — Full Stack Web Developer & Software Engineer",
    narrative: [
      "Hi, I'm Alex Morgan, a web developer passionate about building scalable, user-centric applications. I design and develop modern websites that work smoothly across devices, combining robust backend architecture with polished frontend experiences.",
      "I also leverage modern AI tools and automated workflows to accelerate prototyping, optimize performance, and refine code quality. My goal is to build digital products that combine clean software logic with memorable visual polish."
    ],
    // Bento Feature Cards Grid (4 Highlight Badges)
    bentoCards: [
      {
        icon: "🎓",
        title: "Education",
        value: "B.S. in Computer Science",
        description: "Building strong computer science foundations, algorithms, and systems engineering concepts."
      },
      {
        icon: "💻",
        title: "Focus",
        value: "Web Development",
        description: "Hands-on creation of modern frontend interfaces and scalable backend server logic."
      },
      {
        icon: "🤖",
        title: "Workflow",
        value: "Dev + AI-Assisted Creativity",
        description: "Leveraging modern AI tools as productivity boosters to rapidly prototype and refine UX."
      },
      {
        icon: "📱",
        title: "Focus",
        value: "Responsive & Mobile First",
        description: "Crafting pixel-perfect layouts designed to feel fluid on mobile, tablet, and ultra-wide screens."
      }
    ]
  },

  // ============================================================================
  // 6. TECHNICAL SKILLS
  // ============================================================================
  skills: {
    tag: "Technical Toolkit",
    title: "My Skills",
    subtitle: "Practical tools and technologies I use for Full Stack Web Development.",
    categories: [
      {
        title: "Frontend",
        subtitle: "Client-Side Architecture",
        icon: "🎨",
        items: [
          { name: "HTML", badge: "Semantic Web", color: "#E34F26" },
          { name: "CSS", badge: "Flex, Grid, Modern UI", color: "#1572B6" },
          { name: "JavaScript", badge: "ES6+, DOM & Events", color: "#F7DF1E" },
          { name: "React", badge: "Components & State", color: "#61DAFB" }
        ]
      },
      {
        title: "Backend",
        subtitle: "Server & APIs",
        icon: "⚙️",
        items: [
          { name: "Node.js", badge: "Runtime & Async", color: "#339933" },
          { name: "Express.js", badge: "RESTful APIs & Routes", color: "#FFFFFF" },
          { name: "Full Stack Architecture", badge: "Integration & Routing", color: "#38BDF8" }
        ]
      },
      {
        title: "Database",
        subtitle: "Data Persistence",
        icon: "🗄️",
        items: [
          { name: "MongoDB", badge: "NoSQL, Collections, Mongoose", color: "#47A248" },
          { name: "Data Models", badge: "CRUD & Schemas", color: "#A855F7" }
        ]
      }
    ]
  },

  // ============================================================================
  // 7. FEATURED PROJECT SHOWCASE
  // ============================================================================
  projects: {
    tag: "Flagship Showcase",
    title: "Featured Project",
    subtitle: "A real-world full-featured web application demonstrating practical engineering and interactive UI.",
    featured: {
      badgeTag: "Featured Project • Live Deployment",
      name: "Velocity — SaaS Analytics & E-Commerce Platform",
      description: "A modern 3D and fully responsive web application with interactive data dashboards, real-world ordering, authentication, and live metrics visualization.",
      browserUrl: "https://velocity-demo.example.com",
      liveDemoUrl: "https://example.com/demo",
      sourceCodeUrl: "https://github.com/yourusername/demo-project", // Set to "" or "#" to hide source code button
      image: "assets/images/project-preview.jpg",
      imageAlt: "Velocity SaaS responsive website preview and interface mockup",
      features: [
        "Fully responsive design",
        "3D / interactive visual experience",
        "OTP verification",
        "Payment verification",
        "Location / map integration",
        "Order tracking",
        "Online ordering workflow",
        "Mobile-friendly interface",
        "Modern UI/UX"
      ],
      techTags: [
        "HTML5",
        "CSS3 / Tailwind",
        "JavaScript (ES6+)",
        "React",
        "REST API",
        "Interactive Canvas 3D"
      ]
    }
  },

  // ============================================================================
  // 8. SERVICES / WHAT I CAN BUILD
  // ============================================================================
  services: {
    tag: "Capabilities",
    title: "What I Can Build",
    subtitle: "Practical, reliable web solutions engineered with clean structure and modern styling.",
    items: [
      {
        icon: "🌐",
        title: "Responsive Websites",
        description: "Modern websites that work seamlessly across desktop, tablet, and mobile with fluid grids and responsive media."
      },
      {
        icon: "⚡",
        title: "Interactive Web Experiences",
        description: "Smooth animations, micro-interactions, dynamic states, and modern UI that captivate users."
      },
      {
        icon: "🛒",
        title: "E-commerce / Ordering Websites",
        description: "Websites with product catalogs, shopping carts, checkout logic, and end-to-end ordering workflows."
      },
      {
        icon: "🔐",
        title: "Authentication",
        description: "Secure OTP authentication, user login/signup workflows, and form validation functionality."
      },
      {
        icon: "📍",
        title: "Location-Based Features",
        description: "Interactive maps, store locators, route displays, and location-related delivery functionality."
      },
      {
        icon: "🎨",
        title: "Modern UI/UX",
        description: "Clean, attractive, accessible, and user-friendly interfaces tailored to user expectations and ease-of-use."
      }
    ]
  },

  // ============================================================================
  // 9. DEVELOPMENT APPROACH
  // ============================================================================
  approach: {
    tag: "Engineering Process",
    title: "My Development Approach",
    subtitle: "A systematic, repeatable path from idea conception to polished release.",
    steps: [
      {
        number: "01",
        title: "Understand the Idea",
        description: "Clarify project goals, target audience requirements, and key functional flows before writing code."
      },
      {
        number: "02",
        title: "Design the UI",
        description: "Plan user interface architecture, color hierarchy, typography, and clear visual components."
      },
      {
        number: "03",
        title: "Develop the Website",
        description: "Write clean, maintainable, semantic code utilizing modern web technologies and best practices."
      },
      {
        number: "04",
        title: "Make it Responsive",
        description: "Ensure seamless responsiveness across mobile phones, tablets, laptops, and large desktop screens."
      },
      {
        number: "05",
        title: "Add Required Functionality",
        description: "Integrate essential features such as authentication, interactive maps, forms, and workflows."
      },
      {
        number: "06",
        title: "Test and Improve",
        description: "Verify cross-device compatibility, optimize performance, and fine-tune subtle interactions."
      }
    ],
    aiCard: {
      icon: "🤖",
      title: "Development Workflow & AI Integration",
      description: "I sometimes leverage AI tools to assist my development workflow—using them as an aid for rapid ideation, prototyping, and refining code quality, while ensuring that all software logic, architecture, and design decisions remain grounded in solid developer fundamentals."
    }
  },

  // ============================================================================
  // 10. CONTACT & SOCIAL LINKS
  // ============================================================================
  contact: {
    tag: "Get In Touch",
    title: "Let's Build Something",
    subtitle: "Have an idea for a website? Let's turn it into a modern and responsive web experience.",
    
    /**
     * Contact Form Backend Provider Configuration:
     * - 'demo'       : Simulates email sending with an informative toast notification. (Default)
     * - 'formspree'  : Real email delivery via Formspree. (Requires free form ID at https://formspree.io)
     * - 'web3forms'  : Real email delivery via Web3Forms. (Requires free access key at https://web3forms.com)
     */
    formProvider: "demo",
    formspreeEndpoint: "https://formspree.io/f/YOUR_FORMSPREE_ID",
    web3formsAccessKey: "YOUR_WEB3FORMS_ACCESS_KEY",

    // Social Links & Placeholders (Clicking an unconfigured link shows a helpful toast)
    socialLinks: {
      whatsapp: {
        url: "#", // e.g. "https://wa.me/YOUR_PHONE_NUMBER?text=Hi..."
        label: "WhatsApp",
        badge: "Configure Link ↗"
      },
      linkedin: {
        url: "#", // e.g. "https://www.linkedin.com/in/YOUR_USERNAME"
        label: "LinkedIn",
        badge: "Configure Link ↗"
      },
      email: {
        address: "hello.alexmorgan@example.com",
        label: "Email",
        badge: "Copy Email"
      },
      github: {
        url: "#", // e.g. "https://github.com/YOUR_USERNAME"
        label: "GitHub",
        badge: "Configure Link ↗"
      },
      instagram: {
        url: "#", // e.g. "https://instagram.com/YOUR_USERNAME"
        label: "Instagram",
        badge: "Configure Link ↗"
      }
    },

    // Floating Quick-Connect WhatsApp Button (Disabled by default until buyer adds their number)
    floatingWhatsApp: {
      enabled: false,
      url: "#"
    }
  },

  // ============================================================================
  // 11. FOOTER SECTION
  // ============================================================================
  footer: {
    brand: "Alex Morgan",
    copyrightYear: 2026,
    copyrightText: "© 2026 Alex Morgan. Built with passion, code and creativity."
  }
};
