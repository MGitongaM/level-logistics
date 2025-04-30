import ContactForm from "@/components/contactUsPage/ContactFormSection";
import HeroSection from "@/components/contactUsPage/HeroSection";
import LocationMapSection from "@/components/contactUsPage/LocationMapSection";
import { Metadata } from "next";
import { getCldOgImageUrl } from "next-cloudinary";

const url= getCldOgImageUrl({src:"level_services_logistics_contactPage_OG_image_m66y2q"})
export const metadata:Metadata={
  title:"Contact Us - Level Services Logistics",
  description:"Get in touch, we'd love to hear from you for any inquiries or for any assistance",
  openGraph: {
    images: {
      width: 1200,
      height: 627,
      url,
    },
  },
}

export default function page() {
  return (
    <>
      <HeroSection />
      <ContactForm/>
      <LocationMapSection/>
    </>
  );
}
