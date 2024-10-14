import { useTranslations } from 'next-intl';
import styles from './ContactSection.module.scss';
import Link from './UI/Link';
import Button from './UI/Button';

const ContactSection = () => {
  const t = useTranslations('home.contact');

  return (
    <section className={styles.contact}>
      <h2>{t('title')}</h2>
      <Button href='/contact'>
        <span>{t('linkText')}</span>
      </Button>
    </section>
  );
};

export default ContactSection;
