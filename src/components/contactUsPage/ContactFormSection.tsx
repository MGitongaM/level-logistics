"use client";

import { z } from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";

import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { Button } from "../ui/button";
import { toast } from "sonner";
import { Check } from "lucide-react";
import { useForm } from "react-hook-form";

const contactFormSchema = z.object({
  fullName: z.string(),
  email: z.string(),
  phone: z.string(),
  subject: z.string(),
  message: z.string(),
});

export default function ContactForm() {
  const form = useForm<z.infer<typeof contactFormSchema>>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      fullName: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    },
  });
  function handleContactFormSubmit(values: z.infer<typeof contactFormSchema>) {
    console.log("Contact Form", values)
    form.reset()
    toast(
      <div className="flex justify-evenly items-center gap-2">
        <Check className="text-green-400 size-4 font-bold bg-green-100 p-1 rounded-full" />
        <p>contact form has been submited</p>
      </div>
    );
  }
  return (
    <section className="bg-teal-900 text-slate-100">
      <Form {...form}>
        <div className="flex flex-wrap md:flex-nowrap justify-evenly items-start gap-8 px-8 py-20 ">
          <div className="w-full md:w-4/12 space-y-4">
            <p className="text-4xl font-bold">Get in Touch</p>
            <p className="text-lg">We&apos;d love to hear from vou!</p>
          </div>
          <div className="w-full md:w-6/12">
            <form
              onSubmit={form.handleSubmit(handleContactFormSubmit)}
              className=" space-y-8"
            >
              <FormField
                control={form.control}
                name="fullName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Full Name</FormLabel>
                    <FormControl>
                      <Input placeholder="Imani Brown" {...field} required/>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input placeholder="youreamil@mail.com" {...field} required/>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="phone"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Phone Number</FormLabel>
                    <FormControl>
                      <Input placeholder="0700 999 000 444" {...field} required/>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="subject"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Subject</FormLabel>
                    <FormControl>
                      <Input placeholder="Message Topic" {...field} required/>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="message"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Message</FormLabel>
                    <FormControl>
                      {/* <Input placeholder="Imani Brown" {...field} /> */}
                      <Textarea
                        placeholder="your message..."
                        rows={6}
                        {...field}
                        required
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button
                type="submit"
                className="w-40 bg-teal-600 hover:bg-teal-700 hover:scale-105"
              >
                Send
              </Button>
            </form>
          </div>
        </div>
      </Form>
    </section>
  );
}
