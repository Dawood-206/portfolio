import SectionTitle from "./SectionTitle";
import FadeIn from "./FadeIn";
import { education, languages } from "../data/portfolioData";

export default function Education() {
  return (
    <section className="section" id="education">
      <div className="container">
        <FadeIn>
          <SectionTitle title="Education" subtitle="My academic background" />
        </FadeIn>

        <div className="education-list">
          {education.map((e, i) => (
            <FadeIn key={e.degree} delay={i * 100}>
              <div className="edu-item">
                <h3>{e.degree}</h3>
                <p className="edu-meta">{e.institution} • {e.year}</p>
                <p className="edu-grade">Grade: {e.grade}</p>
              </div>
            </FadeIn>
          ))}

          <FadeIn delay={education.length * 100}>
            <div className="edu-item">
              <h3>Languages</h3>
              <p className="edu-meta">
                {languages.map((l) => `${l.name} (${l.level})`).join(" • ")}
              </p>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}