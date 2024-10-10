import { Link as TransitionsLink } from 'next-view-transitions';

interface LinkProps
  extends React.ComponentPropsWithoutRef<typeof TransitionsLink> {
  children: React.ReactNode;
}

const Link: React.FC<LinkProps> = ({ children, ...props }) => {
  return <TransitionsLink {...props}>{children}</TransitionsLink>;
};

export default Link;
