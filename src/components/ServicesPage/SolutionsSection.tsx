import ImageView from "../next-cloudinary/ImageView";

export default function SolutionsSection() {
  return (
    <section className="h-full ">
      <div className="container mx-auto  space-y-48 lg:space-y-64  px-4 py-40">
        <div className="flex flex-wrap md:flex-nowrap justify-between items-center gap-6 px-4 lg:px-10">
          <div className="w-full md:w-5/12 space-y-6">
            <p className="text-3xl font-bold">
              Reliable Equipment and Machinery Delivery Services
            </p>
            <p className="text-lg">
              At Level Services Logistics, we specialize in the safe and timely delivery
              of equipment and machinery tailored for the construction and energy sectors. Our
              experienced team ensures that your critical assets reach their
              destination without delay
            </p>
          </div>
          <div className="bg-teal-7000 w-full md:w-6/12 h-96 rounded-lg">
          <ImageView 
            imageSrc="special_equipment_tmnlno"
            height={800}
            width={1000}
            alt="levels services logitsics "
            classNames="object-cover w-full h-full rounded-lg"
          />
          </div>
        </div>
        <div className="flex flex-wrap md:flex-nowrap justify-between items-center gap-6 px-10">
          <div className="w-full md:w-5/12 space-y-6">
            <p className="text-3xl font-bold">
              Expert Trucking Services for Your Needs
            </p>
            <p className="text-lg">
              Our trucking services are designed to ensure the safe and timely
              delivery of equipment and machinery. With a focus on the construction
              sector, we provide tallored solutions to meet your logistical
              challenges
            </p>
          </div>
          <div className="bg-teal-7000 w-full md:w-6/12 h-96 rounded-lg">
          <ImageView 
            imageSrc="nissan_truck_i6opn7"
            height={800}
            width={1000}
            alt="levels services logitsics "
            classNames="object-cover w-full h-full rounded-lg"
          />
          </div>
        </div>
        <div className="flex flex-wrap md:flex-nowrap justify-between items-center gap-6 px-10">
          <div className="w-full md:w-5/12 space-y-6">
            <p className="text-3xl font-bold">
              Reliable Transportation Solutions for the Construction Industry{" "}
            </p>
            <p className="text-lg">
              At Level Services Logistics, we specialize in the safe and efficient
              transportation of equipment and machinery tailored for the
              construction sector. Our dedicated team ensures timely deliveries
              allowing vour operations to run smoothly and without interruption
            </p>
          </div>
          <div className="bg-teal-7000 w-full md:w-6/12 h-96 rounded-lg">
          <ImageView 
            imageSrc="safe_trucking_stroqq"
            height={800}
            width={1000}
            alt="levels services logitsics "
            classNames="object-cover w-full h-full rounded-lg"
          />
          </div>
        </div>
      </div>
    </section>
  );
}
