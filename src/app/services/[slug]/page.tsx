import { useTranslations } from 'next-intl';
import styles from './page.module.scss';
import Hero from '@/components/Services/Hero';
import AnimatedText from '@/components/UI/AnimatedText';
import OfferingItem from '@/components/Services/OfferingItem';
import React from 'react';
import { hasTranslation } from '@/utilities/utilities';
import ScaledImage from '@/components/Services/ScaledImage';
import ContactSection from '@/components/Services/ContactSection';

const services = [
  {
    slug: 'event-organization',
    numberOfOfferings: 8
  },
  {
    slug: 'film-production',
    numberOfOfferings: 14,
  },
  {
    slug: 'concepting-and-screening-ad-campaigns',
    numberOfOfferings: 10,
  },
  {
    slug: 'music-videos-production',
    numberOfOfferings: 8,
  },
];

export async function generateStaticParams() {
  return services.map((service) => ({
    slug: service.slug,
  }));
}

const ServicePage = ({ params: { slug } }: { params: { slug: string } }) => {
  const t = useTranslations(`services.${slug}`);

  const contactMessages = {
    title: t('contact.title'),
    subtitle: {
      one: t('contact.subtitle.one'),
      two: t('contact.subtitle.two'),
      three: t('contact.subtitle.three'),
      four: t('contact.subtitle.four'),
    },
    cta: t('contact.cta'),
  };

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
          {Array.from({
            length:
              services.find((service) => service.slug === slug)
                ?.numberOfOfferings || 0,
          }).map((_, index) => {
            if (slug !== 'music-videos-production' && index === 8) {
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

      <ContactSection messages={contactMessages} />
    </main>
  );
};

export default ServicePage;
