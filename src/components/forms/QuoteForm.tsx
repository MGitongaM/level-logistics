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
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import {
  AlertDialog,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "../ui/alert-dialog";
import { useState } from "react";
import { toast } from "sonner";
// import { Check } from "lucide-react";
import { Textarea } from "../ui/textarea";
import MapView from "../maps/MapView";
// import NotificationQouteToFounder from "../emails/NotificationQouteToFounder";

export default function QuoteForm() {

  const [open, setOpen] = useState(false);
  const [routeData, setRouteData] = useState(null)

  const qouteFormSchema = z.object({
    fullName: z.string(),
    emailAddress: z.string(),
    phoneNumber: z.string(),
    pickLocation: z.string(),
    desitationLocation: z.string(),
    equipmentLoad: z.string(),
    equipmentNumber: z.string(),
    additionalInformation: z.string(),
  });
  const form = useForm<z.infer<typeof qouteFormSchema>>({
    resolver: zodResolver(qouteFormSchema),
    defaultValues: {
      fullName: "",
      emailAddress: "",
      phoneNumber: "",
      pickLocation: "",
      desitationLocation: "",
      equipmentLoad: "",
      equipmentNumber: "",
      additionalInformation: "",
    },
  });
  async function handleFormSubmit(values: z.infer<typeof qouteFormSchema>) {
    try {
      const response= await fetch(`api/calculate-route`,{
        method:'POST',
        headers:{
           'Content-Type': 'application/json',
        },
        body:JSON.stringify({origin:values.pickLocation, destination:values.desitationLocation})
      }) 
      const data=await response.json()
      setRouteData(data.routeData)
      console.log("FROM QOUTE-FORM",data.routeData)
      console.log("FROM QUOTE FORM STATE",routeData)
       toast.promise(
        fetch("/api/send-email", {
          method: "POST",
          body: JSON.stringify(values),
        }),
        {
          loading: "Submitting...",
          success:
            "Details submitted, please check your email later about your qoute",
          error: "Error, please try again later",
        }
      );
    } catch (error) {
      console.log(
        "Error sending email notification to founder from client side",
        error
      );
    }
    form.reset();
    // setOpen(false);
  }

  return (
    <>
      <AlertDialog open={open} onOpenChange={setOpen}>
        <AlertDialogTrigger asChild>
          <Button
            type="button"
            className="bg-green-700 text-lg font-semibold hover:bg-teal-500 hover:scale-110 w-36 md:w-48 h-10"
          >
            Get Quote
          </Button>
        </AlertDialogTrigger>
        <AlertDialogContent className="min-w-10/12 lg:min-w-6/12 h-[80dvh] overflow-y-auto">
          <AlertDialogHeader>
            <AlertDialogTitle className="text-center">
              Please provide us with the following details
            </AlertDialogTitle>
            <AlertDialogDescription></AlertDialogDescription>
          </AlertDialogHeader>

          <MapView/>
          
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(handleFormSubmit)}
              className="space-y-6"
            >
              <div className="flex flex-wrap md:flex-nowrap justify-between items-center gap-6 py-4">
                <FormField
                  control={form.control}
                  name="fullName"
                  render={({ field }) => (
                    <FormItem className="w-full">
                      <FormLabel>Full Name</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Musa Jabali"
                          type="text"
                          {...field}
                          required
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="phoneNumber"
                  render={({ field }) => (
                    <FormItem className="w-full">
                      <FormLabel>Phone Number </FormLabel>
                      <FormControl>
                        <Input
                          placeholder="0700 222 555"
                          type="tel"
                          {...field}
                          required
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="emailAddress"
                  render={({ field }) => (
                    <FormItem className="w-full">
                      <FormLabel>Email Address</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="youreamiladdress@mail.com"
                          type="email"
                          {...field}
                          required
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <div className="flex justify-between items-center gap-6 py-4">
                <FormField
                  control={form.control}
                  name="pickLocation"
                  render={({ field }) => (
                    <FormItem className="w-full">
                      <FormLabel>Pick Location</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="loaction A"
                          type="text"
                          {...field}
                          required
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="desitationLocation"
                  render={({ field }) => (
                    <FormItem className="w-full">
                      <FormLabel>Desitation Location</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="location B"
                          type="text"
                          {...field}
                          required
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <div className="flex justify-between items-center gap-6 py-4">
                <FormField
                  control={form.control}
                  name="equipmentLoad"
                  render={({ field }) => (
                    <FormItem className="w-full">
                      <FormLabel>The Equipment Load</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Type of equipment to be transported"
                          type="text"
                          {...field}
                          required
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="equipmentNumber"
                  render={({ field }) => (
                    <FormItem className="w-full">
                      <FormLabel>Number of Equipment </FormLabel>
                      <FormControl>
                        <Input
                          placeholder="1"
                          type="number"
                          {...field}
                          required
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <div className="flex justify-center items-center gap-6 py-4">
                <FormField
                  control={form.control}
                  name="additionalInformation"
                  render={({ field }) => (
                    <FormItem className="w-full md:w-10/12 mx-auto">
                      <FormLabel className="">Additional Information</FormLabel>
                      <FormControl>
                        <Textarea
                          rows={4}
                          placeholder="additional information about the load"
                          {...field}
                        />
                      </FormControl>
                    </FormItem>
                  )}
                />
              </div>
              <div className="grid place-content-center">
                <Button
                  type="submit"
                  className="h-12 w-48 mx-auto bg-teal-600 hover:bg-teal-500 hover:scale-95"
                >
                  Submit
                </Button>
              </div>
            </form>
          </Form>
          <AlertDialogFooter className="w-full ">
            <AlertDialogCancel className=" w-48 mx-auto">
              Cancel
            </AlertDialogCancel>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  );
}
