import type { Metadata } from "next";
import { Inter } from "next/font/google";
import './globals.scss';
import Navigation from '@/components/Navigation/Navigation';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Matthieu Burger | Développeur Full Stack",
  description: "Portfolio de Matthieu Burger, développeur web et mobile.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <body className={inter.className}>
        <div className="circuit-bg" />
        <div className="app-container">
          <Navigation />
          <main className="main-content">{children}</main>
        </div>
      </body>
    </html>
  );
}
