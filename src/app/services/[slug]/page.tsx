import { useTranslations } from 'next-intl';
import styles from './page.module.scss';
import Hero from '@/components/Services/Hero';
import AnimatedText from '@/components/UI/AnimatedText';
import OfferingItem from '@/components/Services/OfferingItem';
import React from 'react';
import Button from '@/components/UI/Button';
import { Link } from 'next-view-transitions';
import { hasTranslation } from '@/utilities/utilities';
import ScaledImage from '@/components/Services/ScaledImage';

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
  const numberOfOfferings =
    slug === 'event-organization' ? 10 : slug === 'video-production' ? 16 : 12;

  return (
    <main className={styles.service}>
      <Hero slug={slug} />
      <div className={styles.service__description}>
        <AnimatedText>{t('description.one')}</AnimatedText>
        {hasTranslation('description.two', t, slug) && (
          <ScaledImage slug={slug} />
        )}
        {hasTranslation('description.two', t, slug) && (
          <AnimatedText>{t('description.two')}</AnimatedText>
        )}
      </div>

      <div className={styles.service__offering}>
        <h2>{t('offering.title')}</h2>
        <div className={styles.service__offering__list}>
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
                  <div className={styles.service__offering__spacer} />
                  <div className={styles.service__offering__spacer} />
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

      <div className={styles.service__contact}>
        <h2 className={styles.service__contact__title}>{t('contact.title')}</h2>
        <p className={styles.service__contact__subtitle}>
          {t('contact.subtitle.one')}
          <span>{t('contact.subtitle.two')}</span>
          {t('contact.subtitle.three')}
          <span>{t('contact.subtitle.four')}</span>
        </p>
        <Button>
          <Link href={'/contact'}>{t('contact.cta')}</Link>
        </Button>
      </div>
    </main>
  );
};

export default ServicePage;
