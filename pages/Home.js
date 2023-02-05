import Feed from '@/components/Feed';
import Navbar from '@/components/Navbar';
import Sidebar from '@/components/Sidebar';
import React from 'react';

function Home() {
  return (
    <div className="bg-[#13131C] h-auto min-h-fit  ">
      <Navbar />

      <main className="flex">
        <Sidebar className="shadow-md" />
        <Feed className="shadow-md" />
      </main>
    </div>
  );
}

export default Home;
