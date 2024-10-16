'use client';

import Image from 'next/image';
import styles from './ScaledImage.module.scss';
import { motion, useInView, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import useMediaQuery from '@/hooks/useMediaQuery';

const ScaledImage = ({ slug }: { slug: string }) => {
  const isMobile = useMediaQuery('(max-width: 768px)');

  return (
    <>
      {isMobile && <MobileScaledImage slug={slug} />}
      {!isMobile && <DesktopScaledImage slug={slug} />}
    </>
  );
};

export default ScaledImage;

const MobileScaledImage = ({ slug }: { slug: string }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });

  return (
    <div
      ref={ref}
      className={`${styles.scaledImage__wrapper} ${
        isInView ? styles.inView : ''
      }`}
    >
      <div className={`${styles.scaledImage__image}`}>
        <Image
          src={`/services/${slug}/description-image.png`}
          alt='Belgrade by Djordje Cetkovic, designer and photographer based in Belgrade, Serbia | chadjavac instagram'
          fill
          sizes='(max-width: 768px) 100vw'
          style={{
            objectFit: 'cover',
          }}
        />
      </div>
    </div>
  );
};

const DesktopScaledImage = ({ slug }: { slug: string }) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'center center'],
  });

  const width = useTransform(scrollYProgress, [0, 1], [0, 771]);
  const height = useTransform(scrollYProgress, [0, 1], [0, 423]);

  return (
    <motion.div
      ref={ref}
      className={`${styles.scaledImage__wrapper}`}
      style={{
        width,
        height,
      }}
    >
      <div className={styles.scaledImage__image}>
        <Image
          src={`/services/${slug}/description-image.png`}
          alt='Film production in Belgrade'
          fill
          sizes='(max-width: 1200px) 50vw, 771px'
          style={{ objectFit: 'cover' }}
        />
      </div>
    </motion.div>
  );
};
