'use client';

import Image from 'next/image';
import styles from './Services.module.scss';
import { useTranslations } from 'next-intl';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import useMediaQuery from '@/hooks/useMediaQuery';

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
  const [activeService, setActiveService] = useState<number | null>(null);

  const isMobile = useMediaQuery('(max-width: 768px)');

  const toggleService = (index: number) => {
    setActiveService(activeService === index ? null : index);
  };

  return (
    <section className={styles.services}>
      {services.map((service: Service, index: number) => (
        <div
          className={`${styles.services__item} ${
            activeService === index ? styles.active : ''
          }`}
          key={service.title}
          onClick={() => toggleService(index)}
        >
          <motion.div
            className={styles.services__item__header}
            animate={{ gap: activeService === index ? '1.5rem' : '0rem' }}
          >
            <motion.div
              className={styles.services__item__header__icon}
              initial={{ width: 0 }}
              animate={{ width: activeService === index ? 'auto' : 0 }}
              transition={{ duration: 0.3 }}
            >
              <AnimatePresence>
                {activeService === index && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{
                      opacity: 0,
                      transition: { delay: 0, duration: 0.1 },
                    }}
                    transition={{ delay: 0.3, duration: 0.25 }}
                  >
                    <Image src={service.icon} alt={service.title} fill />
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
            <h2 className={styles.services__item__header__title}>
              {t(`service-${index + 1}.title`)}
            </h2>
          </motion.div>
          <AnimatePresence>
            {activeService === index && (
              <motion.div
                className={styles.services__item__content}
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0, transition: { delay: 0.3 } }}
                transition={{ duration: 0.3 }}
              >
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20, transition: { duration: 0.3 } }}
                  transition={{ delay: 0.3, duration: 0.3 }}
                >
                  <p className={styles.services__item__description}>
                    {t(`service-${index + 1}.description`)}
                  </p>
                </motion.div>
                <motion.div
                  className={styles.services__item__image}
                  initial={{ opacity: 0, x: 100, y: isMobile ? 0 : '-50%' }}
                  animate={{ opacity: 1, x: 0, y: isMobile ? 0 : '-50%' }}
                  exit={{
                    opacity: 0,
                    x: 100,
                    y: isMobile ? 0 : '-50%',
                    transition: { duration: 0.3 },
                  }}
                  transition={{ duration: 0.3, delay: 0.3 }}
                >
                  <Image src={service.image} alt={service.title} fill />
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ))}
    </section>
  );
};

export default Services;
