import { useEffect, useRef } from 'react'
import { FiMapPin, FiMail, FiGithub } from 'react-icons/fi'
import { personalInfo, education } from '../data/portfolio'
import megarajImg from '../assets/megaraj.jpeg'

export default function About() {
  const sectionRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible') }),
      { threshold: 0.15 }
    )
    sectionRef.current?.querySelectorAll('.reveal').forEach(el => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <section id="about" className="py-24 relative" ref={sectionRef}
      style={{ background: 'linear-gradient(180deg, transparent 0%, rgba(251,191,36,0.03) 50%, transparent 100%)' }}>
      <div className="max-w-6xl mx-auto px-6">
        <p className="section-label reveal">About Me</p>
        <h2 className="section-title reveal">The Person Behind the Code</h2>
        <div className="section-divider reveal" />

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.5fr] gap-16 mt-4 items-start">
          <div className="flex flex-col items-center gap-5 reveal">
            <div className="relative rounded-3xl overflow-hidden" style={{ width:'224px', height:'300px' }}>
              <img src={megarajImg} alt="Megaraj P" className="w-full h-full object-cover object-top" />
              <div className="absolute -inset-0.5 rounded-3xl -z-10"
                style={{ background: 'linear-gradient(135deg, #FBBF24, #F59E0B, #A78BFA)', filter: 'blur(8px)', opacity: 0.75 }} />
            </div>
            <div className="flex gap-2 flex-wrap justify-center">
              {[['📍','India'],['💼','Available for hire']].map(([icon,txt]) => (
                <span key={txt} className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs text-slate-400"
                  style={{ background:'rgba(255,255,255,0.04)', border:'1px solid rgba(255,255,255,0.08)' }}>
                  {icon} {txt}
                </span>
              ))}
            </div>
          </div>

          <div>
            <p className="text-slate-400 text-lg leading-relaxed reveal">{personalInfo.bio}</p>
            <p className="text-slate-400 text-lg leading-relaxed mt-4 reveal">
              Alongside software development, I have hands-on knowledge of embedded systems and hardware,
              including working with microcontrollers and low-level communication concepts. I enjoy
              algorithmic problem solving and think in terms of system design — breaking complex problems
              into structured, practical solutions. My core interest lies in building{' '}
              <span className="gradient-text font-semibold">reliable, secure systems</span> that effectively
              combine <span className="gradient-text font-semibold">software and hardware</span>.
            </p>

            <div className="flex gap-3 flex-wrap mt-7 mb-8 reveal">
              <a href={personalInfo.github} target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-2 px-5 py-2.5 rounded-xl text-slate-300 text-sm font-medium transition-all duration-200"
                style={{ background:'rgba(255,255,255,0.04)', border:'1px solid rgba(255,255,255,0.08)' }}
                onMouseEnter={e => { e.currentTarget.style.borderColor='rgba(251,191,36,0.4)'; e.currentTarget.style.color='#FBBF24' }}
                onMouseLeave={e => { e.currentTarget.style.borderColor='rgba(255,255,255,0.08)'; e.currentTarget.style.color='' }}>
                <FiGithub size={16} /> GitHub
              </a>
              <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-2 px-5 py-2.5 rounded-xl text-slate-300 text-sm font-medium transition-all duration-200"
                style={{ background:'rgba(255,255,255,0.04)', border:'1px solid rgba(255,255,255,0.08)' }}
                onMouseEnter={e => { e.currentTarget.style.borderColor='rgba(167,139,250,0.4)'; e.currentTarget.style.color='#A78BFA' }}
                onMouseLeave={e => { e.currentTarget.style.borderColor='rgba(255,255,255,0.08)'; e.currentTarget.style.color='' }}>
                <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
                LinkedIn
              </a>
            </div>

            <div className="reveal">
              <h3 className="text-xs uppercase tracking-[3px] font-semibold text-slate-600 mb-4">Education</h3>
              {education.map((e, i) => (
                <div key={i} className="glass-card p-5 flex gap-5 items-start">
                  <span className="shrink-0 text-xs font-bold px-2.5 py-1 rounded-lg mt-0.5 font-heading whitespace-nowrap"
                    style={{ color:'#FBBF24', background:'rgba(251,191,36,0.08)', border:'1px solid rgba(251,191,36,0.2)' }}>
                    {e.year}
                  </span>
                  <div>
                    <div className="font-heading font-semibold text-slate-100 mb-1">{e.degree}</div>
                    <div className="text-amber-400 text-sm mb-1">{e.institution}</div>
                    <div className="text-slate-500 text-xs">{e.details}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
