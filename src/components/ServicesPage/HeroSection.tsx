export default function HeroSection() {
  return (
    // <section className="h-screen bg-teal-100 ">
    // <section className="h-screen bg-white ">
    <section className="h-[80vh] w-full bg-[url('https://res.cloudinary.com/dh8qlzbzk/image/upload/v1745308325/services_hero_image_boi5qn.jpg')] bg-cover bg-center ">
      <div className="h-full bg-black/80 backdrop-blur-3xl z-20">
        <div className="container mx-auto h-full grid place-content-center text-white px-4 z-30">
          <div className="max-w-3xl text-center space-y-4">
            <h1 className="text-4xl font-bold">Expert Logistics Solutions</h1>
            <p className="text-2xl font-semibold">
              Discover our specialized trucking services tailored for the
              construction sector&apos;s unique transportation needs
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
