export default function LocationMapSection() {
  return (
    <section className="h-full bg-teal-5000">
      <div className="container mx-auto space-y-6 px-4 py-20">
        <p className="text-4xl font-bold text-center">Come Pay Us a Visit</p>
        <div className=" rounded-lg max-w-6xl mx-auto h-96 bg-teal-500">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d63821.36217200591!2d36.81425975!3d-1.2720011999999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2ske!4v1744379618291!5m2!1sen!2ske"
            className="w-full h-full rounded-lg"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </section>
  );
}
