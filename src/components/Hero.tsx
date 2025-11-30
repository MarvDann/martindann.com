import type { Component } from 'solid-js'
import './Hero.css'

const Hero: Component = () => {
  return (
    <section class="hero" id="home">
      <div class="hero-content">
        <div class="glitch-wrapper">
          <h1 class="hero-title glitch" data-text="Martin Dann">Martin Dann</h1>
        </div>
        <div class="hero-subtitle-wrapper">
          <p class="hero-subtitle">Lead Software Engineer</p>
          <p class="hero-tagline">Full Stack Development • 25+ Years Experience</p>
        </div>
        <div class="hero-cta">
          <a href="#contact" class="btn btn-primary">Get In Touch</a>
          <a href="#projects" class="btn btn-secondary">View Work</a>
        </div>
      </div>
      <div class="hero-bg">
        <div class="grid-overlay"></div>
        <div class="particles"></div>
      </div>
    </section>
  )
}

export default Hero
