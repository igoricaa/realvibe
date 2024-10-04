'use client';

import { useTranslations } from 'next-intl';
import styles from './WhyUs.module.scss';
import { motion, useAnimation, useInView } from 'framer-motion';
import { useEffect, useRef } from 'react';

const WhyUs = () => {
  const t = useTranslations('home.why-us');
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false });

  useEffect(() => {
    if (isInView) {
      console.log('test');
      controls.start('visible');
    }
  }, [controls, isInView]);

  return (
    <section className={styles.whyUs}>
      <h2>{t('title')}</h2>

      <div ref={ref} className={styles.whyUs__reasons}>
        {Array.from({ length: 4 }, (_, index) => (
          <motion.div
            animate={controls}
            initial='hidden'
            variants={{
              visible: { opacity: 1, y: index % 2 === 0 ? 0 : 48 },
              hidden: { opacity: 0, y: index % 2 === 0 ? 120 : 168 },
            }}
            transition={{ duration: 1.5, delay: index * 0.2 }}
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
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default WhyUs;
