import type { Component } from 'solid-js'
import { For } from 'solid-js'
import './Projects.css'

interface Project {
  title: string
  description: string
  technologies: string[]
  achievements: string[]
}

const projects: Project[] = [
  {
    title: 'VSCode Extension for Keysight',
    description: 'Led team developing a sophisticated VSCode extension to enhance developer productivity and streamline workflows for enterprise development teams.',
    technologies: ['Node.js', 'TypeScript', 'VSCode API', 'Git'],
    achievements: [
      'Led cross-functional team of engineers',
      'Improved developer workflow efficiency',
      'Integrated with enterprise tooling ecosystem'
    ]
  },
  {
    title: 'Eggplant Digital Automation Intelligence',
    description: 'Built AI-powered test automation platform serving major enterprise clients with intelligent testing capabilities and real-time analytics.',
    technologies: ['React', 'TypeScript', 'Node.js', 'Dojo', 'Python', 'Ruby', 'Docker', 'RabbitMQ', 'PostgreSQL'],
    achievements: [
      'Delivered to Fortune 500 clients',
      'AI-powered test automation capabilities',
      'Microservices architecture with message queuing'
    ]
  },
  {
    title: 'Big Foodie Mobile Platform',
    description: 'Developed comprehensive food service platform with mobile-first design, supporting iOS and Android applications with robust API backend.',
    technologies: ['ASP.NET MVC 4', 'Web API 2', 'ASP.NET Core', 'Angular JS', 'C#'],
    achievements: [
      'Built mobile website and native app APIs',
      'Implemented Agile/Scrum with CI/CD pipeline',
      'Led development team and architecture decisions'
    ]
  },
  {
    title: 'Oil & Gas Job Search Platform',
    description: 'Complete rebuild of enterprise job search platform with modern architecture, implementing best practices and scalable design patterns.',
    technologies: ['C#', 'ASP.NET MVC 4', 'JavaScript', 'jQuery', 'Web API', 'MS SQL', 'Backbone.js'],
    achievements: [
      'Loosely coupled architecture with unit tests',
      'Repository Pattern implementation',
      'Full Text Search and iOS app integration'
    ]
  },
  {
    title: 'Envirofone.com',
    description: 'Architected and built complete mobile phone trade-in platform enabling customers to sell used phones for cash or Argos vouchers with end-to-end tracking from receipt to sales.',
    technologies: ['Classic ASP', 'ASP.NET', 'C#', 'JavaScript', 'MS SQL Server'],
    achievements: [
      'Built entire platform from ground up',
      'Implemented end-to-end phone tracking system',
      'Scaled from single server to load-balanced infrastructure with dedicated DB server',
      'Successfully migrated from Classic ASP to ASP.NET C#'
    ]
  }
]

const Projects: Component = () => {
  return (
    <section class="projects" id="projects">
      <div class="container">
        <h2 class="section-title">Featured Projects</h2>
        <div class="projects-grid">
          <For each={projects}>
            {(project) => (
              <div class="project-card">
                <div class="project-header">
                  <h3 class="project-title">{project.title}</h3>
                </div>
                <p class="project-description">{project.description}</p>
                <div class="project-tech">
                  <For each={project.technologies}>
                    {(tech) => <span class="tech-badge">{tech}</span>}
                  </For>
                </div>
                <ul class="project-achievements">
                  <For each={project.achievements}>
                    {(achievement) => <li>{achievement}</li>}
                  </For>
                </ul>
              </div>
            )}
          </For>
        </div>
      </div>
    </section>
  )
}

export default Projects
