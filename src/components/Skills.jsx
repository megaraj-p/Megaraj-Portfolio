import { useEffect, useRef } from 'react'
import { skills } from '../data/portfolio'

const categoryStyles = {
  'Languages':      { bg: 'rgba(251,191,36,0.10)',  border: 'rgba(251,191,36,0.22)',  text: '#FBBF24', icon: '{ }' },
  'Frontend':       { bg: 'rgba(167,139,250,0.10)', border: 'rgba(167,139,250,0.22)', text: '#A78BFA', icon: '◈' },
  'Backend':        { bg: 'rgba(249,115,22,0.10)',  border: 'rgba(249,115,22,0.22)',  text: '#F97316', icon: '⚡' },
  'AI / ML':        { bg: 'rgba(56,189,248,0.10)',  border: 'rgba(56,189,248,0.22)',  text: '#38BDF8', icon: '◐' },
  'Cyber Security': { bg: 'rgba(239,68,68,0.10)',   border: 'rgba(239,68,68,0.22)',   text: '#EF4444', icon: '⊕' },
  'Tools & DB':     { bg: 'rgba(52,211,153,0.10)',  border: 'rgba(52,211,153,0.22)',  text: '#34D399', icon: '◫' },
}

export default function Skills() {
  const sectionRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible') }),
      { threshold: 0.1 }
    )
    sectionRef.current?.querySelectorAll('.reveal').forEach(el => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <section id="skills" className="py-24 relative" ref={sectionRef}
      style={{ background: 'linear-gradient(180deg, transparent 0%, rgba(167,139,250,0.04) 50%, transparent 100%)' }}>
      <div className="max-w-6xl mx-auto px-6">
        <p className="section-label reveal">What I Work With</p>
        <h2 className="section-title reveal">Skills & Technologies</h2>
        <div className="section-divider reveal" />
        <p className="text-center text-slate-500 mb-16 text-lg reveal">A diverse toolkit built through projects, challenges, and constant curiosity.</p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map(group => {
            const s = categoryStyles[group.category] || categoryStyles['Tools & DB']
            return (
              <div key={group.category} className="glass-card p-7 relative overflow-hidden reveal">
                <div className="absolute top-0 left-0 right-0 h-0.5 rounded-t-2xl" style={{ background: s.text }} />
                <div className="flex items-center gap-3.5 mb-5">
                  <span className="w-10 h-10 rounded-xl flex items-center justify-center text-base font-bold shrink-0"
                    style={{ background: s.bg, border: `1px solid ${s.border}`, color: s.text }}>{s.icon}</span>
                  <h3 className="font-heading font-semibold" style={{ color: s.text }}>{group.category}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {group.items.map(item => (
                    <span key={item} className="text-xs font-medium px-3 py-1 rounded-full border transition-all duration-200 hover:-translate-y-px"
                      style={{ background: s.bg, borderColor: s.border, color: s.text }}>{item}</span>
                  ))}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
