import type { Metadata } from "next";
import { Space_Grotesk, Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  weight: ["300", "400", "500", "600", "700"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Spot My Business | Global SEO Partner & Digital Dominance",
  description: "Spot My Business (SMB) is an elite global SEO partner. We build digital dominance for local and multi-location businesses, driving traffic, phone calls, and leads.",
  keywords: ["Local SEO", "Google Business Profile", "SEO Agency", "Google Maps Optimization", "Digital Visibility", "SMB SEO"],
  authors: [{ name: "Spot My Business" }],
  openGraph: {
    title: "Spot My Business | Global SEO Partner & Digital Dominance",
    description: "We don't just improve rankings. We build digital dominance. Spot My Business helps companies become impossible to ignore.",
    url: "https://spotmybusiness.com",
    siteName: "Spot My Business",
    images: [
      {
        url: "/assets/logo.jpg",
        width: 1200,
        height: 1200,
        alt: "Spot My Business Logo",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Spot My Business | Global SEO Partner",
    description: "We build digital dominance through elite local SEO and Google Maps optimization.",
    images: ["/assets/logo.jpg"],
  },
};

// Inline script to prevent flash of wrong theme on page load
const themeScript = `
  (function() {
    try {
      var saved = localStorage.getItem('smb-theme');
      var theme = saved || 'system';
      var resolved = theme;
      if (theme === 'system') {
        resolved = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
      }
      document.documentElement.setAttribute('data-theme', resolved);
    } catch(e) {
      document.documentElement.setAttribute('data-theme', 'dark');
    }
  })();
`;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Spot My Business",
    "alternateName": "SMB",
    "image": "https://spotmybusiness.com/assets/logo.jpg",
    "url": "https://spotmybusiness.com",
    "telephone": "+1-555-789-0123",
    "priceRange": "$$$$",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "500 Terry Francine St.",
      "addressLocality": "San Francisco",
      "addressRegion": "CA",
      "postalCode": "94158",
      "addressCountry": "US"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 37.7749,
      "longitude": -122.4194
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday"
      ],
      "opens": "09:00",
      "closes": "18:00"
    },
    "sameAs": [
      "https://www.facebook.com/spotmybusiness",
      "https://twitter.com/spotmybusiness",
      "https://www.linkedin.com/company/spotmybusiness"
    ]
  };

  return (
    <html
      lang="en"
      className={`${spaceGrotesk.variable} ${inter.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <head>
        <script
          dangerouslySetInnerHTML={{ __html: themeScript }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full bg-primary-bg text-white-text font-body selection:bg-bronze selection:text-white-text">
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
