'use client';

import styles from './BackgroundGradient.module.scss';

const BackgroundGradient = () => {
  return (
    <div className={styles.gradient__bg}>
      <svg xmlns='http://www.w3.org/2000/svg'>
        <defs>
          <filter id='goo'>
            <feGaussianBlur
              in='SourceGraphic'
              stdDeviation='10'
              result='blur'
            />
            <feColorMatrix
              in='blur'
              mode='matrix'
              values='1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -8'
              result='goo'
            />
            <feBlend in='SourceGraphic' in2='goo' />
          </filter>
        </defs>
      </svg>
      <div className={styles.gradient__bg__container}>
        <div className={styles.gradient__bg__g3}></div>/
      </div>
    </div>
  );
};

export default BackgroundGradient;
