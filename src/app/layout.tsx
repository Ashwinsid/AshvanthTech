import type { Metadata } from 'next';
import './globals.css';
import { Toaster } from '@/components/ui/toaster';
import { SiteHeader } from '@/components/site-header';
import { SiteFooter } from '@/components/site-footer';
import { WhatsAppButton } from '@/components/whatsapp-button';

const SvgFavicon = "data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 88' fill='none'%3e%3cpath d='M50 0L0 88H16L24.4648 74H75.5352L84 88H100L50 0ZM32.3652 60L50 29.28L67.6348 60H32.3652Z' fill='hsl(0 72% 51%)'/%3e%3c/svg%3e";

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
