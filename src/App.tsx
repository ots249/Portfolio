import React, { useState } from "react";
import { 
  PERSONAL_INFO, 
  DEFAULT_PROJECTS, 
  SKILL_CATEGORIES 
} from "./data";
import { ProjectCard } from "./components/ProjectCard";
import { ContactSection } from "./components/ContactSection";
import { ScrollReveal } from "./components/ScrollReveal";
import { 
  Globe, Github, Linkedin, Twitter, Sparkles, 
  Code2, Eye, Server, Zap, Compass, ArrowRight,
  User, CheckCircle, Smartphone, Award, Terminal,
  Music, Volume2, VolumeX, Play, Pause, Radio
} from "lucide-react";

export default function App() {
  const [currentLanguage, setCurrentLanguage] = useState<"EN" | "BN">("EN");
  const [filterCategory, setFilterCategory] = useState<string>("All");
  const [copiedText, setCopiedText] = useState<string | null>(null);

  // Radio Stream Background Music States & Controls
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [isMuted, setIsMuted] = useState<boolean>(false);
  const [volume, setVolume] = useState<number>(0.2); // Soft ambient volume (20%)
  const [audioError, setAudioError] = useState<string | null>(null);
  const audioRef = React.useRef<HTMLAudioElement | null>(null);

  React.useEffect(() => {
    // Instantiate Audio with the radio live stream URL
    const radioUrl = "https://radiofoorti.fm/api/stream?t=1783275408787";
    const audio = new Audio(radioUrl);
    audio.loop = true;
    audio.volume = volume;
    audioRef.current = audio;

    // Play helper
    const startPlay = () => {
      const playPromise = audio.play();
      if (playPromise !== undefined) {
        playPromise
          .then(() => {
            setIsPlaying(true);
            setAudioError(null);
            removeListeners();
          })
          .catch((err) => {
            console.warn("Initial audio autoplay blocked. Will auto-trigger on first click/scroll/tap.", err);
          });
      }
    };

    const handleFirstGesture = () => {
      startPlay();
    };

    const addListeners = () => {
      window.addEventListener("click", handleFirstGesture, { once: true });
      window.addEventListener("touchstart", handleFirstGesture, { once: true });
      window.addEventListener("keydown", handleFirstGesture, { once: true });
    };

    const removeListeners = () => {
      window.removeEventListener("click", handleFirstGesture);
      window.removeEventListener("touchstart", handleFirstGesture);
      window.removeEventListener("keydown", handleFirstGesture);
    };

    // Attempt direct autoplay
    startPlay();
    
    // Register backup gesture-driven autoplay listeners
    addListeners();

    // Clean up on unmount
    return () => {
      removeListeners();
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null;
      }
    };
  }, []);

  const handleVolumeChange = (newVolume: number) => {
    setVolume(newVolume);
    if (audioRef.current) {
      audioRef.current.volume = newVolume;
      audioRef.current.muted = newVolume === 0;
    }
    if (isMuted && newVolume > 0) {
      setIsMuted(false);
    }
  };

  const togglePlay = () => {
    if (!audioRef.current) return;

    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      // Reload stream to get latest live feed without buffering lag
      const liveStreamUrl = "https://radiofoorti.fm/api/stream?t=" + Date.now();
      audioRef.current.src = liveStreamUrl;
      audioRef.current.load();
      audioRef.current.volume = volume;
      audioRef.current.muted = isMuted;

      const playPromise = audioRef.current.play();
      if (playPromise !== undefined) {
        playPromise
          .then(() => {
            setIsPlaying(true);
            setAudioError(null);
          })
          .catch((err) => {
            console.error("Audio playback activation blocked:", err);
            setAudioError("Blocked");
          });
      }
    }
  };

  const toggleMute = () => {
    if (!audioRef.current) return;
    const nextMuted = !isMuted;
    setIsMuted(nextMuted);
    audioRef.current.muted = nextMuted;
  };

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
    tagline: "সিভিল টেকনোলজি ডিপ্লোমা শিক্ষার্থী এবং সফটওয়্যার ডেভেলপার",
    miniBio: "ঢাকা পলিটেকনিক ইনস্টিটিউটের সিভিল টেকনোলজি বিভাগের একজন ডিপ্লোমা শিক্ষার্থী এবং ডেভেলপার যিনি রেসপন্সিভ ওয়েব সল্যুশন, ইঞ্জিনিয়ারিং ক্যালকুলেটর এবং অপ্টিমাইজড ওয়েব ও মোবাইল সিস্টেম তৈরি করেন।",
    fullBio: "আমি ঢাকা পলিটেকনিক ইনস্টিটিউটের সিভিল টেকনোলজি (Civil Technology) বিভাগের একজন ডিপ্লোমা শিক্ষার্থী এবং একজন প্যাশনেট সফটওয়্যার ডেভেলপার। আমি মূলত ক্লিন ওয়েব ইউজার ইন্টারফেস, ইঞ্জিনিয়ারিং ক্যালকুলেটিং সল্যুশন এবং ওপেন সোর্স স্ক্যাফোল্ডস তৈরি করতে ভালোবাসি। আমার হ্যান্ডেল ots249 এবং ডোমেইন towsif.pro.bd এর মাধ্যমে আমি অপ্টিমাইজড ওয়েব অ্যাপ্লিকেশন সকলের নিকট পৌঁছে দিতে কাজ করি।"
  };

  return (
    <div className="min-h-screen bg-[#030712] text-slate-300 antialiased font-sans flex flex-col justify-between">
      
      {/* Sleek Adaptive Header */}
      <header className="sticky top-0 z-50 w-full border-b border-zinc-900/80 bg-[#030712]/85 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl h-16 items-center justify-between px-4 sm:px-6 lg:px-8">
          
          {/* Logo Branding */}
          <a href="#hero" className="flex items-center gap-2 group cursor-pointer h-10">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-teal-500 font-mono text-base font-bold text-[#030712] shadow-xs transition-transform group-hover:scale-105">
              O
            </div>
            <div>
              <span className="font-display text-sm font-bold tracking-tight text-white transition-colors group-hover:text-teal-400">
                {PERSONAL_INFO.fullName}
              </span>
              <span className="hidden sm:inline-block font-mono text-[10px] text-slate-400 bg-zinc-900 border border-zinc-800 px-1.5 py-0.2 rounded ml-2">
                {PERSONAL_INFO.githubHandle}
              </span>
            </div>
          </a>

          {/* Inline Navigation Anchors */}
          <nav className="hidden md:flex items-center gap-6">
            <a href="#hero" className="text-xs font-semibold text-slate-400 hover:text-teal-400 transition-colors">
              About
            </a>
            <a href="#projects" className="text-xs font-semibold text-slate-400 hover:text-teal-400 transition-colors">
              Projects
            </a>
            <a href="#skills" className="text-xs font-semibold text-slate-400 hover:text-teal-400 transition-colors">
              Skills
            </a>
            <a href="#contact" className="text-xs font-semibold text-slate-400 hover:text-teal-400 transition-colors">
              Contact
            </a>
          </nav>

          {/* Social connections & Language toggler */}
          <div className="flex items-center gap-3">
            {/* Language switch button */}
            <button
              onClick={() => setCurrentLanguage(prev => prev === "EN" ? "BN" : "EN")}
              className="inline-flex items-center gap-1.5 rounded-lg border border-zinc-800 bg-zinc-900/40 px-2.5 py-1.5 text-xs font-bold text-slate-300 cursor-pointer hover:bg-zinc-900 hover:text-teal-400 transition-all select-none"
              title="Toggle Language / ভাষা পরিবর্তন করুন"
              id="language-toggle"
            >
              <Compass className="h-3.5 w-3.5 text-teal-400" />
              <span>{currentLanguage === "EN" ? "বাংলা" : "English"}</span>
            </button>

            {/* GitHub Fast Link */}
            <a
              href={PERSONAL_INFO.github}
              target="_blank"
              rel="noreferrer"
              className="flex h-8 w-8 items-center justify-center rounded-md text-slate-400 hover:bg-zinc-900 hover:text-white transition-colors"
              title="Go to GitHub"
              id="header-github-link"
            >
              <Github className="h-4.5 w-4.5" />
            </a>

            {/* Direct CTA button */}
            <a
              href="#contact"
              className="hidden sm:inline-flex items-center justify-center rounded-lg bg-teal-500 px-3.5 py-1.5 text-xs font-bold text-[#030712] hover:bg-teal-400 transition-colors"
            >
              Let's Talk
            </a>
          </div>
        </div>
      </header>

      {/* Main Single-screen viewport sections */}
      <main className="flex-1">
        
        {/* HERO SECTION */}
        <section id="hero" className="relative overflow-hidden bg-transparent py-16 lg:py-24 border-b border-zinc-900/50">
          {/* Subtle grid mesh background */}
          <div className="absolute inset-x-0 top-0 -z-10 h-[450px] bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-teal-900/10 via-transparent to-transparent"></div>
          
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-12 lg:grid-cols-12 lg:items-center">
              
              {/* Profile Bio Context (7 cols) */}
              <ScrollReveal direction="left" className="space-y-6 lg:col-span-7">
                <div className="inline-flex items-center gap-1.5 rounded-full bg-teal-950/30 px-3 py-1 text-xs font-semibold text-teal-400 border border-teal-900/40">
                  <Globe className="h-3 w-3 text-teal-450" />
                  <span>Verified Domain:</span>
                  <span className="font-mono underline text-teal-350">{PERSONAL_INFO.domain}</span>
                </div>

                <div className="space-y-3">
                  <span className="block font-mono text-xs font-bold text-slate-500 uppercase tracking-widest pl-0.5">
                    Welcome to the personal hub of
                  </span>
                  <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-display text-white tracking-tight leading-tight">
                    {PERSONAL_INFO.fullName}
                  </h1>
                  <p className="font-display text-lg sm:text-xl font-semibold text-slate-300 max-w-2xl">
                    {currentLanguage === "EN" ? PERSONAL_INFO.tagline : bnBio.tagline}
                  </p>
                </div>

                <p className="text-sm sm:text-base leading-relaxed text-slate-400 max-w-2xl">
                  {currentLanguage === "EN" ? PERSONAL_INFO.miniBio : bnBio.miniBio}
                </p>

                {/* Info Metadata Badges */}
                <div className="flex flex-wrap items-center gap-2 pt-2">
                  <span className="inline-flex items-center gap-1 rounded-md bg-zinc-900/60 border border-zinc-800/80 px-2.5 py-1 text-xs font-mono font-medium text-slate-300">
                    <User className="h-3.5 w-3.5 text-slate-500" />
                    <strong>Google entity:</strong> "Oahid Towsif Shamol"
                  </span>
                  <span className="inline-flex items-center gap-1 rounded-md bg-zinc-900/60 border border-zinc-800/80 px-2.5 py-1 text-xs font-mono font-medium text-slate-300">
                    <Terminal className="h-3.5 w-3.5 text-slate-500" />
                    <strong>Handle:</strong> {PERSONAL_INFO.githubHandle}
                  </span>
                </div>

                {/* Call-to-actions */}
                <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-4">
                  <a
                    href="#contact"
                    className="inline-flex items-center justify-center gap-2 rounded-xl bg-teal-500 px-5 py-3 text-sm font-bold text-[#030712] shadow-xs hover:bg-teal-400 hover:shadow-lg hover:shadow-teal-500/10 transition-all cursor-pointer"
                  >
                    <span>Let's Connect</span>
                    <ArrowRight className="h-4 w-4" />
                  </a>
                  <a
                    href="#projects"
                    className="inline-flex items-center justify-center rounded-xl border border-zinc-800 bg-zinc-900/20 px-5 py-3 text-sm font-semibold text-slate-300 hover:bg-zinc-900 transition-colors"
                  >
                    View Project Cases
                  </a>
                </div>
              </ScrollReveal>

              {/* Developer Avatar Showcase with Glass Frame (5 cols) */}
              <ScrollReveal direction="right" className="lg:col-span-5 flex justify-center">
                <div className="relative group max-w-[280px] sm:max-w-[320px]">
                  {/* Glowing background halo */}
                  <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-teal-500 to-indigo-500 opacity-20 blur-xl group-hover:opacity-30 transition-all"></div>
                  
                  {/* Primary framing container */}
                  <div className="relative rounded-2xl border border-zinc-800 bg-[#0b0c10] p-3 shadow-md">
                    <img
                      src="/src/assets/images/developer_avatar_1782018395211.jpg"
                      alt="Oahid Towsif Shamol logo avatar"
                      referrerPolicy="no-referrer"
                      className="rounded-xl w-full aspect-square object-cover transition-transform group-hover:scale-[1.01]"
                    />
                    
                    {/* Floating verified domain capsule */}
                    <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between rounded-xl bg-black/90 border border-zinc-800/80 py-2.5 px-4 text-xs shadow-lg backdrop-blur-xs text-white">
                      <div className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-teal-400 fill-teal-400/10" />
                        <span className="font-semibold tracking-wide">{PERSONAL_INFO.domain}</span>
                      </div>
                      <span className="text-[10px] font-mono text-teal-300 font-bold">Live</span>
                    </div>
                  </div>
                </div>
              </ScrollReveal>

            </div>
          </div>
        </section>

        {/* DETAILED RICH BIO SHOWCASE SECTION */}
        <section className="bg-transparent py-14 border-b border-zinc-900/50">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <ScrollReveal direction="up">
              <div className="rounded-2xl border border-zinc-800/80 bg-[#0b0c10] p-6 md:p-8 shadow-xs">
                <h3 className="text-xs font-semibold uppercase tracking-wider text-slate-500 flex items-center gap-2 mb-4">
                  <User className="h-4 w-4 text-teal-400" />
                  {currentLanguage === "EN" ? "Developer Biography" : "জীবনী পরিচিতি"}
                </h3>
                <p className="text-sm sm:text-base leading-relaxed text-slate-300">
                  {currentLanguage === "EN" ? PERSONAL_INFO.fullBio : bnBio.fullBio}
                </p>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* PORTFOLIO PROJECTS BLOCK */}
        <section id="projects" className="bg-transparent py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            
            {/* Header control center */}
            <ScrollReveal direction="up">
              <div className="mb-10 flex flex-col justify-between gap-4 md:flex-row md:items-end">
                <div>
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-teal-950/30 px-3 py-1 text-xs font-semibold text-teal-400 border border-teal-900/40">
                    <Code2 className="h-3.5 w-3.5" /> Project Repository
                  </span>
                  <h2 className="mt-3 text-3xl font-bold font-display text-white animate-fade-in">
                    Showcase of Web Applications
                  </h2>
                  <p className="mt-1 text-sm text-slate-400 max-w-xl">
                    Explore custom scripts, utilities, and developer scaffolds registered under handle <strong>{PERSONAL_INFO.githubHandle}</strong>.
                  </p>
                </div>

                {/* Filtering Controls */}
                <div className="flex flex-wrap items-center gap-1.5 rounded-xl border border-zinc-800 bg-[#0b0c10] p-1 font-sans">
                  {["All", "Web App", "Library"].map((cat) => (
                    <button
                      key={cat}
                      onClick={() => setFilterCategory(cat)}
                      className={`rounded-lg px-3 py-1.5 text-xs font-bold transition-all cursor-pointer ${
                        filterCategory === cat
                          ? "bg-zinc-800 text-teal-400 shadow-xs border border-zinc-700/50"
                          : "text-slate-400 hover:text-white"
                      }`}
                    >
                      {cat}
                    </button>
                  ))}
                </div>
              </div>
            </ScrollReveal>

            {/* Grid distribution */}
            <ScrollReveal direction="up" delay={0.1}>
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {filteredProjects.map((project) => (
                  <ProjectCard key={project.id} project={project} />
                ))}
              </div>
            </ScrollReveal>

          </div>
        </section>

        {/* SKILLS SYSTEM SECTION */}
        <section id="skills" className="bg-transparent py-16 border-t border-b border-zinc-900/50">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            
            <ScrollReveal direction="up">
              <div className="mb-10 text-center">
                <span className="inline-flex items-center gap-1.5 rounded-full bg-zinc-900 px-3 py-1 text-xs font-semibold text-slate-400 border border-zinc-800">
                  <Zap className="h-3.5 w-3.5 text-teal-400" /> Technology Stacks
                </span>
                <h2 className="mt-3 text-3xl font-bold font-display text-white">
                  Specialized Capabilities
                </h2>
                <p className="mx-auto mt-2 text-sm text-slate-400 max-w-lg">
                  Engineered for responsiveness, fast loading times, and custom web compliance.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="up" delay={0.1}>
              <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                {SKILL_CATEGORIES.map((category) => (
                  <div 
                    key={category.id} 
                    className="rounded-2xl border border-zinc-800/80 bg-[#0b0c10] p-6 shadow-sm"
                    id={`skill-cat-${category.id}`}
                  >
                    <h3 className="mb-6 text-sm font-bold uppercase tracking-wider text-slate-400 flex items-center gap-2 border-b border-zinc-900 pb-3">
                      <span className="h-1.5 w-1.5 rounded-full bg-teal-400"></span>
                      {category.title}
                    </h3>

                    <div className="space-y-4">
                      {category.skills.map((skill) => (
                        <div key={skill.name} className="space-y-1.5">
                          <div className="flex items-center justify-between text-xs">
                            <span className="font-semibold text-slate-300">{skill.name}</span>
                            <span className="font-mono text-slate-500 text-[10px]">{skill.level}</span>
                          </div>
                          {/* Progress Bar indicator */}
                          <div className="h-1.5 w-full rounded-full bg-zinc-900 overflow-hidden">
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
            </ScrollReveal>

          </div>
        </section>

        {/* CONTACT CONNECTIONS SECTION */}
        <section id="contact" className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <ScrollReveal direction="up">
            <ContactSection />
          </ScrollReveal>
        </section>

      </main>

      {/* FOOTER */}
      <footer className="border-t border-zinc-900 bg-[#030712] py-8">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-4 sm:px-6 md:flex-row lg:px-8">
          <div className="flex items-center gap-2">
            <span className="font-mono text-xs text-slate-500 uppercase">
              Host Domain: <a href={`https://${PERSONAL_INFO.domain}`} target="_blank" rel="noreferrer" className="underline font-bold text-teal-400 hover:text-teal-300">{PERSONAL_INFO.domain}</a>
            </span>
          </div>
          
          <p className="text-center text-xs text-slate-500">
            &copy; {new Date().getFullYear()} Oahid Towsif Shamol (ots249). Designed for high-fidelity responses. All rights reserved.
          </p>

          <div className="flex gap-4 text-xs text-slate-500">
            <a href="#hero" className="hover:text-teal-400 transition-colors">Top of Page</a>
            <span>&middot;</span>
            <a href="#projects" className="hover:text-teal-400 transition-colors">Projects</a>
            <span>&middot;</span>
            <a href="#contact" className="hover:text-teal-400 transition-colors">Contact</a>
          </div>
        </div>
      </footer>

      {/* Floating Radio Foorti Live Player */}
      <div 
        className="fixed bottom-6 right-6 z-50 flex items-center gap-3 rounded-full border border-zinc-800 bg-[#0b0c10]/95 px-4 py-2.5 shadow-2xl backdrop-blur-md transition-all duration-300 hover:border-teal-500/50 hover:shadow-teal-500/5" 
        id="radio-player-widget"
      >
        {/* Animated wave visualizer (only animates when actively playing) */}
        <div className="flex items-end gap-0.5 h-[18px] w-6 px-1 justify-center">
          {isPlaying && !isMuted ? (
            <>
              <span className="wave-bar"></span>
              <span className="wave-bar"></span>
              <span className="wave-bar"></span>
              <span className="wave-bar"></span>
            </>
          ) : (
            <>
              <span className="h-1 w-[2.5px] bg-slate-600 rounded-xs"></span>
              <span className="h-2 w-[2.5px] bg-slate-600 rounded-xs"></span>
              <span className="h-1 w-[2.5px] bg-slate-600 rounded-xs"></span>
              <span className="h-2 w-[2.5px] bg-slate-600 rounded-xs"></span>
            </>
          )}
        </div>

        {/* Text Details */}
        <div className="flex flex-col select-none pr-1">
          <span className="text-[9px] font-mono font-bold tracking-widest text-teal-400 uppercase flex items-center gap-1">
            <span className={`h-1.5 w-1.5 rounded-full ${isPlaying && !isMuted ? "bg-red-500 animate-pulse" : "bg-slate-600"}`}></span>
            Live Music
          </span>
          <span className="text-xs font-semibold text-white tracking-tight">Radio Foorti</span>
        </div>

        {/* Volume controls & slider */}
        <div className="flex items-center gap-2 border-l border-zinc-800/80 pl-3">
          <button
            onClick={toggleMute}
            className="text-slate-400 hover:text-teal-400 transition-colors p-1 cursor-pointer"
            title={isMuted ? "Unmute" : "Mute"}
          >
            {isMuted || volume === 0 ? (
              <VolumeX className="h-3.5 w-3.5" />
            ) : (
              <Volume2 className="h-3.5 w-3.5" />
            )}
          </button>
          
          <input
            type="range"
            min="0"
            max="1"
            step="0.05"
            value={isMuted ? 0 : volume}
            onChange={(e) => handleVolumeChange(parseFloat(e.target.value))}
            className="w-12 h-1 rounded-lg appearance-none cursor-pointer bg-zinc-800 accent-teal-500 hover:accent-teal-400 transition-all outline-none"
            title="Volume"
          />
        </div>

        {/* Master Play/Pause Circular Button */}
        <button
          onClick={togglePlay}
          className={`ml-1 flex h-8 w-8 items-center justify-center rounded-full text-[#030712] shadow-md transition-all duration-300 transform active:scale-95 cursor-pointer ${
            isPlaying 
              ? "bg-teal-500 hover:bg-teal-400 hover:scale-105 shadow-teal-500/25" 
              : "bg-teal-500 hover:bg-teal-400 shadow-teal-500/15"
          }`}
          title={isPlaying ? "Pause Stream" : "Play Live Radio"}
          id="play-radio-button"
        >
          {isPlaying ? (
            <Pause className="h-3.5 w-3.5 fill-current" />
          ) : (
            <Play className="h-3.5 w-3.5 fill-current ml-0.5" />
          )}
        </button>

      </div>

    </div>
  );
}
