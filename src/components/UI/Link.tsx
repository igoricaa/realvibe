import { Link as TransitionsLink } from 'next-view-transitions';

const Link = ({
  children,
  className,
  ...props
}: {
  children: React.ReactNode;
  href: string;
  className?: string;
}) => {
  return (
    <TransitionsLink {...props} className={className}>
      {children}
    </TransitionsLink>
  );
};

export default Link;
