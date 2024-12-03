'use client';

import { useInView } from 'framer-motion';
import styles from '../../app/portfolio/[slug]/page.module.scss';
import { useRef } from 'react';
import { hasTranslation } from '@/utilities/utilities';
import { useTranslations } from 'next-intl';
import { Project } from '@/data';
import Image from 'next/image';

const positions = [
  'production',
  'producer',
  'director',
  'photoDirector',
  'artDirectorScenographer',
  'assistantScenographer',
  'costume',
  'sarfer',
  'photographer',
  'bts',
  'steadycam',
  'technics',
  'agencyextra',
  'extra',
];

const Content = ({ project, slug }: { project: Project; slug: string }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const t = useTranslations(`portfolio.${slug}`);

  return (
    <>
      <section className={styles.project__description}>
        <h2>{t('description.title')}</h2>
        <p>{t('description.text')}</p>
      </section>

      <section className={styles.project__gallery}>
        {project.images.map((image, index: number) => (
          <div
            key={index}
            className={`${styles.project__gallery__item} ${
              styles[`project__gallery__item__${index + 1}`]
            }`}
          >
            <Image
              src={image}
              alt={`RealVibe Studio - ${project.title}`}
              fill
              style={{ objectFit: 'cover' }}
            />
          </div>
        ))}
      </section>

      <section className={styles.project__challenge}>
        <h2>{t('challenge.title')}</h2>
        <p>{t('challenge.text')}</p>
      </section>

      <section className={styles.project__outcome}>
        <h2>{t('outcome.title')}</h2>
        <p>{t('outcome.text')}</p>
      </section>

      <section className={styles.project__team}>
        <h2>{t('team.title')}</h2>
        <div className={styles.project__team__list}>
          <ul>
            {positions.slice(0, positions.length / 2).map((position) => {
              if (hasTranslation(t, `team.list.${position}.title`, slug)) {
                return (
                  <li
                    key={position}
                    className={styles.project__team__list__item}
                  >
                    <span>{t(`team.list.${position}.title`)}:</span>{' '}
                    {t(`team.list.${position}.person`)}
                  </li>
                );
              }
              return null;
            })}
          </ul>
          <ul>
            {' '}
            {positions.slice(positions.length / 2).map((position) => {
              if (hasTranslation(t, `team.list.${position}.title`, slug)) {
                return (
                  <li
                    key={position}
                    className={styles.project__team__list__item}
                  >
                    <span>{t(`team.list.${position}.title`)}:</span>{' '}
                    {t(`team.list.${position}.person`)}
                  </li>
                );
              }
              return null;
            })}
          </ul>
        </div>
      </section>
    </>
  );
};

export default Content;
