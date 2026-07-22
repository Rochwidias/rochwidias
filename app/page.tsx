/**
 * page.tsx — LANDING PAGE (satu file utuh)
 * ===========================================================================
 * Semua section digabung di sini sesuai permintaan. Supaya tetap mudah
 * dibaca, tiap section dipecah jadi fungsi lokal (bukan file terpisah)
 * dengan komentar di atasnya menjelaskan fungsinya masing-masing:
 *
 *   Navbar()  -> header sticky: logo, menu, tombol "Hubungi"
 *   Hero()    -> section paling atas: judul besar + foto (placeholder)
 *   About()   -> section "About Me": bio singkat + 3 fakta cepat
 *   Skills()  -> grid keahlian & teknologi
 *   Projects()-> grid portfolio project (masih data contoh)
 *   Cta()     -> ajakan kontak/kolaborasi
 *   Footer()  -> baris hak cipta paling bawah
 *
 * Home() di paling bawah cuma menyusun urutan section-section di atas.
 * Kalau mau ubah urutan tampilan, tinggal pindah urutan pemanggilan
 * komponen di dalam Home().
 * ===========================================================================
 */

// ---------------------------------------------------------------------------
// DATA — dikumpulkan di atas biar gampang diedit tanpa bongkar JSX di bawah
// ---------------------------------------------------------------------------

const NAV_LINKS = [
  { label: "HOME", href: "#home" },
  { label: "ABOUT", href: "#about" },
  { label: "PROJECT", href: "#project" },
  { label: "SKILLS", href: "#skills" },
];

const SKILLS = [
  { title: "Web Dasar", desc: "HTML, CSS, JavaScript" },
  { title: "Framework", desc: "Next.js, Tailwind CSS" },
  { title: "Python", desc: "Computer Vision, Tracking" },
  { title: "Tools", desc: "Git, GitHub, Vercel" },
];

const FACTS = [
  { label: "FOKUS", value: "Frontend Dev" },
  { label: "STATUS", value: "Pelajar" },
  { label: "MINAT LAIN", value: "Data & Saham" },
];

// *contoh placeholder* — ganti title/desc/tags/href sesuai project asli kamu
const PROJECTS = [
  {
    title: "Portfolio Website",
    desc: "Website personal dibangun dengan Next.js & Tailwind CSS, fokus pada performa dan desain minimalis.",
    tags: ["Next.js", "Tailwind"],
    href: "#",
  },
  {
    title: "Dashboard Analisis Saham",
    desc: "Dashboard untuk memantau saham perbankan dividen tinggi dan pergerakan structured warrants.",
    tags: ["Python", "Data"],
    href: "#",
  },
  {
    title: "Object Tracking App",
    desc: "Eksperimen computer vision untuk mendeteksi dan melacak objek secara real-time dengan Python.",
    tags: ["OpenCV", "Python"],
    href: "#",
  },
];

