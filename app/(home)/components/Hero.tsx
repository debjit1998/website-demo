import { Fragment } from 'react';

import Button from '@/components/Button';

const Hero = () => {
  return (
    <Fragment>
      <div className='bg-sales-manager-hero md:[450px] pointer-events-none absolute left-0 top-16 h-[300px] w-full lg:top-[86px] lg:h-[550px]' />
      <section className='mx-auto max-w-screen-xl px-4 pt-8 dark:bg-gray-800 lg:px-6 lg:pt-16'>
        <h1 className='text-center text-[40px] font-bold capitalize leading-[120%] text-black lg:text-[60px]'>
          From confusion to <br className='hidden sm:block' />
          <span className='hero-section-gradient bg-clip-text capitalize text-transparent'>
            revenue precision
          </span>
        </h1>

        <p className='mx-auto mt-2 w-full max-w-[529px] text-center text-[20px] leading-[150%] tracking-[0.03em] text-black-2 lg:mt-4'>
          Eliminate the panic and embarrassment of forecast calls and commit
          with confidence
        </p>

        <div className='mt-4 flex flex-col items-center justify-center gap-3 sm:flex-row lg:mt-8'>
          <Button
            color='yellow'
            as='a'
            referrerPolicy='unsafe-url'
            target='_blank'
            href='https://web.oliv.ai/signup?_gl=1*vnu7qd*_gcl_au*MTUwNjE3NTg3NS4xNzE5MDU1ODU0'
            className='w-full py-1 text-center text-black-3 sm:max-w-max'
          >
            Get started for free
          </Button>
          <Button
            color='outline'
            className='w-full py-1 text-center sm:max-w-max'
          >
            Book a 7m demo
          </Button>
        </div>
      </section>
    </Fragment>
  );
};

export default Hero;
