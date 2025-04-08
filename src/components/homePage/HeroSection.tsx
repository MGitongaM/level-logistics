export default function HeroSection() {
  return (
    <>
      <section className="h-screen">
        <div className="flex h-full  justify-around items-center gap-2 px-4">
          <div className="text-balance w-full  space-y-6">
            <h1 className="text-4xl font-bold">
              Relliable Transportation Solutions For Your Business
            </h1>
            <p className="font-semibold">
              At Levels Logistics, we specialize in delivering equipment and
              machinery tailored for the petroleum sector. Trust us to handle
              your transportation needs with efficiency and care.
            </p>
          </div>
          <div className="w-full  ">
            <div className="size-96 mx-auto bg-green-800 rounded-lg"></div>
          </div>
        </div>
      </section>
    </>
  );
}
