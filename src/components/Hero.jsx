import { useEffect, useRef, useState } from 'react'
import { FiGithub, FiLinkedin, FiArrowDown, FiDownload } from 'react-icons/fi'
import { personalInfo } from '../data/portfolio'

const resumeUrl = `${import.meta.env.BASE_URL}resume.pdf?v=20260416`

const roles = personalInfo.roles

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0)
  const [displayed, setDisplayed] = useState('')
  const [deleting, setDeleting] = useState(false)
  const timeoutRef = useRef(null)

  useEffect(() => {
    const currentRole = roles[roleIndex]
    if (!deleting && displayed.length < currentRole.length) {
      timeoutRef.current = setTimeout(() => setDisplayed(currentRole.slice(0, displayed.length + 1)), 80)
    } else if (!deleting && displayed.length === currentRole.length) {
      timeoutRef.current = setTimeout(() => setDeleting(true), 2000)
    } else if (deleting && displayed.length > 0) {
      timeoutRef.current = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 40)
    } else {
      setDeleting(false)
      setRoleIndex((roleIndex + 1) % roles.length)
    }
    return () => clearTimeout(timeoutRef.current)
  }, [displayed, deleting, roleIndex])

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden px-6 pt-28 pb-16">
      {/* Grid */}
      <div className="absolute inset-0 opacity-[0.35]" style={{
        backgroundImage: 'linear-gradient(rgba(251,191,36,0.07) 1px, transparent 1px), linear-gradient(90deg, rgba(251,191,36,0.07) 1px, transparent 1px)',
        backgroundSize: '60px 60px',
        maskImage: 'radial-gradient(ellipse 80% 60% at 50% 50%, black 40%, transparent 100%)',
        WebkitMaskImage: 'radial-gradient(ellipse 80% 60% at 50% 50%, black 40%, transparent 100%)',
      }} />

      <div className="max-w-6xl mx-auto text-center relative z-10">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full text-sm font-medium mb-8 border"
          style={{ animation: 'fadeUp 0.6s ease 0.1s both', background: 'rgba(251,191,36,0.08)', borderColor: 'rgba(251,191,36,0.25)', color: '#FBBF24' }}>
          <span className="w-2 h-2 rounded-full bg-green-400 animate-[pulse-dot_2s_infinite]" style={{ boxShadow: '0 0 10px #22c55e' }} />
          Open to opportunities
        </div>

        <h1 className="font-heading font-bold leading-tight tracking-tight mb-6"
          style={{ fontSize: 'clamp(2.8rem,7vw,5.5rem)', animation: 'fadeUp 0.6s ease 0.2s both' }}>
          Hi, I'm <span className="gradient-text">Megaraj P</span>
        </h1>

        <div className="font-heading text-slate-400 mb-7 min-h-[2.4rem]"
          style={{ fontSize: 'clamp(1.2rem,3vw,1.8rem)', animation: 'fadeUp 0.6s ease 0.3s both' }}>
          {displayed}
          <span className="inline-block w-0.5 h-[1.2em] ml-0.5 align-text-bottom animate-[blink_0.8s_infinite]" style={{ background: '#FBBF24' }} />
        </div>

        <p className="max-w-2xl mx-auto text-slate-400 text-lg leading-relaxed mb-10"
          style={{ animation: 'fadeUp 0.6s ease 0.4s both' }}>{personalInfo.bio}</p>

        <div className="flex gap-4 justify-center flex-wrap mb-16" style={{ animation: 'fadeUp 0.6s ease 0.5s both' }}>
          <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" className="btn-primary">
            <FiGithub size={18} /> View GitHub
          </a>
          <a href={resumeUrl} target="_blank" rel="noopener noreferrer" className="btn-primary">
            <FiDownload size={18} /> Download CV
          </a>
          <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className="btn-outline">
            <FiLinkedin size={18} /> LinkedIn
          </a>
        </div>

        <div className="flex gap-12 justify-center flex-wrap" style={{ animation: 'fadeUp 0.6s ease 0.55s both' }}>
          {[['10+', 'Repos'], ['8+', 'Projects'], ['6+', 'Languages'], ['100+', 'LeetCode']].map(([v, l]) => (
            <div key={l} className="flex flex-col items-center gap-1">
              <span className="font-heading font-bold text-4xl gradient-text">{v}</span>
              <span className="text-xs text-slate-500 uppercase tracking-widest">{l}</span>
            </div>
          ))}
        </div>
      </div>

      <button onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
        className="absolute bottom-10 left-1/2 w-11 h-11 rounded-full flex items-center justify-center bg-white/5 border border-white/10 text-slate-400 hover:text-amber-400 hover:border-amber-400/40 cursor-pointer transition-all duration-300 bg-transparent"
        style={{ transform: 'translateX(-50%)', animation: 'bounce-slow 2s infinite' }}>
        <FiArrowDown size={20} />
      </button>
    </section>
  )
}
