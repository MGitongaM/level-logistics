import FaqsSection from "@/components/ServicesPage/FaqsSection";
import HeroSection from "@/components/ServicesPage/HeroSection";
import NeedsSection from "@/components/ServicesPage/NeedsSection";
import SolutionsSection from "@/components/ServicesPage/SolutionsSection";


export default function page() {
  return (
    <>
      <HeroSection />
      <NeedsSection/>
      <SolutionsSection/>
      <FaqsSection/>
    </>
  );
}
