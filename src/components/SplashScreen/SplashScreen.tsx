'use client';

import styles from './SplashScreen.module.scss';
import R1 from '../SplashScreen/rs/R1';
import R2 from '../SplashScreen/rs/R2';
import R3 from '../SplashScreen/rs/R3';
import R4 from '../SplashScreen/rs/R4';
import R5 from '../SplashScreen/rs/R5';
import R6 from '../SplashScreen/rs/R6';
import R7 from '../SplashScreen/rs/R7';
import { Typewriter } from './TextScramble';
import GridBg from '../UI/GridBg';
import { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';

const titleVariants = {
  normal: { fontSize: '155px' },
  scaled: { fontSize: '6000px', transition: { fontSize: { duration: 1 } } },
};

const splashScreenVariants = {
  normal: { opacity: 1 },
  hidden: { opacity: 0, transition: { duration: 1 } },
};

const SplashScreen = () => {
  const controls = useAnimation();

  useEffect(() => {
    setTimeout(() => {
      controls.start('scaled');
      controls.start('hidden');
    }, 4300);
  }, []);

  return (
    <motion.div
      className={styles.splashScreen}
      variants={splashScreenVariants}
      initial='normal'
      animate={controls}
    >
      <GridBg />
      <div className={styles.rs}>
        <R1 className={styles.r1} />
        <R2 className={styles.r2} />
        <R3 className={styles.r3} />
        <R4 className={styles.r4} />
        <R5 className={styles.r5} />
        <R6 className={styles.r6} />
        <R7 className={styles.r7} />

        <div>
          <div className={styles.splashScreen__title}>
            <motion.div
              variants={titleVariants}
              initial='normal'
              animate={controls}
              style={{ display: 'flex' }}
            >
              <span className={styles.r8}>R</span>
              <Typewriter text='eal Vibe' />
            </motion.div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default SplashScreen;
