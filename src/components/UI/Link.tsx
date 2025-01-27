import { Link as TransitionsLink } from 'next-view-transitions';

const Link = ({
  children,
  className,
  external = false,
  ...props
}: {
  children: React.ReactNode;
  href: string;
  className?: string;
  external?: boolean;
}) => {
  return (
    <TransitionsLink
      {...props}
      className={className}
      passHref={external}
      target={external ? '_blank' : undefined}
    >
      {children}
    </TransitionsLink>
  );
};

export default Link;
