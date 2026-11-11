import "./App.css";
import { Navbar } from "./components/Navbar";
import { Hero } from "./sections/Hero";
import { About } from "./sections/About";
import { Skills } from "./sections/Skills";
import { Experience } from "./sections/Experience";
import { Projects } from "./sections/Projects";
import { Education } from "./sections/Education";
import { Contact } from "./sections/Contact";

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Education />
        <Contact />
      </main>
      <footer className="site-footer container">
        <a href="#home" className="footer-logo">ESWAR<span>.</span></a>
        <p>Designed & built with React, TypeScript and Motion.</p>
        <a href="#home" className="back-top">Back to top ↑</a>
      </footer>
    </>
  );
}

export default App;
