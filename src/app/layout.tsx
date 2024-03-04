import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Layout from "@/components/Layout";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Diseñador Web Freelance / Iván Berlanga",
  description: "Diseñador Web Freelance / Iván Berlanga",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
      
      <html lang="es">
        
        <body className={inter.className } >
        <Navbar/>
          {children}
        <Footer/>
        </body>
      </html>
       

  );
}


