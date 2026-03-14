// CaseStudies.tsx — Executive Blueprint Design System
// Design: Swiss International Typographic Style meets Modern Executive Portfolio
// Colors: Deep Navy (#1a2744), Warm Amber (#c8922a), Off-White (#f8f6f1)
// Fonts: Playfair Display (headings), Source Sans 3 (body), IBM Plex Mono (labels)

import { Link } from "wouter";
import { ArrowLeft, ArrowRight, ExternalLink, Clock, Users, Tag } from "lucide-react";
import { caseStudies } from "@/lib/caseStudiesData";
import { motion } from "framer-motion";

export default function CaseStudies() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: "#f8f6f1" }}>
      {/* Header */}
      <header
        className="sticky top-0 z-50 border-b"
        style={{ backgroundColor: "#1a2744", borderColor: "#2a3a5c" }}
      >
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
            Case Studies
          </div>
        </div>
      </header>

      {/* Hero */}
      <section
        className="py-20 px-6"
        style={{
          background: "linear-gradient(135deg, #1a2744 0%, #243560 60%, #1a2744 100%)",
        }}
      >
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <p
              className="text-xs uppercase tracking-widest mb-4"
              style={{ color: "#c8922a", fontFamily: "'IBM Plex Mono', monospace" }}
            >
              Portfolio / Client Work
            </p>
            <h1
              className="text-5xl md:text-6xl font-bold mb-6 leading-tight"
              style={{ fontFamily: "'Playfair Display', serif", color: "#f8f6f1" }}
            >
              Customer Project
              <br />
              <span style={{ color: "#c8922a" }}>Case Studies</span>
            </h1>
            <p
              className="text-lg max-w-2xl leading-relaxed"
              style={{ color: "rgba(248,246,241,0.7)", fontFamily: "'Source Sans 3', sans-serif" }}
            >
              A curated selection of enterprise digital commerce transformations — from global D2C platforms
              to complex B2B marketplaces — delivered across 18+ years of solution architecture leadership.
            </p>
          </motion.div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-14">
            {[
              { value: "14+", label: "Enterprise Clients" },
              { value: "18+", label: "Years Experience" },
              { value: "6", label: "Featured Projects" },
              { value: "4", label: "Commerce Platforms" },
            ].map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 + i * 0.1 }}
                className="p-5 rounded-lg"
                style={{
                  backgroundColor: "rgba(255,255,255,0.05)",
                  border: "1px solid rgba(255,255,255,0.1)",
                }}
              >
                <div
                  className="text-3xl font-bold mb-1"
                  style={{ fontFamily: "'Playfair Display', serif", color: "#c8922a" }}
                >
                  {stat.value}
                </div>
                <div
                  className="text-xs uppercase tracking-wider"
                  style={{ color: "rgba(248,246,241,0.5)", fontFamily: "'IBM Plex Mono', monospace" }}
                >
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
            {caseStudies.map((cs, index) => (
              <motion.div
                key={cs.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Link href={`/case-studies/${cs.id}`}>
                  <div
                    className="group rounded-xl overflow-hidden cursor-pointer transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl"
                    style={{
                      backgroundColor: "#ffffff",
                      border: "1px solid #e8e4dc",
                      boxShadow: "0 2px 12px rgba(26,39,68,0.06)",
                    }}
                  >
                    {/* Screenshot */}
                    <div className="relative overflow-hidden" style={{ height: "200px" }}>
                      <img
                        src={cs.websiteScreenshot}
                        alt={`${cs.client} website`}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div
                        className="absolute inset-0"
                        style={{
                          background: `linear-gradient(to bottom, transparent 40%, rgba(26,39,68,0.85) 100%)`,
                        }}
                      />
                      {/* Platform badge */}
                      <div
                        className="absolute top-3 right-3 text-xs px-2 py-1 rounded"
                        style={{
                          backgroundColor: cs.color,
                          color: "#ffffff",
                          fontFamily: "'IBM Plex Mono', monospace",
                          fontSize: "10px",
                        }}
                      >
                        {cs.platform.split(" ")[0]}
                      </div>
                      {/* Year */}
                      <div
                        className="absolute bottom-3 left-4 text-xs"
                        style={{ color: "rgba(255,255,255,0.7)", fontFamily: "'IBM Plex Mono', monospace" }}
                      >
                        {cs.year}
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-6">
                      <p
                        className="text-xs uppercase tracking-widest mb-2"
                        style={{ color: "#c8922a", fontFamily: "'IBM Plex Mono', monospace" }}
                      >
                        {cs.industry}
                      </p>
                      <h3
                        className="text-xl font-bold mb-2 leading-tight"
                        style={{ fontFamily: "'Playfair Display', serif", color: "#1a2744" }}
                      >
                        {cs.client}
                      </h3>
                      <p
                        className="text-sm mb-4 leading-relaxed"
                        style={{ color: "#6b7280", fontFamily: "'Source Sans 3', sans-serif" }}
                      >
                        {cs.tagline}
                      </p>

                      {/* Meta */}
                      <div className="flex flex-wrap gap-3 mb-4 text-xs" style={{ fontFamily: "'IBM Plex Mono', monospace" }}>
                        <span className="flex items-center gap-1" style={{ color: "#4a5568" }}>
                          <Clock size={11} />
                          {cs.duration}
                        </span>
                        <span className="flex items-center gap-1" style={{ color: "#4a5568" }}>
                          <Users size={11} />
                          {cs.teamSize}
                        </span>
                      </div>

                      {/* Tags */}
                      <div className="flex flex-wrap gap-2 mb-5">
                        {cs.tags.slice(0, 3).map((tag) => (
                          <span
                            key={tag}
                            className="text-xs px-2 py-0.5 rounded-full"
                            style={{
                              backgroundColor: "rgba(26,39,68,0.06)",
                              color: "#1a2744",
                              fontFamily: "'IBM Plex Mono', monospace",
                              fontSize: "10px",
                            }}
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                      {/* CTA */}
                      <div
                        className="flex items-center gap-2 text-sm font-semibold group-hover:gap-3 transition-all"
                        style={{ color: "#c8922a", fontFamily: "'Source Sans 3', sans-serif" }}
                      >
                        Read Case Study
                        <ArrowRight size={16} />
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <section
        className="py-16 px-6 text-center"
        style={{ backgroundColor: "#1a2744" }}
      >
        <div className="max-w-2xl mx-auto">
          <h2
            className="text-3xl font-bold mb-4"
            style={{ fontFamily: "'Playfair Display', serif", color: "#f8f6f1" }}
          >
            Ready to Build Your Next Platform?
          </h2>
          <p
            className="mb-8 text-base"
            style={{ color: "rgba(248,246,241,0.65)", fontFamily: "'Source Sans 3', sans-serif" }}
          >
            Let's discuss how composable commerce architecture can transform your digital experience.
          </p>
          <a
            href="mailto:mahaveer.ac@gmail.com"
            className="inline-flex items-center gap-2 px-8 py-3 rounded-lg font-semibold text-sm transition-all hover:opacity-90"
            style={{
              backgroundColor: "#c8922a",
              color: "#ffffff",
              fontFamily: "'Source Sans 3', sans-serif",
            }}
          >
            Get in Touch
            <ExternalLink size={16} />
          </a>
        </div>
      </section>
    </div>
  );
}
