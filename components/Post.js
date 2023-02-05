import Image from 'next/image';
import React from 'react';
import { BsHandThumbsUp, BsShare } from 'react-icons/bs';
import { BiCommentDetail } from 'react-icons/bi';
import Logo from './Logo';

function Post() {
  return (
    <div className="flex flex-col">
      <div className="p-5 bg-[#50506A] mt-5 rounded-2xl shadow-lg">
        <div className="flex items-center space-x-2">
          {/* <Image
            src="/../public/logoYASC.png"
            className=" rounded-full"
            width={40}
            height={40}
            alt="/" */}
          <Logo />

          <div>
            <p className="font-medium text-white"> Yasc Portal</p>
            <p className="text-xs text-white ">29/01/2023, 13:25 </p>
          </div>
        </div>
        <p className="pt-4 rounded-full  px-1 mt-2 post-text text-white">
          {' '}
          Hello, Welcome.{' '}
        </p>

        <div className="border-top-post mt-5 mb-1"></div>

        <div className=" flex  justify-between items-center   bg-[#50506A]  text-[#E6E6FD]  ">
          <div className="inputIcons  ">
            <BsHandThumbsUp className="h-4 hvr-icon" />
            <p className="text-xs sm:text-base">Like</p>
          </div>

          <div className="inputIcons">
            <BiCommentDetail className="h-4 hvr-icon" />
            <p className="text-xs sm:text-base">Comment</p>
          </div>

          <div className="inputIcons">
            <BsShare className="h-4 hvr-icon" />
            <p className="text-xs sm:text-base">Share</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Post;
