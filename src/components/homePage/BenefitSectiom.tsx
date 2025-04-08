import { Clipboard, Hourglass, Star } from "lucide-react";

export default function BenefitSectiom() {
  return (
    <>
      <section className="h-full px-4 py-20">
        <div className="w-11/12 mx-auto flex justify-center items-center gap-8">
          <div className="w-6/12 space-y-6">
            <h3 className="text-4xl font-bold">
              Discover the Key Benefits of Choosing Levels Logitstics for Your
              Transporation Needs
            </h3>
            <p className="c">
              At Levels Logistics, we proritize your operational efficiency. Our
              tailored services ensure your equipment arrives on time minimizing
              delays
            </p>
            <div className="w-full flex justify-evenly items-center gap-4">
              <div className=" space-y-4 text-balance">
                <Hourglass className="size-10 text-lime-500" />
                <p className="text-2xl font-bold">Reduced Downtime</p>
                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Officia, similique.
                </p>
              </div>
              <div className=" space-y-4 text-balance">
                <Clipboard className="size-10 text-lime-500" />
                <p className="text-2xl font-bold">Cost Efficiency</p>
                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Officia, similique.
                </p>
              </div>
            </div>
          </div>
          <div className="w-6/12">
            <div className="size-96 mx-auto bg-green-600 rounded-lg"></div>
          </div>
        </div>
        <div className="w-6/12 mx-auto pt-20">
          <div className="bg-gray-400 rounded space-y-4 py-4">
            <div className="flex justify-center">
              <Star />
              <Star />
              <Star />
              <Star />
              <Star />
            </div>
            <div className="w-9/12 mx-auto space-y-4">
                <p className="text-balance">
                Levels Logistics exceeded our expectations with their prompt and
                reliable service. Their teams professionalism made our equipemet
                delivery seamless and stress free
                </p>
                <div className="flex justify-center  gap-8">
                    <div className="size-12 rounded-full bg-green-500"></div>
                    <div className="flex-col gap-4">
                        <p>Juma Wasengo</p>
                        <p>Manager, ABp Group</p>
                    </div>
                </div>

            </div>
          </div>
        </div>
      </section>
    </>
  );
}
