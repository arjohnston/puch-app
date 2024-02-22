import { Analytics } from '@vercel/analytics/react';
import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';

const poppins = Poppins({ subsets: ['latin'], weight: ['400', '500'] });

export const metadata: Metadata = {
  title: 'Puch',
  description: 'Le puch app',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en' style={{ height: '100%' }}>
      <body className={poppins.className} style={{ margin: 0, height: '100%' }}>
        {children}
      </body>
      <Analytics />
    </html>
  );
}
