import type { Metadata } from "next";
import { Geist, Geist_Mono, Poppins } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_BASE_URL as string),

  title: {
    default: "Pawna Lake Camping | Luxury Tents & Lakeside Experience",
    template: "%s | Pawna Lake Camping",
  },

  description:
    "Book premium Pawna Lake camping with luxury tents, BBQ, live music, boating and stunning lakeside views. Perfect for couples, families, and groups.",

  keywords: [
    "Pawna Lake Camping",
    "Lonavala Camping",
    "Couple Camping",
    "Couple Camping Pawna",
    "Couple Camping Lonavla",
  ],

  openGraph: {
    type: "website",
    url: `${process.env.NEXT_PUBLIC_BASE_URL}`,
    siteName: "Pawna Camps",
    title: "Pawna Lake Camping",
    description:
      "Premium Pawna Lake camping with BBQ, boating and luxury tents.",
    images: [
      {
        url: "/images/accommodations/delux/delux-1.webp",
        width: 1600,
        height: 900,
        alt: "Pawna Lake Luxury Camping",
      },
      {
        url: "/images/accommodations/delux/delux-2.webp",
        width: 1600,
        height: 900,
      },
      {
        url: "/images/accommodations/triangle/triangle-1.webp",
        width: 1600,
        height: 900,
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    images: ["/images/accommodations/delux/delux-1.webp"],
  },

  alternates: {
    canonical: `${process.env.NEXT_PUBLIC_BASE_URL}`,
  },

  robots: {
    index: true,
    follow: true,
    "max-image-preview": "large", // ❤️ SUPER IMPORTANT FOR BIG GOOGLE IMAGES
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta
          name="image"
          content={cn(
            `${process.env.NEXT_PUBLIC_BASE_URL}/images/accommodations/delux/delux-1.webp`
          )}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${poppins.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
