import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./Components/Navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {/* navbar */}
        <Navbar></Navbar>
        <main className=" min-h-[calc(100vh-130px)]  ">{children}</main>
        {/* footer */}
        <footer className="text-center bg-slate-600">
          Just a normal footer
        </footer>
      </body>
    </html>
  );
}
