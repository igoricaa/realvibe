import Image from 'next/image';
import styles from './Header.module.scss';
import logo from '@/../public/realvibe-logo.svg';
import { Link } from '@/i18n/routing';
import { useTranslations } from 'next-intl';
import sideareaBurger from '@/../public/sidearea-burger.svg';

const Header = () => {
  const t = useTranslations('nav');

  const routes = [
    { href: '/', label: t('home') },
    { href: '/about', label: t('about') },
    { href: '/events', label: t('events') },
    { href: '/video-production', label: t('video-production') },
    { href: '/contact', label: t('contact') },
  ];

  return (
    <header className={styles.header}>
      <div className={styles.header__logoWrapper}>
        <Image
          src={logo}
          alt='Real Vibe Production logo'
          width={137}
          height={91}
        />
      </div>
      <nav className={styles.header__nav}>
        <ul className={styles.header__nav__desktopMenu}>
          {routes.map((route) => (
            <li className={styles.header__nav__desktopMenu__item} key={route.href}>
              <Link href={route.href as any}>{route.label}</Link>
            </li>
          ))}
        </ul>
        <div className={styles.header__nav__side__area}>
          <Image
            src={sideareaBurger}
            alt='Sidearea icon'
            width={20}
            height={40}
          />
        </div>
      </nav>
    </header>
  );
};

export default Header;
