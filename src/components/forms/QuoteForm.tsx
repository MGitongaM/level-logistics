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

export default function QuoteForm() {
  const qouteFormSchema = z.object({
    pickLocation: z.string(),
    desitationLocation: z.string(),
    equipmentLoad: z.string(),
    equipmentNumber: z.number(),
    distance: z.number(),
  });
  const form = useForm<z.infer<typeof qouteFormSchema>>({
    resolver: zodResolver(qouteFormSchema),
    defaultValues: {
      pickLocation: "",
      desitationLocation: "",
      equipmentLoad: "",
      equipmentNumber: 0,
      distance: 1,
    },
  });
  function handleFormSubmit(values: z.infer<typeof qouteFormSchema>) {
    console.log("Qoute Form", values);
  }
  return (
    <>
      <AlertDialog>
        <AlertDialogTrigger asChild>
            <Button className="bg-green-700 hover:bg-teal-500 hover:scale-110 w-48 h-10">
            Get Qoute
            </Button>
        </AlertDialogTrigger>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle></AlertDialogTitle>
            <AlertDialogDescription></AlertDialogDescription>
          </AlertDialogHeader>

          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(handleFormSubmit)}
              className="space-y-4"
            >
              <div className="flex justify-between items-center gap-6">
                <FormField
                  control={form.control}
                  name="pickLocation"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Pick Location</FormLabel>
                      <FormControl>
                        <Input placeholder="" type="text" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="desitationLocation"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Desitation Location</FormLabel>
                      <FormControl>
                        <Input placeholder="" type="text" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <div className="flex justify-between items-center gap-6">
                <FormField
                  control={form.control}
                  name="equipmentLoad"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>The Equipment Load</FormLabel>
                      <FormControl>
                        <Input placeholder="" type="text" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="equipmentNumber"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Number of Equipment </FormLabel>
                      <FormControl>
                        <Input placeholder="" type="number" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <div className="flex justify-between items-center gap-6">
                <FormField
                  control={form.control}
                  name="distance"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Trip Distance </FormLabel>
                      <FormControl>
                        <Input placeholder="" type="number" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <div className="grid place-content-center">
                <Button
                    type="submit"
                    className="h-12 w-48 mx-auto bg-teal-600 hover:bg-teal-500 hover:scale-95"
                >
                    {" "}
                    Submit
                </Button>

              </div>
            </form>
          </Form>
        <AlertDialogFooter className="w-full ">
            <AlertDialogCancel className=" w-48 mx-auto">Cancel</AlertDialogCancel>
        </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  );
}
