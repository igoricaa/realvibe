'use client';

import { useTranslations } from 'next-intl';
import Link from '../UI/Link';
import { useScroll, motion, useTransform } from 'framer-motion';
import styles from './Hero.module.scss';
import { useRef } from 'react';
import Button from '../UI/Button';
import BackgroundGradient from '../UI/BackgroundGradient';
import useMediaQuery from '../../hooks/useMediaQuery';
import ImageSlider from '../ImageSlider';

const Hero = ({ slug }: { slug: string }) => {
  const heroRef = useRef<HTMLDivElement>(null);
  const t = useTranslations(`services.${slug}.hero`);

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start'],
  });

  const isMobile = useMediaQuery('(max-width: 768px)');

  const animationDuration = 0.5;

  const animationProgress = useTransform(
    scrollYProgress,
    [0, animationDuration],
    [0, 1],
    { clamp: true }
  );

  const opacityFast = useTransform(scrollYProgress, [0, 0.1], [1, 0], {
    clamp: true,
  });

  const yPositionUp = useTransform(animationProgress, [0, 1], [0, -800]);

  return (
    <>
      <BackgroundGradient />
      <motion.div
        className={styles.hero}
        ref={heroRef}
        style={{
          opacity: isMobile ? 1 : opacityFast,
          y: isMobile ? 0 : yPositionUp,
        }}
      >
        <div className={styles.hero__content}>
          <h1 className={styles.hero__title}>
            <span>{t('title.one')}</span>
            {slug === 'event-organization' && <span>{t('title.two')}</span>}
          </h1>
          <p className={styles.hero__subtitle}>
            {t('subtitle.one')}
            {slug === 'event-organization' && <span>{t('subtitle.two')}</span>}
            {slug === 'event-organization' && (
              <span>{t('subtitle.three')}</span>
            )}
            {slug === 'event-organization' && <span>{t('subtitle.four')}</span>}
          </p>
          <Button variant='secondary'>
            <Link href='/contact'>{t('cta')}</Link>
          </Button>
        </div>
        <ImageSlider />
      </motion.div>
    </>
  );
};

export default Hero;
