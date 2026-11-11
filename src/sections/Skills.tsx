import { Reveal } from "../components/Reveal";

const skillCategories = [
  { number: "01", title: "Programming & frontend", description: "Building interfaces and application logic.", skills: ["TypeScript", "JavaScript", "Node.js", "React", "HTML", "CSS", "SQL"] },
  { number: "02", title: "Quality engineering", description: "Designing confidence into every release.", skills: ["Playwright", "Page Object Model", "UI automation", "API automation", "Axios", "Zod"] },
  { number: "03", title: "Cloud & delivery", description: "Reliable execution from commit to deployment.", skills: ["AWS", "Docker", "Kubernetes", "Jenkins", "GitHub Actions"] },
  { number: "04", title: "Platform & tooling", description: "Secure workflows and developer productivity.", skills: ["HashiCorp Vault", "JWT", "Git", "Jira", "Allure", "Postman"] },
];

export const Skills = () => (
  <section id="skills" className="section container skills-section">
    <Reveal className="section-heading">
      <span className="section-kicker">03 / TOOLKIT</span>
      <h2 className="section-title">Tools of the <span>trade.</span></h2>
      <p className="section-description">A practical toolkit for building, testing and shipping dependable software.</p>
    </Reveal>
    <div className="skills-grid">
      {skillCategories.map((category, index) => (
        <Reveal key={category.number} delay={index * 0.07}>
          <article className="skill-card">
            <div className="card-overline"><span>{category.number} / 04</span><span className="card-arrow">↗</span></div>
            <h3>{category.title}</h3>
            <p>{category.description}</p>
            <div className="tag-list">{category.skills.map((skill) => <span className="tag" key={skill}>{skill}</span>)}</div>
          </article>
        </Reveal>
      ))}
    </div>
  </section>
);
