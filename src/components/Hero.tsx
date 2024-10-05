'use client';

import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/routing';
import Image from 'next/image';
import heroImage from '../../public/hero-image.png';
import { useScroll, motion, useTransform } from 'framer-motion';
import styles from './Hero.module.scss';
import { useRef, useEffect, useState } from 'react';
import Button from './UI/Button';
import BackgroundGradient from './UI/BackgroundGradient';

const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const imageTextRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);
  const [viewportHeight, setViewportHeight] = useState(0);
  const [viewportWidth, setViewportWidth] = useState(0);
  const [imageHeight, setImageHeight] = useState(0);

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start'],
  });

  useEffect(() => {
    const updateViewportDimensions = () => {
      setViewportHeight(window.innerHeight);
      setViewportWidth(document.body.clientWidth);
    };

    const updateImageHeight = () => {
      if (imageRef.current) {
        setImageHeight(imageRef.current.offsetHeight);
      }
    };

    updateViewportDimensions();
    updateImageHeight();

    window.addEventListener('resize', updateViewportDimensions);
    window.addEventListener('resize', updateImageHeight);

    return () => {
      window.removeEventListener('resize', updateViewportDimensions);
      window.removeEventListener('resize', updateImageHeight);
    };
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

  const imageScale = useTransform(
    animationProgress,
    [0, 1],
    [1, Math.max(1, viewportWidth / 638)]
  );

  const yPositionUp = useTransform(
    animationProgress,
    [0, 1],
    [0, -viewportHeight]
  );

  // const yPositionDown = useTransform(
  //   animationProgress,
  //   [0, 1],
  //   [0, viewportHeight / 2]
  // );

  const yPositionDown = useTransform(
    animationProgress,
    [0, 1],
    [0, (viewportHeight - imageHeight) / 2]
  );

  const xPosition = useTransform(animationProgress, [0, 1], [0, 100]);

  const t = useTranslations('home.hero');

  return (
    <>
      <BackgroundGradient />
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
          <Button variant='secondary'>
            <Link href='/contact'>{t('cta')}</Link>
          </Button>
        </motion.div>

        <motion.div
          className={styles.hero__image}
          style={{
            scale: imageScale,
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
          <Image
            ref={imageRef}
            src={heroImage}
            alt='RealVibe hero image'
            fill
            style={{ objectFit: 'cover' }}
            priority
          />
        </motion.div>

        <motion.div
          className={styles.scrollDown}
          style={{ opacity: opacitySlow }}
        >
          <p>Scroll Down</p>
        </motion.div>
      </div>
    </>
  );
};

export default Hero;
