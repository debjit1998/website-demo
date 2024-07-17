const SalesManagement = () => {
  return (
    <section className='mx-auto mt-8 max-w-screen-xl bg-white px-4 dark:bg-gray-900 lg:mt-12 lg:px-6'>
      <div className='grid grid-cols-1 items-center gap-8 px-4 py-8 sm:py-16 md:grid-cols-2 lg:px-6 xl:gap-16'>
        <img
          src='https://cdn.prod.website-files.com/6328815dfe3fef784e0c693e/66685b71cfb5a22e90e17873_Regain%20Control%20P1.png'
          loading='eager'
          alt='Sales Management'
          sizes='(max-width: 479px) 100vw, (max-width: 767px) 92vw, (max-width: 991px) 480px, (max-width: 1279px) 42vw, (max-width: 1439px) 41vw, (max-width: 1919px) 582.5px, 37vw'
          srcSet='https://cdn.prod.website-files.com/6328815dfe3fef784e0c693e/66685b71cfb5a22e90e17873_Regain%20Control%20P1-p-500.png 500w, https://cdn.prod.website-files.com/6328815dfe3fef784e0c693e/66685b71cfb5a22e90e17873_Regain%20Control%20P1.png 585w'
          className='order-2 w-full'
        />
        <div className='order-1 mt-0 md:order-2'>
          <h2 className='text-center text-[26px] font-bold leading-[120%] text-black dark:text-white md:text-left lg:text-[38px]'>
            Sales management feels more draining than uplifting?
          </h2>
          <div className='mt-8 font-light text-black-2 dark:text-gray-400 md:mt-12 md:text-lg'>
            Flowbite helps you connect with friends and communities of people
            who share your interests. Connecting with your friends and family as
            well as discovering new ones is easy with features like Groups.
          </div>
        </div>
      </div>
    </section>
  );
};

export default SalesManagement;
