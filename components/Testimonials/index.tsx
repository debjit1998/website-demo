import { Carousel, CustomFlowbiteTheme } from 'flowbite-react';
import { FC } from 'react';

import { cn } from '@/utils/utils';

interface Props {
  className?: string;
}

const testimonials = [
  {
    name: 'Kara Clark',
    company: 'Insurify',
    position: '',
    message:
      "It's actually pretty cool. Oliv gives you key takeaways, next steps, and posts the notes into our private Slack team channel. We certainly enjoy using it.",
  },
  {
    name: 'Patrick Gregg',
    company: 'Onspring',
    position: 'Strategic Account Manager',
    message:
      "It's wildly helpful for a person like me who has to take notes but hates to be taken away from the conversation",
  },
  {
    name: 'Patrick Gregg',
    company: 'Onspring',
    position: 'Strategic Account Manager',
    message:
      "It's wildly helpful for a person like me who has to take notes but hates to be taken away from the conversation",
  },
  {
    name: 'Patrick Gregg',
    company: 'Onspring',
    position: 'Strategic Account Manager',
    message:
      "It's wildly helpful for a person like me who has to take notes but hates to be taken away from the conversation",
  },
  {
    name: 'Kara Clark',
    company: 'Insurify',
    position: '',
    message:
      "It's actually pretty cool. Oliv gives you key takeaways, next steps, and posts the notes into our private Slack team channel. We certainly enjoy using it.",
  },
];

const carouselTheme: CustomFlowbiteTheme['carousel'] = {
  control: {
    base: 'inline-flex h-8 w-8 items-center justify-center rounded-full bg-white/30 group-hover:bg-white/50 group-focus:outline-none group-focus:ring-4 group-focus:ring-white dark:bg-gray-800/30 dark:group-hover:bg-gray-800/60 dark:group-focus:ring-gray-800/70 sm:h-10 sm:w-10',
    icon: 'hidden sm:block text-gray-800 sm:h-10 sm:w-10',
  },
};

const Testimonials: FC<Props> = ({ className }) => {
  return (
    <div className={cn('px-4 py-8 sm:py-16 lg:px-6', className)}>
      <h2 className='text-center text-[26px] font-bold leading-[120%] text-black lg:text-[38px]'>
        What our users say
      </h2>

      <div className='h-56 w-full sm:h-64 xl:h-80 2xl:h-96'>
        <Carousel slide={false} theme={carouselTheme}>
          {testimonials.map((testimonial, index) => (
            <div key={index}>
              <p className='mx-auto max-w-[768px] text-center text-[14px] text-black-2 md:text-[20px]'>
                &quot;{testimonial.message}&quot;
              </p>
              <p className='mt-4 text-center text-[14px] font-bold text-black md:text-[20px]'>
                {testimonial.company}
              </p>
              <p className='mt-4 text-center text-[14px] font-bold text-black md:text-[20px]'>
                {testimonial.position}
              </p>
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default Testimonials;
