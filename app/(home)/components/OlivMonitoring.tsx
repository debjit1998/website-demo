import React from 'react';

const OlivMonitoring = () => {
  return (
    <section className='mx-auto mt-8 max-w-screen-xl bg-white px-4 dark:bg-gray-900 lg:mt-12 lg:px-6'>
      <div className='grid grid-cols-1 items-center gap-8 px-4 py-8 sm:py-16 md:grid-cols-2 lg:px-6 xl:gap-16'>
        <div className='mt-0'>
          <h2 className='text-center text-[26px] font-bold leading-[120%] text-black dark:text-white md:text-left lg:text-[38px]'>
            Oliv monitors everything for you
          </h2>
          <div className='mt-8 text-center font-light text-black-2 dark:text-gray-400 md:mt-12 md:text-left md:text-lg'>
            Using Generative AI, Oliv analyzes every meeting to track deals and
            find the right coaching areas for reps. Stay informed with
            Oliv&apos;s AI one-pagers, providing timely insights without the
            noise.
          </div>
        </div>
        <img
          src='https://cdn.prod.website-files.com/6328815dfe3fef784e0c693e/6687db94babf36e28a1d5f50_join-every-call.webp'
          loading='eager'
          alt='Oliv Monitoring'
          sizes='(max-width: 479px) 100vw, (max-width: 991px) 352px, (max-width: 1279px) 44vw, (max-width: 1439px) 552px, (max-width: 1919px) 576px, 38vw'
          srcSet='https://cdn.prod.website-files.com/6328815dfe3fef784e0c693e/6687db94babf36e28a1d5f50_join-every-call-p-500.png 500w, https://cdn.prod.website-files.com/6328815dfe3fef784e0c693e/6687db94babf36e28a1d5f50_join-every-call-p-800.png 800w, https://cdn.prod.website-files.com/6328815dfe3fef784e0c693e/6687db94babf36e28a1d5f50_join-every-call-p-1080.png 1080w, https://cdn.prod.website-files.com/6328815dfe3fef784e0c693e/6687db94babf36e28a1d5f50_join-every-call.webp 1204w'
          className='w-full'
        />
      </div>
    </section>
  );
};

export default OlivMonitoring;
