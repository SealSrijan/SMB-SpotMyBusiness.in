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
  title: "Google Business Profile & Local SEO Services | Spot My Business",
  description: "Grow your Google Maps visibility, attract more local customers and generate enquiries with Google Business Profile optimization, Local SEO and digital marketing.",
  keywords: ["Google Business Profile Optimization",
    "Local SEO",
    "Google Maps Optimization",
    "Local SEO Agency",
    "Google Business Profile Management",
    "SEO Services",
    "Digital Marketing"],
  authors: [{ name: "Spot My Business" }],
  openGraph: {
    title: "Google Business Profile & Local SEO Services | Spot My Business",
    description: "Grow your Google Maps visibility, attract more local customers and generate enquiries with Google Business Profile optimization, Local SEO and digital marketing.",
    url: "https://spotmybusiness.in",
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
    "image": "https://spotmybusiness.in/assets/logo.jpg",
    "url": "https://spotmybusiness.in",
    "telephone": "+91-9007960333",
    "priceRange": "$$$$",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Middle Rd, Sen Para",
      "addressLocality": "Santoshpur",
      "addressRegion": "Kolkata",
      "postalCode": "700075",
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 22.495909466723468,
      "longitude": 88.38062498633192
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
      "opens": "12:00",
      "closes": "12:00"
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
