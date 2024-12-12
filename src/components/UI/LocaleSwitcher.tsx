'use client';

import { useLocale, useTranslations } from 'next-intl';
import styles from './LocaleSwitcher.module.scss';
import { startTransition } from 'react';
import { setUserLocale } from '@/services/locale';

export default function LocaleSwitcher() {
  const t = useTranslations('nav.locale');
  const locale = useLocale();

  function onLanguageChange(event: any) {
    const nextLocale = event.target.dataset.locale;
    startTransition(() => {
      setUserLocale(nextLocale);
    });
  }

  return (
    <div className={styles.switcher}>
      <span
        className={`${styles.languageOption} ${
          locale === 'en' ? styles.active : ''
        }`}
        data-locale='en'
        onClick={onLanguageChange}
      >
        {t('en')}
      </span>
      {/* <span className={styles.separator}>|</span>
      <span
        className={`${styles.languageOption} ${
          locale === 'sr' ? styles.active : ''
        }`}
        data-locale='sr'
        onClick={onLanguageChange}
      >
        {t('sr')}
      </span> */}
      <span className={styles.separator}>|</span>
      <span
        className={`${styles.languageOption} ${
          locale === 'fr' ? styles.active : ''
        }`}
        data-locale='fr'
        onClick={onLanguageChange}
      >
        {t('fr')}
      </span>
    </div>
  );
}
