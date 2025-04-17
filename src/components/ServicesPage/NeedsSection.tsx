import { CalendarRange, Forklift, ShieldPlus, } from "lucide-react";

export default function NeedsSection() {
  return (
    <section className="h-full bg-teal-800">
      <div className="container mx-auto h-full grid  px-4 py-20">
        <div className="space-y-4 max-w-2xl text-white">
          <h2 className="text-3xl font-bold ">
            Comprehensive Transportation Solutions for Your Needs
          </h2>
          <p className="text-lg">
            At Levels Logistics, we provide a full range of trucking and
            transportation services tailored for the petroleum sector. Our
            expertise ensures your equipment and machinery are delivered safely
            and efficieny
          </p>
        </div>
        <div className="w-full text-slate-100 flex justify-between items-center gap-8 py-40">
          <div className="w-3/12  space-y-4 text-balance">
            <Forklift className="size-10 text-lime-500" />
            <h3 className="text-2xl font-bold">
              Specialized Equipment Transportation Services{" "}
            </h3>
            <p>We specialize in transporting heavy machinery and equipemet </p>
          </div>
          <div className="w-3/12 space-y-4 text-balance">
            <CalendarRange className="size-10 text-lime-500" />
            <h3 className="text-2xl font-bold">
              Reliable Delivery for the Petroleum Industry{" "}
            </h3>
            <p>
              Our logistics solutions are designed for relability and speed{" "}
            </p>
          </div>
          <div className="w-3/12 space-y-4 text-balance">
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
