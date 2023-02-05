import Image from 'next/image';
import React, { useRef } from 'react';
// import { icons } from 'react-icons';

import {
  BsFillCameraReelsFill,
  BsFillCameraFill,
  BsEmojiSmile,
} from 'react-icons/bs';
import Logo from './Logo';
function InputBox() {
  const sendPost = (e) => {
    e.preventDefault();
  };

  return (
    <div className="bg-[#50506A] p-2 rounded-2xl shadow-md text-[#A0A0C5] font-medium">
      <div className="flex space-x-4 p-4 items-center justify-center">
        <form className="flex flex-1 space-x-2">
          {/* <Image
            width={42}
            height={100}
            class="h-9 mt-1 gap-x-2 rounded-full"
            src="/../public/logoYASC.png"
            alt="logo"
          /> */}
          {/* <Logo /> */}
          <input
            className="rounded-full h-10 w-2 bg-[#50506A] border placeholder:text-xs 
             placeholder:relative placeholder:text-white overflow-y-visible flex-grow px-4 focus:outline-none text-white "
            type="text"
            placeholder="Post something here"
          />
          <button type="submit" onSubmit={sendPost} hidden>
            Submit
          </button>
        </form>
      </div>
      {/* uploads */}
      <div className="flex justify-evenly border-t-black    text-[#E6E6FD] ">
        {/*  Video*/}
        <div className="inputIcons ">
          <BsFillCameraReelsFill className="h-7 text-red-500" />
          <p className="text-xs sm:text-sm">Video</p>
        </div>
        {/* pic */}
        <div className="inputIcons focus:outline-none">
          <BsFillCameraFill className="h-7 text-green-400" />
          <p className="text-xs sm:text-sm">Picture</p>
        </div>
        {/* feeling */}
        <div className="inputIcons">
          <BsEmojiSmile className="h-7 text-yellow-300" />
          <p className="text-xs sm:text-sm">Feeling</p>
        </div>
      </div>
    </div>
  );
}

export default InputBox;
