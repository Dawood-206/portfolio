import { Link, NavLink } from "react-router-dom";
import { personalInfo } from "../data/portfolioData";
import ThemeToggle from "./ThemeToggle";

export default function Navbar() {
  const links = [
    { to: "/", label: "Home" },
    { to: "/about", label: "About" },
    { to: "/skills", label: "Skills" },
    { to: "/projects", label: "Projects" },
    { to: "/education", label: "Education" },
    { to: "/contact", label: "Contact" },
  ];

  return (
    <header className="navbar">
      <div className="navbar-inner">
        <Link to="/" className="navbar-logo">{personalInfo.name}</Link>
        <nav className="navbar-links">
          {links.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              className={({ isActive }) => (isActive ? "active" : "")}
              end={l.to === "/"}
            >
              {l.label}
            </NavLink>
          ))}
          <ThemeToggle />
          <a
            href={personalInfo.linkedin}
            target="_blank"
            rel="noreferrer"
            className="btn btn-primary navbar-cta"
          >
            Hire Me
          </a>
        </nav>
      </div>
    </header>
  );
}