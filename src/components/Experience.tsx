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
    company: 'Keysight Technologies',
    period: 'Jan 2024 - Present',
    description: 'Leading software engineering initiatives for enterprise solutions',
    highlights: [
      'Architecting and developing solutions using C#, ASP.NET Core, and Node.js',
      'Leading technical decisions for critical enterprise applications',
      'Driving best practices and code quality across development teams'
    ]
  },
  {
    role: 'Senior Software Engineer (Level 5: Expert)',
    company: 'Keysight Technologies',
    period: 'Jan 2022 - Jan 2024',
    description: 'Led development of large-scale React/TypeScript web application and VSCode extension',
    highlights: [
      'Led team building VSCode Extension using Node.js and TypeScript',
      'Developed complex React/TypeScript web application',
      'Mentored engineers on modern development practices and tooling'
    ]
  },
  {
    role: 'Web Developer',
    company: 'Keysight Technologies (Eggplant)',
    period: 'Mar 2017 - Jan 2022',
    description: 'Developed Digital Automation Intelligence suite with AI-powered test automation',
    highlights: [
      'Built enterprise test automation platform for major clients',
      'Tech stack: React, TypeScript, Node.js, Dojo, Ruby, Python, Docker',
      'Implemented RabbitMQ messaging, REST APIs, and PostgreSQL integration'
    ]
  },
  {
    role: 'Lead Software Developer',
    company: 'Big Foodie',
    period: 'Jan 2016 - Dec 2016',
    description: 'Led team building mobile-first food service platform',
    highlights: [
      'Developed mobile website and APIs for iOS/Android applications',
      'Tech: ASP.NET MVC 4, Web API 2, ASP.NET Core, Angular JS',
      'Implemented Agile/Scrum workflow with Jenkins CI and Git'
    ]
  },
  {
    role: 'Lead Web Developer',
    company: 'Oil and Gas Job Search Ltd',
    period: 'May 2010 - Jan 2016',
    description: 'Rebuilt entire web platform from ground up with modern architecture',
    highlights: [
      'Designed and implemented loosely coupled architecture with unit tests',
      'Tech: C#, ASP.NET MVC 4, JavaScript, jQuery, Web API',
      'Implemented Repository Pattern, Full Text Search, and iOS app integration'
    ]
  },
  {
    role: 'Lead Web Developer / Manager',
    company: 'Eazyfone Ltd',
    period: 'Nov 2004 - Dec 2007',
    description: 'Managed web development operations and delivered telecommunications solutions',
    highlights: [
      'Led web development team for telecommunications company',
      'Built customer-facing applications and internal systems',
      'Established development standards and workflows'
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
