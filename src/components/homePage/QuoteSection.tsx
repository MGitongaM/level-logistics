import { Button } from "../ui/button";


export default function QuoteSection() {
  return (
    <>
        <section className="h-full bg-green-9500 py-40" id="quote">
            {/* <div className="w-10/12 mx-auto bg-green-950 text-slate-100 rounded-xl"> */}
            <div className="w-10/12 mx-auto bg-teal-800 text-slate-100 rounded-xl">
                <div className="flex justify-between items-center px-8 py-12">
                    <div className="c">
                        <p className="text-4xl font-bold">Get Your Free Quote Today</p>
                        <p className="text-lg pt-4">Contact us for reliable transportation solutions tailored for you</p>
                    </div>
                    <div className="">
                        <Button type="button" className="w-48 text-lg bg-green-600 hover:bg-white hover:text-black hover:scale-105">Qoute</Button>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}
