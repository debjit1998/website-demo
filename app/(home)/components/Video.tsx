import React from 'react';

const Video = () => {
  return (
    <section className='mx-auto mt-8 aspect-[9/5] w-full max-w-screen-xl px-4 dark:bg-gray-800 lg:mt-12 lg:px-6'>
      <iframe
        title='vimeo-player'
        src='https://player.vimeo.com/video/946608144?h=649ba67a62'
        width='100%'
        height='100%'
        allowFullScreen
      />
    </section>
  );
};

export default Video;
