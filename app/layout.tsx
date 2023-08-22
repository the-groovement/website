import Navbar from "@/components/Navbar";
import "./globals.css";
import MobileNavbar from "@/components/MobileNavbar";
import Footer from "@/components/Footer";

export const metadata = {
  title: "the groovement",
  description: "the groovement",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // bg-gradient-to-br from-white to-orange-300
  return (
    <html lang="en">
      <body className="bg-white">
        <main className="max-w-screen-xl mx-auto px-4 ">
          <Navbar />
          <MobileNavbar />
          {children}
        </main>
        <footer>
          <Footer />
        </footer>
      </body>
    </html>
  );
}
