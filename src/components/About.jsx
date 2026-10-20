import SectionTitle from "./SectionTitle";
import FadeIn from "./FadeIn";
import { personalInfo } from "../data/portfolioData";

export default function About() {
  return (
    <section className="section section-alt" id="about">
      <div className="container">
        <FadeIn>
          <SectionTitle title="About Me" subtitle="A little about who I am" />
        </FadeIn>

        <FadeIn delay={150}>
          <div className="about-content">
            <p>{personalInfo.bio}</p>
            <div className="about-info">
              <div>
                <div className="label">Location</div>
                <div className="value">{personalInfo.location}</div>
              </div>
              <div>
                <div className="label">Email</div>
                <div className="value">{personalInfo.email}</div>
              </div>
              <div>
                <div className="label">Status</div>
                <div className="value">Open to work</div>
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}