'use client';

import { useInView } from 'framer-motion';
import styles from './OfferingItem.module.scss';
import { useRef } from 'react';

const OfferingItem = ({
  index,
  messages,
}: {
  index: number;
  messages: any;
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const isOdd = index % 2 === 0;

  return (
    <div
      ref={ref}
      className={`${styles.offering__list__item}`}
      key={index}
      style={{
        transform: isInView
          ? isOdd
            ? 'translateY(-40px)'
            : 'none'
          : isOdd
          ? 'translateY(240px)'
          : 'translateY(200px)',
        opacity: isInView ? 1 : 0,
        transition: `all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) ${
          index * 0.1
        }s`,
      }}
    >
      <h4 className={styles.offering__list__item__title}>
        {messages.title.one}
        <span>{messages.title.two}</span>
      </h4>
      <p className={styles.offering__list__item__description}>
        {messages.description}
      </p>
    </div>
  );
};

export default OfferingItem;
