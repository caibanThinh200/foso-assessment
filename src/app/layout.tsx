import type { Metadata } from "next";
import { Geist, Geist_Mono, Raleway } from "next/font/google";
import 'react-modern-drawer/dist/index.css'
import "./globals.css";
import Layout from "@/components/global/layout";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const raleway = Raleway({
  variable: "--font-raleway",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "FOSO | Assessment",
  description:
    "Giải Pháp Tự Động Hoá Quy Trình. FOSO – Nơi hướng đến các giải pháp công nghệ cho doanh nghiệp tối ưu quy trình, con người, tư duy bền vững và phát triển.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="bg-ghost-white">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${raleway.className} antialiased bg-inherit`}
      >
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
