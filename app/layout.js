import "./globals.css";
import { Inter } from "next/font/google";

import Navbar from "./components/Navbar";
import SmoothScrolling from "./components/SmoothScroller";
import Footer from "./components/Footer";
import ScrollToTopButton from "./components/ScrollToTop";
import siteMetaData from "./utils/siteMetaData";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata = {
  title: {
    template: `%s`,
    default: siteMetaData.title,
  },
  description: siteMetaData.description,
  openGraph: {
    title: siteMetaData.title,
    description: siteMetaData.description,
    url: siteMetaData.siteUrl,
    siteName: siteMetaData.title,
    images: [siteMetaData.socialBanner],
    locale: "en_US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true, 
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  twitter: {
    card: "summary_large_image",
    title: siteMetaData.title,
    description: siteMetaData.description,
    images: [siteMetaData.socialBanner],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={inter.variable}>
      <body className={` ${inter.className} antialiased`}>
        <SmoothScrolling>
          <Navbar />
          {children}
          <ScrollToTopButton />
          <Footer />
        </SmoothScrolling>
      </body>
    </html>
  );
}
