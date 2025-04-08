import BenefitSectiom from "@/components/homePage/BenefitSectiom";
import FeatureSection from "@/components/homePage/FeatureSection";
import HeroSection from "@/components/homePage/HeroSection";
import QuoteSection from "@/components/homePage/QuoteSection";

export default function Home() {
  return (
    <>
      <main className="">
        <HeroSection />
        <FeatureSection/>
        <BenefitSectiom/>
        <QuoteSection/>
      </main>
    </>
  );
}
