import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Beyond Nine — Intelligent Growth Systems",
  description: "Beyond Nine designs intelligent systems that capture, respond, and convert — without manual effort.",
  keywords: "AI automation, growth systems, intelligent systems, lead conversion, business automation",
  openGraph: {
    title: "Beyond Nine — Intelligent Growth Systems",
    description: "Growth doesn't fail from lack of effort. It fails from broken systems.",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-bg text-[#F0F0F8] antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
