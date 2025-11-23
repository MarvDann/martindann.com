import type { Component } from 'solid-js'
import { For } from 'solid-js'
import './Experience.css'

interface ExperienceItem {
  role: string
  company: string
  period: string
  description: string
  highlights: string[]
}

const experiences: ExperienceItem[] = [
  {
    role: 'Lead Software Engineer',
    company: 'Tech Innovations Inc.',
    period: '2018 - Present',
    description: 'Leading full stack development initiatives and technical architecture decisions',
    highlights: [
      'Architected microservices platform serving 1M+ users',
      'Led team of 12 engineers across multiple time zones',
      'Reduced deployment time by 70% through CI/CD optimization'
    ]
  },
  {
    role: 'Senior Full Stack Developer',
    company: 'Digital Solutions Corp',
    period: '2012 - 2018',
    description: 'Developed enterprise-scale web applications and mentored junior developers',
    highlights: [
      'Built real-time analytics dashboard processing 10K events/second',
      'Implemented automated testing reducing bugs by 60%',
      'Mentored 15+ developers on best practices'
    ]
  },
  {
    role: 'Full Stack Developer',
    company: 'WebTech Systems',
    period: '2000 - 2012',
    description: 'Created and maintained full stack web applications for diverse clients',
    highlights: [
      'Developed e-commerce platforms handling $5M+ annual revenue',
      'Pioneered adoption of responsive design principles',
      'Built CMS systems powering 50+ websites'
    ]
  }
]

const Experience: Component = () => {
  return (
    <section class="experience" id="experience">
      <div class="container">
        <h2 class="section-title">Experience</h2>
        <div class="timeline">
          <For each={experiences}>
            {(exp, index) => (
              <div class="timeline-item" data-index={index()}>
                <div class="timeline-marker"></div>
                <div class="timeline-content">
                  <div class="exp-header">
                    <h3 class="exp-role">{exp.role}</h3>
                    <span class="exp-period">{exp.period}</span>
                  </div>
                  <h4 class="exp-company">{exp.company}</h4>
                  <p class="exp-description">{exp.description}</p>
                  <ul class="exp-highlights">
                    <For each={exp.highlights}>
                      {(highlight) => <li>{highlight}</li>}
                    </For>
                  </ul>
                </div>
              </div>
            )}
          </For>
        </div>
      </div>
    </section>
  )
}

export default Experience
