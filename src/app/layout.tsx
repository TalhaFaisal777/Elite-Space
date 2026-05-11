import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Havn® — Thoughtful furniture for considered living",
  description:
    "Solid wood. Honest materials. Lasting design. Thoughtfully crafted furniture for people who believe a home should feel as beautiful as it looks.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="antialiased">
      <body>{children}</body>
    </html>
  );
}
