import { TextInput } from 'flowbite-react';
import Image from 'next/image';
import Link from 'next/link';

import Button from '../Button';

const usefulLinks = [
  {
    title: 'Features',
    href: '/features',
  },
  { title: 'Oliv for Sales Reps', href: '/sales-manager-ai-sales-copilot' },
  { title: 'Pricing', href: '/pricing' },
];

const socials = [
  {
    title: 'linkedin',
    href: 'https://www.linkedin.com/company/oliv-ai',
  },
  {
    title: 'youtube',
    href: 'https://www.youtube.com/@tryolivai',
  },
];

const Footer = () => {
  return (
    <footer className='bg-black-4 px-4 py-5 text-white lg:px-6 lg:py-12'>
      <div className='mx-auto h-full max-w-screen-xl px-4 lg:px-6'>
        <div className='grid grid-cols-1 gap-8 md:gap-12 lg:grid-cols-2 lg:gap-16'>
          <div className='max-w-[500px]'>
            <Link href='/'>
              <Image
                alt='logo'
                src='/icons/footer/logo-white.svg'
                height={50}
                width={110}
                className='ml-[-10px]'
              />
            </Link>
            <p className='mt-4'>
              Join our newsletter to stay up to date on features and releases.
            </p>
            <form className='mt-4 flex flex-col items-center gap-3 sm:flex-row'>
              <TextInput
                placeholder='Enter your email'
                className='w-full flex-1 py-1 sm:w-auto'
              />
              <Button color='green' className='w-full sm:max-w-max'>
                Subscribe
              </Button>
            </form>
            <p className='mt-4 text-[14px]'>
              By subscribing you agree to with our Privacy Policy and provide
              consent to receive updates from our company.
            </p>
          </div>

          <div className='flex flex-col gap-y-10 text-white sm:flex-row'>
            <div className='flex-1'>
              <p>Useful links</p>
              <ul className='mt-5 sm:mt-10'>
                {usefulLinks.map((link) => (
                  <li className='mt-4 text-[14px]' key={link.title}>
                    <Link className='hover:text-primary-2' href={link.href}>
                      {link.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className='flex-1'>
              <p>Follow Us</p>
              <ul className='mt-5 sm:mt-10'>
                {socials.map((link) => (
                  <li className='mt-4 text-[14px]' key={link.title}>
                    <a
                      href={link.href}
                      target='_blank'
                      className='flex items-center gap-2 hover:text-primary-2'
                    >
                      <img
                        alt={link.title}
                        src={`/icons/footer/${link.title}.svg`}
                      />
                      <span className='capitalize'>{link.title}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className='mt-10 h-[1px] w-full bg-white lg:mt-20' />

        <div className='mt-6 flex flex-col justify-between gap-y-4 text-white sm:flex-row'>
          <div>© {new Date().getFullYear()} Oliv.ai. All rights reserved.</div>
          <div className='flex flex-col gap-x-6 gap-y-4 sm:flex-row'>
            <Link href='/'>Privacy Policy</Link>
            <Link href='/'>Terms of Service</Link>
            <Link href='/'>Cookie Settings</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