// ---------------------------------------------------------------------------
// Navbar — header sticky di atas halaman
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
// Hero — section perkenalan paling atas
//
// Foto di kanan MASIH PLACEHOLDER. Cara ganti dengan fotomu:
//   1. Taruh file di /public, misal /public/photo.jpg
//   2. import Image from "next/image"; di baris paling atas file ini
//   3. Ganti isi <div className="photo-frame ..."> dengan:
//        <Image src="/photo.jpg" alt="Rencaesar Rochwidias" fill className="object-cover" />
//      (tambahkan class "relative" ke div pembungkusnya karena `fill` butuh parent relative)
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
            My name
            <br />
            <span className="text-transparent bg-clip-text bg-blue-600">
              is Ren
            </span>
          </h1>

          <p className="text-base md:text-lg max-w-md mb-8 leading-relaxed text-[var(--muted)]">
            Frontend Web Developer yang fokus membangun pengalaman digital yang bersih, interaktif, dan responsif —
            dari antarmuka web sampai eksplorasi data.
          </p>

          <div className="flex flex-wrap gap-4">
            <a href="#kontak" className="btn-primary text-white font-semibold py-3 px-8 rounded-xl font-display">
              Hubungi Saya
            </a>
            <a href="#project" className="btn-ghost text-white font-semibold py-3 px-8 rounded-xl font-display">
              Lihat Project
            </a>
          </div>
        </div>

        <div className="relative flex justify-center lg:justify-end">
          {/* PLACEHOLDER foto — lihat komentar di atas fungsi Hero() */}
          <div className="photo-frame glass w-full max-w-sm aspect-[4/5] relative flex flex-col items-center justify-center gap-3 text-center px-6">
            <svg width="46" height="46" viewBox="0 0 24 24" fill="none" stroke="#60a5fa" strokeWidth="1.5">
              <circle cx="12" cy="8" r="4" />
              <path d="M4 21c0-4.4 3.6-7 8-7s8 2.6 8 7" />
            </svg>
            <p className="font-mono text-xs text-[var(--muted)]">
              <br />
              <img 
                src="/muka.jpg" 
                alt="Foto Profil" 
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
// About — section "About Me": avatar placeholder + bio + fakta singkat
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
          <h2 className="font-display text-3xl font-bold mt-3 mb-5 text-[var(--ice)]">Sedikit tentang saya</h2>
          <p className="leading-relaxed mb-4 text-[var(--muted)]">
            Saya pelajar sekaligus Frontend Web Developer yang antusias membangun pengalaman digital yang interaktif,
            bersih, dan responsif menggunakan ekosistem React dan Next.js.
          </p>
          <p className="leading-relaxed mb-8 text-[var(--muted)]">
            Di luar coding, saya juga aktif memantau pasar saham — khususnya saham perbankan dividen tinggi — dan
            bereksperimen dengan Python untuk computer vision & tracking.
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
// Skills — grid keahlian & teknologi
// ---------------------------------------------------------------------------
function Skills() {
  return (
    <section id="skills" className="py-24">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-14">
          <span className="font-mono text-xs eyebrow text-[var(--blue-300)]">KEAHLIAN & TEKNOLOGI</span>
          <h2 className="font-display text-3xl font-bold mt-3 text-[var(--ice)]">Tools yang saya pakai</h2>
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
// Projects — grid portfolio project (PROJECTS di atas masih data contoh)
// ---------------------------------------------------------------------------
function Projects() {
  return (
    <section id="project" className="py-24 border-t border-[var(--surface-border)]">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-14">
          <span className="font-mono text-xs eyebrow text-[var(--blue-300)]">PROJECT</span>
          <h2 className="font-display text-3xl font-bold mt-3 text-[var(--ice)]">Beberapa hal yang saya kerjakan</h2>
          <p className="font-mono text-xs mt-3 text-[var(--muted)]">*contoh placeholder — ganti dengan project asli kamu</p>
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
                  Lihat Detail →
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
// Cta — panel ajakan kontak/kolaborasi
// ---------------------------------------------------------------------------
function Cta() {
  return (
    <section id="kontak" className="max-w-6xl mx-auto px-6 lg:px-8 pb-24">
      <div className="glass rounded-3xl p-10 md:p-14 text-center">
        <h2 className="font-display text-2xl md:text-3xl font-bold mb-3 text-[var(--ice)]">
          Tertarik untuk berkolaborasi?
        </h2>
        <p className="max-w-xl mx-auto mb-8 text-[var(--muted)]">
          Terbuka untuk diskusi proyek, kolaborasi, atau sekadar ngobrol soal frontend dan data.
        </p>
        <a
          href="https://github.com/Rochwidias"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block btn-primary text-white font-semibold py-3 px-8 rounded-xl font-display"
        >
          Hubungi via GitHub
        </a>
      </div>
    </section>
  );
}

// ---------------------------------------------------------------------------
// Footer — baris hak cipta paling bawah
// ---------------------------------------------------------------------------
function Footer() {
  return (
    <footer className="py-8 border-t border-[var(--surface-border)] text-center font-mono text-xs text-[var(--muted)]">
      <p>&copy; {new Date().getFullYear()} Rencaesar Rochwidias — Dibuat dengan Next.js & Tailwind CSS</p>
    </footer>
  );
}

// ---------------------------------------------------------------------------
// Home — merangkai semua section di atas. Ini satu-satunya export dari file.
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