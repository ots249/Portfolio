import React, { useState } from "react";
import { GOOGLE_SEO_CHECKLIST, PERSONAL_INFO } from "../data";
import { 
  Search, Globe, ChevronRight, Info, CheckCircle2, 
  HelpCircle, Copy, Check, FileText, ArrowUpRight, Award, Zap
} from "lucide-react";

export const SEODashboard: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState("Oahid Towsif Shamol");
  const [dnsStatus, setDnsStatus] = useState<Record<string, boolean>>({
    "head-meta": true,
    "domain-dns": false,
    "google-search-console": false,
    "structured-data": true,
    "social-links-auth": false
  });
  const [copiedText, setCopiedText] = useState<string | null>(null);

  const handleCopy = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopiedText(id);
    setTimeout(() => setCopiedText(null), 2000);
  };

  const toggleStatus = (id: string) => {
    setDnsStatus(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  // Google simulated search items based on selection
  const searchResultsMap: Record<string, { title: string; url: string; displayUrl: string; description: string; siteLinks?: { name: string; desc: string }[] }> = {
    "oahid towsif shamol": {
      title: "Oahid Towsif Shamol | Software Engineer & Developer Portfolio",
      url: `https://${PERSONAL_INFO.domain}`,
      displayUrl: `${PERSONAL_INFO.domain} › profile`,
      description: "Official developer portfolio of Oahid Towsif Shamol, globally known as ots249. Software developer, open-source enthusiast, and builder of custom web tools. Learn about dynamic React tools.",
      siteLinks: [
        { name: "My Web Projects", desc: "Showcasing BengalChat Engine, ots249-cli utility and more local scripts." },
        { name: "SEO Development Workspace", desc: "Interactive DNS checklists and Google visibility optimizer guidelines." }
      ]
    },
    "ots249": {
      title: "ots249 (Oahid Towsif Shamol) · GitHub",
      url: `https://github.com/${PERSONAL_INFO.githubHandle}`,
      displayUrl: "github.com › ots249",
      description: "ots249 has 4 developers repositories. Follow ots249 to track their contributions and open source software on github.",
      siteLinks: [
        { name: `towsif.pro.bd homepage`, desc: "Linked official personal portfolio canonical address for Oahid Towsif." }
      ]
    },
    "towsif.pro.bd": {
      title: `Oahid Towsif Shamol - Portfolio Home (${PERSONAL_INFO.domain})`,
      url: `https://${PERSONAL_INFO.domain}`,
      displayUrl: `${PERSONAL_INFO.domain}`,
      description: "Explore the live workspace of Oahid Towsif Shamol (ots249) hosted on towsif.pro.bd. Built with React 19, TypeScript, and modern responsive grids.",
      siteLinks: [
        { name: "Skills Inventory", desc: "Expertise in Frontend engineering, web performance, and domain mapping." }
      ]
    }
  };

  const getActiveResult = () => {
    const norm = searchQuery.toLowerCase().trim();
    if (norm.includes("shamol") || norm.includes("oahid") || norm.includes("towsif")) {
      return searchResultsMap["oahid towsif shamol"];
    }
    if (norm.includes("ots") || norm.includes("249")) {
      return searchResultsMap["ots249"];
    }
    if (norm.includes("pro") || norm.includes("bd") || norm.includes("domain")) {
      return searchResultsMap["towsif.pro.bd"];
    }
    // Default fallback matching the general scope
    return searchResultsMap["oahid towsif shamol"];
  };

  const currentResult = getActiveResult();

  // Calculate SEO score
  const activeStepsCount = Object.values(dnsStatus).filter(Boolean).length;
  const totalStepsCount = Object.keys(dnsStatus).length;
  const seoScorePercentage = Math.round((activeStepsCount / totalStepsCount) * 100);

  return (
    <div id="seo-dashboard" className="rounded-3xl border border-slate-200 bg-slate-50/50 p-6 md:p-8 backdrop-blur-sm">
      {/* Header section with explanatory message */}
      <div className="mb-8 flex flex-col justify-between gap-4 md:flex-row md:items-center">
        <div>
          <div className="mb-2 flex items-center gap-2">
            <span className="inline-flex items-center gap-1 rounded-full bg-teal-50 px-2.5 py-1 text-xs font-semibold text-teal-700">
              <Zap className="h-3 w-3" /> Search Visibility Tool
            </span>
            <span className="text-xs text-slate-500 font-mono">Domain: {PERSONAL_INFO.domain}</span>
          </div>
          <h2 className="text-2xl font-bold font-display text-slate-800">
            Google Search Visibility Dashboard
          </h2>
          <p className="mt-1 text-sm text-slate-600 max-w-2xl">
            This module simulates how Google indexes your website. Configure DNS records for <strong>{PERSONAL_INFO.domain}</strong> and verify your handle <strong>{PERSONAL_INFO.githubHandle}</strong> below to establish prime authority.
          </p>
        </div>

        {/* SEO score circle indicator */}
        <div className="flex items-center gap-4 rounded-2xl border border-slate-150 bg-white p-4 shadow-xs self-start md:self-auto">
          <div className="relative flex h-14 w-14 items-center justify-center">
            {/* Simple Circular Progress Representation */}
            <svg className="absolute top-0 left-0 h-full w-full rotate-270 transform">
              <circle
                cx="28"
                cy="28"
                r="24"
                fill="transparent"
                stroke="#e2e8f0"
                strokeWidth="4"
              />
              <circle
                cx="28"
                cy="28"
                r="24"
                fill="transparent"
                stroke={seoScorePercentage > 75 ? "#0d9488" : seoScorePercentage > 50 ? "#f59e0b" : "#ef4444"}
                strokeWidth="4"
                strokeDasharray={`${2 * Math.PI * 24}`}
                strokeDashoffset={`${2 * Math.PI * 24 * (1 - seoScorePercentage / 100)}`}
                className="transition-all duration-500"
              />
            </svg>
            <span className="text-sm font-bold text-slate-850">{seoScorePercentage}%</span>
          </div>
          <div>
            <div className="text-xs text-slate-500 font-mono">SEO Readiness Score</div>
            <div className="text-sm font-bold text-slate-850">
              {seoScorePercentage === 100 ? "Ready to Rank No. 1" : "Action Required"}
            </div>
          </div>
        </div>
      </div>

      <div className="grid gap-8 lg:grid-cols-12">
        {/* Left Column: Interactive Google Search Simulator (7 cols) */}
        <div className="space-y-6 lg:col-span-7">
          <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-xs">
            <h3 className="mb-4 text-xs font-semibold uppercase tracking-wider text-slate-500 flex items-center gap-1.5">
              <span className="h-2 w-2 rounded-full bg-teal-500"></span>
              Live Google Search Simulator (SRE Preview)
            </h3>

            {/* Simulated Search bar */}
            <div className="relative mb-5 flex items-center rounded-full border border-slate-200 bg-slate-50 p-1 shadow-inner focus-within:ring-2 focus-within:ring-teal-500/20 focus-within:border-teal-500 transition-all">
              <Search className="ml-3 h-4.5 w-4.5 text-slate-400 shrink-0" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search on Google..."
                className="w-full bg-transparent px-3 py-2 text-sm text-slate-800 outline-hidden font-sans"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery("")}
                  className="mr-2 text-xs text-slate-400 hover:text-slate-600 font-mono px-1.5 py-0.5 rounded cursor-pointer"
                >
                  Clear
                </button>
              )}
            </div>

            {/* Quick Presets */}
            <div className="mb-6 flex flex-wrap items-center gap-2">
              <span className="text-xs text-slate-500">Suggested queries:</span>
              <button
                onClick={() => setSearchQuery("Oahid Towsif Shamol")}
                className={`rounded-full px-3 py-1 text-xs border transition-all cursor-pointer ${
                  searchQuery.toLowerCase().trim() === "oahid towsif shamol"
                    ? "bg-teal-500 text-white border-teal-500 font-medium"
                    : "bg-slate-50 text-slate-600 border-slate-200 hover:bg-slate-100"
                }`}
              >
                Oahid Towsif Shamol
              </button>
              <button
                onClick={() => setSearchQuery("ots249")}
                className={`rounded-full px-3 py-1 text-xs border transition-all cursor-pointer ${
                  searchQuery.toLowerCase().trim() === "ots249"
                    ? "bg-teal-500 text-white border-teal-500 font-medium"
                    : "bg-slate-50 text-slate-600 border-slate-200 hover:bg-slate-100"
                }`}
              >
                ots249
              </button>
              <button
                onClick={() => setSearchQuery("towsif.pro.bd")}
                className={`rounded-full px-3 py-1 text-xs border transition-all cursor-pointer ${
                  searchQuery.toLowerCase().trim() === "towsif.pro.bd"
                    ? "bg-teal-500 text-white border-teal-500 font-medium"
                    : "bg-slate-50 text-slate-600 border-slate-200 hover:bg-slate-100"
                }`}
              >
                towsif.pro.bd
              </button>
            </div>

            {/* Google Search Result Preview Container */}
            <div className="border-t border-slate-100 pt-5">
              <div className="max-w-xl">
                {/* Site Breadcrumbs */}
                <div className="flex items-center gap-1.5 text-xs text-slate-600 mb-1">
                  <span className="inline-flex h-4 w-4 items-center justify-center rounded-full bg-slate-100 text-[10px] text-slate-500 font-semibold font-mono">
                    G
                  </span>
                  <span className="truncate hover:underline cursor-pointer font-mono text-slate-500">{currentResult.displayUrl}</span>
                  <span className="text-[10px] text-slate-400 font-mono">▼</span>
                </div>

                {/* Hyperlinked title */}
                <a
                  href={currentResult.url}
                  target="_blank"
                  rel="noreferrer"
                  className="text-lg md:text-xl font-medium text-[#1a0dab] hover:underline block leading-tight mb-1.5 font-sans"
                >
                  {currentResult.title}
                </a>

                {/* Description Snippet */}
                <p className="text-xs md:text-sm text-[#4d5156] leading-relaxed mb-4">
                  {currentResult.description}
                </p>

                {/* Sitelinks (if any) */}
                {currentResult.siteLinks && currentResult.siteLinks.length > 0 && (
                  <div className="pl-4 border-l-2 border-slate-100/80 grid gap-3 my-3">
                    {currentResult.siteLinks.map((link, idx) => (
                      <div key={idx} className="text-xs">
                        <span className="text-[#1a0dab] font-medium hover:underline cursor-pointer block mb-0.5">
                          {link.name}
                        </span>
                        <span className="text-slate-500 leading-relaxed block">{link.desc}</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
            
            {/* Informative advice container */}
            <div className="mt-5 rounded-xl bg-teal-50/50 border border-teal-100 p-4 text-xs text-teal-800">
              <div className="flex gap-2.5">
                <Info className="h-4.5 w-4.5 text-teal-600 shrink-0 mt-0.5" />
                <div className="space-y-1">
                  <span className="font-semibold block">SEO Correlation Advantage:</span>
                  <p className="leading-relaxed">
                    By embedding exact name tags in the structured <code>{"<script type='application/ld+json'>"}</code> head of index.html, search engine bots instantly understand that searches for <strong>"Oahid Towsif Shamol"</strong> or <strong>"ots249"</strong> resolve to the canonical domain <strong>towsif.pro.bd</strong>.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* DNS Settings Reference Box */}
          <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-xs">
            <div className="flex gap-2 mb-3">
              <Globe className="h-5 w-5 text-teal-600" />
              <h3 className="text-sm font-bold text-slate-800">
                Registrar DNS Settings (towsif.pro.bd)
              </h3>
            </div>
            <p className="text-xs text-slate-600 mb-4">
              To wire your purchased domain (<strong>towsif.pro.bd</strong>) so it serves this exact web application, log in to your domain administration console (e.g. BTCL web interface or domain control panel) and apply these values:
            </p>

            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs font-mono border-collapse">
                <thead>
                  <tr className="border-b border-slate-100 text-slate-400 bg-slate-50">
                    <th className="py-2 px-3">Type</th>
                    <th className="py-2 px-3">Host Name</th>
                    <th className="py-2 px-3">Points To</th>
                    <th className="py-2 px-3 text-right">Action</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  <tr>
                    <td className="py-3 px-3 font-semibold text-teal-700">A</td>
                    <td className="py-3 px-3 font-medium text-slate-705">@</td>
                    <td className="py-3 px-3 text-slate-600">34.111.45.195 <span className="opacity-40">(Cloud Run)</span></td>
                    <td className="py-3 px-3 text-right">
                      <button 
                        onClick={() => handleCopy("34.111.45.195", "a-val")}
                        className="p-1 hover:bg-slate-100 rounded text-slate-500 hover:text-slate-700 cursor-pointer"
                        title="Copy Value"
                      >
                        {copiedText === "a-val" ? <Check className="h-3.5 w-3.5 text-teal-600" /> : <Copy className="h-3.5 w-3.5" />}
                      </button>
                    </td>
                  </tr>
                  <tr>
                    <td className="py-3 px-3 font-semibold text-teal-700">CNAME</td>
                    <td className="py-3 px-3 font-medium text-slate-705">www</td>
                    <td className="py-3 px-3 text-slate-600">towsif.pro.bd</td>
                    <td className="py-3 px-3 text-right">
                      <button 
                        onClick={() => handleCopy("towsif.pro.bd", "cname-val")}
                        className="p-1 hover:bg-slate-100 rounded text-slate-500 hover:text-slate-700 cursor-pointer"
                        title="Copy Value"
                      >
                        {copiedText === "cname-val" ? <Check className="h-3.5 w-3.5 text-teal-600" /> : <Copy className="h-3.5 w-3.5" />}
                      </button>
                    </td>
                  </tr>
                  <tr>
                    <td className="py-3 px-3 font-semibold text-teal-700">TXT <span className="text-[9px] text-slate-400">(Google)</span></td>
                    <td className="py-3 px-3 font-medium text-slate-705">@</td>
                    <td className="py-3 px-3 text-slate-600 truncate max-w-[150px]">google-site-verification=ots249_verification_token</td>
                    <td className="py-3 px-3 text-right">
                      <button 
                        onClick={() => handleCopy("google-site-verification=ots249_verification_token", "txt-verify")}
                        className="p-1 hover:bg-slate-100 rounded text-slate-500 hover:text-slate-700 cursor-pointer"
                        title="Copy Verification Record"
                      >
                        {copiedText === "txt-verify" ? <Check className="h-3.5 w-3.5 text-teal-600" /> : <Copy className="h-3.5 w-3.5" />}
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="mt-4 flex items-center gap-2 text-[10px] text-slate-500">
              <Info className="h-3.5 w-3.5 text-slate-400 shrink-0" />
              <span>Note: DNS updates might take anytime between 1 hour to 24 hours to propagate globally.</span>
            </div>
          </div>
        </div>

        {/* Right Column: Key Interactive SEO steps check (5 cols) */}
        <div className="lg:col-span-5 space-y-6">
          <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-xs">
            <h3 className="mb-4 text-xs font-semibold uppercase tracking-wider text-slate-500 flex items-center gap-1.5">
              <Award className="h-4 w-4 text-teal-600" /> SEO Optimization Roadmap
            </h3>
            <p className="mb-5 text-xs text-slate-600 leading-relaxed">
              Complete these steps so Google search bots link your personal identity and index the domain. Toggle completed steps to update visibility score context:
            </p>

            <div className="space-y-4">
              {GOOGLE_SEO_CHECKLIST.map((step) => {
                const isActive = dnsStatus[step.id];
                return (
                  <div 
                    key={step.id} 
                    className={`rounded-xl border p-4 transition-all duration-300 ${
                      isActive 
                        ? "border-teal-100 bg-teal-50/20" 
                        : "border-slate-100 bg-slate-50/20"
                    }`}
                  >
                    <div className="flex items-start justify-between gap-2.5">
                      <div className="flex items-start gap-2.5">
                        <button
                          onClick={() => toggleStatus(step.id)}
                          className="mt-0.5 shrink-0 rounded-md p-0.5 hover:bg-slate-100 cursor-pointer"
                          title="Toggle Completion Status"
                        >
                          <CheckCircle2 
                            className={`h-5 w-5 ${
                              isActive ? "text-teal-600 fill-teal-100/50" : "text-slate-300 fill-none"
                            }`} 
                          />
                        </button>
                        <div>
                          <h4 className="text-xs font-bold text-slate-800 leading-none flex items-center gap-2">
                            {step.title}
                            {step.id === "head-meta" || step.id === "structured-data" ? (
                              <span className="inline-block px-1.5 py-0.2 text-[9px] font-semibold bg-emerald-100 text-emerald-800 border-none rounded">
                                Implemented
                              </span>
                            ) : null}
                          </h4>
                          <p className="mt-1.5 text-xs leading-relaxed text-slate-600">
                            {step.message}
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Detailed expandable helper info */}
                    <div className="mt-3 border-t border-dashed border-slate-200/60 pt-3 text-[11px] text-slate-600 leading-relaxed">
                      <span className="font-semibold text-slate-700">Guide how-to:</span> {step.solution}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Special Backlinking Advice Card for Bangladesh users */}
          <div className="rounded-2xl border border-teal-150 bg-teal-500/5 p-5 relative overflow-hidden">
            <div className="absolute -top-3 -right-3 h-20 w-20 bg-teal-500/10 rounded-full blur-xl"></div>
            <h4 className="text-xs font-bold text-teal-900 mb-2 font-display flex items-center gap-1.5">
              💡 Bangla SEO Quick Tip
            </h4>
            <p className="text-xs text-teal-800 leading-relaxed">
              Google crawler-er kache <strong>towsif.pro.bd</strong> domain-er authority drupoto barate, GitHub description ebong LinkedIn portfolio website connection-e domain name address add korun. Eta korle crawler instantly "ots249" keywords er shathe local domain map kore ney ebong 2-3 diner vitor index list top-e chole ashe.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
