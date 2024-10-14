import Image from 'next/image';
import styles from './HeaderLogo.module.scss';
import logo from '@/../public/realvibe-logo.svg';

const HeaderLogo = () => {
  return (
    <a href='/' className={styles.logoWrapper}>
      <Image src={logo} alt='Real Vibe Production logo' fill priority />
    </a>
  );
};

export default HeaderLogo;
