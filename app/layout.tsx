import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Document Verification System",
  description: "National ID document verification record.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className="flex min-h-screen flex-col font-sans antialiased">
        {children}
      </body>
    </html>
  );
}
