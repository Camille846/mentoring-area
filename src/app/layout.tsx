import type { Metadata } from "next";
import "./globals.css";
import { Montserrat } from "next/font/google";

export const metadata: Metadata = {
  title: "Mentoring Area",
  description: "Details about the mentoring area at Soul Bilíngue.",
};

const montserrat = Montserrat({ subsets: ["latin"], weight: ["400", "500", "600"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={montserrat.className}>{children}</body>
    </html>
  );
}
