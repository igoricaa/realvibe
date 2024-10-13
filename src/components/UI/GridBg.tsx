import Image from 'next/image';

const GridBg = () => {
  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        width: '100vw',
        height: '100vh',
        zIndex: -10,
        opacity: 'var(--gridbg-opacity)',
      }}
    >
      <Image
        src='/grid-bg.svg'
        alt='Grid background'
        fill
        sizes='100vw'
        style={{ objectFit: 'cover' }}
      />
    </div>
  );
};

export default GridBg;
