import Navbar from "@/components/Navbar";
import "./globals.css";
import { Shrikhand, Space_Grotesk } from "next/font/google";
import MobileNavbar from "@/components/MobileNavbar";
import Footer from "@/components/Footer";

export const metadata = {
  title: "the groovement",
  description: "the groovement",
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
        <main className="max-w-screen-xl mx-auto px-4 mt-20">{children}</main>
        <footer>
          <Footer />
        </footer>
      </body>
    </html>
  );
}
