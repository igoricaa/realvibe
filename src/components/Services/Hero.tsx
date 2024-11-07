'use client';

import { useTranslations } from 'next-intl';
import { useScroll, motion, useTransform } from 'framer-motion';
import styles from './Hero.module.scss';
import { useRef } from 'react';
import Button from '../UI/Button';
import BackgroundGradient from '../UI/BackgroundGradient';
import useMediaQuery from '../../hooks/useMediaQuery';
import ImageSlider from '../ImageSlider';
import { TextFitContainer } from '../UI/TextFitContainer';

const Hero = ({ slug }: { slug: string }) => {
  const heroRef = useRef<HTMLDivElement>(null);
  const t = useTranslations(`services.${slug}.hero`);

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start'],
  });

  const isMobile = useMediaQuery('(max-width: 1024px)');

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

  const yPositionUp = useTransform(animationProgress, [0, 1], [0, -400]);

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
          <div className={styles.hero__title}>
            <TextFitContainer>{t('title.one')}</TextFitContainer>
            {slug === 'event-organization' && (
              <TextFitContainer>{t('title.two')}</TextFitContainer>
            )}
          </div>

          <p className={styles.hero__subtitle}>
            {t('subtitle.one')}
            {<span>{t('subtitle.two')}</span>}
            {slug === 'event-organization' && (
              <span>{t('subtitle.three')}</span>
            )}
            {slug === 'event-organization' && <span>{t('subtitle.four')}</span>}
          </p>
          <Button href='/contact' variant='secondary'>
            <span>{t('cta')}</span>
          </Button>
        </div>
        <ImageSlider slug={slug} />
      </motion.div>
    </>
  );
};

export default Hero;
