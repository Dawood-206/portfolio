import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { personalInfo } from "../data/portfolioData";
import ThemeToggle from "./ThemeToggle";

export default function SidebarLeft() {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  const links = [
    { to: "/", label: "Home" },
    { to: "/about", label: "About" },
    { to: "/skills", label: "Skills" },
    { to: "/projects", label: "Projects" },
    { to: "/education", label: "Education" },
    { to: "/contact", label: "Contact" },
  ];

  return (
    <>
      <header className="mobile-bar">
        <NavLink to="/" className="mobile-logo">{personalInfo.name}</NavLink>
        <button className="hamburger" onClick={() => setOpen(true)}>☰</button>
      </header>

      {open && <div className="drawer-overlay" onClick={close} />}

      <aside className={`sidebar-left ${open ? "open" : ""}`}>
        <button className="drawer-close" onClick={close}>✕</button>
        <div className="sidebar-inner">
          <div className="profile">
            <img src={personalInfo.photo} alt={personalInfo.name} className="profile-photo" />
            <h2>{personalInfo.name}</h2>
            <p className="profile-role">{personalInfo.role}</p>
            <span className="status-badge">● Available for work</span>
          </div>

          <nav className="side-nav">
            {links.map((l) => (
              <NavLink
                key={l.to}
                to={l.to}
                onClick={close}
                className={({ isActive }) => (isActive ? "active" : "")}
                end={l.to === "/"}
              >
                {l.label}
              </NavLink>
            ))}
          </nav>

          <div style={{ display: "flex", justifyContent: "center" }}>
            <ThemeToggle />
          </div>

          <div className="socials">
            {personalInfo.github && (
              <a href={personalInfo.github} target="_blank" rel="noreferrer">GitHub</a>
            )}
            <a href={personalInfo.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
            <a href={`mailto:${personalInfo.email}`}>Email</a>
          </div>
        </div>
      </aside>
    </>
  );
}