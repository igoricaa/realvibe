import { useTranslations } from 'next-intl';
import styles from './page.module.scss';
import Hero from '@/components/Services/Hero';
import AnimatedText from '@/components/UI/AnimatedText';

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

  return (
    <main className={styles.service}>
      <Hero slug={params.slug} />
      <div className={styles.description}>
        <AnimatedText>{t('description.one')}</AnimatedText>
      </div>

      <div className={styles.offering}>
        <h2>{t('offering.title')}</h2>
        <div className={styles.offering__list}></div>
      </div>
    </main>
  );
};

export default ServicePage;
