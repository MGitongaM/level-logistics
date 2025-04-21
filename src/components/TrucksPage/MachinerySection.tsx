import { Machineries } from "@/StaticData/TruckPage";
import ImageView from "../next-cloudinary/ImageView";

export default function MachinerySection() {
  return (
    <section className="h-full">
      <div className="container mx-auto px-4 py-20">
        <div className="grid place-content-center text-center space-y-6">
          <p className="text-4xl font-semibold">Machinery We Transport </p>
          <p className="text-lg leading-7">
            Our expertise extends to moving a broad spectrum of construction and
            agricultural machinery, including but not limited to:
          </p>
        </div>
        <div className="flex flex-wrap justify-evenly items-center gap-4  py-16">
          {Machineries.map((machine) => (
            <div
              key={machine.id}
              className="border border-teal-600 hover:bg-teal-700 hover:size:20 rounded-lg w-96 h-32 grid place-content-center"
            >
              <ImageView
                imageSrc={machine.machineIconSource}
                height={800}
                width={800}
                alt="Level Services Logistics"
                classNames="object-contain size-16 text-teal-600"
              />
              <p className="text-lg font-semibold">{machine.title}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
