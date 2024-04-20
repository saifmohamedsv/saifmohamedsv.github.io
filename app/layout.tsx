import { Analytics } from "@vercel/analytics/react";
import clsx from "clsx";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import Navigation from "@/components/Navigation";
import { ThemeProvider } from "@/components/ThemeProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Home | Saif Mohamed",
  description:
    "Results-Driven Full-Stack Frontend Developer | Specialized in React.js | AIESEC Global Volunteer | Expert in JavaScript | Dedicated to Seamless Fullstack Solutions",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={clsx(
          inter.className,
          "width-full bg-primary text-primary antialiased",
        )}
      >
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
          <Navigation />
          <div
            className={
              "mx-auto max-w-[700px] px-6 pb-24 pt-16 md:px-6 md:pb-44 md:pt-20"
            }
          >
            {children}
          </div>
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  );
}
