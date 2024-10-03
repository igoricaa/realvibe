import { useTranslations } from 'next-intl';
import styles from './About.module.scss';
import { Link } from '@/i18n/routing';
import AboutSlider from './HorizontalSlider/AboutSlider';

const About = () => {
  const t = useTranslations('home.about');

  return (
    <section className={styles.about}>
      <div className={styles.about__header}>
        <h2>{t('title')}</h2>
        {/* TODO: Create reusable Button component */}
        <Link href={'/contact'}>{t('cta')}</Link>
      </div>
      <div className={styles.about__description}>
        <p>{t('description')}</p>
      </div>

      <AboutSlider />
    </section>
  );
};

export default About;
