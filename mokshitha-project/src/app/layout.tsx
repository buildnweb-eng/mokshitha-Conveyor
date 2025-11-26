import type { Metadata } from "next";
import { Inter, Raleway } from "next/font/google";
import "./globals.css";
import { Providers } from "@/components/providers";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-sans",
});

const raleway = Raleway({ 
  subsets: ["latin"],
  variable: "--font-heading",
});

export const metadata: Metadata = {
  title: "Mokshitha Industrial Automation - Conveyor Belt Manufacturers",
  description: "Leading manufacturer of industrial conveyor belts and automation solutions since 2013. Based in Hyderabad, India.",
  icons: {
    icon: [
      { url: '/logo/logo.jpeg', type: 'image/jpeg' },
      { url: '/logo/logo.jpeg', sizes: '32x32', type: 'image/jpeg' },
      { url: '/logo/logo.jpeg', sizes: '16x16', type: 'image/jpeg' },
    ],
    apple: [
      { url: '/logo/logo.jpeg', type: 'image/jpeg' },
    ],
    shortcut: ['/logo/logo.jpeg'],
  },
  openGraph: {
    title: "Mokshitha Industrial Automation",
    description: "Leading manufacturer of industrial conveyor belts and automation solutions since 2013. Based in Hyderabad, India.",
    url: 'https://mokshitha-conveyor.vercel.app',
    siteName: 'Mokshitha Industrial Automation',
    images: [
      {
        url: '/logo/logo.jpeg',
        width: 800,
        height: 600,
        alt: 'Mokshitha Industrial Automation Logo',
      },
    ],
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Mokshitha Industrial Automation",
    description: "Leading manufacturer of industrial conveyor belts and automation solutions since 2013.",
    images: ['/logo/logo.jpeg'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${raleway.variable} font-sans antialiased`}>
        <Providers>
          <div className="flex flex-col min-h-screen">
            <Header />
            <main className="flex-1">
              {children}
            </main>
            <Footer />
          </div>
        </Providers>
      </body>
    </html>
  );
}
