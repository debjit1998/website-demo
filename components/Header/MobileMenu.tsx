'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Fragment, useEffect, useState } from 'react';

import { breakpoints } from '@/constants/breakpoints';
import { navLinks } from '@/constants/header';
import useResize from '@/hooks/useResize';
import { cn } from '@/utils/utils';

import Button from '../Button';

const MobileLinks = () => {
  const [showMenu, setShowMenu] = useState(false);
  const width = useResize();

  useEffect(() => {
    if (width >= breakpoints.LG) {
      setShowMenu(false);
    }
  }, [width]);

  return (
    <Fragment>
      <button
        data-collapse-toggle='navigation-menu'
        type='button'
        className='inline-flex items-center rounded-lg p-2 text-sm text-gray-500 hover:bg-gray-100 lg:hidden'
        aria-controls='navigation-menu'
        aria-expanded='false'
        onClick={() => setShowMenu((prev) => !prev)}
      >
        <span className='sr-only'>Open main menu</span>
        {!showMenu ? (
          <Image
            priority
            src='/icons/header/hamburger.svg'
            width={24}
            height={24}
            alt='hamburger'
          />
        ) : (
          <Image
            priority
            src='/icons/header/close.svg'
            width={24}
            height={24}
            alt='hamburger'
          />
        )}
      </button>

      <div
        className={cn(
          'fixed left-0 top-16 grid w-full grid-cols-1 grid-rows-[0fr] bg-white transition-all duration-300 lg:top-[86px]',
          'nav-shadow',
          { 'grid-rows-[1fr]': showMenu }
        )}
        id='navigation-menu'
      >
        <div className='flex flex-col overflow-hidden'>
          <ul className='flex flex-col px-4 font-medium sm:pb-2'>
            {navLinks.map((link) => (
              <li key={link.title}>
                <a
                  href={link.href}
                  className='bg-primary-700 lg:text-primary-700 block max-w-max rounded py-2 text-black-1 dark:text-white lg:bg-transparent'
                  aria-current='page'
                >
                  {link.title}
                </a>
              </li>
            ))}
          </ul>
          <div className='mt-2 flex w-full flex-col gap-3 px-4 pb-4 sm:hidden'>
            <Button as={Link} color='outlineGreen' href='#' className='w-full'>
              Get Started
            </Button>

            <Button color='green' className='w-full' href='#' as={Link}>
              Book a demo
            </Button>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default MobileLinks;
