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
    skills: ['React', 'TypeScript', 'JavaScript', 'Angular', 'Vue', 'Dojo', 'jQuery', 'HTML5', 'CSS3', 'AJAX']
  },
  {
    category: 'Backend',
    skills: ['Node.js', 'C#', 'ASP.NET Core', 'ASP.NET MVC', 'Web API', 'Python', 'Ruby', 'PHP', 'REST APIs']
  },
  {
    category: 'Database',
    skills: ['PostgreSQL', 'MySQL', 'MS SQL Server', 'Full Text Search', 'XML']
  },
  {
    category: 'DevOps & Tools',
    skills: ['Docker', 'RabbitMQ', 'Jenkins', 'Git', 'CI/CD', 'VSCode Extensions']
  },
  {
    category: 'Architecture & Methodologies',
    skills: ['Agile/Scrum', 'Unit Testing', 'Repository Pattern', 'Microservices', 'Loosely Coupled Architecture', 'Code Review']
  },
  {
    category: 'Mobile & Other',
    skills: ['iOS Development', 'XCode', 'Cocoa Touch', 'Backbone.js', 'Razor', 'PetaPoco']
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
