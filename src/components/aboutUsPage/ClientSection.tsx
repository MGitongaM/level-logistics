import { AboutClients } from "@/StaticData/AboutUsPage";
import ImageView from "../next-cloudinary/ImageView";

export default function ClientSection() {
  return (
    <section className="h-full">
      <div className="container mx-auto grid place-content-center px-4 py-30">
        <div className="text-center max-w-3xl mx-auto space-y-6">
          <h3 className="text-3xl font-bold">
            Trusted by top companies in the petroleum sector
          </h3>
          <p className="">
            Our proven expertise and innovative solutions have earned the
            confidence of industry leaders, driving efficiency and safety across
            the petroleum supply chain.
          </p>
        </div>
        <div className="flex flex-wrap justify-evenly items-center gap-12 pt-12">
          {AboutClients.map((client) => (
            <div key={client.id} className="c">
              <ImageView
                imageSrc={client.source}
                height={800}
                width={1000}
                alt={client.name}
                classNames="object-contain w-[24rem] h-48 bg-white"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
