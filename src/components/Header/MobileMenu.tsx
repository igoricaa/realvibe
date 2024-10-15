'use client';

import styles from './MobileMenu.module.scss';
import BurgerIcon from '../UI/icons/BurgerIcon';
import { useState } from 'react';
import XIcon from '../UI/icons/XIcon';
import LocaleSwitcher from '../UI/LocaleSwitcher';
import HeaderLogo from './HeaderLogo';
import ThemeSwitcher from '../UI/ThemeSwitcher';
import { useTranslations } from 'next-intl';
import Link from '../UI/Link';
import Button from '../UI/Button';
import { TextFitContainer } from '../UI/TextFitContainer';

const MobileMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const t = useTranslations('nav.menu');

  const toggleMenu = () => {
    document.body.classList.toggle('noscroll');
    setIsOpen(!isOpen);
  };

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
    <nav className={styles.mobileMenu} data-lenis-prevent>
      <div
        className={`${styles.mobileMenu__menuWrapper} ${
          isOpen ? styles.mobileMenu__menuWrapper__open : ''
        }`}
      >
        <div className={styles.mobileMenu__body}>
          <div className={styles.mobileMenu__close}>
            <XIcon onClick={toggleMenu} />
          </div>
          <div className={styles.mobileMenu__localeSwitcher}>
            <LocaleSwitcher />
          </div>

          <HeaderLogo />

          <div className={styles.mobileMenu__themeSwitcher}>
            <ThemeSwitcher />
          </div>

          <ul className={styles.mobileMenu__menu}>
            {routes.map((route, index) => {
              if (route.hasSubmenu) {
                return (
                  <li
                    className={`${styles.mobileMenu__menu__item} ${
                      styles.mobileMenu__menu__dropdownItem
                    } ${isDropdownOpen ? styles.active : ''}`}
                    key={route.label}
                    onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                  >
                    <span>{route.label}</span>
                    <ul
                      className={`${
                        styles.mobileMenu__menu__dropdownItem__dropdown
                      } ${
                        isDropdownOpen
                          ? styles.mobileMenu__menu__dropdownItem__dropdown__open
                          : ''
                      }`}
                    >
                      {route.submenu.map((subroute, subindex) => {
                        return (
                          <li key={subroute.label}>
                            <div
                              className={`${styles.mobileMenu__menu__item} ${styles.mobileMenu__menu__dropdownItem__dropdown__item}`}
                              onClick={toggleMenu}
                            >
                              <Link href={subroute.href as any}>
                                {subroute.label}
                              </Link>
                            </div>
                            {subindex !== 2 && (
                              <div
                                className={
                                  styles.mobileMenu__menu__dropdownItem__dropdown__separator
                                }
                              />
                            )}
                          </li>
                        );
                      })}
                    </ul>
                  </li>
                );
              } else {
                return (
                  <li
                    className={`${styles.mobileMenu__menu__item} ${
                      isDropdownOpen && index === routes.length - 1
                        ? styles.mobileMenu__menu__item__translated
                        : ''
                    }`}
                    key={route.label}
                    onClick={toggleMenu}
                  >
                    <Link href={route.href as any}>{route.label}</Link>
                  </li>
                );
              }
            })}
          </ul>
        </div>
        <div
          className={`${styles.mobileMenu__footer} ${
            isDropdownOpen ? styles.mobileMenu__footer__translated : ''
          }`}
        >
          <TextFitContainer>{t('mobile.title.one')}</TextFitContainer>
          <TextFitContainer>{t('mobile.title.two')}</TextFitContainer>
          <p className={styles.mobileMenu__footer__subtitle}>
            {t('mobile.subtitle.one')} <span>{t('mobile.subtitle.two')}</span>{' '}
            {t('mobile.subtitle.three')}{' '}
            <span>{t('mobile.subtitle.four')}</span>
          </p>
          <Button href='/contact' onClick={toggleMenu} variant='secondary'>
            <span>{t('mobile.cta')}</span>
          </Button>
        </div>
      </div>
      <div className={styles.mobileMenu__burger}>
        <BurgerIcon onClick={toggleMenu} />
      </div>
    </nav>
  );
};

export default MobileMenu;
