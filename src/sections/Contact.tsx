import { Reveal } from "../components/Reveal";

export const Contact = () => (
  <section id="contact" className="contact-section">
    <div className="container contact-inner">
      <Reveal>
        <span className="section-kicker">07 / LET'S CONNECT</span>
        <h2>Have a good problem?<br /><span>Let's solve it.</span></h2>
        <p>I'm open to conversations about software engineering, quality automation and opportunities to build useful things.</p>
        <div className="contact-actions"><a className="button button-primary" href="mailto:eswarjo2003@gmail.com">Start a conversation <span>↗</span></a><a className="text-link" href="https://linkedin.com/in/eswar11" target="_blank" rel="noreferrer">Connect on LinkedIn ↗</a></div>
      </Reveal>
      <div className="contact-decoration" aria-hidden="true">E<span>.</span></div>
    </div>
  </section>
);
