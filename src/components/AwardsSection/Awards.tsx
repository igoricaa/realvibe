'use client';

import Image from 'next/image';
import styles from './Awards.module.scss';
import { useTranslations } from 'next-intl';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import useMediaQuery from '@/hooks/useMediaQuery';
import { Award, awards } from '@/data';
import ArrowIcon from '../UI/icons/ArrowIcon';

const Awards = () => {
  const t = useTranslations('home.awards');
  const [activeAward, setActiveAward] = useState<number | null>(null);

  const isMobile = useMediaQuery('(max-width: 1024px)');

  const toggleAward = (index: number) => {
    setActiveAward(activeAward === index ? null : index);
  };

  return (
    <section className={styles.awards}>
      {awards.map((awards: Award, index: number) => (
        <div
          className={`${styles.awards__item} ${
            activeAward === index ? styles.active : ''
          }`}
          key={awards.title}
          onClick={() => toggleAward(index)}
        >
          <motion.div
            className={styles.awards__item__header}
            animate={{ gap: activeAward === index ? '1.5rem' : '0rem' }}
          >
            <h2
              className={styles.awards__item__header__title}
              style={{
                whiteSpace:
                  isMobile && (index === 0 || index === 2)
                    ? 'nowrap'
                    : 'normal',
              }}
            >
              {t(`award-${index + 1}.title`)}
            </h2>
            <motion.div
              className={styles.awards__item__header__icon}
              initial={{ width: 0 }}
              animate={{ width: activeAward === index ? 'auto' : 0 }}
              transition={{ duration: 0.3 }}
            >
              <AnimatePresence>
                {activeAward === index && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{
                      opacity: 0,
                      transition: { delay: 0, duration: 0.1 },
                    }}
                    transition={{ delay: 0.3, duration: 0.25 }}
                  >
                    <ArrowIcon color='var(--color-main)' />
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          </motion.div>
          <AnimatePresence>
            {activeAward === index && (
              <motion.div
                className={styles.awards__item__content}
                initial={{ opacity: 0, height: 0, marginTop: 0 }}
                animate={{ opacity: 1, height: 'auto', marginTop: '1rem' }}
                exit={{ opacity: 0, height: 0, marginTop: 0, transition: { delay: 0.3 } }}
                transition={{ duration: 0.3 }}
              >
                {awards.description.map(
                  (description: string, index: number) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{
                        opacity: 0,
                        y: 20,
                        transition: { duration: 0.3 },
                      }}
                      transition={{ delay: 0.3, duration: 0.3 }}
                    >
                      <p
                        className={styles.awards__item__description}
                        dangerouslySetInnerHTML={{
                          __html: t.raw(
                            `award-${index + 1}.description-${index + 1}`
                          ),
                        }}
                      />
                    </motion.div>
                  )
                )}
                <motion.div
                  className={styles.awards__item__image}
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
                  <Image
                    src={awards.image}
                    alt={awards.title}
                    fill
                    sizes='(max-width: 768px) 95vw, 535px'
                  />
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ))}
    </section>
  );
};

export default Awards;
