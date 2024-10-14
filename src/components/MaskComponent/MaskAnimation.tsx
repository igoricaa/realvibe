'use client';

import useMediaQuery from '@/hooks/useMediaQuery';
import DesktopMask from './DesktopMask';
import MobileMask from './MobileMask';

const MaskAnimation: React.FC = () => {
  const isMobile = useMediaQuery('(max-width: 768px)');

  return <>{isMobile ? <MobileMask /> : <DesktopMask />}</>;
};

export default MaskAnimation;