'use client';

import { useTranslations } from 'next-intl';
import Image from 'next/image';
import heroImage from '../../public/hero-image.png';
import { useScroll, motion, useTransform } from 'framer-motion';
import styles from './Hero.module.scss';
import { useRef } from 'react';
import Button from './UI/Button';
import BackgroundGradient from './UI/BackgroundGradient';
import useMediaQuery from '../hooks/useMediaQuery';
import ArrowIcon from './UI/icons/ArrowIcon';

const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const imageTextRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);
  const t = useTranslations('home.hero');

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start'],
  });

  const isMobile = useMediaQuery('(max-width: 768px)');

  const animationProgress = useTransform(
    scrollYProgress,
    [0, isMobile ? 0.1 : 0.3],
    [0, 1]
  );

  const opacityFast = useTransform(scrollYProgress, [0, 0.1], [1, 0]);

  const opacitySlow = useTransform(scrollYProgress, [0, 0.2], [1, 0]);

  const imageScale = useTransform(
    animationProgress,
    [0, 1],
    [isMobile ? 0.5 : 0.25, 1]
  );
  const imageX = useTransform(
    animationProgress,
    [0, 1],
    [isMobile ? -132 : -16, 0]
  );
  const yUp = useTransform(animationProgress, [0, 1], [0, -300]);

  return (
    <>
      <BackgroundGradient />
      <div className={styles.hero} ref={heroRef}>
        <motion.div
          className={styles.hero__content}
          style={{
            opacity: isMobile ? 1 : opacityFast,
            y: isMobile ? 0 : yUp,
          }}
        >
          <h1 className={styles.hero__title}>
            <span>{t('title.one')}</span>
            <span>{t('title.two')}</span>
          </h1>

          <p className={styles.hero__subtitle}>
            {t('subtitle.one')} <span>{t('subtitle.two')}</span>{' '}
            {t('subtitle.three')} <span>{t('subtitle.four')}</span>
          </p>
          <Button variant='secondary' href='/contact'>
            <span>{t('cta')}</span>
          </Button>
        </motion.div>

        <div className={styles.hero__image__container}>
          <motion.div
            ref={imageTextRef}
            className={styles.hero__image__container__text}
            style={{
              opacity: isMobile ? 1 : opacityFast
            }}
          >
            <p dangerouslySetInnerHTML={{ __html: t('demo.description') }} />
          </motion.div>
          <motion.div
            className={styles.hero__image}
            style={{
              scale: isMobile ? 1 : imageScale,
              x: isMobile ? 0 : imageX,
            }}
          >
            <Image
              ref={imageRef}
              src={heroImage}
              alt='RealVibe hero image'
              fill
              sizes='(max-width: 768px) 257px, 638px'
              style={{ objectFit: 'cover' }}
              priority
            />
          </motion.div>
        </div>

        <motion.div
          className={styles.scrollDown}
          style={{ opacity: opacitySlow }}
        >
          <p>Scroll Down</p>
          <ArrowIcon />
        </motion.div>
      </div>
    </>
  );
};

export default Hero;
