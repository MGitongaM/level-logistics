import { Clipboard, Hourglass, Star } from "lucide-react";
import ImageView from "../next-cloudinary/ImageView";

export default function BenefitSectiom() {
  return (
    <>
      {/* <section className="min-h-screen px-4 py-20 bg-green-50"> */}
      <section className="min-h-screen px-4 py-20 bg-white">
        <div className="container mx-auto h-full grid place-content-center ">
          <div className="w-11/12 mx-auto flex flex-wrap md:flex-nowrap justify-center items-center gap-8">
            <div className="w-full md:w-6/12 space-y-6">
              <h3 className="text-4xl font-bold">
                {/* Discover the Key Benefits of Choosing Level Services Logitstics for Your
                Transporation Needs */}
                Why Choose Level Services Logistics for Your Transportation
                Needs?
              </h3>
              <p className="text-lg">
                {/* At Level Services Logistics, we proritize your operational efficiency.
                Our tailored services ensure your equipment arrives on time
                minimizing delays */}
                We streamline your operations by minimizing delays and cutting
                logistics costs keeping your construction projects moving
                forward smoothly
              </p>
              <div className="w-full flex justify-evenly items-center gap-4 pt-10">
                <div className="w-full md:w-5/12 space-y-4 text-balance">
                  <Hourglass className="size-10 text-lime-500" />
                  <p className="text-2xl font-bold">Reduced Downtime</p>
                  <p>
                    Experience swift deliveries that keep your projects on
                    schedule and your operations running smoothly
                  </p>
                </div>
                <div className="w-full md:w-5/12 space-y-4 text-balance">
                  <Clipboard className="size-10 text-lime-500" />
                  <p className="text-2xl font-bold">Cost Efficiency</p>
                  <p>
                    {/* Optimize your logistics budget with our competitive pricing
                    and reliable service offerings. */}
                    Optimize your logistics budget with competitive rates and
                    dependable service
                  </p>
                </div>
              </div>
            </div>
            <div className="w-full md:w-6/12">
              {/* <div className="size-96 mx-auto bg-green-600 rounded-lg"></div> */}
              <ImageView
                imageSrc="levels_logistics_benefits_xknh43"
                height={800}
                width={800}
                alt="levels services logistics benefits"
                classNames="object-cover rounded-lg"
              />
            </div>
          </div>
          <div className="w-full md:w-6/12 mx-auto pt-20" id="testimonials">
            <div className="border border-teal-900 text-black rounded-lg space-y-6 py-4">
              <div className="flex justify-center">
                <Star />
                <Star />
                <Star />
                <Star />
                <Star />
              </div>
              <div className="max-w-xl mx-auto space-y-4">
                <p className="text-balance text-center">
                  {/* Level Services Logistics exceeded our expectations with their
                  prompt and reliable service. Their teams professionalism made
                  our equipemet delivery seamless and stress free */}
                 &ldquo; Level Services Logistics exceeded our expectations with their
                  prompt and reliable service. Their team&apos;s professionalism made
                  our equipment deliveries seamless and stress free. &ldquo;
                </p>
                <div className="flex justify-center  gap-8">
                  {/* <div className="size-12 rounded-full bg-green-500"></div> */}
                  <ImageView
                    imageSrc="juma_erarrw"
                    height={400}
                    width={400}
                    alt="level services logistics testimonial"
                    classNames="object-cover bg-center size-12 rounded-full"
                  />
                  <div className="flex-col gap-4">
                    <p className="font-">Juma Wasengo</p>
                    <p className="font-semibold">Manager, ABP Group</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
