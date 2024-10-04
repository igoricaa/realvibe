import Image from 'next/image';
import styles from './GridBg.module.scss';

const GridBg = () => {
  return (
    <div className={styles.gridBg}>
      <Image
        src='/grid-bg.png'
        alt='Grid background'
        fill
        sizes='100vw'
        style={{ objectFit: 'cover' }}
      />
    </div>
  );
};

export default GridBg;
