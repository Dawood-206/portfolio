import Hero from "../components/Hero";
import Stats from "../components/Stats";
import Services from "../components/Services";
import Testimonials from "../components/Testimonials";
import FadeIn from "../components/FadeIn";

export default function Home() {
  return (
    <>
      <FadeIn>
        <Hero />
      </FadeIn>
      <Stats />
      <Services />
      <Testimonials />
    </>
  );
}