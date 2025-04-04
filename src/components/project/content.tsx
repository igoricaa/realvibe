'use client';

import { useInView } from 'framer-motion';
import styles from '../../app/portfolio/[slug]/page.module.scss';
import { useRef } from 'react';
import { hasTranslationText } from '@/utilities/utilities';
import { Project } from '@/data';
import Image from 'next/image';
import { positions } from '@/data';
import Button from '../UI/Button';

const Content = ({
  project,
  translations,
}: {
  project: Project;
  translations: any;
  slug: string;
}) => {
  const descriptionRef = useRef(null);
  const galleryRef = useRef(null);
  const challengeRef = useRef(null);
  const outcomeRef = useRef(null);
  const teamRef = useRef(null);
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
        <div className={styles.project__description__title}>
          <h2>{translations.description.title}</h2>
          {project.link && (
            <Button href={project.link} external>
              <span>Play Video</span>
            </Button>
          )}
        </div>
        {translations.description.text.map((text: string, index: number) => (
          <p key={index}>{text}</p>
        ))}
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
        {project.images &&
          project.images.map((image, index: number) => (
            <div
              key={index}
              className={`${styles.project__gallery__item} ${
                styles[`project__gallery__item__${index + 1}`]
              }`}
            >
              <Image
                src={image}
                alt={`RealVibe Studio - ${project.title}`}
                quality={100}
                sizes={`${[0, 3].includes(index) ? '70vw' : '30vw'}`}
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
        <h2>{translations.challenge.title}</h2>
        <p>{translations.challenge.text}</p>
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
        <h2>{translations.outcome.title}</h2>
        <p>{translations.outcome.text}</p>
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
        <h2>{translations.team.title}</h2>
        <div className={styles.project__team__list}>
          <ul>
            {positions.slice(0, positions.length / 2).map((position) => {
              if (hasTranslationText(translations.team.list, `${position}`)) {
                return (
                  <li
                    key={position}
                    className={styles.project__team__list__item}
                  >
                    <span>{translations.team.list[position].title}:</span>{' '}
                    {translations.team.list[position].person}
                  </li>
                );
              }
              return null;
            })}
          </ul>
          <ul>
            {' '}
            {positions.slice(positions.length / 2).map((position) => {
              if (hasTranslationText(translations.team.list, `${position}`)) {
                return (
                  <li
                    key={position}
                    className={styles.project__team__list__item}
                  >
                    <span>{translations.team.list[position].title}:</span>{' '}
                    {translations.team.list[position].person}
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
