'use client';

import { useTranslations } from 'next-intl';
import Link from '../UI/Link';
import Image from 'next/image';
import heroImage from '../../../public/hero-image.png';
import { useScroll, motion, useTransform } from 'framer-motion';
import styles from './Hero.module.scss';
import { useRef, useState } from 'react';
import Button from '../UI/Button';
import BackgroundGradient from '../UI/BackgroundGradient';
import useMediaQuery from '../../hooks/useMediaQuery';

const Hero = ({ slug }: { slug: string }) => {
  const heroRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);
  const [viewportHeight, setViewportHeight] = useState(0);
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

  const yPositionUp = useTransform(
    animationProgress,
    [0, 1],
    [0, -viewportHeight]
  );

  return (
    <>
      <BackgroundGradient />
      <div className={styles.hero} ref={heroRef}>
        <motion.div
          className={styles.hero__content}
          style={{
            opacity: isMobile ? 1 : opacityFast,
            y: isMobile ? 0 : yPositionUp,
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
          <Button variant='secondary'>
            <Link href='/contact'>{t('cta')}</Link>
          </Button>
        </motion.div>

        <div className={styles.hero__image}>
          <Image
            ref={imageRef}
            src={heroImage}
            alt='RealVibe hero image'
            fill
            sizes='(max-width: 768px) 257px, 638px'
            style={{ objectFit: 'cover' }}
            priority
          />
        </div>
      </div>
    </>
  );
};

export default Hero;
