import MainLayout from "@/Layout/MainLayout";
import HeroSection from "@/app/components/Sections/HeroSection";
import Services from "@/app/components/Sections/Services";
import Lanyard from "./components/Lanyard/Lanyard";

export default function Home() {
  return (
    <MainLayout>
      <HeroSection />
      <Services />
    </MainLayout>
  );
}
