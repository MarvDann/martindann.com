import type { Component } from 'solid-js'
import { For } from 'solid-js'
import './Certifications.css'

interface Certification {
  title: string
  issuer: string
  issued: string
  expired?: string
  credentialUrl?: string
}

const certifications: Certification[] = [
  {
    title: 'JSNAD: OpenJS Node.js Application Developer',
    issuer: 'The Linux Foundation',
    issued: 'Oct 2021',
    expired: 'Oct 2024'
  },
  {
    title: 'JSNSD: OpenJS Node.js Services Developer',
    issuer: 'The Linux Foundation',
    issued: 'Oct 2021',
    expired: 'Oct 2024'
  },
  {
    title: 'MCPS: Microsoft Certified Professional',
    issuer: 'Microsoft',
    issued: 'Dec 2016'
  },
  {
    title: 'MS: Programming in HTML5 with JavaScript and CSS3',
    issuer: 'Microsoft',
    issued: 'Dec 2016'
  }
]

const Certifications: Component = () => {
  return (
    <section class="certifications" id="certifications">
      <div class="container">
        <h2 class="section-title">Certifications</h2>
        <div class="certifications-grid">
          <For each={certifications}>
            {(cert) => (
              <div class="cert-card">
                <div class="cert-header">
                  <h3 class="cert-title">{cert.title}</h3>
                </div>
                <div class="cert-issuer">{cert.issuer}</div>
                <div class="cert-dates">
                  <span class="cert-issued">Issued {cert.issued}</span>
                </div>
              </div>
            )}
          </For>
        </div>
      </div>
    </section>
  )
}

export default Certifications
