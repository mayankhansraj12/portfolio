import Nav from './components/Nav'
import Hero from './components/Hero'
import MarqueeTicker from './components/MarqueeTicker'
import About from './components/About'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Experience from './components/Experience'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <div className="bg-void min-h-screen">
      <Nav />
      <main>
        <Hero />
        <MarqueeTicker />
        <About />
        <Projects />
        <Skills />
        <Experience />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App
