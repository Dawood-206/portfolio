import SectionTitle from "./SectionTitle";
import ServiceCard from "./ServiceCard";
import FadeIn from "./FadeIn";
import { services } from "../data/portfolioData";

export default function Services() {
  return (
    <section className="section" id="services">
      <div className="container">
        <FadeIn>
          <SectionTitle title="Services" subtitle="What I can do for you" />
        </FadeIn>

        <div className="services-grid">
          {services.map((s, i) => (
            <FadeIn key={s.title} delay={i * 100}>
              <ServiceCard service={s} />
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}