import { CalendarRange, Forklift, ShieldPlus, } from "lucide-react";

export default function NeedsSection() {
  return (
    <section className="h-full bg-teal-950">
      <div className="container mx-auto h-full grid  px-4 py-20">
        <div className="space-y-4 max-w-2xl text-white">
          <h2 className="text-3xl font-bold ">
            Comprehensive Transportation Solutions for Your Needs
          </h2>
          <p className="text-lg">
            At Level Services Logistics, we provide a full range of trucking and
            transportation services tailored for the construction and energy sectors. Our
            expertise ensures your equipment and machinery are delivered safely
            and efficiency
          </p>
        </div>
        <div className="w-full text-slate-100 flex flex-wrap md:flex-nowrap justify-between items-start gap-x-8 gap-y-12 py-40">
          <div className="w-full md:w-3/12  space-y-4 text-balance">
            <Forklift className="size-10 text-lime-500" />
            <h3 className="text-2xl font-bold">
              Specialized Equipment Transportation Services{" "}
            </h3>
            <p>We specialize in transporting heavy machinery and equipemet </p>
          </div>
          <div className="w-full md:w-3/12 space-y-4 text-balance">
            <CalendarRange className="size-10 text-lime-500" />
            <h3 className="text-2xl font-bold">
              Reliable and Dependable Delivery Solutions{" "}
            </h3>
            <p>
              Our logistics solutions are designed for relability and speed{" "}
            </p>
          </div>
          <div className="w-full md:w-3/12 space-y-4 text-balance">
            <ShieldPlus className="size-10 text-lime-500" />
            <h3 className="text-2xl font-bold">
              Safety-First Approach to Transportation
            </h3>
            <p>We prioritize safety in every delivery we make. </p>
          </div>
        </div>
      </div>
    </section>
  );
}
