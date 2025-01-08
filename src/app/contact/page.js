import Image from 'next/image';
import React from 'react';
import contactImg from '@/assets/contact.avif'

const Contact = () => {
    
  return (
    <div className="bg-gray-100 text-gray-800">
      {/* Contact Information Section */}
      
      <div className='flex flex-col my-10 justify-center md:flex-row gap-10 '>
        <div className=''>
            <Image className='cursor-pointer items-center mx-auto max-w-64 sm:max-w-[480px] rounded-3xl sm:rounded-s-full ' src={contactImg} alt="news-Contact" width={500} height={500}/>
        </div>
        <div className='flex flex-col justify-center items-start gap-6'>
          <p className='font-semibold text-xl text-gray-600'>Our Store</p>
          <p className='text-gray-500'>54709 Willms Station <br/> London, UK</p>
          <p className='text-gray-500'>Tel: (+88) 01889354418 <br/> Email: info@dragonnews.com</p>
          <p className='font-semibold text-xl text-gray-600'>Careers at The Dragon News</p>
          <p className='text-gray-500'>Learn more about our teams and job openings.</p>
          <button className='border border-blue-900 px-8 py-4 text-sm hover:bg-[#98DED9] hover:text-black  transition-all duration-500'>Explor Jobs</button>
        </div>
      </div>
    

      {/* Contact Form Section */}
      <section className="py-12 px-4">
        <h2 className="text-3xl font-semibold text-center mb-6">Get in Touch</h2>
        <form className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-md">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="name" className="block text-lg font-medium">Name</label>
              <input type="text" id="name" className="w-full px-4 py-2 mt-2 border border-gray-300 rounded-lg" placeholder="Your Name" />
            </div>
            <div>
              <label htmlFor="email" className="block text-lg font-medium">Email</label>
              <input type="email" id="email" className="w-full px-4 py-2 mt-2 border border-gray-300 rounded-lg" placeholder="Your Email" />
            </div>
          </div>
          <div className="mt-6">
            <label htmlFor="message" className="block text-lg font-medium">Message</label>
            <textarea id="message" className="w-full px-4 py-2 mt-2 border border-gray-300 rounded-lg" rows="5" placeholder="Your Message"></textarea>
          </div>
          <button type="submit" className="mt-6 w-full bg-blue-600 text-white py-3 rounded-lg">Send Message</button>
        </form>
      </section>

    

     

     
    </div>
  );
};

export default Contact;
