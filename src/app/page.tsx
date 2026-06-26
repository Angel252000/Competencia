import Hero from "@/components/Hero";
import AboutSection from "@/components/AboutSection";
import TrainingShowcase from "@/components/TrainingShowcase";
import NewsSection from "@/components/NewsSection";
import Testimonials from "@/components/Testimonials";
import Sponsors from "@/components/Sponsors";

export default function Home() {
  return (
    <>
      <Hero />
      <AboutSection />
      <TrainingShowcase />
      <NewsSection />
      <Testimonials />
      <Sponsors />
    </>
  );
}
