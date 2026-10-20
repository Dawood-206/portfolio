import SectionTitle from "./SectionTitle";
import TestimonialCard from "./TestimonialCard";
import FadeIn from "./FadeIn";
import { testimonials } from "../data/portfolioData";

export default function Testimonials() {
  if (testimonials.length === 0) return null;

  return (
    <section className="section" id="testimonials">
      <div className="container">
        <FadeIn>
          <SectionTitle title="Testimonials" subtitle="What people say" />
        </FadeIn>

        <div className="testimonials-grid">
          {testimonials.map((t, i) => (
            <FadeIn key={t.name} delay={i * 100}>
              <TestimonialCard testimonial={t} />
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}