import MainLayout from "@/Layout/MainLayout";
import HeroSection from "@/app/components/Sections/HeroSection";
import ServicesSection from "@/app/components/Sections/ServicesSection";
import AboutSection from "./components/Sections/AboutSection";
import ProjectSection from "./components/Sections/ProjectSection";
import Testimonial from "./components/Sections/Testimonial";
import ContactSection from "./components/Sections/ContactSection";

export default function Home() {
  return (
    <MainLayout>
      <HeroSection />
      <ServicesSection />
      <AboutSection />
      <ProjectSection />
      <Testimonial />
      <ContactSection />
    </MainLayout>
  );
}
