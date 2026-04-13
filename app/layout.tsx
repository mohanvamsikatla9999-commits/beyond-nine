import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CalendlyProvider from "@/components/CalendlyProvider";

export const metadata: Metadata = {
  title: "Beyond Nine — Growth Systems for Ambitious Businesses",
  description: "Beyond Nine builds systems that capture, respond, and convert your leads — without manual effort. AI automation and smart system design.",
  keywords: "lead capture, automation, WhatsApp automation, CRM setup, landing pages, business automation India",
  openGraph: {
    title: "Beyond Nine — Growth Systems",
    description: "Stop losing leads. Start converting automatically.",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-white text-[#0B0B0C] antialiased">
        <CalendlyProvider>
          <Navbar />
          <main>{children}</main>
          <Footer />
        </CalendlyProvider>
      </body>
    </html>
  );
}
