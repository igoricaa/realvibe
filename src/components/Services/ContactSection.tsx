'use client';

import { useInView } from 'framer-motion';
import Button from '../UI/Button';
import styles from './ContactSection.module.scss';
import { useRef } from 'react';

const ContactSection = ({ messages }: { messages: any }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <div
      ref={ref}
      className={styles.contact}
      style={{
        opacity: isInView ? 1 : 0,
        filter: isInView ? 'blur(0)' : 'blur(0.25rem)',
        transform: isInView ? 'translateY(0)' : 'translateY(200px)',
      }}
    >
      <h2 className={styles.contact__title}>{messages.title}</h2>
      <p className={styles.contact__subtitle}>
        {messages.subtitle.one}
        <span>{messages.subtitle.two}</span>
        {messages.subtitle.three}
        <span>{messages.subtitle.four}</span>
      </p>
      <Button href={'/contact'}>
        <span>{messages.cta}</span>
      </Button>
    </div>
  );
};

export default ContactSection;
