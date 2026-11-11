import { Reveal } from "../components/Reveal";

const experiences = [
  {
    company: "SurveySparrow",
    role: "Member of Technical Staff",
    period: "June 2025 — Present",
    current: true,
    summary: "Quality engineering and automation across product workflows and delivery infrastructure.",
    points: [
      "Own and evolve Playwright automation using TypeScript, supporting a suite of 500+ test cases.",
      "Run distributed regression workflows through Jenkins with parallel shards and automated reruns.",
      "Contribute to API validation, secure automation infrastructure and AI-assisted testing workflows.",
    ],
  },
  {
    company: "SurveySparrow",
    role: "QA Automation Intern",
    period: "June 2024 — June 2025",
    current: false,
    summary: "Built product knowledge through hands-on testing and end-to-end automation.",
    points: [
      "Contributed to manual testing and Playwright-based regression coverage.",
      "Supported end-to-end test coverage for Goals and OKR workflows.",
      "Collaborated with engineering teams to investigate issues and improve release confidence.",
    ],
  },
];

export const Experience = () => (
  <section id="experience" className="section container experience-section">
    <Reveal className="section-heading">
      <span className="section-kicker">04 / EXPERIENCE</span>
      <h2 className="section-title">Learning by <span>building.</span></h2>
      <p className="section-description">A journey from hands-on testing to owning automation and engineering workflows.</p>
    </Reveal>
    <div className="experience-list">
      {experiences.map((item, index) => (
        <Reveal key={item.role} delay={index * 0.12}>
          <article className="experience-item">
            <div className="experience-date"><span className="timeline-dot" />{item.period}</div>
            <div className="experience-main">
              <div className="experience-title-row"><div><h3>{item.role}</h3><p className="company-name">{item.company}</p></div>{item.current && <span className="status-pill"><i /> Current</span>}</div>
              <p className="experience-summary">{item.summary}</p>
              <ul>{item.points.map((point) => <li key={point}>{point}</li>)}</ul>
            </div>
          </article>
        </Reveal>
      ))}
    </div>
  </section>
);
