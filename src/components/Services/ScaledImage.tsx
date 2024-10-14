'use client';

import Image from 'next/image';
import styles from './ScaledImage.module.scss';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import useMediaQuery from '@/hooks/useMediaQuery';

const ScaledImage = ({ slug }: { slug: string }) => {
  const ref = useRef(null);
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

  const scale = useTransform(scrollYProgress, [0, 1], [0, 1]);

  // const imageScale = useTransform(
  //   animationProgress,
  //   [0, 1],
  //   [1, Math.max(1, viewportWidth / 638)]
  // );

  const width = useTransform(
    scrollYProgress,
    [0, 1],
    [0, isMobile ? viewportWidth - 32 : 771]
  );
  const height = useTransform(scrollYProgress, [0, 1], [0, 423]);

  return (
    <motion.div
      ref={ref}
      className={styles.scaledImage__wrapper}
      style={{
        scale,
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
