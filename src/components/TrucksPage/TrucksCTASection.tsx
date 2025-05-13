import Link from "next/link";
import { Button } from "../ui/button";


export default function TrucksCTASection() {
  return (
    <section className="h-full">
        <div className="max-w-6xl mx-auto px-4 py-20">
            <div className="flex flex-wrap md:flex-nowrap bg-teal-900 rounded-lg justify-evenly items-center gap-8 px-4 py-10">
                <div className="space-y-6 w-full md:w-5/12 text-slate-100 text-balance">
                    <p className="text-4xl font-semibold">Ready to move your heavy machinery with confidence?</p>
                    <p className="text-lg">Contact us today for a customized logistics solution that keeps your project moving forward.</p>
                </div>
                <div className="w-full md:w-3/12 grid place-content-center">
                    <Button asChild className="bg-teal-500 hover:bg-teal-700 hover:scale-110 w-48 h-12"> 
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
