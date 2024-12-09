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
import { useEffect, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';
import useMediaQuery from '@/hooks/useMediaQuery';

const splashScreenVariants = {
  normal: { opacity: 1 },
  hidden: { opacity: 0, transition: { duration: 1 } },
};

const SplashScreen = () => {
  const controls = useAnimation();
  const isTablet = useMediaQuery('(max-width: 1024px)');
  const isMobile = useMediaQuery('(max-width: 680px)');
  const [titleVariants, setTitleVariants] = useState({});
  const [isSplashScreenVisible, setIsSplashScreenVisible] = useState(true);

  useEffect(() => {
    const titleVariantsConstructor = {
      normal: {
        fontSize: isMobile ? '70px' : isTablet ? '145px' : '155px',
      },
      scaled: {
        fontSize: isMobile ? '5000px' : isTablet ? '5500px' : '10000px',
        transition: { fontSize: { duration: 1 } },
      },
    };

    setTitleVariants(titleVariantsConstructor);

    setTimeout(() => {
      controls.start('scaled');
      controls.start('hidden');
    }, 5000);

    setTimeout(() => {
      setIsSplashScreenVisible(false);
    }, 6000);
  }, []);

  return (
    isSplashScreenVisible && (
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
    )
  );
};

export default SplashScreen;
