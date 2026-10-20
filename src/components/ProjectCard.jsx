export default function ProjectCard({ project }) {
  return (
    <div className="project-card">
      <img src={project.image} alt={project.title} />
      <div className="project-body">
        <h3>{project.title}</h3>
        <p>{project.description}</p>
        <div className="project-tags">
          {project.tags.map((t) => <span key={t}>{t}</span>)}
        </div>
        <div className="project-links">
          {project.liveUrl && (
            <a href={project.liveUrl} target="_blank" rel="noreferrer">Live Demo →</a>
          )}
          {project.githubUrl && (
            <a href={project.githubUrl} target="_blank" rel="noreferrer">GitHub →</a>
          )}
        </div>
      </div>
    </div>
  );
}