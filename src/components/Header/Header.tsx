import Image from 'next/image';
import styles from './Header.module.scss';
import logo from '@/../public/realvibe-logo.svg';
import { Link } from '@/i18n/routing';
import { useTranslations } from 'next-intl';
import burger from '@/../public/burger.svg';
import SideArea from './SideArea';

const Header = () => {
  const t = useTranslations('nav.menu');

  const routes = [
    { href: '/', label: t('home') },
    { href: '/about', label: t('about') },
    { href: '/events', label: t('events') },
    { href: '/video-production', label: t('video-production') },
    { href: '/contact', label: t('contact') },
  ];

  return (
    <header id='header' className={styles.header}>
      <div className={styles.header__logoWrapper}>
        <Image src={logo} alt='Real Vibe Production logo' fill priority />
      </div>
      <nav className={styles.header__nav}>
        <ul className={styles.header__nav__desktopMenu}>
          {routes.map((route) => (
            <li
              className={styles.header__nav__desktopMenu__item}
              key={route.href}
            >
              <Link href={route.href as any}>{route.label}</Link>
            </li>
          ))}
        </ul>
        <SideArea />
      </nav>
      <nav className={styles.header__nav__mobile}>
        <div className={styles.header__nav__mobile__menuWrapper}>
          <ul className={styles.header__nav__mobile__menu}>
            {routes.map((route) => (
              <li
                className={styles.header__nav__mobile__menu__item}
                key={route.href}
              >
                <Link href={route.href as any}>{route.label}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div className={styles.header__nav__mobile__burger}>
          <Image src={burger} alt='Burger icon' fill priority />
        </div>
      </nav>
    </header>
  );
};

export default Header;
