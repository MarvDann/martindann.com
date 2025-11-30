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
    role: 'Lead Software Engineer (Level 6: Master)',
    company: 'Keysight Technologies',
    period: 'Jan 2024 - Present',
    description: 'Leading software engineering and AI driven initiatives',
    highlights: [
      'Developing enterprise solutions using Node.js, TypeScript, React, C#, C++ and Objective-C',
      'Adopting and implementing agentic developer workflows to increase productivity',
      'Driving best practices and code quality across development teams and AI agents'
    ]
  },
  {
    role: 'Senior Software Engineer (Level 5: Expert)',
    company: 'Keysight Technologies',
    period: 'Jan 2022 - Jan 2024',
    description: 'Led development of large-scale React/TypeScript web application and VSCode extension',
    highlights: [
      'Led team building VSCode Extension using Node.js and TypeScript',
      'Developed Eggplant DAI React/TypeScript enterprise web application',
      'Mentored engineers on modern development practices and tooling'
    ]
  },
  {
    role: 'Software Engineer (Level 4: Skilled)',
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
    role: 'Lead Software Engineer',
    company: 'Big Foodie',
    period: 'Jan 2016 - Dec 2016',
    description: 'Led team building mobile-first food service platform',
    highlights: [
      'Developed high traffic mobile website and APIs for iOS/Android applications',
      'Tech: ASP.NET MVC 4, Web API 2, ASP.NET Core, Angular JS',
      'Implemented OAuth2 authentication and secure payment processing'
    ]
  },
  {
    role: 'Lead Software Engineer',
    company: 'Oil and Gas Job Search Ltd',
    period: 'May 2010 - Jan 2016',
    description: 'Rebuilt entire web platform from ground up',
    highlights: [
      'Designed and implemented loosely coupled architecture for scalability',
      'Tech: C#, ASP.NET MVC 4, JavaScript, jQuery, Web API, SQL Server, Backbone.js',
      'Implemented Repository Pattern, Full Text Search via SOLR, implemented Smart caching layer using NCache'
    ]
  },
  {
    role: 'FreeLance Software Developer (& Founder)',
    company: 'Qw3',
    period: 'Jan 2008 - May 2010',
    description: 'Started freelance career collaborating on various web projects with agencies and clients',
    highlights: [
      'Worked on diverse web development projects for multiple clients',
      'Worked on ActionAid, Kellogs, Marshalls, Castle Recruitment among many others',
      'Used a wide range of skills including ASP, PHP, VBScript, ASP.NET, C#, Java, JavaScript, SQL Server, MySql, HTML, CSS'
    ]
  },
  {
    role: 'Lead Web Developer / Manager',
    company: 'Eazyfone Ltd',
    period: 'Nov 2004 - Dec 2007',
    description: 'Managed web development operations and delivered envirofone.com',
    highlights: [
      'Led web development team for mobile phone trading company',
      'Built customer-facing applications and internal systems',
      'Established development standards and workflows'
    ]
  },
  {
    role: 'Web Developer',
    company: 'Silkmoth Plc',
    period: 'Aug 200 - Jan 2003',
    description: 'Worked on a variety of client projects for a multimedia agency',
    highlights: [
      'Worked on enterprise e-commerce applications and CMS solutions',
      'Built customer-facing applications and internal systems',
      'Technologies: Classic ASP, VBScript, JavaScript, SQL Server, HTML, CSS, Flash'
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
