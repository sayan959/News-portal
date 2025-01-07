import LatesNews from '@/components/ui/LatesNews/LatesNews';
import Sidebar from '@/components/ui/Sidebar/Sidebar';
import React from 'react';

const HomePage = () => {
  return (
    <div className='md:flex gap-4 justify-between px-3 md:px-12 py-4'>
      <div className=' md:w-2/3'>
        <LatesNews></LatesNews>
      </div>
      <div className=' md:w-1/3'>
        <Sidebar></Sidebar>
      </div>
    </div>
  );
};

export default HomePage;