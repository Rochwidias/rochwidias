/**
 * page.tsx — LANDING PAGE (one whole file)
 * ===========================================================================
 * All sections are combined here as requested. To keep it easy
 * to read, each section is broken down into local functions (not separate files)
 * with comments above them explaining their respective functions:
 *
 *   Navbar()  -> sticky header: logo, menu, "Contact" button
 *   Hero()    -> topmost section: big title + photo (placeholder)
 *   About()   -> "About Me" section: short bio + 3 quick facts
 *   Skills()  -> skills & technology grid
 *   Projects()-> portfolio project grid (still example data)
 *   Cta()     -> contact/collaboration call-to-action
 *   Footer()  -> bottom copyright row
 *
 * Home() at the very bottom just arranges the order of the sections above.
 * If you want to change the display order, simply move the component
 * call order inside Home().
 * ===========================================================================
 */

// ---------------------------------------------------------------------------
// DATA — collected above for easy editing without dismantling the JSX below
// ---------------------------------------------------------------------------

const NAV_LINKS = [
  { label: "HOME", href: "#home" },
  { label: "ABOUT", href: "#about" },
  { label: "PROJECT", href: "#project" },
  { label: "SKILLS", href: "#skills" },
];

const SKILLS = [
  { title: "Basic Web", desc: "HTML, CSS, JavaScript" },
  { title: "Framework", desc: "Next.js, Tailwind CSS" },
  { title: "Python", desc: "Computer Vision, Tracking" },
  { title: "Tools", desc: "Git, GitHub, Vercel" },
];

const FACTS = [
  { label: "FOCUS", value: "Frontend Dev" },
  { label: "STATUS", value: "Student" },
  { label: "OTHER INTERESTS", value: "Data & Stocks" },
];

// *placeholder example* — replace title/desc/tags/href according to your actual project
const PROJECTS = [
  {
    title: "Portfolio Website",
    desc: "Personal website built with Next.js & Tailwind CSS, focusing on performance and minimalist design.",
    tags: ["Next.js", "Tailwind"],
    href: "#",
  },
  {
    title: "Stock Analysis Dashboard",
    desc: "Dashboard to monitor high dividend banking stocks and structured warrants movements.",
    tags: ["Python", "Data"],
    href: "#",
  },
  {
    title: "Object Tracking App",
    desc: "Computer vision experiment to detect and track objects in real-time with Python.",
    tags: ["OpenCV", "Python"],
    href: "#",
  },
];

