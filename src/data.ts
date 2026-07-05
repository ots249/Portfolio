import { Project, SkillCategory, SEOAdvice } from "./types";

export const PERSONAL_INFO = {
  fullName: "Oahid Towsif Shamol",
  nickname: "Towsif",
  domain: "towsif.pro.bd",
  githubHandle: "ots249",
  email: "otsshamol@gmail.com",
  tagline: "Civil Technology Student & Software Developer",
  miniBio: "Diploma Student in Civil Technology at Dhaka Polytechnic Institute. Passionate about building modern web products, responsive tools, and software integrations for civil engineering workflows.",
  fullBio: "Currently pursuing a Diploma in Civil Technology at Dhaka Polytechnic Institute, I am a passionate developer from Bangladesh who bridges the gap between physical engineering principles and digital software development. I build clean web user interfaces, custom mechanical/civil calculations tools, and developer utilities. Under my handle @ots249 and verified domain towsif.pro.bd, I design and showcase optimized, responsive platforms.",
  location: "Bangladesh",
  linkedin: "https://linkedin.com/in/ots249",
  twitter: "https://twitter.com/ots249",
  github: "https://github.com/ots249"
};

export const DEFAULT_PROJECTS: Project[] = [
  {
    id: "civilcalc-bd",
    title: "CivilCalc BD",
    description: "A lightweight construction material estimation web app tailored for standard builders and engineers in Bangladesh.",
    longDescription: "A specialized responsive web calculator for concrete formulation proportions (conforming to BDS and ACI standards), brick masonry estimation, reinforcement steel bars weight, and cost approximation for local construction raw materials in Bangladesh.",
    tags: ["React", "TypeScript", "Tailwind CSS", "Civil Estimation"],
    liveUrl: "https://ots249.github.io/civilcalc-bd",
    githubUrl: "https://github.com/ots249/civilcalc-bd",
    category: "Web App",
    featured: true
  },
  {
    id: "survgraph-contour",
    title: "SurvGraph Plotter",
    description: "An interactive web app for civil students to plot level survey data and generate elevation profile curves instantly.",
    longDescription: "Built to accelerate Dhaka Polytechnic Institute Civil Technology lab calculations, this tool allows easy plotting of rise/fall tables, height of instrument benchmarks, and renders dynamic cross-section profile curves using responsive SVG graph paths.",
    tags: ["React", "SVG Rendering", "Engineering Math", "Vite"],
    liveUrl: "https://ots249.github.io/survgraph-contour",
    githubUrl: "https://github.com/ots249/survgraph-contour",
    category: "Web App",
    featured: true
  },
  {
    id: "portfolio-site",
    title: "towsif.pro.bd",
    description: "My personal web home designed specifically to showcase responsive tools, civil tech apps, and open source development.",
    longDescription: "A modern developer portfolio powered by React, TypeScript, and Tailwind CSS. It features custom-styled listable resume sections, responsive theme elements, interactive widgets, and clean CSS animations.",
    tags: ["React", "TypeScript", "Tailwind", "Vite"],
    liveUrl: "https://towsif.pro.bd",
    githubUrl: "https://github.com/ots249/portfolio",
    category: "Web App",
    featured: true
  },
  {
    id: "bengalchat",
    title: "BengalChat Engine",
    description: "An open-source real-time messaging pipeline optimized for low-bandwidth environments with automated locale support.",
    longDescription: "Designed for businesses in Bangladesh, BengalChat utilizes WebSocket networks to power client communication securely. It handles complex Bengali script parsing and features customizable automated responders.",
    tags: ["Node.js", "Express", "WebSockets", "TypeScript"],
    liveUrl: "https://github.com/ots249/bengal-chat",
    githubUrl: "https://github.com/ots249/bengal-chat",
    category: "Library",
    featured: true
  },
  {
    id: "ots249-cli",
    title: "ots249-cli utility",
    description: "A fast terminal-based developer toolkit to instantly bootstrap React and Express applications with pre-integrated SEO rules.",
    longDescription: "A developer tool designed to eliminate setup overhead. This custom CLI scaffold allows developers to rapidly initialize projects with custom ESLint settings, absolute import setups, and index-optimized JSON-LD templates instantly.",
    tags: ["Node.js", "Commander", "Template Engine", "ESLint"],
    githubUrl: "https://github.com/ots249/bootstrap-cli",
    category: "Library",
    featured: false
  },
  {
    id: "bangladesh-devhub",
    title: "BD Developer Directory",
    description: "A community aggregation platform highlighting active open-source contributors and developers from Bangladesh.",
    longDescription: "A crowd-sourced developer portal where creators from Bangladesh can showcase their portfolio URLs, domains, and open-source packages. Features responsive search and geolocation filtering.",
    tags: ["React", "D3.js", "Tailwind CSS", "Firestore"],
    liveUrl: "https://github.com/ots249/bd-developer-hub",
    githubUrl: "https://github.com/ots249/bd-developer-hub",
    category: "Web App",
    featured: true
  }
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    id: "frontend",
    title: "Frontend Engineering",
    skills: [
      { name: "React 19 / Next.js", level: "Expert", iconName: "react" },
      { name: "Vite / Bundlers", level: "Expert", iconName: "zap" },
      { name: "TypeScript", level: "Expert", iconName: "typescript" },
      { name: "Tailwind CSS", level: "Expert", iconName: "paint" },
      { name: "Responsive UI", level: "Expert", iconName: "smartphone" }
    ]
  },
  {
    id: "backend",
    title: "Backend & Systems",
    skills: [
      { name: "Node.js / Express", level: "Expert", iconName: "server" },
      { name: "RESTful APIs", level: "Expert", iconName: "link" },
      { name: "JSON-LD & Schema", level: "Expert", iconName: "code" },
      { name: "PostgreSQL & NoSQL", level: "Intermediate", iconName: "database" }
    ]
  },
  {
    id: "devops-marketing",
    title: "Hosting & Visibility",
    skills: [
      { name: "Domain Routing", level: "Expert", iconName: "globe" },
      { name: "Google PageSpeed", level: "Expert", iconName: "gauge" },
      { name: "SEO Structured Data", level: "Expert", iconName: "search" },
      { name: "Git / GitHub versioning", level: "Expert", iconName: "git" }
    ]
  }
];

