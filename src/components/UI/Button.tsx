'use client';

import { useTheme } from 'next-themes';
import styles from './Button.module.scss';
import ArrowIcon from './icons/ArrowIcon';
import MagneticWrapper from './MagneticWrapper';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary';
  className?: string;
}

const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  className,
  ...props
}) => {
  const { theme } = useTheme();

  return (
    <MagneticWrapper>
      <button
        className={`${styles.button} ${styles[variant]} ${
          styles[className || '']
        }`}
      >
        <ArrowIcon
          color={
            variant === 'primary'
              ? '#FF00DD'
              : theme === 'dark' || !theme 
              ? '#fff'
              : '#000'
          }
        />
        {children}
      </button>
    </MagneticWrapper>
  );
};

export default Button;
