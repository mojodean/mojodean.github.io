import type { Metadata } from "next";
import { Geist } from "next/font/google";
import Nav from "@/components/Nav";
import "./globals.css";

const geist = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Dean P. Simmer",
  description: "VP Engineering at Rocket. M.S. Applied AI, University of San Diego. Writing about AI, engineering, and leading well.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geist.variable} h-full antialiased`}>
      <body className="min-h-full bg-slate-50 font-sans text-slate-900">
        <Nav />
        {children}
        <footer className="mt-24 border-t border-slate-200 bg-white py-8 text-center text-sm text-slate-400">
          © {new Date().getFullYear()} Dean P. Simmer · Detroit, MI
        </footer>
      </body>
    </html>
  );
}
