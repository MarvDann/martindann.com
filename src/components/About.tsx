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
              With over 25 years of experience in full stack development, I've led teams and delivered
              scalable solutions across diverse industries.
            </p>
            <p>
              As a Lead Software Engineer, I specialize in architecting robust systems, mentoring development
              teams, and driving technical innovation. My expertise spans modern web technologies, cloud
              infrastructure, and agile methodologies.
            </p>
            <p>
              I'm passionate about clean code, performance optimization, and creating exceptional user
              experiences that solve real-world problems.
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
