import MainLayout from "@/Layout/MainLayout";
import HeroSection from "@/app/components/Sections/HeroSection";
import AboutSection from "./components/Sections/AboutSection";
import ProjectSection from "./components/Sections/ProjectSection";
import ContactSection from "./components/Sections/ContactSection";
import FooterSection from "./components/Sections/FooterSection";
import ServicesSlide from "@/app/components/features/ServicesSlide";
import ServicesSection from "./components/Sections/ServiceSection";

export default function Home() {
  return (
    <MainLayout>
      <HeroSection />
      <ServicesSlide />
      <AboutSection />
      <ProjectSection />
      <ServicesSection />
      <ContactSection />
      <FooterSection />
    </MainLayout>
  );
}
