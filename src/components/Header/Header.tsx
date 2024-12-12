import styles from './Header.module.scss';
import { useTranslations } from 'next-intl';
import SideArea from './SideArea';
import ThemeSwitcher from '../UI/ThemeSwitcher';
import LocaleSwitcher from '../UI/LocaleSwitcher';
import MobileMenu from './MobileMenu';
import HeaderLogo from './HeaderLogo';
import Link from '../UI/Link';

const Header = () => {
  const t = useTranslations('nav.menu');

  const routes = [
    { href: '/', label: t('home') },
    { href: '/#about-us', label: t('about') },
    { href: '/services/event-organization', label: t('events') },
    {
      label: t('video-production'),
      hasSubmenu: true,
      submenu: [
        { href: '/services/film-production', label: t('film-production') },
        {
          href: '/services/concepting-and-screening-ad-campaigns',
          label: t('ad-campaigns'),
        },
        {
          href: '/services/music-videos-production',
          label: t('music-videos-production'),
        },
      ],
    },
    { href: '/contact', label: t('contact') },
  ];

  return (
    <header id='header' className={styles.header}>
      <div className={styles.header__helper__wrapper}>
        <HeaderLogo />
        <ThemeSwitcher />
      </div>
      <nav className={styles.header__nav}>
        <ul className={styles.header__nav__desktopMenu}>
          {routes.map((route) => {
            if (route.hasSubmenu) {
              return (
                <li
                  className={`${styles.header__nav__desktopMenu__item} ${styles.header__nav__desktopMenu__dropdownItem}`}
                  key={route.label}
                >
                  <span>{route.label}</span>
                  <ul
                    className={
                      styles.header__nav__desktopMenu__dropdownItem__dropdown
                    }
                  >
                    {route.submenu.map((subroute) => {
                      return (
                        <li
                          key={subroute.href}
                          className={`${styles.header__nav__desktopMenu__item} ${styles.header__nav__desktopMenu__dropdownItem__dropdown__item}`}
                        >
                          <Link href={subroute.href as any}>
                            {subroute.label}
                          </Link>
                        </li>
                      );
                    })}
                  </ul>
                </li>
              );
            } else {
              return (
                <li
                  className={styles.header__nav__desktopMenu__item}
                  key={route.href}
                >
                  <Link href={route.href as any}>{route.label}</Link>
                </li>
              );
            }
          })}
        </ul>
        <LocaleSwitcher />
        <SideArea />
      </nav>
      <MobileMenu />
    </header>
  );
};

export default Header;
