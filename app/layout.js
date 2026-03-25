import { Analytics } from '@vercel/analytics/react';
import './globals.css';

export const metadata = {
  title: 'Peter Brown - The Mortgage Advisor',
  description: 'Trusted mortgage advice for buying, remortgaging, and buy-to-let',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
