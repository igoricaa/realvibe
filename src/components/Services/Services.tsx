import Image from 'next/image';
import styles from './Services.module.scss';
import { useTranslations } from 'next-intl';

type Service = {
  title: string;
  icon: string;
  image: string;
};

const services: Service[] = [
  {
    title: 'Event Organization',
    icon: '/services/film-production-icon.svg',
    image: '/services/film-production.png',
  },
  {
    title: 'CONCEPTING AND SCREENING AD CAMPAIGNS',
    icon: '/services/film-production-icon.svg',
    image: '/services/film-production.png',
  },
  {
    title: 'FILM PRODUCTION',
    icon: '/services/film-production-icon.svg',
    image: '/services/film-production.png',
  },
  {
    title: 'PRODUCING MUSIC VIDEOS',
    icon: '/services/film-production-icon.svg',
    image: '/services/film-production.png',
  },
];

const Services = () => {
  const t = useTranslations('home.services');

  return (
    <section className={styles.services}>
      {services.map((service: Service, index: number) => (
        <div className={styles.services__item} key={service.title}>
          <div className={styles.services__item__header}>
            <Image
              src={service.icon}
              alt={service.title}
              width={59}
              height={51}
            />
            <h2 className={styles.services__item__header__title}>
              {t(`service-${index + 1}.title`)}
            </h2>
          </div>
          <p className={styles.services__item__description}>
            {t(`service-${index + 1}.description`)}
          </p>
          <Image
            src={service.image}
            alt={service.title}
            width={535}
            height={342}
          />
        </div>
      ))}
    </section>
  );
};

export default Services;
