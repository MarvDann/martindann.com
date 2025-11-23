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
              Experienced Lead Full Stack Engineer with a demonstrated history of creating successful solutions.
              Skilled in a wide range of technologies with a recent focus on Node.js, TypeScript, React, C# and .NET Core.
            </p>
            <p>
              Currently serving as Lead Software Engineer at Keysight Technologies, I build modern web applications,
              VSCode extensions, and AI-powered test automation platforms that deliver value to enterprise clients worldwide.
            </p>
            <p>
              With over 25 years in the industry, I bring deep expertise across the full stack—from architecting
              scalable backend services to crafting intuitive frontend experiences—always focused on clean code,
              best practices, and continuous improvement.
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
