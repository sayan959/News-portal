import { getSingleNews } from "@/utilities/getSingleNews";
import Image from "next/image";
import React from "react";

const NewsDetailsPage = async ({ params }) => {
  const { data: news } = await getSingleNews(params.newsId);
  return (
    <div className="grid grid-cols-2 gap-4 mx-auto px-16 my-10">
      <div className="">
        <figure>
          <Image
            className="w-full h-full"
            src={news?.image_url}
            alt="news image"
            width={500}
            height={500}
          ></Image>
        </figure>

        <div className="grid grid-cols-2 gap-4 mt-4 ">
          <figure>
            <Image
              className="w-full h-full"
              src={news?.thumbnail_url}
              alt="news image"
              width={500}
              height={500}
            ></Image>
          </figure>
          <figure>
            <Image
              className="w-full h-full"
              src={news?.thumbnail_url}
              alt="news image"
              width={500}
              height={500}
            ></Image>
          </figure>
        </div>
      </div>

      <div className="">
        <h2 className="text-xl font-bold">{news?.title}</h2>
        <div className="flex gap-3 my-5">
            <Image
                className="w-10 h-10 rounded-full"
                src={news?.author?.img}
                alt="news author"
                width={100}
                height={100}
            ></Image>
            <p className="my-auto">by {news.author.name} {news.author.published_date}</p>
        </div>
        <p className="text-justify whitespace-pre-line">{news.details}</p>
      </div>
    </div>
  );
};

export default NewsDetailsPage;
