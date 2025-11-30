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
              Skilled in a wide range of technologies with a recent focus on Node.js, TypeScript, VSCode extension development, React, C++, Objective-C and C# / .NET Core.
            </p>
            <p>
              Currently serving as Lead Software Engineer at Keysight Technologies, 
              building innovative end-to-end testing solutions involving VSCode extensions, 
              web applications, tools and backend integrations delivering value to enterprise clients worldwide.
            </p>
            <p>
              With over 25 years in the industry, I bring deep expertise across the full stack—from architecting
              scalable backend services to crafting intuitive frontend experiences, always focused on the user experience, clean code,
              best practices, and continuous improvement.
            </p>
            <p>
              As we move into the "Age of Agents", I'm passionate about leveraging the latest agentic AI workflows so we can scale our engineering 
              practices and deliver cutting-edge solutions that meet modern challenges.
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
