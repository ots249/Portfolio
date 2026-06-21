import { Project, SkillCategory, SEOAdvice } from "./types";

export const PERSONAL_INFO = {
  fullName: "Oahid Towsif Shamol",
  nickname: "Towsif",
  domain: "towsif.pro.bd",
  githubHandle: "ots249",
  email: "otsshamol@gmail.com",
  tagline: "Software Engineer & Open Source Developer",
  miniBio: "Passionate designer and developer crafting performant web products, responsive tools, and highly optimized search-engine visible web infrastructure.",
  fullBio: "A dedicated software developer based in Bangladesh focused on building clean web interfaces, sturdy API servers, and highly optimized platforms. I help developers and small businesses design visual solutions with modern stacks (React, Vite, TS, Node, Tailwind). Under my handle ots249 and domain towsif.pro.bd, I advocate for web accessibility, fast performance, and clean indexable content architectures.",
  location: "Bangladesh",
  linkedin: "https://linkedin.com/in/ots249",
  twitter: "https://twitter.com/ots249",
  github: "https://github.com/ots249"
};

export const DEFAULT_PROJECTS: Project[] = [
  {
    id: "portfolio-site",
    title: "towsif.pro.bd",
    description: "My personal web home and live Google SEO Simulator designed specifically to handle Google search queries for my full name and handle.",
    longDescription: "A modern developer portfolio powered by React, TypeScript, and Tailwind CSS. It features a built-in search simulator, detailed metadata optimization, listable resume sections, and fluid animations using custom state machines.",
    tags: ["React", "TypeScript", "Tailwind", "Vite", "JSON-LD"],
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
