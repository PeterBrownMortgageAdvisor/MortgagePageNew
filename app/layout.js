import './globals.css';
import { Analytics } from '@vercel/analytics/react';

export const metadata = {
  title: 'Mortgage Advisor UK | First-Time Buyer, Remortgage & Buy-to-Let Advice',
  description:
    'Trusted mortgage advisor in the UK. Expert help with first-time buyer mortgages, remortgaging, and buy-to-let. Whole of market access and no obligation advice.',
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
