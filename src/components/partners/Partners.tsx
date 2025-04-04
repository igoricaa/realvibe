import { useTranslations } from 'next-intl';
import styles from './Partners.module.scss';
import Image from 'next/image';
const partners = [
  {
    name: 'Hype',
    image: '/partners/hype-logo.png',
    aspectRatio: '384 / 287',
  },
  {
    name: 'Thunder Top Team',
    image: '/partners/ttt-logo.svg',
    aspectRatio: '3056 / 757',
  },
  {
    name: 'Udruženje Šiljkan',
    image: '/partners/siljkan-logo.svg',
    aspectRatio: '16 / 10',
  },
];

const Partners = () => {
  const t = useTranslations('home.partners');

  return (
    <section className={styles.partners}>
      <h2 className={styles.partners__title}>{t('title')}</h2>
      <div className={styles.partners__list}>
        {partners.map((partner, index) => (
          <div
            className={styles.partners__item}
            style={{
              aspectRatio: partner.aspectRatio,
            }}
            key={partner.name}
            // style={{
            //   gridColumn: index === 0 ? 'span 2' : 'span 1',
            // }}
          >
            <Image src={partner.image} alt={partner.name} fill sizes='300px' />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Partners;
