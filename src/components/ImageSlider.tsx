'use client';

import styles from './ImageSlider.module.scss';
import { useState } from 'react';
import { motion } from 'framer-motion';
import filmProduction from '../../public/services/film-production.png';
import descriptionImage from '../../public/services/film-production/description-image.png';
import Image from 'next/image';

const ImageSlider = () => {
  const [positionIndexes, setPositionIndexes] = useState([0, 1, 2]);

  const handleClick = (clickedIndex: number) => {
    setPositionIndexes((prevIndexes) => {
      const currentCenterIndex = prevIndexes.indexOf(1);
      if (clickedIndex === currentCenterIndex) return prevIndexes;
      
      const diff = clickedIndex - currentCenterIndex;
      return prevIndexes.map(index => (index - diff + 3) % 3);
    });
  };

  const handleNext = () => {
    setPositionIndexes((prevIndexes) => {
      const updatedIndexes = prevIndexes.map(
        (prevIndex) => (prevIndex + 1) % 3
      );
      return updatedIndexes;
    });
  };

  const handleBack = () => {
    setPositionIndexes((prevIndexes) => {
      const updatedIndexes = prevIndexes.map(
        (prevIndex) => (prevIndex + 4) % 3
      );

      return updatedIndexes;
    });
  };

  const images = [filmProduction, descriptionImage, filmProduction];
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
