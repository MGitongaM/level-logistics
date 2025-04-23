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

export default function QuoteForm() {
  const [open, setOpen] = useState(false);
  const qouteFormSchema = z.object({
    fullName: z.string(),
    emailAddress: z.string(),
    phoneNumber: z.string(),
    pickLocation: z.string(),
    desitationLocation: z.string(),
    equipmentLoad: z.string(),
    equipmentNumber: z.string(),
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
    },
  });
  function handleFormSubmit(values: z.infer<typeof qouteFormSchema>) {
    console.log("Qoute Form", values);
    // toast(
    //   <div className="flex flex-col">
    //     <p>Quote Form Details</p>
    //     <p>{JSON.stringify(values)}</p>
    //   </div>
    // );
    toast.message("Form Has be submited, please check your email")
    setOpen(false);
  }
  return (
    <>
      <AlertDialog open={open} onOpenChange={setOpen}>
        <AlertDialogTrigger asChild>
          <Button
            type="button"
            className="bg-green-700 text-lg font-semibold hover:bg-teal-500 hover:scale-110 w-48 h-10"
          >
            Get Quote
          </Button>
        </AlertDialogTrigger>
        <AlertDialogContent className="min-w-6/12">
          <AlertDialogHeader>
            <AlertDialogTitle className="text-center">Please provide us with the following details</AlertDialogTitle>
            <AlertDialogDescription></AlertDialogDescription>
          </AlertDialogHeader>

          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(handleFormSubmit)}
              className="space-y-6"
            >
              <div className="flex justify-between items-center gap-6 py-4">
                <FormField
                  control={form.control}
                  name="fullName"
                  render={({ field }) => (
                    <FormItem className="w-full">
                      <FormLabel>Full Name</FormLabel>
                      <FormControl>
                        <Input placeholder="" type="text" {...field} required />
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
                        <Input placeholder="" type="tel" {...field} required />
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
                          placeholder=""
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
                        <Input placeholder="" type="text" {...field} required />
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
                        <Input placeholder="" type="text" {...field} required />
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
                        <Input placeholder="" type="text" {...field} required />
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
                          placeholder=""
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
              <div className="flex justify-between items-center gap-6 py-4"></div>
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
