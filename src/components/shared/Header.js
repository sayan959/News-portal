import React from 'react';
import logoMain from '@/assets/logo.png'
import Image from 'next/image';
import { showCurrenDate } from '@/utilities/getCurrenDate';

const Header = () => {
    const date = showCurrenDate()
    return (
        <div className='text-center my-6'>
            <Image src={logoMain} className='w-3/6 h-2/6 mx-auto' width={500} height={500} alt='news website'/>
            <p>Journalist Without Fear or Favour</p>
            <p>{date}</p>
        </div>
    );
};

export default Header;