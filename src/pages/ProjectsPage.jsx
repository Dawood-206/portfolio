import { useState } from "react";
import SectionTitle from "../components/SectionTitle";
import ProjectCard from "../components/ProjectCard";
import FadeIn from "../components/FadeIn";
import { projects } from "../data/portfolioData";

export default function ProjectsPage() {
  const [activeTag, setActiveTag] = useState("All");

  // Step A: collect all tags from all projects, remove duplicates
  const allTags = ["All", ...new Set(projects.flatMap((p) => p.tags))];

  // Step B: filter projects by active tag
  const filtered =
    activeTag === "All"
      ? projects
      : projects.filter((p) => p.tags.includes(activeTag));

  return (
    <section className="section section-alt" id="projects">
      <div className="container">
        <FadeIn>
          <SectionTitle title="Projects" subtitle="Things I've built" />
        </FadeIn>

        {/* Filter buttons — only show if there are projects */}
        {projects.length > 0 && (
          <FadeIn delay={100}>
            <div className="filter-bar">
              {allTags.map((tag) => (
                <button
                  key={tag}
                  onClick={() => setActiveTag(tag)}
                  className={`filter-btn ${activeTag === tag ? "active" : ""}`}
                >
                  {tag}
                </button>
              ))}
            </div>
          </FadeIn>
        )}

        {/* Projects grid */}
        {filtered.length === 0 ? (
          <FadeIn delay={150}>
            <p style={{ textAlign: "center", color: "var(--text-muted)", padding: "40px 0" }}>
              {projects.length === 0
                ? "Projects coming soon — currently building 🚀"
                : "No projects match this filter."}
            </p>
          </FadeIn>
        ) : (
          <div className="projects-grid">
            {filtered.map((p, i) => (
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