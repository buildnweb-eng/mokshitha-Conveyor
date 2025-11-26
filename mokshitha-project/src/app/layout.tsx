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
    ],
    apple: [
      { url: '/logo/logo.jpeg', type: 'image/jpeg' },
    ],
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
