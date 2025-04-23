export default function HeroSection() {
  return (
    <section className="min-h-[80vh] w-full bg-[url('https://res.cloudinary.com/dh8qlzbzk/image/upload/v1745228257/gears_ctk5i2.jpg')] bg-cover bg-center ">
        <div className="min-h-[80vh] bg-black/75 backdrop-blur-2xl z-20">
            <div className="container mx-auto min-h-[80vh] grid place-content-center text-slate-100 px-4 py-20 z-30">
                <div className="flex flex-wrap md:flex-nowrap justify-evenly items-center gap-8">
                <div className="w-full md:w-4/12">
                    <h1 className="text-4xl font-bold leading-12">
                    Our Fleet & Machinery Transport Capabilities
                    </h1>
                </div>
                <div className="w-full md:w-5/12">
                    <p className="text-lg font-semibold leading-8">
                    At Level Services Logistics, we pride ourselves on delivering
                    seamless logistics solutions tailored to the heavy equipment and
                    construction industries. Our specialized fleet and expert handling
                    ensure your valuable machinery and cargo reach their destination
                    safely, on time, and in perfect condition.
                    </p>
                </div>
                </div>
            </div>
        </div>
    </section>
  );
}
