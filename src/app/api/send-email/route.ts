import { Resend } from "resend";
import NotificationQouteToFounder from "@/components/emails/NotificationQouteToFounderEmail";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const {
    fullName,
    phoneNumber,
    emailAddress,
    pickLocation,
    desitationLocation,
    equipmentLoad,
    equipmentNumber,
    additionalInformation,
  } = await request.json();
  const resend = new Resend(process.env.RESEND_API_KEY);
  try {
    const { data } = await resend.emails.send({
      from: "onboarding@resend.dev",
      to: ["gitoshmbae@gmail.com","info@levelservices.biz"],
      subject: "New Qoute Inqury from Level Services Logitsics",
      react: NotificationQouteToFounder({
        name:fullName,
        phoneNumber,
        emailAddress,
        pickLocation,
        destinationLocation:desitationLocation,
        equipmentLoad,
        equipmentNumber,
        additionalInformation
      }),
    });
    return NextResponse.json({ data });
  } catch (error) {
    console.log("Error sending email notification to founder", error);
  }
}


