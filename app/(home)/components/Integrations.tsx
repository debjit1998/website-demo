import React from 'react';

import Button from '@/components/Button';

const integrations = [
  { title: 'gong', className: 'h-[30px]' },
  { title: 'zoom', className: 'h-[40px]' },
  { title: 'chorus', className: 'h-[15px]' },
  { title: 'meet', className: 'h-[40px]' },
  { title: 'hubspot', className: 'h-[25px]' },
  { title: 'highspot', className: 'h-[25px]' },
  { title: 'salesforce', className: 'h-[40px]' },
  { title: 'guru', className: 'h-[15px]' },
];

const Integrations = () => {
  return (
    <section className='mx-auto mt-8 max-w-screen-xl bg-yellow-gradient px-4 dark:bg-gray-900 lg:mt-12 lg:px-6 xl:rounded-2xl'>
      <div className='grid grid-cols-1 items-center gap-8 px-4 py-8 sm:py-16 md:grid-cols-2 lg:px-6 xl:gap-16'>
        <div>
          <h2 className='text-center text-[26px] font-bold leading-[120%] text-black dark:text-white md:text-left lg:text-[38px]'>
            We play nice with your favorite tools
          </h2>
          <div className='mt-8 text-center font-light text-black-2 dark:text-gray-400 md:mt-12 md:text-left md:text-lg'>
            Oliv effortlessly integrates with your existing tools, ensuring a
            smooth and efficient workflow for your sales process.
          </div>
          <div className='flex w-full justify-center md:block'>
            <Button color='yellow' className='mt-4 max-w-max text-black-3'>
              Explore all integrations
            </Button>
          </div>
        </div>
        <div>
          <div className='mx-auto grid w-max grid-cols-2 gap-3'>
            {integrations.map((integration, index) => (
              <div
                key={index}
                className='flex h-[70px] w-[140px] items-center justify-center rounded-md bg-white sm:w-[170px]'
              >
                <img
                  src={`/icons/integrations/${integration.title}.svg`}
                  alt={integration.title}
                  className={integration.className}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Integrations;
