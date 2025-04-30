import FaqsSection from "@/components/ServicesPage/FaqsSection";
import HeroSection from "@/components/ServicesPage/HeroSection";
import NeedsSection from "@/components/ServicesPage/NeedsSection";
import SolutionsSection from "@/components/ServicesPage/SolutionsSection";
import { Metadata } from "next";
import { getCldOgImageUrl } from "next-cloudinary";

const url= getCldOgImageUrl({src:"level_services_logistics_servicesPage_OG_image_bbemwj"})
export const metdadata:Metadata={
  title:"Services - Level Services Logistics",
  description:"Discover our specialized trucking services tailored for the construction sector's unique transportation needs",
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
      <NeedsSection/>
      <SolutionsSection/>
      <FaqsSection/>
    </>
  );
}
