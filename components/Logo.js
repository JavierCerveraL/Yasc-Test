import Image from 'next/image';
import React from 'react';
import mypic from '../public/logoYASC.png';

const Logo = (props) => {
  return (
    <div className="">
      {' '}
      <Image
        width={39}
        height={100}
        class="h-9 relative right bg-white rounded-full"
        src={mypic}
        alt="/"
      />
    </div>
  );
};

export default Logo;
