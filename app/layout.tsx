import Navbar from "@/components/Navbar";
import "./globals.css";
import MobileNavbar from "@/components/MobileNavbar";

export const metadata = {
  title: "the groovement",
  description: "the groovement",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="max-w-screen-xl mx-auto px-4">
        <Navbar />
        <MobileNavbar />
        <main>{children}</main>
      </body>
    </html>
  );
}
