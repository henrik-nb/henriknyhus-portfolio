import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-serif",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://henriknyhus.com"),
  title: "Henrik Nyhus — Digital Designer",
  description:
    "Portfolio of Henrik Nyhus. Digital Designer based in Oslo, Norway. Senior Product Designer at VG / Schibsted Media. Designing, writing, prototyping, and engineering digital products and websites.",
  keywords: [
    "Henrik Nyhus",
    "Digital Designer",
    "Product Designer",
    "UX Designer",
    "Webflow Expert",
    "Oslo",
    "Norway",
    "Design Sprints",
    "Schibsted",
    "VG",
  ],
  authors: [{ name: "Henrik Nyhus", url: "https://henriknyhus.com" }],
  openGraph: {
    title: "Henrik Nyhus — Digital Designer & Product Specialist",
    description:
      "I design, write, prototype, test and create solutions for people and businesses.",
    url: "https://henriknyhus.com",
    siteName: "Henrik Nyhus",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/images/avatar/henrik.png",
        width: 800,
        height: 800,
        alt: "Henrik Nyhus",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Henrik Nyhus — Digital Designer",
    description:
      "I design, write, prototype, test and create solutions for people and businesses.",
    images: ["/images/avatar/henrik.png"],
  },
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${playfair.variable} scroll-smooth antialiased`}
    >
      <body className="min-h-screen text-[#141413] selection:bg-[#141413] selection:text-[#FAFAF8] font-sans transition-colors duration-200">
        {children}
      </body>
    </html>
  );
}
