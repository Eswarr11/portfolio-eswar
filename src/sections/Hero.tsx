import { motion, useReducedMotion } from "motion/react";

const words = ["Engineering", "reliable", "software."];

export const Hero = () => {
  const reduceMotion = useReducedMotion();
  return (
    <section id="home" className="hero-section">
      <div className="hero-grid" aria-hidden="true" />
      <div className="hero-orb hero-orb-one" aria-hidden="true" />
      <div className="hero-orb hero-orb-two" aria-hidden="true" />
      <div className="hero-content container">
        <motion.div initial={reduceMotion ? false : { opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .7 }} className="hero-eyebrow">
          <span className="eyebrow-line" /> SOFTWARE ENGINEER <span className="eyebrow-dot">/</span> SDET
        </motion.div>
        <h1 className="hero-title" aria-label="Engineering reliable software.">
          {words.map((word, index) => (
            <span className="hero-title-line" key={word}>
              <motion.span
                initial={reduceMotion ? false : { y: "110%", opacity: 0, filter: "blur(9px)" }}
                animate={{ y: 0, opacity: 1, filter: "blur(0px)" }}
                transition={{ duration: .9, delay: .15 + index * .14, ease: [0.22, 1, 0.36, 1] }}
                className={index === 2 ? "accent-text" : ""}
              >{word}</motion.span>
            </span>
          ))}
        </h1>
        <motion.div className="hero-bottom" initial={reduceMotion ? false : { opacity: 0, y: 22 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .8, delay: .72 }}>
          <div>
            <h2>Automating what matters.</h2>
            <p>I build scalable test automation, dependable CI/CD workflows and AI-assisted quality engineering solutions that help teams ship with confidence.</p>
            <div className="hero-actions">
              <a className="button button-primary" href="/resume.pdf" target="_blank" rel="noreferrer">View resume <span>↗</span></a>
              <a className="button button-ghost" href="#projects">Explore my work <span>↓</span></a>
            </div>
          </div>
          <div className="hero-aside">
            <span className="aside-index">01 — 08</span>
            <span className="aside-caption">QUALITY THROUGH<br />ENGINEERING</span>
            <span className="aside-mark">✳</span>
          </div>
        </motion.div>
        <div className="hero-footer-note"><span>BASED IN INDIA</span><span>SCROLL TO EXPLORE ↓</span></div>
      </div>
    </section>
  );
};
