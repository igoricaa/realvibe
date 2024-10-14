import styles from './Button.module.scss';
import ArrowIcon from './icons/ArrowIcon';
import MailIcon from './icons/MailIcon';
import MagneticWrapper from './MagneticWrapper';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary';
  className?: string;
  isSideArea?: boolean;
  isContactFormButton?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  className,
  isSideArea = false,
  isContactFormButton = false,
  ...props
}) => {
  const buttonElement = (
    <button
      className={`${styles.button} ${styles[variant]} ${
        styles[className || '']
      }`}
      {...props}
    >
      {isContactFormButton ? <MailIcon /> : <ArrowIcon />}
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
