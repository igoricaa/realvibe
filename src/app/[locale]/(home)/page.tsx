import { useTranslations } from 'next-intl';
import styles from './page.module.scss';
import { unstable_setRequestLocale } from 'next-intl/server';
import Hero from '@/components/Hero';
import Services from '@/components/Services/Services';
import About from '@/components/About/About';
import MaskAnimation from '@/components/MaskAnimation';

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
      <Services />
      <About />
      <MaskAnimation />

      <div style={{ height: '100vh' }}>
        <h3>gotovooo</h3>
      </div>
      {/* <WhyUs />
      <CtaSection /> */}
    </main>
  );
}
