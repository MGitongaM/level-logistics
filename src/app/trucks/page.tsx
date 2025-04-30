import FleetSection from "@/components/TrucksPage/FleetSection";
import HeroSection from "@/components/TrucksPage/HeroSection";
import MachinerySection from "@/components/TrucksPage/MachinerySection";
import TrucksCTASection from "@/components/TrucksPage/TrucksCTASection";
import { Metadata } from "next";
import { getCldOgImageUrl } from "next-cloudinary";

const url= getCldOgImageUrl({src:"level_services_logistics_trucksPage_OG_image_nwc8jk"})
export const metdadata:Metadata={
  title:"Trucks - Level Services Logistics",
  description:"At Level Services Logistics, we pride ourselves on delivering seamless logistics solutions tailored to the heavy equipment and construction industries.",
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
      <FleetSection />
      <MachinerySection/>
      <TrucksCTASection/>
    </>
  );
}
