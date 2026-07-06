import type { Metadata } from "next";
import Script from "next/script";
import { gabarito, goudy, openRunde } from "@/app/fonts";
import { SITE } from "@/lib/constants";
import { assets } from "@/lib/assets";
import { cn } from "@/lib/utils";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: SITE.title,
    template: "%s | Julio Souffront",
  },
  description: SITE.description,
  alternates: {
    canonical: SITE.url,
  },
  robots: {
    index: true,
    follow: true,
    "max-image-preview": "large",
  },
  icons: {
    icon: [
      { url: assets.favicon, media: "(prefers-color-scheme: light)" },
      { url: assets.favicon, media: "(prefers-color-scheme: dark)" },
    ],
    apple: assets.favicon,
  },
  openGraph: {
    type: "website",
    url: SITE.url,
    title: SITE.title,
    description: SITE.description,
    siteName: SITE.name,
    locale: "en_US",
    images: [
      {
        url: assets.ogImage,
        width: 1200,
        height: 630,
        alt: "Julio Souffront portfolio preview",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: SITE.title,
    description: SITE.description,
    images: [assets.ogImage],
  },
};

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Julio Souffront",
  url: SITE.url,
  jobTitle: "Senior Product Designer",
  sameAs: [
    "https://www.linkedin.com/in/juliosouffront/",
    "https://x.com/juliosouffront",
    "https://www.instagram.com/juliosouffront/",
    "https://www.goodreads.com/user/show/101307229-julio-souffront",
  ],
  email: "mailto:juliosouffront@gmail.com",
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: SITE.title,
  url: SITE.url,
  description: SITE.description,
  author: { "@type": "Person", name: "Julio Souffront" },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en-US"
      className={cn(gabarito.variable, goudy.variable, openRunde.variable)}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
      </head>
      <body>
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-md focus:bg-neutral-30 focus:px-4 focus:py-2 focus:text-white"
        >
          Skip to main content
        </a>
        {children}
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${SITE.gaId}`}
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${SITE.gaId}');
          `}
        </Script>
      </body>
    </html>
  );
}
