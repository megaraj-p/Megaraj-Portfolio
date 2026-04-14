import { useEffect, useRef } from 'react'
import { FiAward, FiExternalLink } from 'react-icons/fi'
import { certifications } from '../data/portfolio'

export default function Certificates() {
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
        <section id="certificates" className="py-24 relative" ref={sectionRef}
            style={{ background: 'linear-gradient(180deg, transparent 0%, rgba(249,115,22,0.04) 50%, transparent 100%)' }}>
            <div className="max-w-6xl mx-auto px-6">
                <p className="section-label reveal">Proof of Learning</p>
                <h2 className="section-title reveal">Certificates</h2>
                <div className="section-divider reveal" />
                <p className="text-center text-slate-500 mb-14 text-lg reveal">
                    Credentials from technical training, internships, and continuous upskilling.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {certifications.map(cert => (
                        <article key={cert.id} className="glass-card p-6 reveal flex flex-col gap-4 group relative overflow-hidden">
                            <div className="absolute top-0 left-0 right-0 h-0.5 rounded-t-2xl bg-amber-400/80" />
                            <div className="absolute inset-0 opacity-0 group-hover:opacity-[0.06] transition-opacity duration-500 pointer-events-none rounded-2xl"
                                style={{ background: 'radial-gradient(circle at top left, #F59E0B, transparent 60%)' }} />

                            <div className="w-11 h-11 rounded-xl flex items-center justify-center"
                                style={{ background: 'rgba(251,191,36,0.10)', border: '1px solid rgba(251,191,36,0.35)' }}>
                                <FiAward size={20} color="#FBBF24" />
                            </div>

                            <div>
                                <h3 className="font-heading text-slate-100 font-semibold text-lg leading-snug">{cert.name}</h3>
                                <p className="text-amber-300/90 text-sm mt-1">{cert.issuer}</p>
                                <p className="text-slate-500 text-xs mt-1">
                                    Issued: {new Date(cert.date).toLocaleDateString('en-IN', { year: 'numeric', month: 'short', day: '2-digit' })}
                                </p>
                            </div>

                            <a
                                href={cert.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="mt-auto inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-sm font-medium text-amber-300 border border-amber-400/30 bg-amber-400/5 hover:bg-amber-400/10 hover:border-amber-400/55 transition-all duration-200"
                            >
                                View Certificate <FiExternalLink size={14} />
                            </a>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    )
}