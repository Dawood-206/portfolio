import FadeIn from "./FadeIn";
import { stats } from "../data/portfolioData";

export default function Stats() {
  return (
    <section className="stats-section">
      <div className="container">
        <div className="stats-grid">
          {stats.map((s, i) => (
            <FadeIn key={s.label} delay={i * 100}>
              <div className="stat-item">
                <div className="stat-value">{s.value}</div>
                <div className="stat-label">{s.label}</div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}