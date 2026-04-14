import { FiGithub, FiLinkedin } from 'react-icons/fi'
import { personalInfo } from '../data/portfolio'

export default function Footer() {
  const year = new Date().getFullYear()
  const navLinks = ['About', 'Skills', 'Projects', 'Contact']
  const scrollTo = id => document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: 'smooth' })

  return (
    <footer className="relative pt-14 pb-8" style={{ background:'rgba(7,8,15,0.97)', borderTop:'1px solid rgba(255,255,255,0.06)' }}>
      {/* Top glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-40 pointer-events-none"
        style={{ background:'radial-gradient(ellipse, rgba(251,191,36,0.08) 0%, transparent 70%)' }} />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="flex flex-wrap justify-between gap-8 mb-10">
          <div>
            <span className="gradient-text font-heading text-2xl font-bold block mb-2">Megaraj P</span>
            <p className="text-slate-500 text-sm">Java · Backend · AI/ML · Cyber Security</p>
          </div>

          <nav className="flex gap-1 flex-wrap items-start">
            {navLinks.map(l => (
              <button key={l} onClick={() => scrollTo(l)}
                className="text-slate-500 hover:text-amber-400 text-sm font-medium px-3.5 py-2 rounded-lg transition-all duration-200 cursor-pointer bg-transparent border-none font-heading">
                {l}
              </button>
            ))}
          </nav>

          <div className="flex gap-2">
            {[
              { href: personalInfo.github,   icon: <FiGithub size={17}/>,   label: 'GitHub',   hoverColor:'#FBBF24' },
              { href: personalInfo.linkedin, icon: <FiLinkedin size={17}/>, label: 'LinkedIn', hoverColor:'#A78BFA' },
            ].map(s => (
              <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" aria-label={s.label}
                className="w-10 h-10 rounded-xl flex items-center justify-center text-slate-500 hover:-translate-y-0.5 transition-all duration-200"
                style={{ background:'rgba(255,255,255,0.04)', border:'1px solid rgba(255,255,255,0.08)' }}
                onMouseEnter={e => { e.currentTarget.style.color = s.hoverColor; e.currentTarget.style.borderColor = `${s.hoverColor}40` }}
                onMouseLeave={e => { e.currentTarget.style.color = ''; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)' }}>
                {s.icon}
              </a>
            ))}
          </div>
        </div>

        <div className="flex flex-wrap justify-between gap-3 text-xs text-slate-600 pt-6"
          style={{ borderTop:'1px solid rgba(255,255,255,0.05)' }}>
          <span>© {year} Megaraj P. All rights reserved.</span>
          <span>Built with React + Vite + Tailwind CSS</span>
        </div>
      </div>
    </footer>
  )
}
