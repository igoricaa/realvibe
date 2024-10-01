import { defineRouting } from 'next-intl/routing';
import { createLocalizedPathnamesNavigation } from 'next-intl/navigation';

export const routing = defineRouting({
  locales: ['en', 'sr'],
  defaultLocale: 'en',
  pathnames: {
    '/': '/',
    '/o-nama': {
      en: '/about-us',
      sr: '/o-nama',
    },
    '/kontakt': {
      en: '/contact',
      sr: '/kontakt',
    },
    '/nasi-radovi': {
      en: '/our-work',
      sr: '/nasi-radovi',
    },
    // '/nasi-radovi/[...projectSlug]': {
    //   en: '/our-work/[...projectSlug]',
    //   sr: '/nasi-radovi/[...projectSlug]',
    // },
    '[...rest]': '[...rest]',
  },
});

// export type Pathnames = keyof typeof routing.pathnames;
// export type Locale = (typeof routing.locales)[number];

// Lightweight wrappers around Next.js' navigation APIs
// that will consider the routing configuration
export const { Link, redirect, usePathname, useRouter } =
  createLocalizedPathnamesNavigation(routing);
