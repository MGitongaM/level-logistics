import { Mail, MapPin, Phone } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="h-full bg-teal-100">
      <div className="container mx-auto grid place-content-center px-4 py-10">
        <div className="w-full text-slate-900 flex justify-between items-center gap-8 py-40">
          <div className="w-3/12  space-y-4 text-balance">
            <Mail className="size-10 text-lime-500" />
            <h3 className="text-2xl font-bold">Email </h3>
            <p>Reach out to us for inquiries or support anvtime</p>
            <p>info@levelsservices.co.ke</p>
          </div>
          <div className="w-3/12 space-y-4 text-balance">
            <Phone className="size-10 text-lime-500" />
            <h3 className="text-2xl font-bold">Phone</h3>
            <p>Call us for immediate assistance or to discuss your needs </p>
            <p>020 090 658 789</p>
          </div>
          <div className="w-3/12 space-y-4 text-balance">
            <MapPin className="size-10 text-lime-500" />
            <h3 className="text-2xl font-bold">Office</h3>
            <p>visit us for consultations and personalized service</p>
            <p> Trans Miles, riverside road, 543 </p>
          </div>
        </div>
      </div>
    </section>
  );
}
