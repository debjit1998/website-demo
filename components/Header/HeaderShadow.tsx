'use client';

import { useEffect, useRef } from 'react';

const HeaderShadow = () => {
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        ref.current?.classList.add('nav-shadow');
      } else {
        ref.current?.classList.remove('nav-shadow');
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className='z-5 fixed left-0 top-0 h-16 w-full lg:h-[86px]' ref={ref} />
  );
};

export default HeaderShadow;
