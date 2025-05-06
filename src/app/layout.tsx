import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Head from "next/head";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "BharatGen Technologies",
  description:
    "BharatGen Technologies is a software development and consulting company offering custom ERP solutions and IT consultancy for businesses across industries.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "BharatGen Technologies",
              url: "https://bharatgentechnologies.vercel.app/",
              logo: "https://bharatgentechnologies.vercel.app/logo.png",
              sameAs: [
                "https://www.instagram.com/bharatgen",
                "https://www.linkedin.com/company/bharatgen-technologie",
              ],
            }),
          }}
        />
      </Head>
      <link
        rel="icon"
        type="image/png"
        href="/favicon-96x96.png"
        sizes="96x96"
      />
      <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
      <link rel="shortcut icon" href="/favicon.ico" />
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/apple-touch-icon.png"
      />
      <link rel="manifest" href="/site.webmanifest" />

      <link rel="icon" href="/images/favicon.ico" />
      <meta name="theme-color" content="#0088ff" />
      <meta property="og:title" content="BharatGen Technologies" />
      <meta property="og:type" content="website" />
      <meta
        property="og:URL"
        content="https://bharatgentechnologies.vercel.app/"
      />
      <meta
        property="og:image"
        content="https://bharatgentechnologies.vercel.app/images/192.png"
      />
      <meta
        name="keywords"
        content="BharatGen, BharatGen Technologies, BharatGen software development, ERP solutions, custom ERP, IT consulting, software consultancy, business automation, enterprise software, business solutions, software development services"
      />
      <meta
        name="google-site-verification"
        content="d6K7JNDommgC1s788OAigDQU8Se4RJdcdR_Jg8NcTaY"
      />
      <meta
        property="og:description"
        content="BharatGen Technologies is a software development and consulting company offering custom ERP solutions and IT consultancy for businesses across industries.."
      />
      <meta name="robots" content="index, follow" />
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