export const GOOGLE_SEO_CHECKLIST: SEOAdvice[] = [
  {
    id: "head-meta",
    title: "Add Primary SEO Meta Tags",
    status: "success",
    message: "Critical meta descriptions, author labels, and canonical links are fully configured in the index.html source code.",
    solution: "Already active in code. Includes references to name 'Oahid Towsif Shamol' and handle 'ots249'."
  },
  {
    id: "sitemap-creation",
    title: "XML Sitemap Generation (sitemap.xml)",
    status: "success",
    message: "A search-ready Google Sitemap has been generated and mounted at towsif.pro.bd/sitemap.xml.",
    solution: "Already active in /public/sitemap.xml. Register this URL under the 'Sitemaps' tab in Google Search Console to speed up listing indexing."
  },
  {
    id: "robots-txt",
    title: "Configure crawlers guide (robots.txt)",
    status: "success",
    message: "A structured robots.txt is present to allow crawl spiders and indicate your static map URL.",
    solution: "Already active in /public/robots.txt. It points spiders from Google, Bing, and DuckDuckGo directly to your sitemap."
  },
  {
    // Important context to achieve search objective
    id: "domain-dns",
    title: "Domain DNS Records for towsif.pro.bd",
    status: "pending",
    message: "Ensure your registrar DNS links your domain (towsif.pro.bd) to your website hosting server.",
    solution: "Add an 'A Record' pointing to your server's IP address, or a 'CNAME Record' pointing to your host's dynamic URL (e.g. Vercel, Netlify, or Cloud Run) in your registrar panel (e.g. BTCL or custom DNS)."
  },
  {
    id: "google-search-console",
    title: "Submit to Google Search Console",
    status: "pending",
    message: "Google needs to be actively requested to crawl the new link to index 'towsif.pro.bd' immediately.",
    solution: "Go to Google Search Console (search.google.com/search-console). Add 'property' towsif.pro.bd. Verify ownership via DNS TXT record, then hit 'Request Indexing' for the homepage."
  },
  {
    id: "structured-data",
    title: "JSON-LD Semantic Schema Injection",
    status: "success",
    message: "WebSite and Person schemas are actively injected to tell Google that the handle 'ots249' belongs to 'Oahid Towsif Shamol'.",
    solution: "Implemented. This links your social platforms (GitHub, Twitter) directly with the main search entity keyword."
  },
  {
    id: "social-links-auth",
    title: "Anchor Verification & Backlink Density",
    status: "info",
    message: "Google uses backlink validation to verify that 'ots249' points to 'towsif.pro.bd'.",
    solution: "Add 'https://towsif.pro.bd' as the website URL in your GitHub profile (github.com/ots249) bio, and in your LinkedIn bio. Google will correlate this within 72 hours, ranking your site first when someone searches 'ots249'."
  }
];
