import MainLayout from "@/Layout/MainLayout";
import HeroSection from "@/components/Sections/HeroSection";
import Services from "@/components/Sections/Services";

export default function Home() {
  return (
    <MainLayout>
      <HeroSection />
      <Services />
    </MainLayout>
  );
}
