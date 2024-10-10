'use client';

import { useEffect, useState } from 'react';
import styles from './Cursor.module.scss';
import { motion, useMotionValue, useSpring } from 'framer-motion';
import CursorIcon from './CursorIcon';

export default function Cursor({}) {
  const cursorSize = 28;
  const ballSize = 40;
  const ball = {
    x: useMotionValue(0),
    y: useMotionValue(0),
  };
  const mouse = {
    x: useMotionValue(0),
    y: useMotionValue(0),
  };

  const smoothOptions = { damping: 20, stiffness: 300, mass: 0.5 };
  const smoothBall = {
    x: useSpring(ball.x, smoothOptions),
    y: useSpring(ball.y, smoothOptions),
  };

  const [isMoving, setIsMoving] = useState(true);
  let moveTimer: NodeJS.Timeout;

  const manageMouseMove = (e: any) => {
    const { clientX, clientY } = e;
    mouse.x.set(clientX - cursorSize / 2);
    mouse.y.set(clientY - cursorSize / 2);
    ball.x.set(clientX - ballSize / 2);
    ball.y.set(clientY - ballSize / 2);

    // Reset the timer and set isMoving to true
    setIsMoving(true);
    clearTimeout(moveTimer);
    moveTimer = setTimeout(() => setIsMoving(false), 100); // Adjust timeout as needed
  };

  useEffect(() => {
    window.addEventListener('mousemove', manageMouseMove);
    return () => {
      window.removeEventListener('mousemove', manageMouseMove);
      clearTimeout(moveTimer);
    };
  }, []);

  return (
    <div className={styles.cursorContainer}>
      <motion.div
        className={`${styles.cursorIcon}`}
        style={{
          left: mouse.x,
          top: mouse.y,
        }}
      >
        <CursorIcon />
      </motion.div>
      <motion.div
        style={{
          left: smoothBall.x,
          top: smoothBall.y,
        }}
        className={`${styles.cursorBall} ${isMoving ? '' : styles.notMoving}`}
      ></motion.div>
    </div>
  );
}