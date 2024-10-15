import { Link as TransitionsLink } from 'next-view-transitions';

const Link = ({
  children,
  ...props
}: {
  children: React.ReactNode;
  href: string;
}) => {
  return <TransitionsLink {...props}>{children}</TransitionsLink>;
};

export default Link;
