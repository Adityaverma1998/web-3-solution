import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import {Providers} from './provider'

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Nextattvalabs | Blockchain & Full-Stack App Development",
  description: "We build cutting-edge projects using Blockchain, Flutter, ReactJS, and Node.js. Nextattvalabs delivers scalable and secure digital solutions for startups and enterprises",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
         <Providers>

         {children}

         </Providers>
      </body>
    </html>
  );
}
