import React, { useState } from "react";
import { PERSONAL_INFO } from "../data";
import { Mail, Github, Linkedin, Twitter, MessageSquare, Send, Check, Copy } from "lucide-react";

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [sending, setSending] = useState(false);
  const [sentSuccess, setSentSuccess] = useState(false);

  const handleCopy = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    
    setSending(true);
    // Simulate API request
    setTimeout(() => {
      setSending(false);
      setSentSuccess(true);
      setFormData({ name: "", email: "", subject: "", message: "" });
      setTimeout(() => setSentSuccess(false), 5000);
    }, 1200);
  };

  return (
    <div id="contact-workspace" className="grid gap-8 lg:grid-cols-12 text-slate-100">
      {/* Visual coordinates card (5 cols) */}
      <div className="lg:col-span-5 flex flex-col justify-between rounded-2xl border border-zinc-800/80 bg-[#0b0c10] p-6 md:p-8 shadow-sm">
        <div>
          <span className="inline-flex items-center gap-1.5 rounded-full bg-teal-950/30 px-3 py-1 text-xs font-semibold text-teal-400 border border-teal-900/40">
            <MessageSquare className="h-3.5 w-3.5" /> Connections & Collaboration
          </span>
          <h3 className="mt-4 text-2xl font-bold font-display text-white">
            Let's Collaborate
          </h3>
          <p className="mt-2 text-sm text-slate-400 leading-relaxed">
            I am always looking to collaborate on open-source packages, freelance software services, or custom SEO deployments. Feel free to reach out via email or look up my handle <strong>{PERSONAL_INFO.githubHandle}</strong> globally.
          </p>
        </div>

        {/* Quick Connection Details */}
        <div className="my-8 space-y-4">
          {/* Email Card */}
          <div className="flex items-center justify-between rounded-xl border border-zinc-800/50 bg-zinc-900/20 p-3 h-14">
            <div className="flex items-center gap-3">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-teal-950/50 text-teal-400 shrink-0 border border-teal-900/30">
                <Mail className="h-4 w-4" />
              </div>
              <div className="overflow-hidden">
                <div className="text-[10px] uppercase tracking-wider text-slate-500 font-mono">Gmail Inquiries</div>
                <div className="text-xs font-semibold text-slate-200 truncate max-w-[170px]">{PERSONAL_INFO.email}</div>
              </div>
            </div>
            <button
              onClick={() => handleCopy(PERSONAL_INFO.email, "email")}
              className="rounded-lg p-1.5 text-slate-400 hover:bg-zinc-900 hover:text-white transition-colors cursor-pointer"
              title="Copy email to clipboard"
            >
              {copiedId === "email" ? <Check className="h-4 w-4 text-emerald-400" /> : <Copy className="h-4 w-4" />}
            </button>
          </div>

          {/* GitHub Handle Card */}
          <div className="flex items-center justify-between rounded-xl border border-zinc-800/50 bg-zinc-900/20 p-3 h-14">
            <div className="flex items-center gap-3">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-zinc-900 text-slate-300 shrink-0 border border-zinc-800">
                <Github className="h-4 w-4" />
              </div>
              <div>
                <div className="text-[10px] uppercase tracking-wider text-slate-500 font-mono">GitHub Profile</div>
                <div className="text-xs font-semibold text-slate-200">{PERSONAL_INFO.githubHandle}</div>
              </div>
            </div>
            <a
              href={PERSONAL_INFO.github}
              target="_blank"
              rel="noreferrer"
              className="rounded-lg p-1.5 text-slate-400 hover:bg-zinc-900 hover:text-white transition-colors cursor-pointer"
              title="Visit Github profile"
            >
              <Github className="h-4 w-4" />
            </a>
          </div>

          {/* Twitter Card */}
          <div className="flex items-center justify-between rounded-xl border border-zinc-800/50 bg-zinc-900/20 p-3 h-14">
            <div className="flex items-center gap-3">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#1da1f2]/10 text-[#1da1f2] shrink-0 border border-[#1da1f2]/20">
                <Twitter className="h-4 w-4" />
              </div>
              <div>
                <div className="text-[10px] uppercase tracking-wider text-slate-500 font-mono">Twitter Account</div>
                <div className="text-xs font-semibold text-slate-200">@{PERSONAL_INFO.githubHandle}</div>
              </div>
            </div>
            <a
              href={PERSONAL_INFO.twitter}
              target="_blank"
              rel="noreferrer"
              className="rounded-lg p-1.5 text-slate-400 hover:bg-zinc-900 hover:text-white transition-colors cursor-pointer"
              title="Visit Twitter account"
            >
              <Twitter className="h-4 w-4" />
            </a>
          </div>
        </div>

        {/* Dynamic Social Links layout */}
        <div className="flex items-center gap-3 border-t border-zinc-850 pt-5">
          <a
            href={PERSONAL_INFO.github}
            target="_blank"
            rel="noreferrer"
            className="flex h-10 w-10 items-center justify-center rounded-lg border border-zinc-800 bg-zinc-900/30 text-slate-400 hover:border-teal-500 hover:text-teal-400 transition-colors"
            title="GitHub"
          >
            <Github className="h-5 w-5" />
          </a>
          <a
            href={PERSONAL_INFO.linkedin}
            target="_blank"
            rel="noreferrer"
            className="flex h-10 w-10 items-center justify-center rounded-lg border border-zinc-800 bg-zinc-900/30 text-slate-400 hover:border-teal-500 hover:text-teal-400 transition-colors"
            title="LinkedIn"
          >
            <Linkedin className="h-5 w-5" />
          </a>
          <a
            href={PERSONAL_INFO.twitter}
            target="_blank"
            rel="noreferrer"
            className="flex h-10 w-10 items-center justify-center rounded-lg border border-zinc-800 bg-zinc-900/30 text-slate-400 hover:border-teal-500 hover:text-teal-400 transition-colors"
            title="Twitter"
          >
            <Twitter className="h-5 w-5" />
          </a>
        </div>
      </div>

      {/* Structured interactive contact form (7 cols) */}
      <div className="lg:col-span-7 rounded-2xl border border-zinc-800/80 bg-[#0b0c10] p-6 md:p-8 shadow-sm">
        <h3 className="text-sm font-bold uppercase tracking-wider text-slate-450 mb-5">
          Send a Digital Memo
        </h3>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <label htmlFor="user-name" className="block text-xs font-semibold text-slate-400 mb-1">Your Name</label>
              <input
                id="user-name"
                type="text"
                required
                value={formData.name}
                onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                placeholder="Ex. Adnan Chowdhury"
                className="w-full rounded-xl border border-zinc-800 bg-[#030712] px-4 py-2.5 text-sm text-slate-200 outline-hidden focus:border-teal-500 focus:ring-2 focus:ring-teal-500/10 transition-all font-sans"
              />
            </div>
            <div>
              <label htmlFor="user-email" className="block text-xs font-semibold text-slate-400 mb-1">Your Email</label>
              <input
                id="user-email"
                type="email"
                required
                value={formData.email}
                onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                placeholder="Ex. adnan@domain.com"
                className="w-full rounded-xl border border-zinc-800 bg-[#030712] px-4 py-2.5 text-sm text-slate-200 outline-hidden focus:border-teal-500 focus:ring-2 focus:ring-teal-500/10 transition-all font-sans"
              />
            </div>
          </div>

          <div>
            <label htmlFor="subject-input" className="block text-xs font-semibold text-slate-400 mb-1">Subject</label>
            <input
              id="subject-input"
              type="text"
              value={formData.subject}
              onChange={(e) => setFormData(prev => ({ ...prev, subject: e.target.value }))}
              placeholder="Ex. Domain hosting inquiry or freelance project query"
              className="w-full rounded-xl border border-zinc-800 bg-[#030712] px-4 py-2.5 text-sm text-slate-200 outline-hidden focus:border-teal-500 focus:ring-2 focus:ring-teal-500/10 transition-all font-sans"
            />
          </div>

          <div>
            <label htmlFor="message-input" className="block text-xs font-semibold text-slate-400 mb-1">Your Message</label>
            <textarea
              id="message-input"
              rows={4}
              required
              value={formData.message}
              onChange={(e) => setFormData(prev => ({ ...prev, message: e.target.value }))}
              placeholder="Write your suggestions, questions, or ideas here..."
              className="w-full rounded-xl border border-zinc-800 bg-[#030712] px-4 py-2.5 text-sm text-slate-200 outline-hidden focus:border-teal-500 focus:ring-2 focus:ring-teal-500/10 transition-all font-sans resize-none"
            />
          </div>

          <div className="pt-2">
            <button
              type="submit"
              disabled={sending || sentSuccess}
              className="relative inline-flex items-center justify-center gap-2 rounded-xl bg-teal-600 px-6 py-3 text-sm font-semibold text-white shadow-xs transition-all hover:bg-teal-700 hover:shadow-md focus:outline-hidden focus:ring-2 focus:ring-teal-500/40 disabled:opacity-75 cursor-pointer w-full sm:w-auto"
            >
              {sending ? (
                <>
                  <span className="h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent" />
                  Sending...
                </>
              ) : sentSuccess ? (
                <>
                  <Check className="h-4.5 w-4.5 text-emerald-300" />
                  Sent Successfully!
                </>
              ) : (
                <>
                  <Send className="h-4 w-4" />
                  Send Message
                </>
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
