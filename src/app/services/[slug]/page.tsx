import { useTranslations } from 'next-intl';
import styles from './page.module.scss';
import Hero from '@/components/Services/Hero';
import AnimatedText from '@/components/UI/AnimatedText';
import OfferingItem from '@/components/Services/OfferingItem';
import React from 'react';

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

const ServicePage = ({ params: { slug } }: { params: { slug: string } }) => {
  const t = useTranslations(`services.${slug}`);
  const numberOfOfferings = slug === 'event-organization' ? 10 : 8;

  return (
    <main className={styles.service}>
      <Hero slug={slug} />
      <div className={styles.description}>
        <AnimatedText>{t('description.one')}</AnimatedText>
      </div>

      <div className={styles.offering}>
        <h2>{t('offering.title')}</h2>
        <div className={styles.offering__list}>
          {Array.from({ length: numberOfOfferings }).map((_, index) => {
            if (slug === 'event-organization' && index === 8) {
              return (
                <>
                  <OfferingItem
                    index={index}
                    messages={{
                      title: {
                        one: t(`offering.offering-${index + 1}.title.one`),
                        two: t(`offering.offering-${index + 1}.title.two`),
                      },
                      description: t(
                        `offering.offering-${index + 1}.description`
                      ),
                    }}
                  />
                  <div className={styles.offering__spacer} />
                  <div className={styles.offering__spacer} />
                </>
              );
            }

            return (
              <OfferingItem
                key={index}
                index={index}
                messages={{
                  title: {
                    one: t(`offering.offering-${index + 1}.title.one`),
                    two: t(`offering.offering-${index + 1}.title.two`),
                  },
                  description: t(`offering.offering-${index + 1}.description`),
                }}
              />
            );
          })}
        </div>
      </div>
    </main>
  );
};

export default ServicePage;
