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

export type ProjectTeam = {
  name: string;
  role: string;
};

export type Project = {
  title: string;
  slug: string;
  featuredImage: string;
  category: string;
  images: string[];
  // description: {
  //   title: string;
  //   text: string;
  // };
  // challenge: string;
  // outcome: string;
  // team: any;
};

export const portfolio: Project[] = [
  {
    title: 'Lutam',
    slug: 'lutam',
    featuredImage: '/portfolio/lutam/aca-lukas-lutam-cover.jpg',
    category: 'Video Production',
    images: [
      '/portfolio/lutam/aca-lukas-lutam-1.jpg',
      '/portfolio/lutam/aca-lukas-lutam-2.jpg',
      '/portfolio/lutam/aca-lukas-lutam-3.jpg',
      '/portfolio/lutam/aca-lukas-lutam-4.jpg',
    ],
  },
  {
    title: 'Krik',
    slug: 'krik',
    featuredImage: '/portfolio/krik/aca-lukas-mira-skoric-krik-cover.jpg',
    category: 'Video Production',
    images: [
      '/portfolio/krik/aca-lukas-mira-skoric-krik-1.jpg',
      '/portfolio/krik/aca-lukas-mira-skoric-krik-2.jpg',
      '/portfolio/krik/aca-lukas-mira-skoric-krik-3.jpg',
      '/portfolio/krik/aca-lukas-mira-skoric-krik-4.jpg',
    ],
  },
  {
    title: 'Besprekorno loš',
    slug: 'besprekorno-los',
    featuredImage:
      '/portfolio/besprekorno-los/aca-lukas-besprekorno-los-cover.jpg',
    category: 'Video Production',
    images: [
      '/portfolio/besprekorno-los/aca-lukas-besprekorno-los-1.jpg',
      '/portfolio/besprekorno-los/aca-lukas-besprekorno-los-2.jpg',
      '/portfolio/besprekorno-los/aca-lukas-besprekorno-los-3.jpg',
      '/portfolio/besprekorno-los/aca-lukas-besprekorno-los-4.jpg',
    ],
  },
  {
    title: 'Duga',
    slug: 'duga',
    featuredImage: '/portfolio/duga/aca-lukas-duga-cover.jpg',
    category: 'Video Production',
    images: [
      '/portfolio/duga/aca-lukas-duga-1.jpg',
      '/portfolio/duga/aca-lukas-duga-2.jpg',
      '/portfolio/duga/aca-lukas-duga-3.jpg',
      '/portfolio/duga/aca-lukas-duga-4.jpg',
    ],
  },
  {
    title: 'Lenka',
    slug: 'lenka',
    featuredImage: '/portfolio/lenka/aca-lukas-lenka-cover.jpg',
    category: 'Video Production',
    images: [
      '/portfolio/lenka/aca-lukas-lenka-1.jpg',
      '/portfolio/lenka/aca-lukas-lenka-2.jpg',
      '/portfolio/lenka/aca-lukas-lenka-3.jpg',
      '/portfolio/lenka/aca-lukas-lenka-4.jpg',
    ],
  },
  {
    title: 'Najjači kad nemam',
    slug: 'najjaci-kad-nemam',
    featuredImage:
      '/portfolio/najjaci-kad-nemam/aca-lukas-najjaci-kad-nemam-cover.jpg',
    category: 'Video Production',
    images: [
      '/portfolio/najjaci-kad-nemam/aca-lukas-najjaci-kad-nemam-1.jpg',
      '/portfolio/najjaci-kad-nemam/aca-lukas-najjaci-kad-nemam-2.jpg',
      '/portfolio/najjaci-kad-nemam/aca-lukas-najjaci-kad-nemam-3.jpg',
      '/portfolio/najjaci-kad-nemam/aca-lukas-najjaci-kad-nemam-4.jpg',
    ],
  },
  {
    title: 'Preko vetrova',
    slug: 'preko-vetrova',
    featuredImage: '/portfolio/preko-vetrova/aca-lukas-preko-vetrova-cover.jpg',
    category: 'Video Production',
    images: [
      '/portfolio/preko-vetrova/aca-lukas-preko-vetrova-1.jpg',
      '/portfolio/preko-vetrova/aca-lukas-preko-vetrova-2.jpg',
      '/portfolio/preko-vetrova/aca-lukas-preko-vetrova-3.jpg',
      '/portfolio/preko-vetrova/aca-lukas-preko-vetrova-4.jpg',
    ],
  },
];

export const positions = [
  'production',
  'producer',
  'photoDirector',
  'videoDirectors',
  'artDirectorScenographer',
  'setDecorator',
  'cameraOperator',
  'dancer',
  'actor',
  'trumpet',
  'assistantScenographer',
  'costume',
  'fashionDesigner',
  'stylist',
  'hairStylist',
  'gaffer',
  'sarfer',
  'photographer',
  'bts',
  'cameraRental',
  'steadycam',
  'technics',
  'agencyextra',
  'dancers',
  'guitarists',
  'woman',
  'productionAssistant',
  'extra',
  'lenka',
  'tamburaPlayers',
  'tavernGuests',
];
