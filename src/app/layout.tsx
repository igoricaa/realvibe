import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import localFont from 'next/font/local';
import './globals.scss';
import { ThemeProvider } from 'next-themes';
import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';
import Lenis from '@/components/UI/Lenis';
import { getMessages } from 'next-intl/server';
import { NextIntlClientProvider } from 'next-intl';
import GridBg from '@/components/UI/GridBg';
import { locales } from '@/i18n/config';
import Cursor from '@/components/UI/Cursor';
import { ViewTransitions } from 'next-view-transitions';
import SplashScreen from '@/components/SplashScreen/SplashScreen';
import VideoSplashScreen from '@/components/SplashScreen/VideoSplashScreen';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
  weight: ['400', '500', '600', '700'],
  style: ['normal', 'italic'],
});

const pphatton = localFont({
  src: [
    {
      path: '../fonts/pphatton-medium.woff2',
      weight: '500',
    },
  ],
  variable: '--font-pphatton',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://realvibestudio.com'),

  title: {
    default: 'RealVibe Studio',
    template: '%s | RealVibe Studio',
  },
  description:
    'One-stop-shop for all event organization and audio-visual production needs.',
  openGraph: {
    title: 'RealVibe Studio',
    description:
      'One-stop-shop for all event organization and audio-visual production needs.',
    url: 'https://realvibestudio.com',
    siteName: 'RealVibe Studio',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    title: 'RealVibe Studio',
    card: 'summary_large_image',
  },
};

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const messages = await getMessages();

  return (
    <ViewTransitions>
      <html lang='en'>
        <body className={`${inter.variable} ${pphatton.variable}`}>
          <NextIntlClientProvider messages={messages}>
            <ThemeProvider defaultTheme='dark' attribute='data-theme'>
              {/* <SplashScreen /> */}
              <VideoSplashScreen />
              <Lenis>
                <Cursor />
                <GridBg />
                <Header />
                {children}
                <Footer />
              </Lenis>
            </ThemeProvider>
          </NextIntlClientProvider>
        </body>
      </html>
    </ViewTransitions>
  );
}
