import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CalendlyProvider from "@/components/CalendlyProvider";

export const metadata: Metadata = {
  title: "Beyond Nine — AI Automation & Growth Systems",
  description: "Beyond Nine builds automation systems that capture, respond, and convert your leads — without manual work.",
  keywords: "AI automation, lead capture, WhatsApp automation, CRM setup, business automation India",
  openGraph: {
    title: "Beyond Nine — AI Automation & Growth Systems",
    description: "Your leads are leaking. We fix the system.",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-w text-dk antialiased">
        <CalendlyProvider>
          <Navbar />
          <main>{children}</main>
          <Footer />
        </CalendlyProvider>
      </body>
    </html>
  );
}
