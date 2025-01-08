
import { getAllNews } from "@/utilities/getAllNews";
import Image from "next/image";
import React from "react";

const LatesNews = async () => {
  const {data} = await getAllNews();

  


  return (
    <div>
      {/* Main news */}
       <div className="card bg-base-100  shadow-xl">
          <figure>
            <Image className="w-full"
              src={data[0].image_url}
              alt="Shoes" width={600} height={800}
            />
          </figure>
          <div className="card-body p-2">
            <div>
              <p className="my-1 bg-red-500 rounded-full px-2 py-1 text-white inline-block">{data[0]?.category}</p>
            </div>
            <h2 className="card-title text-xl">{data[0]?.title}</h2>
            
            <h3 className="text-xl font-semibold">by {data[0]?.author?.name} {data[0]?.author?.published_date}</h3>
            <p>{data[0]?.details.length > 380 ? data[0].details.slice(0,380) + "..." : data[0].details }</p>
          </div>
        </div>

      {/* Sub news section 2 */}
      <div className="grid md:grid-cols-2 gap-5 mt-4">
        {
          data.slice(12,16).map(news => <div key={news._id} className="card bg-base-100  shadow-xl">
            <figure>
              <Image className="w-full h-56"
                src={news.image_url}
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
          </div>)
        }
        

       
      </div>
    </div>
  );
};

export default LatesNews;
