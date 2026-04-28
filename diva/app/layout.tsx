import type { Metadata } from "next";
import { DM_Serif_Display, DM_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const dmSerif = DM_Serif_Display({
  weight: ["400"],
  style: ["normal", "italic"],
  variable: "--font-dm-serif",
  subsets: ["latin"],
});

const dmSans = DM_Sans({
  weight: ["400", "500", "600", "700"],
  variable: "--font-dm-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "D.I.V.A | Driven by Inclusion, Validation, and Advocacy",
  description:
    "Team D.I.V.A is a women's health innovation team focused on improving maternal outcomes through better postpartum hemorrhage detection.",
  openGraph: {
    title: "D.I.V.A | Driven by Inclusion, Validation, and Advocacy",
    description:
      "Team D.I.V.A is a women's health innovation team focused on improving maternal outcomes through better postpartum hemorrhage detection.",
    images: ["/Hero-diva1.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${dmSerif.variable} ${dmSans.variable}`}
    >
      <body className="min-h-screen flex flex-col font-sans bg-bg text-ink antialiased">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
