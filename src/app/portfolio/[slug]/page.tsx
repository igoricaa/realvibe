import styles from './page.module.scss';
import { portfolio, Project } from '@/data';
import Image from 'next/image';
import Link from '@/components/UI/Link';
import ListIcon from '@/components/UI/icons/list-icon';
import ArrowIcon from '@/components/UI/icons/ArrowIcon';
import { useTranslations } from 'next-intl';
import Content from '@/components/project/content';
import { getTranslations } from '@/utilities/utilities';

export async function generateStaticParams() {
  return portfolio.map((project: Project) => ({
    slug: project.slug,
  }));
}

const Page = ({ params: { slug } }: { params: { slug: string } }) => {
  const t = useTranslations(`portfolio.${slug}`);

  const project = portfolio.find((project: Project) => project.slug === slug);

  if (!project) {
    return <div>Project not found</div>;
  }

  const translations = getTranslations(t, slug);

  const nextProject =
    portfolio.find(
      (_, index: number) => index === portfolio.indexOf(project) + 1
    ) || portfolio[0];

  return (
    <main className={styles.project}>
      <section className={styles.project__intro}>
        <div className={styles.project__intro__info}>
          <span className={styles.project__intro__info__caseStudy}>
            {t('caseStudy')}
          </span>
          <h1 className={styles.project__intro__info__title}>{t('title')}</h1>
          <h4 className={styles.project__intro__info__subtitle}>
            {t('subtitle.one')}
            <span>{t('subtitle.two')}</span>
          </h4>
        </div>
        <div className={styles.project__intro__image}>
          <Image
            src={project.featuredImage}
            alt={`RealVibe Studio - ${project.title}`}
            fill
            priority
            sizes='100vw'
            quality={100}
            style={{ objectFit: 'cover' }}
          />
        </div>
      </section>

      <Content project={project} translations={translations} slug={slug} />

      <section className={styles.project__navigation}>
        <Link href='/portfolio'>
          <ListIcon />
          Back to list
        </Link>

        <Link href={`/portfolio/${nextProject.slug}`}>
          See Next <ArrowIcon color='var(--text-color)' />
        </Link>
      </section>
    </main>
  );
};

export default Page;
