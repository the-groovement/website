import Navbar from "@/components/Navbar";
import "./globals.css";
import { Shrikhand, Space_Grotesk } from "next/font/google";
import MobileNavbar from "@/components/MobileNavbar";
import Footer from "@/components/Footer";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "the groovement",
  description: "your guide to the best concerts and vibes",
  keywords: ["the groovement", "groovement"],
  openGraph: {
    images: [
      {
        url: "/preview.png",
        width: 1200,
        height: 630,
      },
    ],
  },
  twitter: {
    title: "the groovement",
    card: "summary_large_image",
  },
};

const shrikhand = Shrikhand({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-shrikhand",
});

const space = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${shrikhand.variable} ${space.variable}`}>
      <body className={"text-groove1 font-space bg-groove2"}>
        <Navbar />
        <MobileNavbar />
        <main className="max-w-screen-xl mx-auto px-4 mt-24">{children}</main>
        <footer>
          <Footer />
        </footer>
      </body>
    </html>
  );
}
