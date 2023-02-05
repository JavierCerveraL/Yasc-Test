import React from 'react';
import { BiHome, BiNews, BiTime, BiMailSend } from 'react-icons/bi';
import SidebarRow from './SidebarRow';

function Sidebar() {
  return (
    <div className="p-1   max-w-[200px] min-w-[50px] bg-[#50506A]  shadow-md ">
      <SidebarRow Icon={BiHome} title="Home" />
      <SidebarRow Icon={BiNews} title="News" />
      <SidebarRow Icon={BiTime} title="Upcoming Shifts " />
      <SidebarRow Icon={BiMailSend} title="Email" />
    </div>
  );
}

export default Sidebar;
