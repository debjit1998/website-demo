import { Card, CustomFlowbiteTheme } from 'flowbite-react';

import Button from '@/components/Button';

const cardTheme: CustomFlowbiteTheme['card'] = {
  root: {
    base: 'w-[320px] h-[360px] rounded-[25px] bg-primary-1 border border-primary-2 overflow-hidden',
    children: 'p-0',
  },
};

const cards = [
  {
    title: 'Prepare',
    description:
      'Oliv sends reminders and does research for their meetings, keeping your reps prepared for meetings.',
    image:
      'https://cdn.prod.website-files.com/6328815dfe3fef784e0c693e/6687e03f02cf89c8a9821c94_prepare.png',
  },
  {
    title: 'Meet',
    description:
      'Oliv transcribes calls live, suggests questions, and automates note-taking, letting reps focus on the customer conversation.',
    image:
      'https://uploads-ssl.webflow.com/6328815dfe3fef784e0c693e/6688f55d521439b62af8d989_6687e03f1c896bbb5b9e0afd_meet_crop.webp',
  },
  {
    title: 'Wrap-up',
    description:
      'Oliv automatically sends follow-up emails, updates the CRM and suggests next steps to close deals.',
    image:
      'https://cdn.prod.website-files.com/6328815dfe3fef784e0c693e/6687e03fe714dff7056e916c_wrap-up.png',
  },
];

const OlivReps = () => {
  return (
    <section className='mx-auto mt-8 max-w-screen-xl bg-white px-4 dark:bg-gray-900 lg:mt-12 lg:px-6'>
      <div className='px-4 py-8 sm:py-16 lg:px-6'>
        <h2 className='text-center text-[26px] font-bold leading-[120%] text-black dark:text-white lg:text-[38px]'>
          Oliv takes care of your reps too!
        </h2>
        <div className='mt-8 flex flex-col items-center justify-center gap-10 lg:mt-12 lg:flex-row'>
          {cards.map((card, index) => (
            <Card theme={cardTheme} key={index}>
              <div className='h-[170px] w-full'>
                <img
                  src={card.image}
                  alt={card.title}
                  className='h-full w-full object-cover'
                />
              </div>
              <h5 className='p-4 text-[22px] font-bold leading-[140%] text-white'>
                {card.title}
              </h5>
              <p className='p-4 pt-0 leading-[150%] text-white'>
                {card.description}
              </p>
            </Card>
          ))}
        </div>
        <div className='mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row lg:mt-12'>
          <Button color='yellow' className='w-full text-center sm:max-w-max'>
            Get Started for Free
          </Button>
          <Button color='outline' className='w-full text-center sm:max-w-max'>
            Book a 7m demo
          </Button>
        </div>
      </div>
    </section>
  );
};

export default OlivReps;
