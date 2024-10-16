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
    href: '/#about-us',
  },
  {
    label: 'Event Organization',
    href: '/services/event-organization',
  },
  {
    label: 'Video Production',
    href: '/services/film-production',
  },
  {
    label: 'Contact',
    href: '/contact',
  },
];

export type Service = {
  title: string;
  icon: string;
  image: string;
};

export const services: Service[] = [
  {
    title: 'Event Organization',
    icon: '/services/events.svg',
    image: '/services/event-organization/2.png',
  },
  {
    title: 'CONCEPTING AND SCREENING AD CAMPAIGNS',
    icon: '/services/ad-campaigns.svg',
    image: '/services/concepting-and-screening-ad-campaigns/3.png',
  },
  {
    title: 'FILM PRODUCTION',
    icon: '/services/film-production.svg',
    image: '/services/film-production/2.png',
  },
  {
    title: 'PRODUCING MUSIC VIDEOS',
    icon: '/services/music-videos.svg',
    image: '/services/music-videos-production/1.png',
  },
];
