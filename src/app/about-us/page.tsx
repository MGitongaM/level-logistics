import CallToActionSection from "@/components/aboutUsPage/CallToActionSection";
import ClientSection from "@/components/aboutUsPage/ClientSection";
import HeroSection from "@/components/aboutUsPage/HeroSection";
import JourneySection from "@/components/aboutUsPage/JourneySection";
import StrengthSection from "@/components/aboutUsPage/StrengthSection";
import { Metadata } from "next";
import { getCldOgImageUrl } from "next-cloudinary";

const url = getCldOgImageUrl({src: "level_services_logistics_aboutUsPage_OG_image_ginc9s",});
export const metadata: Metadata = {
  title: "About Us - Level Services Logistics",
  description:
    "At Levels Services Logistics, we are dedicated to providing reliable trucking and transportation services tailored for the construction and energy industries.",
  openGraph: {
    images: {
      width: 1200,
      height: 627,
      url,
    },
  },
};
export default function page() {
  return (
    <>
      <HeroSection />
      <JourneySection />
      <ClientSection />
      <StrengthSection />
      <CallToActionSection />
    </>
  );
}
