import ImageView from "../next-cloudinary/ImageView";

export default function JourneySection() {
  return (
    <section className="h-full bg-teal-800 text-white">
      <div className="container mx-auto grid place-content-center px-4 py-30">
        <div className="flex justify-evenly items-center mx-auto">
          <div className="w-4/12 space-y-6">
            <h2 className="text-3xl font-bold">
              Our Journey: Delivering Excellence in Trucking and Transportation
              Services
            </h2>
            <p className="text-lg  leading-8">
              Founded with a commitment to reliability, Level Services Logistics has
              grown to become a trusted partner in the construction sector. our
              mission is to provide sate, efficient, and timely transportation
              solutions that empower our clients to succeed.
            </p>
          </div>
          <div className="w-6/12 mx-auto">
            {/* <div className="w-full h-96 bg-teal-700 rounded-lg"></div> */}
            <ImageView
              imageSrc="man_truck_y6gtsx"
              height={800}
              width={1000}
              alt="level services logistics"
              classNames="object-contain w-full h-full rounded-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
