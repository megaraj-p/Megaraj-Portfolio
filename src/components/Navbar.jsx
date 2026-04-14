import { useState, useEffect } from 'react'
import { FiMenu, FiX } from 'react-icons/fi'

const links = ['About', 'Skills', 'Projects', 'Certificates', 'Contact']

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', handler)
    return () => window.removeEventListener('scroll', handler)
  }, [])

  const scrollTo = id => {
    document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: 'smooth' })
    setOpen(false)
  }

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'py-3 bg-[#07080F]/90 backdrop-blur-xl border-b border-white/[0.05] shadow-[0_8px_32px_rgba(0,0,0,0.5)]' : 'py-5'
      }`}>
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
        <span className="font-heading text-2xl font-bold tracking-tight gradient-text cursor-pointer"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>MP</span>

        <ul className="hidden md:flex items-center gap-2 list-none">
          {links.map(l => (
            <li key={l}>
              <button onClick={() => scrollTo(l)}
                className="text-slate-400 hover:text-amber-400 font-heading text-sm font-medium px-4 py-2 rounded-lg hover:bg-amber-400/8 transition-all duration-200 cursor-pointer bg-transparent border-none">
                {l}
              </button>
            </li>
          ))}
          <li>
            <a href="https://github.com/megaraj-p" target="_blank" rel="noopener noreferrer" className="btn-primary !px-5 !py-2 text-sm">
              GitHub
            </a>
          </li>
        </ul>

        <button className="md:hidden text-white bg-transparent border-none cursor-pointer" onClick={() => setOpen(!open)}>
          {open ? <FiX size={22} /> : <FiMenu size={22} />}
        </button>
      </div>

      <div
        className={`md:hidden fixed inset-0 bg-black/40 transition-opacity duration-300 ${open ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
        onClick={() => setOpen(false)}
      />

      <div className={`md:hidden fixed top-0 right-0 w-72 h-screen bg-[#07080F]/98 backdrop-blur-xl border-l border-white/[0.07] flex flex-col pt-20 px-6 gap-1 transition-transform duration-300 ${open ? 'translate-x-0' : 'translate-x-full'}`}>
        <button
          onClick={() => setOpen(false)}
          aria-label="Close menu"
          className="absolute top-6 right-6 text-slate-300 hover:text-amber-400 bg-transparent border-none cursor-pointer"
        >
          <FiX size={24} />
        </button>
        {links.map(l => (
          <button key={l} onClick={() => scrollTo(l)}
            className="text-left text-slate-300 hover:text-amber-400 font-heading text-lg font-medium px-4 py-3 rounded-xl hover:bg-amber-400/8 transition-all duration-200 cursor-pointer bg-transparent border-none w-full">
            {l}
          </button>
        ))}
      </div>
    </nav>
  )
}
