'use client';

import styles from './SplashScreen.module.scss';
import { motion } from 'framer-motion';
import { useAnimation } from 'framer-motion';
import { useEffect } from 'react';

export const sentenceVariants = {
  hidden: {},
  visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
};

export const letterVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { opacity: { duration: 0 } } },
};

export const Typewriter = ({ text, ...rest }: { text: string }) => {
  const controls = useAnimation();

  useEffect(() => {
    setTimeout(() => {
      controls.start('visible');
    }, 2400);
  }, []);

  return (
    <motion.p
      key={text}
      variants={sentenceVariants}
      initial='hidden'
      animate={controls}
      {...rest}
      className={styles.typeWritter}
    >
      {text.split('').map((char, i) => (
        <motion.span key={`${char}-${i}`} variants={letterVariants}>
          {char}
        </motion.span>
      ))}
    </motion.p>
  );
};
