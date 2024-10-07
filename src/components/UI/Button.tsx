import Image from 'next/image';
import styles from './Button.module.scss';
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
  return (
    <MagneticWrapper>
      <button
        className={`${styles.button} ${styles[variant]} ${
          styles[className || '']
        }`}
      >
        {children}
      </button>
    </MagneticWrapper>
  );
};

export default Button;
