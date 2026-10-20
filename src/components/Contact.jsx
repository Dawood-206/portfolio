import SectionTitle from "./SectionTitle";
import FadeIn from "./FadeIn";
import { personalInfo } from "../data/portfolioData";

export default function Contact() {
  const items = [
    { icon: "📧", label: personalInfo.email, href: `mailto:${personalInfo.email}` },
    { icon: "📱", label: personalInfo.phone, href: `tel:${personalInfo.phone}` },
    { icon: "💼", label: "LinkedIn", href: personalInfo.linkedin },
  ];

  if (personalInfo.github) {
    items.push({ icon: "💻", label: "GitHub", href: personalInfo.github });
  }

  return (
    <section className="section section-alt" id="contact">
      <div className="container">
        <FadeIn>
          <SectionTitle title="Contact" subtitle="Let's work together" />
        </FadeIn>

        <div className="contact-content">
          <FadeIn delay={100}>
            <p>Have a project in mind or want to say hello? Reach out.</p>
          </FadeIn>

          <div className="contact-links">
            {items.map((i, idx) => (
              <FadeIn key={i.label} delay={150 + idx * 80}>
                <a
                  href={i.href}
                  target={i.href.startsWith("http") ? "_blank" : undefined}
                  rel="noreferrer"
                  className="contact-item"
                >
                  <span>{i.icon}</span>
                  <span>{i.label}</span>
                </a>
              </FadeIn>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}