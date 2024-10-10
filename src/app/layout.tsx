import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import localFont from 'next/font/local';
import './globals.scss';
import { ThemeProvider } from 'next-themes';
import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';
import Lenis from '@/components/UI/Lenis';
import { getLocale, getMessages } from 'next-intl/server';
import { NextIntlClientProvider } from 'next-intl';
import GridBg from '@/components/UI/GridBg';
import { locales } from '@/i18n/config';
import Cursor from '@/components/UI/Cursor';
import { ViewTransitions } from 'next-view-transitions';

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

// export const metadata: Metadata = {
//   title: "Create Next App",
//   description: "Generated by create next app",
// };

// TODO: is it needed?
export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default async function RootLayout({
  children,
}: // params: { locale },
Readonly<{
  children: React.ReactNode;
  // params: { locale: string };
}>) {
  // const locale = await getLocale();
  const messages = await getMessages();

  return (
    <ViewTransitions>
      <html lang='en'>
        <body className={`${inter.variable} ${pphatton.variable}`}>
          <NextIntlClientProvider messages={messages}>
            <ThemeProvider defaultTheme='dark' attribute='data-theme'>
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
