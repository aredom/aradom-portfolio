import About from './components/about'
import Skills from './components/skills'
import Experience from './components/exprience'
import Services from './components/services'
import Portfolio from './components/portfolio'
import Contact from './components/contact'
import Hero from './components/hero'

export default function Home() {
  return (
    <>
    <Hero />
    <main className="w-11/12 m-auto pt-16">
      <About/>
      <Skills />
      <Experience />
     <Services />
      <Portfolio />
      <Contact />
    </main>
    </>
  )
}