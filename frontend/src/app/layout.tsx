import type { Metadata } from "next";
import Script from "next/script";
import { Space_Grotesk, Inter } from "next/font/google";

import "./globals.css";

import { ThemeProvider } from "@/components/ThemeProvider";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  weight: ["600", "700"],
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["400", "500", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://spotmybusiness.in"),

  title: "Google Business Profile & Local SEO Services | Spot My Business",

  description:
    "Grow your Google Maps visibility, attract more local customers and generate enquiries with Google Business Profile optimization, Local SEO and digital marketing.",

  keywords: [
    "Google Business Profile Optimization",
    "Local SEO",
    "Google Maps Optimization",
    "Local SEO Agency",
    "Google Business Profile Management",
    "SEO Services",
    "Digital Marketing",
  ],

  authors: [
    {
      name: "Spot My Business",
    },
  ],

  openGraph: {
    title: "Google Business Profile & Local SEO Services | Spot My Business",

    description:
      "Grow your Google Maps visibility, attract more local customers and generate enquiries with Google Business Profile optimization, Local SEO and digital marketing.",

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

    title: "Google Business Profile & Local SEO | Spot My Business",

    description:
      "Improve Google Maps visibility and generate more local enquiries with Google Business Profile optimization and Local SEO.",

    images: ["/assets/logo.jpg"],
  },
};

// Prevent flash of the wrong theme before React loads
const themeScript = `
(function() {
  try {
    var saved = localStorage.getItem('smb-theme');
    var theme = saved || 'system';
    var resolved = theme;

    if (theme === 'system') {
      resolved = window.matchMedia('(prefers-color-scheme: dark)').matches
        ? 'dark'
        : 'light';
    }

    document.documentElement.setAttribute('data-theme', resolved);
  } catch (e) {
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

    name: "Spot My Business",
    alternateName: "SMB",

    image: "https://spotmybusiness.in/assets/logo.jpg",

    url: "https://spotmybusiness.in",

    telephone: "+91-9007960333",

    priceRange: "$$",

    address: {
      "@type": "PostalAddress",

      streetAddress: "Middle Rd, Sen Para, Santoshpur",

      addressLocality: "Kolkata",

      addressRegion: "West Bengal",

      postalCode: "700075",

      addressCountry: "IN",
    },

    geo: {
      "@type": "GeoCoordinates",

      latitude: 22.495909466723468,

      longitude: 88.38062498633192,
    },

    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",

        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
        ],

        opens: "12:00",

        closes: "12:00",
      },
    ],

    sameAs: [
      "https://www.facebook.com/spotmybusiness",
      "https://twitter.com/spotmybusiness",
      "https://www.linkedin.com/company/spot-my-business",
    ],
  };

  return (
    <html
      lang="en"
      className={`${spaceGrotesk.variable} ${inter.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <head>
        {/* Prevent theme flash */}
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />

        {/* Local Business Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLd),
          }}
        />
      </head>

      <body className="min-h-full bg-primary-bg font-body text-white-text selection:bg-bronze selection:text-white-text">

        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-XYZ0LVW3YT"
          strategy="afterInteractive"
        />

        <Script
          id="google-analytics"
          strategy="afterInteractive"
        >
          {`
            window.dataLayer = window.dataLayer || [];

            function gtag() {
              window.dataLayer.push(arguments);
            }

            gtag('js', new Date());

            gtag('config', 'G-XYZ0LVW3YT');
          `}
        </Script>

        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
