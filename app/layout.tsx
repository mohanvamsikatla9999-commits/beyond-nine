import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "BeyondNine — AI Automations & Growth Systems",
  description: "AI automations, voice agents, and web solutions — engineered around your outcomes, not our deliverables. Stop leaking revenue.",
  keywords: "AI automation, voice agents, lead capture, WhatsApp automation, business automation India",
  openGraph: {
    title: "BeyondNine — AI Automations & Growth Systems",
    description: "Your business is leaking revenue. We seal it.",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-bg text-[#f0f2ff] antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
