import { Link } from "react-router-dom";
import { personalInfo } from "../data/portfolioData";

export default function SidebarRight() {
  return (
    <aside className="sidebar-right">
      <div className="quick-card">
        <h4>Quick Info</h4>
        <p><span>📍</span> {personalInfo.location}</p>
        <p><span>📧</span> {personalInfo.email}</p>
        <p><span>📱</span> {personalInfo.phone}</p>
      </div>

      <div className="quick-card">
        <h4>Currently</h4>
        <p>⚛️ Building with React</p>
        <p>📚 Learning Git & GitHub</p>
        <p>🚀 Open to freelance</p>
      </div>

      <Link to="/contact" className="btn btn-primary side-cta">
        Hire Me
      </Link>

      <a
        href={personalInfo.resume}
        download
        className="btn btn-outline side-cta"
      >
        ⬇ Download CV
      </a>
    </aside>
  );
}