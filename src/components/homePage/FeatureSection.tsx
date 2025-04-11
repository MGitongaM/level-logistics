import { CalendarRange, Forklift, Users } from "lucide-react";

export default function FeatureSection() {
  return (
    <>
      {/* <section className="h-screen px-4 bg-green-950"> */}
      <section className="h-screen px-4 bg-teal-950">
        <div className="conatiner mx-auto h-full grid place-content-center px-20">
          <div className=" w-full text-slate-100 flex justify-between items-center gap-4 ">
            <div className="w-5/12 ">
              <h2 className="text-4xl leading-12 font-bold">
                Your Trusted Partner in <br />
                Equipment Transportation
              </h2>
            </div>
            <div className="w-5/12">
              <p className="text-lg leading-8">
                At Level Logistics, we specialize in delivering equipment and
                machinery tailored for the petroleum sector. Our commuitment to
                excellence ensures that your cargo arrives safely and on time.
                Experience peace of mind with our dedicated services designed
                for your unique needs
              </p>
            </div>
          </div>
          <div className="w-full text-slate-100 flex justify-between items-center gap-8 py-40">
            <div className="w-3/12  space-y-4 text-balance">
              <Forklift className="size-10 text-lime-500" />
              <h3 className="text-2xl font-bold">
                Specialzed Equipment Delivery for Your Needs
              </h3>
              <p>
              We handle all types of equipment with precision.
              </p>
            </div>
            <div className="w-3/12 space-y-4 text-balance">
              <CalendarRange className="size-10 text-lime-500" />
              <h3 className="text-2xl font-bold">
                Timely and Reliable Serice You Can Count On
              </h3>
              <p>
              Our punctuality sets us apart in the industry.
              </p>
            </div>
            <div className="w-3/12 space-y-4 text-balance">
              <Users className="size-10 text-lime-500" />
              <h3 className="text-2xl font-bold">
                Expert Team in Petroleum Sector at Your Service
              </h3>
              <p>
              Our knowledgeable team understands the complexities of the petroleum industry
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
