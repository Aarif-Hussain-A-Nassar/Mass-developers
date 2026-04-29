import type { Metadata } from 'next';
import { Inter, Manrope } from 'next/font/google';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const manrope = Manrope({
  subsets: ['latin'],
  variable: '--font-manrope',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Mass Developers',
  description: 'Mass Developers — precision architecture, luxury interiors, and structural excellence. Building spaces that define lifestyle.',
  keywords: ['architecture', 'luxury', 'design', 'construction', 'mass developers', 'real estate', 'interior design'],
  metadataBase: new URL('https://massdevelopers.in'),
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: '32x32', type: 'image/x-icon' },
      { url: '/favicon.png', sizes: '512x512', type: 'image/png' },
      { url: '/brand-logo.png', sizes: '512x512', type: 'image/png' },
    ],
    apple: '/brand-logo.png',
    shortcut: '/favicon.ico',
  },
  openGraph: {
    title: 'Mass Developers',
    description: 'Precision architecture, luxury interiors, and structural excellence.',
    type: 'website',
    url: 'https://massdevelopers.in',
    siteName: 'Mass Developers',
    images: [
      {
        url: '/brand-logo.png',
        width: 800,
        height: 800,
        alt: 'Mass Developers Logo',
      },
    ],
  },
  twitter: {
    card: 'summary',
    title: 'Mass Developers',
    description: 'Precision architecture and luxury design.',
    images: ['/brand-logo.png'],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${manrope.variable}`}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        {/* Explicit favicon tags — required for Google Search to display the icon */}
        <link rel="icon" href="/favicon.ico" sizes="32x32" />
        <link rel="icon" href="/favicon.png" type="image/png" sizes="512x512" />
        <link rel="icon" href="/brand-logo.png" type="image/png" sizes="512x512" />
        <link rel="apple-touch-icon" href="/brand-logo.png" />
        <link rel="shortcut icon" href="/favicon.ico" />
      </head>
      <body>{children}</body>
    </html>
  );
}
