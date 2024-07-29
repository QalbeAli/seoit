import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Poppins } from "@next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const poppins = Poppins({
  weight: ["400", "500", "700"], // You can choose the weights you need
  subsets: ["latin"], // You can choose the subsets you need
});

export const metadata: Metadata = {
  title: "SEOIT",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <div className="bg-gray-100">
          <Navbar />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
