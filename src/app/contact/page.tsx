import { useTranslations } from 'next-intl';
import styles from './page.module.scss';
import ContactForm from '@/components/ContactForm';

const ContactPage = () => {
  const t = useTranslations('contact');

  return (
    <main className={styles.contact}>
      <div className={styles.contact__info}>
        <h2 className={styles.contact__info__title}>{t('title')}</h2>
        <p className={styles.contact__info__description}>{t('description')}</p>
        <p className={styles.contact__info__todo}>{t('todo')}</p>
        <h4 className={styles.contact__info__subtitle}>{t('subtitle')}</h4>
        <ul className={styles.contact__info__socials}>
          <li className={styles.contact__info__socials__item}>
            <a href='https://www.instagram.com/realvibestudio/' target='_blank'>
              Instagram
            </a>
          </li>
          <li className={styles.contact__info__socials__item}>
            <a href='https://www.tiktok.com/@realvibestudio' target='_blank'>
              TikTok
            </a>
          </li>
        </ul>
      </div>
      <div className={styles.contact__form}>
        <ContactForm />
      </div>
      <div className={styles.contact__links__mobile}>
        <h4 className={styles.contact__links__mobile__subtitle}>
          {t('subtitle')}
        </h4>
        <ul className={styles.contact__links__mobile__socials}>
          <li className={styles.contact__links__mobile__socials__item}>
            <a href='https://www.instagram.com/realvibestudio/' target='_blank'>
              Instagram
            </a>
          </li>
          <li className={styles.contact__links__mobile__socials__item}>
            <a href='https://www.tiktok.com/@realvibestudio' target='_blank'>
              TikTok
            </a>
          </li>
        </ul>
      </div>
    </main>
  );
};

export default ContactPage;
