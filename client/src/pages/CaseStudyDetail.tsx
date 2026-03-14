// CaseStudyDetail.tsx — Executive Blueprint Design System
// Design: Swiss International Typographic Style meets Modern Executive Portfolio
// Colors: Deep Navy (#1a2744), Warm Amber (#c8922a), Off-White (#f8f6f1)
// Fonts: Playfair Display (headings), Source Sans 3 (body), IBM Plex Mono (labels)

import { Link, useParams } from "wouter";
import { ArrowLeft, ArrowRight, ExternalLink, CheckCircle, Clock, Users, Briefcase, Calendar, ChevronRight } from "lucide-react";
import { getCaseStudyById, caseStudies } from "@/lib/caseStudiesData";
import { motion } from "framer-motion";

export default function CaseStudyDetail() {
  const { id } = useParams<{ id: string }>();
  const cs = getCaseStudyById(id || "");

  if (!cs) {
    return (
      <div className="min-h-screen flex items-center justify-center" style={{ backgroundColor: "#f8f6f1" }}>
        <div className="text-center">
          <h2 style={{ fontFamily: "'Playfair Display', serif", color: "#1a2744" }} className="text-3xl font-bold mb-4">
            Case Study Not Found
          </h2>
          <Link href="/case-studies">
            <button
              className="flex items-center gap-2 mx-auto text-sm font-medium"
              style={{ color: "#c8922a", fontFamily: "'IBM Plex Mono', monospace" }}
            >
              <ArrowLeft size={16} /> Back to Case Studies
            </button>
          </Link>
        </div>
      </div>
    );
  }

  // Related case studies (exclude current)
  const related = caseStudies.filter((c) => c.id !== cs.id).slice(0, 2);

  return (
    <div className="min-h-screen" style={{ backgroundColor: "#f8f6f1" }}>
      {/* Header */}
      <header
        className="sticky top-0 z-50 border-b"
        style={{ backgroundColor: "#1a2744", borderColor: "#2a3a5c" }}
      >
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link href="/case-studies">
            <button
              className="flex items-center gap-2 text-sm font-medium transition-colors hover:opacity-80"
              style={{ color: "#c8922a", fontFamily: "'IBM Plex Mono', monospace" }}
            >
              <ArrowLeft size={16} />
              All Case Studies
            </button>
          </Link>
          <Link href="/">
            <div style={{ fontFamily: "'Playfair Display', serif", color: "#f8f6f1" }} className="text-lg font-bold cursor-pointer hover:opacity-80">
              Mahaveer Amudhachandran
            </div>
          </Link>
          <a
            href={cs.websiteUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-xs px-3 py-1.5 rounded-full transition-all hover:opacity-80"
            style={{
              backgroundColor: "rgba(200,146,42,0.15)",
              color: "#c8922a",
              fontFamily: "'IBM Plex Mono', monospace",
              border: "1px solid rgba(200,146,42,0.3)",
            }}
          >
            Visit Site
            <ExternalLink size={11} />
          </a>
        </div>
      </header>

      {/* Hero */}
      <section
        className="relative overflow-hidden"
        style={{ minHeight: "480px" }}
      >
        {/* Background screenshot */}
        <div className="absolute inset-0">
          <img
            src={cs.websiteScreenshot}
            alt={cs.client}
            className="w-full h-full object-cover"
          />
          <div
            className="absolute inset-0"
            style={{
              background: `linear-gradient(135deg, rgba(26,39,68,0.96) 0%, rgba(26,39,68,0.88) 50%, rgba(26,39,68,0.75) 100%)`,
            }}
          />
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 py-20">
          {/* Breadcrumb */}
          <div
            className="flex items-center gap-2 text-xs mb-8"
            style={{ color: "rgba(248,246,241,0.5)", fontFamily: "'IBM Plex Mono', monospace" }}
          >
            <Link href="/"><span className="hover:text-amber-400 cursor-pointer">Home</span></Link>
            <ChevronRight size={12} />
            <Link href="/case-studies"><span className="hover:text-amber-400 cursor-pointer">Case Studies</span></Link>
            <ChevronRight size={12} />
            <span style={{ color: "#c8922a" }}>{cs.client}</span>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <p
              className="text-xs uppercase tracking-widest mb-3"
              style={{ color: "#c8922a", fontFamily: "'IBM Plex Mono', monospace" }}
            >
              {cs.industry}
            </p>
            <h1
              className="text-4xl md:text-6xl font-bold mb-4 leading-tight"
              style={{ fontFamily: "'Playfair Display', serif", color: "#f8f6f1" }}
            >
              {cs.client}
            </h1>
            <p
              className="text-xl mb-8 max-w-2xl"
              style={{ color: "rgba(248,246,241,0.75)", fontFamily: "'Source Sans 3', sans-serif" }}
            >
              {cs.tagline}
            </p>

            {/* Meta chips */}
            <div className="flex flex-wrap gap-3">
              {[
                { icon: <Calendar size={13} />, label: cs.year },
                { icon: <Clock size={13} />, label: cs.duration },
                { icon: <Users size={13} />, label: cs.teamSize },
                { icon: <Briefcase size={13} />, label: cs.role },
              ].map((item, i) => (
                <div
                  key={i}
                  className="flex items-center gap-2 px-3 py-1.5 rounded-full text-xs"
                  style={{
                    backgroundColor: "rgba(255,255,255,0.08)",
                    color: "rgba(248,246,241,0.8)",
                    fontFamily: "'IBM Plex Mono', monospace",
                    border: "1px solid rgba(255,255,255,0.12)",
                  }}
                >
                  {item.icon}
                  {item.label}
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Left: Main narrative */}
          <div className="lg:col-span-2 space-y-12">
            {/* Overview */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
            >
              <div className="flex items-center gap-3 mb-5">
                <div className="w-8 h-0.5" style={{ backgroundColor: "#c8922a" }} />
                <h2
                  className="text-2xl font-bold"
                  style={{ fontFamily: "'Playfair Display', serif", color: "#1a2744" }}
                >
                  Project Overview
                </h2>
              </div>
              <p
                className="text-base leading-relaxed"
                style={{ color: "#4a5568", fontFamily: "'Source Sans 3', sans-serif" }}
              >
                {cs.overview}
              </p>
            </motion.section>

            {/* Challenge */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="p-8 rounded-xl"
              style={{
                backgroundColor: "#ffffff",
                border: "1px solid #e8e4dc",
                boxShadow: "0 2px 12px rgba(26,39,68,0.06)",
              }}
            >
              <div className="flex items-center gap-3 mb-5">
                <div
                  className="w-8 h-8 rounded-lg flex items-center justify-center text-sm font-bold"
                  style={{ backgroundColor: "rgba(200,146,42,0.1)", color: "#c8922a", fontFamily: "'IBM Plex Mono', monospace" }}
                >
                  01
                </div>
                <h2
                  className="text-xl font-bold"
                  style={{ fontFamily: "'Playfair Display', serif", color: "#1a2744" }}
                >
                  The Challenge
                </h2>
              </div>
              <p
                className="text-base leading-relaxed"
                style={{ color: "#4a5568", fontFamily: "'Source Sans 3', sans-serif" }}
              >
                {cs.challenge}
              </p>
            </motion.section>

            {/* Solution */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="p-8 rounded-xl"
              style={{
                backgroundColor: "#1a2744",
                boxShadow: "0 4px 24px rgba(26,39,68,0.15)",
              }}
            >
              <div className="flex items-center gap-3 mb-5">
                <div
                  className="w-8 h-8 rounded-lg flex items-center justify-center text-sm font-bold"
                  style={{ backgroundColor: "rgba(200,146,42,0.2)", color: "#c8922a", fontFamily: "'IBM Plex Mono', monospace" }}
                >
                  02
                </div>
                <h2
                  className="text-xl font-bold"
                  style={{ fontFamily: "'Playfair Display', serif", color: "#f8f6f1" }}
                >
                  The Solution
                </h2>
              </div>
              <p
                className="text-base leading-relaxed"
                style={{ color: "rgba(248,246,241,0.75)", fontFamily: "'Source Sans 3', sans-serif" }}
              >
                {cs.solution}
              </p>
            </motion.section>

            {/* Results */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-8 h-0.5" style={{ backgroundColor: "#c8922a" }} />
                <h2
                  className="text-2xl font-bold"
                  style={{ fontFamily: "'Playfair Display', serif", color: "#1a2744" }}
                >
                  Key Results
                </h2>
              </div>
              <div className="space-y-4">
                {cs.results.map((result, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.4 + i * 0.08 }}
                    className="flex items-start gap-4 p-5 rounded-xl"
                    style={{
                      backgroundColor: "#ffffff",
                      border: "1px solid #e8e4dc",
                      boxShadow: "0 1px 6px rgba(26,39,68,0.04)",
                    }}
                  >
                    <CheckCircle
                      size={20}
                      className="mt-0.5 flex-shrink-0"
                      style={{ color: "#c8922a" }}
                    />
                    <p
                      className="text-sm leading-relaxed"
                      style={{ color: "#1a2744", fontFamily: "'Source Sans 3', sans-serif" }}
                    >
                      {result}
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.section>

            {/* Website Preview */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-8 h-0.5" style={{ backgroundColor: "#c8922a" }} />
                <h2
                  className="text-2xl font-bold"
                  style={{ fontFamily: "'Playfair Display', serif", color: "#1a2744" }}
                >
                  Live Platform
                </h2>
              </div>
              <div
                className="rounded-xl overflow-hidden"
                style={{
                  border: "1px solid #e8e4dc",
                  boxShadow: "0 4px 24px rgba(26,39,68,0.1)",
                }}
              >
                {/* Browser chrome */}
                <div
                  className="px-4 py-3 flex items-center gap-3"
                  style={{ backgroundColor: "#f0ede6", borderBottom: "1px solid #e8e4dc" }}
                >
                  <div className="flex gap-1.5">
                    <div className="w-3 h-3 rounded-full" style={{ backgroundColor: "#ff5f57" }} />
                    <div className="w-3 h-3 rounded-full" style={{ backgroundColor: "#febc2e" }} />
                    <div className="w-3 h-3 rounded-full" style={{ backgroundColor: "#28c840" }} />
                  </div>
                  <div
                    className="flex-1 text-center text-xs px-3 py-1 rounded"
                    style={{
                      backgroundColor: "#ffffff",
                      color: "#6b7280",
                      fontFamily: "'IBM Plex Mono', monospace",
                    }}
                  >
                    {cs.websiteUrl}
                  </div>
                  <a
                    href={cs.websiteUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 text-xs hover:opacity-70"
                    style={{ color: "#c8922a", fontFamily: "'IBM Plex Mono', monospace" }}
                  >
                    <ExternalLink size={12} />
                  </a>
                </div>
                <img
                  src={cs.websiteScreenshot}
                  alt={`${cs.client} live platform`}
                  className="w-full object-cover"
                  style={{ maxHeight: "400px" }}
                />
              </div>
            </motion.section>
          </div>

          {/* Right: Sidebar */}
          <div className="space-y-8">
            {/* Project Details */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="p-6 rounded-xl sticky top-24"
              style={{
                backgroundColor: "#ffffff",
                border: "1px solid #e8e4dc",
                boxShadow: "0 2px 12px rgba(26,39,68,0.06)",
              }}
            >
              <h3
                className="text-lg font-bold mb-6"
                style={{ fontFamily: "'Playfair Display', serif", color: "#1a2744" }}
              >
                Project Details
              </h3>

              <div className="space-y-5">
                {[
                  { label: "Client", value: cs.client },
                  { label: "Industry", value: cs.industry },
                  { label: "Platform", value: cs.platform },
                  { label: "Duration", value: cs.duration },
                  { label: "Team Size", value: cs.teamSize },
                  { label: "My Role", value: cs.role },
                  { label: "Year", value: cs.year },
                ].map((item) => (
                  <div key={item.label} className="border-b pb-4" style={{ borderColor: "#f0ede6" }}>
                    <p
                      className="text-xs uppercase tracking-wider mb-1"
                      style={{ color: "#9ca3af", fontFamily: "'IBM Plex Mono', monospace" }}
                    >
                      {item.label}
                    </p>
                    <p
                      className="text-sm font-medium"
                      style={{ color: "#1a2744", fontFamily: "'Source Sans 3', sans-serif" }}
                    >
                      {item.value}
                    </p>
                  </div>
                ))}
              </div>

              {/* Tags */}
              <div className="mt-5">
                <p
                  className="text-xs uppercase tracking-wider mb-3"
                  style={{ color: "#9ca3af", fontFamily: "'IBM Plex Mono', monospace" }}
                >
                  Tags
                </p>
                <div className="flex flex-wrap gap-2">
                  {cs.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs px-2 py-1 rounded-full"
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
              </div>

              {/* Visit Site CTA */}
              <a
                href={cs.websiteUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 w-full flex items-center justify-center gap-2 py-3 rounded-lg text-sm font-semibold transition-all hover:opacity-90"
                style={{
                  backgroundColor: "#1a2744",
                  color: "#f8f6f1",
                  fontFamily: "'Source Sans 3', sans-serif",
                }}
              >
                Visit Live Site
                <ExternalLink size={14} />
              </a>
            </motion.div>

            {/* Tech Stack */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="p-6 rounded-xl"
              style={{
                backgroundColor: "#1a2744",
                boxShadow: "0 2px 12px rgba(26,39,68,0.12)",
              }}
            >
              <h3
                className="text-lg font-bold mb-5"
                style={{ fontFamily: "'Playfair Display', serif", color: "#f8f6f1" }}
              >
                Technology Stack
              </h3>
              <div className="flex flex-wrap gap-2">
                {cs.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="text-xs px-3 py-1.5 rounded-full"
                    style={{
                      backgroundColor: "rgba(200,146,42,0.15)",
                      color: "#c8922a",
                      fontFamily: "'IBM Plex Mono', monospace",
                      border: "1px solid rgba(200,146,42,0.25)",
                      fontSize: "11px",
                    }}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>
        </div>

        {/* Related Case Studies */}
        <section className="mt-20">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-8 h-0.5" style={{ backgroundColor: "#c8922a" }} />
            <h2
              className="text-2xl font-bold"
              style={{ fontFamily: "'Playfair Display', serif", color: "#1a2744" }}
            >
              Related Case Studies
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {related.map((rel) => (
              <Link key={rel.id} href={`/case-studies/${rel.id}`}>
                <div
                  className="group flex gap-5 p-5 rounded-xl cursor-pointer transition-all hover:-translate-y-0.5 hover:shadow-lg"
                  style={{
                    backgroundColor: "#ffffff",
                    border: "1px solid #e8e4dc",
                    boxShadow: "0 2px 8px rgba(26,39,68,0.05)",
                  }}
                >
                  <div
                    className="w-24 h-20 rounded-lg overflow-hidden flex-shrink-0"
                  >
                    <img
                      src={rel.websiteScreenshot}
                      alt={rel.client}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p
                      className="text-xs uppercase tracking-wider mb-1"
                      style={{ color: "#c8922a", fontFamily: "'IBM Plex Mono', monospace" }}
                    >
                      {rel.industry}
                    </p>
                    <h4
                      className="text-base font-bold mb-1 truncate"
                      style={{ fontFamily: "'Playfair Display', serif", color: "#1a2744" }}
                    >
                      {rel.client}
                    </h4>
                    <p
                      className="text-xs leading-relaxed line-clamp-2"
                      style={{ color: "#6b7280", fontFamily: "'Source Sans 3', sans-serif" }}
                    >
                      {rel.tagline}
                    </p>
                    <div
                      className="flex items-center gap-1 mt-2 text-xs font-medium group-hover:gap-2 transition-all"
                      style={{ color: "#c8922a", fontFamily: "'Source Sans 3', sans-serif" }}
                    >
                      Read more <ArrowRight size={12} />
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
