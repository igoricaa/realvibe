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
  featuredImageList?: string;
  images?: string[];
  link?: string;
  noContent?: boolean;
};

export const portfolio: Project[] = [
  {
    title: 'Lutam',
    slug: 'lutam',
    featuredImage: '/portfolio/lutam/aca-lukas-lutam-cover.jpg',
    featuredImageList: '/portfolio/lutam/aca-lukas-lutam-cover-list.png',
    images: [
      '/portfolio/lutam/aca-lukas-lutam-1.jpg',
      '/portfolio/lutam/aca-lukas-lutam-2.jpg',
      '/portfolio/lutam/aca-lukas-lutam-3.jpg',
      '/portfolio/lutam/aca-lukas-lutam-4.jpg',
    ],
    link: 'https://www.youtube.com/watch?v=0icVmRYDFeA',
  },
  {
    title: 'Krik',
    slug: 'krik',
    featuredImage: '/portfolio/krik/aca-lukas-mira-skoric-krik-cover.png',
    featuredImageList:
      '/portfolio/krik/aca-lukas-mira-skoric-krik-cover-list.png',
    images: [
      '/portfolio/krik/aca-lukas-mira-skoric-krik-1.jpg',
      '/portfolio/krik/aca-lukas-mira-skoric-krik-2.jpg',
      '/portfolio/krik/aca-lukas-mira-skoric-krik-3.jpg',
      '/portfolio/krik/aca-lukas-mira-skoric-krik-4.jpg',
    ],
    link: 'https://www.youtube.com/watch?v=aTgPFJ4zJEA',
  },
  {
    title: 'Besprekorno loš',
    slug: 'besprekorno-los',
    featuredImage:
      '/portfolio/besprekorno-los/aca-lukas-besprekorno-los-cover.jpg',
    images: [
      '/portfolio/besprekorno-los/aca-lukas-besprekorno-los-1.jpg',
      '/portfolio/besprekorno-los/aca-lukas-besprekorno-los-2.jpg',
      '/portfolio/besprekorno-los/aca-lukas-besprekorno-los-3.jpg',
      '/portfolio/besprekorno-los/aca-lukas-besprekorno-los-4.jpg',
    ],
    link: 'https://www.youtube.com/watch?v=lvAgUlhllZ0',
  },
  {
    title: 'Duga',
    slug: 'duga',
    featuredImage: '/portfolio/duga/aca-lukas-duga-cover.jpg',
    featuredImageList: '/portfolio/duga/aca-lukas-duga-cover-list.png',
    images: [
      '/portfolio/duga/aca-lukas-duga-1.jpg',
      '/portfolio/duga/aca-lukas-duga-2.jpg',
      '/portfolio/duga/aca-lukas-duga-3.jpg',
      '/portfolio/duga/aca-lukas-duga-4.jpg',
    ],
    link: 'https://www.youtube.com/watch?v=qxuCWtaOVzI',
  },
  {
    title: 'Lenka',
    slug: 'lenka',
    featuredImage: '/portfolio/lenka/aca-lukas-lenka-cover.jpg',
    images: [
      '/portfolio/lenka/aca-lukas-lenka-1.jpg',
      '/portfolio/lenka/aca-lukas-lenka-2.jpg',
      '/portfolio/lenka/aca-lukas-lenka-3.jpg',
      '/portfolio/lenka/aca-lukas-lenka-4.jpg',
    ],
    link: 'https://www.youtube.com/watch?v=JyWTzMzmBoE',
  },
  {
    title: 'Najjači kad nemam',
    slug: 'najjaci-kad-nemam',
    featuredImage:
      '/portfolio/najjaci-kad-nemam/aca-lukas-najjaci-kad-nemam-cover.png',
    featuredImageList:
      '/portfolio/najjaci-kad-nemam/aca-lukas-najjaci-kad-nemam-cover-list.jpg',
    images: [
      '/portfolio/najjaci-kad-nemam/aca-lukas-najjaci-kad-nemam-1.jpg',
      '/portfolio/najjaci-kad-nemam/aca-lukas-najjaci-kad-nemam-2.jpg',
      '/portfolio/najjaci-kad-nemam/aca-lukas-najjaci-kad-nemam-3.jpg',
      '/portfolio/najjaci-kad-nemam/aca-lukas-najjaci-kad-nemam-4.jpg',
    ],
    link: 'https://www.youtube.com/watch?v=l8-iLPeR5CQ',
  },
  {
    title: 'Preko vetrova',
    slug: 'preko-vetrova',
    featuredImage: '/portfolio/preko-vetrova/aca-lukas-preko-vetrova-cover.jpg',
    images: [
      '/portfolio/preko-vetrova/aca-lukas-preko-vetrova-1.jpg',
      '/portfolio/preko-vetrova/aca-lukas-preko-vetrova-2.jpg',
      '/portfolio/preko-vetrova/aca-lukas-preko-vetrova-3.jpg',
      '/portfolio/preko-vetrova/aca-lukas-preko-vetrova-4.jpg',
    ],
    link: 'https://www.youtube.com/watch?v=0EG3ITYIwiw',
  },
  {
    title: 'Branim se',
    slug: 'branim-se',
    featuredImage: '/portfolio/branim-se/mira-skoric-branim-se-cover.png',
    featuredImageList:
      '/portfolio/branim-se/mira-skoric-branim-se-cover-list.jpg',
    images: [
      '/portfolio/branim-se/mira-skoric-branim-se-1.jpg',
      '/portfolio/branim-se/mira-skoric-branim-se-2.jpg',
      '/portfolio/branim-se/mira-skoric-branim-se-3.jpg',
      '/portfolio/branim-se/mira-skoric-branim-se-4.jpg',
    ],
    link: 'https://www.youtube.com/watch?v=pZQjRabqIZ4',
  },
  {
    title: 'Udisaj',
    slug: 'udisaj',
    featuredImage: '/portfolio/udisaj/aca-lukas-udisaj-cover.jpg',
    featuredImageList: '/portfolio/udisaj/aca-lukas-udisaj-cover-list.png',
    images: [
      '/portfolio/udisaj/aca-lukas-udisaj-1.jpg',
      '/portfolio/udisaj/aca-lukas-udisaj-2.jpg',
      '/portfolio/udisaj/aca-lukas-udisaj-3.jpg',
      '/portfolio/udisaj/aca-lukas-udisaj-4.jpg',
    ],
    link: 'https://www.youtube.com/watch?v=TT9cUIxlPTo',
  },
  {
    title: 'Kakao',
    slug: 'kakao',
    featuredImage: '/portfolio/kakao/aca-lukas-kakao-cover.jpg',
    featuredImageList: '/portfolio/kakao/aca-lukas-kakao-cover-list.png',
    images: [
      '/portfolio/kakao/aca-lukas-kakao-1.jpg',
      '/portfolio/kakao/aca-lukas-kakao-2.jpg',
      '/portfolio/kakao/aca-lukas-kakao-3.jpg',
      '/portfolio/kakao/aca-lukas-kakao-4.jpg',
    ],
    link: 'https://www.youtube.com/watch?v=WUjY1gtoIXE',
  },
  {
    title: 'Klovn',
    slug: 'klovn',
    featuredImage: '/portfolio/klovn/aca-lukas-klovn-cover.png',
    featuredImageList: '/portfolio/klovn/aca-lukas-klovn-cover-list.png',
    images: [
      '/portfolio/klovn/aca-lukas-klovn-1.jpg',
      '/portfolio/klovn/aca-lukas-klovn-2.jpg',
      '/portfolio/klovn/aca-lukas-klovn-3.jpg',
      '/portfolio/klovn/aca-lukas-klovn-4.jpg',
    ],
    link: 'https://www.youtube.com/watch?v=VQamJjOpRs8',
  },
  {
    title: 'Thunder Top Team',
    slug: 'thunder-top-team',
    featuredImage: '/portfolio/ttt/thunder-top-team-otvaranje-cover.jpg',
    featuredImageList: '/portfolio/ttt/thunder-top-team-otvaranje-cover.jpg',
    images: [
      '/portfolio/ttt/thunder-top-team-otvaranje-1.jpg',
      '/portfolio/ttt/thunder-top-team-otvaranje-2.jpg',
      '/portfolio/ttt/thunder-top-team-otvaranje-3.jpg',
      '/portfolio/ttt/thunder-top-team-otvaranje-4.jpg',
    ],
  },
  {
    title: 'Jedno nebo',
    slug: 'jedno-nebo',
    featuredImage: '/portfolio/jedno-nebo/aca-lukas-jedno-nebo-cover-list.png',
    featuredImageList:
      '/portfolio/jedno-nebo/aca-lukas-jedno-nebo-cover-list.png',
    link: 'https://www.youtube.com/watch?v=LHqf-CRJcDc',
    noContent: true,
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
