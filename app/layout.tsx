import type { Metadata } from "next";
import "./globals.css";
import { metaContent } from "./utils/content";

export const metadata: Metadata = {
  title: metaContent.TITLE,
  description: metaContent.DESCRIPTION,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-[#f6f5ed]">{children}</body>
    </html>
  );
}
