import styles from './Button.module.scss';
import ArrowIcon from './icons/ArrowIcon';
import MagneticWrapper from './MagneticWrapper';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary';
  className?: string;
  isSideArea?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  className,
  isSideArea = false,
  ...props
}) => {
  const buttonElement = (
    <button
      className={`${styles.button} ${styles[variant]} ${
        styles[className || '']
      }`}
      {...props}
    >
      <ArrowIcon />
      {children}
    </button>
  );

  return !isSideArea ? (
    <MagneticWrapper>{buttonElement}</MagneticWrapper>
  ) : (
    buttonElement
  );
};

export default Button;
