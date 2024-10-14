'use client';

import Image from 'next/image';
import styles from './ScaledImage.module.scss';
import { motion, useInView, useScroll, useTransform } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import useMediaQuery from '@/hooks/useMediaQuery';

const ScaledImage = ({ slug }: { slug: string }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'center center'],
  });
  const isMobile = useMediaQuery('(max-width: 768px)');
  const [viewportWidth, setViewportWidth] = useState(0);

  useEffect(() => {
    const updateViewportDimensions = () => {
      setViewportWidth(document.body.clientWidth);
    };

    updateViewportDimensions();

    window.addEventListener('resize', updateViewportDimensions);

    return () => {
      window.removeEventListener('resize', updateViewportDimensions);
    };
  }, []);

  const width = useTransform(
    scrollYProgress,
    [0, 1],
    [0, isMobile ? viewportWidth - 32 : 771]
  );
  const height = useTransform(scrollYProgress, [0, 1], [0, 423]);

  return isMobile ? (
    <div
      ref={ref}
      className={`${styles.scaledImage__wrapper} ${
        isInView ? styles.inView : ''
      }`}
    >
      <div className={`${styles.scaledImage__image}`}>
        <Image
          src={`/services/${slug}/description-image.png`}
          alt='Film production in Belgrade'
          fill
          sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 771px'
          style={{
            objectFit: 'cover',
          }}
        />
      </div>
    </div>
  ) : (
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
          sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 771px'
          style={{ objectFit: 'cover' }}
        />
      </div>
    </motion.div>
  );
};

export default ScaledImage;
