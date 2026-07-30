import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Epoch 1 Logic Map",
  description:
    "A local semantic explorer for MindfulText products, learning threads, workflows, runs, evidence, and decisions.",
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
