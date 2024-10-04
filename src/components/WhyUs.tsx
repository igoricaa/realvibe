import { useTranslations } from 'next-intl';
import styles from './WhyUs.module.scss';

const WhyUs = () => {
  const t = useTranslations('home.why-us');

  return (
    <section className={styles.whyUs}>
      <h2>{t('title')}</h2>

      <div className={styles.whyUs__reasons}>
        {Array.from({ length: 4 }, (_, index) => (
          <div
            className={`${styles.whyUs__reason} ${
              styles[`whyUs__reason__${index + 1}`]
            }`}
            key={index}
          >
            <h4>
              <span>{t(`reasons.reason-${index + 1}.title.one`)} </span>
              <br />
              <span>{t(`reasons.reason-${index + 1}.title.two`)} </span>
              <span>{t(`reasons.reason-${index + 1}.title.three`)}</span>
            </h4>
            <p>{t(`reasons.reason-${index + 1}.description`)}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhyUs;
