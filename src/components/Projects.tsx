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
    title: 'Enterprise Microservices Platform',
    description: 'Architected and developed a scalable microservices platform serving millions of users with real-time data processing capabilities.',
    technologies: ['Node.js', 'TypeScript', 'Kubernetes', 'PostgreSQL', 'Redis', 'AWS'],
    achievements: [
      '99.99% uptime SLA',
      'Handles 10K+ requests/second',
      'Reduced infrastructure costs by 40%'
    ]
  },
  {
    title: 'Real-Time Analytics Dashboard',
    description: 'Built a comprehensive analytics platform with live data visualization and customizable reporting for executive decision-making.',
    technologies: ['React', 'Python', 'GraphQL', 'MongoDB', 'WebSocket', 'D3.js'],
    achievements: [
      'Processes 1M+ events daily',
      'Sub-second query performance',
      'Adopted by 500+ users'
    ]
  },
  {
    title: 'E-Commerce Platform',
    description: 'Developed a full-featured e-commerce solution with payment integration, inventory management, and advanced search capabilities.',
    technologies: ['Vue.js', 'Node.js', 'MySQL', 'Elasticsearch', 'Stripe', 'Docker'],
    achievements: [
      '$10M+ annual revenue',
      '50K+ active customers',
      'Mobile-first responsive design'
    ]
  },
  {
    title: 'DevOps Automation Suite',
    description: 'Created automated deployment pipelines and infrastructure-as-code solutions to streamline development workflows.',
    technologies: ['Jenkins', 'Terraform', 'Docker', 'Kubernetes', 'Python', 'Bash'],
    achievements: [
      '70% faster deployments',
      'Zero-downtime releases',
      'Automated 95% of manual tasks'
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
