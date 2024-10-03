import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import localFont from 'next/font/local';
import '../globals.scss';
import { ThemeProvider } from 'next-themes';
import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';
import Lenis from '@/components/UI/Lenis';
import { getMessages, unstable_setRequestLocale } from 'next-intl/server';
import { NextIntlClientProvider, useTranslations } from 'next-intl';
import { routing } from '@/i18n/routing';

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
      path: '../../fonts/PPHatton-Medium.woff2',
      weight: '500',
    },
  ],
  variable: '--font-pphatton',
});

// export const metadata: Metadata = {
//   title: "Create Next App",
//   description: "Generated by create next app",
// };

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function RootLayout({
  children,
  params: { locale },
}: Readonly<{
  children: React.ReactNode;
  params: { locale: string };
}>) {
  unstable_setRequestLocale(locale);
  // const t = useTranslations('layout');

  // const messages = (await import(`../../../messages/${locale}.json`)).default;
  const messages = await getMessages();

  return (
    <html lang='en'>
      <body className={`${inter.variable} ${pphatton.variable}`}>
        <NextIntlClientProvider messages={messages} locale={locale}>
          <ThemeProvider defaultTheme='dark' attribute='data-theme'>
            <Lenis>
              <Header />
              {children}
              <Footer />
            </Lenis>
          </ThemeProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
