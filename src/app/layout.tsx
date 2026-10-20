import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Toaster } from "@/components/layout/Toaster";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Launchpad",
    template: "%s | Launchpad",
  },
  description: "A minimal Next.js starter for building your next product.",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full bg-white font-sans text-slate-900">
        {children}
        <Toaster />
      </body>
    </html>
  );
}
