import { useTranslations } from 'next-intl';
import styles from './page.module.scss';
import { unstable_setRequestLocale } from 'next-intl/server';

export default function Home({
  params: { locale },
}: {
  params: { locale: string };
}) {
  unstable_setRequestLocale(locale);
  const t = useTranslations('home');

  return (
    <main className={styles.main}>
      <h1>{t('subtitle')}</h1>
    </main>
  );
}
