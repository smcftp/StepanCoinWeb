'use client';

import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Footer from "@/components/Footer";
import { useEffect, useState } from 'react';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [isMounted, setIsMounted] = useState(false);
  
  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <html lang="en">
      <head>
        <title>STEPAN COIN</title>
        <meta name="description" content="КОМФОРТНЫЙ КРИПТОСТАРТ С STEPAN COIN & BLUM" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        {...(typeof document !== 'undefined' && 
          document.body.hasAttribute('data-demoway-document-id') && 
          !isMounted ? 
          {'data-demoway-document-id': document.body.getAttribute('data-demoway-document-id')} : 
          {})}
      >
        {children}
        <Footer/>
      </body>
    </html>
  );
}
