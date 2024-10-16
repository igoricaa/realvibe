'use client';

import styles from './ImageSlider.module.scss';
import { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

const ImageSlider = ({ slug }: { slug: string }) => {
  const [positionIndexes, setPositionIndexes] = useState([0, 1, 2]);

  const handleClick = (clickedIndex: number) => {
    setPositionIndexes((prevIndexes) => {
      const currentCenterIndex = prevIndexes.indexOf(1);
      if (clickedIndex === currentCenterIndex) return prevIndexes;

      const diff = clickedIndex - currentCenterIndex;
      return prevIndexes.map((index) => (index - diff + 3) % 3);
    });
  };

  const images = [
    `/services/${slug}/1.png`,
    `/services/${slug}/2.png`,
    `/services/${slug}/3.png`,
  ];
  const positions = ['left1', 'center', 'right1'];

  const imageVariants = {
    left1: { x: '-50%', scale: 0.7, zIndex: 3 },
    center: { x: '0%', scale: 1, zIndex: 5 },
    right1: { x: '50%', scale: 0.7, zIndex: 3 },
  };

  return (
    <div className={styles.imageSlider}>
      {images.map((image, index) => (
        <motion.div
          key={index}
          initial='center'
          animate={positions[positionIndexes[index]]}
          variants={imageVariants}
          transition={{ duration: 0.5 }}
          className={styles.imageSlider__image}
          onClick={() => handleClick(index)}
        >
          <Image
            src={image}
            alt={image.toString()}
            style={{ objectFit: 'cover' }}
            fill
            sizes='(max-width: 768px) 55vw, 635px'
          />
        </motion.div>
      ))}
    </div>
  );
};

export default ImageSlider;
