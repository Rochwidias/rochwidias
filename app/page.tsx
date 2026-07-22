import Link from 'next/link';

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-200 font-sans">
      
      {/* 
        NAVBAR 
        Posisi dibuat sticky agar tetap di atas saat di-scroll, 
        layout dijamin rapi dan nggak geser-geser.
      */}
      <nav className="sticky top-0 z-50 backdrop-blur-md bg-slate-950/80 border-b border-slate-800">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex-shrink-0 font-bold text-xl text-cyan-400 tracking-wider">
              RENCAESAR.
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                <Link href="#home" className="hover:text-cyan-400 transition-colors px-3 py-2 rounded-md text-sm font-medium">Home</Link>
                <Link href="#skills" className="hover:text-cyan-400 transition-colors px-3 py-2 rounded-md text-sm font-medium">Skills</Link>
                <Link href="#projects" className="hover:text-cyan-400 transition-colors px-3 py-2 rounded-md text-sm font-medium">Projects</Link>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* HERO SECTION (Bagian Utama) */}
      <section id="home" className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32 flex flex-col justify-center items-center text-center">
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-4 text-white">
          Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Rencaesar Rochwidias</span>
        </h1>
        <p className="text-lg md:text-xl text-slate-400 max-w-2xl mb-8">
          Pelajar & Frontend Web Developer yang antusias membangun pengalaman digital yang interaktif, bersih, dan responsif.
        </p>
        <div className="flex gap-4">
          <a href="#projects" className="bg-cyan-500 hover:bg-cyan-600 text-slate-950 font-bold py-3 px-8 rounded-lg transition-transform hover:scale-105">
            Lihat Portfolio
          </a>
          <a href="https://github.com/Rochwidias" target="_blank" rel="noopener noreferrer" className="bg-slate-800 hover:bg-slate-700 text-white font-semibold py-3 px-8 rounded-lg border border-slate-700 transition-all">
            GitHub Saya
          </a>
        </div>
      </section>

      {/* SKILLS SECTION */}
      <section id="skills" className="bg-slate-900 py-20 border-y border-slate-800">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12 text-white">Keahlian & Teknologi</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            
            <div className="p-6 bg-slate-800 rounded-xl border border-slate-700 hover:border-cyan-500/50 transition-colors">
              <h3 className="font-semibold text-lg text-cyan-400">Web Dasar</h3>
              <p className="text-slate-400 text-sm mt-2">HTML, CSS, JavaScript</p>
            </div>
            
            <div className="p-6 bg-slate-800 rounded-xl border border-slate-700 hover:border-cyan-500/50 transition-colors">
              <h3 className="font-semibold text-lg text-cyan-400">Framework</h3>
              <p className="text-slate-400 text-sm mt-2">Next.js, Tailwind CSS</p>
            </div>
            
            <div className="p-6 bg-slate-800 rounded-xl border border-slate-700 hover:border-cyan-500/50 transition-colors">
              <h3 className="font-semibold text-lg text-cyan-400">Python</h3>
              <p className="text-slate-400 text-sm mt-2">Computer Vision, Tracking</p>
            </div>
            
            <div className="p-6 bg-slate-800 rounded-xl border border-slate-700 hover:border-cyan-500/50 transition-colors">
              <h3 className="font-semibold text-lg text-cyan-400">Tools</h3>
              <p className="text-slate-400 text-sm mt-2">Git, GitHub, Vercel</p>
            </div>

          </div>
        </div>
      </section>

      {/* PROJECTS & INTERESTS SECTION */}
      <section id="projects" className="py-20 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12 text-white">Fokus Saat Ini</h2>
        <div className="grid md:grid-cols-2 gap-8">
          
          <div className="bg-slate-900 p-8 rounded-2xl border border-slate-800 hover:shadow-[0_0_15px_rgba(34,211,238,0.1)] transition-shadow">
            <h3 className="text-2xl font-bold mb-4 text-cyan-400">Frontend Development</h3>
            <p className="text-slate-400 leading-relaxed">
              Membangun dan merancang website portfolio serta aplikasi web interaktif menggunakan ekosistem React dan Next.js. Sangat menjaga struktur kode yang rapi agar mudah dikembangkan.
            </p>
          </div>
          
          <div className="bg-slate-900 p-8 rounded-2xl border border-slate-800 hover:shadow-[0_0_15px_rgba(34,211,238,0.1)] transition-shadow">
            <h3 className="text-2xl font-bold mb-4 text-cyan-400">Analisis Data & Keuangan</h3>
            <p className="text-slate-400 leading-relaxed">
              Selain dunia coding, saya juga aktif memantau pasar saham, khususnya menganalisis saham perbankan dividen tinggi dan pengelolaan *structured warrants* hingga jatuh tempo.
            </p>
          </div>

        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-slate-950 py-8 border-t border-slate-900 text-center text-slate-500">
        <p>&copy; {new Date().getFullYear()} Rencaesar Rochwidias. Dibuat dengan Next.js & Tailwind CSS.</p>
      </footer>
      
    </main>
  );
}