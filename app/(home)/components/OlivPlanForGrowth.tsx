'use client';

import {
  FC,
  Fragment,
  memo,
  useCallback,
  useEffect,
  useRef,
  useState,
} from 'react';

import Skeleton from '@/components/Skeleton';
import { breakpoints } from '@/constants/breakpoints';
import useResize from '@/hooks/useResize';
import { cn } from '@/utils/utils';

const tabs = [
  {
    title: 'Start your week with detailed pipeline visibility',
    description:
      'Get an overview of your pipeline every Monday. Track all deals with AI MEDDICC/BANT/SPICED scorecards. Leverage AI buying committee insights to multithread every deal.',
    image:
      'https://cdn.prod.website-files.com/6328815dfe3fef784e0c693e/6687e6dcb27cfb32cf5347e0_all-one-pagers-p-800.png',
  },
  {
    title: 'Guide and unblock your reps mid week',
    description:
      'Get clear schedule of key meetings to unblock critical deals. Access prep notes, join calls, and offer real-time guidance to your team.',
    image:
      'https://cdn.prod.website-files.com/6328815dfe3fef784e0c693e/6687e6dc1e74c999b786bacc_today%27s%20meetings-p-800.png',
  },
  {
    title: 'End your week with a pristine CRM and coaching insights',
    description:
      'Get an updated CRM with all fields filled by AI and confirmed by reps — no need for hours of manual reviews. Identify tailored coaching opportunities for each rep.',
    image:
      'https://cdn.prod.website-files.com/6328815dfe3fef784e0c693e/6687e6dc60bbf15b8eea8d7d_Deal-level-performance-p-800.png',
  },
];

interface Props {
  selected: number;
  onChange: (item: number) => void;
}

const MobileTabs: FC<Props> = ({ selected, onChange }) => {
  return (
    <div className='flex flex-col gap-4 py-8 sm:py-16'>
      {tabs.map((tab, index) => (
        <div
          key={index}
          className={cn(
            'min-h-[120px] cursor-pointer rounded-2xl border border-[#dfdfdf] p-4',
            {
              'active-tab': selected === index,
            }
          )}
          tabIndex={0}
          role='button'
          onClick={() => onChange(index)}
        >
          <p className='text-center text-[18px] font-bold text-black-4'>
            {tab.title}
          </p>
          <p className='mt-4 text-center text-[16px] leading-[150%] text-black-2'>
            {tab.description}
          </p>
        </div>
      ))}
      <img
        className='mt-4 w-full dark:hidden'
        src={tabs[selected].image}
        alt='dashboard image'
      />
    </div>
  );
};

const DesktopTabs: FC<Props> = ({ selected, onChange }) => {
  const triggerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      const tabs = document.querySelectorAll<HTMLDivElement>('[data-tab]');
      const triggerRect = triggerRef.current!.getBoundingClientRect();
      tabs.forEach((tab, index) => {
        const tabRect = tab.getBoundingClientRect();
        const isIntersecting =
          triggerRect.top >= tabRect.top &&
          triggerRect.bottom <= tabRect.bottom;

        if (isIntersecting) {
          onChange(index);
        }
      });
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []); //eslint-disable-line

  return (
    <Fragment>
      <div
        ref={triggerRef}
        className='pointer-events-none fixed left-[50vw] top-[50vh] h-[1px] w-[1px]'
      />
      <div className='grid grid-cols-1 items-center gap-8 py-8 sm:py-16 md:grid-cols-2 xl:gap-16'>
        <div className='sticky top-16 h-full w-full lg:top-[86px]'>
          {tabs.map((tab, index) => (
            <img
              key={index}
              className={cn(
                'absolute top-1/2 w-full -translate-y-1/2 opacity-0 transition-opacity duration-500',
                {
                  'opacity-100': index === selected,
                }
              )}
              src={tab.image}
              alt='dashboard image'
            />
          ))}
        </div>

        <div className='mt-0 flex flex-col gap-4'>
          {tabs.map((tab, index) => (
            <div
              key={index}
              data-tab
              className={cn(
                'min-h-[120px] rounded-2xl border border-[#dfdfdf] p-4',
                {
                  'active-tab': selected === index,
                }
              )}
            >
              <p className='text-left text-[20px] font-bold text-black-4'>
                {tab.title}
              </p>
              <p className='mt-4 text-left text-[18px] leading-[150%] text-black-2'>
                {tab.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </Fragment>
  );
};

const MemoizedMobileTabs = memo(MobileTabs);
const MemoizedDesktopTabs = memo(DesktopTabs);

const OlivPlanForGrowth = () => {
  const [selected, setSelected] = useState(0);
  const width = useResize();

  const onChange = useCallback((index: number) => {
    setSelected(index);
  }, []);

  if (!width)
    return (
      <div className='mx-auto mt-8 h-[350px] max-w-screen-xl px-8 lg:mt-12 lg:px-12'>
        <Skeleton className='h-full w-full' />
      </div>
    );

  return (
    <Fragment>
      <section className='mx-auto mt-8 max-w-screen-xl bg-white px-4 dark:bg-gray-900 lg:mt-12 lg:px-6'>
        <h2 className='text-center text-[26px] font-bold leading-[120%] text-black dark:text-white lg:text-[38px]'>
          Plan for growth, skip the firefighting
        </h2>
        <p className='mx-auto mt-8 max-w-[768px] text-center font-light leading-[150%] tracking-[0.03em] text-black-2 dark:text-gray-400 md:mt-12 md:text-lg'>
          Scale high-performing teams with focused, strategic approach that
          maximizes revenue and ensures success
        </p>
      </section>

      <section className='mx-auto mt-8 max-w-screen-xl bg-white px-8 dark:bg-gray-900 lg:mt-12 lg:px-12'>
        {width < breakpoints.LG ? (
          <MemoizedMobileTabs selected={selected} onChange={onChange} />
        ) : (
          <MemoizedDesktopTabs selected={selected} onChange={onChange} />
        )}
      </section>
    </Fragment>
  );
};

export default OlivPlanForGrowth;
