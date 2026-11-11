import { useEffect, useState } from "react";

const links = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export const Navbar = () => {
  const [active, setActive] = useState("home");
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((entry) => {
        if (entry.isIntersecting) setActive(entry.target.id);
      }),
      { rootMargin: "-35% 0px -55% 0px" },
    );
    links.forEach(({ href }) => {
      const section = document.querySelector(href);
      if (section) observer.observe(section);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <header className="site-header">
      <nav className="navbar container" aria-label="Main navigation">
        <a href="#home" className="logo" onClick={() => setMenuOpen(false)}>ESWAR<span>.</span></a>
        <button className="menu-toggle" aria-label="Toggle navigation" aria-expanded={menuOpen} onClick={() => setMenuOpen(!menuOpen)}>
          <span /><span />
        </button>
        <div className={`nav-links ${menuOpen ? "is-open" : ""}`}>
          {links.map((link) => (
            <a key={link.href} href={link.href} className={active === link.href.slice(1) ? "active" : ""} onClick={() => setMenuOpen(false)}>
              {link.label}
            </a>
          ))}
        </div>
        <a className="nav-availability" href="#contact"><span /> Open to opportunities</a>
      </nav>
    </header>
  );
};
