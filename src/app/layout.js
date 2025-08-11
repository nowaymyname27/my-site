// src/app/layout.js
import "./globals.css";
import Navbar from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Jose Ramirez - Personal Website",
  description: "Personal website showcasing my skills and projects",
  icons: {
    icon: "/icons/fox-tail.svg",
    shortcut: "/icons/fox-tail.svg",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-black text-white flex flex-col">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
