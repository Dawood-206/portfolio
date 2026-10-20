import SectionTitle from "./SectionTitle";
import ProjectCard from "./ProjectCard";
import FadeIn from "./FadeIn";
import { projects } from "../data/portfolioData";

export default function Projects() {
  return (
    <section className="section section-alt" id="projects">
      <div className="container">
        <FadeIn>
          <SectionTitle title="Projects" subtitle="Things I've built" />
        </FadeIn>

        {projects.length === 0 ? (
          <FadeIn delay={150}>
            <p style={{ textAlign: "center", color: "var(--text-muted)" }}>
              Projects coming soon — currently building 🚀
            </p>
          </FadeIn>
        ) : (
          <div className="projects-grid">
            {projects.map((p, i) => (
              <FadeIn key={p.title} delay={i * 100}>
                <ProjectCard project={p} />
              </FadeIn>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}