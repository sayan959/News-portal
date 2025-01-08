import Link from 'next/link';
import React from 'react';

const NotFoundPage = () => {
    return (
        <div className="flex flex-col items-center justify-center h-screen bg-gray-100 text-center px-4">
        <h1 className="text-8xl md:text-9xl font-bold text-blue-500">404</h1>
        <h2 className="text-2xl md:text-3xl font-semibold mt-4 text-gray-800">
          Page Not Found
        </h2>
        <p className="text-gray-600 mt-2 text-base md:text-lg">
          Oops! The page you are looking for doesn`t exist or has been moved.
        </p>
        <Link href="/">
          <p className="mt-6 px-6 py-3 bg-blue-500 text-white text-sm md:text-lg rounded-md shadow hover:bg-blue-600 transition cursor-pointer">
            Back to Home
          </p>
        </Link>
      </div>
    );
};

export default NotFoundPage;