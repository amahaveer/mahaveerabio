/*
 * DESIGN: Executive Blueprint
 * Swiss International Typographic Style meets Modern Executive Portfolio
 * Colors: Off-white (#f8f6f1) canvas, Deep Navy (#1a2744), Warm Amber (#d4820a), Slate (#4a5568)
 * Fonts: Playfair Display (headings), Source Sans 3 (body), IBM Plex Mono (tech terms)
 * Layout: Sticky left sidebar + wide magazine-style main content
 */

import { useEffect, useRef, useState } from "react";
import {
  profile,
  stats,
  experiences,
  certifications,
  skillCategories,
  clients,
  education,
  products,
} from "@/lib/profileData";
import {
  MapPin,
  Mail,
  Phone,
  Linkedin,
  ChevronRight,
  ExternalLink,
  Award,
  Briefcase,
  GraduationCap,
  Code2,
  Users,
  Lightbulb,
  Menu,
  X,
} from "lucide-react";

// Animated counter hook
function useCountUp(target: number, duration = 2000, start = false) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!start) return;
    let startTime: number;
    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      setCount(Math.floor(progress * target));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [target, duration, start]);
  return count;
}

// Intersection observer hook
function useInView(threshold = 0.1) {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setInView(true); },
      { threshold }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [threshold]);
  return { ref, inView };
}

// Stat card component
function StatCard({ label, value, suffix }: { label: string; value: number; suffix: string }) {
  const { ref, inView } = useInView(0.3);
  const count = useCountUp(value, 1800, inView);
  return (
    <div ref={ref} className="text-center p-6 border border-[#e8e4dd] bg-white rounded-sm">
      <div className="stat-number">
        {count.toLocaleString()}{suffix}
      </div>
      <div className="text-sm text-[#4a5568] mt-2 font-medium uppercase tracking-wider" style={{ fontFamily: "'IBM Plex Mono', monospace" }}>
        {label}
      </div>
    </div>
  );
}

// Section wrapper with fade-up
function Section({ id, children, className = "" }: { id: string; children: React.ReactNode; className?: string }) {
  const { ref, inView } = useInView(0.05);
  return (
    <section
      id={id}
      ref={ref}
      className={`transition-all duration-700 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"} ${className}`}
    >
      {children}
    </section>
  );
}

const navItems = [
  { id: "about", label: "About", icon: <Users size={14} /> },
  { id: "experience", label: "Experience", icon: <Briefcase size={14} /> },
  { id: "products", label: "Products", icon: <Lightbulb size={14} /> },
  { id: "skills", label: "Skills", icon: <Code2 size={14} /> },
  { id: "certifications", label: "Certifications", icon: <Award size={14} /> },
  { id: "clients", label: "Clients", icon: <Users size={14} /> },
  { id: "education", label: "Education", icon: <GraduationCap size={14} /> },
  { id: "contact", label: "Contact", icon: <Mail size={14} /> },
];

