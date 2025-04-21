import FleetSection from "@/components/TrucksPage/FleetSection";
import HeroSection from "@/components/TrucksPage/HeroSection";
import MachinerySection from "@/components/TrucksPage/MachinerySection";
import TrucksCTASection from "@/components/TrucksPage/TrucksCTASection";

export default function page() {
  return (
    <>
      <HeroSection />
      <FleetSection />
      <MachinerySection/>
      <TrucksCTASection/>
    </>
  );
}
