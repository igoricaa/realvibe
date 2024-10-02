'use client';

import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/routing';
import Image from 'next/image';
import heroImage from '../../public/hero-image.png';
import { useScroll, motion, useTransform } from 'framer-motion';
import styles from './Hero.module.scss';
import { useRef, useEffect, useState } from 'react';
import wireframe from '../../public/wireframe.svg';

const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const imageTextRef = useRef<HTMLDivElement>(null);
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

  const opacityFast = useTransform(scrollYProgress, [0, 0.1], [1, 0], {
    clamp: true,
  });

  const opacitySlow = useTransform(scrollYProgress, [0, 0.2], [1, 0], {
    clamp: true,
  });

  const width = useTransform(
    animationProgress,
    [0, 1],
    [638, viewportWidth - 64]
  );

  const height = useTransform(
    animationProgress,
    [0, 1],
    [350, viewportHeight - 64]
  );

  const yPositionUp = useTransform(
    animationProgress,
    [0, 1],
    [0, -viewportHeight]
  );

  const yPositionDown = useTransform(
    animationProgress,
    [0, 1],
    [0, viewportHeight / 2 - 150]
  );

  const xPosition = useTransform(animationProgress, [0, 1], [0, 100]);

  const t = useTranslations('home.hero');

  return (
    <div className={styles.hero} ref={heroRef}>
      <motion.div
        className={styles.hero__content}
        style={{ opacity: opacityFast, y: yPositionUp }}
      >
        <h1 className={styles.hero__title}>{t('title')}</h1>
        <p className={styles.hero__subtitle}>
          {t('subtitle.one')} <span>{t('subtitle.two')}</span>{' '}
          {t('subtitle.three')} <span>{t('subtitle.four')}</span>
        </p>
        <Link href='/contact' className={styles.hero__button}>
          {t('cta')}
        </Link>
      </motion.div>

      <motion.div
        className={styles.hero__image}
        style={{
          width,
          height,
          y: yPositionDown,
          x: xPosition,
        }}
      >
        <motion.div
          ref={imageTextRef}
          className={styles.hero__image__text}
          style={{ opacity: opacityFast }}
        >
          <h6>REALVIBE DEMO REEL</h6>
          <p>
            RealVibe excels at organizing professional
            <br />
            business events that inspire, engage, and
            <br />
            leave a lasting impression.
          </p>
        </motion.div>
        <Image src={heroImage} alt='RealVibe hero image' fill />
      </motion.div>

      <motion.div
        className={styles.scrollDown}
        style={{ opacity: opacitySlow }}
      >
        <p>Scroll Down</p>
      </motion.div>
      {/* <Image
        className={styles.wireframe}
        src={wireframe}
        alt='RealVibe wireframe'
        width={343}
        height={343}
      /> */}
    </div>
  );
};

export default Hero;
