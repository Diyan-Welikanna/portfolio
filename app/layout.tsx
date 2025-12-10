import type { Metadata } from "next";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import PageLoader from "@/components/PageLoader";

export const metadata: Metadata = {
  title: "Diyan Thimeesha - Full Stack Developer Portfolio",
  description: "Portfolio website of Diyan Thimeesha - Full Stack Developer specializing in Next.js, React, TypeScript, Node.js, and PHP (Laravel). View my projects and get in touch.",
  keywords: ["Diyan Thimeesha", "Full Stack Developer", "Web Developer", "Next.js", "React", "TypeScript", "Node.js", "PHP", "Laravel", "Portfolio"],
  authors: [{ name: "Diyan Thimeesha" }],
  creator: "Diyan Thimeesha",
  publisher: "Diyan Thimeesha",
  metadataBase: new URL("https://diyan-welikanna.github.io/portfolio"),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://diyan-welikanna.github.io/portfolio",
    title: "Diyan Thimeesha - Full Stack Developer Portfolio",
    description: "Portfolio website showcasing my work as a Full Stack Developer. Explore my projects, skills, and get in touch for collaboration.",
    siteName: "Diyan Thimeesha Portfolio",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Diyan Thimeesha Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Diyan Thimeesha - Full Stack Developer Portfolio",
    description: "Portfolio website showcasing my work as a Full Stack Developer. Explore my projects, skills, and get in touch.",
    images: ["/og-image.png"],
    creator: "@diyan_thimeesha",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
  manifest: "/site.webmanifest",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <PageLoader />
        <Navigation />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
