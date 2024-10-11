import { useTranslations } from 'next-intl';
import styles from './page.module.scss';

const services = [
  {
    slug: 'event-organization',
  },
  {
    slug: 'video-production',
  },
  {
    slug: 'concepting-and-screening-ad-campaigns',
  },
  {
    slug: 'music-videos-production',
  },
];

export async function generateStaticParams() {
  return services.map((service) => ({
    slug: service.slug,
  }));
}

const ServicePage = ({ params }: { params: { slug: string } }) => {
  const t = useTranslations(`services.${params.slug}`);

  return <main className={styles.service}></main>;
};

export default ServicePage;
