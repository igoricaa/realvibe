'use client';

import { useInView } from 'framer-motion';
import styles from '../../app/portfolio/[slug]/page.module.scss';
import { useRef } from 'react';
import { hasTranslation } from '@/utilities/utilities';
import { useTranslations } from 'next-intl';
import { Project } from '@/data';
import Image from 'next/image';
import { positions } from '@/data';

const Content = ({ project, slug }: { project: Project; slug: string }) => {
  const descriptionRef = useRef(null);
  const galleryRef = useRef(null);
  const challengeRef = useRef(null);
  const outcomeRef = useRef(null);
  const teamRef = useRef(null);
  const t = useTranslations(`portfolio.${slug}`);
  const isInViewDescription = useInView(descriptionRef, {
    once: true,
    amount: 0.1,
  });
  const isInViewGallery = useInView(galleryRef, {
    once: true,
    amount: 0.1,
  });
  const isInViewChallenge = useInView(challengeRef, {
    once: true,
    amount: 0.1,
  });
  const isInViewOutcome = useInView(outcomeRef, {
    once: true,
    amount: 0.1,
  });
  const isInViewTeam = useInView(teamRef, {
    once: true,
    amount: 0.1,
  });

  return (
    <>
      <section
        ref={descriptionRef}
        className={styles.project__description}
        style={{
          transform: isInViewDescription ? 'translateY(0)' : 'translateY(40px)',
          opacity: isInViewDescription ? 1 : 0,
          filter: isInViewDescription ? 'blur(0px)' : 'blur(4px)',
          transition: `all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.2s`,
        }}
      >
        <h2>{t('description.title')}</h2>
        <p>{t('description.text')}</p>
      </section>

      <section
        ref={galleryRef}
        className={styles.project__gallery}
        style={{
          transform: isInViewGallery ? 'translateY(0)' : 'translateY(40px)',
          opacity: isInViewGallery ? 1 : 0,
          filter: isInViewGallery ? 'blur(0px)' : 'blur(4px)',
          transition: `all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.4s`,
        }}
      >
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

      <section
        ref={challengeRef}
        className={styles.project__challenge}
        style={{
          transform: isInViewChallenge ? 'translateY(0)' : 'translateY(40px)',
          opacity: isInViewChallenge ? 1 : 0,
          filter: isInViewChallenge ? 'blur(0px)' : 'blur(4px)',
          transition: `all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.4s`,
        }}
      >
        <h2>{t('challenge.title')}</h2>
        <p>{t('challenge.text')}</p>
      </section>

      <section
        ref={outcomeRef}
        className={styles.project__outcome}
        style={{
          transform: isInViewOutcome ? 'translateY(0)' : 'translateY(40px)',
          opacity: isInViewOutcome ? 1 : 0,
          filter: isInViewOutcome ? 'blur(0px)' : 'blur(4px)',
          transition: `all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.6s`,
        }}
      >
        <h2>{t('outcome.title')}</h2>
        <p>{t('outcome.text')}</p>
      </section>

      <section
        ref={teamRef}
        className={styles.project__team}
        style={{
          transform: isInViewTeam ? 'translateY(0)' : 'translateY(40px)',
          opacity: isInViewTeam ? 1 : 0,
          filter: isInViewTeam ? 'blur(0px)' : 'blur(4px)',
          transition: `all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.8s`,
        }}
      >
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
