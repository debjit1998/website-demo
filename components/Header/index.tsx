import Image from 'next/image';
import Link from 'next/link';

import { navLinks } from '@/constants/header';

import Button from '../Button';

import HeaderShadow from './HeaderShadow';
import MobileMenu from './MobileMenu';

const Header = () => {
  return (
    <header>
      <HeaderShadow />
      <nav className='fixed inset-0 z-50 h-16 border-gray-200 bg-white px-4 py-2.5 dark:bg-gray-800 lg:h-[86px] lg:px-6'>
        <div className='mx-auto flex h-full max-w-screen-xl flex-wrap items-center justify-between'>
          <Link scroll={false} href='/' className='flex items-center'>
            <Image
              priority
              src='/website-demo/icons/header/logo.svg'
              width={82}
              height={32.5}
              alt='logo'
              style={{ width: 82, height: 32.5 }}
            />
          </Link>
          <div
            className='hidden w-full items-center justify-between lg:flex lg:w-auto'
            id='navigation-menu'
          >
            <ul className='mt-4 flex flex-col font-medium lg:mt-0 lg:flex-row lg:space-x-8'>
              {navLinks.map((link) => (
                <li key={link.title}>
                  <a
                    href={link.href}
                    className='bg-primary-700 lg:text-primary-700 block rounded py-2 pl-3 pr-4 text-black-1 dark:text-white lg:bg-transparent lg:p-0'
                    aria-current='page'
                  >
                    {link.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className='flex items-center'>
            <Button
              as={Link}
              color='outlineGreen'
              href='#'
              className='mr-2 hidden sm:block'
            >
              Get Started
            </Button>
            <Button
              className='mr-3 hidden sm:block lg:mr-0'
              href='#'
              as={Link}
              color='green'
            >
              Book a demo
            </Button>
            <MobileMenu />
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
