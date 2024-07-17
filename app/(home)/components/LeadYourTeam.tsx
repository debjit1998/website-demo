import Button from '@/components/Button';

const LeadYourTeam = () => {
  return (
    <section className='mx-auto mb-8 mt-8 max-w-screen-xl bg-primary-2 px-4 dark:bg-gray-900 lg:mb-16 lg:mt-12 lg:px-6 xl:rounded-2xl'>
      <div className='px-4 py-8 sm:py-16 lg:px-6'>
        <h2 className='mx-auto w-full max-w-[768px] text-center text-[26px] font-bold leading-[120%] text-white dark:text-white lg:text-[38px]'>
          Lead your team, impress your leadership and win your market with Oliv
        </h2>
        <p className='mx-auto mt-6 max-w-[520px] text-center text-[16px] leading-[150%] text-black-2 text-white'>
          Claim early access for an exclusive experience
        </p>
        <div className='mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row lg:mt-12'>
          <Button
            as='a'
            href='https://web.oliv.ai/signup?__hstc=17958374.43032f84ac2926b7d1297196aaf1f45e.1720127072680.1720187371071.1720193676401.6&__hssc=17958374.13.1720193676401&__hsfp=1459259341&_gl=1*h2esgn*_gcl_au*MzEzMzExMjA1LjE3MjExOTk4NzA.'
            target='_blank'
            referrerPolicy='unsafe-url'
            color='yellow'
            className='w-full text-center sm:max-w-max'
          >
            Get Started for Free
          </Button>
          <Button
            color='outline'
            className='w-full border-white text-center text-white sm:max-w-max'
          >
            Book a 7m demo
          </Button>
        </div>
      </div>
    </section>
  );
};

export default LeadYourTeam;
