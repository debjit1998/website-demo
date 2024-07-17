const icons = [
  'shopify',
  'turing',
  'insurify',
  'affirm',
  'density',
  'chargebee',
];

const Companies = () => {
  return (
    <section className='mx-auto mt-10 max-w-screen-xl px-4 lg:mt-12 lg:px-6'>
      <p className='text-center text-[20px] font-bold text-gray-1 lg:text-[22px]'>
        Trusted by 100+ companies of all sizes and industries
      </p>

      <div className='mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6'>
        {icons.map((icon) => (
          <div
            key={icon}
            className='flex h-full w-full items-center justify-center'
          >
            <img src={`/icons/companies/${icon}.svg`} alt={icon} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Companies;
