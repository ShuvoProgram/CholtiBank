import type { Metadata } from "next";
import "./globals.css";
import { Providers } from "@/lib/Providers";

import toast, { Toaster } from "react-hot-toast";
export const metadata: Metadata = {
  title: "CholtiBank",
  description: "Bangladesh's first digital bank experience",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Providers>
          {" "}
          <Toaster />
          {children}
        </Providers>
      </body>
    </html>
  );
}
