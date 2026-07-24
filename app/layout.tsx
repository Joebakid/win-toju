// app/layout.tsx
import type { Metadata } from "next";
import { Inter, Montserrat } from "next/font/google";
import "../globals.css";

// Body Font: Clean and readable
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

// Heading Font: Wide, geometric, and industrial
const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Win-Toju System Enterprise Limited | Marine Logistics & Engineering",
  description: "Win-Toju System Enterprise Limited (RC: 1744024) delivers premium marine logistics, special transportation, claims agency, labour supply, and certified onshore waste management for Nigeria's energy sector.",
  keywords: [
    "Win-Toju",
    "Marine Logistics Nigeria",
    "Warri Marine Services",
    "NUPRC Permit Company Nigeria",
    "Onshore Waste Management Delta State",
    "General Contracting Nigeria",
    "Oil and Gas Support Services Warri"
  ],
  authors: [{ name: "Win-Toju System Enterprise Limited" }],
  creator: "Win-Toju System Enterprise Limited",
  publisher: "Win-Toju System Enterprise Limited",
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "/logo.png",
    shortcut: "/logo.png",
    apple: "/logo.png",
  },
  openGraph: {
    type: "website",
    locale: "en_NG",
    url: "https://win-toju.com",
    title: "Win-Toju System Enterprise Limited | Marine Logistics & Engineering",
    description: "Uncompromising standards in industrial execution, marine logistics, and energy sector support services in Nigeria.",
    siteName: "Win-Toju System Enterprise Limited",
    images: [
      {
        url: "/logo.png",
        width: 800,
        height: 600,
        alt: "Win-Toju System Enterprise Limited Logo",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${montserrat.variable} scroll-smooth`}>
      <body className="font-sans antialiased text-corporate-slate bg-corporate-cream">
        {children}
      </body>
    </html>
  );
}