'use client';

import { useEffect, useRef, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import styles from './MaskAnimation.module.scss';

const MaskAnimation: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [viewportSize, setViewportSize] = useState({ width: 0, height: 0 });

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  });

  useEffect(() => {
    const updateViewportSize = () => {
      setViewportSize({ width: window.innerWidth, height: window.innerHeight });
    };

    updateViewportSize();
    window.addEventListener('resize', updateViewportSize);

    return () => window.removeEventListener('resize', updateViewportSize);
  }, []);

  const initialMaskSize =
    Math.min(viewportSize.width, viewportSize.height) * 0.1;

  const maskSize = useTransform(
    scrollYProgress,
    [0, 1],
    [
      initialMaskSize,
      Math.sqrt(
        Math.pow(viewportSize.width, 2) + Math.pow(viewportSize.height, 2)
      ),
    ]
  );

  const imageScale = useTransform(scrollYProgress, [0, 1], [1, 1.2]);

  const imageBrightness = useTransform(scrollYProgress, [0, 1], [100, 150]);

  return (
    <div ref={containerRef} className={styles.mask}>
      <div className={[styles.content, styles.content__layout].join(' ')}>
        <svg
          className={styles.content__img}
          width='100%'
          height='100%'
          version='1.1'
          xmlns='http://www.w3.org/2000/svg'
          xmlnsXlink='http://www.w3.org/1999/xlink'
          viewBox={`0 0 ${viewportSize.width} ${viewportSize.height}`}
          preserveAspectRatio='xMidYMid slice'
        >
          <defs>
            <filter id='displacementFilter4'>
              <feTurbulence
                type='fractalNoise'
                baseFrequency='0.5'
                numOctaves='1'
                result='noise'
              />
              <feDisplacementMap
                in='SourceGraphic'
                in2='noise'
                scale='50'
                xChannelSelector='R'
                yChannelSelector='G'
              />
            </filter>
            <mask id='circleMask4'>
              <motion.circle
                cx='50%'
                cy='50%'
                fill='white'
                className={styles.mask}
                style={{ filter: 'url(#displacementFilter4)' }}
                r={maskSize}
              />
            </mask>
          </defs>
          <motion.image
            xlinkHref='masked-image.png'
            width='100vw'
            height='100vh'
            mask='url(#circleMask4)'
            style={{
              scale: imageScale,
              filter: `brightness(${imageBrightness}%)`,
              transformOrigin: '50% 50%',
            }}
          />
        </svg>
      </div>
    </div>
  );
};

export default MaskAnimation;