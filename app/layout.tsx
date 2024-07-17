import type { Metadata } from 'next';

import '@/styles/globals.css';
import Scripts from '@/scripts';

export const metadata: Metadata = {
  title: 'Sales Rep AI Copilot',
  description:
    "Elevate your sales team's performance with Oliv and get deep insights into rep activities and sales strategies, plus timely alerts on deal progress and buyer intent.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <head>
        <link rel='icon' href='/oliv.png' sizes='any' />
        <meta content='Sales Rep AI Copilot' property='og:title' />
        <Scripts />
      </head>
      <body>
        {children}
        <noscript>
          <iframe
            src='https://www.googletagmanager.com/ns.html?id=GTM-N3FHXVRL'
            height='0'
            width='0'
            style={{ display: 'none', visibility: 'hidden' }}
          />
        </noscript>
      </body>
    </html>
  );
}
