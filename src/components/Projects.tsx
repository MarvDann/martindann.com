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
    title: 'Eggplant Studio',
    description: 'Lead engineer working on a sophisticated VSCode extension enabling visual end-to-end testing for enterprise clients.',
    technologies: ['Node.js', 'TypeScript', 'VSCode API', 'React', 'C++', 'C#', 'Objective-C'],
    achievements: [
      'Spearheaded development of complex VSCode extension to enterprise clients',
      'Improved developer workflow efficiency adopting agentic AI workflows',
      'Maintained high code quality and best practices across multiple languages and frameworks',
      'Helped to recruit and mentor engineering talent for the team'
    ]
  },
  {
    title: 'Eggplant Digital Automation Intelligence',
    description: 'Helped create test automation platform serving enterprise clients with intelligent model-based testing solutions and real-time analytics.',
    technologies: ['React', 'TypeScript', 'Node.js', 'Dojo', 'Python', 'Ruby', 'Docker', 'RabbitMQ', 'PostgreSQL'],
    achievements: [
      'Delivered model based automated testing solution frontend in React/TypeScript',
      'Implemented backend services with Python, Ruby and PostgreSQL',
      'Microservices architecture with RabbitMQ / ZeroMQ message queuing',
    ]
  },
  {
    title: 'Big Foodie Mobile Platform',
    description: 'Developed comprehensive food service platform with mobile-first design, supporting iOS and Android applications with robust API backend.',
    technologies: ['ASP.NET MVC 4', 'Web API 2', 'ASP.NET Core', 'Angular JS', 'C#'],
    achievements: [
      'Built mobile web application and native app APIs',
      'Implemented OAuth2 authentication and secure payment processing',
      'Led development team and architecture decisions'
    ]
  },
  {
    title: 'Oil & Gas Job Search',
    description: 'Complete rebuild of enterprise job search platform with modern architecture, implementing best practices and scalable design patterns.',
    technologies: ['C#', 'ASP.NET MVC 4', 'JavaScript', 'jQuery', 'Web API', 'MS SQL', 'Backbone.js'],
    achievements: [
      'Designed and implemented full web platform with scalable architecture',
      'Full Text Search integration with Solr',
      'Intelligent caching layer for performance',
      'Acquired by CareerBuilder in 2014'
    ]
  },
  {
    title: 'Envirofone.com',
    description: 'Architected and built complete mobile phone trade-in platform enabling customers to sell used phones for cash or Argos vouchers with end-to-end tracking from receipt to sales.',
    technologies: ['Classic ASP', 'ASP.NET', 'C#', 'JavaScript', 'MS SQL Server'],
    achievements: [
      'Built entire platform from ground up in Classic ASP and later ASP.NET C#',
      'Implemented end-to-end phone tracking system',
      'Scaled from single server to load-balanced infrastructure with dedicated DB server',
    ]
  },
  {
    title: 'BensonsForBeds',
    description: 'Collaborated and developed key components of the e-commerce platform for BensonsForBeds, enhancing user experience and optimizing performance.',
    technologies: ['Classic ASP', 'HTML', 'CSS', 'JavaScript', 'MS SQL Server'],
    achievements: [
      'Collaborated on development of e-commerce platform',
      'Enhanced user experience and optimized performance',
      'Integrated with payment gateways and third-party services'
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
