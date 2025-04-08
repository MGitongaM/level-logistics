import { CalendarRange, Forklift, Users } from "lucide-react";

export default function FeatureSection() {
  return (
    <>
      <section className="h-screen px-4">
        <div className=" w-full flex justify-center items-center gap-4">
          <div className="w-5/12">
            <h2 className="text-4xl font-bold">
              Your Trusted Partner in <br />
              Equipment Transportation
            </h2>
          </div>
          <div className="w-4/12">
            <p className="c">
              At Level Logistics, we specialize in delivering equipment and
              machinery tailored for the petroleum sector. Our commuitment to
              excellence ensures that your cargo arrives safely and on time.
              Experience peace of mind with our dedicated services designed for
              your unique needs
            </p>
          </div>
        </div>
        <div className="w-full flex justify-evenly items-center gap-8 py-40">
            <div className="w-3/12 space-y-4 text-balance">
                <Forklift className="size-10 text-lime-500"/>
                <h3 className="text-2xl font-bold">Specialzed Equipment Delivery for  Your Needs</h3>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officia, similique.</p>
            </div>
            <div className="w-3/12 space-y-4 text-balance">
                <CalendarRange className="size-10 text-lime-500"/>
                <h3 className="text-2xl font-bold">Timely  and Reliable Serice You Can Count On</h3>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officia, similique.</p>
            </div>
            <div className="w-3/12 space-y-4 text-balance">
                <Users className="size-10 text-lime-500"/>
                <h3 className="text-2xl font-bold">Expert Team in Petroleum Sector at Your Service</h3>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officia, similique.</p>
            </div>
        </div>
      </section>
    </>
  );
}
