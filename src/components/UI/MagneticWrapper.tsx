'use client';

import { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import useMediaQuery from '@/hooks/useMediaQuery';

const MagneticWrapper = ({ children }: { children: React.ReactNode }) => {
  const ref = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const isMobile = useMediaQuery('(max-width: 768px)');

  const handleMouse = (e: React.MouseEvent<HTMLDivElement>) => {
    const { clientX, clientY } = e;
    const { height, width, left, top } = ref.current!.getBoundingClientRect();
    const middleX = clientX - (left + width / 2);
    const middleY = clientY - (top + height / 2);
    setPosition({ x: middleX, y: middleY });
  };

  const reset = () => {
    setPosition({ x: 0, y: 0 });
  };

  const { x, y } = position;
  return (
    <motion.div
      style={{
        position: 'relative',
        width: isMobile ? '100%' : 'fit-content',
      }}
      ref={ref}
      onMouseMove={handleMouse}
      onMouseLeave={reset}
      animate={isMobile ? {} : { x, y }}
      transition={
        isMobile
          ? {}
          : { type: 'spring', stiffness: 150, damping: 40, mass: 0.2 }
      }
    >
      {children}
    </motion.div>
  );
};

export default MagneticWrapper;
