import Image from 'next/image';
import styles from './MaskAnimation.module.scss';

const MobileMask: React.FC = () => {
  return (
    <div className={styles.mask}>
      <div className={styles.content}>
        <div className={styles.content__img}>
          <Image
            src='/masked-mobile.png'
            alt='RealVibe Studio Jelena Mirkovic'
            fill
            sizes='100vw'
          />
        </div>
      </div>
    </div>
  );
};

export default MobileMask;
