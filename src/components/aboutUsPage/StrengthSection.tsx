import { Expand, Truck, Vegan, WorkflowIcon } from "lucide-react";

export default function StrengthSection() {
  return (
    <section className="h-full bg-teal-800 text-white ">
      <div className="container mx-auto grid place-content-center px-4 py-30">
        <div className="flex justify-evenly items-center gap-8">
          <div className="w-5/12 space-y-6">
            <p className="text-3xl font-bold"> What Sets Us Apart</p>
            <p className="text-lg">
              We are proud to play a role in strengthening Kenya&apos;s
              petroleum industry by reducing supply chain inefficiencies. By
              leveraging our expertise, we help lower costs for consumers while
              supporting economic growth in the region.
            </p>
          </div>
          <div className="w-5/12 space-y-12">
            <p className="text-lg§">
              <Expand className="text-teal-200 size-8" />
              <span className="font-semibold">Specialized Expertise:</span>
              We focus exclusively on logistics for petroleum products, ensuring
              compliance with stringent safety standards.
            </p>
            <p className="text-lg§">
              <Truck className="text-teal-200 size-8" />
              <span className="font-semibold">State-of-the-Art Fleet:</span>
              Our modern fleet of trucks is equipped with advanced safety
              features and tracking systems for secure transportation.
            </p>
            <p className="text-lg§">
              <WorkflowIcon className="text-teal-200 size-8" />
              <span className="font-semibold">Strategic Operations:</span>
              With key hubs near key oil terminals and other strategic
              locations, we guarantee efficient delivery across Kenya and the
              East African region.
            </p>
            <p className="text-lg§">
              <Vegan className="text-teal-200 size-8" />
              <span className="font-semibold">
                Commitment to Sustainability:
              </span>
              We prioritize eco-friendly practices to minimize our environmental
              footprint while maintaining operational excellence.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
