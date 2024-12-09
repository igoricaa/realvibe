import Button from '@/components/UI/Button';
import styles from './NotFound.module.scss';

export default function NotFound() {
  return (
    <main className={styles.notFound}>
      <div
        className='absolute inset-0 opacity-10'
        style={{
          backgroundImage: `linear-gradient(#333 1px, transparent 1px),
                           linear-gradient(90deg, #333 1px, transparent 1px)`,
          backgroundSize: '50px 50px',
        }}
      />

      <div className={styles.notFound__content}>
        <div className={styles.notFound__content__title}>404</div>

        <h1 className={styles.notFound__content__subtitle}>Page Not Found</h1>

        <p className={styles.notFound__content__description}>
          The page you're looking for doesn't exist or has been moved.
        </p>

        <Button href='/' className='notFound'>
          <span>Return Home</span>
        </Button>
      </div>
    </main>
  );
}
