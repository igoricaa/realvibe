import { UrlObject } from 'url';

type MenuItem = {
  label: string;
  href: string;
};

export const routes: MenuItem[] = [
  {
    label: 'Home',
    href: '/',
  },
  {
    label: 'About Us',
    href: '/about-us',
  },
  {
    label: 'Event Organization',
    href: '/event-organization',
  },
  {
    label: 'Video Production',
    href: '/video-production',
  },
  {
    label: 'Contact',
    href: '/contact',
  },
];
