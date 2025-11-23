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
    skills: ['React', 'SolidJS', 'TypeScript', 'JavaScript', 'Vue.js', 'HTML5', 'CSS3', 'Sass']
  },
  {
    category: 'Backend',
    skills: ['Node.js', 'Python', 'Java', 'C#', 'PHP', 'Go', 'Ruby', 'REST APIs', 'GraphQL']
  },
  {
    category: 'Database',
    skills: ['PostgreSQL', 'MongoDB', 'MySQL', 'Redis', 'Elasticsearch', 'DynamoDB']
  },
  {
    category: 'Cloud & DevOps',
    skills: ['AWS', 'Azure', 'Docker', 'Kubernetes', 'CI/CD', 'Terraform', 'Jenkins', 'GitHub Actions']
  },
  {
    category: 'Tools & Methodologies',
    skills: ['Git', 'Agile/Scrum', 'Microservices', 'TDD', 'System Design', 'Code Review', 'Performance Optimization']
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
