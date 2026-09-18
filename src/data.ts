import { Project, SkillCategory, SEOAdvice } from "./types";

export const PERSONAL_INFO = {
  fullName: "Oahid Towsif Shamol",
  nickname: "Towsif",
  domain: "towsif.pro.bd",
  githubHandle: "ots249",
  email: "otsshamol@gmail.com",
  tagline: "Software Developer & Open Source Builder",
  miniBio: "Passionate software developer from Bangladesh. Active on GitHub under handle @ots249 building modern web applications, healthcare tools, sports trackers, and developer utilities.",
  fullBio: "I am Oahid Towsif Shamol (ots249), a software developer based in Bangladesh. I specialize in building responsive web applications, TypeScript tools, and API integrations. My public projects include MidTime (medicine schedule companion), FIFA World Cup 2026 tracker, polytechnic portals, and developer utilities. Under my handle @ots249 and verified domain towsif.pro.bd, I create performant, accessible digital products.",
  location: "Bangladesh",
  linkedin: "https://linkedin.com/in/ots249",
  twitter: "https://twitter.com/ots249",
  github: "https://github.com/ots249",
  avatarUrl: "https://avatars.githubusercontent.com/u/94354354?v=4",
  publicRepos: 10,
  joinedYear: "2021"
};

export const DEFAULT_PROJECTS: Project[] = [
  {
    id: "midtime",
    title: "MidTime",
    description: "Your Medicine Schedule Companion — a clean, accessible medicine tracking app designed for patients to organize multiple daily prescriptions.",
    longDescription: "MidTime organizes daily prescriptions into Morning, Afternoon, and Night sections so patients never miss a dose. Features intuitive dose tracking, reminders, and responsive mobile-first UI.",
    tags: ["TypeScript", "React", "HealthTech", "Vercel"],
    liveUrl: "https://midtime.vercel.app",
    githubUrl: "https://github.com/ots249/MidTime",
    category: "Web App",
    featured: true
  },
  {
    id: "fifawc26",
    title: "fifawc26",
    description: "FIFA World Cup 2026 interactive match schedules, team fixtures, and tournament countdown tracker.",
    longDescription: "Interactive sports dashboard providing football enthusiasts with tournament countdowns, group stages, stadium information, and live match tracker interfaces for the 2026 World Cup.",
    tags: ["TypeScript", "Next.js", "Sports Data", "Vercel"],
    liveUrl: "https://fifawc26-snowy.vercel.app",
    githubUrl: "https://github.com/ots249/fifawc26",
    category: "Web App",
    featured: true
  },
  {
    id: "sdpi-beta",
    title: "sdpi-beta",
    description: "Academic student services and institutional resource portal tailored for polytechnic institute students.",
    longDescription: "A comprehensive digital campus portal providing students with syllabus guidelines, semester updates, course schedules, and institutional resources in a fast web app.",
    tags: ["TypeScript", "React", "Polytechnic", "Vercel"],
    liveUrl: "https://sdpi-beta.vercel.app",
    githubUrl: "https://github.com/ots249/sdpi-beta",
    category: "Web App",
    featured: true
  },
  {
    id: "csvmeta",
    title: "csvmeta",
    description: "Online metadata analyzer and structured column tag generator for CSV and tabular datasets.",
    longDescription: "Client-side metadata extraction utility for tabular datasets that parses column schemas, computes summary distributions, and formats structured metadata exports.",
    tags: ["TypeScript", "Data Tools", "CSV", "Vercel"],
    liveUrl: "https://csvmeta-omega.vercel.app",
    githubUrl: "https://github.com/ots249/csvmeta",
    category: "Web App",
    featured: true
  },
  {
    id: "bteb-result",
    title: "Bteb-result",
    description: "Fast result checker for Bangladesh Technical Education Board (BTEB) diploma in engineering examinations.",
    longDescription: "A lightweight, speedy result query portal designed for polytechnic students across Bangladesh to quickly view semester GPAs, CGPAs, and subject grades.",
    tags: ["HTML", "JavaScript", "BTEB", "Education"],
    githubUrl: "https://github.com/ots249/Bteb-result",
    category: "Web App",
    featured: false
  },
  {
    id: "fraud-checker",
    title: "fraud-checker",
    description: "E-commerce customer phone and order risk assessment tool to prevent delivery fraud.",
    longDescription: "Merchant utility designed for digital sellers in Bangladesh to evaluate customer delivery history, verify phone numbers, and calculate delivery failure risk scores before shipping.",
    tags: ["TypeScript", "Next.js", "Merchant Tools", "Vercel"],
    liveUrl: "https://fraudchecker-lyart.vercel.app",
    githubUrl: "https://github.com/ots249/fraud-checker",
    category: "Web App",
    featured: false
  },
  {
    id: "sslcommerz-whmcs",
    title: "sslcommerz-whmcs",
    description: "Automated SSLCommerz payment gateway module for WHMCS client billing and instant invoice verification.",
    longDescription: "Integration module for hosting providers and online businesses running WHMCS, enabling automated payment settlements via bKash, Nagad, debit/credit cards, and internet banking in Bangladesh.",
    tags: ["PHP", "WHMCS", "SSLCommerz", "Fintech"],
    githubUrl: "https://github.com/ots249/sslcommerz-whmcs",
    category: "Library",
    featured: false
  },
  {
    id: "smskit",
    title: "smskit",
    description: "Self-hosted SMS gateway using an Android phone as relay with REST API and web dashboard.",
    longDescription: "Cost-effective SMS dispatch relay using a physical Android device. Features flat-file PHP backend, real-time web dashboard, and REST API for webhook notifications with zero monthly third-party API fees.",
    tags: ["PHP", "Android", "REST API", "Automation"],
    githubUrl: "https://github.com/ots249/smskit",
    category: "Library",
    featured: false
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
