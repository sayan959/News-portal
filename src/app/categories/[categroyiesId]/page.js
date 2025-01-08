import { getCategoryNews } from '@/utilities/getCategoryNews';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const DynamicNewsPage =async ({searchParams}) => {
    const {data} = await getCategoryNews(searchParams.category)
    return (
        <div>
            <div className="grid md:grid-cols-2 gap-5">
                    {
                      data.map(news => <Link href={`/news/${news._id}`} key={news._id}>
                        <div  className="card bg-base-100  shadow-xl">
                            <figure>
                            <Image className="w-full h-56"
                                src={news?.image_url}
                                alt="news" width={500} height={500}
                            />
                            </figure>
                            <div className="card-body p-2">
                            <div>
                                <p className="my-1 bg-red-500 rounded-full px-2 py-1 text-white inline-block">{news.category}</p>
                            </div>
                            <h2 className="card-title text-xl">{news.title}</h2>
                            
                            <h3 className="text-xl font-semibold">by {news?.author?.name} {news?.author?.published_date}</h3>
                            <p>{news?.details.length > 110 ? news.details.slice(0,110) + "..." : news.details }</p>
                            </div>
                        </div>
                      </Link>)
                    }
                    
            
                   
                  </div>
        </div>
    );
};

export default DynamicNewsPage;