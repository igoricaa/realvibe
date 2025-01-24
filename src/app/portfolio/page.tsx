import Image from 'next/image';
import styles from './page.module.scss';
import Link from '@/components/UI/Link';
import { portfolio, Project } from '@/data';
import ContactSection from '@/components/ContactSection';
import ComingSoonIcon from '@/components/UI/icons/coming-soon';

const Page = () => {
  return (
    <main className={styles.portfolio}>
      {portfolio.map((project: Project) => (
        <Link
          href={`/portfolio/${project.slug}`}
          className={styles.portfolio__item}
          key={project.slug}
        >
          <article>
            <div className={styles.portfolio__item__image}>
              <Image
                src={project.featuredImage}
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
                {project.category}
              </span>
            </div>
          </article>
        </Link>
      ))}
      <div className={styles.portfolio__item}>
        <ComingSoonIcon className={styles.portfolio__comingSoon} />
      </div>

      <ContactSection />
    </main>
  );
};

export default Page;
