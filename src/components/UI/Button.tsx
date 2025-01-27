import styles from './Button.module.scss';
import ArrowIcon from './icons/ArrowIcon';
import MailIcon from './icons/MailIcon';
import Link from './Link';
import MagneticWrapper from './MagneticWrapper';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary';
  className?: string;
  isSideArea?: boolean;
  isContactFormButton?: boolean;
  href?: string;
  external?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  className,
  isSideArea = false,
  isContactFormButton = false,
  href,
  external = false,
  ...props
}) => {
  const commonProps = {
    className: `${styles.button} ${styles[variant]} ${styles[className || '']}`,
    ...props,
  };

  const content = (
    <>
      {isContactFormButton ? <MailIcon /> : <ArrowIcon />}
      {children}
    </>
  );

  const buttonElement = href ? (
    <Link href={href} {...commonProps} external={external}>
      {content}
    </Link>
  ) : (
    <button {...commonProps}>{content}</button>
  );

  return !isSideArea ? (
    <MagneticWrapper>{buttonElement}</MagneticWrapper>
  ) : (
    buttonElement
  );
};

export default Button;
