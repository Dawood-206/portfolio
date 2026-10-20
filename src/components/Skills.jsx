import SectionTitle from "./SectionTitle";
import FadeIn from "./FadeIn";
import { skills } from "../data/portfolioData";

export default function Skills() {
  return (
    <section className="section" id="skills">
      <div className="container">
        <FadeIn>
          <SectionTitle title="Skills" subtitle="Technologies I work with" />
        </FadeIn>

        <div className="skills-grid">
          {skills.map((s, i) => (
            <FadeIn key={s.name} delay={i * 80}>
              <div className="skill-card">
                <div className="skill-icon">{s.icon}</div>
                <h3>{s.name}</h3>
                <p>{s.level}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}