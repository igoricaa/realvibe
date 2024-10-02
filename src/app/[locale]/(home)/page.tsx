import { useTranslations } from 'next-intl';
import styles from './page.module.scss';
import { unstable_setRequestLocale } from 'next-intl/server';
import Hero from '@/components/Hero';

export default function Home({
  params: { locale },
}: {
  params: { locale: string };
}) {
  unstable_setRequestLocale(locale);
  const t = useTranslations('home');

  return (
    <main className={styles.main}>
      <Hero />
      <div className={styles.spacer}>
        <p>
          ima gasaima gasaima gasaima gasaima gasaima gasaima gasaima gasaima
          gasaima gasaima gasaima gasaima gasaima gasaima gasaima gasaima
          gasaima gasaima gasaima gasaima gasaima gasaima gasaima gasaima
          gasaima gasaima gasaima gasaima gasaima gasaima gasaima gasaima
          gasaima gasaima gasaima gasa
        </p>
      </div>
      {/* <Services />
      <AboutUs />
      <MaskAnimation />
      <WhyUs />
      <CtaSection /> */}
    </main>
  );
}
