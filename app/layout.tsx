// import React from "react";
// import type { Metadata } from "next";
// import { Geist, Geist_Mono } from "next/font/google";
// import "./globals.css";

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

// export const metadata: Metadata = {
//   title: "SavonDev Studio",
//   description: "Websites, automation, CRM and AI solutions for Israeli SMBs",
// };

// export default function RootLayout({
//   children,
// }: {
//   children: React.ReactNode;
// }) {
//   return (
//     <html lang="en" suppressHydrationWarning>
//       <body
//         className={`${geistSans.variable} ${geistMono.variable} antialiased`}
//       >
//         {children}
//       </body>
//     </html>
//   );
// }

import React from "react";
import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// export const metadata: Metadata = {
//   metadataBase: new URL("https://savondev.com"),
//   applicationName: "SavonDev Studio",
//   title: {
//     default: "SavonDev Studio",
//     template: "%s | SavonDev Studio",
//   },
//   description: "Websites, automation, CRM and AI solutions for Israeli SMBs",
//   manifest: "/manifest.webmanifest",
//   icons: {
//     icon: [
//       { url: "/favicon.ico" },
//       { url: "/icons/icon-192.png", sizes: "192x192", type: "image/png" },
//       { url: "/icons/icon-512.png", sizes: "512x512", type: "image/png" },
//     ],
//     apple: [
//       {
//         url: "/icons/apple-touch-icon.png",
//         sizes: "180x180",
//         type: "image/png",
//       },
//     ],
//   },
// };


export const metadata: Metadata = {
  metadataBase: new URL("https://savondev.com"),

  title: {
    default: "SavonDev Studio",
    template: "%s | SavonDev Studio",
  },

  description:
    "Premium websites, automation, CRM and AI solutions for Israeli SMBs",

  manifest: "/manifest.json",

  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/icon.svg", type: "image/svg+xml" },
      { url: "/icon1.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [
      {
        url: "/apple-icon.png",
        sizes: "180x180",
        type: "image/png",
      },
    ],
  },
};

export const viewport: Viewport = {
  themeColor: "#020410",
  colorScheme: "dark",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[#020410] text-slate-100`}
      >
        {children}
      </body>
    </html>
  );
}