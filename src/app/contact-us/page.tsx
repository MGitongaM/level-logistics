import ContactForm from "@/components/contactUsPage/ContactFormSection";
import HeroSection from "@/components/contactUsPage/HeroSection";
import LocationMapSection from "@/components/contactUsPage/LocationMapSection";

export default function page() {
  return (
    <>
      <HeroSection />
      <ContactForm/>
      <LocationMapSection/>
    </>
  );
}
