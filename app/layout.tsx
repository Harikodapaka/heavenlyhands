import '@mantine/core/styles.css';
import './globals.css';

import React from 'react';
import logoImage from '@/public/heavenly-hands-logo.png';
import { ColorSchemeScript, Container, mantineHtmlProps, MantineProvider } from '@mantine/core';
import { Footer } from '@/components/Footer/Footer';
import { Header } from '@/components/Header/Header';
import { links } from '@/components/Header/links';
import { theme } from '@/theme';
import { BOOKING_JANEAPP_URL } from '@/app/utils/constants';

export const metadata = {
  title: 'Heavenly Hands - Massage Therapy in Cambridge, Kitchener & Waterloo',
  description: 'The best RMT massage therapy clinic in Cambridge, Kitchener-Waterloo & Guelph. Heavenly Hands offers professional massage services to relieve stress, reduce pain, and improve overall health. Book your appointment now!',
};


export default function RootLayout({ children }: { children: any }) {
  return (
    <html lang="en" {...mantineHtmlProps}>
      <head>
        <ColorSchemeScript />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <link rel="shortcut icon" href="/favicon.png" />
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width, user-scalable=no"
        />
      </head>
      <body>
        <MantineProvider theme={theme}>
          <Header
            links={links}
            cta={{ label: 'Book Appointment', href: BOOKING_JANEAPP_URL }}
            logo={{ src: logoImage, alt: 'Heavenly Hands', href: '/' }}
          />
          <main>
            {children}
          </main>
          <Footer />
        </MantineProvider>
      </body>
    </html>
  );
}
