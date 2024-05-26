import type { Metadata } from "next";
import { Inter } from "next/font/google";

import { NavBarApp } from "@/core/components/NavBar/NavBar";
import "./globals.css";
import { Providers } from "./providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Portafolio | Franzua Plasencia",
  description: "Portafolio made by Franzua Plasencia",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={inter.className}>
        <Providers>
          <NavBarApp />
          <div className="background-gradient-radius">{children}</div>
        </Providers>
      </body>
    </html>
  );
}
