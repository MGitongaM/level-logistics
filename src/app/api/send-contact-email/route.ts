import ContactPageNotificationEmailEmail from "@/components/emails/ContactPageNotificationEmail";
import { NextResponse } from "next/server";
import { Resend } from "resend";

export async function POST(request: Request) {
  const { fullName, email, phone, subject, message } = await request.json();

  const resend = new Resend(process.env.RESEND_API_KEY);
  try {
    const { data } = await resend.emails.send({
      from: "onboarding@resend.dev",
      to: "gitoshmbae@gmail.com",
      subject: "New Contact Us Message from Level Service Logistics",
      react: ContactPageNotificationEmailEmail({
        name: fullName,
        emailAddress: email,
        phoneNumber: phone,
        subject,
        message,
      }),
    });
    return NextResponse.json({ data });
  } catch (error) {
    console.log(
      "Error sending contact us email notification to founder",
      error
    );
  }
}
