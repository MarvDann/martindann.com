import type { Component } from 'solid-js'
import Hero from '../components/Hero'
import About from '../components/About'
import Experience from '../components/Experience'
import Skills from '../components/Skills'
import Certifications from '../components/Certifications'
import Projects from '../components/Projects'
import Contact from '../components/Contact'

const Home: Component = () => {
  return (
    <div class="app">
      <Hero />
      <About />
      <Experience />
      <Skills />
      <Certifications />
      <Projects />
      <Contact />
    </div>
  )
}

export default Home
