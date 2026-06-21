import React, { useState } from "react";
import { 
  PERSONAL_INFO, 
  DEFAULT_PROJECTS, 
  SKILL_CATEGORIES 
} from "./data";
import { ProjectCard } from "./components/ProjectCard";
import { SEODashboard } from "./components/SEODashboard";
import { ContactSection } from "./components/ContactSection";
import { 
  Globe, Github, Linkedin, Twitter, Sparkles, 
  Code2, Eye, Server, Zap, Compass, ArrowRight,
  User, CheckCircle, Smartphone, Award, Terminal
} from "lucide-react";

export default function App() {
  const [currentLanguage, setCurrentLanguage] = useState<"EN" | "BN">("EN");
  const [filterCategory, setFilterCategory] = useState<string>("All");
  const [copiedText, setCopiedText] = useState<string | null>(null);

  const copyToClipboard = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopiedText(id);
    setTimeout(() => setCopiedText(null), 2000);
  };

  const filteredProjects = filterCategory === "All" 
    ? DEFAULT_PROJECTS 
    : DEFAULT_PROJECTS.filter(p => p.category === filterCategory);

  // Bengali specific translations of bio
  const bnBio = {
    tagline: "সফটওয়্যার ইঞ্জিনিয়ার এবং ওপেন সোর্স ডেভেলপার",
    miniBio: "পারফর্ম্যান্ট ওয়েব প্রোডাক্ট, রেসপন্সিভ টুলস এবং হাইলি অপ্টিমাইজড সার্চ-ইঞ্জিন ভিজিবল ওয়েব ইন্ফ্রাস্ট্রাকচার তৈরি করতে ভালোবাসেন।",
    fullBio: "আমি একজন সফটওয়্যার ডেভেলপার, বাংলাদেশ থেকে কাজ করছি। মূলত ক্লিন ওয়েব ইন্টারফেস, এপিআই সার্ভার এবং গুগল রেডি অপ্টিমাইজড প্ল্যাটফর্ম তৈরির কাজ করি। আমার ots249 হ্যান্ডেল এবং towsif.pro.bd ডোমেইনের মাধ্যমে ওয়েব অ্যাক্সেসিবিলিটি, ফাস্ট পারফরম্যান্স এবং সঠিক মেটাডাটা ব্যবহারের জন্য নিরলসভাবে কাজ করে যাচ্ছি।",
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 antialiased font-sans flex flex-col justify-between">
      
      {/* Sleek Adaptive Header */}
      <header className="sticky top-0 z-50 w-full border-b border-slate-200/80 bg-white/80 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl h-16 items-center justify-between px-4 sm:px-6 lg:px-8">
          
          {/* Logo Branding */}
          <a href="#hero" className="flex items-center gap-2 group cursor-pointer h-10">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-teal-600 font-mono text-base font-bold text-white shadow-xs transition-transform group-hover:scale-105">
              O
            </div>
            <div>
              <span className="font-display text-sm font-bold tracking-tight text-slate-800 transition-colors group-hover:text-teal-700">
                {PERSONAL_INFO.fullName}
              </span>
              <span className="hidden sm:inline-block font-mono text-[10px] text-slate-500 bg-slate-100 px-1.5 py-0.2 rounded ml-2">
                {PERSONAL_INFO.githubHandle}
              </span>
            </div>
          </a>

          {/* Inline Navigation Anchors */}
          <nav className="hidden md:flex items-center gap-6">
            <a href="#seo-section" className="text-xs font-semibold text-slate-600 hover:text-teal-600 transition-colors">
              Google Indexing
            </a>
            <a href="#projects" className="text-xs font-semibold text-slate-600 hover:text-teal-600 transition-colors">
              Projects
            </a>
            <a href="#skills" className="text-xs font-semibold text-slate-600 hover:text-teal-600 transition-colors">
              Skills
            </a>
            <a href="#contact" className="text-xs font-semibold text-slate-600 hover:text-teal-600 transition-colors">
              Contact
            </a>
          </nav>

          {/* Social connections & Language toggler */}
          <div className="flex items-center gap-3">
            {/* Language switch button */}
            <button
              onClick={() => setCurrentLanguage(prev => prev === "EN" ? "BN" : "EN")}
              className="inline-flex items-center gap-1.5 rounded-lg border border-slate-200 bg-white px-2.5 py-1.5 text-xs font-bold text-slate-600 cursor-pointer hover:bg-slate-50 hover:text-teal-600 transition-all select-none"
              title="Toggle Language / ভাষা পরিবর্তন করুন"
              id="language-toggle"
            >
              <Compass className="h-3.5 w-3.5 text-teal-600" />
              <span>{currentLanguage === "EN" ? "বাংলা" : "English"}</span>
            </button>

            {/* GitHub Fast Link */}
            <a
              href={PERSONAL_INFO.github}
              target="_blank"
              rel="noreferrer"
              className="flex h-8 w-8 items-center justify-center rounded-md text-slate-600 hover:bg-slate-100 hover:text-slate-900 transition-colors"
              title="Go to GitHub"
              id="header-github-link"
            >
              <Github className="h-4.5 w-4.5" />
            </a>

            {/* Direct CTA button */}
            <a
              href="#contact"
              className="hidden sm:inline-flex items-center justify-center rounded-lg bg-slate-900 px-3.5 py-1.5 text-xs font-bold text-white hover:bg-slate-850 active:bg-slate-900 transition-colors"
            >
              Let's Talk
            </a>
          </div>
        </div>
      </header>

      {/* Main Single-screen viewport sections */}
      <main className="flex-1">
        
        {/* HERO SECTION */}
        <section id="hero" className="relative overflow-hidden bg-white py-16 lg:py-24 border-b border-slate-100">
          {/* Subtle grid mesh background */}
          <div className="absolute inset-x-0 top-0 -z-10 h-96 bg-radial-gradient-to-b from-teal-500/10 to-transparent"></div>
          
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-12 lg:grid-cols-12 lg:items-center">
              
              {/* Profile Bio Context (7 cols) */}
              <div className="space-y-6 lg:col-span-7">
                <div className="inline-flex items-center gap-1.5 rounded-full bg-teal-50 px-3 py-1 text-xs font-semibold text-teal-850 border border-teal-100">
                  <Globe className="h-3 w-3 text-teal-600" />
                  <span>Verified Domain:</span>
                  <span className="font-mono underline text-teal-700">{PERSONAL_INFO.domain}</span>
                </div>

                <div className="space-y-3">
                  <span className="block font-mono text-xs font-bold text-slate-400 uppercase tracking-widest pl-0.5">
                    Welcome to the personal hub of
                  </span>
                  <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-display text-slate-900 tracking-tight leading-tight">
                    {PERSONAL_INFO.fullName}
                  </h1>
                  <p className="font-display text-lg sm:text-xl font-semibold text-slate-600 max-w-2xl">
                    {currentLanguage === "EN" ? PERSONAL_INFO.tagline : bnBio.tagline}
                  </p>
                </div>

                <p className="text-sm sm:text-base leading-relaxed text-slate-600 max-w-2xl">
                  {currentLanguage === "EN" ? PERSONAL_INFO.miniBio : bnBio.miniBio}
                </p>

                {/* Info Metadata Badges */}
                <div className="flex flex-wrap items-center gap-2 pt-2">
                  <span className="inline-flex items-center gap-1 rounded-md bg-slate-100 px-2.5 py-1 text-xs font-mono font-medium text-slate-700">
                    <User className="h-3.5 w-3.5 text-slate-500" />
                    <strong>Google Search entity:</strong> "Oahid Towsif Shamol"
                  </span>
                  <span className="inline-flex items-center gap-1 rounded-md bg-slate-100 px-2.5 py-1 text-xs font-mono font-medium text-slate-705">
                    <Terminal className="h-3.5 w-3.5 text-slate-500" />
                    <strong>Global handle:</strong> {PERSONAL_INFO.githubHandle}
                  </span>
                </div>

                {/* Call-to-actions */}
                <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-4">
                  <a
                    href="#seo-section"
                    className="inline-flex items-center justify-center gap-2 rounded-xl bg-teal-600 px-5 py-3 text-sm font-semibold text-white shadow-xs transition-transform hover:scale-101 hover:bg-teal-700 hover:shadow-md cursor-pointer"
                  >
                    <span>SEO Dashboard Optimizer</span>
                    <ArrowRight className="h-4 w-4" />
                  </a>
                  <a
                    href="#projects"
                    className="inline-flex items-center justify-center rounded-xl border border-slate-250 bg-white px-5 py-3 text-sm font-semibold text-slate-700 hover:bg-slate-50 transition-colors"
                  >
                    View Project Cases
                  </a>
                </div>
              </div>

              {/* Developer Avatar Showcase with Glass Frame (5 cols) */}
              <div className="lg:col-span-5 flex justify-center">
                <div className="relative group max-w-[280px] sm:max-w-[320px]">
                  {/* Glowing background halo */}
                  <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-teal-500 to-indigo-500 opacity-20 blur-xl group-hover:opacity-30 transition-all"></div>
                  
                  {/* Primary framing container */}
                  <div className="relative rounded-2xl border border-slate-200 bg-white p-3 shadow-md">
                    <img
                      src="/src/assets/images/developer_avatar_1782018395211.jpg"
                      alt="Oahid Towsif Shamol logo avatar"
                      referrerPolicy="no-referrer"
                      className="rounded-xl w-full aspect-square object-cover transition-transform group-hover:scale-[1.01]"
                    />
                    
                    {/* Floating verified domain capsule */}
                    <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between rounded-xl bg-slate-900/90 py-2.5 px-4 text-xs shadow-lg backdrop-blur-xs text-white">
                      <div className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-teal-400 fill-teal-400/10" />
                        <span className="font-semibold tracking-wide">{PERSONAL_INFO.domain}</span>
                      </div>
                      <span className="text-[10px] font-mono text-teal-300">Live</span>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* DETAILED RICH BIO SHOWCASE SECTION */}
        <section className="bg-slate-50 py-12 border-b border-slate-200/80">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="rounded-2xl border border-slate-200 bg-white p-6 md:p-8">
              <h3 className="text-xs font-semibold uppercase tracking-wider text-slate-400 flex items-center gap-2 mb-4">
                <User className="h-4 w-4 text-teal-600" />
                {currentLanguage === "EN" ? "Developer Biography" : "জীবনী পরিচিতি"}
              </h3>
              <p className="text-sm sm:text-base leading-relaxed text-slate-700">
                {currentLanguage === "EN" ? PERSONAL_INFO.fullBio : bnBio.fullBio}
              </p>
            </div>
          </div>
        </section>

        {/* SEO SECTION (CORE TASK SPECIFIC RESPONSE CARD) */}
        <section id="seo-section" className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <SEODashboard />
        </section>

        {/* PORTFOLIO PROJECTS BLOCK */}
        <section id="projects" className="bg-white py-16 border-t border-slate-100">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            
            {/* Header control center */}
            <div className="mb-10 flex flex-col justify-between gap-4 md:flex-row md:items-end">
              <div>
                <span className="inline-flex items-center gap-1.5 rounded-full bg-teal-50 px-3 py-1 text-xs font-semibold text-teal-700">
                  <Code2 className="h-3.5 w-3.5" /> Project Repository
                </span>
                <h2 className="mt-3 text-3xl font-bold font-display text-slate-800">
                  Showcase of Web Applications
                </h2>
                <p className="mt-1 text-sm text-slate-500 max-w-xl">
                  Explore custom scripts, utilities, and developer scaffolds registered under handle <strong>{PERSONAL_INFO.githubHandle}</strong>.
                </p>
              </div>

              {/* Filtering Controls */}
              <div className="flex flex-wrap items-center gap-1.5 rounded-xl border border-slate-200 bg-slate-50 p-1 font-sans">
                {["All", "Web App", "Library"].map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setFilterCategory(cat)}
                    className={`rounded-lg px-3 py-1.5 text-xs font-bold transition-all cursor-pointer ${
                      filterCategory === cat
                        ? "bg-white text-teal-700 shadow-xs"
                        : "text-slate-600 hover:text-slate-800"
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>

            {/* Grid distribution */}
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {filteredProjects.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>

          </div>
        </section>

        {/* SKILLS SYSTEM SECTION */}
        <section id="skills" className="bg-slate-50/50 py-16 border-t border-b border-slate-200/80">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            
            <div className="mb-10 text-center">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-700">
                <Zap className="h-3.5 w-3.5 text-teal-600" /> Technology Stacks
              </span>
              <h2 className="mt-3 text-3xl font-bold font-display text-slate-800">
                Specialized Capabilities
              </h2>
              <p className="mx-auto mt-2 text-sm text-slate-500 max-w-lg">
                Engineered for responsiveness, fast loading times, and Google botanical crawling compliance.
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {SKILL_CATEGORIES.map((category) => (
                <div 
                  key={category.id} 
                  className="rounded-2xl border border-slate-200 bg-white p-6 shadow-xs"
                  id={`skill-cat-${category.id}`}
                >
                  <h3 className="mb-6 text-sm font-bold uppercase tracking-wider text-slate-500 flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-teal-500"></span>
                    {category.title}
                  </h3>

                  <div className="space-y-4">
                    {category.skills.map((skill) => (
                      <div key={skill.name} className="space-y-1.5">
                        <div className="flex items-center justify-between text-xs">
                          <span className="font-semibold text-slate-700">{skill.name}</span>
                          <span className="font-mono text-slate-400 text-[10px]">{skill.level}</span>
                        </div>
                        {/* Progress Bar indicator */}
                        <div className="h-1.5 w-full rounded-full bg-slate-100 overflow-hidden">
                          <div 
                            className="h-full rounded-full bg-teal-500 transition-all duration-500" 
                            style={{ 
                              width: skill.level === "Expert" ? "100%" : skill.level === "Intermediate" ? "75%" : "40%" 
                            }}
                          ></div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>

          </div>
        </section>

        {/* CONTACT CONNECTIONS SECTION */}
        <section id="contact" className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <ContactSection />
        </section>

      </main>

      {/* FOOTER */}
      <footer className="border-t border-slate-200 bg-white py-8">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-4 sm:px-6 md:flex-row lg:px-8">
          <div className="flex items-center gap-2">
            <span className="font-mono text-xs text-slate-450 uppercase">
              Host Domain: <a href={`https://${PERSONAL_INFO.domain}`} target="_blank" rel="noreferrer" className="underline font-bold text-teal-600 hover:text-teal-700">{PERSONAL_INFO.domain}</a>
            </span>
          </div>
          
          <p className="text-center text-xs text-slate-400">
            &copy; {new Date().getFullYear()} Oahid Towsif Shamol (ots249). Designed for responsive displays. All rights reserved.
          </p>

          <div className="flex gap-4 text-xs text-slate-400">
            <a href="#hero" className="hover:text-teal-600 transition-colors">Top of Page</a>
            <span>&middot;</span>
            <a href="#seo-section" className="hover:text-teal-600 transition-colors">SEO Guide</a>
          </div>
        </div>
      </footer>

    </div>
  );
}
