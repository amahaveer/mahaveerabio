// BlogPost.tsx — Executive Blueprint Design System
// Design: Swiss International Typographic Style meets Modern Executive Portfolio
// Colors: Deep Navy (#1a2744), Warm Amber (#c8922a), Off-White (#f8f6f1)
// Fonts: Playfair Display (headings), Source Sans 3 (body), IBM Plex Mono (labels)

import { Link, useParams } from "wouter";
import { ArrowLeft, ArrowRight, Clock, Tag, ChevronRight, Share2, Linkedin } from "lucide-react";
import { getBlogPostById, blogPosts } from "@/lib/blogData";
import { motion } from "framer-motion";

export default function BlogPost() {
  const { id } = useParams<{ id: string }>();
  const post = getBlogPostById(id || "");

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center" style={{ backgroundColor: "#f8f6f1" }}>
        <div className="text-center">
          <h2 style={{ fontFamily: "'Playfair Display', serif", color: "#1a2744" }} className="text-3xl font-bold mb-4">
            Article Not Found
          </h2>
          <Link href="/blog">
            <button className="flex items-center gap-2 mx-auto text-sm font-medium" style={{ color: "#c8922a", fontFamily: "'IBM Plex Mono', monospace" }}>
              <ArrowLeft size={16} /> Back to Blog
            </button>
          </Link>
        </div>
      </div>
    );
  }

  const related = blogPosts.filter((p) => p.id !== post.id && (p.category === post.category || p.tags.some((t) => post.tags.includes(t)))).slice(0, 2);

  const renderSection = (section: typeof post.content[0], idx: number) => {
    switch (section.type) {
      case "heading":
        return (
          <h2 key={idx} className="text-2xl font-bold mt-10 mb-4" style={{ fontFamily: "'Playfair Display', serif", color: "#1a2744" }}>
            {section.text}
          </h2>
        );
      case "subheading":
        return (
          <h3 key={idx} className="text-lg font-bold mt-6 mb-3" style={{ fontFamily: "'Playfair Display', serif", color: "#1a2744" }}>
            {section.text}
          </h3>
        );
      case "paragraph":
        return (
          <p key={idx} className="text-base leading-relaxed mb-5" style={{ color: "#374151", fontFamily: "'Source Sans 3', sans-serif" }}>
            {section.text}
          </p>
        );
      case "quote":
        return (
          <blockquote
            key={idx}
            className="my-8 pl-6 py-2 border-l-4"
            style={{ borderColor: "#c8922a", backgroundColor: "rgba(200,146,42,0.04)" }}
          >
            <p className="text-lg italic leading-relaxed" style={{ color: "#1a2744", fontFamily: "'Playfair Display', serif" }}>
              "{section.text}"
            </p>
          </blockquote>
        );
      case "list":
        return (
          <ul key={idx} className="my-5 space-y-3">
            {section.items?.map((item, i) => (
              <li key={i} className="flex items-start gap-3 text-base" style={{ color: "#374151", fontFamily: "'Source Sans 3', sans-serif" }}>
                <span className="mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ backgroundColor: "#c8922a" }} />
                {item}
              </li>
            ))}
          </ul>
        );
      case "callout":
        return (
          <div
            key={idx}
            className="my-8 p-6 rounded-xl"
            style={{ backgroundColor: "#1a2744", border: "1px solid rgba(200,146,42,0.2)" }}
          >
            <p className="text-sm leading-relaxed font-medium" style={{ color: "rgba(248,246,241,0.85)", fontFamily: "'Source Sans 3', sans-serif" }}>
              💡 {section.text}
            </p>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen" style={{ backgroundColor: "#f8f6f1" }}>
      {/* Header */}
      <header className="sticky top-0 z-50 border-b" style={{ backgroundColor: "#1a2744", borderColor: "#2a3a5c" }}>
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link href="/blog">
            <button className="flex items-center gap-2 text-sm font-medium transition-colors hover:opacity-80" style={{ color: "#c8922a", fontFamily: "'IBM Plex Mono', monospace" }}>
              <ArrowLeft size={16} />
              All Articles
            </button>
          </Link>
          <Link href="/">
            <div style={{ fontFamily: "'Playfair Display', serif", color: "#f8f6f1" }} className="text-lg font-bold cursor-pointer hover:opacity-80">
              Mahaveer Amudhachandran
            </div>
          </Link>
          <div className="flex items-center gap-3">
            <a
              href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(typeof window !== 'undefined' ? window.location.href : '')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-xs px-3 py-1.5 rounded-full transition-all hover:opacity-80"
              style={{ backgroundColor: "rgba(200,146,42,0.15)", color: "#c8922a", fontFamily: "'IBM Plex Mono', monospace", border: "1px solid rgba(200,146,42,0.3)" }}
            >
              <Linkedin size={12} />
              Share
            </a>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden" style={{ minHeight: "420px" }}>
        <div className="absolute inset-0">
          <img src={post.coverImage} alt={post.title} className="w-full h-full object-cover" />
          <div className="absolute inset-0" style={{ background: "linear-gradient(135deg, rgba(26,39,68,0.97) 0%, rgba(26,39,68,0.88) 60%, rgba(26,39,68,0.7) 100%)" }} />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-6 py-20">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-xs mb-8" style={{ color: "rgba(248,246,241,0.5)", fontFamily: "'IBM Plex Mono', monospace" }}>
            <Link href="/"><span className="hover:text-amber-400 cursor-pointer">Home</span></Link>
            <ChevronRight size={12} />
            <Link href="/blog"><span className="hover:text-amber-400 cursor-pointer">Blog</span></Link>
            <ChevronRight size={12} />
            <span style={{ color: "#c8922a" }}>{post.category}</span>
          </div>
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <p className="text-xs uppercase tracking-widest mb-4" style={{ color: "#c8922a", fontFamily: "'IBM Plex Mono', monospace" }}>
              {post.category}
            </p>
            <h1 className="text-3xl md:text-5xl font-bold mb-5 leading-tight" style={{ fontFamily: "'Playfair Display', serif", color: "#f8f6f1" }}>
              {post.title}
            </h1>
            <p className="text-base mb-8 max-w-2xl leading-relaxed" style={{ color: "rgba(248,246,241,0.7)", fontFamily: "'Source Sans 3', sans-serif" }}>
              {post.subtitle}
            </p>
            <div className="flex flex-wrap items-center gap-4">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full flex items-center justify-center text-sm font-bold" style={{ backgroundColor: "#c8922a", color: "#fff", fontFamily: "'Playfair Display', serif" }}>
                  M
                </div>
                <div>
                  <p className="text-xs font-semibold" style={{ color: "#f8f6f1", fontFamily: "'Source Sans 3', sans-serif" }}>Mahaveer Amudhachandran</p>
                  <p className="text-xs" style={{ color: "rgba(248,246,241,0.5)", fontFamily: "'IBM Plex Mono', monospace" }}>Sr. Solution Architect</p>
                </div>
              </div>
              <div className="flex items-center gap-4 text-xs" style={{ color: "rgba(248,246,241,0.5)", fontFamily: "'IBM Plex Mono', monospace" }}>
                <span>{post.publishedDate}</span>
                <span className="flex items-center gap-1"><Clock size={11} /> {post.readTime}</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
          {/* Article Body */}
          <article className="lg:col-span-3">
            {/* Excerpt / Lead */}
            <div
              className="p-6 rounded-xl mb-10"
              style={{ backgroundColor: "#ffffff", border: "1px solid #e8e4dc", boxShadow: "0 2px 12px rgba(26,39,68,0.06)" }}
            >
              <p className="text-lg leading-relaxed font-medium" style={{ color: "#1a2744", fontFamily: "'Source Sans 3', sans-serif" }}>
                {post.excerpt}
              </p>
            </div>

            {/* Body Sections */}
            <div className="prose-custom">
              {post.content.map((section, idx) => renderSection(section, idx))}
            </div>

            {/* Tags */}
            <div className="mt-12 pt-8 border-t" style={{ borderColor: "#e8e4dc" }}>
              <p className="text-xs uppercase tracking-wider mb-4" style={{ color: "#9ca3af", fontFamily: "'IBM Plex Mono', monospace" }}>
                Topics
              </p>
              <div className="flex flex-wrap gap-2">
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="flex items-center gap-1.5 text-xs px-3 py-1.5 rounded-full"
                    style={{ backgroundColor: "rgba(26,39,68,0.06)", color: "#1a2744", fontFamily: "'IBM Plex Mono', monospace", border: "1px solid rgba(26,39,68,0.1)" }}
                  >
                    <Tag size={10} />
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* LinkedIn Share CTA */}
            <div
              className="mt-10 p-8 rounded-xl"
              style={{ background: "linear-gradient(135deg, #0077b5 0%, #005885 100%)", boxShadow: "0 4px 24px rgba(0,119,181,0.25)" }}
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0" style={{ backgroundColor: "rgba(255,255,255,0.15)" }}>
                  <Linkedin size={24} style={{ color: "#ffffff" }} />
                </div>
                <div className="flex-1">
                  <p className="text-xs uppercase tracking-widest mb-1" style={{ color: "rgba(255,255,255,0.6)", fontFamily: "'IBM Plex Mono', monospace" }}>Share this article</p>
                  <h4 className="text-lg font-bold mb-3" style={{ fontFamily: "'Playfair Display', serif", color: "#ffffff" }}>Found this insightful? Share it on LinkedIn</h4>
                  <div
                    className="p-4 rounded-lg mb-4 text-sm leading-relaxed"
                    style={{ backgroundColor: "rgba(255,255,255,0.1)", color: "rgba(255,255,255,0.85)", fontFamily: "'Source Sans 3', sans-serif", border: "1px solid rgba(255,255,255,0.15)" }}
                  >
                    <p className="mb-2">🚀 <strong style={{ color: "#ffffff" }}>NVIDIA NemoClaw just changed the enterprise AI game.</strong></p>
                    <p className="mb-2">The biggest blocker to autonomous AI agents in production has always been security — not capability. NemoClaw solves the agent security trilemma with out-of-process policy enforcement via OpenShell.</p>
                    <p className="mb-2">Key takeaways for enterprise tech leaders:</p>
                    <p className="mb-1">✅ Guardrails that live <em>outside</em> the agent process — not inside it</p>
                    <p className="mb-1">✅ Model-agnostic: Claude Code, Codex, Cursor all run unmodified</p>
                    <p className="mb-1">✅ Privacy Router keeps sensitive data on-device with local Nemotron models</p>
                    <p className="mb-2">✅ Apache 2.0 — open source, single-command install</p>
                    <p>I've written a full breakdown of what this means for your agentic roadmap 👇</p>
                    <p className="mt-2" style={{ color: "rgba(255,255,255,0.5)" }}>#NVIDIA #NemoClaw #AgenticAI #EnterpriseAI #AIAgents #ComposableCommerce #TechLeadership</p>
                  </div>
                  <div className="flex flex-wrap gap-3">
                    <a
                      href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(typeof window !== 'undefined' ? window.location.href : 'https://mahaveer.manus.space/blog/nvidia-nemoclaw-enterprise-ai-security')}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-6 py-3 rounded-lg text-sm font-bold transition-all hover:opacity-90 hover:scale-105"
                      style={{ backgroundColor: "#ffffff", color: "#0077b5", fontFamily: "'Source Sans 3', sans-serif" }}
                    >
                      <Linkedin size={16} />
                      Share on LinkedIn
                    </a>
                    <button
                      onClick={() => {
                        const text = `🚀 NVIDIA NemoClaw just changed the enterprise AI game.\n\nThe biggest blocker to autonomous AI agents in production has always been security — not capability. NemoClaw solves the agent security trilemma with out-of-process policy enforcement via OpenShell.\n\nKey takeaways for enterprise tech leaders:\n✅ Guardrails that live outside the agent process — not inside it\n✅ Model-agnostic: Claude Code, Codex, Cursor all run unmodified\n✅ Privacy Router keeps sensitive data on-device with local Nemotron models\n✅ Apache 2.0 — open source, single-command install\n\nI've written a full breakdown of what this means for your agentic roadmap 👇\n\n#NVIDIA #NemoClaw #AgenticAI #EnterpriseAI #AIAgents #ComposableCommerce #TechLeadership`;
                        navigator.clipboard.writeText(text).then(() => {
                          const btn = document.getElementById('copy-linkedin-btn');
                          if (btn) { btn.textContent = '✓ Copied!'; setTimeout(() => { btn.textContent = 'Copy Post Text'; }, 2500); }
                        });
                      }}
                      id="copy-linkedin-btn"
                      className="flex items-center gap-2 px-6 py-3 rounded-lg text-sm font-bold transition-all hover:opacity-90"
                      style={{ backgroundColor: "rgba(255,255,255,0.15)", color: "#ffffff", fontFamily: "'Source Sans 3', sans-serif", border: "1px solid rgba(255,255,255,0.3)" }}
                    >
                      Copy Post Text
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Author Card */}
            <div
              className="mt-10 p-8 rounded-xl flex flex-col sm:flex-row gap-6 items-start"
              style={{ backgroundColor: "#1a2744" }}
            >
              <div className="w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold flex-shrink-0" style={{ backgroundColor: "#c8922a", color: "#fff", fontFamily: "'Playfair Display', serif" }}>
                M
              </div>
              <div>
                <p className="text-xs uppercase tracking-wider mb-1" style={{ color: "rgba(248,246,241,0.4)", fontFamily: "'IBM Plex Mono', monospace" }}>Written by</p>
                <h4 className="text-lg font-bold mb-1" style={{ fontFamily: "'Playfair Display', serif", color: "#f8f6f1" }}>Mahaveer Amudhachandran</h4>
                <p className="text-xs mb-3" style={{ color: "#c8922a", fontFamily: "'IBM Plex Mono', monospace" }}>Sr. Solution Architect · Co-Founder, Metafyai</p>
                <p className="text-sm leading-relaxed" style={{ color: "rgba(248,246,241,0.65)", fontFamily: "'Source Sans 3', sans-serif" }}>
                  18+ years architecting enterprise commerce platforms across MACH, SAP Commerce, and AI-driven solutions. Practice Head at Royal Cyber and Co-Founder of Metafyai.
                </p>
                <a
                  href="https://www.linkedin.com/in/mahaveer-amudhachandran"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 mt-4 text-xs font-semibold hover:opacity-80 transition-opacity"
                  style={{ color: "#c8922a", fontFamily: "'IBM Plex Mono', monospace" }}
                >
                  <Linkedin size={13} />
                  Connect on LinkedIn
                </a>
              </div>
            </div>
          </article>

          {/* Sidebar */}
          <aside className="space-y-8">
            {/* Table of Contents */}
            <div
              className="p-6 rounded-xl sticky top-24"
              style={{ backgroundColor: "#ffffff", border: "1px solid #e8e4dc", boxShadow: "0 2px 12px rgba(26,39,68,0.06)" }}
            >
              <h3 className="text-sm font-bold mb-5" style={{ fontFamily: "'Playfair Display', serif", color: "#1a2744" }}>
                In This Article
              </h3>
              <div className="space-y-3">
                {post.content
                  .filter((s) => s.type === "heading")
                  .map((s, i) => (
                    <p key={i} className="text-xs leading-snug hover:text-amber-600 cursor-pointer transition-colors" style={{ color: "#6b7280", fontFamily: "'Source Sans 3', sans-serif" }}>
                      {s.text}
                    </p>
                  ))}
              </div>

              {/* Share */}
              <div className="mt-6 pt-5 border-t" style={{ borderColor: "#f0ede6" }}>
                <p className="text-xs uppercase tracking-wider mb-3" style={{ color: "#9ca3af", fontFamily: "'IBM Plex Mono', monospace" }}>
                  Share
                </p>
                <a
                  href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(typeof window !== 'undefined' ? window.location.href : '')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 w-full py-2.5 px-4 rounded-lg text-xs font-semibold transition-all hover:opacity-90"
                  style={{ backgroundColor: "#0077b5", color: "#ffffff", fontFamily: "'Source Sans 3', sans-serif" }}
                >
                  <Linkedin size={14} />
                  Share on LinkedIn
                </a>
              </div>
            </div>
          </aside>
        </div>

        {/* Related Articles */}
        {related.length > 0 && (
          <section className="mt-20">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-8 h-0.5" style={{ backgroundColor: "#c8922a" }} />
              <h2 className="text-2xl font-bold" style={{ fontFamily: "'Playfair Display', serif", color: "#1a2744" }}>
                Related Articles
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {related.map((rel) => (
                <Link key={rel.id} href={`/blog/${rel.id}`}>
                  <div
                    className="group flex gap-5 p-5 rounded-xl cursor-pointer transition-all hover:-translate-y-0.5 hover:shadow-lg"
                    style={{ backgroundColor: "#ffffff", border: "1px solid #e8e4dc", boxShadow: "0 2px 8px rgba(26,39,68,0.05)" }}
                  >
                    <div className="w-24 h-20 rounded-lg overflow-hidden flex-shrink-0">
                      <img src={rel.coverImage} alt={rel.title} className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-xs uppercase tracking-wider mb-1" style={{ color: "#c8922a", fontFamily: "'IBM Plex Mono', monospace" }}>
                        {rel.category}
                      </p>
                      <h4 className="text-sm font-bold mb-1 line-clamp-2" style={{ fontFamily: "'Playfair Display', serif", color: "#1a2744" }}>
                        {rel.title}
                      </h4>
                      <div className="flex items-center gap-1 mt-2 text-xs font-medium group-hover:gap-2 transition-all" style={{ color: "#c8922a", fontFamily: "'Source Sans 3', sans-serif" }}>
                        Read more <ArrowRight size={12} />
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  );
}
