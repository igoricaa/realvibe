'use client';

import styles from './AnimatedText.module.scss';
import { motion, MotionValue, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

const AnimatedText = ({ children }: { children: string }) => {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start 0.7', 'start 0.05'],
  });

  const words: string[] = children.split(' ');

  return (
    <p ref={container} className={styles.animatedText}>
      {words.map((word, index) => {
        const start = index / words.length;

        const end = start + 1 / words.length;

        return (
          <Word key={index} progress={scrollYProgress} range={[start, end]}>
            {word}
          </Word>
        );
      })}
    </p>
  );
};

const Word = ({
  children,
  progress,
  range,
}: {
  children: string;
  progress: MotionValue;
  range: number[];
}) => {
  const opacity = useTransform(progress, range, [0, 1]);

  return (
    <span className={styles.word}>
      <span className={styles.shadow}>{children}</span>

      <motion.span style={{ opacity: opacity }}>{children}</motion.span>
    </span>
  );
};

export default AnimatedText;
