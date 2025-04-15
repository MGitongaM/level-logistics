import ImageView from "../next-cloudinary/ImageView";
// import VideoView from "../next-cloudinary/VideoView";

export default function HeroSection() {
  return (
    <>
      {/* <section className="h-screen bg-green-50"> */}
      {/* <section className="h-screen bg-teal-100"> */}
      <section className="h-screen bg-white">
        <div className="container mx-auto h-full grid place-content-center">
        <div className="flex  justify-around items-center gap-2 px-4">
          <div className="text-balance w-6/12  space-y-6">
            <h1 className="text-5xl leading-14 font-bold">
              Reliable Transportation Solutions For Your Business
            </h1>
            <p className=" leading-8 text-xl font-semibold">
              At Levels Logistics, we specialize in delivering equipment and
              machinery tailored for the petroleum sector. Trust us to handle
              your transportation needs with efficiency and care.
            </p>
          </div>
          <div className="w-full  ">
            {/* <div className="size-96 mx-auto bg-green-800 rounded-lg"></div> */}
            <ImageView
              // imageSrc="truck_bg-transparent_uibibo"
              imageSrc="levels_services_logistics_truck_lm0fbf"
              height={800}
              width={1200}
              alt="Levels Services Logitsics Trucking"
              classNames="object-cover w-full h-full"
            />
            {/* <VideoView
              videoSrc="levels_logitsics_video_vs8dfw"
              height={1080}
              width={1920}
              classNames="w-full h-full"
            /> */}
          </div>
        </div>

        </div>
      </section>
    </>
  );
}
