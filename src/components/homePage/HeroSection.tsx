import Link from "next/link";
import QuoteForm from "../forms/QuoteForm";
import HeroCarouselContent from "./HeroCarouselContent";
import { Button } from "../ui/button";

export default function HeroSection() {
  return (
    <>
      {/* <section className="min-h-screen bg-white"> */}
      <section className="min-h-[80vh] bg-white">
        <div className="container mx-auto h-full grid place-content-center py-10">
          <div className="flex flex-wrap md:flex-nowrap justify-around items-center gap-2 px-4 pt">
            <div className="text-balance w-full md:w-8/12  space-y-6">
              <h1 className="text-5xl lg:text-5xl leading-14 font-bold">
                Reliable Transportation Solutions For Your Business
              </h1>
              <p className=" leading-8 text-xl font-semibold">
                {/* At Level Services Logistics, we specialize in delivering
                equipment and machinery tailored for the construction sector.
                Trust us to handle your transportation needs with efficiency and
                care. */}
                At Level Services Logistics, we specialize in the efficient and
                secure delivery of equipment and machinery across Kenya. With a
                strong focus on the construction sector, we ensure your cargo
                reaches its destination on time and in perfect condition
              </p>
              <div className="flex justify-between items-center gap-2 pr-6">
                <QuoteForm />
                <Button
                  asChild
                  variant="outline"
                  className="w-36 md:w-48 h-10 text-lg hover:bg-teal-400 hover:scale-110"
                >
                  <Link href={`/contact-us`}>Contact Us</Link>
                </Button>
              </div>
            </div>
            <div className="w-full  ">
              <HeroCarouselContent />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
