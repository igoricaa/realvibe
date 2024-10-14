import { Link as TransitionsLink } from 'next-view-transitions';

interface LinkProps
  extends React.ComponentPropsWithoutRef<typeof TransitionsLink> {
  children: React.ReactNode;
}

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
