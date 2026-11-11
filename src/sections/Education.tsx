import { Reveal } from "../components/Reveal";

const education = [
  { level: "POSTGRADUATION", degree: "Master of Computer Applications", institution: "Karpagam Academy of Higher Education", location: "Coimbatore, Tamil Nadu", period: "2023 — 2025" },
  { level: "UNDERGRADUATION", degree: "Bachelor of Computer Applications", institution: "St. Xavier's College", location: "Palayamkottai, Tirunelveli", period: "2020 — 2023" },
];

export const Education = () => (
  <section id="education" className="section container education-section">
    <Reveal className="section-heading"><span className="section-kicker">06 / EDUCATION</span><h2 className="section-title">The foundations.</h2></Reveal>
    <div className="education-grid">
      {education.map((item, index) => (
        <Reveal key={item.degree} delay={index * .1}>
          <article className="education-card"><div className="education-top"><span>{item.level}</span><span>{item.period}</span></div><h3>{item.degree}</h3><p>{item.institution}</p><span className="education-location">{item.location}</span></article>
        </Reveal>
      ))}
    </div>
  </section>
);
