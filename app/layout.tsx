import Navbar from "@/components/Navbar";
import "./globals.css";
import { Shrikhand, Space_Grotesk, Poppins } from "next/font/google";
import MobileNavbar from "@/components/MobileNavbar";
import Footer from "@/components/Footer";
import { Metadata } from "next";
import { GoogleAnalytics } from "@next/third-parties/google";

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

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-poppins",
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
    <html
      lang="en"
      className={`${shrikhand.variable} ${space.variable} ${poppins.variable}`}
    >
      <body className={"text-groove1 font-poppins bg-groove2"}>
        <Navbar />
        <MobileNavbar />
        <main className="max-w-screen-xl mx-auto px-4 mt-24 font-poppins">
          {children}
        </main>
        <footer>
          <Footer />
        </footer>
      </body>
      <GoogleAnalytics gaId="G-QQL9EK51BH" />
    </html>
  );
}