export default function Home() {
  const [activeSection, setActiveSection] = useState("about");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showAllExp, setShowAllExp] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map(n => document.getElementById(n.id));
      const scrollY = window.scrollY + 120;
      for (let i = sections.length - 1; i >= 0; i--) {
        const sec = sections[i];
        if (sec && sec.offsetTop <= scrollY) {
          setActiveSection(navItems[i].id);
          break;
        }
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
      setMobileMenuOpen(false);
    }
  };

  const visibleExperiences = showAllExp ? experiences : experiences.slice(0, 6);

  return (
    <div className="min-h-screen" style={{ backgroundColor: "#f8f6f1" }}>
      {/* HERO SECTION */}
      <div
        className="relative overflow-hidden"
        style={{
          backgroundImage: `url(https://d2xsxph8kpxj0f.cloudfront.net/108203525/KPHR6hu3HL4KNWadjMGtVJ/hero_bg-GdmX8kwJkyPHx7WC6Fpgjs.webp)`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          minHeight: "520px",
        }}
      >
        <div className="absolute inset-0" style={{ background: "linear-gradient(135deg, rgba(26,39,68,0.92) 0%, rgba(26,39,68,0.75) 60%, rgba(26,39,68,0.5) 100%)" }} />

        {/* Top nav bar */}
        <div className="relative z-20 flex items-center justify-between px-6 py-4 md:px-12">
          <div style={{ fontFamily: "'IBM Plex Mono', monospace", color: "rgba(255,255,255,0.6)", fontSize: "0.75rem", letterSpacing: "0.1em" }}>
            MAHAVEER.AMUDHACHANDRAN
          </div>
          {/* Mobile menu toggle */}
          <button
            className="md:hidden text-white"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
          {/* Desktop quick links */}
          <div className="hidden md:flex items-center gap-6">
            {navItems.slice(0, 4).map(n => (
              <button
                key={n.id}
                onClick={() => scrollTo(n.id)}
                className="text-white/70 hover:text-white text-sm transition-colors"
                style={{ fontFamily: "'Source Sans 3', sans-serif" }}
              >
                {n.label}
              </button>
            ))}
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 px-4 py-1.5 rounded-sm text-sm font-semibold transition-all"
              style={{ background: "#d4820a", color: "white", fontFamily: "'Source Sans 3', sans-serif" }}
            >
              <Linkedin size={14} /> LinkedIn
            </a>
          </div>
        </div>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="relative z-20 md:hidden bg-[#1a2744] px-6 py-4 flex flex-col gap-3">
            {navItems.map(n => (
              <button
                key={n.id}
                onClick={() => scrollTo(n.id)}
                className="text-white/80 hover:text-white text-left text-sm py-1"
              >
                {n.label}
              </button>
            ))}
          </div>
        )}

        {/* Hero content */}
        <div className="relative z-10 px-6 md:px-12 pb-16 pt-8 md:pt-12 max-w-5xl">
          <div className="inline-block mb-4 px-3 py-1 rounded-sm text-xs font-semibold uppercase tracking-widest" style={{ background: "rgba(212,130,10,0.2)", color: "#f5a623", border: "1px solid rgba(212,130,10,0.4)", fontFamily: "'IBM Plex Mono', monospace" }}>
            Director of Technology · Co-Founder, Metafyai
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight mb-4" style={{ fontFamily: "'Playfair Display', Georgia, serif", letterSpacing: "-0.02em" }}>
            Mahaveer<br />Amudhachandran
          </h1>
          <p className="text-lg md:text-xl text-white/80 mb-2 max-w-2xl" style={{ fontFamily: "'Source Sans 3', sans-serif" }}>
            AI-driven Composable Commerce Solutions
          </p>
          <p className="text-base text-white/60 mb-8 max-w-xl" style={{ fontFamily: "'Source Sans 3', sans-serif" }}>
            18+ years architecting enterprise omnichannel platforms · MACH · SAP Commerce · commercetools
          </p>
          <div className="flex flex-wrap items-center gap-3">
            <div className="flex items-center gap-1.5 text-white/70 text-sm" style={{ fontFamily: "'IBM Plex Mono', monospace" }}>
              <MapPin size={13} /> {profile.location}
            </div>
            <span className="text-white/30">·</span>
            <a href={`mailto:${profile.email}`} className="flex items-center gap-1.5 text-white/70 hover:text-white text-sm transition-colors" style={{ fontFamily: "'IBM Plex Mono', monospace" }}>
              <Mail size={13} /> {profile.email}
            </a>
            <span className="text-white/30">·</span>
            <a href={`tel:${profile.phone}`} className="flex items-center gap-1.5 text-white/70 hover:text-white text-sm transition-colors" style={{ fontFamily: "'IBM Plex Mono', monospace" }}>
              <Phone size={13} /> {profile.phone}
            </a>
          </div>
        </div>
      </div>

      {/* STATS BAR */}
      <div className="bg-[#1a2744] py-8 px-6 md:px-12">
        <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4">
          {stats.map((s) => (
            <StatCard key={s.label} label={s.label} value={s.value} suffix={s.suffix} />
          ))}
        </div>
      </div>

      {/* MAIN LAYOUT: Sidebar + Content */}
      <div className="max-w-6xl mx-auto px-4 md:px-8 py-12 flex flex-col lg:flex-row gap-10">
        {/* STICKY SIDEBAR */}
        <aside className="hidden lg:block w-56 shrink-0">
          <div className="sticky top-8">
            <nav className="flex flex-col gap-1">
              {navItems.map(n => (
                <button
                  key={n.id}
                  onClick={() => scrollTo(n.id)}
                  className={`flex items-center gap-2.5 px-3 py-2.5 text-sm text-left rounded-sm transition-all ${
                    activeSection === n.id
                      ? "bg-[#1a2744] text-white font-semibold"
                      : "text-[#4a5568] hover:text-[#1a2744] hover:bg-[#ede9e1]"
                  }`}
                  style={{ fontFamily: "'Source Sans 3', sans-serif" }}
                >
                  <span className={activeSection === n.id ? "text-[#d4820a]" : "text-[#9aa5b4]"}>
                    {n.icon}
                  </span>
                  {n.label}
                  {activeSection === n.id && <ChevronRight size={12} className="ml-auto text-[#d4820a]" />}
                </button>
              ))}
            </nav>

            <div className="mt-8 p-4 bg-[#1a2744] rounded-sm">
              <p className="text-white/60 text-xs mb-3" style={{ fontFamily: "'IBM Plex Mono', monospace" }}>CONNECT</p>
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-white text-sm font-semibold hover:text-[#d4820a] transition-colors"
                style={{ fontFamily: "'Source Sans 3', sans-serif" }}
              >
                <Linkedin size={15} /> LinkedIn Profile
              </a>
              <div className="mt-2 text-white/40 text-xs" style={{ fontFamily: "'IBM Plex Mono', monospace" }}>
                {profile.followers} followers
              </div>
            </div>
          </div>
        </aside>

        {/* MAIN CONTENT */}
        <main className="flex-1 min-w-0 flex flex-col gap-16">

          {/* ABOUT */}
          <Section id="about">
            <h2 className="section-heading mb-6">About</h2>
            <div className="space-y-4 text-[#4a5568] leading-relaxed text-base" style={{ fontFamily: "'Source Sans 3', sans-serif" }}>
              <p>
                Practice Head, Enterprise Architect, and Technology Leader with over <strong className="text-[#1a2744]">18+ years of experience</strong> in Omnichannel Digital Transformation, Solution Architecture, and MACH-based composable commerce projects. Specializes in building high-performance teams from the ground up, KPI-driven delivery, presales, and innovation.
              </p>
              <p>
                A trusted advisor to senior technologists and C-Level executives, delivering large-scale Omni-channel and marketplace commerce applications with a sharp focus on business and technology strategy. Extensive experience in P&L leadership, delivery leadership, project and program management governance, and developing enterprise omnichannel B2B, B2C, and Marketplace commerce solutions.
              </p>
              <p>
                Currently serving as <strong className="text-[#1a2744]">Co-Founder & Director at Metafyai</strong>, leading the vision, strategy, and growth of an AI-driven commerce solutions company, and as <strong className="text-[#1a2744]">Director of Technology at Royal Cyber Inc.</strong>, heading the Digital Commerce practice.
              </p>
            </div>

            {/* Specialties */}
            <div className="mt-8 p-6 bg-white border border-[#e8e4dd] rounded-sm">
              <h3 className="text-sm font-semibold uppercase tracking-widest text-[#d4820a] mb-4" style={{ fontFamily: "'IBM Plex Mono', monospace" }}>
                Key Specialties
              </h3>
              <div className="flex flex-wrap gap-2">
                {[
                  "Practice Lead – DXP & Emerging Technology",
                  "Platform Evaluations & Implementation",
                  "MACH Architecture",
                  "SAP Commerce Cloud",
                  "commercetools",
                  "VTEX Commerce",
                  "AI/ML Product Development",
                  "P&L Leadership",
                  "Client Management",
                  "Presales & Cost Proposals",
                  "Enterprise Architecture",
                  "Omnichannel Commerce",
                ].map(s => (
                  <span key={s} className="skill-tag">{s}</span>
                ))}
              </div>
            </div>
          </Section>

          {/* EXPERIENCE */}
          <Section id="experience">
            <h2 className="section-heading mb-8">Experience</h2>
            <div className="space-y-8">
              {visibleExperiences.map((exp) => (
                <div key={exp.id} className="exp-card">
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-3">
                    <div>
                      <h3 className="text-lg font-bold text-[#1a2744]" style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>
                        {exp.title}
                      </h3>
                      <div className="flex items-center gap-2 mt-0.5">
                        <span className="text-[#d4820a] font-semibold text-sm" style={{ fontFamily: "'Source Sans 3', sans-serif" }}>
                          {exp.company}
                        </span>
                        {exp.url && (
                          <a href={exp.url} target="_blank" rel="noopener noreferrer" className="text-[#9aa5b4] hover:text-[#d4820a] transition-colors">
                            <ExternalLink size={12} />
                          </a>
                        )}
                        {exp.current && (
                          <span className="px-1.5 py-0.5 text-xs rounded-sm" style={{ background: "rgba(212,130,10,0.12)", color: "#d4820a", fontFamily: "'IBM Plex Mono', monospace" }}>
                            Current
                          </span>
                        )}
                      </div>
                    </div>
                    <div className="text-right shrink-0">
                      <div className="text-xs text-[#9aa5b4]" style={{ fontFamily: "'IBM Plex Mono', monospace" }}>{exp.period}</div>
                      <div className="text-xs text-[#9aa5b4]" style={{ fontFamily: "'IBM Plex Mono', monospace" }}>{exp.duration} · {exp.location}</div>
                    </div>
                  </div>
                  <ul className="space-y-1.5 mb-4">
                    {exp.highlights.map((h, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-[#4a5568]" style={{ fontFamily: "'Source Sans 3', sans-serif" }}>
                        <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#d4820a] shrink-0" />
                        {h}
                      </li>
                    ))}
                  </ul>
                  <div className="flex flex-wrap gap-1.5">
                    {exp.skills.map(s => (
                      <span key={s} className="skill-tag">{s}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
            {!showAllExp && experiences.length > 6 && (
              <button
                onClick={() => setShowAllExp(true)}
                className="mt-6 px-6 py-2.5 text-sm font-semibold border border-[#1a2744] text-[#1a2744] hover:bg-[#1a2744] hover:text-white transition-all rounded-sm"
                style={{ fontFamily: "'Source Sans 3', sans-serif" }}
              >
                Show all {experiences.length} positions
              </button>
            )}
          </Section>

          {/* PRODUCTS */}
          <Section id="products">
            <h2 className="section-heading mb-3">Products Developed</h2>
            <p className="text-[#4a5568] mb-8 text-sm" style={{ fontFamily: "'Source Sans 3', sans-serif" }}>
              As Product Head at Royal Cyber Inc., led the research and development of proprietary AI-powered commerce products using AI/ML and AR technology.
            </p>
            <div
              className="rounded-sm overflow-hidden mb-8"
              style={{
                backgroundImage: `url(https://d2xsxph8kpxj0f.cloudfront.net/108203525/KPHR6hu3HL4KNWadjMGtVJ/ai_innovation-5QJTjMPBymMxZjDnzNpztS.webp)`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                minHeight: "180px",
                position: "relative",
              }}
            >
              <div className="absolute inset-0" style={{ background: "linear-gradient(to right, rgba(26,39,68,0.9) 0%, rgba(26,39,68,0.6) 100%)" }} />
              <div className="relative z-10 p-8">
                <p className="text-white/60 text-xs uppercase tracking-widest mb-2" style={{ fontFamily: "'IBM Plex Mono', monospace" }}>Innovation Lab</p>
                <h3 className="text-2xl font-bold text-white mb-2" style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>AI-Powered Commerce Products</h3>
                <p className="text-white/70 text-sm max-w-lg" style={{ fontFamily: "'Source Sans 3', sans-serif" }}>
                  Building the next generation of intelligent commerce experiences through machine learning, computer vision, and generative AI.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {products.map((p) => (
                <div key={p.name} className="bg-white border border-[#e8e4dd] p-5 rounded-sm hover:border-[#d4820a] transition-colors group flex flex-col">
                  <div className="text-2xl mb-3">{p.icon}</div>
                  <div className="flex items-start justify-between gap-2 mb-2">
                    <h4 className="font-bold text-[#1a2744] text-sm leading-snug" style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>{p.name}</h4>
                    {(p as any).url && (
                      <a href={(p as any).url} target="_blank" rel="noopener noreferrer" className="shrink-0 text-[#9aa5b4] hover:text-[#d4820a] transition-colors mt-0.5">
                        <ExternalLink size={13} />
                      </a>
                    )}
                  </div>
                  <p className="text-xs text-[#4a5568] leading-relaxed flex-1" style={{ fontFamily: "'Source Sans 3', sans-serif" }}>{p.description}</p>
                  {(p as any).url && (
                    <a href={(p as any).url} target="_blank" rel="noopener noreferrer" className="mt-3 inline-flex items-center gap-1 text-xs font-semibold text-[#d4820a] hover:underline" style={{ fontFamily: "'IBM Plex Mono', monospace" }}>
                      Visit <ExternalLink size={10} />
                    </a>
                  )}
                </div>
              ))}
            </div>
          </Section>

          {/* SKILLS */}
          <Section id="skills">
            <h2 className="section-heading mb-8">Technical Skills</h2>
            <div className="space-y-6">
              {skillCategories.map((cat) => (
                <div key={cat.category} className="bg-white border border-[#e8e4dd] p-6 rounded-sm">
                  <h3 className="text-xs font-semibold uppercase tracking-widest text-[#d4820a] mb-4" style={{ fontFamily: "'IBM Plex Mono', monospace" }}>
                    {cat.category}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {cat.skills.map(s => (
                      <span key={s} className="skill-tag">{s}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </Section>

          {/* CERTIFICATIONS */}
          <Section id="certifications">
            <h2 className="section-heading mb-8">Licenses & Certifications</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {certifications.map((cert) => (
                <div key={cert.name} className="bg-white border border-[#e8e4dd] p-5 rounded-sm hover:shadow-md transition-shadow">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full mt-2 shrink-0" style={{ background: cert.color }} />
                    <div>
                      <h4 className="font-semibold text-[#1a2744] text-sm leading-snug mb-1" style={{ fontFamily: "'Source Sans 3', sans-serif" }}>
                        {cert.name}
                      </h4>
                      <p className="text-xs text-[#d4820a] font-semibold mb-1" style={{ fontFamily: "'IBM Plex Mono', monospace" }}>
                        {cert.issuer}
                      </p>
                      <p className="text-xs text-[#9aa5b4]" style={{ fontFamily: "'IBM Plex Mono', monospace" }}>
                        {cert.date} {cert.credentialId !== "—" && `· ${cert.credentialId}`}
                      </p>
                      {cert.skills.length > 0 && (
                        <div className="flex flex-wrap gap-1 mt-2">
                          {cert.skills.map(s => (
                            <span key={s} className="px-1.5 py-0.5 text-xs rounded-sm" style={{ background: "#f0ede8", color: "#4a5568", fontFamily: "'IBM Plex Mono', monospace" }}>{s}</span>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </Section>

          {/* CLIENTS */}
          <Section id="clients">
            <h2 className="section-heading mb-3">Key Clients</h2>
            <p className="text-[#4a5568] mb-8 text-sm" style={{ fontFamily: "'Source Sans 3', sans-serif" }}>
              Enterprise clients across multiple industries, delivering composable commerce and digital transformation solutions.
            </p>
            <div
              className="rounded-sm overflow-hidden mb-8"
              style={{
                backgroundImage: `url(https://d2xsxph8kpxj0f.cloudfront.net/108203525/KPHR6hu3HL4KNWadjMGtVJ/commerce_abstract-o7XPBNVYeQaqXcwimgsAcK.webp)`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                minHeight: "160px",
                position: "relative",
              }}
            >
              <div className="absolute inset-0" style={{ background: "rgba(26,39,68,0.82)" }} />
              <div className="relative z-10 p-8 flex flex-wrap gap-4 items-center">
                {clients.slice(0, 8).map(c => (
                  <div key={c.name} className="text-white/80 text-sm font-semibold" style={{ fontFamily: "'Source Sans 3', sans-serif" }}>
                    {c.name}
                  </div>
                ))}
              </div>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr style={{ borderBottom: "2px solid #1a2744" }}>
                    <th className="text-left py-3 px-4 text-xs uppercase tracking-widest text-[#1a2744]" style={{ fontFamily: "'IBM Plex Mono', monospace" }}>Client</th>
                    <th className="text-left py-3 px-4 text-xs uppercase tracking-widest text-[#1a2744]" style={{ fontFamily: "'IBM Plex Mono', monospace" }}>Industry</th>
                    <th className="text-left py-3 px-4 text-xs uppercase tracking-widest text-[#1a2744]" style={{ fontFamily: "'IBM Plex Mono', monospace" }}>Platform</th>
                  </tr>
                </thead>
                <tbody>
                  {clients.map((c, i) => (
                    <tr key={c.name} style={{ background: i % 2 === 0 ? "white" : "#f8f6f1", borderBottom: "1px solid #e8e4dd" }}>
                      <td className="py-3 px-4 font-semibold text-[#1a2744]" style={{ fontFamily: "'Source Sans 3', sans-serif" }}>{c.name}</td>
                      <td className="py-3 px-4 text-[#4a5568]" style={{ fontFamily: "'Source Sans 3', sans-serif" }}>{c.industry}</td>
                      <td className="py-3 px-4" style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: "0.75rem", color: "#d4820a" }}>{c.platform}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Section>

          {/* EDUCATION */}
          <Section id="education">
            <h2 className="section-heading mb-8">Education</h2>
            <div className="space-y-4">
              {education.map((edu) => (
                <div key={edu.degree} className="bg-white border border-[#e8e4dd] p-6 rounded-sm flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                  <div>
                    <h3 className="font-bold text-[#1a2744] mb-1" style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>{edu.degree}</h3>
                    <p className="text-sm text-[#d4820a] font-semibold" style={{ fontFamily: "'Source Sans 3', sans-serif" }}>{edu.institution}</p>
                    <p className="text-xs text-[#9aa5b4]" style={{ fontFamily: "'IBM Plex Mono', monospace" }}>{edu.university}</p>
                  </div>
                  <div className="text-right shrink-0">
                    <div className="text-2xl font-bold text-[#d4820a]" style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>{edu.year}</div>
                    <div className="text-xs text-[#9aa5b4]" style={{ fontFamily: "'IBM Plex Mono', monospace" }}>{edu.score}</div>
                  </div>
                </div>
              ))}
            </div>
          </Section>

          {/* CONTACT */}
          <Section id="contact">
            <h2 className="section-heading mb-8">Contact</h2>
            <div className="bg-[#1a2744] rounded-sm p-8 md:p-12">
              <p className="text-white/60 text-sm mb-8 max-w-lg" style={{ fontFamily: "'Source Sans 3', sans-serif" }}>
                Available for enterprise architecture consulting, technology leadership roles, and strategic advisory engagements.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <a href={`mailto:${profile.email}`} className="flex items-center gap-4 p-4 bg-white/5 hover:bg-white/10 rounded-sm transition-colors group">
                  <div className="w-10 h-10 rounded-sm flex items-center justify-center" style={{ background: "rgba(212,130,10,0.2)" }}>
                    <Mail size={18} className="text-[#d4820a]" />
                  </div>
                  <div>
                    <div className="text-white/40 text-xs mb-0.5" style={{ fontFamily: "'IBM Plex Mono', monospace" }}>EMAIL</div>
                    <div className="text-white text-sm font-semibold group-hover:text-[#d4820a] transition-colors" style={{ fontFamily: "'Source Sans 3', sans-serif" }}>{profile.email}</div>
                  </div>
                </a>
                <a href={`tel:${profile.phone}`} className="flex items-center gap-4 p-4 bg-white/5 hover:bg-white/10 rounded-sm transition-colors group">
                  <div className="w-10 h-10 rounded-sm flex items-center justify-center" style={{ background: "rgba(212,130,10,0.2)" }}>
                    <Phone size={18} className="text-[#d4820a]" />
                  </div>
                  <div>
                    <div className="text-white/40 text-xs mb-0.5" style={{ fontFamily: "'IBM Plex Mono', monospace" }}>PHONE</div>
                    <div className="text-white text-sm font-semibold group-hover:text-[#d4820a] transition-colors" style={{ fontFamily: "'Source Sans 3', sans-serif" }}>{profile.phone}</div>
                  </div>
                </a>
                <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 p-4 bg-white/5 hover:bg-white/10 rounded-sm transition-colors group">
                  <div className="w-10 h-10 rounded-sm flex items-center justify-center" style={{ background: "rgba(212,130,10,0.2)" }}>
                    <Linkedin size={18} className="text-[#d4820a]" />
                  </div>
                  <div>
                    <div className="text-white/40 text-xs mb-0.5" style={{ fontFamily: "'IBM Plex Mono', monospace" }}>LINKEDIN</div>
                    <div className="text-white text-sm font-semibold group-hover:text-[#d4820a] transition-colors" style={{ fontFamily: "'Source Sans 3', sans-serif" }}>linkedin.com/in/mahaveer-amudhachandran</div>
                  </div>
                </a>
                <div className="flex items-center gap-4 p-4 bg-white/5 rounded-sm">
                  <div className="w-10 h-10 rounded-sm flex items-center justify-center" style={{ background: "rgba(212,130,10,0.2)" }}>
                    <MapPin size={18} className="text-[#d4820a]" />
                  </div>
                  <div>
                    <div className="text-white/40 text-xs mb-0.5" style={{ fontFamily: "'IBM Plex Mono', monospace" }}>LOCATION</div>
                    <div className="text-white text-sm font-semibold" style={{ fontFamily: "'Source Sans 3', sans-serif" }}>{profile.location}</div>
                  </div>
                </div>
              </div>
            </div>
          </Section>

        </main>
      </div>

      {/* FOOTER */}
      <footer className="bg-[#1a2744] py-8 px-6 md:px-12 mt-8">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-white/40 text-xs" style={{ fontFamily: "'IBM Plex Mono', monospace" }}>
            © 2026 Mahaveer Amudhachandran · Director of Technology
          </div>
          <div className="flex items-center gap-4">
            <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className="text-white/40 hover:text-[#d4820a] transition-colors">
              <Linkedin size={16} />
            </a>
            <a href={`mailto:${profile.email}`} className="text-white/40 hover:text-[#d4820a] transition-colors">
              <Mail size={16} />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
