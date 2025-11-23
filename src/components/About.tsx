import type { Component } from 'solid-js'
import './About.css'

const About: Component = () => {
  return (
    <section class="about" id="about">
      <div class="container">
        <h2 class="section-title">About Me</h2>
        <div class="about-content">
          <div class="about-text">
            <p class="lead">
              With over 25 years of experience in full stack development, I've built and led teams delivering
              enterprise-scale solutions across industries from tech to oil & gas to food services.
            </p>
            <p>
              Currently serving as Lead Software Engineer at Keysight Technologies, I specialize in building
              modern web applications, VSCode extensions, and AI-powered test automation platforms. My expertise
              spans the full stack with deep knowledge in React, TypeScript, Node.js, C#, and ASP.NET Core.
            </p>
            <p>
              I'm passionate about clean architecture, continuous integration, and delivering exceptional user
              experiences through cutting-edge technology.
            </p>
          </div>
          <div class="about-stats">
            <div class="stat-card">
              <span class="stat-number">25+</span>
              <span class="stat-label">Years Experience</span>
            </div>
            <div class="stat-card">
              <span class="stat-number">100+</span>
              <span class="stat-label">Projects Delivered</span>
            </div>
            <div class="stat-card">
              <span class="stat-number">50+</span>
              <span class="stat-label">Technologies Mastered</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
