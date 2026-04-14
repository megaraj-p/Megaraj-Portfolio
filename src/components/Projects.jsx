import { useEffect, useRef } from 'react'
import { FiGithub, FiExternalLink } from 'react-icons/fi'
import { projects } from '../data/portfolio'

export default function Projects() {
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
    <section id="projects" className="py-24 relative" ref={sectionRef}
      style={{ background: 'linear-gradient(180deg, transparent 0%, rgba(251,191,36,0.03) 50%, transparent 100%)' }}>
      <div className="max-w-6xl mx-auto px-6">
        <p className="section-label reveal">What I've Built</p>
        <h2 className="section-title reveal">Featured Projects</h2>
        <div className="section-divider reveal" />
        <p className="text-center text-slate-500 mb-16 text-lg reveal">
          From AI-powered intelligence platforms to real-time IoT dashboards — projects that matter.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map(p => (
            <div key={p.name} className="glass-card p-7 relative overflow-hidden flex flex-col gap-4 reveal group">
              {/* accent top bar */}
              <div className="absolute top-0 left-0 right-0 h-0.5 rounded-t-2xl transition-all duration-300 group-hover:h-[3px]"
                style={{ background: p.color }} />

              {/* subtle radial glow on hover */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-[0.05] transition-opacity duration-500 pointer-events-none rounded-2xl"
                style={{ background: `radial-gradient(circle at top left, ${p.color}, transparent 60%)` }} />

              <div className="flex justify-between items-start">
                <div className="w-11 h-11 rounded-xl flex items-center justify-center"
                  style={{ background: `${p.color}18`, border: `1px solid ${p.color}40` }}>
                  <FiGithub size={20} style={{ color: p.color }} />
                </div>
                <div className="flex gap-2">
                  {[
                    { icon: <FiGithub size={15}/>, href: p.github, title: 'GitHub' },
                    { icon: <FiExternalLink size={15}/>, href: p.github, title: 'View' },
                  ].map(btn => (
                    <a key={btn.title} href={btn.href} target="_blank" rel="noopener noreferrer" title={btn.title}
                      className="w-8 h-8 rounded-lg flex items-center justify-center text-slate-500 hover:text-slate-200 hover:-translate-y-0.5 transition-all duration-200"
                      style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)' }}>
                      {btn.icon}
                    </a>
                  ))}
                </div>
              </div>

              <h3 className="font-heading font-bold text-slate-100 text-lg leading-snug">{p.name}</h3>
              <p className="text-slate-400 text-sm leading-relaxed flex-1">{p.description}</p>

              <div className="flex flex-wrap gap-1.5 mt-auto">
                {p.tech.map(t => (
                  <span key={t} className="text-[0.72rem] font-semibold px-2.5 py-1 rounded-full border"
                    style={{ background: `${p.color}12`, borderColor: `${p.color}45`, color: p.color }}>
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-14 reveal">
          <a href="https://github.com/megaraj-p?tab=repositories" target="_blank" rel="noopener noreferrer" className="btn-outline">
            <FiGithub size={18} /> View All Repositories
          </a>
        </div>
      </div>
    </section>
  )
}
