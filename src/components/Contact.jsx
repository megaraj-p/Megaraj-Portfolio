import { useEffect, useRef, useState } from 'react'
import { FiGithub, FiLinkedin, FiMail, FiSend, FiLoader } from 'react-icons/fi'
import emailjs from '@emailjs/browser'
import { personalInfo } from '../data/portfolio'

const EMAILJS_SERVICE_ID = 'service_xc4f4g9'
const EMAILJS_TEMPLATE_ID = 'template_xfi2vo7'
const EMAILJS_PUBLIC_KEY = 'OM4G_I77EVwGlG7cF'

const CONTACT_LINKS = [
  { icon: <FiGithub size={20}/>,   label: 'GitHub',   sub: 'github.com/megaraj-p',       href: personalInfo.github,               color: '#FBBF24' },
  { icon: <FiLinkedin size={20}/>, label: 'LinkedIn',  sub: 'linkedin.com/in/megaraj-p',  href: personalInfo.linkedin,             color: '#A78BFA' },
  { icon: <FiMail size={20}/>,     label: 'Email',     sub: 'megaraj.prabhu@gmail.com',   href: 'mailto:megaraj.prabhu@gmail.com', color: '#F97316' },
]

export default function Contact() {
  const sectionRef = useRef(null)
  const formRef    = useRef(null)
  const [status, setStatus] = useState('idle')
  const [form, setForm]     = useState({ name:'', email:'', message:'' })
  const [errMsg, setErrMsg] = useState('')

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible') }),
      { threshold: 0.1 }
    )
    sectionRef.current?.querySelectorAll('.reveal').forEach(el => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  const handleSubmit = async e => {
    e.preventDefault(); setStatus('sending'); setErrMsg('')
    try {
      await emailjs.sendForm(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, formRef.current, { publicKey: EMAILJS_PUBLIC_KEY })
      setStatus('success'); setForm({ name:'', email:'', message:'' })
      setTimeout(() => setStatus('idle'), 5000)
    } catch (err) { setErrMsg(err?.text || 'Something went wrong.'); setStatus('error') }
  }

  const inputCls = "rounded-xl px-4 py-3 text-slate-200 text-sm placeholder-slate-600 outline-none transition-all duration-200 w-full"
  const inputStyle = { background:'rgba(255,255,255,0.04)', border:'1px solid rgba(255,255,255,0.08)' }

  return (
    <section id="contact" className="py-24 relative" ref={sectionRef}
      style={{ background:'linear-gradient(180deg, transparent 0%, rgba(249,115,22,0.04) 50%, transparent 100%)' }}>
      <div className="max-w-6xl mx-auto px-6">
        <p className="section-label reveal">Get In Touch</p>
        <h2 className="section-title reveal">Let's Work Together</h2>
        <div className="section-divider reveal" />
        <p className="text-center text-slate-500 mb-16 text-lg reveal">Open to freelance projects, internships, and full-time roles.</p>

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.2fr] gap-8 items-start">
          <div className="space-y-4">
            <div className="glass-card p-8 reveal">
              <h3 className="font-heading font-semibold text-xl text-slate-100 mb-7">Connect with Me</h3>
              <div className="flex flex-col gap-3">
                {CONTACT_LINKS.map(cl => (
                  <a key={cl.label} href={cl.href} target="_blank" rel="noopener noreferrer"
                    className="flex items-center gap-4 p-4 rounded-xl transition-all duration-200 group hover:translate-x-1"
                    style={{ background:'rgba(255,255,255,0.03)', border:'1px solid rgba(255,255,255,0.07)' }}>
                    <span className="w-11 h-11 rounded-xl flex items-center justify-center shrink-0"
                      style={{ background:`${cl.color}15`, border:`1px solid ${cl.color}35`, color:cl.color }}>
                      {cl.icon}
                    </span>
                    <div className="flex-1 min-w-0">
                      <div className="font-heading font-semibold text-sm text-slate-200">{cl.label}</div>
                      <div className="text-xs text-slate-500 truncate">{cl.sub}</div>
                    </div>
                    <span className="text-slate-600 group-hover:translate-x-1 transition-transform">→</span>
                  </a>
                ))}
              </div>
            </div>
            <div className="flex items-center gap-4 px-5 py-4 rounded-xl reveal"
              style={{ background:'rgba(34,197,94,0.06)', border:'1px solid rgba(34,197,94,0.2)' }}>
              <span className="w-3 h-3 rounded-full bg-green-400 shrink-0" style={{ animation:'pulse-dot 2s infinite' }} />
              <div>
                <div className="font-heading font-semibold text-green-400 text-sm">Available for Hire</div>
                <div className="text-slate-500 text-xs">Open to opportunities worldwide</div>
              </div>
            </div>
          </div>

          <div className="glass-card p-9 reveal">
            {status === 'success' ? (
              <div className="flex flex-col items-center gap-4 py-10 text-center">
                <span className="w-16 h-16 rounded-full text-3xl flex items-center justify-center"
                  style={{ background:'rgba(34,197,94,0.1)', border:'2px solid #22c55e', color:'#22c55e' }}>✓</span>
                <h3 className="font-heading font-semibold text-xl text-slate-100">Message Sent!</h3>
                <p className="text-slate-400 text-sm">Thanks — I'll reply soon!</p>
              </div>
            ) : (
              <form ref={formRef} onSubmit={handleSubmit} className="space-y-5">
                {[{id:'from_name',label:'Name',type:'text',ph:'Your name'},{id:'reply_to',label:'Email',type:'email',ph:'your@email.com'}].map(f => (
                  <div key={f.id} className="flex flex-col gap-2">
                    <label htmlFor={f.id} className="text-xs font-semibold text-slate-500 uppercase tracking-widest font-heading">{f.label}</label>
                    <input id={f.id} name={f.id} type={f.type} placeholder={f.ph} required
                      value={form[f.id==='from_name'?'name':'email']}
                      onChange={e => setForm(v => ({...v, [f.id==='from_name'?'name':'email']:e.target.value}))}
                      className={inputCls} style={inputStyle}
                      onFocus={e => { e.target.style.borderColor='rgba(251,191,36,0.4)'; e.target.style.background='rgba(251,191,36,0.04)' }}
                      onBlur={e => { e.target.style.borderColor='rgba(255,255,255,0.08)'; e.target.style.background='rgba(255,255,255,0.04)' }} />
                  </div>
                ))}
                <div className="flex flex-col gap-2">
                  <label htmlFor="message" className="text-xs font-semibold text-slate-500 uppercase tracking-widest font-heading">Message</label>
                  <textarea id="message" name="message" rows={5} placeholder="Tell me about your project..." required
                    value={form.message} onChange={e => setForm(v => ({...v, message:e.target.value}))}
                    className={`${inputCls} resize-y`} style={inputStyle}
                    onFocus={e => { e.target.style.borderColor='rgba(251,191,36,0.4)'; e.target.style.background='rgba(251,191,36,0.04)' }}
                    onBlur={e => { e.target.style.borderColor='rgba(255,255,255,0.08)'; e.target.style.background='rgba(255,255,255,0.04)' }} />
                </div>
                {status === 'error' && <p className="text-red-400 text-sm px-4 py-3 rounded-xl" style={{ background:'rgba(239,68,68,0.1)', border:'1px solid rgba(239,68,68,0.2)' }}>⚠ {errMsg}</p>}
                <button type="submit" disabled={status==='sending'} className="btn-primary w-full justify-center disabled:opacity-60 disabled:cursor-not-allowed">
                  {status==='sending' ? <><FiLoader size={16} className="animate-spin"/> Sending…</> : <><FiSend size={16}/> Send Message</>}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
