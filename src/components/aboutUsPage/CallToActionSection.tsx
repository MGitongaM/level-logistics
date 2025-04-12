import Link from "next/link";
import { Button } from "../ui/button";

export default function CallToActionSection() {
  return (
    <section className="h-full">
      <div className="container grid place-content-center px-4 py-30">
        <div className="max-w-lg space-y-6 text-center">
          <p className="text-3xl font-bold">Get in Touch </p>
          <p className="text-lg">Ready to partner with us? Contact us today to learn more about how Level Services Logistics can meet your logistics needs.</p>
          <Button asChild className="bg-teal-600 hover:bg-teal-700 hover:scale-105 ">
            <Link href='/contact-us'>
                Contact Us Today
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
