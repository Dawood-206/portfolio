import { Link } from "react-router-dom";
import { personalInfo } from "../data/portfolioData";
import TypingText from "./TypingText";

export default function Hero() {
  return (
    <section
      className="hero"
      id="hero"
      style={{ backgroundImage: `url(${personalInfo.bannerImage})` }}
    >
      <div className="hero-overlay">
        <div className="hero-content">
          <p className="hero-eyebrow">👋 Hello, I'm</p>
          <h1>{personalInfo.name}</h1>

          <p className="role">
            I build <TypingText words={personalInfo.roles} />
          </p>

          <p className="bio">{personalInfo.tagline}</p>

          <div className="hero-buttons">
            <Link to="/projects" className="btn btn-primary">
              View My Work
            </Link>
            <a
              href={personalInfo.resume}
              download
              className="btn btn-outline"
            >
              ⬇ Download CV
            </a>
            <Link to="/contact" className="btn btn-outline">
              Contact Me
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}