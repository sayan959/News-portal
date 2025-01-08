import CategoryList from '@/components/ui/CategoryList/CategoryList';
import React from 'react';

const CategoriesLayout = ({children}) => {
    return (
        <div className='md:flex gap-4 justify-between px-3 md:px-12 py-4'>
        <div className=' md:w-1/3'>
            <CategoryList></CategoryList>
        </div>
        <div className=' md:w-2/3'>
          {children}
        </div>
      </div>
    );
};

export default CategoriesLayout;