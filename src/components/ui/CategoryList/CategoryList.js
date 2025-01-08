import { getAllCategories } from '@/utilities/getAllCategories';
import Link from 'next/link';
import React from 'react';

const CategoryList = async () => {
    const {data : categories} = await getAllCategories();
    return (
        <div className='p-5  bg-slate-300 shadow-2xl rounded-lg '>
            <h1 className='text-2xl font-semibold'>Categories</h1>
            <div className='divider'></div>
            {
                categories.map(category => <Link href={`/categories/news?category=${category.title.toLowerCase()}`} key={category._id}><button className='btn btn-outline block w-full my-3 '>{category.title}</button></Link>)
            }
        </div>
    );
};

export default CategoryList;