import { Link } from "react-router-dom";
import { personalInfo } from "../data/portfolioData";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-links">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/skills">Skills</Link>
          <Link to="/projects">Projects</Link>
          <Link to="/education">Education</Link>
          <Link to="/contact">Contact</Link>
        </div>
        <div className="footer-socials">
          <a href={personalInfo.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
          <a href={`mailto:${personalInfo.email}`}>Email</a>
          {personalInfo.github && (
            <a href={personalInfo.github} target="_blank" rel="noreferrer">GitHub</a>
          )}
        </div>
        <p className="footer-copy">
          © {new Date().getFullYear()} {personalInfo.fullName}. Built with React.
        </p>
      </div>
    </footer>
  );
}