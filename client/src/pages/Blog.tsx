// Blog.tsx — Executive Blueprint Design System
// Design: Swiss International Typographic Style meets Modern Executive Portfolio
// Colors: Deep Navy (#1a2744), Warm Amber (#c8922a), Off-White (#f8f6f1)
// Fonts: Playfair Display (headings), Source Sans 3 (body), IBM Plex Mono (labels)

import { useState } from "react";
import { Link } from "wouter";
import { ArrowLeft, ArrowRight, Clock, Tag, Search } from "lucide-react";
import { blogPosts, categories } from "@/lib/blogData";
import { motion } from "framer-motion";

export default function Blog() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const filtered = blogPosts.filter((post) => {
    const matchCat = activeCategory === "All" || post.category === activeCategory;
    const matchSearch =
      searchQuery === "" ||
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.tags.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchCat && matchSearch;
  });

  const featured = blogPosts.filter((p) => p.featured);

  return (
    <div className="min-h-screen" style={{ backgroundColor: "#f8f6f1" }}>
      {/* Header */}
      <header className="sticky top-0 z-50 border-b" style={{ backgroundColor: "#1a2744", borderColor: "#2a3a5c" }}>
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link href="/">
            <button
              className="flex items-center gap-2 text-sm font-medium transition-colors hover:opacity-80"
              style={{ color: "#c8922a", fontFamily: "'IBM Plex Mono', monospace" }}
            >
              <ArrowLeft size={16} />
              Back to Profile
            </button>
          </Link>
          <div style={{ fontFamily: "'Playfair Display', serif", color: "#f8f6f1" }} className="text-lg font-bold">
            Mahaveer Amudhachandran
          </div>
          <div
            className="text-xs px-3 py-1 rounded-full"
            style={{
              backgroundColor: "rgba(200,146,42,0.15)",
              color: "#c8922a",
              fontFamily: "'IBM Plex Mono', monospace",
              border: "1px solid rgba(200,146,42,0.3)",
            }}
          >
            Blog
          </div>
        </div>
      </header>

      {/* Hero */}
      <section
        className="py-20 px-6"
        style={{ background: "linear-gradient(135deg, #1a2744 0%, #243560 60%, #1a2744 100%)" }}
      >
        <div className="max-w-7xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <p className="text-xs uppercase tracking-widest mb-4" style={{ color: "#c8922a", fontFamily: "'IBM Plex Mono', monospace" }}>
              Insights / Thought Leadership
            </p>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight" style={{ fontFamily: "'Playfair Display', serif", color: "#f8f6f1" }}>
              Architecture, AI &<br />
              <span style={{ color: "#c8922a" }}>Commerce Insights</span>
            </h1>
            <p className="text-lg max-w-2xl leading-relaxed" style={{ color: "rgba(248,246,241,0.7)", fontFamily: "'Source Sans 3', sans-serif" }}>
              Practical perspectives on MACH architecture, composable commerce, generative AI, AEO/GEO, and technology leadership — drawn from 18+ years of enterprise delivery.
            </p>
          </motion.div>

          {/* Search */}
          <div className="mt-10 max-w-md">
            <div className="relative">
              <Search size={16} className="absolute left-4 top-1/2 -translate-y-1/2" style={{ color: "rgba(248,246,241,0.4)" }} />
              <input
                type="text"
                placeholder="Search articles..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-11 pr-4 py-3 rounded-lg text-sm outline-none"
                style={{
                  backgroundColor: "rgba(255,255,255,0.08)",
                  border: "1px solid rgba(255,255,255,0.12)",
                  color: "#f8f6f1",
                  fontFamily: "'Source Sans 3', sans-serif",
                }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Featured Posts */}
      {activeCategory === "All" && searchQuery === "" && (
        <section className="py-14 px-6 border-b" style={{ borderColor: "#e8e4dc" }}>
          <div className="max-w-7xl mx-auto">
            <p className="text-xs uppercase tracking-widest mb-8" style={{ color: "#c8922a", fontFamily: "'IBM Plex Mono', monospace" }}>
              Featured Articles
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {featured.map((post, i) => (
                <motion.div key={post.id} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }}>
                  <Link href={`/blog/${post.id}`}>
                    <div
                      className="group cursor-pointer rounded-xl overflow-hidden h-full transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
                      style={{ backgroundColor: "#ffffff", border: "1px solid #e8e4dc", boxShadow: "0 2px 12px rgba(26,39,68,0.06)" }}
                    >
                      <div className="relative overflow-hidden" style={{ height: "180px" }}>
                        <img src={post.coverImage} alt={post.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                        <div className="absolute inset-0" style={{ background: "linear-gradient(to bottom, transparent 30%, rgba(26,39,68,0.8) 100%)" }} />
                        <div
                          className="absolute top-3 left-3 text-xs px-2 py-1 rounded"
                          style={{ backgroundColor: "#c8922a", color: "#fff", fontFamily: "'IBM Plex Mono', monospace", fontSize: "10px" }}
                        >
                          Featured
                        </div>
                        <div
                          className="absolute bottom-3 left-4 text-xs"
                          style={{ color: "rgba(255,255,255,0.7)", fontFamily: "'IBM Plex Mono', monospace" }}
                        >
                          {post.publishedDate}
                        </div>
                      </div>
                      <div className="p-5">
                        <p className="text-xs uppercase tracking-widest mb-2" style={{ color: "#c8922a", fontFamily: "'IBM Plex Mono', monospace" }}>
                          {post.category}
                        </p>
                        <h3 className="text-base font-bold mb-2 leading-snug" style={{ fontFamily: "'Playfair Display', serif", color: "#1a2744" }}>
                          {post.title}
                        </h3>
                        <p className="text-xs leading-relaxed mb-4 line-clamp-2" style={{ color: "#6b7280", fontFamily: "'Source Sans 3', sans-serif" }}>
                          {post.excerpt}
                        </p>
                        <div className="flex items-center justify-between">
                          <span className="flex items-center gap-1 text-xs" style={{ color: "#9ca3af", fontFamily: "'IBM Plex Mono', monospace" }}>
                            <Clock size={11} /> {post.readTime}
                          </span>
                          <span className="flex items-center gap-1 text-xs font-semibold group-hover:gap-2 transition-all" style={{ color: "#c8922a", fontFamily: "'Source Sans 3', sans-serif" }}>
                            Read <ArrowRight size={12} />
                          </span>
                        </div>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* All Posts */}
      <section className="py-14 px-6">
        <div className="max-w-7xl mx-auto">
          {/* Category Filter */}
          <div className="flex flex-wrap gap-3 mb-10">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className="text-xs px-4 py-2 rounded-full transition-all"
                style={{
                  fontFamily: "'IBM Plex Mono', monospace",
                  backgroundColor: activeCategory === cat ? "#1a2744" : "transparent",
                  color: activeCategory === cat ? "#f8f6f1" : "#4a5568",
                  border: `1px solid ${activeCategory === cat ? "#1a2744" : "#d1cdc5"}`,
                }}
              >
                {cat}
              </button>
            ))}
            <span className="ml-auto text-xs self-center" style={{ color: "#9ca3af", fontFamily: "'IBM Plex Mono', monospace" }}>
              {filtered.length} article{filtered.length !== 1 ? "s" : ""}
            </span>
          </div>

          {/* Posts Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
            {filtered.map((post, i) => (
              <motion.div key={post.id} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.07 }}>
                <Link href={`/blog/${post.id}`}>
                  <div
                    className="group cursor-pointer rounded-xl overflow-hidden h-full flex flex-col transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
                    style={{ backgroundColor: "#ffffff", border: "1px solid #e8e4dc", boxShadow: "0 2px 12px rgba(26,39,68,0.06)" }}
                  >
                    <div className="relative overflow-hidden" style={{ height: "200px" }}>
                      <img src={post.coverImage} alt={post.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                      <div className="absolute inset-0" style={{ background: "linear-gradient(to bottom, transparent 40%, rgba(26,39,68,0.75) 100%)" }} />
                      <div
                        className="absolute top-3 right-3 text-xs px-2 py-1 rounded"
                        style={{ backgroundColor: "rgba(26,39,68,0.7)", color: "#c8922a", fontFamily: "'IBM Plex Mono', monospace", fontSize: "10px", border: "1px solid rgba(200,146,42,0.3)" }}
                      >
                        {post.category}
                      </div>
                      <div className="absolute bottom-3 left-4 text-xs" style={{ color: "rgba(255,255,255,0.7)", fontFamily: "'IBM Plex Mono', monospace" }}>
                        {post.publishedDate}
                      </div>
                    </div>
                    <div className="p-6 flex flex-col flex-1">
                      <h3 className="text-lg font-bold mb-2 leading-snug" style={{ fontFamily: "'Playfair Display', serif", color: "#1a2744" }}>
                        {post.title}
                      </h3>
                      <p className="text-sm leading-relaxed mb-4 flex-1 line-clamp-3" style={{ color: "#6b7280", fontFamily: "'Source Sans 3', sans-serif" }}>
                        {post.excerpt}
                      </p>
                      {/* Tags */}
                      <div className="flex flex-wrap gap-1.5 mb-4">
                        {post.tags.slice(0, 3).map((tag) => (
                          <span
                            key={tag}
                            className="flex items-center gap-1 text-xs px-2 py-0.5 rounded-full"
                            style={{ backgroundColor: "rgba(26,39,68,0.06)", color: "#1a2744", fontFamily: "'IBM Plex Mono', monospace", fontSize: "10px" }}
                          >
                            <Tag size={9} />
                            {tag}
                          </span>
                        ))}
                      </div>
                      <div className="flex items-center justify-between pt-3 border-t" style={{ borderColor: "#f0ede6" }}>
                        <span className="flex items-center gap-1 text-xs" style={{ color: "#9ca3af", fontFamily: "'IBM Plex Mono', monospace" }}>
                          <Clock size={11} /> {post.readTime}
                        </span>
                        <span className="flex items-center gap-1 text-xs font-semibold group-hover:gap-2 transition-all" style={{ color: "#c8922a", fontFamily: "'Source Sans 3', sans-serif" }}>
                          Read Article <ArrowRight size={12} />
                        </span>
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>

          {filtered.length === 0 && (
            <div className="text-center py-20">
              <p className="text-lg" style={{ color: "#9ca3af", fontFamily: "'Source Sans 3', sans-serif" }}>
                No articles found matching your search.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Footer CTA */}
      <section className="py-16 px-6 text-center" style={{ backgroundColor: "#1a2744" }}>
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold mb-4" style={{ fontFamily: "'Playfair Display', serif", color: "#f8f6f1" }}>
            Have a Topic in Mind?
          </h2>
          <p className="mb-8 text-base" style={{ color: "rgba(248,246,241,0.65)", fontFamily: "'Source Sans 3', sans-serif" }}>
            If you would like me to write about a specific architecture challenge or technology topic, reach out.
          </p>
          <a
            href="mailto:mahaveer.ac@gmail.com"
            className="inline-flex items-center gap-2 px-8 py-3 rounded-lg font-semibold text-sm transition-all hover:opacity-90"
            style={{ backgroundColor: "#c8922a", color: "#ffffff", fontFamily: "'Source Sans 3', sans-serif" }}
          >
            Suggest a Topic
          </a>
        </div>
      </section>
    </div>
  );
}
