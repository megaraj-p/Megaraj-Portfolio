import './index.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Certificates from './components/Certificates'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <>
      {/* Midnight Gold background orbs */}
      <div className="bg-orb" style={{ width: '700px', height: '700px', background: '#FBBF24', top: '-250px', right: '-200px' }} />
      <div className="bg-orb" style={{ width: '600px', height: '600px', background: '#A78BFA', bottom: '-200px', left: '-200px', animationDelay: '-8s' }} />
      <div className="bg-orb" style={{ width: '450px', height: '450px', background: '#F97316', top: '45%', left: '35%', animationDelay: '-15s' }} />

      <Navbar />
      <main style={{ position: 'relative', zIndex: 1 }}>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Certificates />
        <Contact />
      </main>
      <Footer />
    </>
  )
}

export default App
