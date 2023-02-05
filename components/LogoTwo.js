import Image from 'next/image';
import React from 'react';
import mypic from '../public/logoYASC.png';

const Logo = (props) => {
  return (
    <Image
      width={100}
      height={100}
      class="h-18 relative right"
      src={mypic}
      alt="/"
    />
  );
};

export default Logo;
