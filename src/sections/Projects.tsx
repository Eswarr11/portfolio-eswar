import { Reveal } from "../components/Reveal";

const projects = [
  { number: "01", category: "AI / QUALITY ENGINEERING", title: "AI-powered test automation agent", description: "An AI-assisted workflow that reviews feature changes and supports the creation of automation tests and test documentation.", technologies: ["TypeScript", "Playwright", "AI", "Jira"], type: "Professional case study", featured: true },
  { number: "02", category: "TEST INFRASTRUCTURE", title: "Distributed test execution", description: "Parallel regression execution, automated reruns and consolidated reporting for a more efficient feedback loop.", technologies: ["Playwright", "Jenkins", "Docker", "AWS"], type: "Professional case study" },
  { number: "03", category: "CLOUD / SECURITY", title: "Secure automation infrastructure", description: "Centralized secret management and workload authentication patterns for automation infrastructure.", technologies: ["Vault", "Kubernetes", "AWS", "JWT"], type: "Professional case study" },
  { number: "04", category: "WORKFLOW AUTOMATION", title: "Slack–Jira workflow automation", description: "Connected team communication and issue workflows to reduce repetitive release coordination.", technologies: ["Node.js", "Slack API", "Jira"], type: "Professional case study" },
  { number: "05", category: "PERSONAL PROJECT", title: "Online examination system", description: "A full-stack examination platform with timed MCQ attempts and automatic evaluation.", technologies: ["JavaScript", "HTML", "CSS"], type: "Personal project" },
];

export const Projects = () => (
  <section id="projects" className="section container projects-section">
    <Reveal className="section-heading projects-heading">
      <span className="section-kicker">05 / SELECTED WORK</span>
      <h2 className="section-title">A few things <span>I've worked on.</span></h2>
      <p className="section-description">A mix of professional engineering case studies and personal projects.</p>
    </Reveal>
    <div className="projects-grid">
      {projects.map((project, index) => (
        <Reveal key={project.number} delay={index * 0.06} className={project.featured ? "project-reveal featured-reveal" : "project-reveal"}>
          <article className={`project-card ${project.featured ? "project-featured" : ""}`}>
            <div className="project-meta"><span>{project.category}</span><span>{project.number} <b>↗</b></span></div>
            <div className="project-art" aria-hidden="true"><span className="art-orbit orbit-one"/><span className="art-orbit orbit-two"/><span className="art-symbol">{project.featured ? "✳" : project.number}</span><span className="art-caption">ENGINEERING / {project.number}</span></div>
            <div className="project-copy"><h3>{project.title}</h3><p>{project.description}</p><div className="tag-list">{project.technologies.map((technology) => <span className="tag" key={technology}>{technology}</span>)}</div><span className="project-type">{project.type}</span></div>
          </article>
        </Reveal>
      ))}
    </div>
    <p className="confidentiality-note">Professional case studies are intentionally high-level and anonymized to respect organizational confidentiality.</p>
  </section>
);
