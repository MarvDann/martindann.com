import type { Component } from 'solid-js'
import { For } from 'solid-js'
import './Skills.css'

interface SkillCategory {
  category: string
  skills: string[]
}

const skillCategories: SkillCategory[] = [
  {
    category: 'Frontend',
    skills: ['React', 'SolidJS', 'TypeScript', 'JavaScript', 'Angular', 'Vue', 'Dojo', 'jQuery', 'HTML5', 'CSS3', 'Tailwind', 'AJAX', 'Knockout.js', 'Backbone.js']
  },
  {
    category: 'Backend',
    skills: ['Node.js', 'C#', 'C++', 'Objective C', '.NET Core', 'ASP.NET MVC', 'Python', 'Ruby', 'PHP', 'Classic ASP', 'Java', 'Express', 'Fastify' ]
  },
  {
    category: 'Database',
    skills: ['PostgreSQL', 'MySQL', 'MS SQL Server', 'SQLite', 'Full Text Search', 'Mongo DB']
  },
  {
    category: 'DevOps & Tools',
    skills: ['Docker', 'RabbitMQ', 'Jenkins', 'GitLab CI', 'Git', 'Garden', 'AWS', 'VirtualBox']
  },
  {
    category: 'Architecture & Methodologies',
    skills: ['Agile/Scrum', 'Kanban', 'Unit Testing', 'TDD', 'Repository Pattern', 'Microservices', 'Loosely Coupled Architecture', 'Code Review', ]
  },
  {
    category: 'Mobile & Other',
    skills: ['iOS Development', 'XCode', 'Cocoa Touch', 'VSCode API', 'Claude Agent SDK', 'Claude Code', 'Github Copilot', 'Razor', 'Ionic']
  }
]

const Skills: Component = () => {
  return (
    <section class="skills" id="skills">
      <div class="container">
        <h2 class="section-title">Technical Skills</h2>
        <div class="skills-grid">
          <For each={skillCategories}>
            {(category) => (
              <div class="skill-category">
                <h3 class="category-title">{category.category}</h3>
                <div class="skill-tags">
                  <For each={category.skills}>
                    {(skill) => (
                      <span class="skill-tag">{skill}</span>
                    )}
                  </For>
                </div>
              </div>
            )}
          </For>
        </div>
      </div>
    </section>
  )
}

export default Skills
