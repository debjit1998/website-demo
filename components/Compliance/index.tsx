import { FC } from 'react';

import { cn } from '@/utils/utils';

interface Props {
  className?: string;
}

const complianceData = [
  {
    title: 'SOC 2',
    icon: '/icons/compliance/soc.svg',
  },
  {
    title: 'GDPR',
    icon: '/icons/compliance/gdpr.svg',
  },
  {
    title: 'CCPA',
    icon: '/icons/compliance/ccpa.svg',
  },
];

const Compliance: FC<Props> = ({ className }) => {
  return (
    <div className={cn('relative w-full', className)}>
      <div className='absolute left-0 top-0 -z-10 h-full w-full'>
        <img
          className='w-full'
          src='/icons/compliance/background.svg'
          alt='background'
        />
      </div>
      <div className='px-4 py-8 sm:py-16 lg:px-6'>
        <h2 className='text-center text-[26px] font-bold leading-[120%] text-black dark:text-white lg:text-[38px]'>
          Your data is safe with us
        </h2>
        <p className='mx-auto mt-4 max-w-[520px] text-center text-[20px] leading-[150%] text-black-2'>
          We protect your data so that you can focus on growing your business
          with peace of mind.
        </p>
      </div>
      <div className='grid grid-cols-1 md:grid-cols-3'>
        {complianceData.map((data, index) => (
          <div
            key={index}
            className='flex flex-col items-center justify-center gap-4'
          >
            <img
              src={data.icon}
              alt={data.title}
              className='h-20 w-20 object-contain'
            />
            <h3 className='text-[24px] font-bold text-black lg:text-[32px]'>
              {data.title}
            </h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Compliance;
