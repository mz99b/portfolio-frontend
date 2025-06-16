import type { Metadata } from "next";
import { Roboto_Mono } from 'next/font/google';
import './globals.scss';
import Navigation from '@/components/Navigation/Navigation';

const robotoMono = Roboto_Mono({ subsets: ['latin'], weight: ['400', '500', '700'] });

export const metadata: Metadata = {
  title: "@mztthieu",
  description: "Portfolio de Matthieu Burger, Développeur Full-Stack",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <body className={robotoMono.className}>
        <div className="circuit-bg" />
        <div className="app-container">
          <Navigation />
          <main className="main-content">{children}</main>
        </div>
      </body>
    </html>
  );
}
