import ContactForm from "@/components/contactUs/ContactFormSection";
import HeroSection from "@/components/contactUs/HeroSection";
import LocationMapSection from "@/components/contactUs/LocationMapSection";

export default function page() {
  return (
    <>
      <HeroSection />
      <ContactForm/>
      <LocationMapSection/>
    </>
  );
}
