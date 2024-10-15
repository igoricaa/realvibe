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
  const t = useTranslations('nav.menu');

  const toggleMenu = () => {
    document.body.classList.toggle('noscroll');
    setIsOpen(!isOpen);
  };

  const routes = [
    { href: '/', label: t('home') },
    { href: '/#about-us', label: t('about') },
    { href: '/services/event-organization', label: t('events') },
    { href: '/services/film-production', label: t('video-production') },
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
            {routes.map((route) => (
              <li
                className={styles.mobileMenu__menu__item}
                key={route.href}
                onClick={toggleMenu}
              >
                <Link href={route.href as any}>{route.label}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div className={styles.mobileMenu__footer}>
          <TextFitContainer>{t('mobile.title.one')}</TextFitContainer>
          <TextFitContainer>{t('mobile.title.two')}</TextFitContainer>
          {/* <h2 className={styles.mobileMenu__footer__title}>
            <span>{t('mobile.title.one')}</span>
            <span>{t('mobile.title.two')}</span>
          </h2> */}
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
