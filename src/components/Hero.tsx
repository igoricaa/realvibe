'use client';

import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/routing';
import Image from 'next/image';
import heroImage from '../../public/hero-image.png';
import { useScroll, motion, useTransform } from 'framer-motion';
import styles from './Hero.module.scss';
import { useRef, useEffect, useState } from 'react';

const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const [viewportHeight, setViewportHeight] = useState(0);
  const [viewportWidth, setViewportWidth] = useState(0);

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start'],
  });

  useEffect(() => {
    const updateViewportDimensions = () => {
      setViewportHeight(window.innerHeight);
      setViewportWidth(document.body.clientWidth);
    };

    updateViewportDimensions();
    window.addEventListener('resize', updateViewportDimensions);

    return () => window.removeEventListener('resize', updateViewportDimensions);
  }, []);

  const animationDuration = 0.5;

  const animationProgress = useTransform(
    scrollYProgress,
    [0, animationDuration],
    [0, 1],
    { clamp: true }
  );

  const scale = useTransform(
    animationProgress,
    [0, 1],
    [1, Math.max((viewportWidth - 64) / 638, (viewportHeight - 64) / 350)]
  );

  const yPosition = useTransform(
    animationProgress,
    [0, 1],
    [0, viewportHeight + 850]
  );

  const xPosition = useTransform(animationProgress, [0, 1], [0, 100]);

  const t = useTranslations('home.hero');

  return (
    <div className={styles.hero} ref={heroRef}>
      <div className={styles.hero__content}>
        <h1 className={styles.hero__title}>{t('title')}</h1>
        <p className={styles.hero__subtitle}>
          {t('subtitle.one')} <span>{t('subtitle.two')}</span>{' '}
          {t('subtitle.three')} <span>{t('subtitle.four')}</span>
        </p>
        <Link href='/contact' className={styles.hero__button}>
          {t('cta')}
        </Link>
      </div>

      <motion.div
        className={styles.hero__image}
        style={{
          scale,
          y: yPosition,
          x: xPosition,
        }}
      >
        <Image src={heroImage} alt='Hero' fill />
      </motion.div>
    </div>
  );
};

export default Hero;
