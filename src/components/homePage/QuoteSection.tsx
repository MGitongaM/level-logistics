import { Button } from "../ui/button";


export default function QuoteSection() {
  return (
    <>
        <section className="h-full bg-green-100 py-40">
            <div className="w-10/12 mx-auto bg-green-500 rounded-xl">
                <div className="flex justify-between items-center px-8 py-12">
                    <div className="c">
                        <p className="text-4xl font-bold">Get Your Free Quote Today</p>
                        <p>Contact us for reliable transportation solutions tailored for you</p>
                    </div>
                    <div className="">
                        <Button className="w-48">Qoute</Button>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}
