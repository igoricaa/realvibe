import Image from 'next/image';
import styles from './page.module.scss';
import Link from '@/components/UI/Link';
import { portfolio, Project } from '@/data';
import ContactSection from '@/components/ContactSection';
import ComingSoonIcon from '@/components/UI/icons/coming-soon';
import { useTranslations } from 'next-intl';

const Page = () => {
  const t = useTranslations('portfolio');

  return (
    <main className={styles.portfolio}>
      {portfolio.map((project: Project) => {
        const projectLink =
          project.noContent && project.link
            ? project.link
            : `/portfolio/${project.slug}`;

        return (
          <Link
            href={projectLink}
            className={styles.portfolio__item}
            external={project.noContent ? true : false}
            key={project.slug}
          >
            <article>
              <div className={styles.portfolio__item__image}>
                <Image
                  src={project.featuredImageList || project.featuredImage}
                  alt={project.title}
                  fill
                  sizes='(max-width: 1024px) 100vw, 50vw'
                  style={{ objectFit: 'cover' }}
                  priority
                />
              </div>
              <div className={styles.portfolio__item__info}>
                <h3 className={styles.portfolio__item__info__title}>
                  {project.title}
                </h3>
                <span className={styles.portfolio__item__info__category}>
                  {t(`${project.slug}.category`)}
                </span>
              </div>
            </article>
          </Link>
        );
      })}
      <div className={styles.portfolio__item}>
        <ComingSoonIcon className={styles.portfolio__comingSoon} />
      </div>

      <ContactSection />
    </main>
  );
};

export default Page;
