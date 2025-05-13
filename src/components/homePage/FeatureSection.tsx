import { CalendarRange, Forklift, Users } from "lucide-react";

export default function FeatureSection() {
  return (
    <>
      {/* <section className="h-screen px-4 bg-green-950"> */}
      <section className="min-h-[80dvh] px-4 bg-teal-950">
        <div className="conatiner mx-auto min-h-[80dvh] grid place-content-center px-4 lg:px-20 py-20">
          <div className=" w-full text-slate-100 flex flex-wrap md:flex-nowrap justify-between items-center gap-4 ">
            <div className="w-full md:w-5/12 ">
              <h2 className="text-4xl leading-12 font-bold">
                Your Trusted Partner in <br className="hidden md:block" />
                Equipment Transportation
              </h2>
            </div>
            <div className="w-full md:w-5/12">
              <p className="text-lg leading-8">
                {/* At Level Services Logistics, we specialize in delivering equipment and
                machinery tailored for the contrustion sector. Our commitment to
                excellence ensures that your cargo arrives safely and on time.
                Experience peace of mind with our dedicated services designed
                for your unique needs */}
                From heavy machinery to specialized tools, Level Services
                Logistics delivers tailored transport solutions built for the
                demands of the construction industry. Our dedicated team and
                reliable fleet ensure your equipment arrives safely,
                efficiently, and without delay
              </p>
            </div>
          </div>
          <div className="w-full text-slate-100 flex flex-wrap md:flex-nowrap justify-between items-start gap-x-8 gap-y-12 pt-40">
            <div className="w-full lg:w-4/12  space-y-4 text-balance">
              <Forklift className="size-10 text-lime-500" />
              <h3 className="text-2xl font-bold">
                Specialized Equipment Handling
              </h3>
              <p>
                We transport all types of construction equipment with precision
                and care
              </p>
            </div>
            <div className="w-full lg:w-4/12 space-y-4 text-balance">
              <CalendarRange className="size-10 text-lime-500" />
              <h3 className="text-2xl font-bold">
                Timely & Dependable Deliveries
              </h3>
              <p>
                {/* Our punctuality sets us apart in the industry. */}
                We&apos;re known for our punctuality keeping your project
                timelines intact
              </p>
            </div>
            <div className="w-full lg:w-4/12 space-y-4 text-balance">
              <Users className="size-10 text-lime-500" />
              <h3 className="text-2xl font-bold">
                Industry Expertise You Can Rely On
              </h3>
              <p>
                {/* Our knowledgeable team understands the complexities of the
                logistics industry */}
                Our team understands the unique logistics challenges in
                construction and is here to simplify them for you
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
