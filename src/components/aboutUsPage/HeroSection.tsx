export default function HeroSection() {
  return (
    // <section className="h-screen bg-teal-100">
    // <section className="h-screen bg-white">
    <section className="h-[80vh] w-full bg-[url('https://res.cloudinary.com/dh8qlzbzk/image/upload/v1744889718/about-page-transport-logistics-products_ythz88.jpg')] bg-cover bg-center">
      <div className="h-full bg-black/75 backdrop-blur-3xl z-20">
        <div className="container mx-auto grid place-content-center text-white h-full px-4 z-30">
          <div className="flex justify-evenly items-center gap-8">
            <div className="w-6/12">
              <h1 className="text-4xl font-bold">Delivering Your Future</h1>
            </div>
            <div className="w-5/12">
              <p className="text-lg leading-8">
                At Levels Services Logistics, we are dedicated to providing
                reliable trucking and transportation services tailored for the
                petroluem industry. Our commitment to excellence ensures that
                your equipment and machinery are delivered safely and on time.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
