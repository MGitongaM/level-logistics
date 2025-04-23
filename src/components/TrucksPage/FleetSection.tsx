import ImageView from "../next-cloudinary/ImageView";

export default function FleetSection() {
  return (
    <section className="h-full bg-teal-950 text-slate-100">
      <div className="container mx-auto px-4 py-20">
        <div className="grid place-content-center text-center space-y-6 ">
          <h2 className="text-4xl font-semibold">Our Fleet of Trucks</h2>
          <p className="text-lg leadinng-7">
            We operate a versatile and robust fleet designed to handle a wide
            range of heavy and oversized loads
          </p>
        </div>
        <div className="flex flex-wrap-reverse md:flex-nowrap justify-evenly items-center gap-8 py-20">
          <div className="w-full md:w-5/12">
            <ImageView
              imageSrc="crane_trucks_1_cmeupe"
              height={800}
              width={800}
              alt="Level Services Logistics Truck"
              classNames="object-cover h-full w-full rounded-lg"
            />
          </div>
          <div className="w-full md:w-5/12 space-y-6">
            <p className="text-2xl font-semibold">Crane Trucks</p>
            <p className="text-lg leading-7">
              Equipped with powerful cranes, our crane trucks facilitate
              efficient loading and unloading, minimizing downtime and ensuring
              precision handling of your heavy equipment.
            </p>
          </div>
        </div>
        <div className="flex flex-wrap md:flex-nowrap justify-evenly items-center gap-8 py-20">
          <div className="w-full md:w-5/12 space-y-6">
            <p className="text-2xl font-semibold">Flatbed Trucks</p>
            <p className="text-lg leading-7">
              Ideal for transporting bulky and irregularly shaped machinery, our
              flatbeds provide maximum flexibility and secure transport for your
              valuable assets.
            </p>
          </div>
          <div className="w-full md:w-5/12">
            <ImageView
              imageSrc="flatbed_Trailer_wvrqw0"
              height={800}
              width={800}
              alt="Level Services Logistics Truck"
              classNames="object-cover h-full w-full rounded-lg"
            />
          </div>
        </div>
        <div className="flex flex-wrap-reverse md:flex-nowrap justify-evenly items-center gap-8 py-20">
          <div className="w-full md:w-5/12">
            <ImageView
              imageSrc="low_Loaders_jrcp9r"
              height={800}
              width={800}
              alt="Level Services Logistics Truck"
              classNames="object-cover h-full w-full rounded-lg"
            />
          </div>
          <div className="w-full md:w-5/12 space-y-6">
            <p className="text-2xl font-semibold">Low Loaders</p>
            <p className="text-lg leading-7">
              Designed for heavy, oversized machinery, our low loaders offer low
              ground clearance and high stability, perfect for moving
              excavators, bulldozers, and other large equipment safely.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
