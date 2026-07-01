import type { Metadata } from "next";
import { outfit, parkinsans } from "@/lib/fonts";
import "./globals.css";
import "./site.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: {
    default: "Verve Salon",
    template: "%s – Verve Salon",
  },
      description:
      "Verve Salon offers expert hair styling, barbering, color treatments, and scalp therapies in a modern, welcoming environment staffed by certified professionals."
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${outfit.variable} ${parkinsans.variable}`}>
      <body className="min-h-full flex flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
