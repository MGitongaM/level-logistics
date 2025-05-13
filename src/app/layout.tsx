import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Footer from "@/components/footer";
import NavigationBar from "@/components/navigationBar";
import { Toaster } from "@/components/ui/sonner";
import { getCldOgImageUrl } from "next-cloudinary";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const url = getCldOgImageUrl({
  src: "level_services_logistics_homePage_OG_image_xyvrgn",
});

export const metadata: Metadata = {
  title: "Level Services Logistics",
  description:
    "We specialize in delivering equipment and machinery tailored for the construction and energy sectors. Trust us to handle your transportation needs with efficiency and care.",
  openGraph: {
    images: {
      width: 1200,
      height: 627,
      url,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <NavigationBar />
        {children}
        <Toaster position="top-right" />
        <Footer />
      </body>
    </html>
  );
}
