import type { Metadata } from "next";
import { Roboto_Mono } from 'next/font/google';
import './globals.scss';
import Navigation from '@/components/Navigation/Navigation';
import DarkReaderFix from '@/components/DarkReaderFix';

const robotoMono = Roboto_Mono({ subsets: ['latin'], weight: ['400', '500', '700'] });

const siteUrl = 'https://mztthieu.fr';

export const metadata: Metadata = {
  title: '@mztthieu— développeur full stack',
  description: 'Portfolio de Matthieu Burger, développeur web et mobile, expert en React, Next.js et Node.js.',
  
  // Open Graph Protocol
  openGraph: {
    title: '@mztthieu — développeur full stack',
    description: '@mztthieu — développeur full stack',
    url: siteUrl,
    siteName: 'mztthieu.fr',
    images: [
      {
        url: `${siteUrl}/og-image.png`,
        width: 1200,
        height: 630,
        alt: 'Portfolio de Matthieu Burger',
      },
    ],
    locale: 'fr_FR',
    type: 'website',
  },

  // Twitter Cards
  twitter: {
    card: 'summary_large_image',
    title: '@mztthieu — développeur full stack',
    description: '@mztthieu — développeur full stack',
    images: [`${siteUrl}/og-image.png`], // URL absolue vers votre image
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" style={{ scrollBehavior: 'smooth' }}>
      <body className={robotoMono.className}>
        <DarkReaderFix />
        <div className="circuit-bg" />
        <div className="app-container">
          <Navigation />
          <main className="main-content">{children}</main>
        </div>
      </body>
    </html>
  );
}
