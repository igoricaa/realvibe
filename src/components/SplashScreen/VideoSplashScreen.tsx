'use client';
import { useState, useEffect } from 'react';
import styles from './VideoSplashScreen.module.scss';

export default function SplashPage() {
  const [showVideo, setShowVideo] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowVideo(false);
    }, 9000);

    return () => clearTimeout(timer);
  }, []);

  return (
    showVideo && (
      <div className={styles.videoSplashScreen}>
        <video autoPlay muted playsInline>
          <source src='/realvibe-splash.mp4' type='video/mp4' />
          Your browser does not support the video tag.
        </video>
      </div>
    )
  );
}
