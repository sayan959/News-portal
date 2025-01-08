import Image from "next/image";
import React from "react";
import contactImg from '@/assets/contact.avif'

export const metadata = {
  title: "About Page | Meet Our Team who are expert for collecting news",
  description: "Meet Our Team who are expert for collecting news",
};

const About = () => {
  return (
    <div className="bg-gray-100 min-h-screen px-4 sm:px-8 lg:px-16 py-10">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-6">About Us</h1>
        <p className="text-lg text-gray-700 leading-relaxed">
          Welcome to <span className="font-semibold">The Dragon News</span>,
          your trusted source for the latest news, insights, and updates from
          around the world. We are committed to delivering accurate and unbiased
          information that keeps you informed and empowered in todays fast-paced
          world.
        </p>
      </div>

      <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Mission Section */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Our Mission
          </h2>
          <p className="text-gray-600 leading-relaxed">
            Our mission is to provide high-quality journalism that fosters
            understanding and encourages constructive dialogue. We believe in
            the power of news to bring positive change.
          </p>
        </div>

        {/* Vision Section */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Our Vision
          </h2>
          <p className="text-gray-600 leading-relaxed">
            To be a globally recognized platform for trustworthy news, inspiring
            a more informed and connected world through innovative storytelling
            and cutting-edge technology.
          </p>
        </div>
      </div>
    {/* information section  */}
      <div className="flex flex-col my-10 justify-center md:flex-row gap-10 ">
        <div className="">
          <Image
            className="cursor-pointer items-center mx-auto max-w-64 sm:max-w-[480px] rounded-3xl sm:rounded-s-full "
            src={contactImg}
            alt="news-Contact"
            width={500}
            height={500}
          />
        </div>
        <div className="flex flex-col justify-center items-start gap-6">
          <p className="font-semibold text-xl text-gray-600">Our Store</p>
          <p className="text-gray-500">
            54709 Willms Station <br /> London, UK
          </p>
          <p className="text-gray-500">
            Tel: (+88) 01889354418 <br /> Email: info@dragonnews.com
          </p>
          <p className="font-semibold text-xl text-gray-600">
            Careers at The Dragon News
          </p>
          <p className="text-gray-500">
            Learn more about our teams and job openings.
          </p>
          <button className="border border-blue-900 px-8 py-4 text-sm hover:bg-[#98DED9] hover:text-black  transition-all duration-500">
            Explor Jobs
          </button>
        </div>
      </div>

      {/* Meet our team section on going  */}
      <div className="mt-12">
        <h2 className="text-2xl font-semibold text-center text-gray-800 mb-8">
          Meet Our Team
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {/* Team Member */}
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <div className="w-24 h-24 mx-auto rounded-full bg-gray-200 mb-4"></div>
            <h3 className="text-lg font-semibold text-gray-800">John Doe</h3>
            <p className="text-sm text-gray-600">Editor-in-Chief</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <div className="w-24 h-24 mx-auto rounded-full bg-gray-200 mb-4"></div>
            <h3 className="text-lg font-semibold text-gray-800">Jane Smith</h3>
            <p className="text-sm text-gray-600">Senior Journalist</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <div className="w-24 h-24 mx-auto rounded-full bg-gray-200 mb-4"></div>
            <h3 className="text-lg font-semibold text-gray-800">
              Alex Johnson
            </h3>
            <p className="text-sm text-gray-600">Tech Reporter</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
