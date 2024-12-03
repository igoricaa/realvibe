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
  description: {
    title: string;
    text: string;
  };
  challenge: string;
  outcome: string;
  team: any;
};

export const portfolio: Project[] = [
  {
    title: 'Lutam',
    slug: 'lutam',
    featuredImage: '/portfolio/lutam.png',
    category: 'Video Production',
    images: [
      '/portfolio/lutam/lutam-1.png',
      '/portfolio/lutam/lutam-2.png',
      '/portfolio/lutam/lutam-3.png',
      '/portfolio/lutam/lutam-4.png',
    ],
    description: {
      title: 'About the "Lutam" project',
      text: 'At RealVibe, we pride ourselves on being your comprehensive solution for all event organization and audio-visual production needs. Our extensive range of services guarantees we have the expertise and resources to deliver any project seamlessly, meeting all your event organization and audio-visual production needs. From the initial planning stages ',
    },
    challenge:
      'At RealVibe, we pride ourselves on being your comprehensive solution for all event organization and audio-visual production needs. Our extensive range of services guarantees we have the expertise and resources to deliver any project seamlessly, meeting all your event organization and audio-visual production needs. From the initial planning stages ',
    outcome:
      'At RealVibe, we pride ourselves on being your comprehensive solution for all event organization and audio-visual production needs. Our extensive range of services guarantees we have the expertise and resources to deliver any project seamlessly, meeting all your event organization and audio-visual production needs. From the initial planning stages ',
    team: [],
  },
  {
    title: 'Krik',
    slug: 'krik',
    featuredImage: '/portfolio/krik.png',
    category: 'Video Production',
    images: [],
    description: {
      title: 'About the "Krik" project',
      text: 'At RealVibe, we pride ourselves on being your comprehensive solution for all event organization and audio-visual production needs. Our extensive range of services guarantees we have the expertise and resources to deliver any project seamlessly, meeting all your event organization and audio-visual production needs. From the initial planning stages ',
    },
    challenge:
      'At RealVibe, we pride ourselves on being your comprehensive solution for all event organization and audio-visual production needs. Our extensive range of services guarantees we have the expertise and resources to deliver any project seamlessly, meeting all your event organization and audio-visual production needs. From the initial planning stages ',
    outcome:
      'At RealVibe, we pride ourselves on being your comprehensive solution for all event organization and audio-visual production needs. Our extensive range of services guarantees we have the expertise and resources to deliver any project seamlessly, meeting all your event organization and audio-visual production needs. From the initial planning stages ',
    team: [],
  },
  {
    title: 'Besprekorno loš',
    slug: 'besprekorno-los',
    featuredImage: '/portfolio/besprekorno-los.png',
    category: 'Video Production',
    images: [],
    description: {
      title: 'About the "Besprekorno loš" project',
      text: 'At RealVibe, we pride ourselves on being your comprehensive solution for all event organization and audio-visual production needs. Our extensive range of services guarantees we have the expertise and resources to deliver any project seamlessly, meeting all your event organization and audio-visual production needs. From the initial planning stages ',
    },
    challenge:
      'At RealVibe, we pride ourselves on being your comprehensive solution for all event organization and audio-visual production needs. Our extensive range of services guarantees we have the expertise and resources to deliver any project seamlessly, meeting all your event organization and audio-visual production needs. From the initial planning stages ',
    outcome:
      'At RealVibe, we pride ourselves on being your comprehensive solution for all event organization and audio-visual production needs. Our extensive range of services guarantees we have the expertise and resources to deliver any project seamlessly, meeting all your event organization and audio-visual production needs. From the initial planning stages ',
    team: [],
  },
];
