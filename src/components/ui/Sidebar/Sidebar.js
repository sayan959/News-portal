import Image from 'next/image';
import React from 'react';
import sidebarLastImg from '@/assets/qZone1.png'
import { getAllNews } from '@/utilities/getAllNews';

const Sidebar = async () => {

    const {data}= await getAllNews()
    return (
        <div>
         <div className="card bg-base-100  shadow-md">
                   <figure>
                     <Image className="w-full"
                       src={data[1].image_url}
                       alt="Shoes" width={600} height={800}
                     />
                   </figure>
                   <div className="card-body p-2">
                     <div>
                       <p className="my-1 bg-red-500 rounded-full px-2 py-1 text-white inline-block">{data[1]?.category}</p>
                     </div>
                     <h2 className="card-title text-xl">{data[1]?.title}</h2>
                     
                     <h3 className="text-xl font-semibold">by {data[1]?.author?.name} {data[1]?.author?.published_date}</h3>
                     <p>{data[1]?.details.length > 90 ? data[1].details.slice(0,90) + "..." : data[1].details }</p>
                   </div>
                 </div>

            {/* Side bar repeted items  */}
            {
                    data.slice(3,9).map(news => <div key={data._id} className="flex items-center mt-4 shadow-md">
                    
                        <Image className="w-16 h-10 md:w-24 md:h-20 object-cover rounded-md"
                          src={news.image_url}
                          alt="news image" width={100} height={100}
                        />
                    
                    <div className="card-body p-2">
                        
                        <h2 className="font-semibold text-sm md:text-xl">{news?.title.length > 45 ? news?.title.slice(0,45) + "..." : news?.title }</h2>
                        <p className='text-sm md:tex-md'>By {news?.author?.name} {news?.author?.published_date}</p>
                    </div>
                </div>)
                }
               

                <div className='mt-5'>
                    <Image src={sidebarLastImg} className='w-44 md:w-full mx-auto ' alt='news' height={1000} width={1000} />
                </div>
        </div>
    );
};

export default Sidebar;