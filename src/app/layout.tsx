import type { Metadata } from 'next';
import './globals.css';
import { Toaster } from '@/components/ui/toaster';
import { SiteHeader } from '@/components/site-header';
import { SiteFooter } from '@/components/site-footer';
import { WhatsAppButton } from '@/components/whatsapp-button';

const SvgFavicon = "data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 108 88' fill='none'%3e%3cpath fill-rule='evenodd' clip-rule='evenodd' d='M51.543 0.707107L0 88H16.7332L30.1332 65.8115H64.0958L51.543 42.1885L39.2668 65.8115H33.101L51.543 31.8115L69.985 65.8115H77.8668L91.2668 88H108L56.457 0.707107L51.543 0.707107ZM77.8668 65.8115H64.0958L51.543 42.1885L61.0108 24.477L102.733 88H86.8332L77.8668 65.8115Z' fill='hsl(0 72% 51%)'/%3e%3c/svg%3e";

export const metadata: Metadata = {
  title: 'Ashvanth Technologies | Expert Laptop Service in Chennai & Medavakkam',
  description: 'Ashvanth Technologies offers expert laptop repair, maintenance, and upgrade services in Chennai and Medavakkam. Fast, reliable solutions for all your laptop problems.',
  keywords: 'laptop service, laptop repair, laptop maintenance, laptop upgrades, Chennai, Medavakkam, Ashvanth Technologies, laptop service center near me, laptop service center in chennai, Laptop service center in medavakkam contact number, Dell laptop service center in medavakkam, laptop repair center, Best laptop service center in medavakkam, laptop service center chennai, asus laptop service center, acer laptop service center near me, lenovo laptop service center, Laptop service center in medavakkam near me, dell laptop service near me, Laptop service center in medavakkam chennai, hp laptop service',
  icons: {
    icon: SvgFavicon,
    shortcut: SvgFavicon,
    apple: SvgFavicon,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&display=swap" rel="stylesheet" />
      </head>
      <body className="min-h-screen bg-background font-body antialiased">
        <div className="relative flex min-h-dvh flex-col">
          <SiteHeader />
          <main className="flex-1">{children}</main>
          <SiteFooter />
        </div>
        <WhatsAppButton />
        <Toaster />
      </body>
    </html>
  );
}
