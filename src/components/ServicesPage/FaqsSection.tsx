import Link from "next/link";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion";
import { Button } from "../ui/button";

export default function FaqsSection() {
  return (
    
      <section className="h-full bg-teal-500">
        <div className="container mx-auto grid place-content-center px-4 py-20">
          <div className="max-w-xl mx-auto text-center space-y-6">
            <h3 className="text-4xl font-bold">FAQS</h3>
            <p className="text-lg">
              Find answers to your most common questions about our trucking and
              transportion services
            </p>
          </div>
          <div className="min-w-3xl mx-auto">
            <Accordion type="single" collapsible className="max-w-3xl mx">
              <AccordionItem value="1">
                <AccordionTrigger className="text-lg font-bold">
                  What services do you offer?.
                </AccordionTrigger>
                <AccordionContent>
                  We specialize in trucking and transportation services,
                  particularly for equipment and machinery in the petroleum
                  sector. Our services ensure safe and timely delivery of cargo.
                  We cater to both local and long distance transportation needs.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="2">
                <AccordionTrigger className="text-lg font-bold">
                  How do I get a quote?
                </AccordionTrigger>
                <AccordionContent>
                  To receive a quote, simply contact us through our website or
                  call our customer service. Provide details about your
                  shipment, including size and destination. Our team will
                  respond promptly with a competive qoute.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="3">
                <AccordionTrigger className="text-lg font-bold">
                  What is your coverage area?
                </AccordionTrigger>
                <AccordionContent>
                  We provide services across various regions, focusing primarily
                  on areas with significant petroleum operations. Our extenstive
                  network allows us to reach both urban and remote locations.
                  Contact us to confirm if we service your area.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="4">
                <AccordionTrigger className="text-lg font-bold">
                  What are your rates?
                </AccordionTrigger>
                <AccordionContent>
                  Our rates are based on factors such as distance, type of cargo
                  and urgency. We strive to offer competitive pricing while
                  maintaining high quality service. For specific rates, please
                  reach out for a personalized quote.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="5">
                <AccordionTrigger className="text-lg font-bold">
                  How canI track my shipments?
                </AccordionTrigger>
                <AccordionContent>
                  {" "}
                  Your track your shipment through our online tracking system,
                  which provides realtime updates. Simply enter your trucking
                  numberon our website to see the status. Our customer service
                  team is also available to assist you with inquires.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
            <div className="text-center space-y-4 pt-20">
                <p className="text-3xl font-bold">Still have questions?</p>
                <p className="text-lg">We are here to help you! </p>
                <Button asChild variant="outline" className="bg-transparent" >
                    <Link href='/contact-us'>Contact Us</Link>
                </Button>
            </div>
          </div>
        </div>
      </section>
    
  );
}
