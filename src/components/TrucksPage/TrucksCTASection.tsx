import Link from "next/link";
import { Button } from "../ui/button";


export default function TrucksCTASection() {
  return (
    <section className="h-full">
        <div className="max-w-6xl mx-auto px-4 py-20">
            <div className="flex border border-teal-600 rounded-lg justify-evenly items-center gap-8 py-10">
                <div className="space-y-6 w-5/12">
                    <p className="text-4xl font-semibold">Ready to move your heavy machinery with confidence?</p>
                    <p className="text-lg">Contact us today for a customized logistics solution that keeps your project moving forward.</p>
                </div>
                <div className="w-3/12 grid place-content-center">
                    <Button asChild className="bg-teal-600 hover:bg-teal-700 hover:scale-110"> 
                        <Link href="/contact-us">
                        Contact Us
                        </Link>
                    </Button>
                </div>
            </div>
        </div>
    </section>
  )
}
