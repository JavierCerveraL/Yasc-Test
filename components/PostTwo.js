import Image from 'next/image';
import React from 'react';
import { BsHandThumbsUp, BsShare } from 'react-icons/bs';
import { BiCommentDetail } from 'react-icons/bi';
import Logo from './Logo';

function PostTwo() {
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
          Zombie ipsum reversus ab viral inferno, nam rick grimes malum cerebro.
          De carne lumbering animata corpora quaeritis. Summus brains sit​​,
          morbo vel maleficia? De apocalypsi gorger omero undead survivor dictum
          mauris. Hi mindless mortuis soulless creaturas, imo evil stalking
          monstra adventus resi dentevil vultus comedat cerebella viventium. Qui
          animated corpse, cricket bat max brucks terribilem incessu zomby. The
          voodoo sacerdos flesh eater, suscitat mortuos comedere carnem virus.
          Zonbi tattered for solum oculi eorum defunctis go lum cerebro. Nescio
          brains an Undead zombies. Sicut malus putrid voodoo horror. Nigh tofth
          eliv ingdead.
        </p>

        <div className="border-top-post mt-5 mb-1"></div>

        <div className=" flex  justify-between items-center   bg-[#50506A]  text-[#E6E6FD]  ">
          <div className="inputIcons  ">
            <BsHandThumbsUp className="h-4" />
            <p className="text-xs sm:text-base">Like</p>
          </div>

          <div className="inputIcons">
            <BiCommentDetail className="h-4" />
            <p className="text-xs sm:text-base">Comment</p>
          </div>

          <div className="inputIcons">
            <BsShare className="h-4" />
            <p className="text-xs sm:text-base">Share</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PostTwo;
