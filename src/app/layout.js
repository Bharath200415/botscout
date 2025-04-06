import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Sidebar from "@/components/Sidebar"; 
import Subribers from "@/components/Subsribebtn";

import { Toaster } from "sonner";
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
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-cover bg-center bg-no-repeat min-h-screen`}
        style={{ backgroundImage: "url('/background.jpg')" }}
      >
        <div className="ml-20">
        <Subribers className=""/>
        </div>

        <Sidebar />
        {children}
        <Toaster />
      </body>
    </html>
  );
}