// ---------------------------------------------------------------------------
// Navbar — sticky header at the top of the page
// ---------------------------------------------------------------------------
function Navbar() {
  return (
    <nav className="sticky top-0 z-50 glass border-b">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-2.5">
            <span className="logo-badge font-display font-bold text-sm text-[var(--blue-300)]">
              RR
            </span>
            <span className="font-display font-semibold hidden sm:inline text-[var(--ice)]">
              Rochwidias
            </span>
          </div>

          <div className="hidden md:flex items-center gap-8 font-mono text-xs eyebrow text-[var(--muted)]">
            {NAV_LINKS.map((link) => (
              <a key={link.href} href={link.href} className="nav-link hover:text-white transition-colors">
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}

// ---------------------------------------------------------------------------
// Hero — top introduction section
//
// Photo on the right is STILL A PLACEHOLDER. How to replace it with your photo:
//   1. Put the file in /public, e.g., /public/photo.jpg
//   2. import Image from "next/image"; at the very top of this file
//   3. Replace the content of <div className="photo-frame ..."> with:
//        <Image src="/photo.jpg" alt="Rencaesar Rochwidias" fill className="object-cover" />
//      (add the "relative" class to its wrapper div because `fill` needs a relative parent)
// ---------------------------------------------------------------------------
function Hero() {
  return (
    <section id="home" className="max-w-6xl mx-auto px-6 lg:px-8 pt-16 pb-20 md:pt-8">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <span className="font-mono text-xs eyebrow inline-block mb-5 px-4 py-1.5 rounded-full glass text-[var(--blue-300)]">
            WELCOME
          </span>

          <h1 className="font-display text-5xl md:text-6xl font-bold leading-[1.05] mb-6 text-[var(--ice)]">
            My name is
            <br />
            <span className="text-transparent bg-clip-text bg-blue-500">
              Rochwidias
            </span>
          </h1>

          <p className="text-base md:text-lg max-w-md mb-8 leading-relaxed text-[var(--muted)]">
            Frontend Web Developer focused on building clean, interactive, and responsive digital experiences —
            from web interfaces to data exploration.
          </p>
        </div>

        <div className="relative flex justify-center lg:justify-end">
          {/* PLACEHOLDER photo — see comments above the Hero() function */}
          <div className="photo-frame glass w-full max-w-sm aspect-[4/5] relative flex flex-col items-center justify-center gap-3 text-center px-6">
            <svg width="46" height="46" viewBox="0 0 24 24" fill="none" stroke="#60a5fa" strokeWidth="1.5">
              <circle cx="12" cy="8" r="4" />
              <path d="M4 21c0-4.4 3.6-7 8-7s8 2.6 8 7" />
            </svg>
            <p className="font-mono text-xs text-[var(--muted)]">
              <br />
              <img 
                src="/muka.jpg" 
                alt="Profile Photo" 
                className="w-full h-full object-cover absolute top-0 left-0 rounded-2xl" 
              />
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

// ---------------------------------------------------------------------------
// About — "About Me" section: placeholder avatar + bio + quick facts
// ---------------------------------------------------------------------------
function About() {
  return (
    <section id="about" className="py-24 border-y border-[var(--surface-border)]">
      <div className="max-w-6xl mx-auto px-6 lg:px-8 grid md:grid-cols-5 gap-12 items-start">
        <div className="md:col-span-2 flex justify-center md:justify-start">
          <div className="glass rounded-2xl w-full max-w-xs aspect-square flex items-center justify-center">
            <svg width="52" height="52" viewBox="0 0 24 24" fill="none" stroke="#60a5fa" strokeWidth="1.5">
              <circle cx="12" cy="8" r="4" />
              <path d="M4 21c0-4.4 3.6-7 8-7s8 2.6 8 7" />
            </svg>
          </div>
        </div>

        <div className="md:col-span-3">
          <span className="font-mono text-xs eyebrow text-[var(--blue-300)]">ABOUT ME</span>
          <h2 className="font-display text-3xl font-bold mt-3 mb-5 text-[var(--ice)]">A little bit about me</h2>
          <p className="leading-relaxed mb-4 text-[var(--muted)]">
            I am a student and a Frontend Web Developer passionate about building interactive,
            clean, and responsive digital experiences using the React and Next.js ecosystem.
          </p>
          <p className="leading-relaxed mb-8 text-[var(--muted)]">
            Outside of coding, I actively monitor the stock market — especially high dividend banking stocks — and
            experiment with Python for computer vision & tracking.
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
            {FACTS.map((fact) => (
              <div key={fact.label} className="glass rounded-xl px-4 py-3">
                <p className="font-mono text-[10px] eyebrow text-[var(--blue-300)]">{fact.label}</p>
                <p className="font-display font-semibold mt-1 text-sm text-[var(--ice)]">{fact.value}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// ---------------------------------------------------------------------------
// Skills — skills & technology grid
// ---------------------------------------------------------------------------
function Skills() {
  return (
    <section id="skills" className="py-24">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-14">
          <span className="font-mono text-xs eyebrow text-[var(--blue-300)]">SKILLS & TECHNOLOGY</span>
          <h2 className="font-display text-3xl font-bold mt-3 text-[var(--ice)]">Tools I use</h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
          {SKILLS.map((skill) => (
            <div key={skill.title} className="glass glass-hover rounded-2xl p-6 text-center">
              <h3 className="font-display font-semibold text-[var(--ice)]">{skill.title}</h3>
              <p className="text-sm mt-1.5 text-[var(--muted)]">{skill.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ---------------------------------------------------------------------------
// Projects — portfolio project grid (PROJECTS above is still example data)
// ---------------------------------------------------------------------------
function Projects() {
  return (
    <section id="project" className="py-24 border-t border-[var(--surface-border)]">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-14">
          <span className="font-mono text-xs eyebrow text-[var(--blue-300)]">PROJECT</span>
          <h2 className="font-display text-3xl font-bold mt-3 text-[var(--ice)]">Some things I've worked on</h2>
          <p className="font-mono text-xs mt-3 text-[var(--muted)]">*placeholder example — replace with your actual projects</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {PROJECTS.map((project) => (
            <div key={project.title} className="glass glass-hover rounded-2xl overflow-hidden">
              <div className="project-thumb h-40" />
              <div className="p-6">
                <h3 className="font-display font-semibold mb-2 text-[var(--ice)]">{project.title}</h3>
                <p className="text-sm mb-4 text-[var(--muted)]">{project.desc}</p>
                <div className="flex gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span key={tag} className="font-mono text-[10px] px-2 py-1 rounded-full chip text-[var(--blue-300)]">
                      {tag}
                    </span>
                  ))}
                </div>
                <a href={project.href} className="text-sm font-semibold text-[var(--blue-300)]">
                  View Details →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ---------------------------------------------------------------------------
// Cta — contact/collaboration call-to-action panel
// ---------------------------------------------------------------------------
function Cta() {
  return (
    <section id="kontak" className="max-w-6xl mx-auto px-6 lg:px-8 pb-24">
      <div className="glass rounded-3xl p-10 md:p-14 text-center">
        <h2 className="font-display text-2xl md:text-3xl font-bold mb-3 text-[var(--ice)]">
          Interested in collaborating?
        </h2>
        <p className="max-w-xl mx-auto mb-8 text-[var(--muted)]">
          Open for project discussions, collaborations, or just chatting about frontend and data.
        </p>
        <a
          href="https://github.com/Rochwidias"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block btn-primary text-white font-semibold py-3 px-8 rounded-xl font-display"
        >
          Contact via GitHub
        </a>
      </div>
    </section>
  );
}

// ---------------------------------------------------------------------------
// Footer — bottom copyright row
// ---------------------------------------------------------------------------
function Footer() {
  return (
    <footer className="py-8 border-t border-[var(--surface-border)] text-center font-mono text-xs text-[var(--muted)]">
      <p>&copy; {new Date().getFullYear()} Rencaesar Rochwidias — Built with Next.js & Tailwind CSS</p>
    </footer>
  );
}

// ---------------------------------------------------------------------------
// Home — assembles all the sections above. This is the only export of the file.
// ---------------------------------------------------------------------------
export default function Home() {
  return (
    <main className="min-h-screen font-sans">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Cta />
      <Footer />
    </main>
  );
}