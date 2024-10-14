'use client';

import styles from './AnimatedText.module.scss';
import { motion, MotionValue, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

const AnimatedText = ({ children }: { children: string }) => {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start 0.7', 'start 0.25'],
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

export default AnimatedText;

const Word = ({
  children,
  progress,
  range,
}: {
  children: string;
  progress: MotionValue<number>;
  range: [number, number];
}) => {
  const amount = range[1] - range[0];
  const step = amount / children.length;

  return (
    <span className={styles.word}>
      {children.split('').map((char, i) => {
        const start = range[0] + i * step;
        const end = range[0] + (i + 1) * step;

        return (
          <Char key={`c_${i}`} progress={progress} range={[start, end]}>
            {char}
          </Char>
        );
      })}
    </span>
  );
};

const Char = ({
  children,
  progress,
  range,
}: {
  children: string;
  progress: MotionValue<number>;
  range: [number, number];
}) => {
  const opacity = useTransform(progress, range, [0, 1]);
  //   const skewX = useTransform(progress, range, [-20, 0]);
  //   const blur = useTransform(progress, range, [8, 0]);

  //   , skewX, filter: `blur(${blur}px)`
  return (
    <span>
      <span className={styles.shadow}>{children}</span>
      <motion.span style={{ opacity }}>{children}</motion.span>
    </span>
  );
};
