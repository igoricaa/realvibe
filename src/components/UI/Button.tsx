import Image from 'next/image';
import styles from './Button.module.scss';
import MagneticWrapper from './MagneticWrapper';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary';
}

const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  ...props
}) => {
  return (
    <MagneticWrapper>
      <button className={styles.button}>
        <span className={styles.button__text}>{children}</span>
      </button>
    </MagneticWrapper>
  );
};

export default Button;
