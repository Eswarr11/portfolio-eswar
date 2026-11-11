import { Reveal } from "../components/Reveal";

const stats = [
  { value: "500+", label: "Automated test cases" },
  { value: "5–8", label: "Parallel CI shards" },
  { value: "30–40%", label: "Regression effort reduced" },
];

export const About = () => (
  <section id="about" className="section container about-section">
    <Reveal className="section-intro" direction="right">
      <span className="section-kicker">02 / A LITTLE ABOUT ME</span>
      <h2 className="section-title">I care about the details <span>that make software dependable.</span></h2>
    </Reveal>
    <Reveal className="about-copy" direction="left" delay={0.12}>
      <p className="about-lead">I'm Eswar — a Software Engineer and SDET focused on quality engineering, automation and developer productivity.</p>
      <p>My work spans Playwright and TypeScript automation, API validation, CI/CD pipelines and cloud infrastructure. I enjoy turning repetitive engineering work into reliable, maintainable systems.</p>
      <p>I'm also exploring backend development and AI-assisted workflows to make the software delivery lifecycle smarter.</p>
      <a className="text-link" href="#experience">Explore my journey <span>↗</span></a>
    </Reveal>
    <Reveal className="about-visual" delay={0.15}>
      <div className="visual-topline"><span>ESWAR A.</span><span>ENGINEERING MINDSET</span></div>
      <div className="visual-code" aria-hidden="true">
        <span className="code-muted">const</span> mindset = <span className="code-accent">[</span><br />
        &nbsp;&nbsp;<span className="code-string">"build"</span>,<br />
        &nbsp;&nbsp;<span className="code-string">"test"</span>,<br />
        &nbsp;&nbsp;<span className="code-string">"improve"</span><br />
        <span className="code-accent">]</span>;
      </div>
      <div className="visual-bottom"><span>CURIOUS BY DEFAULT</span><span>ALWAYS ITERATING ↗</span></div>
    </Reveal>
    <div className="about-stats">
      {stats.map((stat, index) => (
        <Reveal key={stat.label} delay={index * 0.08}>
          <div className="stat-value">{stat.value}</div>
          <div className="stat-label">{stat.label}</div>
        </Reveal>
      ))}
    </div>
  </section>
);
