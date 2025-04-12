import CallToActionSection from "@/components/aboutUsPage/CallToActionSection";
import ClientSection from "@/components/aboutUsPage/ClientSection";
import HeroSection from "@/components/aboutUsPage/HeroSection";
import JourneySection from "@/components/aboutUsPage/JourneySection";
import StrengthSection from "@/components/aboutUsPage/StrengthSection";

export default function page() {
  return (
    <>
      <HeroSection />
      <JourneySection />
      <ClientSection/>
      <StrengthSection/>
      <CallToActionSection/>
    </>
  );
}
