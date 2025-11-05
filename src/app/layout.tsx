import type { Metadata } from 'next';
import './globals.css';
import { Toaster } from '@/components/ui/toaster';
import { SiteHeader } from '@/components/site-header';
import { SiteFooter } from '@/components/site-footer';
import { WhatsAppButton } from '@/components/whatsapp-button';

const PngFavicon = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAAXNSR0IArs4c6QAAARNJREFUeJ7t2sENwjAMBEG+p4ACHaBDdIAuUAF0QgcowAmd0AFTyBBkgpWW1h+iY5+zh/ck8XGW1vY+AAAAAACA/xC+3wP4ABzAGQBjAJQB+gD9AE8AjgA4AKwAVgA3gA0gAzIAHQAJkAD6AOcAVgBrAAsgA0gAAsAAmAAzAANAADgA5gA+gAyAA3AAYAAYAAwAGIAIYAF8AGYA/AE4AAAABgACcACHAJ4AHMEpABgAZgAcgAjgAYAAyAA+gAfgAfgAYABcAAsgAmAAyAA+gAfgASAACIAHEAEMgAcgARwBuAJwAKwAYgBPAI4AHAGYAEYAiwAyAAVgAagAVgA1gAzIAFQAEoAEYAKsAJgARgAawBNAAxgAXgAPAAAAAAC+dQHJ5w3T1uD1xAAAAABJRU5ErkJggg==";

export const metadata: Metadata = {
  title: 'Ashvanth Technologies | Expert Laptop Service in Chennai & Medavakkam',
  description: 'Ashvanth Technologies offers expert laptop repair, maintenance, and upgrade services in Chennai and Medavakkam. Fast, reliable solutions for all your laptop problems.',
  keywords: 'laptop service, laptop repair, laptop maintenance, laptop upgrades, Chennai, Medavakkam, Ashvanth Technologies, laptop service center near me, laptop service center in chennai, Laptop service center in medavakkam contact number, Dell laptop service center in medavakkam, laptop repair center, Best laptop service center in medavakkam, laptop service center chennai, asus laptop service center, acer laptop service center near me, lenovo laptop service center, Laptop service center in medavakkam near me, dell laptop service near me, Laptop service center in medavakkam chennai, hp laptop service',
  icons: {
    icon: '/favicon.svg',
    shortcut: '/favicon.svg',
    apple: '/favicon.svg',
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
        <link rel="icon" href={PngFavicon} type="image/png" sizes="any" />
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
